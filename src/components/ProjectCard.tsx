"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const dragProgress = useTransform(dragX, [-100, 0, 100], [0.5, 1, 0.5]);

  const goTo = (index: number) => {
    setCurrentImage(index);
  };

  const nextImage = () => goTo((currentImage + 1) % images.length);
  const prevImage = () =>
    goTo((currentImage - 1 + images.length) % images.length);

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (offset < -threshold || velocity < -500) {
      nextImage();
    } else if (offset > threshold || velocity > 500) {
      prevImage();
    }

    animate(dragX, 0, { type: "spring", stiffness: 300, damping: 30 });
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
      <div
        ref={containerRef}
        className="relative bg-background overflow-hidden"
        style={{ aspectRatio: "9/16", maxHeight: "420px" }}
      >
        {/* Swipeable image area */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          style={{ x: dragX, opacity: dragProgress }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing touch-pan-y"
        >
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                key={currentImage}
                src={images[currentImage]}
                alt={`${name} screenshot ${currentImage + 1}`}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                draggable={false}
              />
            </div>
          </div>
        </motion.div>

        {/* Desktop arrow buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 border border-border text-foreground text-xs items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Previous image"
            >
              &larr;
            </button>
            <button
              onClick={nextImage}
              className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 border border-border text-foreground text-xs items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Next image"
            >
              &rarr;
            </button>
          </>
        )}

        {/* Dot indicators — always visible */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === currentImage
                    ? "w-4 h-1.5 bg-foreground"
                    : "w-1.5 h-1.5 bg-foreground/30"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image counter for mobile */}
        {images.length > 1 && (
          <div className="sm:hidden absolute top-3 right-3 font-mono text-[10px] text-text-secondary bg-background/70 backdrop-blur-sm px-2 py-0.5 rounded z-10">
            {currentImage + 1}/{images.length}
          </div>
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
