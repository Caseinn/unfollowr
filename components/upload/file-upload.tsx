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
    <Card className="rounded-3xl border bg-background/80 backdrop-blur shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle>Upload your Instagram export (.zip)</CardTitle>
        <p className="text-sm text-muted-foreground">
          Use the Export your information zip from Account Center, then run the check here.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          type="file"
          accept=".zip"
          className="rounded-2xl cursor-pointer"
          onChange={(e) => setZipFile(e.target.files?.[0] ?? null)}
        />

        <div className="flex flex-wrap gap-2">
          <Button
            className="ig-gradient text-white hover:opacity-90"
            onClick={onAnalyze}
            disabled={!zipFile || loading}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </Button>

          <Button variant="outline" onClick={onReset} disabled={loading}>
            Reset
          </Button>
        </div>

        <div className="text-xs text-muted-foreground rounded-2xl border bg-muted/40 p-3">
          Expected ZIP paths:
          <div className="mt-1 font-mono text-foreground/80">
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
