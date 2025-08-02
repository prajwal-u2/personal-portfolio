import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedText from './components/AnimatedText';
import ExperienceSection from './components/ExperienceSection';
import { 
  ProjectPage, 
  DHTFederatedMLPage, 
  DistributedMLPage, 
  UtopiaKafkaPage, 
  TextSummarizationPage, 
  SoftwareRequirementPage, 
  FiveGNetworkPage, 
  MininetSDNPage 
} from './components/ProjectPages';
import homePageIllustration from './assets/images/home_page_illustration.png';
import umnLogo from './assets/images/umn_logo.png';
import revaLogo from './assets/images/reva_logo.png';
import './App.css';

function HomePage() {
// function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        {/* Home - Blue */}
        <section id="home" className="home-section">
          <div className="home-content">
            <div className="home-left">
              <div className="intro-text">
                <h1><span style={{fontSize: '0.75em'}}>Hey, I am</span> <br />Prajwal Umesha.</h1>
                <h2 className="role-text">
                  I am a <AnimatedText />
                </h2>
                <p className="statement">
                  I speak backend, think cloud-native, breathe data — and build for AI
                </p>
                
                <div className="social-icons">
                  <a href="mailto:umesh006@umn.edu" className="social-icon" aria-label="Email">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/prajwal-umesha/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/prajwal-u2" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-right">
              <img 
                src={homePageIllustration} 
                alt="Developer illustration" 
                className="home-image"
              />
            </div>
          </div>
        </section>
        
        {/* About - Black */}
        <section id="about" className="about-section">
          <header className="section-header">
            <h2>About Me</h2>
            <p className="about">
              As a Cloud, Data, and Software Engineer, I specialize in building scalable, high-impact systems that bridge infrastructure, data, and intelligent automation. With industry experience at Mercedes-Benz R&D and IDeaS, I've architected cloud-native platforms across AWS and Azure, automated DevOps with GitHub Actions and Terraform, and delivered real-time data pipelines using Kafka, Databricks, and Spark. My work combines pragmatic engineering with clean design, whether deploying AI-assisted developer tools or standardizing ETL pipelines that serve 100+ workflows daily.
            </p>
            <p className="about">
              Driven by curiosity and precision, I've also explored the frontier of LLM powered systems, developing tools like FASTER for semantic data modeling and building distributed systems for federated learning and fault-tolerant storage. I approach every project with a systems thinker's mindset: clean APIs, reliable automation, and data that moves with purpose. If you're looking for an engineer who blends reliability with innovation, and turns complexity into clarity. <b>Let's connect!</b>  and explore how we can turn challenges into opportunities.
            </p>
          </header>
        </section>

        {/* Education - Blue */}
        <section id="education" className="education-section">
          <header className="section-header">
            <h2>Education</h2>
            <div className="education-content">
              <div className="education-item">
                <div className="education-icon">
                  {/* University of Minnesota icon */}
                  <div className="university-icon umn-icon">
                    <img src={umnLogo} alt="University of Minnesota" className="university-logo umn-logo" />
                  </div>
                  <div className="university-name-location">
                  <p className="university-name"><span className="no-break">University of</span> Minnesota, <span className="no-break">Twin Cities</span></p>
                  <p className="university-location">Minneapolis, Minnesota, USA</p>
                  </div>
                </div>
                <div className="education-details">
                  <h3 className="degree">Master of Science in Computer Science</h3>
                  <div className="courses">
                    <div className="semester">
                      <h4 className="semester-title">Fall 2024 Courses:</h4>
                      <ul className="course-list">
                        <li>CS 5511 - Artificial Intelligence I</li>
                        <li>CS 5211 - Data Communications and Computer Networks</li>
                        <li>CS 5801 - Software Engineering I</li>
                      </ul>
                    </div>
                    <div className="semester">
                      <h4 className="semester-title">Spring 2025 Courses:</h4>
                      <ul className="course-list">
                        <li>CS 5105 - Distributed Systems</li>
                        <li>CS 5521 - Machine Learning Fundamentals</li>
                        <li>SE 5709 - Event-Driven Architecture & Real-time Data Processing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="education-meta">
                    <span className="gpa">CGPA: 4/4</span>
                    <span className="duration">Sep 2024 – May 2026</span>
                  </div>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-icon">
                  {/* REVA University icon */}
                  <div className="university-icon reva-icon">
                    {/* <img src="https://cdn.brandfetch.io/idOToV47gT/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1750782212661" alt="REVA University" className="university-logo" /> */}
                                         <img src={revaLogo} alt="REVA University" className="university-logo reva-logo" />
                  </div>
                  <div className="university-name-location">
                  <p className="university-name">REVA University</p>
                  <p className="university-location">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
                <div className="education-details">
                  <h3 className="degree">Bachelor of Technology in Computer Science</h3>
                  <div className="courses">
                    <div className="semester">
                      <h4 className="semester-title">Key Courses:</h4>
                      <ul className="course-list">
                        <li>Data Structure and Algorithms</li>
                        <li>Cloud Computing and Big Data</li>
                        <li>Data Mining and Warehousing</li>
                        <li>Cryptography and Network Security</li>
                        <li>Web Application Development</li>
                      </ul>
                    </div>
                  </div>
                  <div className="education-meta">
                    <span className="gpa">CGPA: 9.6/10</span>
                    <span className="duration">Aug 2018 – Jan 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </section>

        {/* Experience - White */}
        <section id="experience" className="experience-section">
          <header className="section-header">
            <h2>Experience</h2>
            <ExperienceSection />
          </header>
        </section>

        {/* Projects - Blue */}
        <section id="projects" className="projects-section">
          <header className="section-header">
            <h2>Projects</h2>
          </header>
          
          <div className="projects-container">
            {/* First Row - 3 cards */}
            <div className="projects-row">
              <div className="project-card">
                <h3 className="project-title">Distributed File System</h3>
                <p className="project-description">A distributed file storage system that enables multiple clients to seamlessly share, read, and write files with guaranteed consistency and fault tolerance using quorum-based coordination.</p>
                <div className="project-technologies">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Distributed Systems</span>
                  <span className="tech-tag">Gifford Algorithm</span>
                  <span className="tech-tag">File Systems</span>
                </div>
                <Link to="/projects/distributed-file-system" className="project-button">View Project</Link>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">DHT Federated ML System</h3>
                <p className="project-description">Federated machine learning system with a network of nodes capable of performing ML tasks using a decentralized peer-to-peer DHT Chord network.</p>
                <div className="project-technologies">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Federated Machine Learning</span>
                  <span className="tech-tag">ML Infrastructure</span>
                  <span className="tech-tag">P2P Networks</span>
                </div>
                <Link to="/projects/dht-federated-ml-system" className="project-button">View Project</Link>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">Distributed ML System</h3>
                <p className="project-description">Distributed system of compute nodes managed by a coordinator to train and validate data for machine learning models with high performance and scalability.</p>
                <div className="project-technologies">
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">Parallel Processing</span>
                  <span className="tech-tag">Distributed Computing</span>
                  <span className="tech-tag">RPC</span>
                </div>
                <Link to="/projects/distributed-ml-system" className="project-button">View Project</Link>
              </div>
            </div>
            
            {/* Second Row - 3 cards */}
            <div className="projects-row">
              <div className="project-card">
                <h3 className="project-title">Utopia - Real-Time Analytics Pipeline</h3>
                <p className="project-description">Real-time analytics pipeline using Apache Kafka for data ingestion and Apache Pinot for low-latency analytical queries on streaming data.</p>
                <div className="project-technologies">
                  <span className="tech-tag">Data Streaming</span>
                  <span className="tech-tag">Apache Kafka</span>
                  <span className="tech-tag">Apache Pinot</span>
                  <span className="tech-tag">Real-Time Analytics</span>
                </div>
                <Link to="/projects/utopia-kafka-project" className="project-button">View Project</Link>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">Text Summarization Analysis</h3>
                <p className="project-description">Comparative analysis of text summarization algorithms—T5, BERT, and TextRank—evaluating performance across diverse datasets for both long and short summaries.</p>
                <div className="project-technologies">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">BERT</span>
                  <span className="tech-tag">T5</span>
                  <span className="tech-tag">Artificial Intelligence</span>
                  <span className="tech-tag">TextRank</span>
                </div>
                <Link to="/projects/text-summarization" className="project-button">View Project</Link>
              </div>

              <div className="project-card">
                <h3 className="project-title">Software Requirement Specification</h3>
                <p className="project-description">Software engineering academic project to prepare SRS document and delivery of code using agile development methodologies and best practices.</p>
                <div className="project-technologies">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Software Engineering</span>
                  <span className="tech-tag">SRS Document</span>
                  <span className="tech-tag">Agile Development</span>
                </div>
                <Link to="/projects/software-requirement-specification" className="project-button">View Project</Link>
              </div>
            </div>

            {/* Third Row - 2 cards */}
            <div className="projects-row">
              <div className="project-card">
                <h3 className="project-title">5G Network Field Test Evaluation</h3>
                <p className="project-description">Field testing for 5G network in Minneapolis and its evaluation, analyzing network performance, latency, and coverage patterns in real-world scenarios.</p>
                <div className="project-technologies">
                  <span className="tech-tag">5G</span>
                  <span className="tech-tag">Computer Networks</span>
                  <span className="tech-tag">Network Analysis</span>
                  <span className="tech-tag">Field Testing</span>
                </div>
                <Link to="/projects/5g-network-field-test-evaluation" className="project-button">View Project</Link>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">Mininet SDN Implementation</h3>
                <p className="project-description">Implementation of Software Defined Networks using Mininet and Python. Emulated the behavior of Layer 2 and Layer 3 protocols in network topology.</p>
                <div className="project-technologies">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">SDN</span>
                  <span className="tech-tag">Computer Networks</span>
                  <span className="tech-tag">Mininet</span>
                </div>
                <Link to="/projects/mininet-sdn-implementation" className="project-button">View Project</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills - Black */}
        <section id="skills" className="skills-section">
          <header className="section-header">
            <h2>Skills</h2>
          </header>
          
          <div className="skills-container">
            {/* Programming & Scripting */}
            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🔧</span>
                <h3>Programming & Scripting</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python" className="skill-icon" />
                  <span className="skill-name">Python</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" alt="Java" className="skill-icon" />
                  <span className="skill-name">Java</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" alt="C#" className="skill-icon" />
                  <span className="skill-name">C#</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/golang.png" alt="Golang" className="skill-icon" />
                  <span className="skill-name">Golang</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/console.png" alt="Bash" className="skill-icon" />
                  <span className="skill-name">Bash</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/terraform.png" alt="Terraform" className="skill-icon" />
                  <span className="skill-name">Terraform</span>
                </div>
              </div>
            </div>

            {/* Web & Application Development */}
            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🌐</span>
                <h3>Web & Application Development</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" className="skill-icon" />
                  <span className="skill-name">React</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/vue-js.png" alt="Vue.js" className="skill-icon" />
                  <span className="skill-name">Vue.js</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML5" className="skill-icon" />
                  <span className="skill-name">HTML5</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" className="skill-icon" />
                  <span className="skill-name">CSS3</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" className="skill-icon" />
                  <span className="skill-name">Node.js</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/spring-logo.png" alt="Spring Boot" className="skill-icon" />
                  <span className="skill-name">Spring Boot</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/fastapi.png" alt="FastAPI" className="skill-icon" />
                  <span className="skill-name">FastAPI</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/figma--v1.png" alt="Figma" className="skill-icon" />
                  <span className="skill-name">Figma</span>
                </div>
              </div>
            </div>

            {/* Databases & Storage */}
            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🗄️</span>
                <h3>Databases & Storage</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/postgreesql.png" alt="PostgreSQL" className="skill-icon" />
                  <span className="skill-name">PostgreSQL</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/microsoft-sql-server.png" alt="SQL Server" className="skill-icon" />
                  <span className="skill-name">SQL Server</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MySQL" className="skill-icon" />
                  <span className="skill-name">MySQL</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" className="skill-icon" />
                  <span className="skill-name">MongoDB</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/redis.png" alt="Redis" className="skill-icon" />
                  <span className="skill-name">Redis</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/s3.png" alt="S3" className="skill-icon" />
                  <span className="skill-name">S3</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/az_blob.png" alt="Azure Blob Storage" className="skill-icon" />
                  <span className="skill-name">Azure Blob Storage</span>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">☁️</span>
                <h3>Cloud & DevOps</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/azure-1.png" alt="Azure" className="skill-icon" />
                  <span className="skill-name">Azure</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/aws.png" alt="AWS" className="skill-icon" />
                  <span className="skill-name">AWS</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" className="skill-icon" />
                  <span className="skill-name">Git</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="GitHub Actions" className="skill-icon" />
                  <span className="skill-name">GitHub Actions</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/yaml.png" alt="YAML" className="skill-icon" />
                  <span className="skill-name">YAML</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/docker.png" alt="Docker" className="skill-icon" />
                  <span className="skill-name">Docker</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/kubernetes.png" alt="Kubernetes" className="skill-icon" />
                  <span className="skill-name">Kubernetes</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/linux--v1.png" alt="Linux" className="skill-icon" />
                  <span className="skill-name">Linux</span>
                </div>
              </div>
            </div>

            {/* Data Engineering & Analytics */}
            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">📊</span>
                <h3>Data Engineering & Analytics</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://img.icons8.com/?size=100&id=fOhLNqGJsUbJ&format=png&color=000000" alt="Kafka" className="skill-icon" />
                  <span className="skill-name">Kafka</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/adf.png" alt="Azure Data Factory" className="skill-icon" />
                  <span className="skill-name">Azure Data Factory</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/databricks.png" alt="Databricks" className="skill-icon" />
                  <span className="skill-name">Databricks</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/airflow.png" alt="Airflow" className="skill-icon" />
                  <span className="skill-name">Airflow</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/apache-spark.png" alt="PySpark" className="skill-icon" />
                  <span className="skill-name">PySpark</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/pandas.png" alt="Pandas" className="skill-icon" />
                  <span className="skill-name">Pandas</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/numpy.png" alt="NumPy" className="skill-icon" />
                  <span className="skill-name">NumPy</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/power-bi.png" alt="Power BI" className="skill-icon" />
                  <span className="skill-name">Power BI</span>
                </div>
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/tableau-software.png" alt="Tableau" className="skill-icon" />
                  <span className="skill-name">Tableau</span>
                </div>
              </div>
            </div>

            {/* AI, ML & Automation */}
            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🤖</span>
                <h3>AI and ML</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://img.icons8.com/color/48/000000/chatgpt.png" alt="OpenAI API" className="skill-icon" />
                  <span className="skill-name">OpenAI API</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/copilot.png" alt="GitHub Copilot" className="skill-icon" />
                  <span className="skill-name">GitHub Copilot</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/huggingface.png" alt="Hugging Face" className="skill-icon" />
                  <span className="skill-name">Hugging Face</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/scikit_learn.png" alt="Scikit-learn" className="skill-icon" />
                  <span className="skill-name">Scikit-learn</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/tensorflow.png" alt="TensorFlow" className="skill-icon" />
                  <span className="skill-name">TensorFlow</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Blue */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Prajwal Umesha</h3>
            <p>Data Engineer & Software Developer</p>
            <p>Graduate Student at University of Minnesota</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <a href="https://linkedin.com/in/prajwal-umesha" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/prajwal-u2" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:prajwal.umesha.34@gmail.com" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p>&copy; 2025 Prajwal Umesha</p>
          <p>Built with React ⚛️</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/distributed-file-system" element={<ProjectPage />} />
        <Route path="/projects/dht-federated-ml-system" element={<DHTFederatedMLPage />} />
        <Route path="/projects/distributed-ml-system" element={<DistributedMLPage />} />
        <Route path="/projects/utopia-kafka-project" element={<UtopiaKafkaPage />} />
        <Route path="/projects/text-summarization" element={<TextSummarizationPage />} />
        <Route path="/projects/software-requirement-specification" element={<SoftwareRequirementPage />} />
        <Route path="/projects/5g-network-field-test-evaluation" element={<FiveGNetworkPage />} />
        <Route path="/projects/mininet-sdn-implementation" element={<MininetSDNPage />} />
      </Routes>
    </Router>
  );
}

export default App; 