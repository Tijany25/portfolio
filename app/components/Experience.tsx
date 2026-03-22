"use client";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif" }}>Background</p>
            <h2 className="leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", letterSpacing: "-0.02em" }}>
              Education &amp;<br />Certifications
            </h2>
          </div>
          <p className="max-w-xs text-sm" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
            A self-directed learner with a diverse academic and professional background.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {experience.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}>
              <div className="flex items-start justify-between mb-3 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-1" style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}>{item.title}</h3>
                  <p className="text-xs" style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif" }}>{item.org}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-md shrink-0"
                  style={{ background: "var(--surface-2)", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", border: "1px solid var(--border-2)" }}>
                  {item.period}
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://drive.google.com/file/d/1ZAVYpg2PGMuFnvD6Tv50j-4MiCRhYDG2/view?usp=sharing" target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm"
            style={{ background: "var(--surface)", border: "1px solid var(--border-2)", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
            View full resume →
          </a>
        </div>
      </div>
    </section>
  );
}
