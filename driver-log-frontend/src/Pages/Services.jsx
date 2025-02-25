import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Driver Log Management",
      description: "Comprehensive logging system for tracking driver activities"
    },
    {
      title: "Real-time Tracking",
      description: "Monitor vehicle location and status in real-time"
    },
    {
      title: "Report Generation",
      description: "Generate detailed reports of driver activities and performance"
    }
  ];

  return (
    <motion.div
      className="services-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;