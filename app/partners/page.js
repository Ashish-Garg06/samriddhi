import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Arrow, GraduationCap, Rupee, Globe, Calendar } from "@/components/Icons";

export const metadata = {
  title: "Partners & News",
  description:
    "Samriddhi collaborates with academic, financial and market partners — and hosts workshops, buyer-seller meets and entrepreneurship conclaves across Himachal.",
};

const PARTNER_TYPES = [
  { icon: <GraduationCap />, t: "Academic & Technical Partners", d: "For technology, training and quality systems." },
  { icon: <Rupee />, t: "Financial Partners", d: "For CSR funding, grants and impact capital." },
  { icon: <Globe />, t: "Market Partners", d: "For retail, institutional and export linkages." },
];

const EVENTS = [
  "Enterprise Development Workshops",
  "Product Innovation Sessions",
  "Buyer–Seller Meets",
  "Rural Entrepreneurship Conclaves",
  "Technology Demonstrations",
  "Exposure Visits",
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        crumb="Partners & News"
        eyebrow="Building Together"
        title="Our partners & network"
        lead="Samriddhi collaborates with leading institutions for technology, training, financing and market development."
      />

      {/* Partner types */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-3">
            {PARTNER_TYPES.map((p, i) => (
              <Reveal key={p.t} className="card" delay={i * 90}>
                <div className="card-icon">{p.icon}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <p className="pill-soft" style={{ marginTop: 18 }}>To be announced</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="card" style={{ marginTop: 26, textAlign: "center", padding: "34px" }}>
            <h3 style={{ marginBottom: 10 }}>Partnerships open now</h3>
            <p style={{ maxWidth: "56ch", margin: "0 auto 22px" }}>
              We are actively building our founding network of academic, financial and
              market partners. If your organisation shares our mission, we would love to talk.
            </p>
            <Link href="/csr" className="btn btn--green">Become a partner <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* News & events */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">News &amp; Events</span>
            <h2 className="display-md">Upcoming activities.</h2>
          </div>
          <div className="grid grid-2" style={{ gap: 18 }}>
            {EVENTS.map((e, i) => (
              <Reveal
                key={e}
                delay={(i % 2) * 70}
                className="card"
                style={{ display: "flex", gap: 18, alignItems: "center" }}
              >
                <span className="card-icon" style={{ margin: 0, flex: "none" }}><Calendar /></span>
                <div>
                  <h3 style={{ fontSize: "1.1rem" }}>{e}</h3>
                  <p style={{ marginTop: 4 }} className="muted">Dates to be announced · Himachal Pradesh</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section center">
        <div className="wrap">
          <h2 className="display-md" style={{ marginBottom: 18 }}>Want to be notified about events?</h2>
          <Link href="/contact" className="btn btn--green">Get in touch <Arrow /></Link>
        </div>
      </section>
    </>
  );
}
