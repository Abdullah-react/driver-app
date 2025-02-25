import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Reports.css';

const Reports = () => {
  const { darkMode } = useTheme();
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [reports] = useState([
    { id: 1, date: '2025-02-25', distance: '150', hours: '8', location: 'İstanbul-Ankara' },
    { id: 2, date: '2025-02-24', distance: '120', hours: '6', location: 'Ankara-İzmir' },
    // Diğer rapor verileri
  ]);

  return (
    <motion.div 
      className={`reports-container ${darkMode ? 'dark' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="reports-header">
        <h1>Sürüş Raporları</h1>
        <div className="period-selector">
          <button 
            className={selectedPeriod === 'week' ? 'active' : ''} 
            onClick={() => setSelectedPeriod('week')}
          >
            Haftalık
          </button>
          <button 
            className={selectedPeriod === 'month' ? 'active' : ''} 
            onClick={() => setSelectedPeriod('month')}
          >
            Aylık
          </button>
          <button 
            className={selectedPeriod === 'year' ? 'active' : ''} 
            onClick={() => setSelectedPeriod('year')}
          >
            Yıllık
          </button>
        </div>
      </div>

      <motion.div 
        className="reports-grid"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            className="report-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="report-header">
              <h3>{report.date}</h3>
              <span className="report-badge">{report.location}</span>
            </div>
            <div className="report-details">
              <div className="detail-item">
                <span className="label">Mesafe</span>
                <span className="value">{report.distance} km</span>
              </div>
              <div className="detail-item">
                <span className="label">Süre</span>
                <span className="value">{report.hours} saat</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Reports;