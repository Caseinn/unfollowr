"use client";

import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

type UploadDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
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

      if (followers.length === 0)
        throw new Error("Followers list is empty. Make sure followers_1.json is in the export.");
      if (following.length === 0)
        throw new Error("Following list is empty. following.json should include relationships_following[].title.");

      const username = usernameFromZipName(zipFile.name) ?? "username";

      setParsed({ username, followers, following });
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Could not process the ZIP. Please check the export file.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      onReset();
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle>Check your unfollowers</DialogTitle>
          <DialogDescription>
            Upload the Export your information zip from Instagram to see unfollowers, non-mutuals, and mutuals.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 lg:grid-cols-[360px,1fr]">
          <UploadCard
            zipFile={zipFile}
            setZipFile={setZipFile}
            onAnalyze={onAnalyze}
            onReset={onReset}
            loading={loading}
            error={error}
          />

          <div className="rounded-3xl border bg-background/70 backdrop-blur p-5 shadow-sm min-h-[320px]">
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
              <div className="h-full rounded-2xl border bg-muted/30 p-6 text-sm text-muted-foreground flex items-center">
                After you upload and analyze, you&apos;ll see your counts and people lists here.
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
