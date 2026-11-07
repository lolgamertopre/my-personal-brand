import { useState } from 'react';
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

  const handleDownloadCv = () => {
    // Scroll to CV section and trigger print or provide CV preview
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

  const renderActiveMainView = () => {
    switch (activeSection) {
      case 'skills':
      case 'degrees':
      case 'certifications':
        return <SkillsView />;
      case 'cv':
        return <CvView />;
      case 'research':
        return <ResearchView />;
      case 'talks':
        return <TalksView />;
      case 'projects':
        return <ProjectsView onSelectProject={(p) => setSelectedProject(p)} />;
      case 'courses':
        return <CoursesView />;
      default:
        return <SkillsView />;
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
        {/* Left Column: Dark Profile & Nav Card */}
        <Sidebar
          activeSection={activeSection}
          onSelectSection={(id) => setActiveSection(id)}
          onOpenNoteModal={() => setIsNoteModalOpen(true)}
        />

        {/* Center & Right Columns: Dynamic View */}
        <main className="retro-content-columns">
          {renderActiveMainView()}
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
