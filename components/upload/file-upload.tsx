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
    <Card className="rounded-3xl border bg-background/70 backdrop-blur shadow-sm">
      <CardHeader>
        <CardTitle>Upload your Instagram export (.zip)</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input type="file" accept=".zip" onChange={(e) => setZipFile(e.target.files?.[0] ?? null)} />

        <div className="flex flex-wrap gap-2">
          <Button
            className="rounded-full ig-gradient text-white hover:opacity-90"
            onClick={onAnalyze}
            disabled={!zipFile || loading}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </Button>

          <Button variant="outline" className="rounded-full" onClick={onReset} disabled={loading}>
            Reset
          </Button>
        </div>

        <div className="text-xs text-muted-foreground">
          Expected ZIP paths:
          <div className="mt-1 font-mono">
            connections/followers_and_following/followers_1.json
            <br />
            connections/followers_and_following/following.json
          </div>
        </div>

        {zipFile && <p className="text-xs text-muted-foreground">Selected: {zipFile.name}</p>}
        {error && <p className="text-sm text-red-500">{error}</p>}
      </CardContent>
    </Card>
  );
}
