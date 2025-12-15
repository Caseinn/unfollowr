import { Button } from "@/components/ui/button";

type NavbarProps = {
  onOpenUpload?: () => void;
};

export default function Navbar({ onOpenUpload }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full ig-gradient" />
          <span className="font-semibold">Unfollowr</span>
          <span className="text-sm text-muted-foreground">for Instagram</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#privacy" className="hover:text-foreground">Privacy</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button className="ig-gradient text-white hover:opacity-90" onClick={onOpenUpload}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
