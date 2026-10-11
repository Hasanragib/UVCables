import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { useApp } from "../context/AppContext.jsx";
import "../styles/products.css";
import "../styles/sections.css";

export default function ProductsPage() {
  const {
    ucFilter,
    setUcFilter,
    USE_CASES,
    filteredProducts,
    activeUCLabel,
    resetFilters,
    setFilterMode,
  } = useApp();

  const location = useLocation();

  // Scroll to product on hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }, [location.hash]);

  // Read ?uc= from URL and apply filter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const uc = params.get("uc");
    if (uc) {
      setFilterMode("usecase");
      setUcFilter(uc);
    }
  }, [location.search]);

  return (
    <>
      <SEOHead
        title="Industrial Cable Products"
        description="Browse PVC, XLPE, EPR/PCP, Silicone, Control, Trailing, EV and Solar DC cables plus Copper Ropes, Wires and Braided Copper. B2B cable manufacturer Delhi NCR."
        path="/products"
      />

      <main style={{ paddingTop: "var(--nav-h)" }}>
        <section
          className="section section--subtle"
          aria-labelledby="products-heading"
        >
          <div className="container">
            {/* Heading */}
            <div className="section-head">
              <h1 className="section-title" id="products-heading">
                Industrial Cables
              </h1>
              <p className="section-desc">
                Click any product to view full specifications. Use our Cable
                Finder if you are unsure which cable suits your application.
              </p>
              <div className="cable-finder-cta">
                <Link
                  to="/cableSelector"
                  className="btn btn--ghost cable-finder-btn"
                >
                  Not sure which cable? Try our Cable Finder →
                </Link>
              </div>
            </div>

            {/* Use Case filter buttons only */}
            <div
              className="uc-btn-grid"
              role="group"
              aria-label="Filter by use case"
            >
              {USE_CASES.map(function (uc) {
                return (
                  <button
                    key={uc.id}
                    className={
                      "uc-btn" + (ucFilter === uc.id ? " uc-btn--active" : "")
                    }
                    onClick={function () {
                      setUcFilter(uc.id);
                    }}
                    aria-pressed={ucFilter === uc.id}
                  >
                    <span className="uc-btn__icon" aria-hidden="true">
                      {uc.icon}
                    </span>
                    <span className="uc-btn__label">{uc.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Results bar */}
            <div className="results-bar">
              <span className="results-count">
                {filteredProducts.length} cable
                {filteredProducts.length !== 1 ? "s" : ""}
              </span>
              {ucFilter !== "all" && (
                <span className="results-tag">
                  {activeUCLabel && activeUCLabel.icon}{" "}
                  {activeUCLabel && activeUCLabel.label}
                  <button
                    className="results-tag__clear"
                    onClick={function () {
                      setUcFilter("all");
                    }}
                    aria-label="Clear filter"
                  >
                    ✕
                  </button>
                </span>
              )}
              {ucFilter !== "all" && (
                <button
                  onClick={resetFilters}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: 12,
                    color: "var(--text-faint)",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Reset
                </button>
              )}
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="product-grid--empty" role="status">
                No cables match this filter. Try a different category.
              </div>
            ) : (
              <div className="product-grid" id="product-grid">
                {filteredProducts.map(function (p) {
                  return (
                    <div key={p.id} id={p.id}>
                      <ProductCard product={p} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
