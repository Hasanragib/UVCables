import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import { USE_CASES } from "../data/index.js";

export default function ProductCard({ product }) {
  var app = useApp();
  var addToEnquiry = app.addToEnquiry;
  var removeFromEnquiry = app.removeFromEnquiry;
  var isInEnquiry = app.isInEnquiry;

  var primaryUseCase = USE_CASES.find(function (u) {
    return u.id === product.useCases[0];
  });
  var inList = isInEnquiry(product.id);

  return (
    <Link
      to={"/products/" + product.id}
      className="product-card product-card--with-img"
      style={{ textDecoration: "none", display: "block" }}
      aria-label={"View " + product.label + " details"}
    >
      {/* Image */}
      <div className="product-card__img-wrap">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="product-card__img"
          loading="lazy"
          decoding="async"
        />
        <div className="product-card__img-overlay" />
      </div>

      <div className="product-card__header">
        <div
          className="product-card__dot"
          style={{ background: product.dot }}
          aria-hidden="true"
        />
        <span className="product-card__badge">
          {primaryUseCase
            ? primaryUseCase.icon + " " + primaryUseCase.label
            : ""}
        </span>
      </div>

      <div className="product-card__short">{product.short}</div>
      <h3 className="product-card__name">{product.label}</h3>
      <p className="product-card__desc">
        {product.description.substring(0, 90) + "…"}
      </p>

      <div className="product-card__is">📋 {product.isDisplay}</div>

      <div
        className="product-card__line"
        style={{ background: product.dot }}
        aria-hidden="true"
      />

      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {/* View Details hint */}
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "var(--copper)",
          }}
        >
          View Details →
        </span>

        {/* Add to enquiry — stopPropagation so card link doesn't fire */}
        <button
          style={{
            background: inList ? "var(--navy)" : "var(--bg-subtle)",
            border: inList ? "1px solid var(--navy)" : "var(--border)",
            color: inList ? "#fff" : "var(--text-muted)",
            fontSize: 11,
            fontWeight: 700,
            padding: "5px 12px",
            borderRadius: 100,
            cursor: "pointer",
            fontFamily: "var(--font-sans)",
            transition: "all 0.15s",
            flexShrink: 0,
          }}
          onClick={function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (inList) {
              removeFromEnquiry(product.id);
            } else {
              addToEnquiry(product);
            }
          }}
          aria-label={
            inList
              ? product.label + " in enquiry list"
              : "Add " + product.label + " to enquiry"
          }
          aria-pressed={inList}
        >
          {inList ? "✓ Remove" : "+ Enquire"}
        </button>
      </div>
    </Link>
  );
}
