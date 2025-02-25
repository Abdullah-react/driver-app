import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DrivingLogCard from '../components/DrivingLogCard';
import StatisticsCard from '../components/StatisticsCard';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [recentLogs, setRecentLogs] = useState([]);
  const [statistics, setStatistics] = useState({
    totalHours: 0,
    weeklyHours: 0,
    monthlyHours: 0
  });

  useEffect(() => {
    // Fetch recent logs and statistics
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    // Implementation for fetching dashboard data
    // This would connect to your backend API
  };

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="dashboard-header">
        <h1>Driver Dashboard</h1>
        <button className="new-log-btn">New Log Entry</button>
      </div>

      <div className="dashboard-grid">
        <div className="statistics-section">
          <StatisticsCard
            title="Total Hours"
            value={statistics.totalHours}
            icon="clock"
          />
          <StatisticsCard
            title="Weekly Hours"
            value={statistics.weeklyHours}
            icon="calendar-week"
          />
          <StatisticsCard
            title="Monthly Hours"
            value={statistics.monthlyHours}
            icon="calendar-month"
          />
        </div>

        <div className="recent-logs-section">
          <h2>Recent Logs</h2>
          <div className="logs-grid">
            {recentLogs.map(log => (
              <DrivingLogCard key={log.id} log={log} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;