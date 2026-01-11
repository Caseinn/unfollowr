const items = [
  {
    tone: "not-back",
    title: "Not Following Back",
    desc: "Accounts you follow who do not follow you back.",
  },
  {
    tone: "fans",
    title: "Fans",
    desc: "People who follow you, but you do not follow them.",
  },
  {
    tone: "mutuals",
    title: "Mutuals",
    desc: "The balanced list of people you follow each other.",
  },
] as const;

export default function Features() {
  return (
    <section id="lenses" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Category coding</p>
            <h2 className="text-3xl md:text-4xl font-bold">Three lenses, one export.</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Each group is color-coded so you can scan fast, then drill into the usernames that matter.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <div
              key={it.title}
              className={`lucid-panel p-6 md:p-7 fade-rise stagger-${idx + 1}`}
            >
              <div className="tone-chip" data-tone={it.tone}>
                <span className="tone-dot" /> {it.title}
              </div>
              <div className="mt-4 h-1 w-10 rounded-full tone-bar" data-tone={it.tone} />
              <p className="mt-4 text-lg font-semibold">{it.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

