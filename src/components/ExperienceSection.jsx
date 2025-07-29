import React, { useState } from 'react';

function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState('umn');

  const experiences = [
    {
      id: 'mercedes',
      title: 'Consultant',
      company: 'Mercedes-Benz Research and Development India',
      duration: 'Aug 2022 - Aug 2024',
      icon: '🚗',
      softwareEngineering: [
        'Pioneered a scalable Big Data Analytics platform by designing microservices for Azure and AWS infrastructure deployment using Python, Terraform, and Azure DevOps, reducing deployment time from 2 days to half a day.',
        'Created backend microservices using Python Azure SDK, FastAPI, and Docker to programmatically build and provision data pipelines, enabling self-service deployment and reducing turnaround time by 70%.',
        'Engineered and launched full-stack application with a C# and .NET backend, Vue.js frontend, and Azure SQL database, streamlining business workflows and improving efficiency by 40% through clean API design and modular architecture.',
        'Collaborated using software engineering best practices including Git-based version control, peer code reviews, CI/CD, and delivery via SAFe, contributing to 35+ sprint cycles, improving team velocity by 25%.'
      ],
      dataEngineering: [
        'Orchestrated 200+ automated ETL pipelines using 20+ connectors including APIs in Azure Data Factory to ingest, clean, and transform SQL and NoSQL data, increasing data availability by 90% using PySpark, Pandas, and NumPy.',
        'Optimized batch and streaming data pipelines using Azure Event Hubs, Kafka, Spark, and Databricks, increasing ingestion speed by 35% and enabling real-time data processing.',
        'Diverged analytics driven Data Observability solution aligned with Gartner\'s principles (Content, Infrastructure, Flow, Usage, Cost), standardizing data platforms and reducing MTTR with projected savings of 61.5M annually.',
        'Rearchitected on premise SSIS package and Airflow DAGs using Azure Data Factory and Databricks during cloud migration.'
      ]
    },
    {
      id: 'ideas',
      title: 'Cloud Engineer Intern',
      company: 'IDeaS',
      duration: 'May 2025 - Aug 2025',
      icon: '☁️',
      description: 'Focused on cloud infrastructure automation and CI/CD pipeline optimization. Developed containerized solutions and implemented DevOps best practices to improve deployment efficiency and system reliability.',
      achievements: [
        'Standardized Dev Containers using Docker and Shell scripts to embed reusable tools, tripling setup speed and amplifying automation with production.',
        'Orchestrated YAML-based CI/CD pipelines using GitHub Actions to automate Docker builds, semantic versioning, and release workflows, and auto-publish docs to Confluence, cutting manual overhead by 80%.',
        'Designed an AI Agent in Python that integrated GitHub Copilot with internal Terraform modules using GitHub API to generate Terraform boilerplate code tailored to team workflows, cutting manual coding time by 90%.',
        'Deployed the MCP server on AWS using ECS, API Gateway, Load Balancer, IAM policies and Redis to build a robust, cloud-native solution, enabling secure, low-latency code assistance and handling over 100 AI-driven automation requests daily.'
      ]
    },
    {
      id: 'umn',
      title: 'Research Assistant',
      company: 'University of Minnesota',
      duration: 'Jan 2025 - May 2025',
      icon: '🎓',
      description: 'Developed ML-powered systems and data pipelines. Created FASTER, an LLM-powered system using Python, OpenAI APIs, and NLP to identify column semantics and generate reusable metadata. Built data engineering solutions and real-world ontology systems.',
      achievements: [
        'Created FASTER, an LLM-powered system using Python, OpenAI APIs, and NLP to identify column semantics and generate reusable metadata Semantic Types (RSTs), cutting deployment by 40% and boosting column consistency by 35%.',
        'Architected a multi-stage semantic pipeline to extract cross-table meaning and build a real-world ontology, enabling automated data normalization, validation, and transformation, improving interoperability by 30% and boosting data prep by 60%.'
      ]
    },
    {
      id: 'BETSOL',
      title: 'Software Engineer Intern',
      company: 'Betsol',
      duration: 'Jan 2022 - May 2022',
      icon: '⚙️',
      description: 'Developed production-ready data migration solutions and multi-tenant applications. Focused on secure data transfer, backup optimization, and scalable client-server architecture implementation.',
      achievements: [
        'Developed a production-ready data migration POC using Robotic, Rclone, and Go, improving security and efficiency by 40% and reducing backup cost by 25% through optimized local-to-cloud transfer.',
        'Investigated and coded secure, fault-tolerant client-server apps using Python socket programming with TCP helps enabling, enabling geo-typical features.'
      ]
    }
  ];

  const activeExp = experiences.find(exp => exp.id === activeExperience);
  const activeIndex = experiences.findIndex(exp => exp.id === activeExperience);

  return (
    <div className="experience-content">
      <div className="experience-sidebar">
        {experiences.map((exp) => (
          <div 
            key={exp.id}
            className={`experience-item ${activeExperience === exp.id ? 'active' : ''}`}
            onClick={() => setActiveExperience(exp.id)}
          >
            <div className="experience-icon">
              <span>{exp.icon}</span>
            </div>
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
            
            {activeExp.achievements && activeExp.achievements.length > 0 && (
              <>
                <h4 className="detail-achievements">🚀 Key Achievements</h4>
                <ul className="detail-list">
                  {activeExp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
            
            {activeExp.softwareEngineering && activeExp.softwareEngineering.length > 0 && (
              <>
                <h4 className="detail-achievements">💻 Software Engineering</h4>
                <ul className="detail-list">
                  {activeExp.softwareEngineering.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
            
            {activeExp.dataEngineering && activeExp.dataEngineering.length > 0 && (
              <>
                <h4 className="detail-achievements">📊 Data Engineering</h4>
                <ul className="detail-list">
                  {activeExp.dataEngineering.map((achievement, index) => (
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