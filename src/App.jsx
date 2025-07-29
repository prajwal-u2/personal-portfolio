import React from 'react';
import Navbar from './components/Navbar';
import AnimatedText from './components/AnimatedText';
import ExperienceSection from './components/ExperienceSection';
import homePageIllustration from './assets/images/home_page_illustration.png';
import umnLogo from './assets/images/umn_logo.png';
import revaLogo from './assets/images/reva_logo.png';
import './App.css';

function App() {
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
              As a Cloud, Data, and Software Engineer, I specialize in building scalable, high-impact systems that bridge infrastructure, data, and intelligent automation. With industry experience at Mercedes-Benz R&D and IDeaS, I've architected cloud-native platforms across AWS and Azure, automated DevOps with GitHub Actions and Terraform, and delivered real-time data pipelines using Kafka, Databricks, and Spark. My work combines pragmatic engineering with clean design—whether deploying AI-assisted developer tools or standardizing ETL pipelines that serve 100+ workflows daily.
            </p>
            <p className="about">
              Driven by curiosity and precision, I've also explored the frontier of LLM-powered systems—developing tools like FASTER for semantic data modeling and building distributed systems for federated learning and fault-tolerant storage. I approach every project with a systems thinker's mindset: clean APIs, reliable automation, and data that moves with purpose. If you're looking for an engineer who blends reliability with innovation—and turns complexity into clarity—<b>Let's connect!</b>  and explore how we can turn challenges into opportunities.
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

        {/* Skills - Blue */}
        <section id="skills" className="skills-section">
          <header className="section-header">
            <h2>Skills</h2>
            <p>
              Proficient in modern programming languages and frameworks including JavaScript, React, Node.js, Python, 
              and various databases. I'm experienced with cloud platforms, DevOps practices, and agile development methodologies.
            </p>
          </header>
        </section>

        {/* Projects - Black */}
        <section id="projects" className="projects-section">
          <header className="section-header">
            <h2>Projects</h2>
            <p>
              I've worked on diverse projects ranging from web applications to mobile apps and backend systems. 
              Each project has taught me valuable lessons and helped me grow as a developer. I enjoy building solutions 
              that solve real-world problems.
            </p>
          </header>
        </section>
      </main>
    </div>
  );
}

export default App; 