import React from 'react';

const FilterBar = ({ searchTerm, setSearchTerm, filterStatus, setFilterStatus, sortBy, setSortBy }) => {
  return (
    <div className="filter-bar">
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Görev ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="filter-controls">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="all">Tüm Görevler</option>
          <option value="active">Aktif Görevler</option>
          <option value="completed">Tamamlanan</option>
        </select>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="filter-select"
        >
          <option value="date-desc">Tarih (Yeni → Eski)</option>
          <option value="date-asc">Tarih (Eski → Yeni)</option>
          <option value="priority">Öncelik</option>
          <option value="dueDate">Son Tarih</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
