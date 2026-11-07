import { profileData } from '../data/portfolioData';

const indexItems = [
  { id: 'skills', label: 'Skills', count: 37 },
  { id: 'degrees', label: 'Degrees', count: 2 },
  { id: 'certifications', label: 'Certifications', count: 3 },
  { id: 'cv', label: 'Curriculum Vitae', count: 12 },
  { id: 'research', label: 'Research', count: 7 },
  { id: 'talks', label: 'Talks', count: 8 },
  { id: 'projects', label: 'Projects', count: 8 },
  { id: 'courses', label: 'Courses', count: 21 },
  { id: 'note', label: 'Leave a note', count: null }
];

export default function Sidebar({ activeSection, onSelectSection, onOpenNoteModal }) {
  const handleItemClick = (id) => {
    if (id === 'note') {
      onOpenNoteModal();
    } else {
      onSelectSection(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside className="retro-sidebar-panel">
      {/* 1. Current Position */}
      <div className="sidebar-group current-position-group">
        <div className="sidebar-group-title">CURRENT POSITION</div>
        <div className="position-role-title">{profileData.currentRole}</div>
        <div className="position-institution">
          {profileData.currentDepartment}, {profileData.currentInstitution}
        </div>
        <div className="position-period">{profileData.currentPeriod}</div>
      </div>

      {/* 2. Degrees summary badges */}
      <div className="sidebar-group">
        <div className="sidebar-group-header-row">
          <span className="sidebar-group-title">DEGREES</span>
          <span className="sidebar-group-count">{profileData.degreesCount}</span>
        </div>
        <div className="degrees-badge-row">
          <div className="degree-round-badge" title="Master in Computer Science">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="degree-round-badge" title="Bachelor of Science in Computer Engineering">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
        </div>
      </div>

      {/* 3. Index */}
      <div className="sidebar-group">
        <div className="sidebar-group-header-row">
          <span className="sidebar-group-title">INDEX</span>
          <span className="sidebar-group-count">9 SECTIONS</span>
        </div>
        <nav className="sidebar-index-nav">
          {indexItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`index-nav-item ${isActive ? 'is-active' : ''}`}
                onClick={() => handleItemClick(item.id)}
              >
                <div className="index-label-side">
                  {isActive && <span className="active-orange-dot">•</span>}
                  <span className="index-item-name">{item.label}</span>
                </div>
                {item.count !== null && (
                  <span className="index-item-count">{item.count}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* 4. Links */}
      <div className="sidebar-group">
        <div className="sidebar-group-header-row">
          <span className="sidebar-group-title">LINKS</span>
          <span className="sidebar-group-count">{profileData.links.length}</span>
        </div>
        <div className="links-icon-grid">
          {profileData.links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="link-square-btn"
              title={link.label}
              aria-label={link.label}
            >
              {link.icon === 'mail' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              )}
              {link.icon === 'mail-alt' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              )}
              {link.icon === 'phone' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              )}
              {link.icon === 'github' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              )}
              {link.icon === 'facebook' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              )}
              {link.icon === 'linkedin' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              )}
              {link.icon === 'scholar' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              )}
              {link.icon === 'orcid' && (
                <span style={{ fontWeight: '800', fontSize: '13px', letterSpacing: '-0.5px' }}>iD</span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* 5. Interests */}
      <div className="sidebar-group">
        <div className="sidebar-group-header-row">
          <span className="sidebar-group-title">INTERESTS</span>
          <span className="sidebar-group-count">{profileData.interests.length}</span>
        </div>
        <div className="interests-pills-row">
          {profileData.interests.map((interest, i) => (
            <span key={i} className="interest-pill-tag">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
