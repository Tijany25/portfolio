"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const inputStyle = {
    background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)",
    fontFamily: "'DM Sans', sans-serif", outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif" }}>Get in touch</p>
          <h2 className="leading-tight mb-4"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", letterSpacing: "-0.02em" }}>
            Let's work together
          </h2>
          <p className="text-sm max-w-lg" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
            Open to new projects, collaborations, or just a conversation about tech. Don't hesitate to reach out.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 flex flex-col gap-6">
            {[
              { icon: <Phone size={14} />,    label: "Phone",    value: "+234 706 549 1448",         href: "tel:+2347065491448" },
              { icon: <Mail size={14} />,     label: "Email",    value: "tijanimudathir@gmail.com",  href: "mailto:tijanimudathir@gmail.com" },
              { icon: <Linkedin size={14} />, label: "LinkedIn", value: "linkedin.com/in/mudathirtijani", href: "https://www.linkedin.com/in/mudathirtijani" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--accent)" }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs mb-0.5 uppercase tracking-widest" style={{ color: "var(--faint)", fontFamily: "'DM Sans', sans-serif" }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                        className="text-sm" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>{item.value}</a>
                    : <span className="text-sm" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>{item.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {["name", "email"].map((k) => (
                <input key={k} type={k === "email" ? "email" : "text"} placeholder={k === "name" ? "Your name" : "Email address"}
                  value={form[k as keyof typeof form]}
                  onChange={e => setForm({ ...form, [k]: e.target.value })}
                  className="px-4 py-3 rounded-xl text-sm" style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")} />
              ))}
            </div>
            <input type="text" placeholder="Subject" value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-sm mb-4" style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")} />
            <textarea placeholder="Tell me about your project..." rows={5} value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-sm mb-4 resize-none" style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")} />
            <a href={`mailto:tijanimudathir@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Hi Mudathir,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: "var(--accent)", color: "var(--accent-fg)" }}>
              <Send size={14} /> Send message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
