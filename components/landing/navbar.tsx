import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Unfollowr logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <div>
            <p className="font-semibold font-display">Unfollowr</p>
            <p className="text-xs text-muted-foreground">Instagram export clarity</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/#story" className="hover:text-foreground">Story</a>
          <a href="/#lenses" className="hover:text-foreground">Lenses</a>
          <a href="/#flow" className="hover:text-foreground">Flow</a>
          <a href="/#privacy" className="hover:text-foreground">Privacy</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button className="ig-gradient text-white hover:opacity-90 shadow-lg" asChild>
            <Link href="/upload">Upload zip</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
