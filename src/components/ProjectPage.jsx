import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';

function ProjectPage() {
  return (
    <div className="project-page">
      <div className="project-page-container">
        <Link to="/" className="project-page-back-button">
          ← Back to Portfolio
        </Link>
        
        <header className="project-page-header">
          <h1 className="project-page-title">Distributed File System</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-description-text">
              <p>
                A robust distributed file system that enables multiple clients to seamlessly share and access files across a network. 
                This system is designed with fault tolerance and consistency as core principles, implementing the Gifford algorithm 
                for maintaining data consistency across distributed nodes.
              </p>
              <p>
                The system supports concurrent file operations from multiple clients with proper synchronization, provides fault 
                tolerance through data replication and node recovery mechanisms, and ensures data integrity even during network 
                partitions and node failures.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Distributed Systems</span>
              <span className="project-page-tech-badge">Gifford Algorithm</span>
              <span className="project-page-tech-badge">File Systems</span>
              <span className="project-page-tech-badge">Socket Programming</span>
              <span className="project-page-tech-badge">Network Communication</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/distributed-file-system" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-page-github-button"
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