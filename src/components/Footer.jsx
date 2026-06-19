import { Link } from "react-router-dom";
import { BRAND, PRODUCTS } from "../data/index.js";
import "../styles/sections.css";
import CompanyLogo from "../assets/CompanyLogo.webp";

export default function Footer() {
  const year = new Date().getFullYear();

  // Your exact verified Google Maps business listing URL
  const mapsUrl =
    "https://www.google.com/maps/place/United+Values+Cables/@28.7303761,77.2114123,17z/data=!3m1!4b1!4m6!3m5!1s0x390cffb67430ea55:0xef36ff9964357ad1!8m2!3d28.7303762!4d77.2162832!16s%2Fg%2F11z9qnck8f?entry=ttu";

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__top">
          {/* Brand */}
          <div>
            <Link to="/" className="footer__logo">
              <img
                src={CompanyLogo}
                alt="United Values Cables"
                className="footer__logo-img"
              />
              <div>
                <div className="footer__brand-name">{BRAND.name}</div>
                <div className="footer__brand-sub">{BRAND.tagline}</div>
              </div>
            </Link>
          </div>

          {/* Contact Details Quick Links */}
          <div
            className="footer__contact-info"
            style={{
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <a
              href={`tel:${BRAND.phone}`}
              className="footer__link"
              style={{ textDecoration: "none" }}
            >
              📞 {BRAND.phone}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="footer__link"
              style={{ textDecoration: "none" }}
            >
              ✉️ {BRAND.email}
            </a>
          </div>

          {/* Product links */}
          <div className="footer__links">
            {PRODUCTS.map((p) => (
              <Link
                key={p.id}
                to={`/products#${p.id}`}
                className="footer__link"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {BRAND.name}. All rights reserved.
          </span>

          {/* Direct Link to Verified Pin */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__address"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            📍 {BRAND.address}
          </a>
        </div>
      </div>
    </footer>
  );
}
