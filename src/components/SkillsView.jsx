import { skillsList, degreesData, certificationsData } from '../data/portfolioData';

// Helper to render customized SVG icons matching the screenshot
function SkillIcon({ type }) {
  switch (type) {
    case 'cpp':
      return <span className="skill-text-icon">C++</span>;
    case 'csharp':
      return <span className="skill-text-icon">C#</span>;
    case 'dotnet':
      return <span className="skill-text-icon">.NET</span>;
    case 'java':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 19h16v2H4v-2zm14-9c1.1 0 2 .9 2 2v1c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4v-1c0-1.1.9-2 2-2h12zm0 2H6v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1zM9 3c1 1 0 3-1 4 2-1 3-3 1-4zm4 0c1 1 0 3-1 4 2-1 3-3 1-4z" />
        </svg>
      );
    case 'python':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8 2 7 3.5 7 5.5V8h6V9H5.5C3.5 9 2 10.5 2 14s1.5 5 4.5 5H8v-2.5C8 14.5 9.5 13 11.5 13H15c1.5 0 2-1 2-2.5V5.5C17 3.5 16 2 12 2zm-2.5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 18c4 0 5-1.5 5-3.5V16h-6v-1h7.5c2 0 3.5-1.5 3.5-5s-1.5-5-4.5-5H16v2.5c0 2-1.5 3.5-3.5 3.5H9c-1.5 0-2 1-2 2.5v5.5C7 20.5 8 22 12 22zm2.5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      );
    case 'r':
      return <span className="skill-text-icon" style={{ fontSize: '18px', fontWeight: '800' }}>R</span>;
    case 'vb':
      return <span className="skill-text-icon">VB</span>;
    case 'azure':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.05 4.24l-4.5 7.82L3 17.52h5.54l3.51-6.12 4.14 6.12H21l-7.95-13.28z" />
        </svg>
      );
    case 'aws':
      return <span className="skill-text-icon" style={{ fontSize: '14px', fontWeight: '900', color: '#fff' }}>aws</span>;
    case 'analytics':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case 'excel':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="21" />
        </svg>
      );
    case 'sql':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'dbms':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="4" rx="8" ry="2.5" />
          <path d="M4 4v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V4" />
          <path d="M4 10v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6" />
        </svg>
      );
    case 'os':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="15" rx="2" />
          <polyline points="6 9 10 12 6 15" />
          <line x1="12" y1="15" x2="18" y2="15" />
        </svg>
      );
    case 'autocad':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h4.5l2.2-4.5h6.6l2.2 4.5H22L12 2zm0 6l2.2 5.5H9.8L12 8z" />
        </svg>
      );
    case 'electronics':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'ml':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
        </svg>
      );
    case 'embedded':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <line x1="9" y1="1" x2="9" y2="6" /><line x1="15" y1="1" x2="15" y2="6" />
          <line x1="9" y1="18" x2="9" y2="23" /><line x1="15" y1="18" x2="15" y2="23" />
          <line x1="1" y1="9" x2="6" y2="9" /><line x1="1" y1="15" x2="6" y2="15" />
          <line x1="18" y1="9" x2="23" y2="9" /><line x1="18" y1="15" x2="23" y2="15" />
        </svg>
      );
    case 'digital':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="M15 9h2v6h-4" />
        </svg>
      );
    case 'networking':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <path d="M12 8v5M5 16v-3h14v3" />
        </svg>
      );
    case 'math':
      return <span className="skill-text-icon" style={{ fontSize: '18px', fontWeight: '900', color: '#fff' }}>√x</span>;
    case 'curriculum':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
          <polyline points="17 21 17 13 7 13 7 21" />
          <polyline points="7 3 7 8 15 8" />
        </svg>
      );
    case 'research':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 18h8M10 22h4" />
          <path d="M14 2H8a2 2 0 0 0-2 2v6a5 5 0 0 0 4 4.9V18h4v-3.1A5 5 0 0 0 18 10V4a2 2 0 0 0-2-2z" />
        </svg>
      );
    case 'circuit':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <line x1="12" y1="1" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="1" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="23" y2="12" />
        </svg>
      );
    case 'ai':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <line x1="12" y1="7" x2="12" y2="11" />
          <line x1="7" y1="15" x2="7.01" y2="15" strokeWidth="3" />
          <line x1="17" y1="15" x2="17.01" y2="15" strokeWidth="3" />
        </svg>
      );
    case 'agentic':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" />
        </svg>
      );
    case 'cv':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" fill="#fff" />
        </svg>
      );
    case 'opencv':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case 'azure-ml':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
        </svg>
      );
    case 'azure-df':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="6" height="6" rx="1" />
          <rect x="16" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M5 9v3a2 2 0 0 0 2 2h2m6 0h2a2 2 0 0 0 2-2V9" />
        </svg>
      );
    case 'powerbi':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="14" width="4" height="7" rx="1" />
          <rect x="10" y="9" width="4" height="12" rx="1" />
          <rect x="16" y="4" width="4" height="17" rx="1" />
        </svg>
      );
    case 'iot':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.93 4.93a10 10 0 0 1 14.14 0" />
          <path d="M7.76 7.76a6 6 0 0 1 8.48 0" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'lms-auto':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'ai-dev':
      return <span className="skill-text-icon" style={{ fontSize: '15px', fontWeight: 'bold' }}>&lt;/&gt;</span>;
    case 'tech-writing':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        </svg>
      );
    case 'ms365':
      return <span className="skill-text-icon" style={{ fontSize: '13px', fontWeight: '800' }}>365</span>;
    case 'pc-build':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <circle cx="12" cy="17" r="1.5" />
        </svg>
      );
    default:
      return <span className="skill-text-icon">⚙</span>;
  }
}

export default function SkillsView() {
  return (
    <div className="skills-view-container">
      {/* Center Column: Skills Grid */}
      <section id="skills" className="skills-main-column">
        <div className="skills-matrix-grid">
          {skillsList.map((skill) => (
            <div
              key={skill.id}
              className={`skill-tile-card ${skill.isHighlight ? 'is-orange-highlight' : ''}`}
            >
              <div className="skill-icon-box">
                <SkillIcon type={skill.icon} />
              </div>
              <span className="skill-name-label">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Right Column: Degrees & Certifications Cards */}
      <aside className="skills-right-column">
        {/* Degrees Card */}
        <div id="degrees" className="right-panel-card degrees-card">
          <div className="card-top-header">
            <h2 className="card-section-title">DEGREES</h2>
            <span className="card-meta-count">2</span>
          </div>

          <div className="degrees-list">
            {degreesData.map((d) => (
              <div key={d.id} className="degree-item-row">
                <div className="degree-round-seal-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="degree-details">
                  <h3 className="degree-title">{d.degree}</h3>
                  <div className="degree-institution">{d.institution}</div>
                  <div className="degree-thesis">
                    {d.status} • Thesis: {d.thesis}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <div id="certifications" className="right-panel-card certs-card">
          <div className="card-top-header">
            <h2 className="card-section-title">CERTIFICATIONS</h2>
            <span className="card-meta-count">{certificationsData.length} certificates</span>
          </div>

          <div className="certs-list">
            {certificationsData.map((cert) => (
              <div key={cert.id} className="cert-item-row">
                <div className="cert-round-seal">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div className="cert-details">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <div className="cert-meta">{cert.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
