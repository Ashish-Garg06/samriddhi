import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Arrow, Beaker, GraduationCap, Briefcase, Cart } from "@/components/Icons";

export const metadata = {
  title: "Smart Village Centres",
  description:
    "Three Smart Village Centres serving as hubs for innovation, skill development, enterprise incubation and technology dissemination across rural Himachal.",
};

const FUNCTIONS = [
  {
    icon: <Beaker />, img: "/images/fn-tech.jpg", alt: "Women operating herbal and essential-oil processing equipment",
    title: "Technology Demonstration",
    items: ["Food Processing Technologies", "Herbal Processing Systems", "Essential Oil Extraction Units", "Renewable Energy Solutions"],
  },
  {
    icon: <GraduationCap />, img: "/images/fn-skill.jpg", alt: "Women in a digital skills training session",
    title: "Skill Development",
    items: ["Entrepreneurship Training", "Digital Literacy", "Financial Literacy", "Quality Management"],
  },
  {
    icon: <Briefcase />, img: "/images/fn-enterprise.jpg", alt: "Women reviewing packaged products and business plans",
    title: "Enterprise Support",
    items: ["Product Development", "Packaging Design", "Market Research", "Business Advisory Services"],
  },
  {
    icon: <Cart />, img: "/images/fn-digital.jpg", alt: "Online storefront and digital payment on a laptop and phone",
    title: "Digital Services",
    items: ["E-Commerce Enablement", "ERP & Inventory Management", "Online Marketing", "Digital Payments"],
  },
];

export default function SmartVillagePage() {
  return (
    <>
      <PageHero
        crumb="Smart Village Centres"
        eyebrow="Smart Village Centres"
        title="Technology for rural prosperity"
        lead="Samriddhi will establish three Smart Village Centres — hubs for innovation, skill development, enterprise incubation and technology dissemination."
      />

      {/* Building feature */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <span className="eyebrow">The hub model</span>
              <h2 className="display-md">A home for innovation in every cluster.</h2>
              <p className="mt-m">
                Each Smart Village Centre brings modern processing, training, advisory and
                digital infrastructure directly into the heart of rural Himachal — so women
                entrepreneurs can build, brand and sell without leaving their communities.
              </p>
              <div className="grid grid-2 mt-m" style={{ gap: 14 }}>
                {["Women Led", "Sustainable", "Technology Driven", "Community Empowered"].map((t) => (
                  <span key={t} className="tag" style={{ justifySelf: "start" }}>{t}</span>
                ))}
              </div>
            </Reveal>
            <Reveal className="split-media" delay={120}>
              <img src="/images/svc-building.jpg" alt="The Samriddhi Smart Village Centre building with solar panels against the Himalayas" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key functions */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow center-eb">Key Functions</span>
            <h2 className="display-md">Four pillars under one roof.</h2>
          </div>
          <div className="grid grid-2">
            {FUNCTIONS.map((f, i) => (
              <Reveal key={f.title} className="fn-card" delay={(i % 2) * 90}>
                <img src={f.img} alt={f.alt} />
                <div className="fn-card-body">
                  <div className="card-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <ul className="leaf-list">{f.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strip */}
      <section className="section bg-deep center">
        <div className="wrap">
          <h2 className="display-md" style={{ maxWidth: "20ch", margin: "0 auto" }}>
            Smart technology. Skilled women. Sustainable future.
          </h2>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 30 }}>
            <Link href="/women-entrepreneurs" className="btn">Meet the entrepreneurs <Arrow /></Link>
            <Link href="/contact" className="btn btn--light">Support a centre</Link>
          </div>
        </div>
      </section>
    </>
  );
}
