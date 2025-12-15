"use client";

import { useState } from "react";
import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import SocialProof from "@/components/landing/social-proof";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Privacy from "@/components/landing/privacy";
import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";
import { UploadDialog } from "@/components/upload/upload-dialog";

export default function Page() {
  const [uploadOpen, setUploadOpen] = useState(false);

  const openUpload = () => setUploadOpen(true);

  return (
    <>
      <UploadDialog open={uploadOpen} onOpenChange={setUploadOpen} />
      <main className="min-h-screen bg-background">
        <Navbar onOpenUpload={openUpload} />
        <Hero onOpenUpload={openUpload} />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Privacy />
        <Cta onOpenUpload={openUpload} />
        <Footer />
      </main>
    </>
  );
}
