"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function UploadCard({
  zipFile,
  setZipFile,
  onAnalyze,
  onReset,
  loading,
  error,
}: {
  zipFile: File | null;
  setZipFile: (f: File | null) => void;
  onAnalyze: () => void;
  onReset: () => void;
  loading: boolean;
  error: string | null;
}) {
  return (
    <Card className="border-border/70 bg-background/70">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl">Upload your Instagram export</CardTitle>
        <p className="text-sm text-muted-foreground">
          Drop the Export your information zip from Account Center. Everything stays on your device.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          type="file"
          accept=".zip"
          className="cursor-pointer"
          onChange={(e) => setZipFile(e.target.files?.[0] ?? null)}
        />

        <div className="flex flex-wrap gap-2">
          <Button
            className="ig-gradient text-white hover:opacity-90 shadow-lg"
            onClick={onAnalyze}
            disabled={!zipFile || loading}
          >
            {loading ? "Analyzing..." : "Analyze export"}
          </Button>

          <Button variant="outline" onClick={onReset} disabled={loading}>
            Reset
          </Button>
        </div>

        <div className="rounded-2xl border border-dashed border-border/70 bg-background/70 p-3 text-xs text-muted-foreground">
          Expected ZIP paths:
          <div className="mt-1 font-mono text-foreground/80 break-all">
            connections/followers_and_following/followers_1.json
            <br />
            connections/followers_and_following/following.json
          </div>
        </div>

        {zipFile && <p className="text-xs text-muted-foreground">Selected: {zipFile.name}</p>}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </CardContent>
    </Card>
  );
}

