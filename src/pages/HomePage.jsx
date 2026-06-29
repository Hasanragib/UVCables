import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ProductModal from "../components/ProductModal.jsx";
import { useApp } from "../context/AppContext.jsx";
import "../styles/products.css";
import "../styles/sections.css";

export default function HomePage() {
  const { PRODUCTS, INDUSTRIES, USE_CASES, setUcFilter, setFilterMode } =
    useApp();
  const FEATURED = PRODUCTS.slice(0, 6);

  return (
    <>
      <SEOHead
        title="Industrial Cable Manufacturer Delhi NCR"
        description="United Values Cables — B2B cable manufacturer since 1986. PVC, XLPE, Silicone, EPR/PCP, Solar & EV cables. Supplying manufacturers and retailers across Delhi NCR."
        path="/"
      />

      {/* ── HERO SLIDER ── */}
      <HeroSlider />

      {/* ── USE CASE CATEGORY BUTTONS ── */}
      <section className="section" aria-labelledby="categories-heading">
        <div className="container">
          <div className="section-head">
            <div className="section-label">Browse By Need</div>
            <h2 className="section-title" id="categories-heading">
              Find Cables
            </h2>
            <p className="section-desc">
              Choose your application area to see the right cables for the job.
            </p>
          </div>

          <div className="uc-btn-grid" role="list">
            {USE_CASES.filter((uc) => uc.id !== "all").map((uc) => (
              <Link
                key={uc.id}
                to="/products"
                role="listitem"
                className="uc-btn"
                onClick={() => {
                  setFilterMode("usecase");
                  setUcFilter(uc.id);
                }}
                aria-label={`Browse ${uc.label} cables`}
              >
                <span className="uc-btn__icon" aria-hidden="true">
                  {uc.icon}
                </span>
                <span className="uc-btn__label">{uc.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section
        className="section section--subtle"
        aria-labelledby="featured-heading"
      >
        <div className="container">
          <div className="section-head">
            <div className="section-label">Our Range</div>
            <h2 className="section-title" id="featured-heading">
              Featured Cables
            </h2>
            <p className="section-desc">
              From general purpose PVC to Silicone and Renewable energy cables.
            </p>
          </div>

          <div className="product-grid">
            {FEATURED.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/products" className="btn btn--navy">
              View All →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-head">
            <div className="section-label">Why Us</div>
            <h2 className="section-title" id="why-heading">
              Built on Three Decades of Trust
            </h2>
            <p className="section-desc">
              A focused manufacturer committed to quality, flexibility, and fast
              delivery.
            </p>
          </div>
          <div className="industry-grid">
            {[
              {
                icon: "📅",
                name: "Est. 1986",
                desc: "Four decades of cable manufacturing experience in Delhi NCR.",
              },
              {
                icon: "🔧",
                name: "Custom Specifications",
                desc: "Any length, any conductor cross-section, built to your requirement.",
              },
              {
                icon: "🚚",
                name: "All India Delivery",
                desc: "Reliable supply to manufacturers, contractors, and retailers.",
              },
              {
                icon: "🤝",
                name: "B2B Focus",
                desc: "Dedicated to other manufacturers and trade distributors.",
              },
              {
                icon: "⚡",
                name: "Fast Turnaround",
                desc: "Quick order processing without large-corporate delays.",
              },
              {
                icon: "📐",
                name: "Wide Product Range",
                desc: "From PVC to XLPE, Silicone, EPR, EV and Solar cables.",
              },
            ].map((item) => (
              <div key={item.name} className="industry-card">
                <div className="industry-card__icon">{item.icon}</div>
                <div className="industry-card__name">{item.name}</div>
                <div className="industry-card__cables">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES STRIP ── */}
      <section
        className="section section--subtle"
        aria-labelledby="ind-heading"
      >
        <div className="container">
          <div className="section-head">
            <div className="section-label">Industries</div>
            <h2 className="section-title" id="ind-heading">
              Who We Supply To
            </h2>
          </div>
          <div className="industry-grid">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="industry-card">
                <div className="industry-card__icon">{ind.icon}</div>
                <div className="industry-card__name">{ind.name}</div>
                <div className="industry-card__cables">{ind.cables}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/industries" className="btn btn--ghost">
              All →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        style={{ background: "var(--navy)", padding: "60px 0" }}
        aria-labelledby="cta-heading"
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            id="cta-heading"
            style={{
              color: "#fff",
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 900,
              marginBottom: 12,
              letterSpacing: "-0.025em",
            }}
          >
            Need a Cable Quote?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 15,
              marginBottom: 28,
              maxWidth: 480,
              margin: "0 auto 28px",
            }}
          >
            Tell us your specifications — voltage, conductor size, length, IS
            standard — and we'll respond within 1 business day with pricing and
            availability.
          </p>
          <Link
            to="/contact"
            className="btn btn--primary"
            style={{ fontSize: 15, padding: "13px 32px" }}
          >
            Get a Quote →
          </Link>
        </div>
      </section>

      {/* Global modal */}
      <ProductModal />
    </>
  );
}
