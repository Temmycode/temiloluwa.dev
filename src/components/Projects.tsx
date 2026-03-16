"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Adehun",
    type: "Escrow Application",
    description:
      "An escrow platform designed to enable secure transactions between two parties. The system ensures funds are held safely until agreed conditions are met, powered by an API-driven architecture.",
    techStack: ["Flutter", "Dart", "FastAPI", "Python"],
    images: Array.from(
      { length: 9 },
      (_, i) => `/images/adehun/adehun-${i + 1}.png`
    ),
    links: [
      {
        label: "Frontend",
        url: "https://github.com/Temmycode/Adehun.git",
      },
      {
        label: "Backend",
        url: "https://github.com/Temmycode/adehun-api.git",
      },
    ],
  },
  {
    name: "Apple Match",
    type: "Dating Application",
    description:
      "A dating application designed to connect people through interest-based matching and real-time interactions. Features profile matching, a chat system, and polished UI.",
    techStack: ["Flutter", "Dart"],
    images: Array.from(
      { length: 7 },
      (_, i) => `/images/apple-match/apple-match-${i + 1}.png`
    ),
    links: [
      {
        label: "View GitHub",
        url: "https://github.com/Temmycode/apple-match.git",
      },
    ],
  },
  {
    name: "Guitar Explore",
    type: "Educational App",
    description:
      "An educational application that helps users explore guitars from different manufacturers and understand their characteristics. Built natively with Swift and SwiftUI.",
    techStack: ["Swift", "SwiftUI"],
    images: Array.from(
      { length: 4 },
      (_, i) => `/images/guitar-explore/guitar-explore-${i + 1}.png`
    ),
    links: [
      {
        label: "View GitHub",
        url: "https://github.com/Temmycode/Guitar-Explore.git",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-text-secondary tracking-widest uppercase mb-2">
            // projects
          </p>
          <h2 className="font-mono text-2xl font-semibold tracking-tight mb-12">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
