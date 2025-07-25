import React, { useState, useEffect } from 'react';
import './AnimatedText.css';

function AnimatedText() {
  const roles = ['Software Engineer', 'Cloud Engineer', 'Data Engineer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);
      
      // Change text after fade out completes
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsVisible(true); // Fade in
      }, 300); // Half second for fade out
      
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span className={`animated-text ${isVisible ? 'visible' : 'hidden'}`}>
      {roles[currentRole]}
    </span>
  );
}

export default AnimatedText; 