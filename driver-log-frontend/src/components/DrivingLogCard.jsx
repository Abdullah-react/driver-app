import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const DrivingLogCard = ({ log }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      className={`driving-log-card ${darkMode ? 'dark' : ''}`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="log-header">
        <h3>{log.date}</h3>
        <span className="status-badge">{log.status}</span>
      </div>
      
      <div className="log-details">
        <div className="detail-row">
          <span className="label">Başlangıç</span>
          <span className="value">{log.startLocation}</span>
        </div>
        <div className="detail-row">
          <span className="label">Varış</span>
          <span className="value">{log.endLocation}</span>
        </div>
        <div className="detail-row">
          <span className="label">Mesafe</span>
          <span className="value">{log.distance} km</span>
        </div>
        <div className="detail-row">
          <span className="label">Süre</span>
          <span className="value">{log.duration}</span>
        </div>
      </div>

      <style jsx>{`
        .driving-log-card {
          background-color: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .driving-log-card.dark {
          background-color: #1f2937;
          color: #e5e7eb;
        }

        .log-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          background-color: var(--primary-color);
          color: white;
        }

        .log-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .label {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .value {
          font-weight: 500;
        }

        .dark .label {
          color: #9ca3af;
        }
      `}</style>
    </motion.div>
  );
};

export default DrivingLogCard;