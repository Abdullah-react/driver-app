import React from 'react';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="/" className="nav-link">Ana Sayfa</a></li>
              <li><a href="/dashboard" className="nav-link">Dashboard</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container">
        <div className="home-hero">
          <h1 className="mb-4">Sürücü Kayıt Uygulaması</h1>
          <p className="mb-4">Sürücü kayıtlarınızı kolayca yönetin</p>
          <button className="btn btn-primary">Başla</button>
        </div>
      </main>
    </div>
  );
}

export default App;