import { useState } from "react";
import SEOHead from "../components/SEOHead.jsx";
import { useApp } from "../context/AppContext.jsx";
import {
  submitEnquiry,
  openWhatsApp,
  openMailto,
} from "../services/enquiryService.js";
import "../styles/sections.css";
import "../styles/contact.css";

function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
}) {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={name}>
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input"
        required={required}
        autoComplete="on"
        aria-invalid={!!error}
      />
      {error && (
        <span role="alert" className="form-error">
          {error}
        </span>
      )}
    </div>
  );
}

const SUBMIT_STATE = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export default function ContactPage() {
  const { PRODUCTS, enquiryList, BRAND } = useApp();

  const defaultCable =
    enquiryList.length === 1
      ? enquiryList[0].id
      : enquiryList.length > 1
        ? "multiple"
        : "";

  const defaultMessage =
    enquiryList.length > 1
      ? `Enquiring about: ${enquiryList.map((p) => p.label).join(", ")}`
      : "";

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    cable: defaultCable,
    qty: "",
    message: defaultMessage,
  });

  const [submitState, setSubmitState] = useState(SUBMIT_STATE.IDLE);
  const [submitMethod, setSubmitMethod] = useState(null); // 'email' | 'whatsapp'
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    setSubmitState(SUBMIT_STATE.LOADING);
    setErrorMsg("");

    try {
      const result = await submitEnquiry(form, enquiryList);
      setSubmitMethod(result.method);
      setSubmitState(SUBMIT_STATE.SUCCESS);
    } catch (err) {
      console.error("Enquiry submit error:", err);
      setErrorMsg(
        err?.message ||
          "Something went wrong. Please try WhatsApp or email directly.",
      );
      setSubmitState(SUBMIT_STATE.ERROR);
    }
  };

  const handleWhatsApp = () => openWhatsApp(form, enquiryList);
  const handleMailto = () => openMailto(form, enquiryList);

  return (
    <>
      <SEOHead
        title="Get a Quote"
        description="Request a cable quote from UV Cables, Delhi NCR. PVC, XLPE, EPR, Solar, EV, PTFE(Teflon), Control Cables & Silicone Tubes. B2B manufacturers and retailers."
        path="/contact"
      />

      <main style={{ paddingTop: "var(--nav-h)" }}>
        <section
          className="section section--subtle"
          aria-labelledby="contact-heading"
        >
          <div className="container">
            {/* Header */}
            <div className="section-head">
              <div className="section-label">Get In Touch</div>
              <h1 className="section-title" id="contact-heading">
                Get a Quote
              </h1>
              <p className="section-desc">
                Fill in your requirements below. We'll respond within 1 business
                day with pricing and availability.
              </p>
            </div>

            {/* Enquiry list reminder */}
            {enquiryList.length > 0 && (
              <div className="enquiry-reminder" role="status">
                <span className="enquiry-reminder__label">
                  📋 {enquiryList.length} cable
                  {enquiryList.length > 1 ? "s" : ""} in your list:
                </span>
                <div className="enquiry-reminder__tags">
                  {enquiryList.map((p) => (
                    <span key={p.id} className="enquiry-reminder__tag">
                      <span
                        className="enquiry-reminder__dot"
                        style={{ background: p.dot }}
                      />
                      {p.label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="contact-grid">
              {/* ── FORM AREA ── */}
              <div>
                {submitState === SUBMIT_STATE.SUCCESS ? (
                  <SuccessCard name={form.name} method={submitMethod} />
                ) : (
                  <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Quote request form"
                  >
                    <div className="form-row">
                      <FormField
                        label="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handle}
                        placeholder="Full Name"
                        required
                        error={fieldErrors.name}
                      />
                      <FormField
                        label="Company"
                        name="company"
                        value={form.company}
                        onChange={handle}
                        placeholder="ABC Industries"
                      />
                    </div>

                    <div className="form-row">
                      <FormField
                        label="Phone"
                        name="phone"
                        value={form.phone}
                        onChange={handle}
                        placeholder="+91 98XXX XXXXX"
                        type="tel"
                        required
                        error={fieldErrors.phone}
                      />
                      <FormField
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={handle}
                        placeholder="you@company.com"
                        type="email"
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label className="form-label" htmlFor="cable">
                          Cable Type
                        </label>
                        <select
                          id="cable"
                          name="cable"
                          value={form.cable}
                          onChange={handle}
                          className="form-select"
                        >
                          <option value="">— Select Cable —</option>
                          {PRODUCTS.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.label} ({p.isDisplay})
                            </option>
                          ))}
                          <option value="multiple">Multiple / Not Sure</option>
                        </select>
                      </div>
                      <FormField
                        label="Quantity / Length"
                        name="qty"
                        value={form.qty}
                        onChange={handle}
                        placeholder="e.g., 10000m of 4 sq.mm"
                      />
                    </div>

                    <div className="form-field form-field--full">
                      <label className="form-label" htmlFor="message">
                        Additional Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handle}
                        placeholder="conductor material: tinned copper, size, armoring, delivery all over India..."
                        className="form-textarea"
                      />
                    </div>

                    {/* Error banner */}
                    {submitState === SUBMIT_STATE.ERROR && (
                      <div className="form-error-banner" role="alert">
                        ⚠️ {errorMsg}
                      </div>
                    )}

                    {/* Submit actions */}
                    <div className="form-actions">
                      {/* Primary: EmailJS / auto-detect */}
                      <button
                        type="submit"
                        className="btn btn--primary form-submit"
                        disabled={submitState === SUBMIT_STATE.LOADING}
                        aria-busy={submitState === SUBMIT_STATE.LOADING}
                      >
                        {submitState === SUBMIT_STATE.LOADING ? (
                          <>
                            <span className="form-spinner" aria-hidden="true" />{" "}
                            Sending…
                          </>
                        ) : (
                          "Send Enquiry →"
                        )}
                      </button>

                      {/* WhatsApp alternative */}
                      <button
                        type="button"
                        className="btn btn--whatsapp"
                        onClick={handleWhatsApp}
                        aria-label="Send enquiry via WhatsApp"
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
                        WhatsApp
                      </button>

                      {/* mailto fallback */}
                      <button
                        type="button"
                        className="btn btn--ghost"
                        onClick={handleMailto}
                        aria-label="Send enquiry via email client"
                      >
                        ✉️ Email
                      </button>
                    </div>

                    {/* Channel explanation */}
                    <p className="form-channel-note">
                      <strong>Send Enquiry</strong> delivers directly to our
                      inbox. Use <strong>WhatsApp</strong> for instant response
                      during business hours.
                    </p>
                  </form>
                )}
              </div>

              {/* ── SIDEBAR ── */}
              <div className="contact-info">
                {/* Direct channels */}
                <div className="contact-info-card">
                  <div className="contact-info-card__title">
                    Reach Us Directly
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "919818088873"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-wa-btn"
                    aria-label="Chat on WhatsApp"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>

                  {[
                    {
                      icon: "📞",
                      label: "Call / WhatsApp",
                      value: BRAND.phone,
                      href: `tel:${BRAND.phone}`,
                    },
                    {
                      icon: "✉️",
                      label: "Email",
                      value: BRAND.email,
                      href: `mailto:${BRAND.email}`,
                    },
                    {
                      icon: "📍",
                      label: "Location",
                      value: BRAND.address,
                      href: null,
                    },
                    {
                      icon: "🕐",
                      label: "Hours",
                      value: "Mon–Sat, 9AM–6PM IST",
                      href: null,
                    },
                  ].map((c) => (
                    <div key={c.label} className="contact-row">
                      <span className="contact-row__icon">{c.icon}</span>
                      <div>
                        <div className="contact-row__label">{c.label}</div>
                        {c.href ? (
                          <a
                            href={c.href}
                            className="contact-row__value contact-row__link"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <div className="contact-row__value">{c.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* What to include */}
                <div className="contact-info-card">
                  <div className="contact-info-card__title">
                    What to Include
                  </div>
                  {[
                    "Cable type (e.g. XLPE, PVC, EPR)",
                    "Voltage and current rating required",
                    "Conductor cross-section (sq.mm)",
                    "Number of cores",
                    "Total length / quantity",
                    "IS / IEC standard required",
                    "Delivery location is all over India",
                  ].map((tip) => (
                    <div key={tip} className="contact-tip">
                      <span className="contact-tip__arrow">▸</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ─── Success card ──────────────────────────────────────────────────────────
function SuccessCard({ name, method }) {
  return (
    <div className="form-success" role="status" aria-live="polite">
      <div className="form-success__icon">
        {method === "whatsapp" ? "💬" : "✅"}
      </div>
      <div className="form-success__title">
        {method === "whatsapp" ? "Opening WhatsApp…" : "Enquiry Sent!"}
      </div>
      <p className="form-success__sub">
        {method === "whatsapp"
          ? `Your enquiry has been pre-filled in WhatsApp, ${name}. Just tap Send.`
          : `Thank you, ${name}. We've received your enquiry and will respond within 1 business day.`}
      </p>
      {method === "email" && (
        <p className="form-success__sub" style={{ marginTop: 8, fontSize: 13 }}>
          Didn't receive a confirmation? Check your spam folder or reach us
          directly on WhatsApp.
        </p>
      )}
    </div>
  );
}
