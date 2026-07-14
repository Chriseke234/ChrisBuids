"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between border-b border-white p-6 md:p-12 overflow-hidden bg-[#0A0A0A]">
      {/* Grid Pattern Background for tech texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* TOP BAR */}
      <div className="relative z-10 flex justify-between items-center w-full">
        {/* Left Logo */}
        <div className="flex items-center space-x-3">
          {/* Asterisk SVG */}
          <svg
            className="w-6 h-6 text-[#39FF6A] animate-spin-slow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
          </svg>
          <span className="font-mono text-xs font-bold tracking-widest text-[#FFFFFF] uppercase">
            CHRISBUILDS <span className="text-zinc-500 font-normal">//</span> AI WEB & PRODUCT DESIGNER
          </span>
        </div>

        {/* Right Action Button */}
        <a
          href="#contact"
          onClick={scrollToContact}
          className="group relative flex items-center justify-center w-12 h-12 bg-transparent border border-white hover:bg-[#39FF6A] hover:border-[#39FF6A] transition-all duration-300 ease-out"
          aria-label="Contact Chris"
        >
          <svg
            className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>

      {/* MIDDLE - MASSIVE DISPLAY HEADLINE */}
      <div className="relative z-10 my-auto py-12">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black tracking-tighter text-[13vw] sm:text-[14vw] md:text-[15vw] leading-[0.85] text-white uppercase select-none"
          >
            PORTFOLIO
          </motion.h1>
        </div>
      </div>

      {/* BOTTOM - INTRO + BARCODE */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full">
        {/* Left spacer / decorative info */}
        <div className="md:col-span-6 flex items-center space-x-6 text-[#39FF6A] font-mono text-xs">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF6A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#39FF6A]"></span>
          </span>
          <span className="tracking-widest uppercase">AVAILABLE FOR WORK // NIGERIA</span>
        </div>

        {/* Right Info Box + Barcode */}
        <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-end justify-end space-y-4 sm:space-y-0 sm:space-x-6 md:text-right">
          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl font-mono text-zinc-300 max-w-sm leading-snug md:text-right text-left"
          >
            I help founders turn ideas into scalable, conversion-focused products.
          </motion.p>

          {/* Decorative Vertical Barcode */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.6, scaleY: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="origin-bottom hidden sm:block"
          >
            <svg
              className="w-20 h-16 text-white"
              viewBox="0 0 100 80"
              fill="currentColor"
            >
              {/* Varying width bars for high-contrast tech look */}
              <rect x="0" y="0" width="2" height="80" />
              <rect x="4" y="0" width="4" height="80" />
              <rect x="11" y="0" width="1" height="80" />
              <rect x="14" y="0" width="2" height="80" />
              <rect x="18" y="0" width="6" height="80" />
              <rect x="26" y="0" width="1" height="80" />
              <rect x="29" y="0" width="3" height="80" />
              <rect x="34" y="0" width="8" height="80" />
              <rect x="44" y="0" width="2" height="80" />
              <rect x="48" y="0" width="1" height="80" />
              <rect x="51" y="0" width="4" height="80" />
              <rect x="57" y="0" width="2" height="80" />
              <rect x="61" y="0" width="5" height="80" />
              <rect x="68" y="0" width="1" height="80" />
              <rect x="71" y="0" width="7" height="80" />
              <rect x="80" y="0" width="3" height="80" />
              <rect x="85" y="0" width="1" height="80" />
              <rect x="88" y="0" width="4" height="80" />
              <rect x="94" y="0" width="2" height="80" />
              <rect x="98" y="0" width="2" height="80" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
