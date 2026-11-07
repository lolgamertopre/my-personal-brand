import { useState, useEffect } from 'react';
import { profileData } from '../data/portfolioData';

export default function Hero({ onReadCv, onSendNote }) {
  const [timeLeft, setTimeLeft] = useState({
    months: 5, days: 12, hours: 8, minutes: 19, seconds: 46
  });

  useEffect(() => {
    const target = new Date("2027-04-29T00:00:00+08:00").getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff > 0) {
        const totalDays = Math.floor(diff / 86400000);
        setTimeLeft({
          months: Math.floor(totalDays / 30.4375),
          days: Math.floor(totalDays % 30.4375),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000)
        });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* ---- Left column: bio content ---- */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="hero-title-line">SHERWIN L.</span>
            <span className="hero-title-line">BANQUIL</span>
          </h1>

          <div className="hero-roles">
            {profileData.titles.map((t, i) => (
              <span key={i} className="hero-role-item">
                <span className="hero-bullet">•</span> {t}
              </span>
            ))}
          </div>

          <p className="hero-bio">{profileData.headline}</p>

          {/* Actions */}
          <div className="hero-actions-row">
            <div className="degree-pill-badge">
              <div className="degree-seal-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="degree-pill-text">Associate in Computer Technology</span>
            </div>

            <button type="button" className="btn-read-cv" onClick={onReadCv}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>READ THE CV</span>
            </button>

            <button type="button" className="btn-send-note" onClick={onSendNote}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
              <span>SEND A NOTE</span>
            </button>
          </div>

          {/* Retro Countdown Ticket */}
          <div className="retro-ticket-card">
            <div className="retro-tape-pin" />
            <div className="ticket-body">
              <div className="ticket-stamp-box">
                <span className="stamp-label">LAST UPDATED</span>
                <span className="stamp-datetime">{profileData.lastUpdated}</span>
              </div>
              <div className="ticket-countdown-box">
                <div className="countdown-header-tag">
                  NEW PORTFOLIO WEBSITE • APRIL 29, 2027
                </div>
                <div className="countdown-numbers-row">
                  {[
                    { v: timeLeft.months, l: 'MONTHS' },
                    { v: pad(timeLeft.days), l: 'DAYS' },
                    { v: pad(timeLeft.hours), l: 'HOURS' },
                    { v: pad(timeLeft.minutes), l: 'MINUTES' },
                    { v: pad(timeLeft.seconds), l: 'SECONDS' }
                  ].map((unit, idx, arr) => (
                    <span key={unit.l} style={{ display: 'contents' }}>
                      <div className="countdown-unit">
                        <span className="unit-number">{unit.v}</span>
                        <span className="unit-label">{unit.l}</span>
                      </div>
                      {idx < arr.length - 1 && <div className="countdown-divider" />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <span className="stat-badge-soon">SOON</span>
              <span className="stat-big-num">1</span>
              <span className="stat-text-label">DEGREE EARNED</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat-item">
              <span className="stat-big-num">12+</span>
              <span className="stat-text-label">PROJECTS BUILT</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat-item">
              <span className="stat-big-num">4+</span>
              <span className="stat-text-label">CERTIFICATIONS</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat-item">
              <span className="stat-big-num">10+</span>
              <span className="stat-text-label">TECH SKILLS</span>
            </div>
          </div>
        </div>

        {/* ---- Right column: custom-built workstation PC ---- */}
        <div className="hero-right">
          <div className="pc-rig-display-wrapper">
            <img
              src="/sherwin-rig.png"
              alt="Sherwin Banquil Custom Workstation PC"
              className="pc-rig-image"
              onError={(e) => { e.target.src = '/pc-rig.png'; }}
            />
          </div>
        </div>

        {/* Far-right vertical watermark spine */}
        <aside className="hero-vertical-spine" aria-hidden="true">
          <div className="vertical-spine-text">
            SHERWIN L. BANQUIL — CURRICULUM VITAE — MMXXVI
          </div>
        </aside>
      </div>

      {/* Architectural bridge silhouette */}
      <div className="bridge-silhouette-bg" aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="bridge-svg">
          <path d="M0 75 Q380 20 620 75 L620 80 L0 80 Z" fill="none" stroke="#D1C3B2" strokeWidth="1.5" />
          <line x1="160" y1="46" x2="160" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="220" y1="36" x2="220" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="280" y1="28" x2="280" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="340" y1="24" x2="340" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="400" y1="24" x2="400" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="460" y1="28" x2="460" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="520" y1="38" x2="520" y2="75" stroke="#D1C3B2" strokeWidth="0.8" strokeDasharray="2,2" />
          {/* City buildings */}
          {[
            [640,60,18,15],[662,52,14,23],[680,45,22,30],[706,58,16,17],[726,48,24,27],
            [754,62,15,13],[774,55,20,20],[798,42,16,33],[818,50,26,25],[848,58,18,17],
            [870,46,22,29],[896,60,15,15],[915,38,20,37],[940,52,25,23],[970,30,16,45],
            [990,48,28,27],[1022,35,18,40],[1044,55,24,20],[1072,25,15,50],[1092,45,30,30],
            [1126,32,20,43],[1150,50,35,25]
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="#D1C3B2" opacity="0.55" />
          ))}
        </svg>
      </div>
    </section>
  );
}
