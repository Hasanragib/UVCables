import SEOHead from "../components/SEOHead.jsx";
import { STANDARDS_TABLE, PRODUCTS } from "../data/index.js";
import "../styles/sections.css";

export default function StandardsPage() {
  return (
    <>
      <SEOHead
        title="Technical References"
        description="Technical lookup for IS 694, IS 1554, IS 7098, IS 9968, IEC 62930, IEC 62893 — Indian and international specifications for our industrial cable range."
        path="/technicalReference"
      />

      <main style={{ paddingTop: "var(--nav-h)" }}>
        {/* Hero */}
        <section className="section" aria-labelledby="standards-heading">
          <div className="container">
            <div className="section-head">
              <div className="section-label">TECHNICAL REFERENCE GUIDE</div>
              <h1 className="section-title" id="standards-heading">
                IS / IEC Technical Specifications
              </h1>
              <p style={{ fontSize: "14px" }} className="section-desc">
                Quick reference guide to dimensional, electrical, and
                constructional parameters defined under Indian (IS) and
                International (IEC) cable standards.
              </p>

              <p
                style={{ fontSize: "14px", marginTop: "8px" }}
                className="section-desc"
              >
                <strong>
                  All cables are supplied to align with standard industry
                  technical parameters.
                </strong>
              </p>
            </div>

            {/* Table */}
            <div
              className="std-table"
              role="table"
              aria-label="Standards reference table"
            >
              <div className="std-table__head" role="row">
                <div role="columnheader">Standard Code</div>
                <div style={{ marginLeft: "1.15rem" }} role="columnheader">
                  Technical Scope
                </div>
                <div role="columnheader">Product Line</div>
              </div>
              {STANDARDS_TABLE.map((row, i) => (
                <div
                  key={row.std}
                  className={`std-table__row${i % 2 !== 0 ? " std-table__row--alt" : ""}`}
                  role="row"
                >
                  <div className="std-table__std" role="cell">
                    {row.std}
                  </div>
                  <div className="std-table__scope" role="cell">
                    {row.scope}
                  </div>
                  <div className="std-table__cables" role="cell">
                    {row.cables}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Per-Product Standards */}
        <section
          className="section section--subtle"
          aria-labelledby="per-product-heading"
        >
          <div className="container">
            <div className="section-head">
              <h2 className="section-title" id="per-product-heading">
                Standards Lookup by Cable Type
              </h2>
              <p className="section-desc">
                Product categories mapped to their primary IS / IEC reference
                specifications.
              </p>
            </div>

            <div className="industry-grid">
              {PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  className="industry-card"
                  style={{ textAlign: "left" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: p.dot,
                        flexShrink: 0,
                      }}
                    />
                    <div className="industry-card__name">{p.label}</div>
                  </div>
                  <div
                    className="industry-card__cables"
                    style={{
                      fontFamily: "'Courier New', monospace",
                      letterSpacing: "0.02em",
                      fontSize: 12,
                      color: "var(--navy)",
                    }}
                  >
                    {p.isDisplay}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Guidance Note */}
        <section className="section" aria-labelledby="note-heading">
          <div className="container" style={{ maxWidth: 900 }}>
            <div
              style={{
                background: "var(--navy-light)",
                border: "1px solid #C7D4E8",
                borderRadius: "var(--radius-lg)",
                padding: "32px 36px",
              }}
            >
              <h2
                id="note-heading"
                style={{
                  color: "var(--navy)",
                  fontSize: 18,
                  fontWeight: 800,
                  marginBottom: 12,
                }}
              >
                ℹ️ Technical & Specification Reference
              </h2>
              <ul
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: 14,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <li>
                  <strong>Technical Benchmarks:</strong> UV Cables operates as a
                  specialized B2B industrial cable supplier. The standard codes
                  listed above represent the technical constructional,
                  dimensional, and performance benchmarks to which our cable
                  range is supplied.
                </li>
                <li>
                  <strong>Custom Engineering:</strong> Products can be tailored
                  to buyer-provided drawings, core color schemes, shielding
                  specifications, and conductor sizes.
                </li>
                <li>
                  <strong>Order Quantities:</strong> We support flexible Minimum
                  Order Quantities (MOQs) tailored to project requirements and
                  custom cut lengths.
                </li>
                <li>
                  <strong>Project Verification:</strong> For specialized project
                  compliance or specific test certificate requests, please
                  coordinate with our sales engineering team prior to order
                  placement.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
