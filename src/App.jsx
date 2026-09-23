import { useState } from 'react';
import './App.css';
import Home from './Components/Home.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="nav-brand">
          <span className="brand-badge">CSE-22</span>
          <h2 className="brand-title">FSD Workshop</h2>
        </div>
        <nav className="nav-links">
          <button
            type="button"
            className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            type="button"
            className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'home' ? <Home /> : <Dashboard />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
