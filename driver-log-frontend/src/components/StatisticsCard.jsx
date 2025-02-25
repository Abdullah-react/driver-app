import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const StatisticsCard = ({ title, value, icon, percentageChange }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      className={`statistics-card ${darkMode ? 'dark' : ''}`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="card-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      
      <div className="card-content">
        <h3>{title}</h3>
        <div className="value">{value}</div>
        {percentageChange && (
          <div className={`percentage ${percentageChange > 0 ? 'positive' : 'negative'}`}>
            <i className={`fas fa-arrow-${percentageChange > 0 ? 'up' : 'down'}`}></i>
            {Math.abs(percentageChange)}%
          </div>
        )}
      </div>

      <style jsx>{`
        .statistics-card {
          background-color: white;
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .statistics-card.dark {
          background-color: #1f2937;
          color: #e5e7eb;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 0.75rem;
          background-color: var(--primary-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .card-content {
          flex: 1;
        }

        .card-content h3 {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
        }

        .dark .card-content h3 {
          color: #9ca3af;
        }

        .value {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .percentage {
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .percentage.positive {
          color: var(--success-color);
        }

        .percentage.negative {
          color: var(--error-color);
        }
      `}</style>
    </motion.div>
  );
};

export default StatisticsCard;