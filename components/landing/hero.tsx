import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

type Tone = "not-back" | "fans" | "mutuals" | "unfollowers";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="fade-rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold text-muted-foreground">
              <span className="tone-dot text-ig" />
              Browser-only clarity
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Your digital footprint, <span className="text-ig">clarified.</span>
            </h1>

            <p className="mt-5 text-lg text-muted-foreground">
              Upload the export zip from Instagram. Unfollowr reads two files, compares them instantly in your browser,
              and leaves nothing behind when you close the tab.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="ig-gradient text-white hover:opacity-90 shadow-lg" asChild>
                <Link href="/upload">
                  Upload your export <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/#flow">See the flow</a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> No login, no tracking
              </span>
              <span className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4" /> Runs locally in your browser
              </span>
            </div>
          </div>

          <div className="relative fade-rise stagger-2">
            <div className="lucid-border">
              <div className="lucid-panel p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Export summary</p>
                    <p className="font-semibold">@username</p>
                  </div>
                  <span className="tone-chip" data-tone="mutuals">
                    <span className="tone-dot" /> Local only
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Stat title="Not following back" value="142" tone="not-back" />
                  <Stat title="Fans" value="208" tone="fans" />
                  <Stat title="Mutuals" value="892" tone="mutuals" />
                  <Stat title="Followers" value="12,480" />
                </div>

                <div className="mt-6 space-y-3">
                  <Row name="bintang" badge="Not following back" tone="not-back" />
                  <Row name="fikri" badge="Fan" tone="fans" />
                  <Row name="fauzan" badge="Mutual" tone="mutuals" />
                </div>

                <div className="mt-6 h-2 w-full rounded-full bg-muted/60 overflow-hidden">
                  <div className="h-full w-2/3 ig-gradient" />
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Preview only. Real results appear after upload.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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

function Row({
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
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full border border-border/70 bg-background/60" />
        <div>
          <p className="text-sm font-medium">@{name}</p>
          <p className="text-xs text-muted-foreground">Tap to view</p>
        </div>
      </div>
      <span className="tone-chip" data-tone={tone}>
        <span className="tone-dot" />
        {badge}
      </span>
    </div>
  );
}
