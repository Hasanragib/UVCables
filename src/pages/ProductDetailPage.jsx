import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import { PRODUCT_DETAILS } from "../data/productDetail.js";
import SEOHead from "../components/SEOHead.jsx";
import "../styles/productDetail.css";
import "../styles/sections.css";

import pvc1 from "../assets/PVCCable.webp";
import pvc2 from "../assets/PVC.webp";
import pvc3 from "../assets/MultiCorePVC.webp";
import xlpe1 from "../assets/XLPE2.webp";
import xlpe2 from "../assets/XLPE3.webp";
import xlpe3 from "../assets/XLPE.webp";
import control1 from "../assets/PVCControlCable.webp";
import control2 from "../assets/EPR_PCP_ControlCable.webp";
import control3 from "../assets/ControlCable.webp";
import Sili1 from "../assets/SiliconeCab1.webp";
import Sili2 from "../assets/SiliconeFibreGlass.webp";
import Sili3 from "../assets/SiliconeHT.webp";
import EPR1 from "../assets/EPR_PCP3.webp";
import EPR2 from "../assets/SubmersibleCable.webp";
import EPR3 from "../assets/EPR_PCP.webp";
import Butyl1 from "../assets/ButylCable.webp";
import Butyl2 from "../assets/Butyl2.webp";
import Butyl3 from "../assets/Butyl3.webp";
import RubberCable1 from "../assets/RubberCable.webp";
import RubberCable2 from "../assets/RubberCable2.webp";
import RubberCable3 from "../assets/RubberCable3.webp";
import Trailing from "../assets/TrailingCable.webp";
import EV1 from "../assets/BatteryCable_EV_HV.webp";
import EV2 from "../assets/BatteryCable_EV2.webp";
import EV3 from "../assets/BatteryCable_EV3.webp";
import solar from "../assets/Solar_Cable.webp";
import solar2 from "../assets/Solar_Cable2.webp";
import solar3 from "../assets/Solar_Cable3.webp";
import teflon from "../assets/TeflonCable.webp";
import teflon2 from "../assets/TeflonCable2.webp";
import teflon3 from "../assets/TeflonCable3.webp";
import siliTube from "../assets/SiliconeTubesProfiles.webp";
import siliProfile from "../assets/SiliconeProfiles.webp";
import siliCords from "../assets/SiliconeCords.webp";
import copperbraid1 from "../assets/CopperBraidWire3.webp";
import copperbraid2 from "../assets/CopperBraidWire2.webp";
import copperbraid3 from "../assets/CopperBraidWire1.webp";
import copperwire1 from "../assets/CopperWire1.webp";
import copperwire2 from "../assets/CopperWire2.webp";
import copperwire3 from "../assets/CopperWire3.webp";
import copperrope1 from "../assets/CopperRope1.webp";
import copperrope2 from "../assets/CopperRope2.webp";
import copperrope3 from "../assets/CopperRope3.webp";

const CABLE_IMAGES = {
  pvc: [pvc1, pvc2, pvc3],
  control: [control1, control2, control3],
  silicone: [Sili1, Sili2, Sili3],
  epr: [EPR1, EPR2, EPR3],
  butyl: [Butyl1, Butyl2, Butyl3],
  xlpe: [xlpe1, xlpe2, xlpe3],
  rubber: [RubberCable1, RubberCable2, RubberCable3],
  trailing: [Trailing, EPR1, control2],
  ev: [EV1, EV2, EV3],
  solar: [solar, solar2, solar3],
  ptfe: [teflon, teflon2, teflon3],
  "silicone-tubes": [siliTube, siliProfile, siliCords],
  "braided-copper": [copperbraid1, copperbraid2, copperbraid3],
  "copper-wire": [copperwire1, copperwire2, copperwire3],
  "copper-rope": [copperrope1, copperrope2, copperrope3],
};

