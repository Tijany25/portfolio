"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

const links = [
  { href: "#about",      label: "About"      },
  { href: "#experience", label: "Experience" },
  { href: "#skills",     label: "Skills"     },
  { href: "#projects",   label: "Projects"   },
  { href: "#contact",    label: "Contact"    },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle }     = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navBg = scrolled
    ? theme === "dark" ? "rgba(10,10,10,0.92)" : "rgba(245,245,240,0.92)"
    : "transparent";

  return (
    <header className="fixed top-0 left-0 right-0 z-50"
      style={{ background: navBg, backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none", transition: "background 0.4s, border 0.4s" }}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", color: "var(--text)" }}>
          <span style={{ color: "var(--accent)" }}>M</span>udathir
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button onClick={toggle} aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "var(--surface)", border: "1px solid var(--border-2)", color: "var(--muted)",
              transition: "all 0.2s", cursor: "pointer" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--accent)"; el.style.color = "var(--accent)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border-2)"; el.style.color = "var(--muted)"; }}>
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Hire me */}
          <a href="mailto:tijanimudathir@gmail.com"
            className="hidden md:inline-flex text-sm px-4 py-2 rounded-full"
            style={{ background: "var(--accent)", color: "var(--accent-fg)", fontWeight: 500, fontFamily: "'DM Sans', sans-serif", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            Hire me
          </a>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: "var(--text)" }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-1"
              style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
              {l.label}
            </a>
          ))}
          <a href="mailto:tijanimudathir@gmail.com" className="text-sm px-4 py-2 rounded-full text-center mt-2"
            style={{ background: "var(--accent)", color: "var(--accent-fg)", fontWeight: 500 }}>
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
