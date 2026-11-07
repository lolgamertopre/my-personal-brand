export default function Navbar({ onDownloadCv, onEmailClick }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand / Logo */}
        <a href="#hero" className="brand-logo-group">
          <div className="brand-seal">S</div>
          <div className="brand-text">
            <span className="brand-initials">SLB</span>
            <span className="brand-subtitle">CURRICULUM VITAE</span>
          </div>
        </a>

        <div className="header-actions">
          <button type="button" className="btn-download-cv" onClick={onDownloadCv}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>DOWNLOAD CV</span>
          </button>

          <button type="button" className="btn-email-me" onClick={onEmailClick}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>EMAIL ME</span>
          </button>
        </div>
      </div>
    </header>
  );
}
