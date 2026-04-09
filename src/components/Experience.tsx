"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "Kwurah",
    role: "Mobile Developer",
    location: "Remote",
    period: "Jan 2025 — Present",
  },
  {
    company: "Elowen Kids Academy",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Nov 2023 — Dec 2025",
  },
  {
    company: "Forbikrs",
    role: "Mobile Developer",
    location: "Remote",
    period: "Nov 2023 — Jul 2025",
  },
  {
    company: "Tizela",
    role: "Mobile Developer",
    location: "Remote",
    period: "Aug 2024 — Dec 2024",
  },
  {
    company: "SoftworldInc",
    role: "Mobile Developer",
    location: "Lagos, Nigeria",
    period: "Jan 2024 — Jul 2024",
  },
  {
    company: "Axios Choir",
    role: "Music Director",
    location: "Ogun, Nigeria",
    period: "Sep 2022 — Jul 2025",
  },
];

const education = {
  school: "Babcock University",
  degree: "Software Engineering",
  year: "2025",
};

const skills = [
  "Dart",
  "Flutter",
  "Swift",
  "SwiftUI",
  "UIKit",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Python",
  "FastAPI",
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 sm:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-sm text-accent tracking-widest uppercase mb-3">
              Experience
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-foreground">
              Where I&apos;ve Worked
            </h2>
          </div>
          <a
            href="/Temiloluwa-Akisanya-CV.pdf"
            download
            className="text-sm px-5 py-2.5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors duration-200 w-fit"
          >
            Download CV
          </a>
        </motion.div>

        {/* Experience rows */}
        <div className="border-t border-border">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group border-b border-border py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:bg-foreground/[0.02] transition-colors duration-200 -mx-4 px-4 rounded"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground">
                  {exp.company}
                </h3>
                <p className="text-sm text-text-secondary mt-0.5">{exp.role}</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-8 text-sm text-accent">
                <span>{exp.location}</span>
                <span className="text-text-secondary">{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education + Skills */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-accent tracking-widest uppercase mb-6">
              Education
            </p>
            <h3 className="font-display font-semibold text-xl text-foreground">
              {education.school}
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              {education.degree} · {education.year}
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-accent tracking-widest uppercase mb-6">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-4 py-1.5 rounded-full border border-border text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
