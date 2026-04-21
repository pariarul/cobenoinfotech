import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeServe from "@/components/WhoWeServe";
import ClientLogos from "@/components/ClientLogos";
import Process from "@/components/Process";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900 pb-32 lg:pb-0">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <WhatWeDo />
      <Process />
      <Projects />
      <Services />
      <WhoWeServe />
      <ClientLogos />
      <CallToAction />
      <Footer />
    </main>
  );
}
