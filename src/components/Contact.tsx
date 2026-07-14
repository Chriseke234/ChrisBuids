"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "@/lib/supabaseClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    try {
      await submitContactForm(formData);
      setStatus("success");
      setFormData({ name: "", email: "", whatsapp: "", message: "" });
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to submit. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative bg-[#1E3AFF] text-white p-6 md:p-12 overflow-hidden border-b border-white">
      {/* Decorative Overlapping Circles background - Bottom Right */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[10px] border-white/5 pointer-events-none" />
      <div className="absolute -bottom-36 -right-12 w-96 h-96 rounded-full border-[10px] border-[#39FF6A]/5 pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: HERO CALL-TO-ACTION & FORM (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          
          {/* Header */}
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-[#39FF6A] font-bold uppercase block">
              // READY TO START?
            </span>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
              LET'S BUILD SOMETHING <br />
              <span className="text-[#39FF6A] hover:text-white transition-colors duration-300">
                EPIC TOGETHER
              </span>
            </h2>
          </div>

          {/* Brutalist Form Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-white p-6 md:p-8"
          >
            <h3 className="font-mono text-xs font-bold text-[#39FF6A] tracking-wider uppercase mb-6 flex items-center space-x-2">
              <span>[ PROJECT BRIEF SUBMISSION ]</span>
            </h3>

            {status === "success" ? (
              <div className="border border-[#39FF6A] p-4 bg-zinc-950 font-mono text-xs text-[#39FF6A] space-y-4">
                <p className="font-bold uppercase tracking-wider">✓ TRANSMISSION SUCCESSFUL</p>
                <p>Thank you. Your project brief has been logged. Chris will reach out within 24 hours.</p>
                <button 
                  onClick={() => setStatus("idle")} 
                  className="bg-[#39FF6A] text-black px-4 py-2 font-bold uppercase hover:bg-white transition-colors duration-200"
                >
                  SEND ANOTHER BRIEF
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-zinc-400 uppercase font-bold block">NAME *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Founder Name"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#39FF6A] focus:outline-none p-3 text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-zinc-400 uppercase font-bold block">EMAIL *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. founder@domain.com"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#39FF6A] focus:outline-none p-3 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="whatsapp" className="text-zinc-400 uppercase font-bold block">WHATSAPP / TELEGRAM (OPTIONAL)</label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="e.g. +234 903 037 5493"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#39FF6A] focus:outline-none p-3 text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-zinc-400 uppercase font-bold block">PROJECT DESCRIPTION *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your product idea, goals, timeline, and current stage..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#39FF6A] focus:outline-none p-3 text-white resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 font-bold uppercase tracking-wider">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#1E3AFF] border border-white hover:bg-[#39FF6A] hover:border-[#39FF6A] hover:text-black text-white font-bold tracking-widest uppercase p-4 transition-all duration-300"
                >
                  {status === "submitting" ? "TRANSMITTING..." : "SUBMIT PROJECT BRIEF"}
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* RIGHT COLUMN: CONTACT CHANNELS (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:pl-12 lg:border-l border-white/20">
          
          {/* Metadata Ticker */}
          <div className="space-y-6">
            <span className="font-mono text-xs tracking-widest text-[#39FF6A] font-bold uppercase block">// NETWORKS & DIRECT CHANNELS</span>
            
            {/* Contact list with custom SVG icons (no emojis) */}
            <div className="space-y-4 font-mono text-sm">
              
              {/* Email */}
              <a 
                href="mailto:ekechristopher56@gmail.com" 
                className="flex items-center space-x-4 p-3 bg-[#0A0A0A] border border-zinc-800 hover:border-[#39FF6A] transition-colors duration-250 group"
              >
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-zinc-900 text-[#39FF6A]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-zinc-500 block uppercase">Email</span>
                  <span className="text-white text-xs sm:text-sm font-bold truncate block group-hover:text-[#39FF6A]">ekechristopher56@gmail.com</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/2349030375493" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-4 p-3 bg-[#0A0A0A] border border-zinc-800 hover:border-[#39FF6A] transition-colors duration-250 group"
              >
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-zinc-900 text-[#39FF6A]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-zinc-500 block uppercase">WhatsApp Chat</span>
                  <span className="text-white text-xs sm:text-sm font-bold truncate block group-hover:text-[#39FF6A]">+234 903 037 5493</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/christopher-eke-70373027b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-4 p-3 bg-[#0A0A0A] border border-zinc-800 hover:border-[#39FF6A] transition-colors duration-250 group"
              >
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-zinc-900 text-[#39FF6A]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-zinc-500 block uppercase">LinkedIn Professional</span>
                  <span className="text-white text-xs sm:text-sm font-bold truncate block group-hover:text-[#39FF6A]">linkedin.com/in/christopher-eke...</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-4 p-3 bg-[#0a0a0a]/30 border border-zinc-900">
                <div className="w-10 h-10 border border-white/5 flex items-center justify-center bg-zinc-950 text-zinc-500">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-zinc-500 block uppercase">Geographic Hub</span>
                  <span className="text-zinc-300 text-xs sm:text-sm font-bold block">Lagos, Nigeria</span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center space-x-4 p-3 bg-[#0a0a0a]/30 border border-zinc-900">
                <div className="w-10 h-10 border border-white/5 flex items-center justify-center bg-zinc-950">
                  <span className="flex h-3.5 w-3.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF6A] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#39FF6A]"></span>
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-zinc-500 block uppercase">Operational Status</span>
                  <span className="text-zinc-300 text-xs sm:text-sm font-bold block">Available for freelance</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Branding Mark */}
          <div className="pt-8 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/50">
            <div className="flex items-center space-x-2">
              {/* Asterisk icon bottom-left */}
              <svg
                className="w-3.5 h-3.5 text-[#39FF6A] animate-spin-slow"
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
              <span>CHRISBUILDS © 2026</span>
            </div>
            <span>V.2.0.0</span>
          </div>

        </div>

      </div>
    </section>
  );
}
