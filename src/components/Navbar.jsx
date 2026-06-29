import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import EnquiryDrawer from "./EnquiryDrawer.jsx";
import "../styles/navbar.css";
import CompanyLogo from "../assets/CompanyLogo.webp";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/standards", label: "IS Standards" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { enquiryCount } = useApp();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
        role="banner"
      >
        <div className="navbar__inner">
          {/* Logo */}
          <Link
            to="/"
            className="navbar__logo"
            onClick={closeMenu}
            aria-label="United Values Cables Home"
          >
            <img
              src={CompanyLogo}
              alt="United Values Cables Logo"
              className="navbar__logo-img"
            />
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">UV Cables</span>
              <span className="navbar__logo-sub">
                EST. 1986 · Powering Industry
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " navbar__link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Enquiry button with badge */}
            <button
              className="navbar__enquiry"
              onClick={() => setDrawerOpen(true)}
              aria-label={`Open enquiry list, ${enquiryCount} items`}
            >
              📋 Enquiry
              {enquiryCount > 0 && (
                <span className="navbar__badge">{enquiryCount}</span>
              )}
            </button>

            <Link
              to="/contact"
              className="btn btn--primary btn--sm navbar__cta"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Hamburger + enquiry icon on mobile */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              className="navbar__enquiry navbar__enquiry--mobile"
              onClick={() => setDrawerOpen(true)}
              aria-label={`Enquiry list, ${enquiryCount} items`}
            >
              📋
              {enquiryCount > 0 && (
                <span className="navbar__badge">{enquiryCount}</span>
              )}
            </button>
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <nav
          className={`navbar__mobile${menuOpen ? " is-open" : ""}`}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `navbar__mobile-link${isActive ? " navbar__link--active" : ""}`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn--primary"
            style={{ marginTop: 12 }}
            onClick={closeMenu}
          >
            Get Quote
          </Link>
        </nav>
      </header>

      {/* Enquiry Drawer */}
      <EnquiryDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
