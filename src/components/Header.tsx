"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          temiloluwa.dev
        </a>

        <nav className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="https://github.com/temiloluwaakisanya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            GitHub
          </a>

          <button
            onClick={toggleTheme}
            className="relative w-10 h-5 rounded-full bg-panel border border-border transition-colors"
            aria-label="Toggle theme"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-all duration-300 ${
                theme === "dark"
                  ? "translate-x-5 bg-foreground"
                  : "translate-x-0 bg-text-secondary"
              }`}
            />
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
