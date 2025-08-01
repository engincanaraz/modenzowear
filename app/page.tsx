import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { CategoriesSection } from "@/components/categories-section";
import { WholesaleSection } from "@/components/wholesale-section";
import { FeaturedProductsSection } from "@/components/featured-products-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MODENZO WEAR",
            "url": "https://modenzowear.com",
            "description": "Premium erkek giyim mağazası. Polo t-shirt, gömlek, pantolon, ayakkabı, aksesuar ve parfüm.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://modenzowear.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "MODENZO WEAR",
              "logo": {
                "@type": "ImageObject",
                "url": "https://modenzowear.com/images/logo.png"
              }
            }
          })
        }}
      />
      
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
      <WhatsAppButton />
    </>
  );
}