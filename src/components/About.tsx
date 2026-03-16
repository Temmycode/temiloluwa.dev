"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start gap-12"
        >
          <div className="relative shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-border group">
              <Image
                src="/images/me/profile.jpg"
                alt="Temiloluwa Akisanya"
                width={128}
                height={128}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs text-text-secondary tracking-widest uppercase mb-2">
                // about
              </p>
              <h2 className="font-mono text-2xl font-semibold tracking-tight">
                Temiloluwa Akisanya
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                Mobile Engineer
              </p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-text-secondary max-w-lg">
              <p>
                I build production mobile applications. My work spans the full
                stack of mobile development — from pixel-level UI in Flutter and
                SwiftUI to the APIs and backend systems that power them.
              </p>
              <p>
                Core stack: Flutter, Dart, Swift, React Native, JavaScript,
                TypeScript, and FastAPI on the backend. I focus on shipping
                software that works — clean architecture, reliable APIs, and
                interfaces that feel right.
              </p>
              <p>
                I care about the details that separate a prototype from a
                product people actually use.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Flutter", "Dart", "Swift", "SwiftUI", "React Native", "JavaScript", "TypeScript", "FastAPI", "Python"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1 rounded border border-border text-text-secondary"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
