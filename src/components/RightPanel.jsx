import React, { useState, useRef, useEffect } from 'react';

export default function RightPanel() {
  const [inputVal, setInputVal] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'Sherwin OS v2.0.0 (x86_64-pc-linux-gnu)' },
    { type: 'output', text: "Type 'help' to view available terminal commands." }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { type: 'input', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
  help      - Show this help menu
  about     - Brief summary about Sherwin
  skills    - List core tech stack
  projects  - List featured projects
  contact   - Display contact links
  whoami    - Display user identity
  date      - Display system time
  clear     - Clear terminal screen`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: 'Sherwin Banquil - Aspiring Web Developer located in Cebu City, PH seeking an internship opportunity.'
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: 'React, JavaScript, HTML, CSS, PHP, MySQL, Git, Linux.'
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: '1. Personal Brand Portfolio\n2. PHP & MySQL Web App\n3. Laravel E-Commerce Platform\n4. Linux Automation Scripts'
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: 'Email: your.email@example.com\nGitHub: https://github.com/lolgamertopre'
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'guest@sherwin-workstation ~ (read-only session)'
        });
        break;

      case 'date':
        newHistory.push({
          type: 'output',
          text: new Date().toString()
        });
        break;

      case 'clear':
        setTerminalHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not found: '${cmd}'. Type 'help' for available commands.`
        });
        break;
    }

    setTerminalHistory(newHistory);
    setInputVal('');
  };

  return (
    <aside className="right-panel-sticky">
      {/* SYSTEM STATUS */}
      <div className="widget-box">
        <div className="widget-header-title">
          <span>System Status</span>
          <div className="status-badge-pill">
            <span className="pulse-dot" />
            Open for Internship
          </div>
        </div>

        <div className="system-details-list">
          <div className="system-detail-item">
            <span className="system-label">Location:</span>
            <span className="system-val">Cebu City, PH</span>
          </div>

          <div className="system-detail-item">
            <span className="system-label">Timezone:</span>
            <span className="system-val">PHT (GMT+8)</span>
          </div>

          <div className="system-detail-item">
            <span className="system-label">Uptime:</span>
            <span className="system-val highlight">99.9% Operational</span>
          </div>
        </div>
      </div>

      {/* Interactive CLI Terminal */}
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="terminal-name">&gt;_ sherwin-terminal</span>
        </div>

        <div className="terminal-body">
          {terminalHistory.map((item, index) => (
            <div
              key={index}
              className="terminal-output-line"
              style={{ color: item.type === 'input' ? 'var(--accent-cyan)' : 'var(--text-muted)' }}
            >
              {item.text}
            </div>
          ))}
          <div ref={terminalEndRef} />

          <form onSubmit={handleCommandSubmit} className="terminal-input-form">
            <span className="terminal-prompt-symbol">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help'..."
              className="terminal-input"
            />
          </form>
        </div>
      </div>

      {/* Currently Focused On */}
      <div className="widget-box">
        <div className="widget-header-title">
          <span>✦ Currently Focused On</span>
        </div>

        <div className="focus-item-list">
          <div className="focus-bullet-item">
            <span>•</span> React & Modern Frontend Web Apps
          </div>
          <div className="focus-bullet-item">
            <span>•</span> Backend Integration (PHP & Node.js)
          </div>
          <div className="focus-bullet-item">
            <span>•</span> Relational Databases (MySQL)
          </div>
          <div className="focus-bullet-item">
            <span>•</span> Securing a Web Developer Internship
          </div>
        </div>
      </div>

      <div className="footer-hint-text">
        Press Alt + K for AI Drawer
      </div>
    </aside>
  );
}
