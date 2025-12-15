import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import SocialProof from "@/components/landing/social-proof";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Privacy from "@/components/landing/privacy";
import Faq from "@/components/landing/faq";
import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Privacy />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
