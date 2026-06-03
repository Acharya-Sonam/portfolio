import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="section">
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-subtitle">
          Here is a quick introduction to my background, what I do, and my achievements.
        </p>
        
        <div className="about-grid">
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
            <svg style={{ width: '80px', height: '80px', color: 'var(--accent-primary)', marginBottom: '24px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 017.918 5.838 50.564 50.564 0 00-2.658.813m-11.162 0A51.059 51.059 0 0012 12.001c2.107 0 4.135-.127 6.113-.373m-11.162 0a41.586 41.586 0 01-3.83-2.654m11.162 2.522a41.586 41.586 0 003.83-2.654M12 6.162L12 12m0 0l-1.5-1.5m1.5 1.5l1.5-1.5" />
            </svg>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Education First</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              I am currently pursuing a <strong>BSc. (Hons) Computing</strong> at Itahari International College in partnership with <strong>London Metropolitan University</strong> (Class of 2024-2026).
            </p>
          </div>

          <div className="about-details">
            <p>
              I am a passionate and motivated MERN Stack Developer seeking a career in software development. I have built a strong foundation in both frontend and backend technologies, focusing on creating fully responsive, user-friendly, and scalable web solutions.
            </p>
            <p>
              I love solving complex programming problems, writing clean code, and working on real-world web projects. My experience in roles like receptionist/invigilator and account manager has equipped me with strong communication, team collaboration, and leadership skills.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-num">3+</div>
                <div className="stat-label">Years Learning</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">7+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">10+</div>
                <div className="stat-label">Tech Skills</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">100%</div>
                <div className="stat-label">Dedicated</div>
              </div>
            </div>
            
            <a href="/Sonam_Acharya_CV.pdf" download="Sonam_Acharya_CV.pdf" className="btn btn-primary">
              Download Full CV
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
