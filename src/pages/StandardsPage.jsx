import SEOHead from "../components/SEOHead.jsx";
import { STANDARDS_TABLE, PRODUCTS } from "../data/index.js";
import "../styles/sections.css";

export default function StandardsPage() {
  return (
    <>
      <SEOHead
        title="IS & IEC Cable Standards Reference"
        description="Complete reference for IS 694, IS 1554, IS 7098, IS 9968, IEC 62930, IEC 62893 — Indian and international standards applicable to our industrial cable range."
        path="/standards"
      />

      <main style={{ paddingTop: "var(--nav-h)" }}>
        {/* Hero */}
        <section className="section" aria-labelledby="standards-heading">
          <div className="container">
            <div className="section-head">
              <div className="section-label">Compliance Reference</div>
              <h1 className="section-title" id="standards-heading">
                IS / IEC Standards We Follow
              </h1>
              <p className="section-desc">
                Quick reference to applicable Indian Standards (IS) and
                International Electrotechnical Commission (IEC) standards for
                each cable type we manufacture.
              </p>
            </div>

            {/* Table */}
            <div
              className="std-table"
              role="table"
              aria-label="Standards reference table"
            >
              <div className="std-table__head" role="row">
                <div role="columnheader">Standard</div>
                <div role="columnheader">Scope</div>
                <div role="columnheader">Applicable Cables</div>
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
              <div className="section-label">Per Product</div>
              <h2 className="section-title" id="per-product-heading">
                Standard by Cable Type
              </h2>
              <p className="section-desc">
                Each product mapped to its applicable IS / IEC standard.
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

        {/* Note */}
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
                ℹ️ A note on standards compliance
              </h2>
              <ul
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: 14,
                }}
              >
                <li>
                  Compliance: UV Cables is a specialized B2B manufacturer. While
                  we do not hold formal IS or IEC certification, our products
                  are manufactured in strict accordance with the specifications
                  defined in these standards.
                </li>
                <br />
                <li>
                  Customization: All orders can be tailored to customer-supplied
                  drawings and technical specifications.
                </li>
                <br />
                <li>
                  Flexible MOQs: We offer custom Minimum Order Quantities (MOQs)
                  tailored to your specific project needs.
                </li>
                <li>
                  Certifications: For formal certification requirements, please
                  discuss your needs with our team prior to placing an order.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
