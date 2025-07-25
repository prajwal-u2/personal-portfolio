import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        {/* Home - Blue */}
        <section id="home" className="home-section">
          <header className="App-header">
            <h1>I am software engineer</h1>
            <p>Welcome to my portfolio</p>
          </header>
        </section>
        
        {/* About - Black */}
        <section id="about" className="about-section">
          <header className="section-header">
            <h2>About Me</h2>
            <p>
              I'm a passionate software engineer with expertise in modern web technologies. 
              I love creating innovative solutions and building applications that make a difference. 
              With a strong foundation in both frontend and backend development, I bring ideas to life through clean, efficient code.
            </p>
          </header>
        </section>

        {/* Education - Blue */}
        <section id="education" className="education-section">
          <header className="section-header">
            <h2>Education</h2>
            <p>
              My educational journey has equipped me with a solid foundation in computer science principles, 
              algorithms, and software engineering best practices. I continue to learn and adapt to new technologies 
              to stay current in this rapidly evolving field.
            </p>
          </header>
        </section>

        {/* Experience - White */}
        <section id="experience" className="experience-section">
          <header className="section-header">
            <h2>Experience</h2>
            <p>
              Through various projects and professional experiences, I've developed expertise in full-stack development, 
              problem-solving, and delivering high-quality software solutions. I thrive in collaborative environments 
              and am always eager to take on new challenges.
            </p>
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