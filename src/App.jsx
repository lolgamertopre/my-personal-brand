import React from 'react';

function App() {
  const profile = {
    name: "Sherwin Lonzaga Banquil",
    title: "Full-Stack Developer | Tech Enthusiast",
    bio: "Passionate software engineer building modern web applications with React, Node.js, PHP, and Linux.",
    skills: [
      "React", "JavaScript", "Linux", "Node.js", "Git & GitHub", 
      "Tailwind CSS", "PHP", "MySQL", "Bootstrap", "Laravel", "HTML", "CSS", "Python"
    ],
    projects: [
      {
        title: "Personal Brand Portfolio",
        description: "My developer portfolio built with React and Vite, hosted continuously on Vercel.",
        link: "https://github.com/lolgamertopre/my-personal-brand"
      },
      {
        title: "Project Two",
        description: "A brief description of another awesome project or tool you built.",
        link: "#"
      }
    ],
    socials: {
      github: "https://github.com/lolgamertopre",
      linkedin: "https://linkedin.com/in/your-profile",
      email: "mailto:your.email@example.com"
    }
  };

  return (
    <div style={styles.backgroundWrapper}>
      {/* Visual Ambient Glows */}
      <div style={styles.glowTopLeft}></div>
      <div style={styles.glowBottomRight}></div>

      <div style={styles.container}>
        {/* Hero Header */}
        <header style={styles.header}>
          <div style={styles.badge}>Available for Work</div>
          <h1 style={styles.name}>{profile.name}</h1>
          <h2 style={styles.title}>{profile.title}</h2>
          <p style={styles.bio}>{profile.bio}</p>
          
          <div style={styles.socialLinks}>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" style={styles.primaryButton}>GitHub</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" style={styles.secondaryButton}>LinkedIn</a>
            <a href={profile.socials.email} style={styles.secondaryButton}>Contact Me</a>
          </div>
        </header>

        {/* Skills Section */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Skills & Technologies</h3>
          <div style={styles.skillsGrid}>
            {profile.skills.map((skill, index) => (
              <span key={index} style={styles.skillBadge}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Featured Projects</h3>
          <div style={styles.projectList}>
            {profile.projects.map((proj, index) => (
              <div key={index} style={styles.projectCard}>
                <h4 style={styles.projectTitle}>{proj.title}</h4>
                <p style={styles.projectDescription}>{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noreferrer" style={styles.projectLink}>View Project →</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Formal Modern Tech Styling
const styles = {
  backgroundWrapper: {
    minHeight: '100vh',
    backgroundColor: '#0a0d14',
    // Subtle technical grid pattern background
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)`,
    backgroundSize: '24px 24px',
    color: '#e2e8f0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    padding: '3rem 1rem'
  },
  glowTopLeft: {
    position: 'absolute',
    top: '-100px',
    left: '-100px',
    width: '350px',
    height: '350px',
    background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none'
  },
  glowBottomRight: {
    position: 'absolute',
    bottom: '-100px',
    right: '-100px',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none'
  },
  container: {
    maxWidth: '750px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    color: '#60a5fa',
    fontSize: '0.85rem',
    fontWeight: '600',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    marginBottom: '1rem'
  },
  header: { textAlign: 'center', marginBottom: '3.5rem' },
  name: { fontSize: '2.8rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 0.5rem 0' },
  title: { fontSize: '1.25rem', color: '#94a3b8', fontWeight: '400', margin: '0 0 1rem 0' },
  bio: { fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 1.8rem auto' },
  socialLinks: { display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' },
  primaryButton: {
    padding: '0.6rem 1.25rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '0.95rem'
  },
  secondaryButton: {
    padding: '0.6rem 1.25rem',
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '0.95rem',
    border: '1px solid #334155'
  },
  section: { marginBottom: '3rem' },
  sectionTitle: { fontSize: '1.3rem', color: '#f8fafc', marginBottom: '1.2rem', fontWeight: '700', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem' },
  skillsGrid: { display: 'flex', flexWrap: 'wrap', gap: '0.6rem' },
  skillBadge: {
    backgroundColor: '#1e293b',
    color: '#38bdf8',
    padding: '0.4rem 0.85rem',
    borderRadius: '6px',
    fontSize: '0.88rem',
    fontWeight: '500',
    border: '1px solid #334155'
  },
  projectList: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  projectCard: {
    backgroundColor: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid #1e293b',
    padding: '1.5rem',
    borderRadius: '10px',
    backdropFilter: 'blur(8px)'
  },
  projectTitle: { fontSize: '1.2rem', color: '#f1f5f9', margin: '0 0 0.5rem 0', fontWeight: '600' },
  projectDescription: { fontSize: '0.95rem', color: '#94a3b8', margin: '0 0 1rem 0', lineHeight: '1.5' },
  projectLink: { color: '#60a5fa', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }
};

export default App;