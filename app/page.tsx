import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Story from "@/components/landing/social-proof";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Privacy from "@/components/landing/privacy";
import Footer from "@/components/landing/footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Features />
      <HowItWorks />
      <Privacy />
      <Footer />
    </main>
  );
}
