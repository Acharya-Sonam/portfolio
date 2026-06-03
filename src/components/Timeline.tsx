import React from 'react';

type TimelineItem = {
  type: 'education' | 'experience';
  title: string;
  institution: string;
  period: string;
  desc: string | string[];
};

export const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      type: 'experience',
      title: 'Account Manager',
      institution: 'Acharya Traders, Damak',
      period: '2025 – Present',
      desc: [
        'Managed day-to-day financial transactions and conducted detailed auditing checks.',
        'Prepared comprehensive financial reports, balance sheets, and transaction summaries.',
        'Ensured complete accuracy in business ledgers and client accounts.'
      ]
    },
    {
      type: 'education',
      title: 'BSc. (Hons) Computing',
      institution: 'Itahari International College (London Metropolitan University)',
      period: '2024 – 2026',
      desc: 'Focusing on advanced software engineering modules, database design, web application development, algorithms, and computing fundamentals.'
    },
    {
      type: 'experience',
      title: 'Receptionist & Exam Invigilator',
      institution: 'Saral Shikshya Entrance Preparation Institute, Kathmandu',
      period: '2024 (3 Months)',
      desc: [
        'Managed front-desk operations, handled customer inquiries, and coordinated student registrations.',
        'Assisted in examination logistics, schedule coordination, and invigilation.',
        'Maintained office records, administrative files, and provided general support.'
      ]
    },
    {
      type: 'education',
      title: '+2 in Science',
      institution: 'Siddhartha Secondary School (NEB)',
      period: '2023',
      desc: 'Completed secondary education with a major in Physics, Chemistry, and Mathematics, building a strong analytical foundation.'
    }
  ];

  return (
    <section id="experience">
      <div className="section">
        <h2 className="section-title">My <span>Journey</span></h2>
        <p className="section-subtitle">
          A summary of my education and work experience detailing my professional development path.
        </p>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.title}</h3>
                    <div className="timeline-institution">{item.institution}</div>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                
                {Array.isArray(item.desc) ? (
                  <ul className="timeline-desc">
                    {item.desc.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="timeline-desc">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
