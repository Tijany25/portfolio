"use client";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t" style={{ background: "var(--bg-2)", borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--text)", fontSize: "18px" }}>
            <span style={{ color: "var(--accent)" }}>M</span>udathir
          </span>
          <span className="text-xs" style={{ color: "var(--faint)", fontFamily: "'DM Sans', sans-serif" }}>· Freelance Software Engineer</span>
        </div>
        <p className="text-xs" style={{ color: "var(--faint)", fontFamily: "'DM Sans', sans-serif" }}>
          © {new Date().getFullYear()} Mudathir Tijani. Built with Next.js.
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: "https://twitter.com/tijany_M",              icon: <Twitter  size={14} /> },
            { href: "https://github.com/Tijany25",               icon: <Github   size={14} /> },
            { href: "https://www.linkedin.com/in/mudathirtijani", icon: <Linkedin size={14} /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank"
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--muted)", transition: "color 0.2s, border-color 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--accent)"; el.style.borderColor = "var(--accent)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--muted)"; el.style.borderColor = "var(--border)"; }}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
