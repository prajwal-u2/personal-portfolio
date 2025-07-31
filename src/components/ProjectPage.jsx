import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './ProjectPage.css';

function ProjectPage() {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-page">
        <div className="container">
          <h1>Project Not Found</h1>
          <Link to="/" className="back-button">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="project-container">
        <Link to="/" className="back-button">
          ← Back to Portfolio
        </Link>
        
        <header className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-subtitle">{project.shortDescription}</p>
        </header>

        <div className="project-content">
          <section className="project-description">
            <h2>Project Overview</h2>
            <div className="description-text">
              <p>{project.shortDescription}</p>
            </div>
          </section>

          <section className="project-technologies">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="project-actions">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
            >
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage; 