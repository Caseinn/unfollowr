"use client";

import { useMemo, useState } from "react";
import { UploadCard } from "@/components/upload/file-upload";
import { SummaryCards } from "@/components/upload/summary-cards";
import { PeopleTabs } from "@/components/upload/people-tabs";
import { readIGFromZip, usernameFromZipName } from "@/lib/zip";
import {
  extractFollowersUsernames,
  extractFollowingUsernames,
  computeResults,
  type ParsedIG,
} from "@/lib/parse";

export default function Page() {
  const [zipFile, setZipFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [parsed, setParsed] = useState<ParsedIG | null>(null);

  const results = useMemo(() => (parsed ? computeResults(parsed) : null), [parsed]);

  const onReset = () => {
    setZipFile(null);
    setParsed(null);
    setError(null);
    setLoading(false);
  };

  const onAnalyze = async () => {
    if (!zipFile) return;

    setLoading(true);
    setError(null);
    setParsed(null);

    try {
      const { followersJson, followingJson } = await readIGFromZip(zipFile);

      const followers = extractFollowersUsernames(followersJson);
      const following = extractFollowingUsernames(followingJson);

      if (followers.length === 0) throw new Error("Followers kebaca 0. Cek followers_1.json formatnya.");
      if (following.length === 0)
        throw new Error("Following kebaca 0. following.json harus ada relationships_following[].title.");

      const username = usernameFromZipName(zipFile.name) ?? "username";

      setParsed({ username, followers, following });
    } catch (e: any) {
      setError(e?.message ?? "Gagal memproses ZIP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 space-y-6">
      <UploadCard
        zipFile={zipFile}
        setZipFile={setZipFile}
        onAnalyze={onAnalyze}
        onReset={onReset}
        loading={loading}
        error={error}
      />

      {parsed && results && (
        <>
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
        </>
      )}
    </main>
  );
}
