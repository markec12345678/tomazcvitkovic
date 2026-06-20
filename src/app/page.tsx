import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { Process } from "@/components/site/process";
import { Gallery } from "@/components/site/gallery";
import { Testimonials } from "@/components/site/testimonials";
import { QuoteCalculator } from "@/components/site/quote-calculator";
import { QuoteForm } from "@/components/site/quote-form";
import { Tips } from "@/components/site/tips";
import { FAQ } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Process />
        <Gallery />
        <Testimonials />
        <QuoteCalculator />
        <Tips />
        <QuoteForm />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
