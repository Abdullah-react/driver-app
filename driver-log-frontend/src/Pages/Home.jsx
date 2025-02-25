import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to Our Modern Website
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Experience smooth animations and responsive design
        </motion.p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>

      <div className="features-grid">
        {[1, 2, 3].map((item, index) => (
          <motion.div
            key={item}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (index + 2) }}
          >
            <h3>Feature {item}</h3>
            <p>Description of feature {item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;