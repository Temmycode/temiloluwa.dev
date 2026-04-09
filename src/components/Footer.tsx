"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-20 px-6 sm:px-12">
      <div className="mx-auto max-w-6xl">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-base text-text-secondary max-w-md mx-auto leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, and
            interesting conversations.
          </p>
          <a
            href="mailto:tolutech2004@gmail.com"
            className="inline-block mt-8 text-sm px-7 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-accent">
            &copy; {new Date().getFullYear()} Temiloluwa Akisanya
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Temmycode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:tolutech2004@gmail.com"
              className="text-xs text-accent hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
