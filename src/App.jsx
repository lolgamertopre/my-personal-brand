import React from 'react';
import './App.css';

function App() {
  const profile = {
    name: "Sherwin Lonzaga Banquil",
    title: "Full-Stack Developer | Tech Enthusiast",
    bio: "Passionate software engineer building web applications with React, Node.js, and Linux.",
    skills: ["React", "JavaScript", "Linux", "Node.js", "Git & GitHub", "Tailwind CSS, Php, MySQL, Bootstrap, Laravel, HTML, CSS, Python, JavaScript} "],
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
      linkedin: "https://www.linkedin.com/in/sherwin-banquil-9126673b8/?trk=public-profile-join-page",
      email: "Kasherwinbanquil@gmail.com"
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.header}>
        <h1 style={styles.name}>{profile.name}</h1>
        <h2 style={styles.title}>{profile.title}</h2>
        <p style={styles.bio}>{profile.bio}</p>
        <div style={styles.socialLinks}>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" style={styles.button}>GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" style={styles.button}>LinkedIn</a>
          <a href={profile.socials.email} style={styles.button}>Contact Me</a>
        </div>
      </header>

      {/* Skills Section */}
      <section style={styles.section}>
        <h3>Skills & Technologies</h3>
        <div style={styles.skillsGrid}>
          {profile.skills.map((skill, index) => (
            <span key={index} style={styles.skillBadge}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h3>Featured Projects</h3>
        <div style={styles.projectList}>
          {profile.projects.map((proj, index) => (
            <div key={index} style={styles.projectCard}>
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noreferrer" style={styles.link}>View Project →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Basic inline styling to get you started quickly
const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif', color: '#333' },
  header: { textAlign: 'center', marginBottom: '3rem' },
  name: { fontSize: '2.5rem', marginBottom: '0.5rem' },
  title: { fontSize: '1.2rem', color: '#666', fontWeight: 'normal' },
  bio: { fontSize: '1rem', color: '#444', margin: '1rem 0 1.5rem 0' },
  socialLinks: { display: 'flex', justifyContent: 'center', gap: '1rem' },
  button: { padding: '0.5rem 1rem', background: '#0070f3', color: '#fff', textDecoration: 'none', borderRadius: '5px' },
  section: { marginBottom: '3rem' },
  skillsGrid: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' },
  skillBadge: { background: '#f0f0f0', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem' },
  projectList: { display: 'grid', gap: '1rem' },
  projectCard: { border: '1px solid #ddd', padding: '1rem', borderRadius: '6px' },
  link: { color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }
};

export default App;