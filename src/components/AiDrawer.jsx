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
      let replyText = "Sherwin Banquil is an aspiring Web Developer seeking a Web Development Internship. He builds responsive web applications using React, JavaScript, PHP, HTML, CSS, and MySQL!";

      const q = userText.toLowerCase();
      if (q.includes('skill') || q.includes('stack') || q.includes('technology')) {
        replyText = "Sherwin's tech stack includes React, JavaScript, HTML5, CSS3, PHP, MySQL, Git, and Linux.";
      } else if (q.includes('hire') || q.includes('job') || q.includes('available') || q.includes('intern') || q.includes('work')) {
        replyText = "Yes! Sherwin is actively seeking an Internship position as a Web Developer where he can learn and contribute.";
      } else if (q.includes('location') || q.includes('where')) {
        replyText = "Sherwin is based in Cebu City, Philippines (PHT / GMT+8) and is open for remote or local internship roles.";
      } else if (q.includes('contact') || q.includes('email')) {
        replyText = "You can reach Sherwin via email or check out his projects on GitHub (github.com/lolgamertopre)!";
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
