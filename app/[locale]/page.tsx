import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { CategoriesSection } from "@/components/categories-section";
import { WholesaleSection } from "@/components/wholesale-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col relative">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CategoriesSection />
        <WholesaleSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />

    </>
  );
}
