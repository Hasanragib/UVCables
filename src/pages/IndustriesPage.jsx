import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import { INDUSTRIES, PRODUCTS } from '../data/index.js';
import '../styles/sections.css';

const INDUSTRY_DETAIL = [
  {
    icon: '⚡', name: 'Power & Utilities',
    desc: 'High-voltage underground and overhead distribution cables for substations, grid connections, and industrial power feeders.',
    productIds: ['xlpe', 'pvc', 'control'],
  },
  {
    icon: '🏗️', name: 'Construction & Infrastructure',
    desc: 'General wiring, flexible supplies, and control cables for residential, commercial, and infrastructure projects.',
    productIds: ['pvc', 'rubber', 'control'],
  },
  {
    icon: '⛏️', name: 'Mining & Heavy Industry',
    desc: 'Trailing, reeling and portable cables rated for tough underground and open-cast mining environments.',
    productIds: ['epr', 'trailing', 'butyl'],
  },
  {
    icon: '🤖', name: 'Automation & OEM',
    desc: 'Multi-core screened control cables and flexible wiring for PLC panels, robots, and OEM machine builders.',
    productIds: ['control', 'pvc', 'silicone'],
  },
  {
    icon: '🌞', name: 'Solar Energy',
    desc: 'UV-stabilised DC cables for rooftop and utility-scale solar PV systems, string wiring, and combiner boxes.',
    productIds: ['solar', 'xlpe'],
  },
  {
    icon: '🚗', name: 'EV Charging Infrastructure',
    desc: 'High-current flexible cables for AC and DC fast EV charging stations, Type 2 and CCS2 connectors.',
    productIds: ['ev', 'xlpe'],
  },
  {
    icon: '🔥', name: 'Steel & Foundry',
    desc: 'Extreme-temperature silicone and butyl cables rated to +180°C for furnaces, ladle cranes, and hot areas.',
    productIds: ['silicone', 'butyl'],
  },
  {
    icon: '⚗️', name: 'Chemical & Process Plants',
    desc: 'Oil, chemical, and radiation-resistant cables for refineries, petrochemical plants, and nuclear facilities.',
    productIds: ['epr', 'butyl', 'pvc'],
  },
  {
    icon: '🏭', name: 'General Industry',
    desc: 'From welding cables to instrumentation — our broad product range covers virtually every wiring need.',
    productIds: ['rubber', 'pvc', 'control', 'xlpe'],
  },
  {
    icon: '🛒', name: 'Retail Distribution',
    desc: 'Supplying wholesale and retail distributors across Delhi NCR with fast-moving cable SKUs.',
    productIds: ['pvc', 'xlpe', 'solar'],
  },
];

function getProducts(ids) {
  return ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
}

export default function IndustriesPage() {
  return (
    <>
      <SEOHead
        title="Industries We Supply"
        description="United Values Cables supplies industrial cables to power utilities, construction, mining, automation, solar energy, EV charging, steel plants, and chemical industries across Delhi NCR."
        path="/industries"
      />

      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <section className="section" aria-labelledby="industries-heading">
          <div className="container">
            <div className="section-head">
              <div className="section-label">We Serve</div>
              <h1 className="section-title" id="industries-heading">Industries We Supply To</h1>
              <p className="section-desc">
                Our cable range covers virtually every industrial sector — from power distribution to new-energy infrastructure.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: 1,
                background: 'var(--bg-white)',
                border: 'var(--border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}
            >
              {INDUSTRY_DETAIL.map(ind => {
                const relatedProducts = getProducts(ind.productIds);
                return (
                  <article
                    key={ind.name}
                    style={{
                      background: 'var(--bg-white)',
                      padding: '28px 24px',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-subtle)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-white)'}
                  >
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{ind.icon}</div>
                    <h2 style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-heading)', marginBottom: 8 }}>
                      {ind.name}
                    </h2>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 16 }}>
                      {ind.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {relatedProducts.map(p => (
                        <Link
                          key={p.id}
                          to={`/products#${p.id}`}
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            padding: '3px 10px',
                            borderRadius: 100,
                            background: 'var(--bg-subtle)',
                            border: 'var(--border)',
                            color: 'var(--text-body)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                          }}
                        >
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.dot, display: 'inline-block' }} />
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{ background: 'var(--copper)', padding: '60px 0' }}
          aria-labelledby="ind-cta-heading"
        >
          <div className="container" style={{ textAlign: 'center' }}>
            <h2
              id="ind-cta-heading"
              style={{ color: '#fff', fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 900, marginBottom: 12 }}
            >
              Don't see your industry listed?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, marginBottom: 28 }}>
              We're happy to discuss your specific cable requirements. Get in touch with us.
            </p>
            <Link to="/contact" className="btn btn--ghost">Contact Us →</Link>
          </div>
        </section>
      </main>
    </>
  );
}
