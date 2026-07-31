import React, { useState } from 'react';

export default function AiDrawer({ isOpen, onClose }) {
  const [inputMsg, setInputMsg] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hello! I'm Sherwin's AI Portfolio Assistant. Ask me anything about Sherwin's skills, experience, or project background!"
    }
  ]);

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const userText = inputMsg.trim();
    const newMsgs = [...messages, { role: 'user', text: userText }];
    setMessages(newMsgs);
    setInputMsg('');

    // Generate intelligent responses based on keywords
    setTimeout(() => {
      let replyText = "Sherwin is a Full-Stack Developer experienced in React, Node.js, Laravel, PHP, Python, and Linux automation. Feel free to contact him via email or schedule a call!";

      const q = userText.toLowerCase();
      if (q.includes('skill') || q.includes('stack') || q.includes('technology')) {
        replyText = "Sherwin's primary stack includes React, JavaScript (ES6+), Node.js, PHP, Laravel, Python, MySQL, Linux, and Cloud services (AWS, Vercel).";
      } else if (q.includes('hire') || q.includes('job') || q.includes('available') || q.includes('work')) {
        replyText = "Yes! Sherwin is currently 100% available for Software Engineer, Full-Stack Developer, and DevOps positions.";
      } else if (q.includes('location') || q.includes('where')) {
        replyText = "Sherwin is based in Cebu City, Philippines (PHT / GMT+8) and is available for both remote and on-site roles.";
      } else if (q.includes('contact') || q.includes('email')) {
        replyText = "You can reach Sherwin directly via email or GitHub (github.com/lolgamertopre), or use the Schedule a Call button on the sidebar!";
      }

      setMessages((prev) => [...prev, { role: 'assistant', text: replyText }]);
    }, 600);
  };

  return (
    <div className="ai-drawer-overlay" onClick={onClose}>
      <div className="ai-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="ai-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🤖</span>
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>AI Assistant</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Sherwin's Workstation Co-pilot</div>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="ai-drawer-messages">
          {messages.map((m, idx) => (
            <div key={idx} className={`ai-msg-bubble ${m.role}`}>
              {m.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="ai-drawer-footer">
          <input
            type="text"
            placeholder="Ask about Sherwin's experience..."
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            className="search-bar-input"
            style={{ fontSize: '0.85rem' }}
          />
          <button type="submit" className="btn-submit-contact" style={{ marginTop: 0, padding: '0.5rem 1rem' }}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
