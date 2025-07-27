import React, { useState } from 'react';

function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState('mercedes');

  const experiences = [
    {
      id: 'mercedes',
      title: 'Software Development Engineer',
      company: 'Mercedes-Benz Research and Development India',
      duration: 'Aug 2022 - Aug 2024',
      description: 'Built and maintained enterprise-scale applications and platforms for internal app management. Developed full-stack solutions using React, TypeScript, Spring Boot, and cloud technologies to streamline app approval processes and improve operational efficiency.',
      achievements: [
        'Built React + TypeScript UI for MASSP, a unified App Store approval platform used by 500+ internal apps, with 95%+ Jest unit test coverage.',
        'Integrated Black Duck, SecHub, and Coverity scanners for automated reviews, cutting manual effort by 60% across 200+ apps/month.',
        'Developed Spring Boot REST APIs handling 10K+ daily requests across core services and security integrations.',
        'Migrated 2M+ records from PostgreSQL to MongoDB, improving query performance by 40% and reducing latency by 300ms.',
        'Managed deployment pipelines and post-migration rollout across multi-cloud environments with zero downtime.',
        'Implemented Grafana dashboards to track app health and usage, reducing incident response time by 40%.',
        'Designed and deployed end-to-end ML solutions for text classification and time series forecasting on JIRA datasets, improving issue categorization accuracy by 35% and reducing manual effort by 60%.'
      ]
    },
    {
      id: 'ideas',
      title: 'Software Engineer Intern',
      company: 'Indiana Business Research Center',
      duration: 'May 2025 - Ongoing',
      description: '[Content to be provided later]',
      achievements: []
    },
    {
      id: 'ibm',
      title: 'Machine Learning Intern',
      company: 'IBM India',
      duration: 'Jan 2022 - Jun 2022',
      description: '[Content to be provided later]',
      achievements: []
    },
    {
      id: 'mooc',
      title: 'Software Engineer Intern',
      company: 'MOOC India',
      duration: 'Mar 2021 - May 2021',
      description: '[Content to be provided later]',
      achievements: []
    }
  ];

  const activeExp = experiences.find(exp => exp.id === activeExperience);

  return (
    <div className="experience-content">
      <div className="experience-sidebar">
        {experiences.map((exp) => (
          <div 
            key={exp.id}
            className={`experience-item ${activeExperience === exp.id ? 'active' : ''}`}
            onClick={() => setActiveExperience(exp.id)}
          >
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-duration">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="experience-details">
        {activeExp && (
          <div className="experience-detail active">
            <h3 className="detail-title">{activeExp.title}</h3>
            <p className="detail-company">{activeExp.company} | {activeExp.duration}</p>
            <p className="detail-description">{activeExp.description}</p>
            {activeExp.achievements.length > 0 && (
              <>
                <h4 className="detail-achievements">🚀 Key Achievements</h4>
                <ul className="detail-list">
                  {activeExp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceSection; 