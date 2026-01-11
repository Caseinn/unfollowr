"use client";

import { ExternalLink } from "lucide-react";

type Tone = "not-back" | "fans" | "mutuals";

export function PersonRow({
  name,
  badge,
  tone,
}: {
  name: string;
  badge: string;
  tone: Tone;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 p-3">
      <div className="flex min-w-0 items-center gap-3">
        <div className="h-9 w-9 rounded-full border border-border/70 bg-background/60" />
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">@{name}</p>
          <a
            className="text-xs text-muted-foreground inline-flex items-center gap-1 hover:underline"
            href={`https://instagram.com/${encodeURIComponent(name)}`}
            target="_blank"
            rel="noreferrer"
          >
            Open profile <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      <span className="tone-chip" data-tone={tone}>
        <span className="tone-dot" />
        {badge}
      </span>
    </div>
  );
}

