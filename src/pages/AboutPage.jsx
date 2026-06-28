import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import { BRAND, PRODUCTS } from "../data/index.js";
import "../styles/sections.css";

const HIGHLIGHTS = [
  {
    icon: "📅",
    label: "Established 1986",
    desc: "Over three decades of cable manufacturing.",
  },
  {
    icon: "🏗️",
    label: "Custom Lengths & Specs",
    desc: "Any conductor size, any length — manufactured to your order.",
  },
  {
    icon: "🚚",
    label: "Pan India Delivery",
    desc: "Reliable, prompt supply to manufacturers and retail trade.",
  },
  {
    icon: "🤝",
    label: "B2B Manufacturer",
    desc: "Dedicated supply to other manufacturers and distributors.",
  },
  {
    icon: "⚡",
    label: "Fast Order Processing",
    desc: "Lean operations mean quicker turnaround than larger players.",
  },
  {
    icon: "📐",
    label: "Cables",
    desc: "From PVC to EV charging — we cover the industrial spectrum.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About United Values Cables"
        description="United Values Cables — B2B cable manufacturer in Delhi NCR since 1986. We supply PVC, XLPE, Silicone, EPR, Butyl, Rubber, Trailing, Control, EV and Solar cables to manufacturers and retailers."
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
                  UV Cables is a Delhi NCR-based cable manufacturer supplying a
                  wide range of industrial cables to other manufacturers and
                  retail distributors. Established in 1986, we have spent nearly
                  four decades mastering the craft of cable production.
                </p>
                <p className="about__text">
                  Our focus is quality construction, quick turnaround, and
                  competitive pricing — without the overhead of large-scale
                  certification processes. We are a lean, focused manufacturer
                  that keeps things simple: make a good product, deliver it on
                  time, and stand behind it.
                </p>
                <p className="about__text">
                  We produce cables across PVC, XLPE, Silicone, EPR/PCP, Butyl
                  Rubber, Rubber, Trailing &amp; Reeling, Control, EV Charging,
                  Solar DC, PTFE (Teflon), and Silicone Tubes &amp; Profiles —
                  covering virtually every industrial wiring need in the market.
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
                  desc: "Every cable is manufactured to consistent quality standards, regardless of order size.",
                },
                {
                  icon: "💡",
                  name: "Transparency",
                  desc: "We are upfront about our capabilities and limitations. No overselling, no false promises.",
                },
                {
                  icon: "🤝",
                  name: "Long-term Partnerships",
                  desc: "We aim to be your reliable supply partner, not just a one-time vendor.",
                },
                {
                  icon: "⚡",
                  name: "Responsiveness",
                  desc: "Quick quotes, fast production, and prompt delivery. We respect your timelines.",
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
              Ready to discuss your requirements?
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 15,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              Whether you need a regular supply of standard cables or a custom
              specification, we're happy to talk.
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
