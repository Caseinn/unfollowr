export default function SocialProof() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <p className="text-sm text-muted-foreground">
          Trusted by creators & teams who want a clean follower list
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {["Creator", "Agency", "Student", "Brand"].map((x) => (
            <div key={x} className="rounded-2xl border bg-background p-4 text-sm">
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
