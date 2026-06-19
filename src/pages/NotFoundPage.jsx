import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page Not Found" description="This page does not exist." />
      <main
        style={{
          paddingTop: 'var(--nav-h)',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '120px 24px 80px',
        }}
      >
        <div>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🔌</div>
          <h1 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: 'var(--text-heading)', marginBottom: 12 }}>
            Page Not Found
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, marginBottom: 32, maxWidth: 420, margin: '0 auto 32px' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--primary">Go Home</Link>
            <Link to="/products" className="btn btn--ghost">Browse Products</Link>
          </div>
        </div>
      </main>
    </>
  );
}
