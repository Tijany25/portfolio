"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import Masonry from "react-masonry-css";

const categories = ["All", "Full Stack", "E-Commerce", "Web App", "Web Design", "Mobile", "Backend"];
const heights    = [300, 260, 340, 220, 290, 260, 310, 240];

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

      {/* Accent glow */}
      <div className="card-overlay absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse at 20% 80%, ${project.accentColor}20, transparent 55%)`,
      }} />

      {/* Top */}
      <div className="relative z-10 flex items-start justify-between gap-2 mb-4">
        <span className="text-xs px-2.5 py-1 rounded-full"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "#aaa", fontFamily: "'DM Sans', sans-serif" }}>
          {project.category}
        </span>
        <span className="card-link-btn w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: project.accentColor, color: "#000" }}>
          <ArrowUpRight size={13} />
        </span>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-auto">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-md"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#777", fontFamily: "'DM Sans', sans-serif" }}>
              {t}
            </span>
          ))}
          <span className="text-xs px-2 py-0.5 rounded-md" style={{ color: "#555", fontFamily: "'DM Sans', sans-serif" }}>{project.year}</span>
        </div>
        <h3 className="leading-tight mb-0"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#e8e8e8", letterSpacing: "-0.02em" }}>
          {project.title}
        </h3>
        <div className="card-overlay mt-2">
          <p className="text-xs leading-relaxed" style={{ color: "#888", fontFamily: "'DM Sans', sans-serif" }}>{project.description}</p>
        </div>
      </div>
    </a>
  );
}

const breakpoints = { default: 4, 1100: 3, 768: 2, 480: 1 };

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header bar */}
      <div className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm"
            style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
            <ArrowLeft size={14} /> Back home
          </Link>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--text)", fontSize: "18px" }}>
            <span style={{ color: "var(--accent)" }}>M</span>udathir
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-24">
        {/* Page title */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif" }}>All work</p>
          <h1 className="leading-tight mb-3"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "var(--text)", letterSpacing: "-0.03em" }}>
            Projects
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
            {projects.length} projects across web, mobile, and API development.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="px-4 py-1.5 rounded-full text-xs"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: active === cat ? "var(--accent)" : "var(--surface)",
                color: active === cat ? "var(--accent-fg)" : "var(--muted)",
                border: `1px solid ${active === cat ? "var(--accent)" : "var(--border-2)"}`,
                fontWeight: active === cat ? 500 : 400,
                cursor: "pointer",
                transition: "all 0.2s",
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <Masonry breakpointCols={breakpoints} className="masonry-grid" columnClassName="masonry-col">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </Masonry>

        {/* GitHub */}
        <div className="mt-12 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div>
            <h3 className="text-lg mb-1" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--text)" }}>More on GitHub</h3>
            <p className="text-sm" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>Explore open-source projects, experiments, and contributions.</p>
          </div>
          <a href="https://github.com/Tijany25" target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm shrink-0"
            style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}>
            <Github size={14} /> github.com/Tijany25
          </a>
        </div>
      </div>

      <div className="border-t py-8" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--faint)", fontFamily: "'DM Sans', sans-serif" }}>© {new Date().getFullYear()} Mudathir Tijani</span>
          <Link href="/" className="text-xs" style={{ color: "var(--faint)", fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}>← Back to portfolio</Link>
        </div>
      </div>
    </main>
  );
}
