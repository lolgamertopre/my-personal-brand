import { useState } from 'react';

export function NoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 2500);
    }
  };

  return (
    <div className="retro-modal-overlay" onClick={onClose}>
      <div className="retro-modal-box note-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="retro-modal-close" onClick={onClose}>✕</button>

        <div className="note-modal-header">
          <div className="note-stamp-pill">COMMUNICATION NOTE</div>
          <h2 className="note-modal-title">Leave a Note for Engr. Violdan E. Bayocot</h2>
          <p className="note-modal-subtitle">
            School of Computer Studies, University of San Jose - Recoletos
          </p>
        </div>

        {submitted ? (
          <div className="note-submitted-box">
            <div className="submitted-check-circle">✓</div>
            <h3>Note Transmitted</h3>
            <p>Thank you for reaching out. Engr. Bayocot will review your message shortly.</p>
          </div>
        ) : (
          <form className="note-form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-field">
                <label>YOUR NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Santos"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>YOUR EMAIL</label>
                <input
                  type="email"
                  placeholder="e.g. msantos@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-field">
              <label>SUBJECT / INQUIRY TOPIC</label>
              <input
                type="text"
                placeholder="e.g. Academic Research Collaboration, Speaking Invitation, etc."
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label>MESSAGE *</label>
              <textarea
                required
                rows={5}
                placeholder="Write your note here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="form-actions-row">
              <button type="submit" className="btn-submit-note">
                SEND NOTE ↗
              </button>
              <button type="button" className="btn-cancel-note" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="retro-modal-overlay" onClick={onClose}>
      <div className="retro-modal-box project-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="retro-modal-close" onClick={onClose}>✕</button>

        <div className="project-modal-category">{project.category}</div>
        <h2 className="project-modal-title">{project.title}</h2>
        <p className="project-modal-desc">{project.desc}</p>

        <div className="project-modal-tech-header">TECHNOLOGY STACK:</div>
        <div className="project-modal-tech-list">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tech-badge-large">{t}</span>
          ))}
        </div>

        <div className="project-modal-footer">
          <button type="button" className="btn-submit-note" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
