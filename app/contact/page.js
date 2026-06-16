import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Web } from "@/components/Icons";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with the Samriddhi Rural Enterprise Initiative — for donations, CSR partnerships, investment, product enquiries and volunteering.",
};

const DETAILS = [
  { icon: <MapPin />, label: "Location", val: "Himachal Pradesh, India" },
  { icon: <Mail />, label: "Email", val: "info@samriddhi.org", href: "mailto:info@samriddhi.org" },
  { icon: <Phone />, label: "Phone", val: "+91 XXXXX XXXXX" },
  { icon: <Web />, label: "Website", val: "www.samriddhi.in", href: "https://www.samriddhi.in" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Transforming rural resources into rural prosperity"
        lead="Whether you want to donate, partner, invest or stock our products — we'd love to hear from you."
      />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal>
              <span className="eyebrow">Reach us</span>
              <h2 className="display-md" style={{ marginBottom: 8 }}>Samriddhi Rural Enterprise Initiative</h2>
              <p className="muted" style={{ marginBottom: 22 }}>
                We respond to every enquiry. For partnerships, please include a little about
                your organisation and goals.
              </p>
              <div>
                {DETAILS.map((d) => (
                  <div className="contact-item" key={d.label}>
                    <span className="ci-icon">{d.icon}</span>
                    <div>
                      <div className="ci-label">{d.label}</div>
                      {d.href ? (
                        <a className="ci-val" href={d.href}>{d.val}</a>
                      ) : (
                        <div className="ci-val">{d.val}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
