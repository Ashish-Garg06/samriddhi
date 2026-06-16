import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Arrow, LeafSolid, Drop, Sparkle, Spa, Recycle, Beaker } from "@/components/Icons";

export const metadata = {
  title: "Products",
  description:
    "Agro-processed foods, herbal teas, essential oils, natural cosmetics, eco-friendly goods and Ayurvedic wellness products from Himachal Pradesh.",
};

const CATEGORIES = [
  { icon: <LeafSolid />, title: "Agro-Processed Products", items: ["Amla Candy", "Amla Juice", "Pickles", "Fruit Preserves", "Jams & Jellies", "Chutneys", "Dehydrated Fruits"] },
  { icon: <Drop />, title: "Herbal Teas", items: ["Tulsi Tea", "Lemongrass Tea", "Rhododendron Tea", "Herbal Wellness Blends", "Immunity Infusions"] },
  { icon: <Sparkle />, title: "Essential Oils", items: ["Lavender Oil", "Rosemary Oil", "Lemongrass Oil", "Mint Oil", "Aromatherapy Products"] },
  { icon: <Spa />, title: "Natural Cosmetics", items: ["Herbal Soaps", "Lip Balms", "Body Oils", "Skin Care Products", "Natural Wellness Products"] },
  { icon: <Recycle />, title: "Eco-Friendly Products", items: ["Pine Needle Briquettes", "Pine Needle Handicrafts", "Sustainable Home Décor", "Rural Craft Products"] },
  { icon: <Beaker />, title: "Ayurvedic & Wellness", items: ["Herbal Powders", "Medicinal Plant Formulations", "Traditional Health Products", "Nutraceutical Products"] },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Natural wealth of Himachal, crafted for the world"
        lead="Ten value-added product categories, processed and branded by women-led enterprises for domestic and export markets."
      />

      {/* Feature photo */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal className="split-media">
              <img src="/images/products-table.jpg" alt="Samriddhi herbal tea, candy, face cream, essential oils and herbal soap arranged on a wooden table" />
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">A complete product range</span>
              <h2 className="display-md">From orchard and forest to finished product.</h2>
              <p className="mt-m">
                Every Samriddhi product begins with sustainably harvested raw material from
                Himachal's villages — medicinal plants, fruits, herbs and pine needles — then
                moves through scientific processing, quality assurance, packaging and branding
                at cluster facilities.
              </p>
              <p className="mt-s">
                The result is a market-ready range that carries the purity of the Himalayas
                and the livelihoods of the women who make it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow center-eb">Product Categories</span>
            <h2 className="display-md">Explore the range.</h2>
          </div>
          <div className="grid grid-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.title} className="prod-cat" delay={(i % 3) * 80}>
                <div className="prod-cat-head">
                  <div className="card-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                </div>
                <div className="prod-cat-body">
                  <div className="tag-row">
                    {c.items.map((it) => <span key={it} className="tag">{it}</span>)}
                  </div>
                </div>
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
              <span className="eyebrow" style={{ color: "var(--gold)" }}>Wholesale & export enquiries</span>
              <h2 className="display-md">Stock Samriddhi products.</h2>
              <p>We supply retail markets, institutional buyers, e-commerce platforms and export markets.</p>
            </div>
            <Link href="/contact" className="btn">Enquire now <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
