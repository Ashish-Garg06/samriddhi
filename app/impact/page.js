import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Arrow, Chart, Heart, Recycle, Globe } from "@/components/Icons";

export const metadata = {
  title: "Impact",
  description:
    "Samriddhi's economic, social, environmental and regional impact — from higher household incomes to biodiversity conservation across rural Himachal Pradesh.",
};

const DIMENSIONS = [
  {
    cls: "", icon: <Chart />, title: "Economic Impact",
    items: ["Increased household income", "Creation of rural enterprises", "Employment generation", "Enhanced market access"],
  },
  {
    cls: "terra", icon: <Heart />, title: "Social Impact",
    items: ["Women empowerment", "Community leadership", "Improved quality of life", "Reduced migration"],
  },
  {
    cls: "gold", icon: <Recycle />, title: "Environmental Impact",
    items: ["Sustainable resource utilisation", "Waste-to-wealth initiatives", "Climate-resilient livelihoods", "Conservation of biodiversity"],
  },
  {
    cls: "deep", icon: <Globe />, title: "Regional Impact",
    items: ["Strengthening Himachal's rural economy", "Promotion of local products", "Rural industrialisation", "Inclusive growth"],
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Creating sustainable change"
        lead="Samriddhi's impact compounds across four dimensions — economic, social, environmental and regional."
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2" style={{ gap: 44 }}>
            {DIMENSIONS.map((d, i) => (
              <Reveal key={d.title} className={`impact-block ${d.cls}`} delay={(i % 2) * 90}>
                <div className={`card-icon ${d.cls === "terra" ? "terra" : ""}`}>{d.icon}</div>
                <h3>{d.title}</h3>
                <ul className="leaf-list">{d.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome ribbon */}
      <section className="section bg-deep">
        <div className="wrap">
          <div className="grid grid-3" style={{ textAlign: "center" }}>
            {[
              { n: "3,000", l: "rural women moving from wage labour to enterprise ownership" },
              { n: "15", l: "villages with new collection, processing and branding capacity" },
              { n: "10", l: "value-added product lines reaching retail and export markets" },
            ].map((s) => (
              <Reveal key={s.l}>
                <div className="display-lg" style={{ color: "#fff" }}>{s.n}</div>
                <p style={{ color: "var(--sage-pale)", marginTop: 10 }}>{s.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Measurable, ESG-aligned outcomes</span>
              <h2 className="display-md">Help us scale this impact.</h2>
              <p>Your partnership turns Himachal's natural wealth into lasting livelihoods.</p>
            </div>
            <Link href="/csr" className="btn">Become a partner <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
