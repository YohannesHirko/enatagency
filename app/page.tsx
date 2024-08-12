import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Service from "@/components/Service";
import Supporter from "@/components/Supporter";

export default function Home() {
  return (
    <div className="">
      <Hero autoSlide = {true} />
      <About />
      <Service />
      <Features />
      <HowItWorks />
      <Achievement />
      <FAQ />
      <Supporter />
      <div className="py-2 lg:py-4 xl:py-8">
        <Contact />
      </div>
    </div>
  );
}
