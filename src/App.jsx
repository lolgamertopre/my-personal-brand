import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import SkillsView from './components/SkillsView';
import CvView from './components/CvView';
import { ProjectsView, CoursesView, AnswersView, ContactView } from './components/OtherViews';
import { NoteModal, ProjectModal } from './components/Modals';

function App() {
  const [activeSection, setActiveSection] = useState('skills');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  // Scroll spy
  useEffect(() => {
    const sectionIds = ['skills', 'degrees', 'certifications', 'cv', 'projects', 'courses', 'answers', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="retro-parchment-app">
      <Navbar
        onDownloadCv={() => scrollTo('cv')}
        onEmailClick={() => setIsNoteModalOpen(true)}
      />

      <Hero
        onReadCv={() => scrollTo('cv')}
        onSendNote={() => setIsNoteModalOpen(true)}
      />

      <div className="retro-main-layout">
        <Sidebar
          activeSection={activeSection}
          onSelectSection={scrollTo}
          onOpenNoteModal={() => setIsNoteModalOpen(true)}
        />

        <main className="retro-content-columns">
          <SkillsView />
          <div className="retro-section-spacer" />

          <CvView />
          <div className="retro-section-spacer" />

          <ProjectsView onSelectProject={(p) => setSelectedProject(p)} />
          <div className="retro-section-spacer" />

          <CoursesView />
          <div className="retro-section-spacer" />

          <AnswersView />
          <div className="retro-section-spacer" />

          <ContactView onOpenNote={() => setIsNoteModalOpen(true)} />
        </main>
      </div>

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
