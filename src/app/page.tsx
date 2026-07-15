import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto lg:border-x border-white bg-[#0A0A0A] flex flex-col">
      <Navbar />
      <Hero />
      <Intro />
      <Works />
      <Skills />
      <CaseStudy />
      <Contact />
    </main>
  );
}
