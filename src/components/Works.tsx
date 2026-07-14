"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  siteUrl: string;
  displayUrl: string;
  tags: string[];
  mockup: React.ReactNode;
}

export default function Works() {
  const projects: Project[] = [
    {
      id: "ibmarket",
      name: "IRONBRIDGEMARKET",
      description: "Institutional-grade platform for buying, trading, and growing crypto assets.",
      category: "Fintech / Web Design",
      siteUrl: "https://ibmarket.vercel.app",
      displayUrl: "ibmarket.vercel.app",
      tags: ["Fintech", "Web Design", "Tailwind CSS"],
      mockup: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-[10px] text-zinc-400">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
            <span className="font-bold text-white tracking-widest text-xs">IRONBRIDGE //</span>
            <span className="text-[#39FF6A] bg-[#39FF6A]/10 px-1.5 py-0.5 border border-[#39FF6A]/30">BTC/USD $64,281.50 [+3.8%]</span>
          </div>
          
          {/* Dashboard Area */}
          <div className="grid grid-cols-12 gap-3 my-auto">
            {/* Chart Area */}
            <div className="col-span-8 border border-zinc-800 p-2 bg-zinc-950 flex flex-col justify-between h-24">
              <span className="text-zinc-600 text-[8px]">MARKET VALUE (24H)</span>
              {/* Candlestick chart simulation */}
              <div className="flex items-end justify-between h-14 pb-1">
                {[45, 60, 50, 75, 65, 80, 90, 85, 100, 110, 95, 120].map((h, i) => (
                  <div key={i} className="flex flex-col items-center w-2.5">
                    {/* Line */}
                    <div className="w-[1px] h-3 bg-zinc-700" />
                    {/* Bar */}
                    <div 
                      className={`w-full border ${
                        i % 2 === 0 ? "bg-[#39FF6A] border-[#39FF6A]" : "bg-red-500 border-red-500"
                      }`}
                      style={{ height: `${h / 2.5}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Terminal Sidebar */}
            <div className="col-span-4 border border-zinc-800 p-2 bg-zinc-950 flex flex-col justify-between h-24">
              <div>
                <span className="text-zinc-600 text-[8px] block uppercase">Buy order</span>
                <span className="text-white font-bold block text-xs">0.450 BTC</span>
              </div>
              <div className="bg-[#1E3AFF] text-white border border-white text-center py-1 text-[9px] font-bold tracking-wider hover:bg-white hover:text-black cursor-pointer transition-colors duration-200">
                EXECUTE
              </div>
            </div>
          </div>
          
          {/* Footer stats */}
          <div className="flex justify-between items-center pt-2 border-t border-zinc-800 text-[8px] text-zinc-600">
            <span>VOLUME: $4.2B</span>
            <span>LIQUIDITY: POOL_A2</span>
          </div>
        </div>
      ),
    },
    {
      id: "askmydata",
      name: "ASKMYDATA",
      description: "AI-powered analytics OS that lets teams query data in plain English and get live dashboards.",
      category: "AI Product / UI-UX",
      siteUrl: "https://amd-drab.vercel.app",
      displayUrl: "amd-drab.vercel.app",
      tags: ["AI Analytics", "Next.js", "Dashboard UX"],
      mockup: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-[10px] text-zinc-400">
          {/* AI Search Bar */}
          <div className="bg-zinc-950 border border-zinc-800 p-2 flex items-center space-x-2">
            <span className="text-[#39FF6A] font-bold">&gt;</span>
            <span className="text-white truncate">What was our conversion rate for the product page last week?</span>
            <span className="w-1.5 h-3.5 bg-[#39FF6A] animate-pulse" />
          </div>

          {/* AI Output Panels */}
          <div className="grid grid-cols-2 gap-3 my-2">
            {/* Metric Card */}
            <div className="border border-zinc-800 p-2 bg-zinc-950/60">
              <span className="text-zinc-600 text-[8px] block">CONVERSION RATE</span>
              <span className="text-white text-lg font-bold block mt-1">4.82%</span>
              <span className="text-[#39FF6A] text-[8px] font-bold">+18.4% vs prev week</span>
            </div>
            
            {/* Metric Card 2 */}
            <div className="border border-zinc-800 p-2 bg-zinc-950/60 flex flex-col justify-between">
              <div>
                <span className="text-zinc-600 text-[8px] block">TOTAL SIGNUPS</span>
                <span className="text-white text-base font-bold block">14,290</span>
              </div>
              {/* Micro bar chart */}
              <div className="flex items-end space-x-1 h-6">
                {[12, 18, 15, 22, 30, 26, 32].map((v, i) => (
                  <div key={i} className="flex-1 bg-[#1E3AFF] border border-white" style={{ height: `${v}%` }} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Prompt helper */}
          <div className="text-[8px] text-zinc-600 flex justify-between">
            <span>LLM ENG: GPT-4-TURBO</span>
            <span>RESPONSE TIME: 0.42s</span>
          </div>
        </div>
      ),
    },
    {
      id: "jesusenvoys",
      name: "JESUS ENVOYS CHURCH",
      description: "Community-first church website built for outreach, ministries, and engagement.",
      category: "Web Design",
      siteUrl: "https://jesusenvoyschurch.netlify.app",
      displayUrl: "jesusenvoyschurch.netlify.app",
      tags: ["Web Design", "Community", "Netlify"],
      mockup: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-[10px] text-zinc-400">
          {/* Top Bar */}
          <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5">
            <span className="font-bold text-white tracking-widest text-[9px] uppercase">JESUS ENVOYS</span>
            <div className="flex space-x-2 text-[8px]">
              <span>SERMONS</span>
              <span>GIVE</span>
              <span className="text-zinc-600">CONTACT</span>
            </div>
          </div>
          
          {/* Main Hero block inside Church site */}
          <div className="border border-zinc-800 p-3 bg-zinc-950 my-auto text-center relative overflow-hidden flex flex-col justify-center items-center h-24">
            <div className="absolute inset-0 bg-[#39FF6A]/5 pointer-events-none" />
            {/* Elegant SVG cross shape inside church mockup */}
            <svg className="w-8 h-8 text-[#39FF6A]/20 absolute right-2 bottom-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="8" y1="8" x2="16" y2="8" />
            </svg>
            
            <span className="text-[9px] text-[#39FF6A] tracking-widest block uppercase mb-1">JOIN US SUNDAY</span>
            <span className="text-white text-xs font-bold leading-tight max-w-[160px]">EXPERIENCE GRACE & COMMUNITY</span>
          </div>
          
          {/* Next Events ticker */}
          <div className="flex justify-between items-center text-[7px] text-zinc-600 border-t border-zinc-800 pt-1">
            <span>SERVICE: 09:00 AM (GMT+1)</span>
            <span>LAGOS, NIGERIA</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="works" className="relative bg-[#0A0A0A] border-b border-white">
      {/* SECTION HEADER BLOCK */}
      <div className="bg-[#1E3AFF] border-b border-white p-6 md:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter uppercase">
          SELECTED <span className="text-[#39FF6A]">WORKS</span>
        </h2>
        <span className="font-mono text-xs text-white/80 mt-2 sm:mt-0 tracking-widest">
          CURATED CASES // PROD.03
        </span>
      </div>

      {/* WORKS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="group flex flex-col justify-between p-6 md:p-8 bg-zinc-950/20 hover:bg-zinc-950/60 transition-colors duration-300"
          >
            {/* Card Content Top: Mockup */}
            <div className="space-y-6">
              {/* Browser Mockup Wrapper */}
              <div className="w-full aspect-[16/10] bg-zinc-950 border border-white flex flex-col overflow-hidden relative group-hover:border-[#39FF6A] transition-all duration-300">
                {/* Browser top header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white bg-zinc-900/60 select-none">
                  {/* Left: Window Dots */}
                  <div className="flex space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-800" />
                    <span className="w-2 h-2 rounded-full bg-zinc-800" />
                    <span className="w-2 h-2 rounded-full bg-zinc-800" />
                  </div>
                  {/* Center: URL display */}
                  <div className="flex-1 max-w-[150px] sm:max-w-xs mx-4 bg-zinc-950 border border-zinc-800/80 px-2 py-0.5 text-[8px] font-mono text-zinc-500 text-center truncate tracking-wide">
                    {project.displayUrl}
                  </div>
                  {/* Right Spacer */}
                  <div className="w-8" />
                </div>
                
                {/* Viewport content */}
                <div className="flex-1 relative overflow-hidden bg-zinc-900/40 p-3 flex flex-col justify-between">
                  {project.mockup}
                </div>
              </div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-display font-black text-xl tracking-tight text-white group-hover:text-[#39FF6A] transition-colors duration-200">
                    {project.name}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-zinc-400 font-mono text-xs leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Card Bottom: Tags & Link */}
            <div className="mt-8 pt-4 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              {/* Skill Tag Pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Site Link */}
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-white group-hover:text-[#39FF6A] transition-colors duration-200"
              >
                <span>VISIT SITE</span>
                {/* Link Arrow SVG */}
                <svg
                  className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIEW MORE CTA */}
      <div className="border-t border-white p-6 md:p-8 flex justify-center bg-zinc-950/10">
        <a
          href="https://github.com/chrisbuilds"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-3 bg-transparent border border-white hover:bg-[#39FF6A] hover:border-[#39FF6A] hover:text-black text-white font-mono font-bold tracking-widest text-xs uppercase px-8 py-3.5 transition-all duration-300 ease-out"
        >
          <span>VIEW MORE PROJECTS</span>
          <svg
            className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}
