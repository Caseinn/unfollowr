import { Card, CardContent } from "@/components/ui/card";
import { Shield, UserMinus, Users, Sparkles } from "lucide-react";

const items = [
  { icon: UserMinus, title: "Unfollowers", desc: "Upload the Export your information zip to see who dropped off." },
  { icon: Users, title: "Not Following Back", desc: "Spot accounts you follow who do not follow you." },
  { icon: Sparkles, title: "Mutuals you like", desc: "Keep the people who follow you back front and center." },
  { icon: Shield, title: "No password needed", desc: "We only use the Instagram data zip you provide." },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Everything runs from <span className="text-ig">your export</span>
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Use the official Instagram export you download from Account Center.
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
