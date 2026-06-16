import Link from "next/link";
import Reveal from "@/components/Reveal";
import StatRibbon from "@/components/StatRibbon";
import SprigDivider from "@/components/SprigDivider";
import {
  Arrow, LeafSolid, Users, Cluster, Box, Globe, Beaker, Drop, Spa,
  Recycle, Sparkle, Cpu, Heart, ChevronRight, Chart,
} from "@/components/Icons";

const UNIQUE = [
  { icon: <Users />, title: "Women-led enterprise", text: "Women own and run the enterprises — as producers, entrepreneurs and decision-makers." },
  { icon: <Cluster />, title: "Cluster-based production", text: "Collection, processing and branding organised across three village clusters for scale." },
  { icon: <Cpu />, title: "Smart Village Centres", text: "Technology hubs for innovation, skilling, incubation and digital enablement." },
  { icon: <Beaker />, title: "Scientific processing", text: "Modern processing and quality assurance built into every product line." },
  { icon: <Recycle />, title: "Sustainable harvesting", text: "Climate-sensitive, sustainable practices that protect Himachal's biodiversity." },
  { icon: <Globe />, title: "Digital & e-commerce", text: "Market-oriented products taken online through e-commerce integration." },
];

const STAGES = [
  { no: "Stage 01", title: "Village", items: ["Self Help Groups (SHGs)", "Women Producer Groups", "Farmer Collectives"], note: "Strong communities, strong foundations." },
  { no: "Stage 02", title: "Cluster", items: ["Collection & aggregation centres", "Processing units", "Packaging & branding"], note: "Adding value, ensuring quality." },
  { no: "Stage 03", title: "Enterprise", items: ["Samriddhi SPV / producer enterprise", "Marketing & distribution", "Export facilitation"], note: "Growing enterprises, expanding reach." },
  { no: "Stage 04", title: "Market", items: ["Retail markets", "Institutional buyers", "E-commerce & export markets"], note: "Connecting to markets, creating opportunity." },
];

