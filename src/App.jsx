import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import SkillsView from './components/SkillsView';
import CvView from './components/CvView';
import { ResearchView, TalksView, ProjectsView, CoursesView } from './components/OtherViews';
import { NoteModal, ProjectModal } from './components/Modals';

function App() {
  const [activeSection, setActiveSection] = useState('skills');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  // Scroll spy to update the active item in the left sidebar Index
  useEffect(() => {
    const sectionIds = ['skills', 'degrees', 'certifications', 'cv', 'research', 'talks', 'projects', 'courses'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCv = () => {
    setActiveSection('cv');
    const cvElem = document.getElementById('cv');
    if (cvElem) {
      cvElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    setIsNoteModalOpen(true);
  };

  const handleReadCv = () => {
    setActiveSection('cv');
    const cvElem = document.getElementById('cv');
    if (cvElem) {
      cvElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSection = (id) => {
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="retro-parchment-app">
      {/* Top Navbar */}
      <Navbar
        onDownloadCv={handleDownloadCv}
        onEmailClick={handleEmailClick}
      />

      {/* Hero Section */}
      <Hero
        onReadCv={handleReadCv}
        onSendNote={() => setIsNoteModalOpen(true)}
      />

      {/* Main Content Area: 3-Column Experience */}
      <div className="retro-main-layout">
        {/* Left Column: Persistent Dark Profile & Nav Card */}
        <Sidebar
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
          onOpenNoteModal={() => setIsNoteModalOpen(true)}
        />

        {/* Center & Right Columns: Complete Continuous View */}
        <main className="retro-content-columns">
          {/* Section 1: Skills, Degrees & Certifications (Image 2) */}
          <SkillsView />

          <div className="retro-section-spacer" />

          {/* Section 2: Curriculum Vitae, Conferences, Societies & Advising (Image 3) */}
          <CvView />

          <div className="retro-section-spacer" />

          {/* Section 3: Research & Publications */}
          <ResearchView />

          <div className="retro-section-spacer" />

          {/* Section 4: Talks & Presentations */}
          <TalksView />

          <div className="retro-section-spacer" />

          {/* Section 5: Engineering & Research Projects */}
          <ProjectsView onSelectProject={(p) => setSelectedProject(p)} />

          <div className="retro-section-spacer" />

          {/* Section 6: Courses Taught */}
          <CoursesView />
        </main>
      </div>

      {/* Modals */}
      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
