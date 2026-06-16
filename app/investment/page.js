import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Arrow, Rupee, Calendar } from "@/components/Icons";

export const metadata = {
  title: "Investment & Development",
  description:
    "A ₹10 crore, three-year sustainable development initiative blending CSR, government schemes, grants and impact investment with diverse revenue streams.",
};

const FUNDING = [
  "Corporate Social Responsibility (CSR)",
  "Government Schemes",
  "Institutional Grants",
  "Impact Investments",
  "Private Sector Partnerships",
];

const REVENUE = [
  "Product Sales",
  "Institutional Supply",
  "Retail Distribution",
  "Export Sales",
  "Technology Services",
];

export default function InvestmentPage() {
  return (
    <>
      <PageHero
        crumb="Investment & Development"
        eyebrow="Investment & Development"
        title="A sustainable development initiative"
        lead="Samriddhi is a strategic investment in rural transformation — empowering women, building enterprises and creating long-term value for communities and the environment."
      />

      {/* Figures */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-2" style={{ gap: 24 }}>
            <Reveal className="figure-card">
              <span className="fig-icon"><Rupee size={28} /></span>
              <div>
                <div className="fig-label">Project Size</div>
                <div className="fig-num">₹10 Crore</div>
              </div>
            </Reveal>
            <Reveal className="figure-card" delay={100}>
              <span className="fig-icon"><Calendar size={26} /></span>
              <div>
                <div className="fig-label">Duration</div>
                <div className="fig-num">3 Years</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Funding structure */}
      <section className="section bg-paper section--tight">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <span className="eyebrow">Funding Structure</span>
              <h2 className="display-md">Blended finance for maximum social impact.</h2>
              <ul className="leaf-list mt-m">{FUNDING.map((f) => <li key={f}>{f}</li>)}</ul>
              <p className="muted mt-s" style={{ fontStyle: "italic" }}>
                Blended financing supports both social impact and sustainable growth.
              </p>
            </Reveal>
            <Reveal className="split-media" delay={120}>
              <img src="/images/funding-jar.jpg" alt="A seedling growing from a jar of coins, symbolising blended financing" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Revenue streams */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="split rev">
            <Reveal className="split-media">
              <img src="/images/revenue-globe.jpg" alt="A shopping cart of Samriddhi products beside a globe, representing diverse revenue streams" />
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">Revenue Streams</span>
              <h2 className="display-md">Diverse income for long-term sustainability.</h2>
              <ul className="leaf-list mt-m">{REVENUE.map((r) => <li key={r}>{r}</li>)}</ul>
              <p className="muted mt-s" style={{ fontStyle: "italic" }}>
                Multiple revenue streams ensure financial sustainability and lasting impact.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Invest in a sustainable future</span>
              <h2 className="display-md">Invest in women. Invest in rural prosperity.</h2>
              <p>Join a financially sustainable model designed for measurable, lasting impact.</p>
            </div>
            <div className="btn-row">
              <Link href="/csr" className="btn">Explore partnership <Arrow /></Link>
              <Link href="/contact" className="btn btn--light">Donate</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
