import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-wrapper">
      <div className="bg-glow-mesh">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
      </div>
      
      <div className="section section-hero">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-hello">Hello, I'm</span>
            <h1 className="hero-name">
              <span>Sonam Acharya</span>
            </h1>
            <h2 className="hero-title">MERN Stack Developer</h2>
            <p className="hero-desc">
              I build responsive, user-friendly, and scalable web applications. Strong foundation in frontend and backend technologies with a passion for writing clean, optimized code.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="profile-card-glow">
              <div className="profile-card-inner">
                <div className="profile-avatar-svg">
                  {/* Developer Avatar SVG Illustration */}
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="var(--bg-tertiary)" stroke="var(--accent-primary)" strokeWidth="2"/>
                    {/* Head */}
                    <circle cx="50" cy="40" r="18" fill="var(--text-secondary)"/>
                    {/* Glasses */}
                    <rect x="38" y="36" width="10" height="8" rx="2" stroke="var(--bg-primary)" strokeWidth="2"/>
                    <rect x="52" y="36" width="10" height="8" rx="2" stroke="var(--bg-primary)" strokeWidth="2"/>
                    <line x1="48" y1="40" x2="52" y2="40" stroke="var(--bg-primary)" strokeWidth="2"/>
                    {/* Hair / Cap */}
                    <path d="M30 36 C35 20, 65 20, 70 36 Z" fill="var(--accent-primary)"/>
                    {/* Body/Shoulders */}
                    <path d="M20 80 C20 62, 35 60, 50 60 C65 60, 80 62, 80 80 Z" fill="var(--accent-secondary)"/>
                    {/* Code sign details */}
                    <path d="M42 68 L47 73 L42 78" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M58 68 L53 73 L58 78" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>Sonam Acharya</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>@Acharya-Sonam</p>
                <div className="profile-role-badge">MERN Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
