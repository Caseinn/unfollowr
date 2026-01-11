import type { Metadata } from "next";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import UploadWorkspace from "@/components/upload/upload-workspace";

export const metadata: Metadata = {
  title: "Upload Export | Unfollowr",
  description:
    "Upload your Instagram export zip to see unfollowers, not following back, and mutuals instantly in your browser.",
  alternates: {
    canonical: "/upload",
  },
  openGraph: {
    title: "Upload Export | Unfollowr",
    description:
      "Upload your Instagram export zip to see unfollowers, not following back, and mutuals instantly in your browser.",
    type: "website",
    url: "/upload",
    images: [
      {
        url: "/og-images.webp",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upload Export | Unfollowr",
    description:
      "Upload your Instagram export zip to see unfollowers, not following back, and mutuals instantly in your browser.",
    images: ["/og-images.webp"],
  },
};

export default function UploadPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 pt-16 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Upload workspace</p>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold">Analyze your Instagram export.</h1>
              <p className="mt-3 text-muted-foreground">
                Drop your zip below. We parse the follower and following lists locally and show the results instantly.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="tone-chip" data-tone="mutuals">
                <span className="tone-dot" /> Local only
              </span>
              <span className="tone-chip" data-tone="mutuals">
                <span className="tone-dot" /> No login
              </span>
              <span className="tone-chip" data-tone="mutuals">
                <span className="tone-dot" /> No tracking
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <UploadWorkspace />
      </section>

      <Footer />
    </main>
  );
}
