import { useState, useEffect } from 'react';
import { profileData } from '../data/portfolioData';

export default function Hero({ onReadCv, onSendNote }) {
  // Countdown to April 29, 2027
  const [timeLeft, setTimeLeft] = useState({
    months: 5,
    days: 12,
    hours: 8,
    minutes: 19,
    seconds: 46
  });

  useEffect(() => {
    const target = new Date("2027-04-29T00:00:00+08:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        const months = Math.floor(totalDays / 30.4375);
        const days = Math.floor(totalDays % 30.4375);
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ months, days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const format2Digits = (num) => String(num).padStart(2, '0');

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Bio & Retro Ticket */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="hero-title-line">ENGR. VIOLDAN E.</span>
            <span className="hero-title-line">BAYOCOT</span>
          </h1>

          <div className="hero-roles">
            {profileData.titles.map((title, i) => (
              <span key={i} className="hero-role-item">
                <span className="hero-bullet">•</span> {title}
              </span>
            ))}
          </div>

          <p className="hero-bio">
            {profileData.headline}
          </p>

          <div className="hero-actions-row">
            <div className="degree-pill-badge">
              <div className="degree-seal-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="degree-pill-text">Master in Computer Science</span>
            </div>

            <button 
              type="button" 
              className="btn-read-cv"
              onClick={onReadCv}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
              <span>READ THE CV</span>
            </button>

            <button 
              type="button" 
              className="btn-send-note"
              onClick={onSendNote}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
              <span>SEND A NOTE</span>
            </button>
          </div>

          {/* Retro Pinned Card: Last Updated + Countdown */}
          <div className="retro-ticket-card">
            <div className="retro-tape-pin" />

            <div className="ticket-body">
              {/* Left Stamp */}
              <div className="ticket-stamp-box">
                <span className="stamp-label">LAST UPDATED</span>
                <span className="stamp-datetime">{profileData.lastUpdated}</span>
              </div>

              {/* Right Countdown */}
              <div className="ticket-countdown-box">
                <div className="countdown-header-tag">
                  NEW PORTFOLIO WEBSITE • APRIL 29, 2027
                </div>

                <div className="countdown-numbers-row">
                  <div className="countdown-unit">
                    <span className="unit-number">{timeLeft.months}</span>
                    <span className="unit-label">MONTHS</span>
                  </div>
                  <div className="countdown-divider" />
                  <div className="countdown-unit">
                    <span className="unit-number">{format2Digits(timeLeft.days)}</span>
                    <span className="unit-label">DAYS</span>
                  </div>
                  <div className="countdown-divider" />
                  <div className="countdown-unit">
                    <span className="unit-number">{format2Digits(timeLeft.hours)}</span>
                    <span className="unit-label">HOURS</span>
                  </div>
                  <div className="countdown-divider" />
                  <div className="countdown-unit">
                    <span className="unit-number">{format2Digits(timeLeft.minutes)}</span>
                    <span className="unit-label">MINUTES</span>
                  </div>
                  <div className="countdown-divider" />
                  <div className="countdown-unit">
                    <span className="unit-number">{format2Digits(timeLeft.seconds)}</span>
                    <span className="unit-label">SECONDS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Bottom Stats with Architectural Silhouette */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <span className="stat-badge-soon">SOON</span>
              <span className="stat-big-num">2</span>
              <span className="stat-text-label">DEGREES EARNED</span>
            </div>

            <div className="hero-stat-sep" />

            <div className="hero-stat-item">
              <span className="stat-big-num">21</span>
              <span className="stat-text-label">COURSES TAUGHT</span>
            </div>

            <div className="hero-stat-sep" />

            <div className="hero-stat-item">
              <span className="stat-big-num">1</span>
              <span className="stat-text-label">PUBLICATIONS</span>
            </div>

            <div className="hero-stat-sep" />

            <div className="hero-stat-item">
              <span className="stat-big-num">20+</span>
              <span className="stat-text-label">PROJECTS</span>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Workstation PC Rig */}
        <div className="hero-right">
          <div className="pc-rig-display-wrapper">
            <img 
              src="/pc-rig.png" 
              alt="Engr. Violdan E. Bayocot Custom PC Workstation Rig" 
              className="pc-rig-image"
            />
          </div>
        </div>

        {/* Far Right Vertical Watermark Spine */}
        <aside className="hero-vertical-spine" aria-hidden="true">
          <div className="vertical-spine-text">
            ENGR. VIOLDAN E. BAYOCOT — CURRICULUM VITAE — MMXXVI
          </div>
        </aside>
      </div>

      {/* Bridge Skyline Silhouette Vector */}
      <div className="bridge-silhouette-bg" aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="bridge-svg">
          {/* Bridge arch */}
          <path d="M 0 75 Q 380 20 620 75 L 620 80 L 0 80 Z" fill="none" stroke="#D1C3B2" strokeWidth="1.5" />
          <path d="M 40 75 Q 380 25 600 75" fill="none" stroke="#D1C3B2" strokeWidth="0.8" />
          {/* Vertical bridge cables */}
          <line x1="160" y1="46" x2="160" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="220" y1="36" x2="220" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="280" y1="28" x2="280" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="340" y1="24" x2="340" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="400" y1="24" x2="400" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="460" y1="28" x2="460" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="520" y1="38" x2="520" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          {/* City buildings silhouettes across bottom */}
          <rect x="640" y="60" width="18" height="15" fill="#D1C3B2" opacity="0.6" />
          <rect x="662" y="52" width="14" height="23" fill="#D1C3B2" opacity="0.6" />
          <rect x="680" y="45" width="22" height="30" fill="#D1C3B2" opacity="0.5" />
          <rect x="706" y="58" width="16" height="17" fill="#D1C3B2" opacity="0.6" />
          <rect x="726" y="48" width="24" height="27" fill="#D1C3B2" opacity="0.6" />
          <rect x="754" y="62" width="15" height="13" fill="#D1C3B2" opacity="0.6" />
          <rect x="774" y="55" width="20" height="20" fill="#D1C3B2" opacity="0.5" />
          <rect x="798" y="42" width="16" height="33" fill="#D1C3B2" opacity="0.6" />
          <rect x="818" y="50" width="26" height="25" fill="#D1C3B2" opacity="0.5" />
          <rect x="848" y="58" width="18" height="17" fill="#D1C3B2" opacity="0.6" />
          <rect x="870" y="46" width="22" height="29" fill="#D1C3B2" opacity="0.6" />
          <rect x="896" y="60" width="15" height="15" fill="#D1C3B2" opacity="0.5" />
          <rect x="915" y="38" width="20" height="37" fill="#D1C3B2" opacity="0.6" />
          <rect x="940" y="52" width="25" height="23" fill="#D1C3B2" opacity="0.5" />
          <rect x="970" y="30" width="16" height="45" fill="#D1C3B2" opacity="0.6" />
          <rect x="990" y="48" width="28" height="27" fill="#D1C3B2" opacity="0.5" />
          <rect x="1022" y="35" width="18" height="40" fill="#D1C3B2" opacity="0.6" />
          <rect x="1044" y="55" width="24" height="20" fill="#D1C3B2" opacity="0.5" />
          <rect x="1072" y="25" width="15" height="50" fill="#D1C3B2" opacity="0.6" />
          <rect x="1092" y="45" width="30" height="30" fill="#D1C3B2" opacity="0.5" />
          <rect x="1126" y="32" width="20" height="43" fill="#D1C3B2" opacity="0.6" />
          <rect x="1150" y="50" width="35" height="25" fill="#D1C3B2" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
