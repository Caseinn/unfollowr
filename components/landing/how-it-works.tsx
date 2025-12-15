import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { n: "01", title: "Connect", desc: "Sign in (or upload export) to start analysis." },
  { n: "02", title: "Analyze", desc: "We compare followers vs following & deltas." },
  { n: "03", title: "Results", desc: "Unfollowers, non-mutuals, and clean stats." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How it <span className="text-ig">works</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.n} className="relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-40 w-40 ig-gradient rounded-full blur-2xl opacity-20" />
              <CardContent className="p-8">
                <p className="text-sm text-muted-foreground">{s.n}</p>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
