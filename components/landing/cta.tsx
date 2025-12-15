import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl ig-gradient p-[1px]">
          <div className="rounded-3xl bg-background px-8 py-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to find your <span className="text-ig">unfollowers</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start with a clean, modern dashboard experience.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button size="lg" className="ig-gradient text-white">Start Free</Button>
              <Button size="lg" variant="outline">View Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
