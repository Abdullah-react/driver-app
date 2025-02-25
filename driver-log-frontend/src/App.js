import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext'; 
import { ThemeProvider } from './contexts/ThemeContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import LogEntry from './Pages/LogEntry';
import Reports from './Pages/Reports';
import Profile from './Pages/Profile';
import './styles/App.css';

function App() {
    const { user } = useAuth();
  
    return (
      <Router>
        <div className="app">
          {user && <Navbar />}
          <main className="main-content">
            <Routes>
              <Route 
                path="/login" 
                element={user ? <Navigate to="/" /> : <Login />} 
              />
              <Route 
                path="/" 
                element={user ? <Dashboard /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/profile" 
                element={user ? <Profile /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/reports" 
                element={user ? <Reports /> : <Navigate to="/login" />} 
              />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
  

export default App;