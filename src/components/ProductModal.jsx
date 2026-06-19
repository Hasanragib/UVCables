import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { USE_CASES } from '../data/index.js';
import '../styles/modal.css';

export default function ProductModal() {
  const { activeProduct: product, closeProduct, addToEnquiry, isInEnquiry } = useApp();

  useEffect(() => {
    if (!product) return;
    const fn = (e) => { if (e.key === 'Escape') closeProduct(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [product, closeProduct]);

  if (!product) return null;

  const useCaseLabels = product.useCases
    .map(id => USE_CASES.find(u => u.id === id))
    .filter(Boolean);

  const inList = isInEnquiry(product.id);

  return (
    <div
      className="modal-overlay"
      onClick={closeProduct}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.label} specifications`}
    >
      <div className="modal" onClick={e => e.stopPropagation()}>
        {/* Hero image */}
        <div className="modal__img-wrap">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="modal__img"
            loading="lazy"
          />
          <div className="modal__img-overlay" />
          <div className="modal__img-badge">
            <div className="modal__dot" style={{ background: product.dot }} />
            <span>{product.label}</span>
          </div>
          <button className="modal__close" onClick={closeProduct} aria-label="Close modal">✕</button>
        </div>

        {/* Body */}
        <div className="modal__body">
          <div className="modal__header-row">
            <div>
              <div className="modal__is-tag">📋 {product.isDisplay}</div>
              <h2 className="modal__title">{product.label}</h2>
            </div>
            <button
              style={{
                background: inList ? 'var(--navy)' : 'var(--copper)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                padding: '9px 16px',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'background 0.15s',
              }}
              onClick={() => addToEnquiry(product)}
              aria-pressed={inList}
            >
              {inList ? '✓ In Enquiry List' : '+ Add to Enquiry'}
            </button>
          </div>

          {/* Use case tags */}
          <div className="modal__uc-tags" aria-label="Use cases">
            {useCaseLabels.map(uc => (
              <span key={uc.id} className="modal__uc-tag">
                {uc.icon} {uc.label}
              </span>
            ))}
          </div>

          <p className="modal__desc">{product.description}</p>

          <div className="modal__cols">
            <div>
              <h3 className="modal__sub-head">Technical Specs</h3>
              <ul className="modal__list" aria-label="Technical specifications">
                {product.specs.map(s => (
                  <li key={s} className="modal__list-item">
                    <span style={{ color: product.dot }}>▸</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="modal__sub-head">Applications</h3>
              <ul className="modal__list" aria-label="Applications">
                {product.applications.map(a => (
                  <li key={a} className="modal__list-item">
                    <span style={{ color: product.dot }}>▸</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to="/contact"
            className="btn btn--primary"
            style={{ marginTop: 28 }}
            onClick={closeProduct}
          >
            Enquire for this cable →
          </Link>
        </div>
      </div>
    </div>
  );
}
