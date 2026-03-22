"use client";
import Link from "next/link";
import { ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import Masonry from "react-masonry-css";

// Each project gets a visual "height weight" to create visual variety
const heights = [280, 340, 220, 300, 260, 320, 240, 290];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const minH = heights[index % heights.length];

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card block rounded-2xl overflow-hidden relative mb-4"
      style={{
        background: project.color,
        border: "1px solid rgba(255,255,255,0.06)",
        minHeight: `${minH}px`,
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "22px",
      }}
    >
      {/* Dot texture */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        pointerEvents: "none",
      }} />

      {/* Accent glow on hover */}
      <div className="card-overlay absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse at 20% 80%, ${project.accentColor}20, transparent 55%)`,
      }} />

      {/* Top: category + year */}
      <div className="relative z-10 flex items-start justify-between gap-2 mb-4">
        <span className="text-xs px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#aaa",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.04em",
          }}>
          {project.category}
        </span>
        <span className="card-link-btn w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: project.accentColor, color: "#000" }}>
          <ArrowUpRight size={13} />
        </span>
      </div>

      {/* Bottom: title + tags + description */}
      <div className="relative z-10 mt-auto">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-md"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#777",
                fontFamily: "'DM Sans', sans-serif",
              }}>
              {t}
            </span>
          ))}
          <span className="text-xs px-2 py-0.5 rounded-md"
            style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}>
            {project.year}
          </span>
        </div>

        <h3 className="leading-tight mb-0"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#e8e8e8",
            letterSpacing: "-0.02em",
          }}>
          {project.title}
        </h3>

        {/* Description slides up on hover */}
        <div className="card-overlay mt-2">
          <p className="text-xs leading-relaxed" style={{ color: "#888", fontFamily: "'DM Sans', sans-serif" }}>
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
}

const breakpoints = {
  default: 4,
  1100: 3,
  768: 2,
  480: 1,
};

export default function Projects() {
  const preview = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 md:py-32" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif" }}>
              Work
            </p>
            <h2 className="leading-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm self-start md:self-auto"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-2)",
              color: "var(--muted)",
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border-2)")}>
            View all <ArrowRight size={14} />
          </Link>
        </div>

        {/* Masonry grid */}
        <Masonry
          breakpointCols={breakpoints}
          className="masonry-grid"
          columnClassName="masonry-col"
        >
          {preview.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </Masonry>

        {/* View all */}
        <div className="mt-6 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-sm"
            style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
            <span style={{ color: "var(--accent)", opacity: 0.7 }}>✦</span>
            See all {projects.length} projects
            <span style={{ color: "var(--accent)", opacity: 0.7 }}>✦</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
