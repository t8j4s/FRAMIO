import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 pb-24 flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-32 sm:mt-36 flex flex-col gap-12 w-full">
        <Hero />
        <Features />
        <div id="services">
          <Services />
        </div>
        <Process />
        <div id="pricing">
          <Pricing />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
