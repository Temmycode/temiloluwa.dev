"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  type: string;
  description: string;
  techStack: string[];
  image: string;
  links: { label: string; url: string }[];
  index: number;
}

export default function ProjectCard({
  name,
  type,
  description,
  techStack,
  image,
  links,
  index,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true, margin: "-80px" }}
      className={`group flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-10 md:gap-16 items-center`}
    >
      {/* Screenshot */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-[220px] sm:w-[260px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={image}
            alt={`${name} screenshot`}
            width={260}
            height={560}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="260px"
          />
        </motion.div>
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 space-y-5">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-accent tracking-widest uppercase">
            {type}
          </p>
          <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-foreground mt-1">
            {name}
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base text-text-secondary leading-relaxed max-w-md"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full border border-border text-accent"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex gap-3 pt-2"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-5 py-2 rounded-full border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
