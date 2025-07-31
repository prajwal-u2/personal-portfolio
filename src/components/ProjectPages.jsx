import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './ProjectPages.css';

// Distributed File System Project Page
export function ProjectPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <Link to="/#projects" className="project-page-back-button">
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

// DHT Federated ML System Project Page
export function DHTFederatedMLPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <Link to="/#projects" className="project-page-back-button">
          ← Back to Portfolio
        </Link>
        
        <header className="project-page-header">
          <h1 className="project-page-title">DHT Federated ML System</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-description-text">
              <p>
                A cutting-edge federated machine learning system that leverages a Distributed Hash Table (DHT) Chord network 
                for decentralized model training. This system enables collaborative machine learning without centralized coordination, 
                ensuring privacy preservation by keeping data localized to individual nodes.
              </p>
              <p>
                The system implements a peer-to-peer network using the Chord protocol for node discovery and communication, 
                supports various ML algorithms including neural networks and decision trees, and provides fault tolerance 
                through DHT ring maintenance and data replication.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Federated Learning</span>
              <span className="project-page-tech-badge">DHT Chord</span>
              <span className="project-page-tech-badge">P2P Networks</span>
              <span className="project-page-tech-badge">Machine Learning</span>
              <span className="project-page-tech-badge">Distributed Systems</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/dht-federated-ml-system" 
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

// Distributed ML System Project Page
export function DistributedMLPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <Link to="/#projects" className="project-page-back-button">
          ← Back to Portfolio
        </Link>
        
        <header className="project-page-header">
          <h1 className="project-page-title">Distributed ML System</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-description-text">
              <p>
                A high-performance distributed machine learning system implemented in C++ that coordinates multiple compute nodes 
                for parallel model training and validation. This system is designed for large-scale ML workloads requiring 
                significant computational resources with master-worker architecture.
              </p>
              <p>
                Features dynamic load balancing based on node capabilities, supports both synchronous and asynchronous parameter 
                updates, implements efficient memory management and vectorized operations, and provides auto-scaling capabilities 
                to add/remove nodes based on workload.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">C++</span>
              <span className="project-page-tech-badge">Machine Learning</span>
              <span className="project-page-tech-badge">Distributed Computing</span>
              <span className="project-page-tech-badge">Parallel Processing</span>
              <span className="project-page-tech-badge">GPU Computing</span>
              <span className="project-page-tech-badge">High Performance Computing</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/distributed-ml-system" 
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

// Utopia Kafka Project Page
export function UtopiaKafkaPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <Link to="/#projects" className="project-page-back-button">
          ← Back to Portfolio
        </Link>
        
        <header className="project-page-header">
          <h1 className="project-page-title">Utopia - Real-Time Analytics Pipeline</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-description-text">
              <p>
                Utopia is a comprehensive real-time analytics pipeline designed to handle high-throughput data streams and 
                provide instant insights through low-latency queries. The system combines the power of Apache Kafka for 
                data ingestion with Apache Pinot for real-time analytics and sub-second query response times.
              </p>
              <p>
                Features multi-stage data ingestion using Kafka producers and consumers, real-time data transformation and 
                enrichment pipelines, horizontal scaling capabilities for both Kafka and Pinot clusters, and comprehensive 
                metrics collection using Prometheus and Grafana for monitoring.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Apache Kafka</span>
              <span className="project-page-tech-badge">Apache Pinot</span>
              <span className="project-page-tech-badge">Real-Time Analytics</span>
              <span className="project-page-tech-badge">Data Pipeline</span>
              <span className="project-page-tech-badge">Prometheus</span>
              <span className="project-page-tech-badge">Grafana</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/utopia-kafka-project" 
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

// Text Summarization Project Page
export function TextSummarizationPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <Link to="/#projects" className="project-page-back-button">
          ← Back to Portfolio
        </Link>
        
        <header className="project-page-header">
          <h1 className="project-page-title">Text Summarization Analysis</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-description-text">
              <p>
                A comprehensive research project that conducts an in-depth comparative analysis of state-of-the-art text 
                summarization algorithms. This study evaluates the performance, efficiency, and applicability of T5, BERT, 
                and TextRank approaches across various text types and domains.
              </p>
              <p>
                The project includes ROUGE metrics evaluation for automatic assessment, human evaluation studies for summary 
                quality, performance analysis across different text lengths and domains, and novel evaluation metrics 
                considering semantic similarity and coherence with open-source implementation.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">NLP</span>
              <span className="project-page-tech-badge">BERT</span>
              <span className="project-page-tech-badge">T5</span>
              <span className="project-page-tech-badge">TextRank</span>
              <span className="project-page-tech-badge">Transformers</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/text-summarization" 
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

