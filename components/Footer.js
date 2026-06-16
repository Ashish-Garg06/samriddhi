import Link from "next/link";
import LeafMark from "./LeafMark";
import { MapPin, Mail, Phone, Web } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="brand">
              <span className="brand-mark" style={{ color: "#fff" }}><LeafMark size={40} /></span>
              <span className="brand-text">
                <span className="brand-name">SAMRIDDHI</span>
                <span className="brand-sub">Rural Enterprise Initiative</span>
              </span>
            </div>
            <p className="footer-tag">
              Transforming rural resources into rural prosperity — a women-led
              enterprise movement for sustainable livelihoods in Himachal Pradesh.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/smart-village-centres">Smart Village Centres</Link></li>
              <li><Link href="/impact">Our Impact</Link></li>
              <li><Link href="/women-entrepreneurs">Women Entrepreneurs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Partner</h4>
            <ul>
              <li><Link href="/investment">Investment &amp; Development</Link></li>
              <li><Link href="/csr">CSR &amp; Investors</Link></li>
              <li><Link href="/partners">Our Partners</Link></li>
              <li><Link href="/partners">News &amp; Events</Link></li>
              <li><Link href="/contact">Donate</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p className="footer-contact-line"><MapPin size={18} /> Himachal Pradesh, India</p>
            <p className="footer-contact-line"><Mail size={18} /> info@samriddhi.org</p>
            <p className="footer-contact-line"><Phone size={18} /> +91 XXXXX XXXXX</p>
            <p className="footer-contact-line"><Web size={18} /> www.samriddhi.in</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Samriddhi Rural Enterprise Initiative. All rights reserved.</span>
          <span>Empowering Women · Enriching Villages · Building Sustainable Futures</span>
        </div>
      </div>
    </footer>
  );
}
