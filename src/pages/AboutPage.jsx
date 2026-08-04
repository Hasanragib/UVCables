import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import { BRAND, PRODUCTS } from "../data/index.js";
import "../styles/sections.css";

const HIGHLIGHTS = [
  {
    icon: "📅",
    label: "Established 1986",
    desc: "Nearly four decades of cable industry experience.",
  },
  {
    icon: "🏗️",
    label: "Custom Lengths & Specs",
    desc: "Any conductor cross-section, any length — built to your requirement.",
  },
  {
    icon: "🚚",
    label: "Pan India Delivery",
    desc: "Reliable, prompt supply to OEMs, contractors, and trade distributors nationwide.",
  },
  {
    icon: "🤝",
    label: "B2B Manufacturer",
    desc: "Focused B2B supply for OEMs, infrastructure projects, and trade partners.",
  },
  {
    icon: "⚡",
    label: "Fast Order Processing",
    desc: "Agile manufacturing operations ensure rapid order processing and quick dispatch.",
  },
  {
    icon: "📐",
    label: "Comprehensive Range",
    desc: "From standard PVC to specialized Silicone, EPR, and EV charging cables.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="UV Cables (United Values Cables) — Trusted B2B industrial cable supplier since 1986. Specializing in standard & custom PVC, XLPE, Silicone, EPR/PCP & PTFE cables across India."
        path="/about"
      />

      <main style={{ paddingTop: "var(--nav-h)" }}>
        {/* Hero */}
        <section className="section" aria-labelledby="about-heading">
          <div className="container">
            <div className="about-grid">
              {/* Left text */}
              <div>
                <div className="section-label">About Us</div>
                <h1 className="about__tagline">
                  Precision Engineering, Decades of Reliability.
                </h1>
                <p className="about__text">
                  UV Cables is a Delhi NCR-based cable manufacturer and
                  industrial supplier, delivering high-performance wiring
                  solutions to OEMs, contractors, and trade distributors across
                  India. Established in 1986, we have spent nearly four decades
                  mastering the craft of specialized cable production.
                </p>
                <p className="about__text">
                  Our focus is quality engineering, rapid turnaround, and
                  competitive factory pricing. As a lean, focused manufacturer,
                  our philosophy is straightforward: build reliable products,
                  ensure fast dispatch, and stand firmly behind every meter we
                  supply.
                </p>
                <p className="about__text">
                  We manufacture and supply across a comprehensive range
                  including PVC, XLPE, Silicone, EPR/PCP, Butyl Rubber, Trailing
                  & Reeling, Control, EV Charging, Solar DC, PTFE (Teflon), and
                  Silicone Profiles — meeting demanding requirements across
                  extreme heat, heavy duty, and specialized industrial
                  applications.
                </p>

                <div className="about__highlights">
                  {HIGHLIGHTS.map((h) => (
                    <div key={h.label} className="about__highlight">
                      <span className="about__highlight-icon">{h.icon}</span>
                      <div>
                        <strong
                          style={{ color: "var(--text-heading)", fontSize: 14 }}
                        >
                          {h.label}
                        </strong>
                        <div
                          style={{
                            fontSize: 13,
                            color: "var(--text-muted)",
                            marginTop: 2,
                          }}
                        >
                          {h.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Company Profile Download */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-4)",
                  background: "var(--bg-subtle)",
                  border: "var(--border)",
                  borderLeft: "3px solid var(--copper)",
                  borderRadius: "var(--radius-md)",
                  padding: "var(--space-4) var(--space-5)",
                  marginTop: "var(--space-8)",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ fontSize: 32 }}>📄</div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 14,
                      color: "var(--text-heading)",
                      marginBottom: 2,
                    }}
                  >
                    Brochure | UV Cables
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                    }}
                  >
                    View Product Catalog, Technical Specifications & Company
                    Details
                  </div>
                </div>
                <a
                  href="/UV_Cables_Company_Profile.pdf"
                  download="UV_Cables_brochure.pdf"
                  className="btn btn--primary btn--sm"
                  aria-label="Download UV Cables Company Profile PDF"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          className="section section--subtle"
          aria-labelledby="values-heading"
        >
          <div className="container">
            <div className="section-head">
              <div className="section-label">Our Values</div>
              <h2 className="section-title" id="values-heading">
                What We Stand For
              </h2>
            </div>

            <div className="industry-grid">
              {[
                {
                  icon: "🎯",
                  name: "Quality First",
                  desc: "Every meter of cable is manufactured to rigorous, consistent quality standards, regardless of batch size.",
                },
                {
                  icon: "💡",
                  name: "Transparency",
                  desc: "Direct, upfront communication regarding specifications, pricing, and timelines. Honest commitments you can always depend on.",
                },
                {
                  icon: "🤝",
                  name: "Long-term Partnerships",
                  desc: "We build lasting B2B relationships by acting as a trusted, dependable supply partner for your ongoing industrial needs.",
                },
                {
                  icon: "⚡",
                  name: "Responsiveness",
                  desc: "Rapid quotation, agile production cycles, and fast dispatch—ensuring your projects stay on schedule.",
                },
                {
                  icon: "⚙️",
                  name: "Custom Engineering",
                  desc: "Tailored manufacturing for non-standard specs, specialized insulation, and exact cross-sectional requirements.",
                },
                {
                  icon: "🛡️",
                  name: "Supply Chain Reliability",
                  desc: "Dependable dispatch and consistent material standards that keep your manufacturing lines and projects running without interruption.",
                },
              ].map((v) => (
                <div key={v.name} className="industry-card">
                  <div className="industry-card__icon">{v.icon}</div>
                  <div className="industry-card__name">{v.name}</div>
                  <div className="industry-card__cables">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section" aria-labelledby="about-cta">
          <div
            className="container"
            style={{ maxWidth: 680, textAlign: "center" }}
          >
            <h2
              id="about-cta"
              style={{
                color: "var(--text-heading)",
                fontSize: "clamp(22px,3vw,34px)",
                fontWeight: 900,
                marginBottom: 12,
              }}
            >
              Ready to Discuss Your Cable Requirements?
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 15,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              Whether you need a steady bulk supply of standard cables or
              custom-engineered specs, our sales and engineering team is ready
              to assist.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link to="/contact" className="btn btn--primary">
                Get a Quote →
              </Link>
              <Link to="/products" className="btn btn--ghost">
                View Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
