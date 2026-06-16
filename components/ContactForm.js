"use client";
import { useState } from "react";
import { Arrow, Check } from "./Icons";

const INTERESTS = [
  "General enquiry",
  "Donate / support",
  "CSR partnership",
  "Investment",
  "Wholesale / export of products",
  "Volunteering",
];

export default function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", org: "", interest: INTERESTS[0], message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }
    setError("");
    // Compose a mailto so the message reaches the team even without a backend.
    const subject = encodeURIComponent(`[${data.interest}] Enquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nOrganisation: ${data.org || "—"}\nInterest: ${data.interest}\n\n${data.message}`
    );
    if (typeof window !== "undefined") {
      window.location.href = `mailto:info@samriddhi.org?subject=${subject}&body=${body}`;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form">
        <div className="form-success">
          <Check size={22} /> Thank you, {data.name.split(" ")[0] || "friend"}. Your email client should
          open with the message ready to send to our team.
        </div>
        <p className="form-note">
          If nothing opened, write to us directly at <strong>info@samriddhi.org</strong>.
        </p>
        <button className="btn btn--ghost" style={{ marginTop: 18 }} onClick={() => { setSent(false); setData({ name: "", email: "", org: "", interest: INTERESTS[0], message: "" }); }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Full name *</label>
          <input id="name" type="text" value={data.name} onChange={update("name")} placeholder="Your name" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" value={data.email} onChange={update("email")} placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="org">Organisation</label>
          <input id="org" type="text" value={data.org} onChange={update("org")} placeholder="Company / foundation (optional)" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="interest">I'm interested in</label>
          <select id="interest" value={data.interest} onChange={update("interest")}>
            {INTERESTS.map((i) => <option key={i}>{i}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Message *</label>
        <textarea id="message" value={data.message} onChange={update("message")} placeholder="Tell us how you'd like to get involved…" />
      </div>

      {error && <p className="form-note" style={{ color: "var(--terracotta)", fontWeight: 600 }}>{error}</p>}

      <button type="submit" className="btn" style={{ width: "100%", justifyContent: "center" }}>
        Send message <Arrow />
      </button>
      <p className="form-note">
        This opens your email app addressed to info@samriddhi.org. We typically reply within a few working days.
      </p>
    </form>
  );
}
