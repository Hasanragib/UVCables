import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import { FAQ_CATEGORIES } from "../data/faqData.js";
import "../styles/faq.css";
import "../styles/sections.css";

export default function FAQPage() {
  var searchState = useState("");
  var search = searchState[0];
  var setSearch = searchState[1];

  var activeState = useState("all");
  var activeTab = activeState[0];
  var setActiveTab = activeState[1];

  var filteredCategories = useMemo(
    function () {
      var query = search.toLowerCase().trim();
      return FAQ_CATEGORIES.filter(function (cat) {
        return activeTab === "all" || cat.id === activeTab;
      })
        .map(function (cat) {
          if (!query) return cat;
          var filteredFaqs = cat.faqs.filter(function (faq) {
            return (
              faq.q.toLowerCase().includes(query) ||
              faq.a.toLowerCase().includes(query)
            );
          });
          return Object.assign({}, cat, { faqs: filteredFaqs });
        })
        .filter(function (cat) {
          return cat.faqs.length > 0;
        });
    },
    [search, activeTab],
  );

  var totalResults = filteredCategories.reduce(function (acc, cat) {
    return acc + cat.faqs.length;
  }, 0);

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions"
        description="Answers to common questions about UV Cables — MOQ, delivery, IS standards, cable testing, custom orders and more. B2B cable manufacturer Delhi NCR."
        path="/faq"
      />

      <main style={{ paddingTop: "var(--nav-h)" }}>
        {/* Hero */}
        <div
          style={{ background: "var(--navy)", padding: "var(--space-10) 0" }}
        >
          <div className="container">
            <div style={{ maxWidth: 640 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 8,
                }}
              >
                UV Cables · Support
              </div>
              <h1
                style={{
                  fontSize: "clamp(26px,4vw,42px)",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  marginBottom: 12,
                }}
              >
                Frequently Asked Questions
              </h1>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                }}
              >
                Answers to common questions about ordering, technical
                specifications, IS standards, delivery, and more.
              </p>
            </div>
          </div>
        </div>

        <section
          className="section section--subtle"
          aria-labelledby="faq-section"
        >
          <div className="container">
            {/* Search */}
            <div className="faq-search-wrap" role="search">
              <input
                type="search"
                className="faq-search"
                placeholder="Search questions... e.g. MOQ, delivery, XLPE, armoured"
                value={search}
                onChange={function (e) {
                  setSearch(e.target.value);
                  setActiveTab("all");
                }}
                aria-label="Search frequently asked questions"
              />
            </div>

            {/* Category tabs */}
            {!search && (
              <div
                className="faq-tabs"
                role="tablist"
                aria-label="FAQ categories"
              >
                <button
                  className={
                    "faq-tab" + (activeTab === "all" ? " faq-tab--active" : "")
                  }
                  onClick={function () {
                    setActiveTab("all");
                  }}
                  aria-pressed={activeTab === "all"}
                >
                  📋 All Questions
                </button>
                {FAQ_CATEGORIES.map(function (cat) {
                  return (
                    <button
                      key={cat.id}
                      className={
                        "faq-tab" +
                        (activeTab === cat.id ? " faq-tab--active" : "")
                      }
                      onClick={function () {
                        setActiveTab(cat.id);
                      }}
                      aria-pressed={activeTab === cat.id}
                    >
                      {cat.icon} {cat.label}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Search result count */}
            {search && (
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginBottom: "var(--space-5)",
                }}
              >
                {totalResults > 0
                  ? totalResults +
                    " result" +
                    (totalResults !== 1 ? "s" : "") +
                    ' for "' +
                    search +
                    '"'
                  : 'No results for "' + search + '"'}
                <button
                  onClick={function () {
                    setSearch("");
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--copper)",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    marginLeft: 10,
                    fontFamily: "var(--font-sans)",
                    textDecoration: "underline",
                  }}
                >
                  Clear
                </button>
              </div>
            )}

            {/* No results */}
            {filteredCategories.length === 0 && (
              <div className="faq-no-results" role="status">
                <div className="faq-no-results-icon">🔍</div>
                <p>No questions found for "{search}".</p>
                <p style={{ marginTop: 8, fontSize: 13 }}>
                  Try a different keyword or{" "}
                  <Link to="/contact" style={{ color: "var(--copper)" }}>
                    ask us directly
                  </Link>
                  .
                </p>
              </div>
            )}

            {/* FAQ categories */}
            {filteredCategories.map(function (cat) {
              return (
                <div key={cat.id} className="faq-category" id={cat.id}>
                  <div className="faq-category-header">
                    <span className="faq-category-icon" aria-hidden="true">
                      {cat.icon}
                    </span>
                    <h2 className="faq-category-title">{cat.label}</h2>
                    <span
                      style={{
                        fontSize: 12,
                        color: "var(--text-faint)",
                        fontWeight: 600,
                        marginLeft: "auto",
                      }}
                    >
                      {cat.faqs.length} question
                      {cat.faqs.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <FAQAccordion faqs={cat.faqs} allowMultiple={true} />
                </div>
              );
            })}

            {/* Bottom CTA */}
            <div className="faq-cta" role="complementary">
              <div className="faq-cta__text">
                <div className="faq-cta__title">Still have a question?</div>
                <div className="faq-cta__sub">
                  Our team responds to all enquiries within 4-8 business hours.
                  For urgent requirements, reach us on WhatsApp.
                </div>
              </div>
              <div className="faq-cta__actions">
                <Link to="/contact" className="btn btn--primary">
                  Send an Enquiry →
                </Link>
                <a
                  href={
                    "https://wa.me/" +
                    (import.meta.env.VITE_WHATSAPP_NUMBER || "919818088873")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#25D366",
                    color: "#fff",
                    border: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "11px 20px",
                    borderRadius: "var(--radius-md)",
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
