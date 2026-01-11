"use client";

import { useMemo, useState } from "react";
import { UploadCard } from "@/components/upload/file-upload";
import { SummaryCards } from "@/components/upload/summary-cards";
import { PeopleTabs } from "@/components/upload/people-tabs";
import { MAX_ZIP_BYTES, readIGFromZip, usernameFromZipName } from "@/lib/zip";
import {
  computeResults,
  extractFollowersUsernames,
  extractFollowingUsernames,
  type ParsedIG,
} from "@/lib/parse";

export default function UploadWorkspace() {
  const [zipFile, setZipFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [parsed, setParsed] = useState<ParsedIG | null>(null);

  const zipTypes = new Set(["application/zip", "application/x-zip-compressed"]);

  const results = useMemo(() => (parsed ? computeResults(parsed) : null), [parsed]);

  const onReset = () => {
    setZipFile(null);
    setParsed(null);
    setError(null);
    setLoading(false);
  };

  const onAnalyze = async () => {
    if (!zipFile) return;

    const lowerName = zipFile.name.toLowerCase();
    if (!lowerName.endsWith(".zip")) {
      setError("Invalid file type. Please upload a .zip export.");
      return;
    }
    if (zipFile.type && !zipTypes.has(zipFile.type)) {
      setError("Invalid file type. Please upload a .zip export.");
      return;
    }
    if (zipFile.size === 0) {
      setError("File is empty. Please upload a valid export.");
      return;
    }
    if (zipFile.size > MAX_ZIP_BYTES) {
      setError("File too large. Please upload a smaller export.");
      return;
    }

    setLoading(true);
    setError(null);
    setParsed(null);

    try {
      const { followersJson, followingJson } = await readIGFromZip(zipFile);

      const followers = extractFollowersUsernames(followersJson);
      const following = extractFollowingUsernames(followingJson);

      if (followers.length === 0) {
        throw new Error(
          "Followers list is empty. Make sure followers_1.json is in the export."
        );
      }
      if (following.length === 0) {
        throw new Error(
          "Following list is empty. following.json should include relationships_following[].title."
        );
      }

      const username = usernameFromZipName(zipFile.name) ?? "username";

      setParsed({ username, followers, following });
    } catch (e: unknown) {
      const message =
        e instanceof Error
          ? e.message
          : "Could not process the ZIP. Please check the export file.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[360px,1fr]">
      <UploadCard
        zipFile={zipFile}
        setZipFile={setZipFile}
        onAnalyze={onAnalyze}
        onReset={onReset}
        loading={loading}
        error={error}
      />

      <div className="lucid-panel p-5 min-h-[320px]">
        {parsed && results ? (
          <div className="space-y-4">
            <SummaryCards
              username={parsed.username}
              followers={parsed.followers.length}
              following={parsed.following.length}
              notBack={results.notFollowingBack.length}
              fans={results.fans.length}
              mutuals={results.mutuals.length}
            />
            <PeopleTabs
              notBack={results.notFollowingBack}
              fans={results.fans}
              mutuals={results.mutuals}
            />
          </div>
        ) : (
          <div className="flex h-full items-center rounded-2xl border border-dashed border-border/70 bg-background/60 p-6 text-sm text-muted-foreground">
            Upload and analyze to see counts and people lists here.
          </div>
        )}
      </div>
    </div>
  );
}
