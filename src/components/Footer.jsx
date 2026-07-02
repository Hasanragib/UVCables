import { Link } from "react-router-dom";
import { BRAND, PRODUCTS } from "../data/index.js";
import "../styles/sections.css";
import CompanyLogo from "../assets/CompanyLogo.webp";

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function BloggerIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.026 0h19.95C23.1 0 24 .9 24 2.026v19.95C24 23.1 23.1 24 21.976 24zM10.25 6.5H8.125C6.331 6.5 4.875 7.956 4.875 9.75v4.5c0 1.794 1.456 3.25 3.25 3.25h7.75c1.794 0 3.25-1.456 3.25-3.25V12c0-.69-.56-1.25-1.25-1.25h-.625c-.345 0-.625-.28-.625-.625V9.75c0-1.794-1.456-3.25-3.25-3.25H10.25zm-.375 3.25c0-.345.28-.625.625-.625h3c.345 0 .625.28.625.625s-.28.625-.625.625h-3a.625.625 0 01-.625-.625zm0 3c0-.345.28-.625.625-.625h5c.345 0 .625.28.625.625s-.28.625-.625.625h-5a.625.625 0 01-.625-.625z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const mapsUrl =
    "https://www.google.com/maps/place/United+Values+Cables/@28.7303761,77.2114123,17z/data=!3m1!4b1!4m6!3m5!1s0x390cffb67430ea55:0xef36ff9964357ad1!8m2!3d28.7303762!4d77.2162832!16s%2Fg%2F11z9qnck8f?entry=ttu";

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__top">
          {/* COLUMN 1 — Logo + Social + Contact — ALL inside one div */}
          <div className="footer__brand-col">
            {/* 1. Logo */}
            <Link to="/" className="footer__logo">
              <img
                src={CompanyLogo}
                alt="UV Cables Logo"
                className="footer__logo-img"
              />
              <div>
                <div className="footer__brand-name">{BRAND.name}</div>
                <div className="footer__brand-sub">{BRAND.tagline}</div>
              </div>
            </Link>

            {/* 2. Social — above contact */}
            <div
              className="footer__social"
              aria-label="Follow us on social media"
            >
              <a
                href="https://www.linkedin.com/in/uvcables"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn footer__social-btn--linkedin"
                aria-label="Follow UV Cables on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/uvcables"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn footer__social-btn--instagram"
                aria-label="Follow UV Cables on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://uvcables.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn footer__social-btn--blogger"
                aria-label="Read our Blog"
              >
                <BloggerIcon />
              </a>
            </div>

            {/* 3. Contact — below social */}
            <div className="footer__contact-info">
              <a href={"tel:" + BRAND.phone} className="footer__contact-row">
                <span>📞</span>
                <span>{BRAND.phone}</span>
              </a>
              <a href={"mailto:" + BRAND.email} className="footer__contact-row">
                <span>✉️</span>
                <span>{BRAND.email}</span>
              </a>
              <div className="footer__contact-row">
                <span>🕐</span>
                <span>Mon–Sat, 9AM–6PM IST</span>
              </div>
            </div>
          </div>
          {/* END COLUMN 1 */}

          {/* COLUMN 2 — Our Cables */}
          <div className="footer__products-col">
            <div className="footer__col-title">Our Cables</div>
            <div className="footer__links">
              {PRODUCTS.map(function (p) {
                return (
                  <Link
                    key={p.id}
                    to={"/products#" + p.id}
                    className="footer__link"
                  >
                    <span className="footer__link-arrow">▸</span>
                    {p.label}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* END COLUMN 2 */}
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span>
            {"© " + year + " " + BRAND.name + ". All rights reserved."}
          </span>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__address"
          >
            <span>📍</span>
            <span>{BRAND.address}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
