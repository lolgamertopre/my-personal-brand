import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const profile = {
    name: "Sherwin Lonzaga Banquil",
    title: "Full-Stack Developer | Tech Enthusiast",
    bio: "Passionate software engineer building modern web applications with React, Node.js, PHP, and Linux.",
    githubUsername: "lolgamertopre",
    skills: [
      "React", "JavaScript", "Linux", "Node.js", "Git & GitHub", 
      "Tailwind CSS", "PHP", "MySQL", "Bootstrap", "Laravel", "HTML", "CSS", "Python"
    ],
    projects: [
      {
        id: 1,
        title: "Personal Brand Portfolio",
        shortDesc: "My interactive developer portfolio built with React and Vite.",
        fullDesc: "A high-performance personal portfolio featuring dynamic state filtering, responsive grid layouts, custom CSS animations, and Vercel continuous deployment.",
        techStack: ["React", "JavaScript", "CSS", "HTML", "Git & GitHub"],
        link: "https://github.com/lolgamertopre/my-personal-brand"
      },
      {
        id: 2,
        title: "PHP & MySQL Web App",
        shortDesc: "Full-stack web app with database operations & authentication.",
        fullDesc: "Complete web application with dynamic backend routing, relational database schemas, secure login system, and responsive Bootstrap components.",
        techStack: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
        link: "https://github.com/lolgamertopre"
      },
      {
        id: 3,
        title: "Laravel E-Commerce Platform",
        shortDesc: "Modern backend API and dynamic store interface.",
        fullDesc: "E-Commerce engine built with Laravel MVC architecture, relational database models, payment integration hooks, and Tailwind CSS UI styling.",
        techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
        link: "https://github.com/lolgamertopre"
      },
      {
        id: 4,
        title: "Linux Automation Scripts",
        shortDesc: "Bash and Python automation utilities for Linux environments.",
        fullDesc: "Collection of Linux terminal scripts created to automate project environments, manage package installations, and optimize workstation setup.",
        techStack: ["Linux", "Python"],
        link: "https://github.com/lolgamertopre"
      }
    ],
    socials: {
      github: "https://github.com/lolgamertopre",
      linkedin: "https://linkedin.com/in/your-profile",
      email: "mailto:your.email@example.com"
    }
  };

  // Combined Search and Tech Filter
  const filteredProjects = profile.projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.techStack.includes(activeFilter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={styles.backgroundWrapper}>
      {/* Dynamic Ambient Background Glows */}
      <div style={styles.glowTopLeft}></div>
      <div style={styles.glowBottomRight}></div>

      {/* Full-Width Outer Container */}
      <div style={styles.fullWidthContainer}>

        {/* Top Header Banner */}
        <header style={styles.header}>
          <div style={styles.badge}>Available for Work</div>
          <h1 style={styles.name}>{profile.name}</h1>
          <h2 style={styles.title}>{profile.title}</h2>
          <p style={styles.bio}>{profile.bio}</p>
          
          <div style={styles.socialLinks}>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn-primary">GitHub Profile ↗</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn ↗</a>
            <a href={profile.socials.email} className="btn-secondary">Contact Me</a>
          </div>
        </header>

        {/* Interactive Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3 style={styles.statNumber}>{profile.skills.length}+</h3>
            <p style={styles.statLabel}>Technologies & Tools</p>
          </div>
          <div className="stat-card">
            <h3 style={styles.statNumber}>{profile.projects.length}</h3>
            <p style={styles.statLabel}>Featured Projects</p>
          </div>
          <div className="stat-card">
            <h3 style={styles.statNumber}>100%</h3>
            <p style={styles.statLabel}>Open Source Code</p>
          </div>
        </div>

        {/* Main Content Layout: Search & Filter Top Bar */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 300px' }}>
              <input 
                type="text" 
                placeholder="🔍 Search projects by name or skill (e.g., React, PHP)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Interactive Skills Filter Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <button 
              className={`filter-badge ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => setActiveFilter('All')}
            >
              All Tech Stack
            </button>
            {profile.skills.map((skill, index) => (
              <button 
                key={index} 
                className={`filter-badge ${activeFilter === skill ? 'active' : ''}`}
                onClick={() => setActiveFilter(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Section - Multi-Column Responsive Grid */}
        <section>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>Featured Projects Grid</h3>
            <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Showing {filteredProjects.length} matching result(s)</span>
          </div>

          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((proj) => (
                <div key={proj.id} className="project-card">
                  <div>
                    <h4 style={styles.projectTitle}>{proj.title}</h4>
                    <p style={styles.projectDescription}>{proj.shortDesc}</p>
                    <div style={{ marginBottom: '1rem' }}>
                      {proj.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                    <button 
                      onClick={() => setSelectedProject(proj)} 
                      className="btn-secondary"
                      style={{ flex: 1, textAlign: 'center', padding: '0.5rem' }}
                    >
                      Quick View
                    </button>
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-primary"
                      style={{ flex: 1, textAlign: 'center', padding: '0.5rem' }}
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', border: '1px dashed #334155', borderRadius: '12px' }}>
                <p style={{ color: '#94a3b8' }}>No projects match your current search/filter combination.</p>
                <button 
                  onClick={() => { setActiveFilter('All'); setSearchQuery(''); }} 
                  className="btn-primary"
                  style={{ marginTop: '0.5rem' }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Project Quick View Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <h3 style={{ fontSize: '1.6rem', color: '#f8fafc', marginTop: 0 }}>{selectedProject.title}</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontSize: '1.05rem' }}>{selectedProject.fullDesc}</p>
            
            <h4 style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>Technologies Used:</h4>
            <div style={{ marginBottom: '1.5rem' }}>
              {selectedProject.techStack.map((tech, idx) => (
                <span key={idx} className="tech-tag" style={{ fontSize: '0.9rem', padding: '0.3rem 0.8rem' }}>{tech}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={selectedProject.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1, textAlign: 'center' }}>
                Open Repository on GitHub
              </a>
              <button onClick={() => setSelectedProject(null)} className="btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Background and Full-Width Layout Inline Styles
const styles = {
  backgroundWrapper: {
    minHeight: '100vh',
    backgroundColor: '#07090e',
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
    backgroundSize: '32px 32px',
    color: '#e2e8f0',
    position: 'relative',
    padding: '3rem 2rem'
  },
  glowTopLeft: {
    position: 'absolute', top: '-150px', left: '-150px', width: '500px', height: '500px',
    background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none'
  },
  glowBottomRight: {
    position: 'absolute', bottom: '-150px', right: '-150px', width: '500px', height: '500px',
    background: 'radial-gradient(circle, rgba(147,51,234,0.18) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none'
  },
  fullWidthContainer: {
    maxWidth: '1350px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
  },
  badge: {
    display: 'inline-block', padding: '0.35rem 0.95rem', borderRadius: '9999px',
    backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', fontSize: '0.85rem',
    fontWeight: '600', border: '1px solid rgba(59, 130, 246, 0.3)', marginBottom: '1.2rem'
  },
  header: { textAlign: 'center', marginBottom: '3rem' },
  name: { fontSize: '3.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 0.5rem 0' },
  title: { fontSize: '1.35rem', color: '#94a3b8', fontWeight: '400', margin: '0 0 1rem 0' },
  bio: { fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 2rem auto' },
  socialLinks: { display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' },
  statNumber: { fontSize: '2rem', color: '#38bdf8', margin: '0 0 0.25rem 0', fontWeight: '800' },
  statLabel: { color: '#94a3b8', margin: 0, fontSize: '0.9rem' },
  sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #1e293b', paddingBottom: '0.75rem', marginBottom: '1.5rem' },
  sectionTitle: { fontSize: '1.4rem', color: '#f8fafc', fontWeight: '700', margin: 0 },
  projectTitle: { fontSize: '1.25rem', color: '#f1f5f9', margin: '0 0 0.5rem 0', fontWeight: '600' },
  projectDescription: { fontSize: '0.95rem', color: '#94a3b8', margin: '0 0 1rem 0', lineHeight: '1.5' }
};

export default App;