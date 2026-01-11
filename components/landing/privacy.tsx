import { ShieldCheck } from "lucide-react";

const points = [
  {
    title: "Runs only in your browser",
    body: "Your export never leaves your device. All parsing happens locally.",
  },
  {
    title: "No login, no tracking",
    body: "Unfollowr does not ask for credentials and does not monitor your activity.",
  },
  {
    title: "Disappears when you close the tab",
    body: "Close the page and everything resets. No data stays behind.",
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        <div>
          <p className="text-sm text-muted-foreground">Privacy by design</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Nothing leaves your browser.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Unfollowr is deliberately simple: a local comparison tool with zero server calls for your data.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="tone-chip" data-tone="mutuals">
              <span className="tone-dot" /> Privacy-first
            </span>
            <span className="tone-chip" data-tone="mutuals">
              <span className="tone-dot" /> Ephemeral
            </span>
          </div>
        </div>

        <div className="grid gap-4">
          {points.map((point, idx) => (
            <div key={point.title} className={`lucid-panel p-6 fade-rise stagger-${idx + 1}`}>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-ig">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">{point.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{point.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

