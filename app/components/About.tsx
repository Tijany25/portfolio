"use client";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl relative overflow-hidden"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="glow1" cx="50%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="#e8ff47" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#e8ff47" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="400" height="500" fill="url(#glow1)" />
                <circle cx="200" cy="160" r="70" fill="none" stroke="#262626" strokeWidth="1" />
                <circle cx="200" cy="160" r="50" fill="#161616" />
                <circle cx="200" cy="160" r="35" fill="#1a1a1a" />
                <text x="200" y="168" textAnchor="middle" fill="#e8ff47" fontSize="28" fontFamily="Syne, sans-serif" fontWeight="700">MT</text>
                <rect x="120" y="260" width="160" height="160" rx="12" fill="#161616" stroke="#262626" strokeWidth="1" />
                <line x1="140" y1="290" x2="260" y2="290" stroke="#2a2a2a" strokeWidth="1" />
                <line x1="140" y1="310" x2="240" y2="310" stroke="#2a2a2a" strokeWidth="1" />
                <line x1="140" y1="330" x2="220" y2="330" stroke="#2a2a2a" strokeWidth="1" />
                <rect x="140" y="355" width="60" height="22" rx="4" fill="#e8ff47" opacity="0.15" />
                <text x="170" y="370" textAnchor="middle" fill="#e8ff47" fontSize="9" fontFamily="DM Sans" opacity="0.8">Software Developer</text>
              </svg>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs"
                style={{ background: "rgba(232,255,71,0.1)", border: "1px solid rgba(232,255,71,0.2)", color: "#e8ff47", fontFamily: "'DM Sans', sans-serif" }}>
                Full Stack
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
              style={{ border: "1px solid var(--border)", background: "var(--bg-2)" }} />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif" }}>About me</p>
            <h2 className="mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", letterSpacing: "-0.02em" }}>
              Building software that moves businesses forward
            </h2>
            <p className="mb-4 leading-relaxed text-sm" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
              I'm a young, driven software engineer who enjoys solving real business problems through code. My approach has always been impact-first — before writing a line, I ask: how does this move the needle for the business?
            </p>
            <p className="mb-8 leading-relaxed text-sm" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
              From healthcare platforms serving thousands of patients to e-commerce experiences that drive conversions, my work is shaped by outcomes. I bring a B.Sc. in Chemistry and 5+ years of engineering experience to every project.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Name",     value: "Mudathir Tijani"          },
                { label: "Email",    value: "tijanimudathir@gmail.com"  },
               { label: "Linkedin", value: "https://www.linkedin.com/in/mudathirtijani/" },
              ].map((info) => (
                <div key={info.label}>
                  <div className="text-xs mb-0.5 uppercase tracking-widest" style={{ color: "var(--faint)", fontFamily: "'DM Sans', sans-serif" }}>{info.label}</div>
                  <div className="text-sm" style={{ color: "var(--text-2)", fontFamily: "'DM Sans', sans-serif" }}>{info.value}</div>
                </div>
              ))}
            </div>
            <a href="https://drive.google.com/file/d/1ZAVYpg2PGMuFnvD6Tv50j-4MiCRhYDG2/view?usp=sharing" target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{ background: "var(--accent)", color: "var(--accent-fg)" }}>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
