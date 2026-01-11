import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex flex-1 items-center justify-center px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center text-center">
          <span className="tone-chip" data-tone="unfollowers">
            <span className="tone-dot" /> 404
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold">
            This page drifted away.
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            The link you followed does not exist. Head back to the home page or
            open your export to keep going.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button className="ig-gradient text-white hover:opacity-90 shadow-lg" asChild>
              <Link href="/">Return home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/upload">Go to upload</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
