"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems: NavItem[] = [
    {
      id: "hero",
      label: "HOME",
      icon: (
        <svg className="w-4 h-4 md:w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: "intro",
      label: "ABOUT",
      icon: (
        <svg className="w-4 h-4 md:w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      id: "works",
      label: "WORKS",
      icon: (
        <svg className="w-4 h-4 md:w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
          <rect x="2" y="2" width="20" height="20" rx="1" />
          <line x1="2" y1="8" x2="22" y2="8" />
          <line x1="8" y1="2" x2="8" y2="22" />
        </svg>
      ),
    },
    {
      id: "skills",
      label: "SKILLS",
      icon: (
        <svg className="w-4 h-4 md:w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      id: "casestudy",
      label: "CASE",
      icon: (
        <svg className="w-4 h-4 md:w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      id: "contact",
      label: "CONTACT",
      icon: (
        <svg className="w-4 h-4 md:w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // 1. Intersection Observer to detect current active section
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // Trigger when section occupies the main center viewport area
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // 2. Scroll event listener for progress bar, bottom-of-page detection, and auto-hide/show navbar
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate scroll progress percentage
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable > 0) {
        setScrollProgress((currentScrollY / totalScrollable) * 100);
      }

      // Check if user reached bottom of page (forcing contact active)
      if (window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
      }

      // Auto hide/show dock on scroll (hide scrolling down, show scrolling up)
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [lastScrollY]);

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: 100, x: "-50%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-1/2 z-50 w-[92%] max-w-2xl"
        >
          {/* Main Floating Capsule Dock */}
          <div className="relative overflow-hidden bg-black/80 backdrop-blur-xl border border-white hover:border-[#39FF6A] transition-colors duration-300 px-4 py-3 md:py-3.5 flex justify-between items-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]">
            
            {/* Scroll Progress Bar running along the top border */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-zinc-900 pointer-events-none">
              <div 
                className="h-full bg-[#39FF6A] transition-all duration-150 ease-out" 
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            {/* Nav Items Container */}
            <nav className="flex justify-between items-center w-full relative z-10">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(item.id, e)}
                    className="relative group flex items-center justify-center py-1.5 px-3 md:px-4 rounded-none font-mono text-[10px] md:text-xs font-bold tracking-wider transition-colors duration-300"
                    style={{
                      color: isActive ? "#000000" : "#A1A1AA",
                    }}
                  >
                    {/* Sliding active background indicator using framer-motion */}
                    {isActive && (
                      <motion.span
                        layoutId="activeDockPill"
                        className="absolute inset-0 bg-[#39FF6A] border border-white -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Content: Icon and expanding label */}
                    <div className="flex items-center space-x-2">
                      <span className={`transition-colors duration-300 ${isActive ? "text-black" : "text-zinc-400 group-hover:text-white"}`}>
                        {item.icon}
                      </span>
                      
                      {/* Desktop displays text, Mobile displays text ONLY for active item (premium slide effect) */}
                      <span className={`
                        overflow-hidden transition-all duration-300 ease-out font-black
                        hidden sm:inline-block ${isActive ? "text-black" : "text-zinc-400 group-hover:text-white"}
                      `}>
                        {item.label}
                      </span>

                      {/* Mobile slide open text for active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block sm:hidden text-black overflow-hidden whitespace-nowrap"
                          >
                            {item.label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Hover tooltip for desktop (when not active) */}
                    {!isActive && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-black border border-white text-[#39FF6A] text-[9px] py-1 px-2.5 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 uppercase whitespace-nowrap shadow-lg">
                        {item.label}
                      </div>
                    )}
                  </a>
                );
              })}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
