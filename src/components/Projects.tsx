import React, { useState } from 'react';

type Project = {
  title: string;
  category: 'mern' | 'python' | 'java';
  desc: string;
  tags: string[];
  githubUrl: string;
  icon: React.ReactNode;
};

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mern' | 'python' | 'java'>('all');

  const projects: Project[] = [
    {
      title: 'AI Resume Analyzer & Job Matcher',
      category: 'python',
      desc: 'Developed an AI-powered web application that analyzes resumes and provides intelligent feedback for career improvement. Implemented technical skill extraction, resume scoring, sentiment analysis, and job-role matching using NLP techniques.',
      tags: ['Python', 'NLP', 'Resume Scoring', 'Skill Extraction'],
      githubUrl: 'https://github.com/Acharya-Sonam',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="project-image-decor">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <circle cx="10" cy="13" r="2"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      )
    },
    {
      title: 'Smart Service Finder',
      category: 'mern',
      desc: 'Building a MERN-based digital platform with real-time features connecting clients with local service providers. Implementing location-based services, provider registration, reviews, and interactive notifications.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Geolocation'],
      githubUrl: 'https://github.com/Acharya-Sonam',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="project-image-decor">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      title: 'Blood Donation & Healthcare System',
      category: 'java',
      desc: 'Developed a web-based healthcare system for blood request management, donor coordination, and patient tracking. Implemented session-based authentication, request status tracking, and database operations using JSP, Servlets, and MySQL.',
      tags: ['Java', 'JSP', 'Servlets', 'MySQL', 'Web App'],
      githubUrl: 'https://github.com/Acharya-Sonam',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="project-image-decor">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      )
    },
    {
      title: 'E-commerce Website',
      category: 'mern',
      desc: 'Designed a fully responsive online store UI featuring product listings, detailed descriptions, cart management, and checkout. Integrated a MySQL backend for secure user registration and product catalogs.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Responsive UI'],
      githubUrl: 'https://github.com/Acharya-Sonam',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="project-image-decor">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
      )
    },
    {
      title: 'Election Awareness Bot',
      category: 'python',
      desc: 'Developed an AI-powered election assistance bot designed to educate citizens about voting procedures, rules, and timelines. Implemented voter eligibility questionnaires, election schedules, and natural language query processing.',
      tags: ['Python', 'NLP', 'Chatbot', 'Election Timelines'],
      githubUrl: 'https://github.com/Acharya-Sonam',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="project-image-decor">
          <path d="M12 8V4H8"></path>
          <rect x="3" y="8" width="18" height="12" rx="2"></rect>
          <circle cx="8" cy="13" r="1"></circle>
          <circle cx="16" cy="13" r="1"></circle>
          <path d="M12 16a2 2 0 0 1-2 2h4a2 2 0 0 1-2-2Z"></path>
        </svg>
      )
    },
    {
      title: 'Inventory Management System',
      category: 'python',
      desc: 'Built a system for stock tracking, billing, sales logging, and automatic invoice generation. Implemented direct file-handling algorithms for lightweight, persistent data storage without database overhead.',
      tags: ['Python', 'File Handling', 'Stock Tracking', 'Invoicing'],
      githubUrl: 'https://github.com/Acharya-Sonam',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="project-image-decor">
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: 'Gym Management System',
      category: 'java',
      desc: 'Developed a GUI-based desktop application using Java Swing. Enabled administrative features for managing member registrations, monthly fitness plans, attendance logs, and membership payment tracking.',
      tags: ['Java', 'Java Swing', 'Desktop GUI', 'Records Management'],
      githubUrl: 'https://github.com/Acharya-Sonam',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="project-image-decor">
          <path d="M6.5 6.5h11M6.5 17.5h11M18 5v14M6 5v14M3 9v6M21 9v6"></path>
        </svg>
      )
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="section">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-subtitle">
          A showcase of my projects built with different tech stacks including MERN, Python, and Java.
        </p>

        <div className="projects-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'mern' ? 'active' : ''}`}
            onClick={() => setFilter('mern')}
          >
            MERN Stack
          </button>
          <button 
            className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
            onClick={() => setFilter('python')}
          >
            Python
          </button>
          <button 
            className={`filter-btn ${filter === 'java' ? 'active' : ''}`}
            onClick={() => setFilter('java')}
          >
            Java / JSP
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-placeholder">
                {project.icon}
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
