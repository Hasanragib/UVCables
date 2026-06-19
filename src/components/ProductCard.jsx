import { useApp } from '../context/AppContext.jsx';
import { USE_CASES } from '../data/index.js';

export default function ProductCard({ product }) {
  const { openProduct, addToEnquiry, isInEnquiry } = useApp();
  const primaryUseCase = USE_CASES.find(u => u.id === product.useCases[0]);
  const inList = isInEnquiry(product.id);

  return (
    <article
      className="product-card product-card--with-img"
      role="article"
      aria-label={product.label}
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
        <div className="product-card__dot" style={{ background: product.dot }} aria-hidden="true" />
        <span className="product-card__badge">
          {primaryUseCase?.icon} {primaryUseCase?.label}
        </span>
      </div>

      <div className="product-card__short">{product.short}</div>
      <h3 className="product-card__name">{product.label}</h3>
      <p className="product-card__desc">
        {product.description.substring(0, 90)}…
      </p>

      <div className="product-card__is">📋 {product.isDisplay}</div>

      <div
        className="product-card__line"
        style={{ background: product.dot }}
        aria-hidden="true"
      />

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <button
          className="product-card__cta"
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', padding: 0, fontSize: 13, fontWeight: 700, color: 'var(--copper)' }}
          onClick={() => openProduct(product)}
          aria-label={`View ${product.label} specifications`}
        >
          View Specs →
        </button>
        <button
          style={{
            marginLeft: 'auto',
            background: inList ? 'var(--navy)' : 'var(--bg-subtle)',
            border: inList ? '1px solid var(--navy)' : 'var(--border)',
            color: inList ? '#fff' : 'var(--text-muted)',
            fontSize: 11,
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: 100,
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            transition: 'all 0.15s',
          }}
          onClick={() => addToEnquiry(product)}
          aria-label={inList ? `${product.label} in enquiry list` : `Add ${product.label} to enquiry`}
          aria-pressed={inList}
        >
          {inList ? '✓ Added' : '+ Enquire'}
        </button>
      </div>
    </article>
  );
}
