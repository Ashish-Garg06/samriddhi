import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SprigDivider from "@/components/SprigDivider";
import { Arrow, LeafSolid, ChevronRight } from "@/components/Icons";

export const metadata = {
  title: "About Us",
  description:
    "The Samriddhi story — an integrated rural enterprise ecosystem turning Himachal's natural wealth into sustainable, women-led livelihoods.",
};

const MISSION = [
  "Empower rural women through entrepreneurship.",
  "Promote value addition of local resources.",
  "Develop sustainable, climate-resilient livelihoods.",
  "Create market-driven rural enterprises.",
  "Facilitate access to technology and innovation.",
  "Strengthen rural institutions and producer networks.",
];

const UNIQUE = [
  "Women-led enterprise model",
  "Cluster-based production systems",
  "Smart Village Technology Centres",
  "Scientific processing and quality assurance",
  "Sustainable harvesting and climate-sensitive practices",
  "Digital marketing and e-commerce integration",
  "Market-oriented product development",
  "Convergence of government, industry, academia and community",
];

const STAGES = [
  { no: "01", title: "Village Level", items: ["Self Help Groups (SHGs)", "Women Producer Groups", "Farmer Collectives"] },
  { no: "02", title: "Cluster Level", items: ["Collection & aggregation centres", "Processing units", "Packaging & branding facilities"] },
  { no: "03", title: "Enterprise Level", items: ["Samriddhi SPV / Producer Enterprise", "Marketing & distribution", "Export facilitation"] },
  { no: "04", title: "Market Level", items: ["Retail markets", "Institutional buyers", "E-commerce platforms", "Export markets"] },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The Samriddhi story"
        lead="An integrated rural enterprise ecosystem where Himachal's natural wealth becomes sustainable, women-led prosperity."
      />

      {/* Story */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <span className="eyebrow">Bridging the gap</span>
              <h2 className="display-md">Abundant resources, untapped opportunity.</h2>
              <p className="mt-m">
                Himachal Pradesh is blessed with rich biodiversity, medicinal plants,
                horticultural wealth and vibrant rural communities. Despite these
                resources, many rural families face challenges in reaching markets,
                technology and value-added opportunity.
              </p>
              <p className="mt-s">
                Samriddhi was conceptualised to bridge this gap — transforming locally
                available resources into high-value products while generating sustainable
                livelihoods for women and youth.
              </p>
              <p className="mt-s">
                The initiative combines community participation, scientific innovation,
                entrepreneurship development and market linkages into a model of inclusive
                rural development.
              </p>
            </Reveal>
            <Reveal className="split-media" delay={120}>
              <img src="/images/products-table.jpg" alt="A spread of Samriddhi natural products with the Himalayas behind" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid grid-2" style={{ gap: 30 }}>
            <Reveal className="card" style={{ padding: "36px 38px" }}>
              <span className="pill-soft">Our Vision</span>
              <h2 className="display-md" style={{ marginTop: 16 }}>
                Himachal as a hub for sustainable rural enterprise.
              </h2>
              <p className="mt-m">
                To position Himachal Pradesh as a leading hub for sustainable rural
                enterprises through a network of women-led businesses that generate income,
                conserve natural resources and strengthen local economies.
              </p>
            </Reveal>
            <Reveal className="card" delay={100} style={{ padding: "36px 38px" }}>
              <span className="pill-soft">Our Mission</span>
              <ul className="leaf-list mt-m">
                {MISSION.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What makes unique */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What Makes Samriddhi Unique</span>
            <h2 className="display-md">Eight things that set the model apart.</h2>
          </div>
          <div className="grid grid-2" style={{ gap: "6px 40px" }}>
            <ul className="leaf-list">{UNIQUE.slice(0, 4).map((u) => <li key={u}>{u}</li>)}</ul>
            <ul className="leaf-list">{UNIQUE.slice(4).map((u) => <li key={u}>{u}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* The model */}
      <section className="section bg-deep">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow center-eb">The Samriddhi Model</span>
            <h2 className="display-md">Community to market approach.</h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>
              This integrated value chain ensures the maximum economic value remains within rural communities.
            </p>
          </div>
          <div className="chain">
            {STAGES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 70}
                className="chain-step"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(221,231,212,0.16)" }}
              >
                <span className="step-no">Stage {s.no}</span>
                <h3 style={{ color: "#fff" }}>{s.title}</h3>
                <ul>{s.items.map((it) => <li key={it} style={{ color: "var(--sage-pale)" }}>{it}</li>)}</ul>
                <span className="step-arrow"><ChevronRight size={15} /></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section center">
        <div className="wrap">
          <SprigDivider />
          <h2 className="display-md" style={{ margin: "20px 0 18px" }}>Be part of the movement.</h2>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/products" className="btn btn--green">See our products <Arrow /></Link>
            <Link href="/csr" className="btn btn--ghost">Partner with us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
