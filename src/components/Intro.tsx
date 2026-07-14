"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  return (
    <section id="intro" className="relative border-b border-white grid grid-cols-1 lg:grid-cols-12 bg-[#0A0A0A] overflow-hidden">
      {/* LEFT COLUMN: IDENTITY & CAPABILITIES */}
      <div className="lg:col-span-7 p-6 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white">
        
        {/* Top: Name & Badges */}
        <div className="space-y-6">
          {/* Subtitle Blue Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center space-x-2 bg-[#1E3AFF] border border-white text-white px-4 py-1.5 text-xs font-mono tracking-widest font-bold uppercase rounded-full"
          >
            <span>DIGITAL PRODUCT BUILDER</span>
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="square"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </motion.div>

          {/* Large Name */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-black tracking-tight text-6xl sm:text-7xl md:text-8xl leading-none uppercase"
          >
            CHRIS <span className="text-[#39FF6A]">BUILDS</span>
          </motion.h2>

          {/* Description Block */}
          <p className="text-zinc-400 font-mono max-w-xl text-sm md:text-base leading-relaxed">
            I am a builder bridging the gap between raw AI capabilities and conversion-driven design.
            From high-converting landing pages to AI agent dashboards, I engineer systems that turn
            user attention into business growth.
          </p>
        </div>

        {/* Middle: Bullet Grid & Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-10 items-center">
          {/* Core Services Bullet List */}
          <ul className="space-y-4 font-mono text-sm tracking-wide text-white">
            {[
              "Websites & Landing Pages",
              "AI Integrations & Products",
              "UI & UX Design Systems",
              "Automation & Prompt Systems",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center space-x-3"
              >
                {/* SVG green plus sign instead of emoji */}
                <svg
                  className="w-4 h-4 text-[#39FF6A] flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="square"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Rotating badge (Premium Micro-Interaction) */}
          <div className="flex justify-start sm:justify-end pr-4">
            <div className="relative w-28 h-28 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full">
              {/* Rotating Circular Text */}
              <svg className="absolute w-24 h-24 text-zinc-500 animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="textPathCurve"
                  d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                  fill="none"
                />
                <text className="text-[7.5px] font-mono font-bold tracking-[1.5px]" fill="currentColor">
                  <textPath href="#textPathCurve" startOffset="0%">
                    DESIGN THAT CONNECTS BRANDS TO PEOPLE · BUILD · 
                  </textPath>
                </text>
              </svg>
              
              {/* Center Asterisk */}
              <svg
                className="w-6 h-6 text-[#39FF6A]"
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
          </div>
        </div>

        {/* Bottom: Meta Info (Location & Availability) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 pt-6 border-t border-zinc-800 font-mono text-xs text-zinc-400">
          {/* Location item with custom location pin SVG */}
          <div className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-[#1E3AFF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Based in Nigeria</span>
          </div>

          <span className="hidden sm:inline text-zinc-700">|</span>

          {/* Availability item with pulse dot SVG */}
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF6A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF6A]"></span>
            </span>
            <span>Available for freelance</span>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: GEOMETRIC COLOR-BLOCK AVATAR PANEL */}
      <div className="lg:col-span-5 p-6 md:p-12 flex items-center justify-center bg-zinc-950/40 relative min-h-[350px] lg:min-h-0">
        {/* Background diagonal accents */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#161618_1px,transparent_1px)] bg-[size:20px_20px] opacity-25" />

        {/* Brutalist image card wrapper */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
          {/* Back Green Offset Block */}
          <div className="absolute inset-0 bg-[#39FF6A] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300 ease-out border border-white" />
          
          {/* Front Image Container (Dark Panel) */}
          <div className="absolute inset-0 bg-black border border-white overflow-hidden">
            <Image
              src="/avatar.png"
              alt="Chris Builds avatar"
              fill
              className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 ease-out"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
            {/* Tech filter overlay */}
            <div className="absolute inset-0 bg-[#1E3AFF]/10 mix-blend-color" />
            
            {/* Monogram tag */}
            <div className="absolute bottom-3 left-3 bg-[#0A0A0A] border border-white px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#39FF6A]">
              CB.AI.01
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