const PRODUCT_TEASE = [
  { icon: <LeafSolid />, name: "Agro-Processed", ex: "Amla candy · pickles · jams" },
  { icon: <Drop />, name: "Herbal Teas", ex: "Tulsi · lemongrass · rhododendron" },
  { icon: <Sparkle />, name: "Essential Oils", ex: "Lavender · rosemary · mint" },
  { icon: <Spa />, name: "Natural Cosmetics", ex: "Soaps · lip balms · body oils" },
  { icon: <Recycle />, name: "Eco-Friendly", ex: "Pine-needle briquettes & crafts" },
  { icon: <Beaker />, name: "Ayurvedic & Wellness", ex: "Herbal powders · formulations" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-tint" />
        <div className="wrap">
          <div className="hero-inner">
            <div className="hero-copy">
              <Reveal as="span" className="eyebrow">A Women-Led Rural Enterprise Movement</Reveal>
              <Reveal as="h1" className="display-xl" delay={80}>
                Samriddhi<br /><span className="ital">prosperity, rooted</span><br />in Himachal.
              </Reveal>
              <Reveal as="p" className="lead" delay={160}>
                Empowering 3,000 rural women across 15 villages to transform local
                agro-products, medicinal plants, herbal goods and essential oils into
                high-value products for domestic and export markets.
              </Reveal>
              <Reveal className="btn-row" delay={220}>
                <Link href="/about" className="btn">Join the Movement <Arrow /></Link>
                <Link href="/contact" className="btn btn--ghost">Donate</Link>
              </Reveal>
            </div>

            <Reveal className="hero-figure" delay={140}>
              <div className="hero-photo">
                <img src="/images/hero-women.jpg" alt="Women of Himachal Pradesh sorting herbs and natural products on a terraced hillside" />
              </div>
              <div className="hero-leaf-badge">
                <span style={{ color: "var(--gold)" }}><LeafSolid size={20} /></span>
                <b>3,000</b><span>women</span>
              </div>
              <div className="hero-vm">
                <h4>Our Vision</h4>
                <p>Prosperous rural communities through sustainable enterprise.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatRibbon />

      {/* INTRO / STORY */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <span className="eyebrow">The Samriddhi Story</span>
              <h2 className="display-lg">Where traditional knowledge meets modern enterprise.</h2>
              <p className="lead mt-m">
                Himachal Pradesh is blessed with rich biodiversity, medicinal plants and
                horticultural wealth — yet many rural families struggle to reach markets,
                technology and value-added opportunity.
              </p>
              <p className="mt-s">
                Samriddhi bridges that gap with an integrated rural enterprise ecosystem
                that turns locally available resources into high-value products, generating
                sustainable livelihoods for women and youth through community participation,
                scientific innovation and market linkages.
              </p>
              <Link href="/about" className="btn btn--green mt-m">Read our story <Arrow /></Link>
            </Reveal>
            <Reveal className="split-media" delay={120}>
              <img src="/images/products-table.jpg" alt="Samriddhi natural products including herbal tea, candy, oils and soap against a Himalayan backdrop" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT MAKES UNIQUE */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow center-eb">What Makes Samriddhi Unique</span>
            <h2 className="display-lg">A model built for rural communities to thrive.</h2>
          </div>
          <div className="grid grid-3">
            {UNIQUE.map((u, i) => (
              <Reveal key={u.title} className="card" delay={(i % 3) * 80}>
                <div className="card-icon">{u.icon}</div>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE MODEL */}
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow center-eb">The Samriddhi Model</span>
            <h2 className="display-lg">From community to market.</h2>
            <p className="lead" style={{ margin: "18px auto 0" }}>
              An integrated value chain that keeps the maximum economic value inside rural communities.
            </p>
          </div>
          <div className="chain">
            {STAGES.map((s, i) => (
              <Reveal key={s.title} className="chain-step" delay={i * 70}>
                <span className="step-no">{s.no}</span>
                <h3>{s.title} Level</h3>
                <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <p className="step-note">{s.note}</p>
                <span className="step-arrow"><ChevronRight size={15} /></span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS TEASER */}
      <section className="section bg-deep">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow center-eb">Products</span>
            <h2 className="display-lg">Natural wealth of Himachal, crafted for the world.</h2>
          </div>
          <div className="grid grid-3">
            {PRODUCT_TEASE.map((p, i) => (
              <Reveal
                key={p.name}
                delay={(i % 3) * 80}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(221,231,212,0.16)",
                  borderRadius: "var(--radius)",
                  padding: "26px 28px",
                }}
              >
                <div style={{ color: "var(--gold)", marginBottom: 14 }}>{p.icon}</div>
                <h3 style={{ color: "#fff", fontSize: "1.18rem", marginBottom: 6 }}>{p.name}</h3>
                <p style={{ color: "var(--sage-pale)", margin: 0, fontSize: "0.95rem" }}>{p.ex}</p>
              </Reveal>
            ))}
          </div>
          <div className="center" style={{ marginTop: 44 }}>
            <Link href="/products" className="btn btn--light">Explore all products <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* IMPACT TEASER */}
      <section className="section">
        <div className="wrap">
          <SprigDivider />
          <div className="section-head center" style={{ marginTop: 28 }}>
            <span className="eyebrow center-eb">Impact</span>
            <h2 className="display-lg">Creating sustainable change.</h2>
          </div>
          <div className="grid grid-4">
            {[
              { icon: <Chart />, h: "Economic", t: "Higher household income, new rural enterprises and employment." },
              { icon: <Heart />, h: "Social", t: "Women empowerment, community leadership and reduced migration." },
              { icon: <Recycle />, h: "Environmental", t: "Waste-to-wealth, biodiversity conservation, climate resilience." },
              { icon: <Globe />, h: "Regional", t: "A stronger Himachal rural economy and inclusive growth." },
            ].map((b, i) => (
              <Reveal key={b.h} className="card" delay={i * 70}>
                <div className="card-icon terra">{b.icon}</div>
                <h3>{b.h}</h3>
                <p>{b.t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Invest in rural transformation</span>
              <h2 className="display-md">Invest in women. Invest in rural prosperity.</h2>
              <p>A ₹10 crore, three-year initiative blending CSR, grants and impact investment for measurable social good.</p>
            </div>
            <div className="btn-row">
              <Link href="/csr" className="btn">Partner with us <Arrow /></Link>
              <Link href="/contact" className="btn btn--light">Donate</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
