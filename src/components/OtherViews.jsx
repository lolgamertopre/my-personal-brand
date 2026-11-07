import {
  researchList,
  talksList,
  projectsList,
  coursesList
} from '../data/portfolioData';

export function ResearchView() {
  return (
    <div id="research" className="generic-section-view">
      <div className="section-title-bar">
        <h2 className="view-title">RESEARCH & PUBLICATIONS</h2>
        <span className="view-count-badge">{researchList.length} publications</span>
      </div>

      <div className="research-grid">
        {researchList.map((res) => (
          <div key={res.id} className="research-card">
            <div className="research-header">
              <span className="research-year">{res.year}</span>
              <span className="research-role">{res.role}</span>
            </div>
            <h3 className="research-title">{res.title}</h3>
            <div className="research-venue">{res.venue}</div>
            <p className="research-abstract">{res.abstract}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TalksView() {
  return (
    <div id="talks" className="generic-section-view">
      <div className="section-title-bar">
        <h2 className="view-title">TALKS & PRESENTATIONS</h2>
        <span className="view-count-badge">{talksList.length} speaking engagements</span>
      </div>

      <div className="talks-grid">
        {talksList.map((talk) => (
          <div key={talk.id} className="talk-card">
            <div className="talk-year">{talk.year}</div>
            <h3 className="talk-title">{talk.title}</h3>
            <div className="talk-event">{talk.event}</div>
            <p className="talk-desc">{talk.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectsView({ onSelectProject }) {
  return (
    <div id="projects" className="generic-section-view">
      <div className="section-title-bar">
        <h2 className="view-title">ENGINEERING & RESEARCH PROJECTS</h2>
        <span className="view-count-badge">{projectsList.length} featured</span>
      </div>

      <div className="projects-grid">
        {projectsList.map((proj) => (
          <div 
            key={proj.id} 
            className="project-card"
            onClick={() => onSelectProject(proj)}
          >
            <div className="project-category-tag">{proj.category}</div>
            <h3 className="project-card-title">{proj.title}</h3>
            <p className="project-card-desc">{proj.desc}</p>
            <div className="project-tech-tags">
              {proj.tech.map((t, idx) => (
                <span key={idx} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CoursesView() {
  return (
    <div id="courses" className="generic-section-view">
      <div className="section-title-bar">
        <h2 className="view-title">COURSES TAUGHT</h2>
        <span className="view-count-badge">{coursesList.length} university courses</span>
      </div>

      <div className="courses-grid">
        {coursesList.map((c, idx) => (
          <div key={idx} className="course-card">
            <div className="course-code-badge">{c.code}</div>
            <h3 className="course-title">{c.title}</h3>
            <p className="course-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
