import React, { useState } from 'react';

export default function MainContent({
  searchQuery,
  setSearchQuery,
  activeFilter,
  setActiveFilter,
  setSelectedProject,
  projects,
  skills,
  experience,
  certifications,
  recommendations,
  courses,
  faqs
}) {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.techStack.includes(activeFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactData.name && contactData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setContactData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <main className="main-content-column">
      {/* 01 // ABOUT */}
      <section id="about" className="section-card">
        <div className="section-header-tag">
          <span>01 // ABOUT •</span>
          <span className="location-tag">Cebu City, PH</span>
        </div>

        <h1 className="section-headline">
          Building practical, user-centered web applications & seeking an internship.
        </h1>

        <p className="bio-paragraph">
          I'm <strong>Sherwin Banquil</strong> — an aspiring Web Developer looking for an internship opportunity where I can apply my web development skills, learn from an experienced engineering team, and build real-world software.
        </p>

        <p className="bio-paragraph">
          I focus on turning problem statements into clean, maintainable, and responsive web applications. My core stack includes React, JavaScript, HTML, CSS, PHP, MySQL, and Linux tools.
        </p>

        <div className="status-callout">
          <span>✦</span> Open for Web Developer Internship and Entry-Level positions.
        </div>

        <div className="links-row">
          <a href="https://github.com/lolgamertopre" target="_blank" rel="noreferrer" className="link-item">
            github ↗
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="link-item">
            linkedin ↗
          </a>
          <a href="mailto: [EMAIL_ADDRESS]" className="link-item">
            email ↗
          </a>
        </div>

        {/* Horizontal Quick Stats Grid */}
        <div className="stats-summary-grid" style={{ marginTop: '1.75rem' }}>
          <div className="stat-summary-card">
            <div className="stat-header">
              <span className="stat-icon">💻</span>
              <span className="stat-category">WEB DEV LEARNER</span>
            </div>
            <div className="stat-number-value">Aspiring Dev</div>
            <div className="stat-desc-label">Building web apps & learning modern tools</div>
          </div>

          <div className="stat-summary-card">
            <div className="stat-header">
              <span className="stat-icon">🚀</span>
              <span className="stat-category">SHIPPED & BUILT</span>
            </div>
            <div className="stat-number-value">4+ Projects</div>
            <div className="stat-desc-label">Portfolio, capstone & client apps</div>
          </div>

          <div className="stat-summary-card">
            <div className="stat-header">
              <span className="stat-icon">⚡</span>
              <span className="stat-category">ACTIVE STACK</span>
            </div>
            <div className="stat-number-value">10+ Tech</div>
            <div className="stat-desc-label">React, JavaScript, PHP, MySQL, Linux</div>
          </div>

          <div className="stat-summary-card">
            <div className="stat-header">
              <span className="stat-icon">📜</span>
              <span className="stat-category">CAREER GOAL</span>
            </div>
            <div className="stat-number-value">Internship</div>
            <div className="stat-desc-label">Seeking Web Dev Intern Positions</div>
          </div>
        </div>
      </section>

      {/* 02 // EXPERIENCE */}
      <section id="experience" className="section-card">
        <div className="section-header-tag">
          <span>02 // EXPERIENCE</span>
          <span className="location-tag">Career & Milestones</span>
        </div>

        <div className="timeline-list">
          {experience.map((item) => (
            <div key={item.id} className="timeline-card">
              <div className="timeline-badge-row">
                <span className="year-tag">{item.period}</span>
                <span className="type-tag">{item.category}</span>
              </div>
              <h3 className="role-title">{item.role}</h3>
              <div className="company-name">{item.organization}</div>
              <p className="role-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 // PROJECTS */}
      <section id="projects" className="section-card">
        <div className="section-header-tag">
          <span>03 // PROJECTS</span>
          <span className="location-tag">Showing {filteredProjects.length} result(s)</span>
        </div>

        <div className="projects-header-controls">
          <div className="search-bar-wrapper">
            <span className="search-icon-inside">🔍</span>
            <input
              type="text"
              placeholder="Search projects by title, description or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar-input"
            />
          </div>

          <div className="filter-pills-row">
            <button
              className={`filter-pill-btn ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => setActiveFilter('All')}
            >
              All Tech Stack
            </button>
            {skills.map((skill, idx) => (
              <button
                key={idx}
                className={`filter-pill-btn ${activeFilter === skill ? 'active' : ''}`}
                onClick={() => setActiveFilter(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-cards-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <div key={proj.id} className="project-item-card">
                <div>
                  <h4 className="project-card-title">{proj.title}</h4>
                  <p className="project-card-desc">{proj.shortDesc}</p>
                  <div className="tech-tags-list">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag-chip">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card-actions">
                  <button onClick={() => setSelectedProject(proj)} className="btn-card-action">
                    Quick View
                  </button>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="btn-card-action">
                    GitHub ↗
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
              No projects match your current search/filter combination.
            </div>
          )}
        </div>
      </section>

      {/* 04 // STACK */}
      <section id="stack" className="section-card">
        <div className="section-header-tag">
          <span>04 // STACK</span>
          <span className="location-tag">Tools & Frameworks</span>
        </div>

        <div className="stack-category-grid">
          <div className="stack-category-box">
            <div className="stack-cat-title"><span>🎨</span> Frontend</div>
            <div className="stack-pills-wrap">
              {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite'].map((item, i) => (
                <span key={i} className="skill-pill-item">{item}</span>
              ))}
            </div>
          </div>

          <div className="stack-category-box">
            <div className="stack-cat-title"><span>⚙️</span> Backend</div>
            <div className="stack-pills-wrap">
              {['Node.js', 'Laravel', 'PHP', 'Python', 'Java Spring Boot', 'REST APIs', 'MySQL'].map((item, i) => (
                <span key={i} className="skill-pill-item">{item}</span>
              ))}
            </div>
          </div>

          <div className="stack-category-box">
            <div className="stack-cat-title"><span>☁️</span> Cloud & DevOps</div>
            <div className="stack-pills-wrap">
              {['AWS', 'Linux (Ubuntu/Debian)', 'Git & GitHub', 'Vercel', 'CI/CD', 'Docker', 'Bash'].map((item, i) => (
                <span key={i} className="skill-pill-item">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 // CERTIFICATIONS */}
      <section id="certifications" className="section-card">
        <div className="section-header-tag">
          <span>05 // CERTIFICATIONS</span>
          <span className="location-tag">In Progress</span>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Currently pursuing web development and programming certifications.
        </p>
      </section>

      {/* 06 // BOOK OF ANSWERS */}
      <section id="answers" className="section-card">
        <div className="section-header-tag">
          <span>06 // BOOK OF ANSWERS</span>
          <span className="location-tag">Frequently Asked Questions</span>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question-btn"
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              >
                <span>{faq.question}</span>
                <span>{expandedFaq === i ? '−' : '+'}</span>
              </button>
              {expandedFaq === i && (
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 07 // CONTACT */}
      <section id="contact" className="section-card">
        <div className="section-header-tag">
          <span>07 // CONTACT</span>
          <span className="location-tag">Get In Touch</span>
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>
          Let's discuss your next project or role opportunity
        </h3>

        {formSubmitted ? (
          <div style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', padding: '1rem', borderRadius: '10px', color: 'var(--accent-cyan)' }}>
            ✓ Message sent successfully! I will get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="contact-form-grid">
            <div className="form-group">
              <label className="form-label">YOUR NAME</label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Mercer"
                value={contactData.name}
                onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">EMAIL ADDRESS</label>
              <input
                type="email"
                required
                placeholder="e.g. alex@company.com"
                value={contactData.email}
                onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label">MESSAGE</label>
              <textarea
                required
                placeholder="Tell me about your project details or job opening..."
                value={contactData.message}
                onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                className="form-textarea"
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <button type="submit" className="btn-submit-contact">
                Send Message 🚀
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
