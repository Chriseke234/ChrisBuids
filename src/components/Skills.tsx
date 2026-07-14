"use client";

import { motion, Variants } from "framer-motion";

export default function Skills() {
  const skillsList = [
    "Figma",
    "Next.js",
    "Flutter",
    "Supabase",
    "Vercel",
    "Google Antigravity",
    "Prompt Engineering",
    "Python",
    "UI/UX Design",
    "Design Systems",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="relative bg-[#0A0A0A] border-b border-white p-6 md:p-12 overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E3AFF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#39FF6A]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* HEADER WITH ASTERISK BADGE */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 border-b border-zinc-800 pb-6">
        <div className="flex items-center space-x-4">
          {/* Rotating Asterisk Badge */}
          <div className="flex items-center justify-center w-10 h-10 border border-[#39FF6A] bg-zinc-950">
            <svg
              className="w-5 h-5 text-[#39FF6A] animate-spin-slow"
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
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tighter uppercase">
            SKILLS I <span className="text-[#39FF6A]">USE</span>
          </h2>
        </div>
        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-2 sm:mt-0">
          ENGINEERING // CREATING
        </span>
      </div>

      {/* SKILL PILLS CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap gap-3 md:gap-4 max-w-4xl"
      >
        {skillsList.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.04 }}
            className="group relative flex items-center space-x-2 bg-zinc-950 border border-zinc-800 hover:border-[#39FF6A] text-zinc-300 hover:text-black hover:bg-[#39FF6A] px-5 py-3 rounded-full cursor-default select-none transition-all duration-200 ease-out"
          >
            {/* Tiny Indicator Dot/Icon */}
            <svg
              className="w-3.5 h-3.5 text-zinc-600 group-hover:text-black transition-colors duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="square"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            
            <span className="font-mono text-xs md:text-sm font-bold tracking-wide">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Brand Text Block */}
      <div className="mt-16 flex items-center space-x-2 font-mono text-[10px] text-zinc-700">
        <span>[ SYSTEM INTEGRATION ACTIVE ]</span>
        <span className="w-12 h-[1px] bg-zinc-900" />
        <span>V.0.4.11</span>
      </div>
    </section>
  );
}
