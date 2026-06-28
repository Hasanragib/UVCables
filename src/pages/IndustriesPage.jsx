import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import { PRODUCTS } from "../data/index.js";
import "../styles/sections.css";

const INDUSTRY_DETAIL = [
  {
    icon: "⚡",
    name: "Power & Utilities",
    ucId: "power",
    desc: "High-voltage underground and overhead distribution cables for substations, grid connections, and industrial power feeders.",
    productIds: ["xlpe", "pvc", "control"],
  },
  {
    icon: "🏗️",
    name: "Construction & Infrastructure",
    ucId: "wiring",
    desc: "General wiring, flexible supplies, and control cables for residential, commercial, and infrastructure projects.",
    productIds: ["pvc", "rubber", "control"],
  },
  {
    icon: "⛏️",
    name: "Mining & Heavy Industry",
    ucId: "flexible",
    desc: "Trailing, reeling and portable cables rated for tough underground and open-cast mining environments.",
    productIds: ["epr", "trailing", "butyl"],
  },
  {
    icon: "🤖",
    name: "Automation & OEM",
    ucId: "control",
    desc: "Multi-core screened control cables and flexible wiring for PLC panels, robots, and OEM machine builders.",
    productIds: ["control", "pvc", "silicone", "silicone-tubes"],
  },
  {
    icon: "🌞",
    name: "Solar Energy",
    ucId: "newenergy",
    desc: "UV-stabilised DC cables for rooftop and utility-scale solar PV systems, string wiring, and combiner boxes.",
    productIds: ["solar", "xlpe"],
  },
  {
    icon: "🚗",
    name: "EV Charging Infrastructure",
    ucId: "newenergy",
    desc: "High-current flexible cables for AC and DC fast EV charging stations, Type 2 and CCS2 connectors.",
    productIds: ["ev", "xlpe"],
  },
  {
    icon: "🔥",
    name: "Steel & Foundry",
    ucId: "hightemp",
    desc: "Extreme-temperature silicone and butyl cables rated to +180°C for furnaces, ladle cranes, and hot areas.",
    productIds: ["silicone", "butyl", "silicone-tubes"],
  },
  {
    icon: "⚗️",
    name: "Chemical & Process Plants",
    ucId: "specialty",
    desc: "Oil, chemical, and radiation-resistant cables for refineries, petrochemical plants, and nuclear facilities.",
    productIds: ["epr", "butyl", "pvc", "ptfe"],
  },
  {
    icon: "🏭",
    name: "General Industry",
    ucId: "all",
    desc: "From welding cables to instrumentation — our broad product range covers virtually every wiring need.",
    productIds: ["rubber", "pvc", "control", "xlpe", "ptfe", "silicone-tubes"],
  },
  {
    icon: "🛒",
    name: "Retail Distribution",
    ucId: "all",
    desc: "Supplying wholesale and retail distributors across Delhi NCR with fast-moving cable SKUs.",
    productIds: ["pvc", "xlpe", "solar"],
  },
  {
    icon: "💊",
    name: "Pharmaceutical & Food",
    ucId: "specialty",
    desc: "FDA-compliant PTFE cables and food-grade silicone tubes and profiles for hygienic process environments.",
    productIds: ["ptfe", "silicone-tubes"],
  },
];

function getProducts(ids) {
  return ids
    .map(function (id) {
      return PRODUCTS.find(function (p) {
        return p.id === id;
      });
    })
    .filter(Boolean);
}

// Industry card — whole card is clickable
function IndustryCard({ ind }) {
  const relatedProducts = getProducts(ind.productIds);

  return (
    <div
      style={{
        background: "var(--bg-white)",
        padding: "28px 24px",
        position: "relative",
        transition: "all 0.2s ease",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={function (e) {
        e.currentTarget.style.background = "var(--bg-subtle)";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={function (e) {
        e.currentTarget.style.background = "var(--bg-white)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Entire card is a link */}
      <Link
        to={"/products?uc=" + ind.ucId}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
        aria-label={"Browse " + ind.name + " cables"}
      />

      {/* Icon */}
      <div style={{ fontSize: 32, marginBottom: 12 }}>{ind.icon}</div>

      {/* Name */}
      <h2
        style={{
          fontSize: 16,
          fontWeight: 800,
          color: "var(--text-heading)",
          marginBottom: 8,
        }}
      >
        {ind.name}
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: 13,
          color: "var(--text-muted)",
          lineHeight: 1.7,
          marginBottom: 16,
          flex: 1,
        }}
      >
        {ind.desc}
      </p>

      {/* Product chips — zIndex above the card link */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          position: "relative",
          zIndex: 2,
        }}
      >
        {relatedProducts.map(function (p) {
          return (
            <Link
              key={p.id}
              to={"/products#" + p.id}
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 100,
                background: "var(--bg-white)",
                border: "var(--border)",
                color: "var(--text-body)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
              onClick={function (e) {
                e.stopPropagation();
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: p.dot,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {p.label}
            </Link>
          );
        })}
      </div>

      {/* View Products hint */}
      <div
        style={{
          marginTop: 16,
          fontSize: 12,
          fontWeight: 700,
          color: "var(--copper)",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        View Products →
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <SEOHead
        title="Industries We Supply"
        description="United Values Cables supplies industrial cables to power utilities, construction, mining, automation, solar energy, EV charging, steel plants, and chemical industries across Delhi NCR."
        path="/industries"
      />

      <main style={{ paddingTop: "var(--nav-h)" }}>
        <section className="section" aria-labelledby="industries-heading">
          <div className="container">
            <div className="section-head">
              <div className="section-label">We Serve</div>
              <h1 className="section-title" id="industries-heading">
                Industries We Supply To
              </h1>
              <p className="section-desc">
                Our cable range covers virtually every industrial sector — from
                power distribution to new-energy infrastructure. Click any
                industry to see relevant cables.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 1,
                background: "var(--bg-border)",
                border: "var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              {INDUSTRY_DETAIL.map(function (ind) {
                return <IndustryCard key={ind.name} ind={ind} />;
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{ background: "var(--copper)", padding: "60px 0" }}
          aria-labelledby="ind-cta-heading"
        >
          <div className="container" style={{ textAlign: "center" }}>
            <h2
              id="ind-cta-heading"
              style={{
                color: "#fff",
                fontSize: "clamp(20px, 3vw, 32px)",
                fontWeight: 900,
                marginBottom: 12,
              }}
            >
              Don't see your industry listed?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 15,
                marginBottom: 28,
              }}
            >
              We're happy to discuss your specific cable requirements. Get in
              touch with us.
            </p>
            <Link to="/contact" className="btn btn--ghost">
              Contact Us →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
