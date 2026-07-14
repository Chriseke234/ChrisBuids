"use client";

import { motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <section id="casestudy" className="relative bg-[#0A0A0A] border-b border-white grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white overflow-hidden">
      
      {/* LEFT COLUMN: CASE STUDY HEADER & MOCKUP WORKSPACE (7 Cols) */}
      <div className="lg:col-span-8 p-6 md:p-12 flex flex-col justify-between space-y-8">
        
        {/* Top: Section Tag & Label */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-3">
            <span className="bg-[#39FF6A] text-black border border-white text-xs font-mono font-bold tracking-widest uppercase px-3 py-1.5">
              FLAGSHIP CASE
            </span>
            <span className="text-[#39FF6A] font-mono text-xs font-bold tracking-widest uppercase">
              // NO. 01 SYSTEM ANALYSIS
            </span>
          </div>
          
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            QUERY TYPE: ANALYTICS OS
          </span>
        </div>

        {/* Large Flagship Mockup Workspace */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="w-full bg-zinc-950 border border-white flex flex-col overflow-hidden relative group hover:border-[#39FF6A] transition-colors duration-300"
        >
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white bg-zinc-900/60 select-none">
            <div className="flex space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            
            <div className="flex-1 max-w-[280px] sm:max-w-md mx-4 bg-zinc-950 border border-zinc-800 px-3 py-1 text-[10px] font-mono text-zinc-400 text-center truncate tracking-wide">
              https://amd-drab.vercel.app/workspace/metrics
            </div>
            
            <span className="bg-[#39FF6A]/10 border border-[#39FF6A]/30 text-[#39FF6A] text-[9px] font-mono px-2 py-0.5 font-bold uppercase">
              SYS STATUS: ACTIVE
            </span>
          </div>

          {/* Mock Workspace Content Grid */}
          <div className="bg-black p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 font-mono text-xs text-zinc-400 min-h-[300px] sm:min-h-[350px]">
            
            {/* Sidebar (3 Cols) */}
            <div className="md:col-span-3 border-r border-zinc-900 md:pr-4 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-white font-bold text-[10px] tracking-wider block uppercase">CONNECTIONS</span>
                <div className="space-y-2 text-[10px]">
                  <div className="flex items-center justify-between bg-zinc-950 border border-zinc-800 p-1.5">
                    <span className="text-zinc-300">Supabase DB</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF6A]" />
                  </div>
                  <div className="flex items-center justify-between bg-zinc-950 border border-zinc-800 p-1.5">
                    <span className="text-zinc-300">Stripe Payments</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF6A]" />
                  </div>
                  <div className="flex items-center justify-between bg-zinc-950 border border-zinc-800 p-1.5">
                    <span className="text-zinc-500">Postgres Analytics</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                  </div>
                </div>
              </div>

              <div className="text-[9px] text-zinc-600 bg-zinc-950 p-2 border border-zinc-900">
                ⚡ API Latency: 42ms<br />
                📦 Queries: 12,492/mo
              </div>
            </div>

            {/* Main Area (9 Cols) */}
            <div className="md:col-span-9 flex flex-col justify-between space-y-4">
              {/* Natural Language Prompt Input */}
              <div className="bg-zinc-950 border border-zinc-800 p-3 flex items-center space-x-2 text-white">
                <span className="text-[#39FF6A] font-bold">&gt;</span>
                <span className="truncate">Show monthly recurring revenue split by product line in a bar chart.</span>
                <span className="w-2 h-4 bg-[#39FF6A] animate-pulse" />
              </div>

              {/* Chart Visualization Area */}
              <div className="flex-1 border border-zinc-800 p-4 bg-zinc-950/40 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-zinc-500 pb-2 border-b border-zinc-900">
                  <span>CHART: MRR_SPLIT_JULY</span>
                  <span className="text-[#39FF6A] font-bold">TOTAL MRR: $95,200</span>
                </div>
                
                {/* Visual Chart Bars */}
                <div className="space-y-3 my-4">
                  {[
                    { name: "SaaS Enterprise", amount: "$48,100", pct: 65, color: "#1E3AFF" },
                    { name: "SaaS Growth", amount: "$31,400", pct: 43, color: "#39FF6A" },
                    { name: "Consulting Contracts", amount: "$15,700", pct: 21, color: "#FFFFFF" },
                  ].map((bar, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-zinc-300">{bar.name}</span>
                        <span className="text-white font-bold">{bar.amount}</span>
                      </div>
                      <div className="w-full bg-zinc-900 h-3 border border-zinc-800">
                        <div 
                          className="h-full border-r border-white"
                          style={{ 
                            width: `${bar.pct}%`,
                            backgroundColor: bar.color
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-[8px] text-zinc-600 text-right">
                  Query response generated by AskMyData Agent in 0.38s
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: TEXT DESCRIPTION & BREAKDOWN (4 Cols) */}
      <div className="lg:col-span-4 flex flex-col justify-between divide-y divide-white">
        
        {/* Project Name Headline */}
        <div className="p-6 md:p-12 bg-zinc-950/30">
          <span className="text-xs font-mono text-[#39FF6A] block mb-2">// PROJECT NAME</span>
          <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter uppercase leading-none">
            ASKMYDATA
          </h3>
          <p className="font-mono text-zinc-400 text-xs mt-4 max-w-sm">
            AI-powered analytics system for querying corporate databases using plain English conversational queries.
          </p>
        </div>

        {/* 3 Column-like vertical breakdown */}
        <div className="p-6 md:p-12 space-y-8 bg-zinc-950/10">
          {/* Challenge */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-white tracking-widest uppercase flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#1E3AFF]" />
              <span>THE CHALLENGE</span>
            </h4>
            <p className="font-mono text-zinc-400 text-xs leading-relaxed">
              Teams were drowning in dashboard fatigue but starving for answers. Essential data lived everywhere except in plain language, causing massive bottlenecks for non-technical managers who had to wait for data engineers.
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-[#39FF6A] tracking-widest uppercase flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#39FF6A]" />
              <span>THE SOLUTION</span>
            </h4>
            <p className="font-mono text-zinc-400 text-xs leading-relaxed">
              Designed and built a conversational analytics interface where any team member can write questions in simple language and receive live, synthesised, reactive SQL charts and data tables back instantly.
            </p>
          </div>

          {/* Result */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-white tracking-widest uppercase flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-white" />
              <span>THE RESULT</span>
            </h4>
            <p className="font-mono text-zinc-400 text-xs leading-relaxed">
              Successfully cut average time-to-insight from hours to under 1 minute for beta teams. Accelerated product iteration cycles and significantly reduced internal query load on analytics engineering staff.
            </p>
          </div>
        </div>

        {/* VIEW PROJECT CTA row */}
        <a
          href="https://amd-drab.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-between items-center p-6 md:p-8 bg-[#39FF6A] hover:bg-white text-black font-mono font-bold tracking-widest text-xs uppercase transition-all duration-300 ease-out"
        >
          <span>VIEW LIVE CASE PROJECT</span>
          <svg
            className="w-5 h-5 text-black transform group-hover:translate-x-1.5 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
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
