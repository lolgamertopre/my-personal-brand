import React from 'react';

const navItems = [
  { id: 'about', label: '01 - about' },
  { id: 'experience', label: '02 - experience' },
  { id: 'projects', label: '03 - projects' },
  { id: 'stack', label: '04 - stack' },
  { id: 'certifications', label: '05 - certifications' },
  { id: 'recommendations', label: '06 - recommendations' },
  { id: 'courses', label: '07 - courses' },
  { id: 'answers', label: '08 - book of answers' },
  { id: 'contact', label: '09 - contact' }
];

export default function Sidebar({
  activeSection,
  setActiveSection,
  onOpenAiDrawer,
  onOpenScheduleModal,
  theme,
  toggleTheme
}) {
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="sidebar-sticky">
      {/* Top Profile Section */}
      <div className="sidebar-profile">
        <div className="avatar-wrapper">
          <img
            src="/avatar.png"
            alt="Sherwin Lonzaga Banquil"
            className="avatar-img"
            onError={(e) => {
              // Fallback avatar SVG if image fail
              e.target.src = "https://ui-avatars.com/api/?name=Sherwin+Banquil&background=0284c7&color=fff";
            }}
          />
          <div className="verified-badge" title="Verified Developer">✔</div>
        </div>

        <div>
          <h2 className="profile-name">
            Sherwin Ruales
            <span style={{ color: '#38bdf8', fontSize: '0.85rem' }}>✔</span>
          </h2>
          <div className="profile-location">
            <span>📍</span> Cebu City, Philippines
          </div>
        </div>

        <p className="profile-bio">
          Software Engineer & Full-Stack Developer specializing in web apps, cloud architectures, & AI integrations.
        </p>

        {/* AI Assistant Drawer Trigger */}
        <button className="btn-ai-trigger" onClick={onOpenAiDrawer}>
          <span>🤖 Ask AI Assistant</span>
          <span className="kbd-shortcut">Alt + K</span>
        </button>
      </div>

      {/* Navigation List */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            <span>{item.label}</span>
            {activeSection === item.id && <span className="nav-dot" />}
          </button>
        ))}
      </nav>

      {/* Bottom CTA & Footer Buttons */}
      <div className="sidebar-bottom">
        <button className="btn-schedule" onClick={onOpenScheduleModal}>
          📅 Schedule a Call
        </button>

        <div className="btn-row">
          <a href="mailto:your.email@example.com" className="btn-pill-dark">
            ✉ Email
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="btn-pill-dark">
            📄 Resume
          </a>
        </div>

        <div className="sidebar-footer-links">
          <div className="social-icons-group">
            <a
              href="https://github.com/lolgamertopre"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              💻
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              🔗
            </a>
          </div>

          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </aside>
  );
}
