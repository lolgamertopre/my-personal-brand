import { useState } from 'react';
import {
  degreesData,
  experienceData,
  conferencesData,
  professionalSocietiesData,
  advisingMentoringData
} from '../data/portfolioData';

export default function CvView() {
  const [isAdvisingExpanded, setIsAdvisingExpanded] = useState(true);

  return (
    <div id="cv" className="cv-view-container">
      {/* Center Column: Education & Experience */}
      <section className="cv-center-column">
        {/* EDUCATION */}
        <div className="cv-section-block">
          <div className="cv-section-tag">EDUCATION</div>
          <div className="cv-timeline-list">
            {degreesData.map((d) => (
              <div key={d.id} className="cv-timeline-item">
                <div className="timeline-marker-ring" />
                <div className="timeline-content">
                  <div className="timeline-date-tag">{d.tag}</div>
                  <h3 className="timeline-entry-title">{d.degree}</h3>
                  <div className="timeline-entry-sub">{d.institution}</div>
                  <p className="timeline-entry-desc">{d.thesis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CURRENT POSITION */}
        <div className="cv-section-block">
          <div className="cv-section-tag">CURRENT POSITION</div>
          <div className="cv-timeline-list">
            <div className="cv-timeline-item">
              <div className="timeline-marker-ring" />
              <div className="timeline-content">
                <div className="timeline-date-tag">JANUARY 2024 - PRESENT</div>
                <h3 className="timeline-entry-title">Professor</h3>
                <div className="timeline-entry-sub">
                  School of Computer Studies, University of San Jose - Recoletos
                </div>
                <ul className="timeline-bullet-list">
                  {experienceData[0].points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* PREVIOUS POSITIONS */}
        <div className="cv-section-block">
          <div className="cv-section-tag">PREVIOUS POSITIONS</div>
          <div className="cv-timeline-list">
            <div className="cv-timeline-item">
              <div className="timeline-marker-ring" />
              <div className="timeline-content">
                <div className="timeline-date-tag">{experienceData[1].period}</div>
                <h3 className="timeline-entry-title">{experienceData[1].role}</h3>
                <div className="timeline-entry-sub">{experienceData[1].institution}</div>
                <ul className="timeline-bullet-list">
                  {experienceData[1].points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column: Conferences, Societies, Advising & Mentoring */}
      <aside className="cv-right-column">
        {/* ORGANIZER OF CONFERENCES & WORKSHOPS */}
        <div className="cv-section-block">
          <div className="cv-section-tag">ORGANIZER OF CONFERENCES & WORKSHOPS</div>
          <div className="cv-timeline-list">
            {conferencesData.map((conf) => (
              <div key={conf.id} className="cv-timeline-item">
                <div className="timeline-marker-ring" />
                <div className="timeline-content">
                  <div className="timeline-date-tag">{conf.period}</div>
                  <h3 className="timeline-entry-title">{conf.title}</h3>
                  <div className="timeline-entry-sub">{conf.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MEMBER OF PROFESSIONAL SOCIETIES */}
        <div className="cv-section-block">
          <div className="cv-section-tag">MEMBER OF PROFESSIONAL SOCIETIES</div>
          <div className="cv-timeline-list">
            {professionalSocietiesData.map((soc) => (
              <div key={soc.id} className="cv-timeline-item">
                <div className="timeline-marker-ring" />
                <div className="timeline-content">
                  <div className="timeline-date-tag">{soc.period}</div>
                  <h3 className="timeline-entry-title">{soc.organization}</h3>
                  <div className="timeline-entry-sub">{soc.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ADVISING & MENTORING Card */}
        <div className="advising-card-panel">
          <button
            type="button"
            className="advising-header-bar"
            onClick={() => setIsAdvisingExpanded(!isAdvisingExpanded)}
          >
            <div className="advising-header-left">
              <div className="advising-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span className="advising-header-title">ADVISING & MENTORING</span>
            </div>
            <div className="advising-header-right">
              <span className="advising-entries-count">{advisingMentoringData.length} entries</span>
              <span className={`advising-chevron ${isAdvisingExpanded ? 'open' : ''}`}>⌃</span>
            </div>
          </button>

          {isAdvisingExpanded && (
            <div className="advising-body-content">
              <div className="advising-subhead">
                MENTOR OF HACKATHON & STARTUP COMPETITION TEAMS
              </div>

              <div className="cv-timeline-list">
                {advisingMentoringData.map((adv) => (
                  <div key={adv.id} className="cv-timeline-item">
                    <div className="timeline-marker-ring" />
                    <div className="timeline-content">
                      <div className="timeline-date-tag">{adv.period}</div>
                      <h3 className="timeline-entry-title">{adv.title}</h3>
                      <div className="timeline-entry-sub">{adv.location}</div>
                      {adv.note && <p className="timeline-entry-desc">{adv.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
