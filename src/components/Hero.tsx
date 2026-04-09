"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.03,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

const particles = [
  { left: "3%", size: 6, duration: 8, delay: 0 },
  { left: "10%", size: 5, duration: 10, delay: 2 },
  { left: "18%", size: 7, duration: 7, delay: 4 },
  { left: "24%", size: 4, duration: 12, delay: 1 },
  { left: "31%", size: 6, duration: 9, delay: 5 },
  { left: "37%", size: 5, duration: 11, delay: 3 },
  { left: "44%", size: 8, duration: 8, delay: 0.5 },
  { left: "50%", size: 4, duration: 13, delay: 6 },
  { left: "56%", size: 6, duration: 9, delay: 2.5 },
  { left: "62%", size: 7, duration: 7, delay: 7 },
  { left: "68%", size: 5, duration: 10, delay: 1.5 },
  { left: "74%", size: 6, duration: 8, delay: 4.5 },
  { left: "80%", size: 4, duration: 12, delay: 3.5 },
  { left: "85%", size: 7, duration: 9, delay: 0.8 },
  { left: "91%", size: 5, duration: 11, delay: 5.5 },
  { left: "96%", size: 6, duration: 7, delay: 8 },
  { left: "7%", size: 5, duration: 10, delay: 6.5 },
  { left: "15%", size: 6, duration: 8, delay: 3.2 },
  { left: "28%", size: 7, duration: 9, delay: 7.5 },
  { left: "41%", size: 4, duration: 12, delay: 1.8 },
  { left: "53%", size: 6, duration: 7, delay: 4.2 },
  { left: "65%", size: 5, duration: 11, delay: 9 },
  { left: "77%", size: 8, duration: 8, delay: 2.8 },
  { left: "88%", size: 4, duration: 10, delay: 5.8 },
  { left: "33%", size: 6, duration: 9, delay: 8.5 },
  { left: "47%", size: 5, duration: 11, delay: 0.3 },
  { left: "59%", size: 7, duration: 7, delay: 6.2 },
  { left: "72%", size: 6, duration: 10, delay: 3.8 },
  { left: "20%", size: 5, duration: 9, delay: 9.5 },
  { left: "83%", size: 6, duration: 8, delay: 7.2 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen md:h-screen flex flex-col md:flex-row md:items-center overflow-hidden">
      {/* Falling particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              top: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: "#c4b9a8",
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Desktop: photo absolute behind text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="hidden md:block absolute right-[8%] top-1/2 -translate-y-1/2 w-72 lg:w-80 h-72 lg:h-80 rounded-full overflow-hidden z-[1]"
      >
        <Image
          src="/images/me/profile.jpg"
          alt="Temiloluwa Akisanya"
          fill
          sizes="(max-width: 1024px) 288px, 320px"
          className="object-cover object-top grayscale"
          priority
        />
      </motion.div>

      {/* Text content */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 sm:px-12 pt-28 md:pt-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display font-bold uppercase leading-[0.85] tracking-tight text-foreground text-[clamp(2.8rem,7vw,7rem)]"
        >
          Temiloluwa
          <br />
          Akisanya
        </motion.h1>

        <div className="mt-8 sm:mt-10 space-y-2">
          <p className="text-lg sm:text-xl text-accent leading-snug">
            <AnimatedText text="Mobile Engineer" delay={0.5} />
          </p>
          <p className="text-sm sm:text-base text-accent/70 tracking-wide">
            <AnimatedText text="Lagos, Nigeria" delay={0.9} />
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 max-w-sm text-sm sm:text-base text-text-secondary leading-relaxed"
        >
          Crafting products that feel as good as they work.
        </motion.p>
      </div>

      {/* Mobile: photo below text, in flow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="md:hidden relative z-[1] mx-auto mt-12 mb-8 w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden"
      >
        <Image
          src="/images/me/profile.jpg"
          alt="Temiloluwa Akisanya"
          fill
          sizes="224px"
          className="object-cover object-top grayscale"
          priority
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-6 sm:left-12 text-xs text-accent tracking-[0.2em] uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
