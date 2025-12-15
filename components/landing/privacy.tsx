import { ShieldCheck } from "lucide-react";

export default function Privacy() {
  return (
    <section id="privacy" className="py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Privacy is <span className="text-ig">non-negotiable</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          This landing is designed to look trustworthy because the product must be.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "No password storage",
            "No auto-like/follow actions",
            "Session-only data (delete after)",
          ].map((t) => (
            <div key={t} className="rounded-2xl border p-6">
              <div className="mx-auto w-fit text-ig">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="mt-3 font-medium">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We only use what’s necessary to compute results.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
