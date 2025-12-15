"use client";

import { ExternalLink } from "lucide-react";

export function PersonRow({ name, badge }: { name: string; badge: string }) {
  const isHot = badge === "Unfollowed" || badge === "Not following back";
  return (
    <div className="flex items-center justify-between rounded-2xl border p-3 bg-background/60">
      <div className="flex items-center gap-3 min-w-0">
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">@{name}</p>
          <a
            className="text-xs text-muted-foreground inline-flex items-center gap-1 hover:underline"
            href={`https://instagram.com/${encodeURIComponent(name)}`}
            target="_blank"
            rel="noreferrer"
          >
            View profile <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      <span className={`text-xs px-2 py-1 rounded-full border ${isHot ? "text-ig border-ig/40" : "text-muted-foreground"}`}>
        {badge}
      </span>
    </div>
  );
}
