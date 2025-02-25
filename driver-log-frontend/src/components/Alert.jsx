import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Alert = ({ message, type, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`alert ${type}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <div className="alert-content">
            <span className="alert-icon">
              {type === 'error' && <i className="fas fa-exclamation-circle" />}
              {type === 'success' && <i className="fas fa-check-circle" />}
            </span>
            <p>{message}</p>
          </div>
          <button className="close-button" onClick={onClose}>
            <i className="fas fa-times" />
          </button>

          <style jsx>{`
            .alert {
              position: fixed;
              top: 20px;
              left: 50%;
              transform: translateX(-50%);
              padding: 1rem 1.5rem;
              border-radius: 0.5rem;
              background: white;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 1rem;
              min-width: 300px;
              z-index: 1000;
            }

            .alert.error {
              border-left: 4px solid var(--error-color);
            }

            .alert.success {
              border-left: 4px solid var(--success-color);
            }

            .alert-content {
              display: flex;
              align-items: center;
              gap: 0.75rem;
            }

            .alert-icon {
              font-size: 1.25rem;
            }

            .error .alert-icon {
              color: var(--error-color);
            }

            .success .alert-icon {
              color: var(--success-color);
            }

            .close-button {
              background: none;
              border: none;
              cursor: pointer;
              color: #6b7280;
              padding: 0.25rem;
              border-radius: 0.25rem;
              transition: all 0.2s;
            }

            .close-button:hover {
              background-color: #f3f4f6;
              color: #374151;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;