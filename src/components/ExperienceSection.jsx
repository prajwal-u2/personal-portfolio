import React, { useState } from 'react';

function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState('ideas');

  const experiences = [
    {
      id: 'ideas',
      title: 'Cloud Engineer Intern',
      company: 'IDeaS',
      location: 'Minneapolis, United States of America',
      duration: 'May 2025 – Present',
      icon: '☁️',
      achievements: [
        'Standardized Dev Containers using Docker, Shell scripts, and GitHub Actions to enable reproducible environments in VS Code, cutting setup time for Java and Spring Boot projects from two days to minutes.',
        'Built a RAG–based Model Context Protocol (MCP) server in Python and Copilot, integrating GitHub API and Terraform modules to deliver Copilot-style infrastructure recommendations and automate 90% of manual infrastructure coding.',
        'Deployed an AI agent on AWS (ECS, API Gateway, Redis, IAM, Load Balancer) with SigV4/Entra authentication and GitHub Actions–based CI/CD, serving 100+ low-latency requests (100 ms) daily and enabled full observability through Datadog.',
        'Architected a self-service Datadog identity and team provisioning using Python on AWS Lambda and Step Functions with SCIM and SAML role mapping centralized in Azure Entra ID, deployed via Terraform reducing manual IAM effort by 85%.'
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
      title: 'Software and Data Engineer',
      company: 'Mercedes-Benz Research and Development India',
      location: 'Bengaluru, Karnataka, India',
      duration: 'Aug 2022 - Aug 2024 · 2 yrs 1 mo',
      icon: '🚗',
      softwareEngineering: [
        'Led development of a customer-facing full-stack app (C#, .NET, Vue.js, Azure SQL) that automated pipeline deployment, cutting turnaround time by 40%.',
        'Built a React-Python-PostgreSQL app consolidating Tableau and Power BI dashboards across 5+ business units, improving decision-making speed by 30%.',
        'Delivered 20+ RESTful APIs in FastAPI and C# with Swagger and Postman, accelerating system integration and reducing developer onboarding time.',
        'Championed automated testing with PyTest, MSTest, achieving 100% coverage, cutting production defects and strengthening release reliability.',
        'Drove delivery across 40+ Agile SAFe sprints as a team lead, ensuring on-time releases and promoting software engineering best practices.'
      ],
      cloudDevOps: [
        'Automated infrastructure provisioning with Pulumi, Terraform, Python IaC, and Azure DevOps CI/CD, reducing deployment effort by half.',
        'Implemented APIs to trigger Azure DevOps pipelines, enabling end-to-end infrastructure automation and minimizing manual effort.',
        'Designed cloud-native data solutions across AWS S3, Azure Blob, and SQL warehouses, strengthening data governance and improving query performance for regulated datasets.'
      ],
      dataEngineering: [
        'Built and orchestrated 200+ batch & streaming pipelines in Azure Data Factory, Databricks, and Event Hubs with 20+ connectors (APIs, SQL, NoSQL, Kafka), integrating on-prem and cloud sources into the company\'s largest data lake and boosting data availability to 100%.',
        'Optimized large-scale transformations with PySpark, SparkSQL, and Pandas, reducing latency by 40% and improving analytics throughput by two folds, while applying Snowflake schema modeling to enhance Power BI performance.',
        'Modernized legacy ETL by re-architecting SSIS & Airflow DAGs into Azure-native pipelines, cutting maintenance overhead and accelerating cloud migration timelines.',
        'Developed Power BI dashboard to derive and visualize meaningful KPIs for the management based on gathered Business data.'
      ],
      dataQualityGovernance: [
        'Pioneered a FinOps tagging framework across AWS + Azure, cutting cloud costs and streamlining resource governance across multiple teams.',
        'Delivered a Gartner-aligned Data Observability platform (content, infra, flow, usage, cost), enabling proactive issue detection, reducing MTTF, and saving €1.5M annually.',
        'Developed a Python-based duplication detection tool scanning AWS + Azure data lakes, eliminating 10,000+ redundant records and improving data reliability while reducing storage costs.'
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
                <h4 className="detail-achievements">Software Engineering</h4>
                <ul className="detail-list">
                  {activeExp.softwareEngineering.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
            
            {activeExp.dataEngineering && activeExp.dataEngineering.length > 0 && (
              <>
                <h4 className="detail-achievements">Data Engineering</h4>
                <ul className="detail-list">
                  {activeExp.dataEngineering.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
            
            {activeExp.cloudDevOps && activeExp.cloudDevOps.length > 0 && (
              <>
                <h4 className="detail-achievements">Cloud & DevOps</h4>
                <ul className="detail-list">
                  {activeExp.cloudDevOps.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
            
            {activeExp.dataQualityGovernance && activeExp.dataQualityGovernance.length > 0 && (
              <>
                <h4 className="detail-achievements">Data Quality, Governance & Cost Optimization</h4>
                <ul className="detail-list">
                  {activeExp.dataQualityGovernance.map((achievement, index) => (
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