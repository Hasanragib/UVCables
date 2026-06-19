/**
 * enquiryService.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Handles enquiry submission via three channels:
 *   1. EmailJS  — sends email directly to inbox (no backend needed)
 *   2. WhatsApp — opens WhatsApp with pre-filled message
 *   3. mailto   — fallback: opens user's email client
 *
 * HOW TO SET UP EmailJS (free tier: 200 emails/month):
 *   1. Go to https://www.emailjs.com/ → Sign up (free)
 *   2. Add Email Service → connect your Gmail / Outlook / SMTP
 *   3. Create Email Template with these variables:
 *        {{from_name}}, {{company}}, {{phone}}, {{email}},
 *        {{cable}}, {{qty}}, {{message}}, {{enquiry_list}}
 *   4. Copy your:
 *        - Service ID  (looks like: service_xxxxxxx)
 *        - Template ID (looks like: template_xxxxxxx)
 *        - Public Key  (looks like: xxxxxxxxxxxxxxxxx)
 *   5. Paste them into the CONFIG object below.
 *
 * HOW TO SET UP WhatsApp:
 *   - Replace WHATSAPP_NUMBER below with your WhatsApp business number
 *     in international format WITHOUT the + sign. E.g. 919812345678
 * ─────────────────────────────────────────────────────────────────────────────
 */

import emailjs from '@emailjs/browser';

// ─── CONFIGURATION ─────────────────────────────────────────────────────────
// ⚠️  Replace these with your real values before deploying.
const CONFIG = {
  emailjs: {
    serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID,   // e.g. 'service_abc123'
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // e.g. 'template_xyz456'
    publicKey:   import.meta.env.VITE_EMAILJS_PUBLIC_KEY,   // e.g. 'abcDEF1234567890'
  },
  whatsapp: {
    number: import.meta.env.VITE_WHATSAPP_NUMBER,  // International format, no +. E.g. 91 + 10-digit mobile
  },
  fallbackEmail: import.meta.env.VITE_FALLBACK_EMAIL,
};

// ─── IS EMAILJS CONFIGURED? ────────────────────────────────────────────────
function isEmailJSConfigured() {
  const { serviceId, templateId, publicKey } = CONFIG.emailjs;
  return (
    serviceId  !== 'YOUR_EMAILJS_SERVICE_ID'  &&
    templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
    publicKey  !== 'YOUR_EMAILJS_PUBLIC_KEY'
  );
}

// ─── BUILD HUMAN-READABLE ENQUIRY TEXT ─────────────────────────────────────
function buildEnquiryText(form, enquiryList) {
  const lines = [
    `Name: ${form.name}`,
    form.company ? `Company: ${form.company}` : null,
    `Phone: ${form.phone}`,
    form.email   ? `Email: ${form.email}`    : null,
    form.cable   ? `Cable Type: ${form.cable}` : null,
    form.qty     ? `Quantity/Length: ${form.qty}` : null,
    enquiryList.length > 0
      ? `Enquiry List: ${enquiryList.map(p => `${p.label} (${p.isDisplay})`).join(', ')}`
      : null,
    form.message ? `Additional Requirements:\n${form.message}` : null,
  ].filter(Boolean);

  return lines.join('\n');
}

// ─── 1. EMAILJS SUBMISSION ──────────────────────────────────────────────────
async function sendViaEmailJS(form, enquiryList) {
  const { serviceId, templateId, publicKey } = CONFIG.emailjs;

  const templateParams = {
    from_name:    form.name,
    company:      form.company  || '—',
    phone:        form.phone,
    email:        form.email    || '—',
    cable:        form.cable    || '—',
    qty:          form.qty      || '—',
    message:      form.message  || '—',
    enquiry_list: enquiryList.length > 0
      ? enquiryList.map(p => `${p.label} (${p.isDisplay})`).join(', ')
      : '—',
    reply_to:     form.email    || form.phone,
  };

  await emailjs.send(serviceId, templateId, templateParams, publicKey);
}

// ─── 2. WHATSAPP DEEP LINK ───────────────────────────────────────────────────
export function openWhatsApp(form, enquiryList) {
  const text = buildEnquiryText(form, enquiryList);
  const encoded = encodeURIComponent(
    `*New Cable Enquiry — United Values Cables Website*\n\n${text}`
  );
  window.open(
    `https://wa.me/${CONFIG.whatsapp.number}?text=${encoded}`,
    '_blank',
    'noopener,noreferrer'
  );
}

// ─── 3. MAILTO FALLBACK ──────────────────────────────────────────────────────
export function openMailto(form, enquiryList) {
  const subject = encodeURIComponent(
    `Cable Enquiry from ${form.name}${form.company ? ` — ${form.company}` : ''}`
  );
  const body = encodeURIComponent(buildEnquiryText(form, enquiryList));
  window.location.href =
    `mailto:${CONFIG.fallbackEmail}?subject=${subject}&body=${body}`;
}

// ─── MAIN SUBMIT FUNCTION ───────────────────────────────────────────────────
/**
 * submitEnquiry(form, enquiryList)
 *
 * Returns { success: true } or throws an Error.
 *
 * Strategy:
 *   - If EmailJS is configured → use it (silent background send)
 *   - Otherwise → WhatsApp (opens new tab) as primary fallback
 */
export async function submitEnquiry(form, enquiryList) {
  if (isEmailJSConfigured()) {
    await sendViaEmailJS(form, enquiryList);
    return { success: true, method: 'email' };
  }

  // EmailJS not configured → fall back to WhatsApp
  openWhatsApp(form, enquiryList);
  return { success: true, method: 'whatsapp' };
}

export { CONFIG };
