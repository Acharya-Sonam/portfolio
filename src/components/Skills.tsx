import React, { useState } from 'react';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  id: string;
  label: string;
  skills: Skill[];
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories: SkillCategory[] = [
    {
      id: 'languages',
      label: 'Languages',
      skills: [
        {
          name: 'JavaScript',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="skill-icon">
              <path d="M3 3h18v18H3V3zm12.525 10.741c-.482-.303-.896-.51-1.393-.78-.475-.259-.728-.431-.728-.79 0-.303.221-.51.641-.51.407 0 .669.214.91.593L16.27 11.23c-.766-1.09-1.89-1.572-3.145-1.572-2.007 0-3.359 1.255-3.359 3.097 0 1.959 1.221 2.69 2.924 3.517.51.248.979.476 1.393.738.38.241.572.462.572.793 0 .372-.317.621-.828.621-.669 0-1.048-.372-1.352-.897l-2.034 1.228c.614 1.159 1.772 1.834 3.421 1.834 2.29 0 3.869-1.228 3.869-3.234 0-1.952-1.055-2.738-2.673-3.692zM8.567 15.65v-6.0h2.46v6.0c0 .924-.482 1.386-1.42 1.386-.339 0-.7-.089-.86-.179l.138-1.772c.11.055.228.083.372.083.332 0 .51-.158.51-.518z" />
            </svg>
          )
        },
        {
          name: 'Python',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="skill-icon">
              <path d="M11.966 2.016c-3.197 0-3.003 1.386-3.003 1.386l.012 1.436h3.044v.433H6.844s-2.868.324-2.868 2.975c0 2.65 2.502 2.81 2.502 2.81l1.493-.002v-2.115c0-2.52 2.084-2.484 2.084-2.484h4.168s2.052-.063 2.052-2.435c0-2.37-2.316-2.535-2.316-2.535l-2.043.026zm3.19 1.353a.627.627 0 1 1 0 1.254.627.627 0 0 1 0-1.254zm-6.275 7.23a.627.627 0 1 1 0 1.254.627.627 0 0 1 0-1.254zm3.119 11.385c3.197 0 3.003-1.386 3.003-1.386l-.012-1.436H11.95v-.433h5.174s2.868-.324 2.868-2.975c0-2.65-2.502-2.81-2.502-2.81l-1.493.002v2.115c0 2.52-2.084 2.484-2.084 2.484h-4.168s-2.052.063-2.052 2.435c0 2.37 2.316 2.535 2.316 2.535l2.043-.026zm-3.19-1.353a.627.627 0 1 1 0-1.254.627.627 0 0 1 0 1.254z" />
            </svg>
          )
        },
        {
          name: 'Java',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="skill-icon">
              <path d="M12.923 18.06c-3.123 0-5.836-.615-5.836-1.579 0-.78 1.953-1.34 4.095-1.488l.582-.041.52.058c1.378.156 2.595.446 3.426.815.116.05.215.102.298.157.65.437-1.127 2.078-3.085 2.078zm6.541-1.074c-.058-.041-.124-.082-.19-.123-.628-.388-1.595-.71-2.802-.958l-.512-.107.496-.157c1.785-.562 2.768-1.223 2.768-1.859 0-1.033-2.487-1.768-5.785-1.768-3.562 0-6.19.868-6.19 1.959 0 .611 1.008 1.223 2.752 1.768l.496.157-.512.107c-1.892.38-3.413.91-4.156 1.48-.686.529-.868 1.157-.512 1.76 1.058 1.785 5.537 2.38 9.992 2.38 3.562 0 6.645-.612 8.049-1.636 1.554-1.132.81-2.612-.284-3.003zm-11.455-8.47c1.074.843 3.562 1.438 5.537 1.438 2.05 0 2.925-.397 2.925-1.074 0-.819-2.008-.95-3.835-1.133-1.752-.181-4.992-.47-4.992-2.181 0-1.728 3.23-2.587 6.446-2.587 1.587 0 3.025.215 4.091.595l.454.165-.33.562-.438-.132a8.6 8.6 0 0 0-3.694-.52c-2.413 0-4.091.562-4.091 1.215 0 .67 1.752.81 3.562.975 2.149.2 5.257.48 5.257 2.322 0 1.951-3.174 2.852-6.521 2.852-2.48 0-4.578-.455-5.835-1.28l-.487-.323.33-.562.43.149zm3.504 5.24h2.15v2.15h-2.15z" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'frontend',
      label: 'Frontend',
      skills: [
        {
          name: 'React.js',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon">
              <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
              <path d="M12 21a9 3 0 0 0 9-3 9 3 0 0 0-9-3 9 3 0 0 0-9 3 9 3 0 0 0 9 3Z" transform="rotate(30 12 12)"></path>
              <path d="M12 21a9 3 0 0 0 9-3 9 3 0 0 0-9-3 9 3 0 0 0-9 3 9 3 0 0 0 9 3Z" transform="rotate(90 12 12)"></path>
              <path d="M12 21a9 3 0 0 0 9-3 9 3 0 0 0-9-3 9 3 0 0 0-9 3 9 3 0 0 0 9 3Z" transform="rotate(150 12 12)"></path>
            </svg>
          )
        },
        {
          name: 'HTML5',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="skill-icon">
              <path d="M1.5 22L0 2h24l-1.5 20L12 24 1.5 22zm19.078-17.682H3.422l1.084 14.228L12 20.732l7.494-2.186 1.084-14.228zm-3.87 3.272l-.224 2.872H9.722l.142 1.83h6.46l-.426 5.564L12 18.995l-3.9-1.077-.246-3.23H10.8l.128 1.63L12 16.63l1.072-.288.168-2.202H6.962l-.462-6.03h11.23z" />
            </svg>
          )
        },
        {
          name: 'CSS3',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="skill-icon">
              <path d="M1.5 22L0 2h24l-1.5 20L12 24 1.5 22zm19.078-17.682H3.422l1.084 14.228L12 20.732l7.494-2.186 1.084-14.228zm-3.85 5.586H9.988l.142 1.83h6.6l-.426 5.564L12 18.995l-3.9-1.077-.246-3.23h2.984l.128 1.63L12 16.63l1.072-.288.168-2.202H7.202l-.128-1.63h8.342l.142-1.83H6.932l-.462-6.03h13.914l-.454 4.542z" />
            </svg>
          )
        },
        {
          name: 'Responsive UI/UX',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          )
        }
      ]
    },
    {
      id: 'backend',
      label: 'Backend & DB',
      skills: [
        {
          name: 'Node.js',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="skill-icon">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm7.5 14.1l-7.5 4.15-7.5-4.15V8.9l7.5-4.15 7.5 4.15v7.2zM12 7.65L7.2 10.3v5.4l4.8 2.65 4.8-2.65V10.3L12 7.65zm3.6 5.25v2.4c0 .33-.27.6-.6.6H9c-.33 0-.6-.27-.6-.6v-3.6c0-.33.27-.6.6-.6h5.4c.33 0 .6.27.6.6v1.2z" />
            </svg>
          )
        },
        {
          name: 'Express.js',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
              <polyline points="13 2 13 9 20 9"></polyline>
            </svg>
          )
        },
        {
          name: 'MySQL',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="skill-icon">
              <path d="M12 2c5.523 0 10 2.239 10 5s-4.477 5-10 5S2 9.761 2 7s4.477-5 10-5zm0 10c5.523 0 10 2.239 10 5s-4.477 5-10 5S2 19.761 2 17s4.477-5 10-5z" />
            </svg>
          )
        },
        {
          name: 'MERN Stack',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skill-icon">
              <path d="M4 10h16M4 14h16M4 6h16M4 18h16" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'tools',
      label: 'Tools & Concepts',
      skills: [
        {
          name: 'Git & GitHub',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="skill-icon">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          )
        },
        {
          name: 'VS Code',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="skill-icon">
              <path d="M23.984 6.742L20.206.505c-.092-.152-.25-.25-.43-.255a.512.512 0 0 0-.482.28L12 9.083l-7.294-8.55a.512.512 0 0 0-.482-.28c-.18.005-.338.103-.43.255L.016 6.742a.514.514 0 0 0 .041.597L11.52 23.69c.123.189.336.31.564.31s.44-.121.563-.31L23.943 7.34a.514.514 0 0 0 .041-.597zm-11.984 14.1l-9.15-13.43 3.82-1.91 5.33 6.64v8.7zm0-10.74L6.96 4.39l3.52-1.76 1.52 7.47zm9.15-2.69l-9.15 13.43v-8.7l5.33-6.64 3.82 1.91z" />
            </svg>
          )
        },
        {
          name: 'REST APIs',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
          )
        },
        {
          name: 'OOP & DS',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          )
        }
      ]
    }
  ];

  const currentSkills = categories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills">
      <div className="section skills-container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <p className="section-subtitle">
          These are the key programming languages, frontend and backend technologies, and tools that I specialize in.
        </p>

        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {currentSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              {skill.icon}
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
