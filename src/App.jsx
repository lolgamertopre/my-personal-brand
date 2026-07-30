import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('All');

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
        title: "Personal Brand Portfolio",
        description: "My developer portfolio built with React and Vite, hosted continuously on Vercel.",
        techStack: ["React", "JavaScript", "CSS", "HTML", "Git & GitHub"],
        link: "https://github.com/lolgamertopre/my-personal-brand"
      },
      {
        title: "PHP & MySQL Web App",
        description: "A full-stack web application featuring database operations, authentication, and dynamic routing.",
        techStack: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
        link: "https://github.com/lolgamertopre"
      },
      {
        title: "Laravel E-Commerce Platform",
        description: "Modern backend API and web interface built with Laravel, MySQL, and Tailwind CSS.",
        techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
        link: "https://github.com/lolgamertopre"
      },
      {
        title: "Linux Automation Scripts",
        description: "Collection of Python and Bash scripts created to automate Linux workflow and dev environments.",
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

  // Filter logic
  const filteredProjects = activeFilter === 'All'
    ? profile.projects
    : profile.projects.filter(project => project.techStack.includes(activeFilter));

  const handleSkillClick = (skill) => {
    setActiveFilter(skill);
  };

  return (
    <div style={styles.backgroundWrapper}>
      <div style={styles.glowTopLeft}></div>
      <div style={styles.glowBottomRight}></div>

      <div style={styles.container}>
        {/* Header Section */}
        <header style={styles.header}>
          <div style={styles.badge}>Available for Work</div>
          <h1 style={styles.name}>{profile.name}</h1>
          <h2 style={styles.title}>{profile.title}</h2>
          <p style={styles.bio}>{profile.bio}</p>
          
          <div style={styles.socialLinks}>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn-primary">GitHub</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
            <a href={profile.socials.email} className="btn-secondary">Contact Me</a>
          </div>
        </header>

        {/* Interactive Skills Filter Section */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>Skills & Technologies</h3>
            <span style={styles.subtitle}>Click any skill to filter projects</span>
          </div>

          <div style={styles.skillsGrid}>
            <button 
              className={`filter-badge ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => setActiveFilter('All')}
            >
              All Skills
            </button>
            {profile.skills.map((skill, index) => (
              <button 
                key={index} 
                className={`filter-badge ${activeFilter === skill ? 'active' : ''}`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </section>

        {/* Dynamic Projects Section */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>Featured Projects</h3>
            <span style={styles.subtitle}>Showing {filteredProjects.length} project(s)</span>
          </div>

          {/* Active Filter Banner */}
          {activeFilter !== 'All' && (
            <div className="active-filter-banner">
              <span>Filtering by technology: <strong>{activeFilter}</strong></span>
              <div>
                <a 
                  href={`https://github.com/${profile.githubUsername}?tab=repositories&q=${activeFilter}`} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ color: '#38bdf8', marginRight: '1rem', fontSize: '0.85rem' }}
                >
                  Search "{activeFilter}" on GitHub ↗
                </a>
                <button className="clear-btn" onClick={() => setActiveFilter('All')}>Reset Filter</button>
              </div>
            </div>
          )}

          <div style={styles.projectList}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((proj, index) => (
                <div key={index} className="project-card">
                  <h4 style={styles.projectTitle}>{proj.title}</h4>
                  <p style={styles.projectDescription}>{proj.description}</p>
                  
                  {/* Tech Stack Pills */}
                  <div>
                    {proj.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <a href={proj.link} target="_blank" rel="noreferrer" style={styles.projectLink}>
                    View Project on GitHub →
                  </a>
                </div>
              ))
            ) : (
              <div style={styles.emptyState}>
                <p>No specific projects tagged with <strong>"{activeFilter}"</strong> yet.</p>
                <a 
                  href={`https://github.com/${profile.githubUsername}?tab=repositories`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                  style={{ display: 'inline-block', marginTop: '0.5rem' }}
                >
                  Browse Repositories on GitHub
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

// Background layout inline styles
const styles = {
  backgroundWrapper: {
    minHeight: '100vh',
    backgroundColor: '#0a0d14',
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
    backgroundSize: '28px 28px',
    color: '#e2e8f0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    padding: '3rem 1rem'
  },
  glowTopLeft: {
    position: 'absolute', top: '-120px', left: '-120px', width: '400px', height: '400px',
    background: 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none'
  },
  glowBottomRight: {
    position: 'absolute', bottom: '-120px', right: '-120px', width: '450px', height: '450px',
    background: 'radial-gradient(circle, rgba(147,51,234,0.18) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none'
  },
  container: { maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 },
  badge: {
    display: 'inline-block', padding: '0.3rem 0.85rem', borderRadius: '9999px',
    backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', fontSize: '0.85rem',
    fontWeight: '600', border: '1px solid rgba(59, 130, 246, 0.3)', marginBottom: '1.2rem'
  },
  header: { textAlign: 'center', marginBottom: '3.5rem' },
  name: { fontSize: '2.8rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 0.5rem 0' },
  title: { fontSize: '1.25rem', color: '#94a3b8', fontWeight: '400', margin: '0 0 1rem 0' },
  bio: { fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.6', maxWidth: '620px', margin: '0 auto 1.8rem auto' },
  socialLinks: { display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' },
  section: { marginBottom: '3rem' },
  sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem', marginBottom: '1.2rem' },
  sectionTitle: { fontSize: '1.3rem', color: '#f8fafc', fontWeight: '700', margin: 0 },
  subtitle: { fontSize: '0.85rem', color: '#64748b' },
  skillsGrid: { display: 'flex', flexWrap: 'wrap', gap: '0.6rem' },
  projectList: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  projectTitle: { fontSize: '1.2rem', color: '#f1f5f9', margin: '0 0 0.5rem 0', fontWeight: '600' },
  projectDescription: { fontSize: '0.95rem', color: '#94a3b8', margin: '0 0 0.8rem 0', lineHeight: '1.5' },
  projectLink: { color: '#60a5fa', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', display: 'inline-block', marginTop: '0.8rem' },
  emptyState: { textAlign: 'center', padding: '2rem', border: '1px dashed #334155', borderRadius: '10px', color: '#94a3b8' }
};

export default App;