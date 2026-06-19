import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import ProductCard from '../components/ProductCard.jsx';
import ProductModal from '../components/ProductModal.jsx';
import { useApp } from '../context/AppContext.jsx';
import '../styles/products.css';
import '../styles/sections.css';

export default function ProductsPage() {
  const {
    filterMode, setFilterMode,
    ucFilter,   setUcFilter,
    isFilter,   setIsFilter,
    USE_CASES, IS_STANDARDS,
    filteredProducts,
    activeUCLabel, activeISLabel, hasActiveFilter,
    resetFilters,
  } = useApp();

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    }
  }, [location.hash]);

  return (
    <>
      <SEOHead
        title="Industrial Cable Products"
        description="Browse PVC (IS 694), XLPE (IS 7098), EPR/PCP (IS 9968), Silicone, Control, Trailing, EV (IEC 62893) and Solar (IEC 62930) cables. Filter by use case or IS standard."
        path="/products"
      />

      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <section className="section section--subtle" aria-labelledby="products-heading">
          <div className="container">
            <div className="section-head">
              <div className="section-label">Our Range</div>
              <h1 className="section-title" id="products-heading">Cable Product Lines</h1>
              <p className="section-desc">
                Filter by use case or IS / IEC standard. Click any card to view full specifications and add to your enquiry list.
              </p>
            </div>

            {/* ── Mode toggle ── */}
            <div className="mode-toggle-wrap">
              <div className="mode-toggle" role="group" aria-label="Filter mode">
                <button
                  className={`mode-btn${filterMode === 'usecase' ? ' mode-btn--active' : ''}`}
                  onClick={() => setFilterMode('usecase')}
                  aria-pressed={filterMode === 'usecase'}
                >
                  🎯 Filter by Use Case
                </button>
                <button
                  className={`mode-btn${filterMode === 'is' ? ' mode-btn--active' : ''}`}
                  onClick={() => setFilterMode('is')}
                  aria-pressed={filterMode === 'is'}
                >
                  📋 Filter by IS / IEC Standard
                </button>
              </div>
            </div>

            {/* ── Use Case Buttons ── */}
            {filterMode === 'usecase' && (
              <div className="uc-btn-grid" role="group" aria-label="Filter by use case">
                {USE_CASES.map(uc => (
                  <button
                    key={uc.id}
                    className={`uc-btn${ucFilter === uc.id ? ' uc-btn--active' : ''}`}
                    onClick={() => setUcFilter(uc.id)}
                    aria-pressed={ucFilter === uc.id}
                  >
                    <span className="uc-btn__icon" aria-hidden="true">{uc.icon}</span>
                    <span className="uc-btn__label">{uc.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* ── IS Standard chips ── */}
            {filterMode === 'is' && (
              <div className="is-filter-bar" role="group" aria-label="IS standard filter">
                {IS_STANDARDS.map(std => (
                  <button
                    key={std.id}
                    className={`is-chip${isFilter === std.id ? ' is-chip--active' : ''}`}
                    onClick={() => setIsFilter(std.id)}
                    aria-pressed={isFilter === std.id}
                  >
                    <div className="is-chip__label">{std.icon} {std.label}</div>
                    {std.desc && <div className="is-chip__desc">{std.desc}</div>}
                  </button>
                ))}
              </div>
            )}

            {/* ── Results bar ── */}
            <div className="results-bar">
              <span className="results-count">
                {filteredProducts.length} cable{filteredProducts.length !== 1 ? 's' : ''}
              </span>
              {filterMode === 'usecase' && ucFilter !== 'all' && (
                <span className="results-tag">
                  {activeUCLabel?.icon} {activeUCLabel?.label}
                  <button className="results-tag__clear" onClick={() => setUcFilter('all')} aria-label="Clear filter">✕</button>
                </span>
              )}
              {filterMode === 'is' && isFilter !== 'all' && (
                <span className="results-tag">
                  {activeISLabel?.label}
                  <button className="results-tag__clear" onClick={() => setIsFilter('all')} aria-label="Clear filter">✕</button>
                </span>
              )}
              {hasActiveFilter && (
                <button
                  onClick={resetFilters}
                  style={{ background: 'none', border: 'none', fontSize: 12, color: 'var(--text-faint)', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'var(--font-sans)' }}
                >
                  Reset
                </button>
              )}
            </div>

            {/* ── Product grid ── */}
            {filteredProducts.length === 0 ? (
              <div className="product-grid--empty" role="status">
                No cables match this filter. Try a different category.
              </div>
            ) : (
              <div className="product-grid" id="product-grid">
                {filteredProducts.map(p => (
                  <div key={p.id} id={p.id}>
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Global modal driven by context */}
      <ProductModal />
    </>
  );
}
