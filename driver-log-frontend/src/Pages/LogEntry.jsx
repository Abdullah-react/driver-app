import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/LogEntry.css';

const LogEntry = () => {
  const [logData, setLogData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    vehicleId: '',
    startLocation: '',
    endLocation: '',
    mileage: '',
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implementation for submitting log entry
    // This would connect to your backend API
  };

  return (
    <motion.div
      className="log-entry"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <h1>New Log Entry</h1>
      
      <form onSubmit={handleSubmit} className="log-entry-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={logData.date}
              onChange={(e) => setLogData({...logData, date: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="startTime">Start Time</label>
            <input
              type="time"
              id="startTime"
              value={logData.startTime}
              onChange={(e) => setLogData({...logData, startTime: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endTime">End Time</label>
            <input
              type="time"
              id="endTime"
              value={logData.endTime}
              onChange={(e) => setLogData({...logData, endTime: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="vehicleId">Vehicle ID</label>
            <input
              type="text"
              id="vehicleId"
              value={logData.vehicleId}
              onChange={(e) => setLogData({...logData, vehicleId: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="startLocation">Start Location</label>
            <input
              type="text"
              id="startLocation"
              value={logData.startLocation}
              onChange={(e) => setLogData({...logData, startLocation: e.target.value})}
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="endLocation">End Location</label>
            <input
              type="text"
              id="endLocation"
              value={logData.endLocation}
              onChange={(e) => setLogData({...logData, endLocation: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mileage">Mileage</label>
            <input
              type="number"
              id="mileage"
              value={logData.mileage}
              onChange={(e) => setLogData({...logData, mileage: e.target.value})}
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              value={logData.notes}
              onChange={(e) => setLogData({...logData, notes: e.target.value})}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Save Log Entry</button>
          <button type="button" className="cancel-btn">Cancel</button>
        </div>
      </form>
    </motion.div>
  );
};

export default LogEntry;