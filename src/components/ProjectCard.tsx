"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  name: string;
  type: string;
  description: string;
  techStack: string[];
  images: string[];
  links: { label: string; url: string }[];
}

export default function ProjectCard({
  name,
  type,
  description,
  techStack,
  images,
  links,
}: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group rounded-lg border border-border bg-panel overflow-hidden transition-all duration-300 hover:border-accent/50"
    >
      {/* Image Gallery */}
      <div className="relative aspect-[9/16] max-h-[420px] bg-background overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src={images[currentImage]}
              alt={`${name} screenshot ${currentImage + 1}`}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 border border-border text-foreground text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              &larr;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 border border-border text-foreground text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              &rarr;
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === currentImage
                      ? "bg-foreground"
                      : "bg-foreground/30"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-4">
        <div>
          <p className="font-mono text-[10px] text-text-secondary tracking-widest uppercase">
            {type}
          </p>
          <h3 className="font-mono text-lg font-semibold mt-1">{name}</h3>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2 py-0.5 rounded border border-border text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono px-4 py-2 rounded border border-border text-text-secondary hover:text-foreground hover:border-accent/50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
