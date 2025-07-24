import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section id="home" className="home-section">
          <header className="App-header">
            <h1>I am software engineer</h1>
            <p>Welcome to my portfolio</p>
          </header>
        </section>
      </main>
    </div>
  );
}

export default App; 