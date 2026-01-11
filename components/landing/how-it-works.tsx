const steps = [
  {
    n: "01",
    title: "Request the zip",
    desc: "In Instagram settings, open Account Center and request Export your information.",
  },
  {
    n: "02",
    title: "Download it",
    desc: "Save the zip to your device once the email arrives and the download is ready.",
  },
  {
    n: "03",
    title: "Upload and view",
    desc: "Drop the zip here. Unfollowr compares the two files and shows your lists instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="flow" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">The flow</p>
            <h2 className="text-3xl md:text-4xl font-bold">Three beats to clarity.</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Request, download, upload. The rest happens in your browser, in seconds.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-border/70 md:block" />
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, idx) => (
              <li key={step.n} className={`lucid-panel p-6 md:p-7 fade-rise stagger-${idx + 1}`}>
                <span className="step-chip">{step.n}</span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