// ─── Image Carousel ───────────────────────────────────────────────────────────
function ImageCarousel({ images, alt }) {
  var activeState = useState(0);
  var active = activeState[0];
  var setActive = activeState[1];

  // ── Auto-advance every 3 seconds ─────────────────────────
  useEffect(
    function () {
      if (images.length <= 1) return;
      var timer = setInterval(function () {
        setActive(function (i) {
          return i === images.length - 1 ? 0 : i + 1;
        });
      }, 3000);
      return function () {
        clearInterval(timer);
      };
    },
    [images.length],
  );

  function prev() {
    setActive(function (i) {
      return i === 0 ? images.length - 1 : i - 1;
    });
  }

  function next() {
    setActive(function (i) {
      return i === images.length - 1 ? 0 : i + 1;
    });
  }

  return (
    <div className="pd-carousel">
      {/* Main image — only show active */}
      <div className="pd-carousel__main">
        <img
          key={active}
          src={images[active]}
          alt={alt + " image " + (active + 1)}
          className="pd-carousel__img"
          loading="lazy"
        />

        {/* Prev / Next buttons */}
        {images.length > 1 && (
          <>
            <button
              className="pd-carousel__btn pd-carousel__btn--prev"
              onClick={prev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="pd-carousel__btn pd-carousel__btn--next"
              onClick={next}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Counter badge */}
        <div className="pd-carousel__counter">
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="pd-carousel__thumbs">
        {images.map(function (img, i) {
          return (
            <button
              key={i}
              className={
                "pd-carousel__thumb" +
                (i === active ? " pd-carousel__thumb--active" : "")
              }
              onClick={function () {
                setActive(i);
              }}
              aria-label={"View image " + (i + 1)}
              aria-pressed={i === active}
            >
              <img
                src={img}
                alt={alt + " thumbnail " + (i + 1)}
                loading="lazy"
              />
            </button>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="pd-carousel__dots">
        {images.map(function (_, i) {
          return (
            <button
              key={i}
              className={
                "pd-carousel__dot" +
                (i === active ? " pd-carousel__dot--active" : "")
              }
              onClick={function () {
                setActive(i);
              }}
              aria-label={"Go to image " + (i + 1)}
            />
          );
        })}
      </div>
    </div>
  );
}

// ─── Spec Row ─────────────────────────────────────────────────────────────────
function SpecRow({ label, value }) {
  return (
    <div className="pd-spec-row">
      <span className="pd-spec-label">{label}</span>
      <span className="pd-spec-value">{value}</span>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProductDetailPage() {
  var params = useParams();
  var id = params.id;
  var app = useApp();
  var PRODUCTS = app.PRODUCTS;
  var navigate = useNavigate();

  var product = PRODUCTS.find(function (p) {
    return p.id === id;
  });
  var detail = PRODUCT_DETAILS[id];

  if (!product || !detail) {
    return (
      <main
        style={{
          paddingTop: "var(--nav-h)",
          textAlign: "center",
          padding: "120px 24px",
        }}
      >
        <div style={{ fontSize: 48 }}>🔌</div>
        <h1 style={{ fontSize: 28, fontWeight: 900, margin: "16px 0 12px" }}>
          Product Not Found
        </h1>
        <p style={{ color: "var(--text-muted)", marginBottom: 28 }}>
          The cable you are looking for does not exist.
        </p>
        <Link to="/products" className="btn btn--primary">
          Browse All Cables
        </Link>
      </main>
    );
  }

  // Build carousel — use CABLE_IMAGES if available, otherwise repeat product image
  var customImages = CABLE_IMAGES[id];
  var allImages = customImages
    ? customImages
    : [product.image, product.image, product.image];

  var waMsg =
    "Hi UV Cables, I am interested in " +
    product.label +
    ". Please share pricing and availability.";
  var waUrl =
    "https://wa.me/" +
    (import.meta.env.VITE_WHATSAPP_NUMBER || "919818088873") +
    "?text=" +
    encodeURIComponent(waMsg);

  return (
    <>
      <SEOHead
        title={product.label}
        description={
          detail.tagline +
          ". " +
          detail.voltageRating +
          ", " +
          detail.tempRange +
          ". UV Cables Delhi NCR."
        }
        path={"/products/" + id}
      />

      <main style={{ paddingTop: "var(--nav-h)" }}>
        {/* Breadcrumb */}
        <div className="pd-breadcrumb">
          <div className="container">
            <Link to="/" className="pd-breadcrumb-link">
              Home
            </Link>
            <span className="pd-breadcrumb-sep">›</span>
            <Link to="/products" className="pd-breadcrumb-link">
              Products
            </Link>
            <span className="pd-breadcrumb-sep">›</span>
            <span className="pd-breadcrumb-current">{product.label}</span>
          </div>
        </div>

        {/* Hero */}
        <div
          className="pd-hero"
          style={{ borderTop: "4px solid " + product.dot }}
        >
          <div className="container">
            <div className="pd-hero-inner">
              {/* Left — info */}
              <div className="pd-hero-left">
                <div className="pd-hero-badge">
                  <span style={{ color: product.dot }}>{product.icon}</span>
                  <span>{product.short}</span>
                </div>
                <h1 className="pd-hero-title">{product.label}</h1>
                <p className="pd-hero-tagline">{detail.tagline}</p>

                <div className="pd-hero-quick-specs">
                  <div className="pd-quick-spec">
                    <span className="pd-quick-spec-label">Voltage</span>
                    <span className="pd-quick-spec-value">
                      {detail.voltageRating}
                    </span>
                  </div>
                  <div className="pd-quick-spec">
                    <span className="pd-quick-spec-label">Temperature</span>
                    <span className="pd-quick-spec-value">
                      {detail.tempRange}
                    </span>
                  </div>
                  <div className="pd-quick-spec">
                    <span className="pd-quick-spec-label">Insulation</span>
                    <span className="pd-quick-spec-value">
                      {detail.insulation}
                    </span>
                  </div>
                  <div className="pd-quick-spec">
                    <span className="pd-quick-spec-label">Conductor</span>
                    <span className="pd-quick-spec-value">
                      {detail.conductorMaterial}
                    </span>
                  </div>
                </div>

                <div className="pd-hero-actions">
                  <Link to="/contact" className="btn btn--primary">
                    Get a Quote →
                  </Link>
                  <a
                    href={waUrl}
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
                    WhatsApp Us
                  </a>
                  <button
                    className="btn btn--ghost"
                    onClick={function () {
                      navigate(-1);
                    }}
                  >
                    ← Back
                  </button>
                </div>
              </div>

              {/* Right — image carousel */}
              <div className="pd-hero-right">
                <ImageCarousel images={allImages} alt={product.label} />
              </div>
            </div>
          </div>
        </div>

        {/* Construction Table */}
        <section
          className="section section--subtle"
          aria-labelledby="construction-heading"
        >
          <div className="container">
            <h2 className="pd-section-title" id="construction-heading">
              Cable Construction
            </h2>
            <div className="pd-construction-table">
              <div className="pd-table-head">
                <div>Layer</div>
                <div>Component</div>
                <div>Material</div>
              </div>
              {detail.construction.map(function (layer) {
                return (
                  <div key={layer.layer} className="pd-table-row">
                    <div className="pd-table-layer">
                      <span
                        className="pd-layer-dot"
                        style={{ background: layer.color }}
                      />
                      {layer.layer}
                    </div>
                    <div className="pd-table-name">{layer.name}</div>
                    <div className="pd-table-material">{layer.material}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specs + Sizes */}
        <section className="section" aria-labelledby="specs-heading">
          <div className="container">
            <div className="pd-specs-grid">
              <div>
                <h2 className="pd-section-title" id="specs-heading">
                  Technical Specifications
                </h2>
                <div className="pd-specs-card">
                  <SpecRow
                    label="Voltage Rating"
                    value={detail.voltageRating}
                  />
                  <SpecRow label="Temperature Range" value={detail.tempRange} />
                  <SpecRow
                    label="Conductor Material"
                    value={detail.conductorMaterial}
                  />
                  <SpecRow
                    label="Conductor Class"
                    value={detail.conductorClass}
                  />
                  <SpecRow label="Insulation" value={detail.insulation} />
                  <SpecRow label="Outer Sheath" value={detail.sheath} />
                  <SpecRow label="Armoring" value={detail.armoring} />
                  <SpecRow label="Flame Rating" value={detail.flameRating} />
                </div>
              </div>

              <div>
                <h2 className="pd-section-title" id="sizes-heading">
                  Available Sizes
                </h2>
                <div className="pd-sizes-table">
                  <div className="pd-sizes-head">
                    <div>Cross-Section</div>
                    <div>Cores</div>
                    <div>Voltage</div>
                    <div>Conductor OD</div>
                  </div>
                  {detail.sizes.map(function (size, i) {
                    return (
                      <div
                        key={i}
                        className={
                          "pd-sizes-row" +
                          (i % 2 !== 0 ? " pd-sizes-row--alt" : "")
                        }
                      >
                        <div className="pd-sizes-csa">
                          {size.csa !== "Custom" ? size.csa + " mm²" : size.csa}
                        </div>
                        <div>{size.cores}</div>
                        <div style={{ fontFamily: "monospace", fontSize: 11 }}>
                          {size.voltageV}
                        </div>
                        <div>{size.conductorOD}</div>
                      </div>
                    );
                  })}
                </div>
                <p className="pd-sizes-note">
                  * Custom cross-sections and core counts available on request.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section
          className="section section--subtle"
          aria-labelledby="applications-heading"
        >
          <div className="container">
            <h2 className="pd-section-title" id="applications-heading">
              Applications
            </h2>
            <div className="pd-applications-grid">
              {detail.applications.map(function (app) {
                return (
                  <div key={app.title} className="pd-app-card">
                    <div className="pd-app-icon">{app.icon}</div>
                    <div className="pd-app-title">{app.title}</div>
                    <div className="pd-app-desc">{app.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--navy)", padding: "60px 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(20px,3vw,32px)",
                fontWeight: 900,
                marginBottom: 12,
                letterSpacing: "-0.025em",
              }}
            >
              {"Need " + product.label + "?"}
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
              Share your requirement — cross-section, cores, voltage and
              quantity. We respond within the day.
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--space-3)",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/contact"
                className="btn btn--primary"
                style={{ fontSize: 15, padding: "13px 28px" }}
              >
                Get a Quote →
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  border: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "13px 24px",
                  borderRadius: "var(--radius-md)",
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  fontFamily: "var(--font-sans)",
                }}
              >
                WhatsApp Enquiry
              </a>
              <Link
                to="/products"
                className="btn btn--ghost"
                style={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.3)",
                  fontSize: 15,
                }}
              >
                View All Cables
              </Link>
            </div>
          </div>
        </section>

        {/* Other products */}
        <section className="section" aria-labelledby="other-heading">
          <div className="container">
            <h2 className="pd-section-title" id="other-heading">
              Also Available
            </h2>
            <div className="pd-other-grid">
              {PRODUCTS.filter(function (p) {
                return p.id !== id;
              })
                .slice(0, 4)
                .map(function (p) {
                  return (
                    <Link
                      key={p.id}
                      to={"/products/" + p.id}
                      className="pd-other-card"
                    >
                      <div
                        className="pd-other-dot"
                        style={{ background: p.dot }}
                      />
                      <div>
                        <div className="pd-other-name">{p.label}</div>
                        <div className="pd-other-std">{p.short}</div>
                      </div>
                      <span className="pd-other-arrow">›</span>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
