"use client";

type Tone = "not-back" | "fans" | "mutuals" | "unfollowers";

function Stat({
  title,
  value,
  tone,
}: {
  title: string;
  value: string;
  tone?: Tone;
}) {
  return (
    <div className="stat-card" data-tone={tone}>
      <p className="text-xs text-muted-foreground">{title}</p>
      <p className="stat-value mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}

export function SummaryCards({
  username,
  followers,
  following,
  notBack,
  fans,
  mutuals,
}: {
  username: string;
  followers: number;
  following: number;
  notBack: number;
  fans: number;
  mutuals: number;
}) {
  return (
    <div className="lucid-panel p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Your account</p>
          <p className="font-semibold">@{username}</p>
        </div>
        <span className="tone-chip" data-tone="mutuals">
          <span className="tone-dot" /> Local only
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat title="Followers" value={followers.toLocaleString()} />
        <Stat title="Following" value={following.toLocaleString()} />
        <Stat title="Not following back" value={notBack.toLocaleString()} tone="not-back" />
        <Stat title="Fans" value={fans.toLocaleString()} tone="fans" />
      </div>

      <div className="mt-3 text-xs text-muted-foreground">
        Mutuals:{" "}
        <span className="font-medium text-[var(--tone-mutuals)]">{mutuals.toLocaleString()}</span>
      </div>
    </div>
  );
}

