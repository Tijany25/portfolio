"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Github, Linkedin, Twitter } from "lucide-react";

const techMarquee = ["React JS","Next.js","TypeScript","Node.js","Angular","React Native","NestJS","Django","PostgreSQL","AWS","REST APIs","TDD"];
const ROLES = ["Freelance Software Engineer", "Full Stack Developer", "React / Next.js Specialist", "Problem Solver"];

function useTypewriter(words: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const role = useTypewriter(ROLES);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    type Dot = { x: number; y: number; vx: number; vy: number; r: number };
    const dots: Dot[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 0.4,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw connections first
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(232,255,71,${0.045 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      // Draw dots
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(232,255,71,0.18)";
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }} />

      {/* Ambient glows */}
      <div className="absolute pointer-events-none" style={{ top: "-15%", right: "-5%", width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 65%)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "5%", left: "-8%", width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(100,180,255,0.04) 0%, transparent 65%)" }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">

        {/* Badge — anim 1 */}
        <div className="anim-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-10 text-xs"
          style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
          Available for new projects
        </div>

        {/* Name — anim 2 */}
        <h1 className="anim-2 mb-4 leading-[0.95]"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(3.2rem, 9vw, 7.5rem)", letterSpacing: "-0.03em", color: "var(--text)" }}>
          Mudathir<br />
          <span>Tijani</span><span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        {/* Typewriter role — anim 3 */}
        <div className="anim-3 mb-8 h-8 flex items-center">
          <span className="text-lg md:text-xl" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
            {role}
          </span>
          <span className="cursor-blink ml-0.5 inline-block w-0.5 h-5 rounded-sm" style={{ background: "var(--accent)" }} />
        </div>

        {/* Body + CTAs — anim 4 */}
        <div className="anim-4 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-md">
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
              Building business-first digital solutions with React, Next.js, Node.js, Django, Angular and everything in between.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
                style={{ background: "var(--accent)", color: "var(--accent-fg)", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                View my work <ArrowDownRight size={14} />
              </a>
              <a href="https://drive.google.com/file/d/1ZAVYpg2PGMuFnvD6Tv50j-4MiCRhYDG2/view?usp=sharing" target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
                style={{ background: "var(--surface)", color: "var(--text-2)", border: "1px solid var(--border-2)", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border-2)")}>
                Download CV
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://twitter.com/tijany_M",             icon: <Twitter  size={15} />, label: "Twitter"  },
              { href: "https://github.com/Tijany25",               icon: <Github   size={15} />, label: "GitHub"   },
              { href: "https://www.linkedin.com/in/mudathirtijani", icon: <Linkedin size={15} />, label: "LinkedIn" },
            ].map((s) => (
              <a key={s.href} href={s.href} target="_blank" aria-label={s.label}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--surface)", border: "1px solid var(--border-2)", color: "var(--muted)", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--accent)"; el.style.color = "var(--accent)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border-2)"; el.style.color = "var(--muted)"; }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Stats — anim 5 */}
        <div className="anim-5 grid grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          {[
            { value: "6+",  label: "Years exp."    },
            { value: "20+", label: "Projects"      },
            { value: "10+", label: "Happy clients" },
          ].map((s) => (
            <div key={s.label} className="px-6 py-5" style={{ background: "var(--surface)" }}>
              <div className="text-2xl mb-1" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--accent)" }}>{s.value}</div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden py-4 border-t border-b" style={{ borderColor: "var(--border)" }}>
        <div className="marquee-track flex gap-8 whitespace-nowrap w-max">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span key={i} className="text-xs uppercase tracking-widest flex items-center gap-8"
              style={{ color: "var(--faint)", fontFamily: "'DM Sans', sans-serif" }}>
              {t}<span style={{ color: "var(--accent)", opacity: 0.5 }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
