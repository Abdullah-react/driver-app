import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h1>About Us</h1>
        <p>Welcome to our driver logging application. We provide efficient solutions for managing and tracking driver activities.</p>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>To provide a reliable and user-friendly platform for drivers to maintain their logs and manage their activities efficiently.</p>
          </div>
          
          <div className="about-section">
            <h2>Why Choose Us</h2>
            <ul>
              <li>Easy to use interface</li>
              <li>Real-time tracking</li>
              <li>Secure data storage</li>
              <li>24/7 support</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;