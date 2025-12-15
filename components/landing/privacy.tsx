import { ShieldCheck } from "lucide-react";

const points = [
  { title: "No Instagram password asked", body: "Bring the Export your information zip from Account Center. Nothing else." },
  { title: "You choose when to upload", body: "Keep your export on your device until you drop it in to check results." },
  { title: "For personal insight", body: "This is for your own account review and is not connected to Instagram." },
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Privacy stays <span className="text-ig">simple</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          We use the Instagram export you already have so you stay in control.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border p-6">
              <div className="mx-auto w-fit text-ig">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="mt-3 font-medium">{p.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
