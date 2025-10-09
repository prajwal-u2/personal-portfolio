import React, { useState } from 'react';

function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState('ideas');

  const experiences = [
    {
      id: 'ideas',
      title: 'Cloud Engineer Intern',
      company: 'IDeaS',
      location: 'Minneapolis, MN',
      duration: 'May 2025 - Dec 2025',
      icon: '☁️',
      achievements: [
        'Built an AI agent in Python that integrated GitHub Copilot with internal Terraform modules via the GitHub API, auto-generating custom infrastructure code and reducing manual IaC effort by 90%, significantly accelerating adoption and engineering velocity.',
        'Deployed a production-grade custom AI agent based on MCP server on AWS using ECS, API Gateway, Route 53, and IAM roles, using Terraform, enabling secure, scalable AI-powered code assistance.',
        'Integrated Redis caching and load balancing to support over 100 real-time code generation requests daily for MCP server with low latency.',
        'Extended Datadog connector to support MCP servers metrics, increasing observability by 80%.',
        'Standardized Dev Containers using Docker and Shell scripts to embed reusable internal tools, improving developer onboarding speed by 7x.',
        'Automated environment setup through containerized workflows, significantly reducing setup errors and improving consistency across deployments.',
        'Orchestrated CI/CD pipelines using GitHub Actions and YAML to automate Docker builds and semantic versioning, reducing manual effort by 80%.'
      ]
    },
    {
      id: 'umn',
      title: 'Research Assistant - Databases and AI',
      company: 'University of Minnesota',
      location: 'Minneapolis, MN',
      duration: 'Jan 2025 - May 2025',
      icon: '🎓',
      achievements: [
        'Developed FASTER, an LLM-powered metadata engine in Python using OpenAI GPT-4o, improving schema consistency by 35% across 9 datasets.',
        'Inferred semantic meaning from raw tabular data using LLMs and word embeddings, enabling automated type classification across products.',
        'Auto-generated Functional Semantic Type (FST) class templates and validation logic using LLMs, achieving 90%+ cross-type casting accuracy across diverse data products.',
        'Clustered semantic types with DBSCAN, KMeans clustering on word embedding models (FastText, MiniLM, and OpenAI), to create a semantic forest ontology with 1,500+ nodes, reducing query latency by 50%.',
        'Aggregated semantics from 200+ tables using Ray, Pandas, and NumPy, eliminating 90%+ duplicated FSTs via multi-stage refinement.',
        'Boosted column joinability and standardization by 4 folds using Python-based casting (e.g., UTC conversion), and improved type name accuracy to 0.88 cosine similarity.'
      ]
    },
    {
      id: 'mercedes',
      title: 'Data and Software Engineer',
      company: 'Mercedes-Benz Research and Development India',
      location: 'Bangalore, India',
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
        'Delivered analytics driven Data Observability solution aligned with Gartner\'s principles (Content, Infrastructure, Flow, Usage, Cost), standardizing data platforms and reducing MTTR with projected savings of 1.5M Euros annually.',
        'Rearchitected on premise SSIS package and Airflow DAGs using Azure Data Factory and Databricks during cloud migration.'
      ]
    },
    {
      id: 'BETSOL',
      title: 'Software Engineer Intern',
      company: 'BETSOL',
      location: 'Bangalore, India',
      duration: 'Jan 2022 - May 2022',
      icon: '⚙️',
      achievements: [
        'Engineered a secure, production-grade data migration plan using Rclone and Go, improving transfer efficiency by 40% and cutting backup costs by 25%.',
        'Built a machine snapshot and restoration system with Restic, enabling seamless recovery of developer laptops and reducing onboarding/setup time.',
        'Integrated Rclone-based automated backup workflows into the existing product, enabling enterprise-scale backups to Wasabi cloud as a validated PoC.',
        'Developed Peer-to-Peer, fault-tolerant applications using Python TCP sockets, leveraging TCP hole punching mechanism.',
        'Reduced the dependency on centralized servers by 80% through peer-to-peer data transfer and communication.'
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
              <p className="experience-location">{exp.location}</p>
              <p className="experience-duration">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="experience-details">
        {activeExp && (
          <div className="experience-detail active">
            <h3 className="detail-title">{activeExp.title}</h3>
            <p className="detail-company">{activeExp.company} | {activeExp.location} | {activeExp.duration}</p>
            <p className="detail-description">{activeExp.description}</p>
            
            {activeExp.achievements && activeExp.achievements.length > 0 && (
              <>
                <h4 className="detail-achievements">Key Achievements</h4>
                <ul className="detail-list">
                  {activeExp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
            
            {activeExp.softwareEngineering && activeExp.softwareEngineering.length > 0 && (
              <>
                <h4 className="detail-achievements">Software Engineering Achievements</h4>
                <ul className="detail-list">
                  {activeExp.softwareEngineering.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
            
            {activeExp.dataEngineering && activeExp.dataEngineering.length > 0 && (
              <>
                <h4 className="detail-achievements">Data Engineering Achievements</h4>
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