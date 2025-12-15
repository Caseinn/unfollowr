"use client";

function Stat({ title, value, highlight }: { title: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-4 ${highlight ? "border-ig" : ""}`}>
      <p className="text-xs text-muted-foreground">{title}</p>
      <p className={`mt-1 text-lg font-semibold ${highlight ? "text-ig" : ""}`}>{value}</p>
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
    <div className="rounded-3xl border bg-background/70 backdrop-blur p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Your account</p>
          <p className="font-semibold">@{username}</p>
        </div>
        <div className="h-10 w-10 rounded-full ig-gradient" />
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Stat title="Followers" value={followers.toLocaleString()} />
        <Stat title="Following" value={following.toLocaleString()} />
        <Stat title="Unfollowers" value={notBack.toLocaleString()} highlight />
        <Stat title="Fans" value={fans.toLocaleString()} />
      </div>

      <div className="mt-3 text-xs text-muted-foreground">
        Mutuals: <span className="font-medium text-foreground">{mutuals.toLocaleString()}</span>
      </div>
    </div>
  );
}
