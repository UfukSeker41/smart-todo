import React from 'react';
import { FiSun, FiMoon, FiSettings } from 'react-icons/fi';

const Header = ({ theme, toggleTheme, stats }) => {
  const completionRate = stats.total > 0 
    ? Math.round((stats.completed / stats.total) * 100) 
    : 0;

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="app-title">
            <span className="icon">✓</span>
            Smart To-Do
          </h1>
          <div className="header-stats">
            <span className="stat-badge">
              <span className="stat-value">{stats.total}</span>
              <span className="stat-label">Görev</span>
            </span>
            <span className="stat-badge success">
              <span className="stat-value">{stats.completed}</span>
              <span className="stat-label">Tamamlandı</span>
            </span>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${completionRate}%` }}
                />
              </div>
              <span className="progress-text">{completionRate}%</span>
            </div>
          </div>
        </div>
        
        <div className="header-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Karanlık Tema' : 'Aydınlık Tema'}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <button 
            className="settings-btn" 
            aria-label="Settings"
            title="Ayarlar"
          >
            <FiSettings />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
