import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { darkMode, setDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-brand">
        <Link to="/">Driver App</Link>
      </div>
      
      <div className="navbar-menu">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/reports" className="nav-link">Raporlar</Link>
        <Link to="/profile" className="nav-link">Profil</Link>
        
        <button 
          className="theme-toggle" 
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        
        <div className="user-menu">
          <span className="user-name">{user?.name}</span>
          <button className="logout-btn" onClick={handleLogout}>
            Çıkış Yap
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;