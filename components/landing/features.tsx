import { Card, CardContent } from "@/components/ui/card";
import { Shield, UserMinus, Users, Sparkles } from "lucide-react";

const items = [
  { icon: UserMinus, title: "Unfollowers", desc: "See who unfollowed you since last check." },
  { icon: Users, title: "Not Following Back", desc: "Find accounts you follow that don’t follow you back." },
  { icon: Sparkles, title: "Clean Insights", desc: "Minimal dashboard with the stats you actually need." },
  { icon: Shield, title: "Privacy-first", desc: "No password storage. No auto-actions." },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Everything you need, <span className="text-ig">nothing extra</span>
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Built for speed + trust with Instagram-style aesthetics.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Card key={it.title} className="group relative overflow-hidden">
                <div className="absolute inset-0 ig-gradient opacity-0 group-hover:opacity-10 transition" />
                <CardContent className="p-8">
                  <div className="text-ig">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
                  <p className="mt-2 text-muted-foreground">{it.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
