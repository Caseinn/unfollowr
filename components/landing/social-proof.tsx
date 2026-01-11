import { FileText } from "lucide-react";

const files = [
  {
    label: "followers_1.json",
    path: "connections/followers_and_following/followers_1.json",
    desc: "Everyone who follows you.",
  },
  {
    label: "following.json",
    path: "connections/followers_and_following/following.json",
    desc: "Everyone you follow.",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Unfollowr reads exactly two files from your export.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Two files in. Clarity out.</h2>
          <p className="text-muted-foreground">
            Your data stays with you. We open the follower and following lists, compute the differences, and ignore
            everything else in the archive.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="tone-chip" data-tone="mutuals">
              <span className="tone-dot" /> No login
            </span>
            <span className="tone-chip" data-tone="mutuals">
              <span className="tone-dot" /> No tracking
            </span>
            <span className="tone-chip" data-tone="mutuals">
              <span className="tone-dot" /> Local only
            </span>
          </div>
        </div>

        <div className="lucid-border fade-rise stagger-1">
          <div className="lucid-panel p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Read only</p>
            <div className="mt-4 space-y-3">
              {files.map((file) => (
                <div key={file.label} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-ig">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{file.label}</p>
                      <p className="mt-1 text-xs font-mono text-muted-foreground break-all">{file.path}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{file.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-dashed border-border/80 bg-background/70 p-4 text-xs text-muted-foreground">
              Everything else stays untouched in your archive.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

