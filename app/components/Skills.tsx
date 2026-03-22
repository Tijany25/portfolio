"use client";
import { skills } from "@/lib/data";

const services = [
  { icon: "⬡", title: "Web Development",  desc: "Scalable, performant web apps with React, Next.js, and Angular." },
  { icon: "◎", title: "API Integration",   desc: "Robust REST APIs and third-party integrations with Node.js." },
  { icon: "▣", title: "Mobile Dev",        desc: "Cross-platform mobile apps with React Native and Expo." },
  { icon: "◈", title: "Product Strategy",  desc: "Technical consulting with a business-impact lens." },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif" }}>Capabilities</p>
        <h2 className="leading-tight mb-16"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", letterSpacing: "-0.02em" }}>
          Skills &amp; Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-8" style={{ color: "var(--faint)", fontFamily: "'DM Sans', sans-serif" }}>Technical proficiency</h3>
            <div className="flex flex-col gap-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm" style={{ color: "var(--text-2)", fontFamily: "'DM Sans', sans-serif" }}>{skill.name}</span>
                    <span className="text-xs" style={{ color: "var(--faint)", fontFamily: "'DM Sans', sans-serif" }}>{skill.level}%</span>
                  </div>
                  <div className="h-px rounded-full" style={{ background: "var(--border)", position: "relative" }}>
                    <div className="h-px rounded-full absolute top-0 left-0"
                      style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, var(--accent) 0%, rgba(232,255,71,0.3) 100%)` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-8" style={{ color: "var(--faint)", fontFamily: "'DM Sans', sans-serif" }}>What I offer</h3>
            <div className="grid grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.title} className="p-5 rounded-xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div className="text-2xl mb-3" style={{ color: "var(--accent)", lineHeight: 1 }}>{s.icon}</div>
                  <h4 className="text-sm font-medium mb-2" style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}>{s.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
