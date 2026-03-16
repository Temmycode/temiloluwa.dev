"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-border py-12 px-6"
    >
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-secondary">
          Built with precision.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Temmycode"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-secondary hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <p className="font-mono text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Temiloluwa Akisanya
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
