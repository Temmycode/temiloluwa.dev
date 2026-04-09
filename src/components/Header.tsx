"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 sm:px-12 py-5">
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-foreground"
        >
          temiloluwa.dev
        </a>

        <nav className="flex items-center gap-8">
          <a
            href="#work"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            Work
          </a>
          <a
            href="#experience"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a
            href="#about"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="https://github.com/Temmycode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
