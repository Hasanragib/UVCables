import { useState } from "react";
import "../styles/whatsapp.css";

// ─── Your WhatsApp number ─────────────────────────────────────────────────────
// Format: 91 + 10 digit number, no spaces, no +
var WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "919818088873";

// ─── Pre-filled message ───────────────────────────────────────────────────────
var PRE_FILLED_MESSAGE =
  "Hi UV Cables, I would like to enquire about cables. " +
  "Please share details for: ";

function WhatsAppIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [message, setMessage] = useState(PRE_FILLED_MESSAGE);

  // Build WhatsApp URL
  var waUrl =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);

  // Dismiss the tooltip/popup
  function dismiss(e) {
    e.stopPropagation();
    setOpen(false);
    setDismissed(true);
  }

  function handleOpen() {
    setOpen(function (o) {
      return !o;
    });
  }

  return (
    <div className="wa-float" aria-label="WhatsApp contact">
      {/* ── Popup card ── */}
      {open && (
        <div className="wa-popup" role="dialog" aria-label="WhatsApp enquiry">
          {/* Header */}
          <div className="wa-popup__header">
            <div className="wa-popup__avatar">
              <WhatsAppIcon />
            </div>
            <div>
              <div className="wa-popup__name">UV Cables</div>
              <div className="wa-popup__status">
                <span className="wa-popup__dot" />
                Typically replies within an hour
              </div>
            </div>
            <button
              className="wa-popup__close"
              onClick={dismiss}
              aria-label="Close WhatsApp popup"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="wa-popup__body">
            <div className="wa-popup__bubble">
              👋 Hi! Looking for industrial cables?
              <br />
              <br />
              Tell us what you need — cable type, voltage, quantity — and we'll
              get back with pricing within the hour.
            </div>
          </div>

          {/* Message input */}
          <div className="wa-popup__footer">
            <textarea
              className="wa-popup__input"
              value={message}
              onChange={function (e) {
                setMessage(e.target.value);
              }}
              rows={3}
              placeholder="Type your requirement..."
              aria-label="WhatsApp message"
            />
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-popup__send"
              aria-label="Send WhatsApp message"
              onClick={function () {
                setOpen(false);
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              Send on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* ── Tooltip label (shows before first click) ── */}
      {!open && !dismissed && (
        <div className="wa-float__label">
          <span>Chat with us</span>
          <button
            className="wa-float__label-close"
            onClick={dismiss}
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Main FAB button ── */}
      <button
        className="wa-float__btn"
        onClick={handleOpen}
        aria-label="Open WhatsApp chat"
        aria-expanded={open}
      >
        <span className="wa-float__icon">
          <WhatsAppIcon />
        </span>
        {/* Pulse ring */}
        <span className="wa-float__pulse" aria-hidden="true" />
      </button>
    </div>
  );
}
