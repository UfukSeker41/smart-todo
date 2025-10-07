import React from 'react';
import { FiList, FiCheckCircle, FiCircle, FiCalendar, FiStar, FiMenu } from 'react-icons/fi';
import CategoryManager from './CategoryManager';

const Sidebar = ({ 
  isOpen, 
  toggleSidebar, 
  categories, 
  selectedCategory,
  onCategorySelect,
  onAddCategory,
  onDeleteCategory,
  onEditCategory,
  stats 
}) => {
  const quickFilters = [
    { id: 'all', name: 'Tüm Görevler', icon: <FiList />, count: stats.total },
    { id: 'active', name: 'Aktif Görevler', icon: <FiCircle />, count: stats.active },
    { id: 'completed', name: 'Tamamlanan', icon: <FiCheckCircle />, count: stats.completed },
    { id: 'today', name: 'Bugün', icon: <FiCalendar />, count: stats.today },
    { id: 'important', name: 'Önemli', icon: <FiStar />, count: stats.important },
  ];

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FiMenu />
      </button>
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-section">
            <h3 className="sidebar-section-title">Hızlı Filtreler</h3>
            <div className="quick-filters">
              {quickFilters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-item ${selectedCategory === filter.id ? 'active' : ''}`}
                  onClick={() => onCategorySelect(filter.id)}
                >
                  <span className="filter-icon">{filter.icon}</span>
                  <span className="filter-name">{filter.name}</span>
                  <span className="filter-count">{filter.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <CategoryManager
              categories={categories}
              onAddCategory={onAddCategory}
              onDeleteCategory={onDeleteCategory}
              onEditCategory={onEditCategory}
            />
          </div>
        </div>
      </aside>
      
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}
    </>
  );
};

export default Sidebar;
