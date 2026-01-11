import { Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-muted-foreground md:flex-row">
        <span className="flex flex-col items-center md:items-start leading-tight">
          <span className="font-medium text-foreground">Unfollowr</span>
          <span className="text-sm text-muted-foreground">
            Caseinn {currentYear}
          </span>
        </span>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">
            Not affiliated with Instagram. For personal insight only.
          </span>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Instagram"
            className="rounded-full border border-border/70 bg-background/70 p-2 transition hover:bg-accent/70"
          >
            <Instagram className="h-5 w-5" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/caseinn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub"
            className="rounded-full border border-border/70 bg-background/70 p-2 transition hover:bg-accent/70"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
