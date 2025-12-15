import { Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          © {currentYear}, Developed by{" "}
          <span className="font-medium text-foreground">Caseinn</span>.
        </span>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">
            Not affiliated with Instagram. For personal insight only.
          </span>

          <a
            href="https://github.com/caseinn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub"
            className="p-2 rounded-full hover:bg-muted transition"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
