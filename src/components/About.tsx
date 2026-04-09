"use client";

import { motion } from "framer-motion";

// Small star / sparkle shape
function Star({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
    </svg>
  );
}

// Diamond / rhombus
function Diamond({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 L22 12 L12 22 L2 12 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

// Small cross / plus
function Cross({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <line x1="12" y1="3" x2="12" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Crescent / arc
function Crescent({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M16 4 A9 9 0 1 0 16 20 A6 6 0 1 1 16 4"
        stroke={color}
        strokeWidth="1.3"
        fill="none"
      />
    </svg>
  );
}

// Small ring / circle outline
function Ring({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// Triangle
function Triangle({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 L22 21 L2 21 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const colors = [
  "#9b8574",  // warm brown
  "#8a9a8e",  // sage green
  "#a08b9b",  // dusty mauve
  "#7d8fa3",  // steel blue
  "#b09070",  // terracotta
  "#8e8a80",  // warm grey
];

type Deco = {
  left: string;
  top: string;
  type: "star" | "diamond" | "cross" | "crescent" | "ring" | "triangle";
  size: number;
  rotate: number;
  color: string;
};

const decorations: Deco[] = [
  // Left edge
  { left: "2%", top: "5%", type: "star", size: 18, rotate: 0, color: colors[0] },
  { left: "6%", top: "18%", type: "diamond", size: 20, rotate: 15, color: colors[1] },
  { left: "3%", top: "32%", type: "cross", size: 16, rotate: 45, color: colors[2] },
  { left: "7%", top: "45%", type: "crescent", size: 22, rotate: -20, color: colors[3] },
  { left: "2%", top: "58%", type: "ring", size: 16, rotate: 0, color: colors[4] },
  { left: "5%", top: "72%", type: "triangle", size: 18, rotate: 10, color: colors[5] },
  { left: "3%", top: "85%", type: "star", size: 14, rotate: 30, color: colors[1] },
  { left: "8%", top: "94%", type: "diamond", size: 16, rotate: -15, color: colors[3] },
  // Right edge
  { left: "92%", top: "8%", type: "triangle", size: 20, rotate: -10, color: colors[4] },
  { left: "88%", top: "20%", type: "cross", size: 18, rotate: 20, color: colors[0] },
  { left: "94%", top: "34%", type: "star", size: 16, rotate: 45, color: colors[5] },
  { left: "90%", top: "48%", type: "ring", size: 20, rotate: 0, color: colors[2] },
  { left: "93%", top: "60%", type: "crescent", size: 18, rotate: 30, color: colors[1] },
  { left: "89%", top: "73%", type: "diamond", size: 22, rotate: -25, color: colors[0] },
  { left: "95%", top: "85%", type: "cross", size: 14, rotate: 15, color: colors[4] },
  { left: "91%", top: "95%", type: "triangle", size: 16, rotate: 40, color: colors[3] },
  // Scattered middle
  { left: "18%", top: "10%", type: "ring", size: 14, rotate: 0, color: colors[5] },
  { left: "78%", top: "12%", type: "crescent", size: 20, rotate: -40, color: colors[2] },
  { left: "15%", top: "40%", type: "star", size: 16, rotate: 20, color: colors[3] },
  { left: "82%", top: "42%", type: "triangle", size: 18, rotate: -15, color: colors[1] },
  { left: "20%", top: "65%", type: "diamond", size: 18, rotate: 35, color: colors[4] },
  { left: "80%", top: "68%", type: "cross", size: 16, rotate: -30, color: colors[0] },
  { left: "16%", top: "90%", type: "crescent", size: 16, rotate: 25, color: colors[5] },
  { left: "76%", top: "92%", type: "star", size: 20, rotate: -10, color: colors[2] },
  // Top/bottom center
  { left: "38%", top: "2%", type: "cross", size: 14, rotate: 15, color: colors[0] },
  { left: "60%", top: "4%", type: "diamond", size: 16, rotate: -20, color: colors[4] },
  { left: "42%", top: "96%", type: "ring", size: 18, rotate: 0, color: colors[1] },
  { left: "58%", top: "97%", type: "triangle", size: 14, rotate: 30, color: colors[3] },
];

const shapeMap = {
  star: Star,
  diamond: Diamond,
  cross: Cross,
  crescent: Crescent,
  ring: Ring,
  triangle: Triangle,
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-12 overflow-hidden">
      {/* Decorative shapes */}
      {decorations.map((d, i) => {
        const Shape = shapeMap[d.type];
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: d.left,
              top: d.top,
              transform: `rotate(${d.rotate}deg)`,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ duration: 1.2, delay: i * 0.04 }}
            viewport={{ once: true }}
          >
            <Shape size={d.size} color={d.color} />
          </motion.div>
        );
      })}

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm text-accent tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-foreground">
            A Bit About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-base text-text-secondary leading-relaxed"
          >
            <p>
              I got into software through curiosity — not a bootcamp, not a career
              plan. I just wanted to build things that people could hold in their
              hands and use every day. That led me to mobile development, and
              I&apos;ve been there since.
            </p>
            <p>
              Most of my work lives in Flutter and Swift. I care about the gap
              between &quot;it works&quot; and &quot;it feels right&quot; — the
              micro-interactions, the load times, the moments where software
              either earns trust or loses it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-base text-text-secondary leading-relaxed"
          >
            <p>
              Outside of code, I direct a choir — which, surprisingly, has taught
              me a lot about building things. Timing, listening, knowing when to
              lead and when to let others carry the melody. Those instincts show
              up in how I collaborate with teams and approach product decisions.
            </p>
            <p>
              I studied Software Engineering at Babcock University. I&apos;m based
              in Lagos, Nigeria, and I&apos;m always open to interesting work and
              good conversations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
