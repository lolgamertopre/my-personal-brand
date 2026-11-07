import { projectsList, coursesList, answersList } from '../data/portfolioData';
import { useState } from 'react';

export function ProjectsView({ onSelectProject }) {
  return (
    <div id="projects" className="generic-section-view">
      <div className="section-title-bar">
        <h2 className="view-title">PROJECTS BUILT</h2>
        <span className="view-count-badge">{projectsList.length} repositories</span>
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
            <div className="project-card-footer">
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="project-gh-link"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub ↗
              </a>
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
        <h2 className="view-title">COURSES TAKEN</h2>
        <span className="view-count-badge">{coursesList.length} subjects</span>
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

export function AnswersView() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div id="answers" className="generic-section-view">
      <div className="section-title-bar">
        <h2 className="view-title">BOOK OF ANSWERS</h2>
        <span className="view-count-badge">{answersList.length} questions</span>
      </div>

      <div className="answers-list">
        {answersList.map((item, idx) => (
          <div key={idx} className="answer-item">
            <button
              type="button"
              className="answer-question-btn"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span>{item.q}</span>
              <span className="answer-chevron">{openIdx === idx ? '−' : '+'}</span>
            </button>
            {openIdx === idx && (
              <div className="answer-body">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactView({ onOpenNote }) {
  return (
    <div id="contact" className="generic-section-view">
      <div className="section-title-bar">
        <h2 className="view-title">CONTACT</h2>
      </div>

      <div className="contact-grid">
        <a href="mailto:kasherwinbanquil@gmail.com" className="contact-card">
          <div className="contact-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <div className="contact-label">kasherwinbanquil@gmail.com</div>
        </a>

        <a href="https://github.com/lolgamertopre" target="_blank" rel="noreferrer" className="contact-card">
          <div className="contact-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <div className="contact-label">github.com/lolgamertopre</div>
        </a>

        <button type="button" className="contact-card contact-card-btn" onClick={onOpenNote}>
          <div className="contact-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
            </svg>
          </div>
          <div className="contact-label">Leave a note</div>
        </button>
      </div>
    </div>
  );
}
