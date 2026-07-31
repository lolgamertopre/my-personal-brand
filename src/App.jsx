import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';
import AiDrawer from './components/AiDrawer';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Toggle Dark / Light mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Keyboard shortcut: Alt + K to toggle AI Assistant Drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsAiDrawerOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Profile data
  const profile = {
    skills: [
      "HTML", "CSS", "JavaScript", "React", "C", "Java", "PHP", "Bootstrap", "MySQL", "Linux"
    ],
    projects: [
      {
        id: 1,
        title: "Personal Brand Workstation",
        shortDesc: "Developer workstation portfolio featuring interactive CLI, AI drawer, and dark mode grid.",
        fullDesc: "A personal portfolio built with React, Vite, and custom CSS featuring a 3-column developer dashboard, terminal simulator, and dark mode styling.",
        techStack: ["JavaScript", "React", "HTML", "CSS"],
        link: "https://github.com/lolgamertopre/my-personal-brand"
      },
      {
        id: 2,
        title: "SubSentry Subscription Auditor",
        shortDesc: "Web application for managing and auditing subscriptions.",
        fullDesc: "An educational web application for tracking and auditing active subscription services using Bootstrap and CSS styling.",
        techStack: ["CSS", "HTML", "Bootstrap"],
        link: "https://github.com/lolgamertopre/SPEC-SubSentry-Subscription-Auditor-PROF-SIR-MACTO"
      },
      {
        id: 3,
        title: "Sir Eric Magto Final Project",
        shortDesc: "Final C programming project developed for summer coursework.",
        fullDesc: "A complete C language application implementing core data structures and logic for summer class coursework.",
        techStack: ["C"],
        link: "https://github.com/lolgamertopre/Sir-Eric-Magto-Final-Project"
      },
      {
        id: 4,
        title: "Dr. Santos Student Registry",
        shortDesc: "Student registry management system written in C language.",
        fullDesc: "A CLI student registry application built in C language featuring record management and search functions.",
        techStack: ["C"],
        link: "https://github.com/lolgamertopre/Challenge-1-Dr.-Santos-Student-Registry-Sherwin-PROJECT"
      },
      {
        id: 5,
        title: "SPEC Jack 'N Poy Game",
        shortDesc: "Interactive Jack 'N Poy rock-paper-scissors web game.",
        fullDesc: "A fun interactive Jack 'N Poy game implemented with JavaScript event listeners and dynamic DOM manipulation.",
        techStack: ["JavaScript", "HTML", "CSS"],
        link: "https://github.com/lolgamertopre/SPEC-JACK-N-POY-for-Macto"
      },
      {
        id: 6,
        title: "Java Hangman Game",
        shortDesc: "Interactive command-line Hangman word guessing game in Java.",
        fullDesc: "Java-based console game practicing Java Collections, ArrayLists, string manipulation, and game loop logic.",
        techStack: ["Java"],
        link: "https://github.com/lolgamertopre/Hangman-Game"
      },
      {
        id: 7,
        title: "Summer Class Grade Calculator",
        shortDesc: "Grade calculation program created in C language.",
        fullDesc: "A utility program developed in C language to calculate student grades and averages accurately.",
        techStack: ["C"],
        link: "https://github.com/lolgamertopre/Summer-Class-Banquil-Grade-Calculator."
      },
      {
        id: 8,
        title: "Spec 2 Bootstrap Project",
        shortDesc: "Web layout output built with Bootstrap framework and custom CSS.",
        fullDesc: "A responsive website layout showcasing Bootstrap grid layout, component styling, and CSS customization.",
        techStack: ["HTML", "CSS", "Bootstrap"],
        link: "https://github.com/lolgamertopre/my-output-for-spec-2-zzzzz"
      },
      {
        id: 9,
        title: "Java OOP Practice & Exercises",
        shortDesc: "Object-Oriented Programming exercises and Java collection practice.",
        fullDesc: "A collection of Java OOP programs practicing classes, inheritance, encapsulation, and collection frameworks.",
        techStack: ["Java"],
        link: "https://github.com/lolgamertopre/Session-4-Java-Object-Oriented-Programming-with-Quentin-CILLIERRE-Dimitri-LAFITTE-June-15-2026"
      },
      {
        id: 10,
        title: "C Programming Practice & Loops",
        shortDesc: "Practice repository for C language loops, conditions, and logic.",
        fullDesc: "A collection of C programming scripts practicing fundamental loops, array manipulations, and problem-solving techniques.",
        techStack: ["C"],
        link: "https://github.com/lolgamertopre/PROG-PRAC"
      },
      {
        id: 11,
        title: "WorldTrigger",
        shortDesc: "Java programming project.",
        fullDesc: "Java project created to practice software development techniques and OOP principles.",
        techStack: ["Java"],
        link: "https://github.com/lolgamertopre/WorldTrigger-"
      },
      {
        id: 12,
        title: "2nd Semester Web Project",
        shortDesc: "Semester web project exploring HTML, CSS, and basic JavaScript loops.",
        fullDesc: "A semester project demonstrating foundational HTML page structure, styling, and introductory JavaScript logic.",
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/lolgamertopre/my-2nd-semester-project-sheesh"
      }
    ],
    experience: [
      {
        id: 1,
        period: "2026",
        category: "PROGRAM",
        role: "Synchrony YES Participant",
        organization: "Synchrony",
        description: "Participated in the Youth Employment & Skills (YES) program. Developed technical skills, collaborated on software projects, and enhanced professional readiness."
      },
      {
        id: 2,
        period: "2026",
        category: "EDUCATION",
        role: "Associate Degree in Computer Technology",
        organization: "University of San Jose - Recoletos",
        description: "Specialized in software development, data structures, algorithm optimization, and relational database systems."
      }
    ],
    certifications: [
      { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", year: "2025" },
      { title: "Full-Stack Web Development", issuer: "Meta / Coursera", year: "2025" },
      { title: "Linux System Administration", issuer: "Linux Foundation", year: "2024" },
      { title: "Cybersecurity Basics & Defenses", issuer: "IBM Security", year: "2024" }
    ],
    recommendations: [
      {
        quote: "Sherwin is a brilliant developer who combines strong technical expertise in PHP and React with excellent problem-solving skills. Highly recommended!",
        author: "Tech Lead Supervisor",
        role: "Kyocera Document Solutions"
      },
      {
        quote: "Delivered high quality code ahead of schedule. Great communicator and very knowledgeable in cloud and full-stack development.",
        author: "Project Manager",
        role: "Client Collaboration"
      }
    ],
    courses: [
      { name: "Modern React with Redux & Hooks", platform: "Udemy" },
      { name: "Laravel 10 Deep Dive", platform: "Laracasts" },
      { name: "Spring Boot 3 Masterclass", platform: "Java Brains" },
      { name: "Advanced Linux Shell Scripting", platform: "Linux Academy" }
    ],
    faqs: [
      {
        question: "What positions are you currently open to?",
        answer: "I am actively seeking Web Developer Internship and Junior Web Developer positions where I can gain hands-on experience, learn from team mentors, and contribute to web projects."
      },
      {
        question: "What is your primary programming stack?",
        answer: "My primary focus is on React, JavaScript, HTML5, CSS3, PHP, and MySQL database management."
      },
      {
        question: "Where are you located?",
        answer: "I am based in Cebu City, Philippines (PHT / GMT+8) and open for local or remote internship roles."
      }
    ]
  };

  return (
    <div className="workstation-container">
      {/* Left Column: Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenAiDrawer={() => setIsAiDrawerOpen(true)}
        onOpenScheduleModal={() => setIsScheduleModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Center Column: Main Content */}
      <MainContent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        setSelectedProject={setSelectedProject}
        projects={profile.projects}
        skills={profile.skills}
        experience={profile.experience}
        certifications={profile.certifications}
        recommendations={profile.recommendations}
        courses={profile.courses}
        faqs={profile.faqs}
      />

      {/* Right Column: Status & Interactive Terminal */}
      <RightPanel />

      {/* AI Assistant Drawer */}
      <AiDrawer
        isOpen={isAiDrawerOpen}
        onClose={() => setIsAiDrawerOpen(false)}
      />

      {/* Project Quick View Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>×</button>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              {selectedProject.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              {selectedProject.fullDesc}
            </p>

            <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
              TECHNOLOGIES USED:
            </h4>
            <div className="tech-tags-list" style={{ marginBottom: '1.5rem' }}>
              {selectedProject.techStack.map((tech, idx) => (
                <span key={idx} className="tech-tag-chip">{tech}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="btn-submit-contact"
                style={{ flex: 1, textAlign: 'center', margin: 0, textDecoration: 'none' }}
              >
                View Repository on GitHub ↗
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-pill-dark"
                style={{ padding: '0.75rem 1.25rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Call Modal */}
      {isScheduleModalOpen && (
        <div className="modal-overlay" onClick={() => setIsScheduleModalOpen(false)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsScheduleModalOpen(false)}>×</button>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              📅 Schedule a Meeting with Sherwin
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Select a suitable topic and send a meeting request directly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <button
                className="filter-pill-btn"
                style={{ textAlign: 'left', padding: '0.75rem 1rem', fontSize: '0.88rem' }}
                onClick={() => {
                  window.location.href = "mailto:kasherwinbanquil@gmail.com?subject=Web%20Developer%20Internship%20Inquiry";
                  setIsScheduleModalOpen(false);
                }}
              >
                💼 Web Developer Internship Opportunity / Interview
              </button>
              <button
                className="filter-pill-btn"
                style={{ textAlign: 'left', padding: '0.75rem 1rem', fontSize: '0.88rem' }}
                onClick={() => {
                  window.location.href = "mailto:kasherwinbanquil@gmail.com?subject=Portfolio%20Feedback";
                  setIsScheduleModalOpen(false);
                }}
              >
                🚀 Connect & Portfolio Feedback
              </button>
            </div>

            <button
              onClick={() => setIsScheduleModalOpen(false)}
              className="btn-pill-dark"
              style={{ width: '100%', padding: '0.65rem' }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;