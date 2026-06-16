import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Arrow, GraduationCap, Beaker, Briefcase, Rupee, Users, Chart } from "@/components/Icons";

export const metadata = {
  title: "Women Entrepreneurs",
  description:
    "Women are the heart of Samriddhi — becoming producers, entrepreneurs and decision-makers through training, enterprise ownership, financial inclusion and leadership development.",
};

const COMPONENTS = [
  { icon: <GraduationCap />, t: "Entrepreneurship Development", d: "Building the mindset and skills to start and run a viable enterprise." },
  { icon: <Beaker />, t: "Skill Enhancement", d: "Hands-on training in processing, quality and product-making." },
  { icon: <Briefcase />, t: "Business Incubation", d: "Guided support to take an idea from concept to market." },
  { icon: <Rupee />, t: "Financial Inclusion", d: "Access to credit, savings, digital payments and financial literacy." },
  { icon: <Users />, t: "Leadership Development", d: "Confidence and capability to lead groups and institutions." },
  { icon: <Chart />, t: "Market Access Support", d: "Linkages to retail, institutional, e-commerce and export buyers." },
];

export default function WomenPage() {
  return (
    <>
      <PageHero
        crumb="Women Entrepreneurs"
        eyebrow="Women Entrepreneurs"
        title="The heart of Samriddhi"
        lead="Through training, enterprise ownership, financial inclusion and leadership development, women become producers, entrepreneurs and decision-makers."
      />

      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal className="split-media">
              <img src="/images/hero-women.jpg" alt="Women of Himachal working together with herbs and natural products" />
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">Women at the centre</span>
              <h2 className="display-md">Placing women at the centre of economic transformation.</h2>
              <p className="mt-m">
                Samriddhi is designed around the women who power it. Rather than passive
                beneficiaries, they become owners of the enterprises — making products,
                running clusters and leading their communities into the green economy.
              </p>
              <Link href="/smart-village-centres" className="btn btn--green mt-m">
                See how we train &amp; support <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow center-eb">Programme Components</span>
            <h2 className="display-md">A full pathway from skill to ownership.</h2>
          </div>
          <div className="grid grid-3">
            {COMPONENTS.map((c, i) => (
              <Reveal key={c.t} className="card" delay={(i % 3) * 80}>
                <div className="card-icon">{c.icon}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Sponsor a woman entrepreneur</span>
              <h2 className="display-md">Back the women building Himachal's future.</h2>
              <p>Your support funds training, incubation and the tools to launch an enterprise.</p>
            </div>
            <Link href="/contact" className="btn">Get involved <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
