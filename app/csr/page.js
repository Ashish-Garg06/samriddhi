import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Arrow, Cluster, GraduationCap, Cpu, Briefcase, Globe, Recycle, Check } from "@/components/Icons";

export const metadata = {
  title: "CSR & Investor Partnership",
  description:
    "Partner with Samriddhi to drive measurable, ESG-aligned rural impact — across infrastructure, skilling, technology, enterprise incubation, market development and climate action.",
};

const AREAS = [
  { icon: <Cluster />, t: "Infrastructure Development" },
  { icon: <GraduationCap />, t: "Skill Training" },
  { icon: <Cpu />, t: "Technology Deployment" },
  { icon: <Briefcase />, t: "Enterprise Incubation" },
  { icon: <Globe />, t: "Market Development" },
  { icon: <Recycle />, t: "Climate Action Projects" },
];

const WHY = [
  "High Social Impact",
  "Women-Led Development",
  "ESG Alignment",
  "SDG Contribution",
  "Scalable Model",
  "Transparent Governance",
];

export default function CsrPage() {
  return (
    <>
      <PageHero
        crumb="CSR & Investors"
        eyebrow="Invest in Rural Transformation"
        title="CSR & investor partnership"
        lead="Samriddhi offers corporations, foundations, development agencies and investors a way to contribute to sustainable, measurable social impact."
      />

      {/* Areas of collaboration */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Areas for Collaboration</span>
            <h2 className="display-md">Where your support goes.</h2>
          </div>
          <div className="grid grid-3">
            {AREAS.map((a, i) => (
              <Reveal key={a.t} className="card" delay={(i % 3) * 80} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span className="card-icon" style={{ margin: 0, flex: "none" }}>{a.icon}</span>
                <h3 style={{ fontSize: "1.08rem" }}>{a.t}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="section bg-deep">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <span className="eyebrow">Why Partner with Samriddhi</span>
              <h2 className="display-md">Impact you can measure and report.</h2>
              <p className="lead mt-m" style={{ color: "var(--sage-pale)" }}>
                A women-led, scalable model with transparent governance — built to align
                with your ESG commitments and the Sustainable Development Goals.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-2" style={{ gap: 14 }}>
                {WHY.map((w) => (
                  <div
                    key={w}
                    style={{
                      display: "flex", gap: 12, alignItems: "center",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(221,231,212,0.16)",
                      borderRadius: 12, padding: "16px 18px",
                    }}
                  >
                    <span style={{ color: "var(--gold)", flex: "none" }}><Check size={20} /></span>
                    <span style={{ color: "#fff", fontWeight: 500 }}>{w}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Funding model recap */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid grid-3" style={{ textAlign: "center" }}>
            {[
              { n: "₹10 Cr", l: "Total project size" },
              { n: "3 Years", l: "Implementation horizon" },
              { n: "5", l: "Blended funding channels" },
            ].map((s) => (
              <Reveal key={s.l} className="card">
                <div className="display-md" style={{ color: "var(--terracotta)" }}>{s.n}</div>
                <p className="muted" style={{ marginTop: 8 }}>{s.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Let's build together</span>
              <h2 className="display-md">Start a partnership conversation.</h2>
              <p>Tell us about your goals and we'll design an impact pathway that fits.</p>
            </div>
            <Link href="/contact" className="btn">Contact our team <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
