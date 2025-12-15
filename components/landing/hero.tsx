import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

type HeroProps = {
  onOpenUpload?: () => void;
};

export default function Hero({ onOpenUpload }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* IG glow blobs */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[700px] w-[700px] ig-gradient rounded-full blur-3xl opacity-25" />
      <div className="pointer-events-none absolute -bottom-52 -right-52 h-[700px] w-[700px] ig-gradient rounded-full blur-3xl opacity-25" />

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground">
              <Zap className="h-4 w-4" />
              Upload, check, done
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              Find Instagram <span className="text-ig">unfollowers</span> <br />
            </h1>

            <p className="mt-5 text-lg text-muted-foreground">
              Download your Instagram export (.zip) from Account Center (Your information and permissions, then Export your information). See who unfollowed you, who doesn&apos;t follow back, and your mutuals in one simple view.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="ig-gradient text-white hover:opacity-90" onClick={onOpenUpload}>
                Upload my export <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how">See how it works</a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> No Instagram login needed
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Uses your Instagram data zip
              </span>
            </div>
          </div>

          {/* Mock UI card */}
          <div className="relative">
            <div className="absolute inset-0 ig-gradient blur-2xl opacity-20 rounded-3xl" />
            <div className="relative rounded-3xl border bg-background/70 backdrop-blur p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Your account</p>
                  <p className="font-semibold">@username</p>
                </div>
                <div className="h-10 w-10 rounded-full ig-gradient" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Stat title="Followers" value="12,480" />
                <Stat title="Following" value="1,102" />
                <Stat title="Unfollowers" value="27" highlight />
              </div>

              <div className="mt-6 space-y-3">
                <Row name="bintang" badge="Unfollower" />
                <Row name="fikri" badge="Fans" />
                <Row name="fauzan" badge="Mutual" />
              </div>

              <div className="mt-6 h-2 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full w-2/3 ig-gradient" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  title,
  value,
  highlight,
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-2xl border p-4 ${highlight ? "border-transparent border-ig" : ""}`}>
      <p className="text-xs text-muted-foreground">{title}</p>
      <p className={`mt-1 text-lg font-semibold ${highlight ? "text-ig" : ""}`}>{value}</p>
    </div>
  );
}

function Row({ name, badge }: { name: string; badge: string }) {
  const isHot = badge === "Unfollowed";
  return (
    <div className="flex items-center justify-between rounded-2xl border p-3">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-muted" />
        <div>
          <p className="text-sm font-medium">@{name}</p>
          <p className="text-xs text-muted-foreground">Tap to view</p>
        </div>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full border ${isHot ? "text-ig" : "text-muted-foreground"}`}>
        {badge}
      </span>
    </div>
  );
}
