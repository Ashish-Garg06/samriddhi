import Link from "next/link";
import Sprig from "./Sprig";

export default function PageHero({ eyebrow, title, lead, crumb }) {
  return (
    <section className="page-hero">
      <Sprig className="page-hero-sprig" />
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span style={{ opacity: 0.85 }}>{crumb || title}</span>
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="display-lg">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