// Software Requirement Specification Project Page
export function SoftwareRequirementPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <Link to="/#projects" className="project-page-back-button">
          ← Back to Portfolio
        </Link>
        
        <header className="project-page-header">
          <h1 className="project-page-title">Software Requirement Specification</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-description-text">
              <p>
                A comprehensive software engineering project that demonstrates the complete software development lifecycle 
                from requirements gathering to final delivery. This project emphasizes best practices in software engineering 
                and agile development methodologies with comprehensive SRS documentation.
              </p>
              <p>
                Features development of a complete web application following industry standards, implementation using agile 
                development practices with iterative releases, detailed SRS document following IEEE 830 standards, and 
                quality assurance through automated testing and code reviews with CI/CD pipeline implementation.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">Software Engineering</span>
              <span className="project-page-tech-badge">SRS Document</span>
              <span className="project-page-tech-badge">Agile Development</span>
              <span className="project-page-tech-badge">Scrum</span>
              <span className="project-page-tech-badge">CI/CD</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/software-requirement-specification" 
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

// 5G Network Field Test Evaluation Project Page
export function FiveGNetworkPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <Link to="/#projects" className="project-page-back-button">
          ← Back to Portfolio
        </Link>
        
        <header className="project-page-header">
          <h1 className="project-page-title">5G Network Field Test Evaluation</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-description-text">
              <p>
                A comprehensive field study analyzing 5G network performance in Minneapolis, providing valuable insights 
                into real-world 5G deployment effectiveness. This research contributes to understanding 5G network behavior 
                in urban environments through systematic measurement campaigns across different areas.
              </p>
              <p>
                The study includes multiple testing scenarios covering indoor, outdoor, and mobile environments, performance 
                metrics analysis including download/upload throughput and latency, signal strength and quality indicators 
                (RSRP, RSRQ, SINR), and comprehensive coverage analysis with heat map generation for signal strength.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">5G</span>
              <span className="project-page-tech-badge">Computer Networks</span>
              <span className="project-page-tech-badge">Network Analysis</span>
              <span className="project-page-tech-badge">Field Testing</span>
              <span className="project-page-tech-badge">Data Analytics</span>
              <span className="project-page-tech-badge">Performance Monitoring</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/5G-network-field-test-evaluation" 
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

// Mininet SDN Implementation Project Page
export function MininetSDNPage() {
  useScrollToTop();
  
  return (
    <div className="project-page">
      <div className="project-page-container">
        <Link to="/#projects" className="project-page-back-button">
          ← Back to Portfolio
        </Link>
        
        <header className="project-page-header">
          <h1 className="project-page-title">Mininet SDN Implementation</h1>
        </header>

        <div className="project-page-content">
          <section className="project-page-description">
            <h2>Description</h2>
            <div className="project-page-description-text">
              <p>
                A comprehensive Software Defined Networking (SDN) implementation using Mininet for network emulation and 
                Python for controller development. This project demonstrates advanced networking concepts and programmable 
                network control with OpenFlow-based controller implementation for centralized network control.
              </p>
              <p>
                Features custom network topologies designed for different testing scenarios, Layer 2 switching with MAC 
                address learning and forwarding, Layer 3 routing with custom routing algorithms, VLAN implementation for 
                network segmentation, and comprehensive documentation for learning SDN concepts.
              </p>
            </div>
          </section>

          <section className="project-page-technologies">
            <h2>Technologies Used</h2>
            <div className="project-page-tech-grid">
              <span className="project-page-tech-badge">Python</span>
              <span className="project-page-tech-badge">SDN</span>
              <span className="project-page-tech-badge">Computer Networks</span>
              <span className="project-page-tech-badge">Mininet</span>
              <span className="project-page-tech-badge">OpenFlow</span>
              <span className="project-page-tech-badge">Network Emulation</span>
            </div>
          </section>

          <section className="project-page-actions">
            <a 
              href="https://github.com/prajwal-u2/Mininet-SDN-Implementation" 
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