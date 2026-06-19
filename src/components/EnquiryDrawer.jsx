import { useApp } from '../context/AppContext.jsx';
import { Link } from 'react-router-dom';
import '../styles/enquiry.css';

export default function EnquiryDrawer({ open, onClose }) {
  const { enquiryList, removeFromEnquiry, clearEnquiry } = useApp();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="enquiry-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={`enquiry-drawer${open ? ' enquiry-drawer--open' : ''}`}
        aria-label="Enquiry list"
        aria-hidden={!open}
      >
        <div className="enquiry-drawer__header">
          <h2 className="enquiry-drawer__title">
            Enquiry List
            {enquiryList.length > 0 && (
              <span className="enquiry-drawer__count">{enquiryList.length}</span>
            )}
          </h2>
          <button
            className="enquiry-drawer__close"
            onClick={onClose}
            aria-label="Close enquiry list"
          >
            ✕
          </button>
        </div>

        <div className="enquiry-drawer__body">
          {enquiryList.length === 0 ? (
            <div className="enquiry-drawer__empty">
              <div className="enquiry-drawer__empty-icon">📋</div>
              <p>No cables added yet.</p>
              <p>Click "Add to Enquiry" on any product card.</p>
            </div>
          ) : (
            <ul className="enquiry-drawer__list">
              {enquiryList.map(p => (
                <li key={p.id} className="enquiry-item">
                  <div
                    className="enquiry-item__dot"
                    style={{ background: p.dot }}
                  />
                  <div className="enquiry-item__info">
                    <div className="enquiry-item__name">{p.label}</div>
                    <div className="enquiry-item__std">📋 {p.isDisplay}</div>
                  </div>
                  <button
                    className="enquiry-item__remove"
                    onClick={() => removeFromEnquiry(p.id)}
                    aria-label={`Remove ${p.label}`}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {enquiryList.length > 0 && (
          <div className="enquiry-drawer__footer">
            <Link
              to="/contact"
              className="btn btn--primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={onClose}
            >
              Request Quote for {enquiryList.length} Cable{enquiryList.length > 1 ? 's' : ''} →
            </Link>
            <button
              className="enquiry-drawer__clear"
              onClick={clearEnquiry}
            >
              Clear all
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
