"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Adehun",
    type: "Escrow Platform",
    description:
      "A secure escrow platform for peer-to-peer transactions. Funds are held safely until agreed conditions are met, powered by an API-driven architecture.",
    techStack: ["Flutter", "Dart", "FastAPI", "Python"],
    image: "/images/adehun/adehun-1.png",
    links: [
      { label: "Frontend", url: "https://github.com/Temmycode/Adehun.git" },
      { label: "Backend", url: "https://github.com/Temmycode/adehun-api.git" },
    ],
  },
  {
    name: "Apple Match",
    type: "Dating App",
    description:
      "Interest-based matching and real-time chat. Designed around meaningful connections with a polished, intuitive interface.",
    techStack: ["Flutter", "Dart"],
    image: "/images/apple-match/apple-match-1.png",
    links: [
      { label: "GitHub", url: "https://github.com/Temmycode/apple-match.git" },
    ],
  },
  {
    name: "Guitar Explore",
    type: "Educational App",
    description:
      "An exploration tool for guitar enthusiasts to discover instruments from different manufacturers. Built natively with SwiftUI.",
    techStack: ["Swift", "SwiftUI"],
    image: "/images/guitar-explore/guitar-explore-1.png",
    links: [
      { label: "GitHub", url: "https://github.com/Temmycode/Guitar-Explore.git" },
    ],
  },
];

function Snowflake({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <line x1="12" y1="1" x2="12" y2="23" stroke={color} strokeWidth="1.2" />
      <line x1="1" y1="12" x2="23" y2="12" stroke={color} strokeWidth="1.2" />
      <line x1="4.2" y1="4.2" x2="19.8" y2="19.8" stroke={color} strokeWidth="1.2" />
      <line x1="19.8" y1="4.2" x2="4.2" y2="19.8" stroke={color} strokeWidth="1.2" />
      <line x1="12" y1="1" x2="9.5" y2="4" stroke={color} strokeWidth="1" />
      <line x1="12" y1="1" x2="14.5" y2="4" stroke={color} strokeWidth="1" />
      <line x1="12" y1="23" x2="9.5" y2="20" stroke={color} strokeWidth="1" />
      <line x1="12" y1="23" x2="14.5" y2="20" stroke={color} strokeWidth="1" />
      <line x1="1" y1="12" x2="4" y2="9.5" stroke={color} strokeWidth="1" />
      <line x1="1" y1="12" x2="4" y2="14.5" stroke={color} strokeWidth="1" />
      <line x1="23" y1="12" x2="20" y2="9.5" stroke={color} strokeWidth="1" />
      <line x1="23" y1="12" x2="20" y2="14.5" stroke={color} strokeWidth="1" />
    </svg>
  );
}

function Ribbon({ width, color }: { width: number; color: string }) {
  return (
    <svg width={width} height={width * 0.6} viewBox="0 0 40 24" fill="none">
      <path
        d="M2 18 C8 4, 16 20, 22 8 S34 16, 38 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

type Decoration = {
  left: string;
  top: string;
  type: "snowflake" | "ribbon";
  size: number;
  rotate: number;
  color: string;
};

const colors = [
  "#9b8574",  // warm brown
  "#8a9a8e",  // sage green
  "#a08b9b",  // dusty mauve
  "#7d8fa3",  // steel blue
  "#b09070",  // terracotta
  "#8e8a80",  // warm grey
];

const decorations: Decoration[] = [
  // Left edge
  { left: "2%", top: "3%", type: "snowflake", size: 22, rotate: 0, color: colors[0] },
  { left: "5%", top: "14%", type: "ribbon", size: 40, rotate: -15, color: colors[1] },
  { left: "1%", top: "24%", type: "snowflake", size: 16, rotate: 25, color: colors[2] },
  { left: "7%", top: "36%", type: "ribbon", size: 34, rotate: 10, color: colors[3] },
  { left: "3%", top: "47%", type: "snowflake", size: 20, rotate: -10, color: colors[4] },
  { left: "6%", top: "58%", type: "ribbon", size: 38, rotate: -25, color: colors[0] },
  { left: "2%", top: "68%", type: "snowflake", size: 18, rotate: 35, color: colors[5] },
  { left: "8%", top: "78%", type: "ribbon", size: 36, rotate: 15, color: colors[2] },
  { left: "4%", top: "88%", type: "snowflake", size: 24, rotate: -20, color: colors[1] },
  { left: "1%", top: "96%", type: "ribbon", size: 32, rotate: 5, color: colors[3] },
  // Right edge
  { left: "93%", top: "5%", type: "ribbon", size: 38, rotate: -20, color: colors[4] },
  { left: "90%", top: "15%", type: "snowflake", size: 20, rotate: 15, color: colors[0] },
  { left: "95%", top: "26%", type: "ribbon", size: 34, rotate: 30, color: colors[5] },
  { left: "88%", top: "37%", type: "snowflake", size: 22, rotate: -30, color: colors[1] },
  { left: "92%", top: "48%", type: "ribbon", size: 40, rotate: 8, color: colors[2] },
  { left: "96%", top: "57%", type: "snowflake", size: 16, rotate: 45, color: colors[3] },
  { left: "89%", top: "67%", type: "ribbon", size: 36, rotate: -12, color: colors[4] },
  { left: "94%", top: "77%", type: "snowflake", size: 24, rotate: 20, color: colors[0] },
  { left: "91%", top: "87%", type: "ribbon", size: 32, rotate: -8, color: colors[5] },
  { left: "87%", top: "95%", type: "snowflake", size: 18, rotate: 40, color: colors[2] },
  // Scattered middle (avoiding center content)
  { left: "18%", top: "8%", type: "snowflake", size: 18, rotate: 10, color: colors[3] },
  { left: "78%", top: "10%", type: "ribbon", size: 36, rotate: -18, color: colors[1] },
  { left: "15%", top: "30%", type: "ribbon", size: 30, rotate: 22, color: colors[4] },
  { left: "82%", top: "33%", type: "snowflake", size: 20, rotate: -25, color: colors[0] },
  { left: "20%", top: "52%", type: "snowflake", size: 16, rotate: 30, color: colors[5] },
  { left: "80%", top: "55%", type: "ribbon", size: 34, rotate: 12, color: colors[2] },
  { left: "16%", top: "72%", type: "ribbon", size: 38, rotate: -10, color: colors[3] },
  { left: "83%", top: "75%", type: "snowflake", size: 22, rotate: 15, color: colors[1] },
  { left: "22%", top: "92%", type: "snowflake", size: 20, rotate: -35, color: colors[4] },
  { left: "76%", top: "93%", type: "ribbon", size: 36, rotate: 25, color: colors[0] },
  // A few top/bottom center
  { left: "40%", top: "1%", type: "snowflake", size: 16, rotate: 20, color: colors[5] },
  { left: "58%", top: "2%", type: "ribbon", size: 32, rotate: -15, color: colors[2] },
  { left: "45%", top: "97%", type: "ribbon", size: 34, rotate: 10, color: colors[1] },
  { left: "55%", top: "96%", type: "snowflake", size: 18, rotate: -25, color: colors[4] },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-28 px-6 sm:px-12 overflow-hidden">
      {/* Snowflakes & ribbons */}
      {decorations.map((d, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: d.left,
            top: d.top,
            transform: `rotate(${d.rotate}deg)`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 1.2, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          {d.type === "snowflake" ? (
            <Snowflake size={d.size} color={d.color} />
          ) : (
            <Ribbon width={d.size} color={d.color} />
          )}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm text-accent tracking-widest uppercase mb-3">
            Selected Work
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-foreground">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
