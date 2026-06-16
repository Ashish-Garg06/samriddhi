"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LeafMark from "./LeafMark";
import { Arrow, ChevronRight, Menu, Close } from "./Icons";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/smart-village-centres", label: "Smart Centres" },
  { href: "/impact", label: "Impact" },
  { href: "/investment", label: "Investment" },
  { href: "/partners", label: "Partners" },
  { href: "/csr", label: "CSR" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className={`nav ${scrolled || open ? "is-scrolled" : "is-top"}`}>
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Samriddhi home">
          <span className="brand-mark" style={{ color: "var(--evergreen)" }}><LeafMark size={38} /></span>
          <span className="brand-text">
            <span className="brand-name">SAMRIDDHI</span>
            <span className="brand-sub">Rural Enterprise Initiative</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link ${isActive(l.href) ? "active" : ""}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn nav-cta">
            Donate <Arrow size={16} />
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={`nav-drawer ${open ? "open" : ""}`}>
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home <ChevronRight /></Link>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : ""}>
            {l.label} <ChevronRight />
          </Link>
        ))}
        <Link href="/women-entrepreneurs" className={isActive("/women-entrepreneurs") ? "active" : ""}>
          Women Entrepreneurs <ChevronRight />
        </Link>
        <Link href="/contact" className={isActive("/contact") ? "active" : ""}>Contact <ChevronRight /></Link>
        <Link href="/contact" className="btn">Donate <Arrow size={16} /></Link>
      </div>
    </header>
  );
}
