import React, { useState } from 'react';
import { FiPlus, FiX, FiEdit2, FiCheck } from 'react-icons/fi';

const CategoryManager = ({ categories, onAddCategory, onDeleteCategory, onEditCategory }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('#4299e1');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleAdd = () => {
    if (newCategoryName.trim()) {
      onAddCategory({
        name: newCategoryName.trim(),
        color: newCategoryColor,
      });
      setNewCategoryName('');
      setNewCategoryColor('#4299e1');
      setIsAdding(false);
    }
  };

  const handleEdit = (id) => {
    if (editName.trim()) {
      onEditCategory(id, editName.trim());
      setEditingId(null);
      setEditName('');
    }
  };

  const startEdit = (category) => {
    setEditingId(category.id);
    setEditName(category.name);
  };

  return (
    <div className="category-manager">
      <div className="category-header">
        <h3>📁 Kategoriler</h3>
        <button 
          className="btn-icon-small" 
          onClick={() => setIsAdding(!isAdding)}
          title="Kategori Ekle"
        >
          {isAdding ? <FiX /> : <FiPlus />}
        </button>
      </div>

      {isAdding && (
        <div className="category-add-form">
          <input
            type="text"
            placeholder="Kategori adı..."
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            className="category-input"
          />
          <input
            type="color"
            value={newCategoryColor}
            onChange={(e) => setNewCategoryColor(e.target.value)}
            className="color-picker"
          />
          <button onClick={handleAdd} className="btn-small btn-primary">
            <FiCheck /> Ekle
          </button>
        </div>
      )}

      <div className="category-list">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            {editingId === category.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleEdit(category.id)}
                  className="category-edit-input"
                  autoFocus
                />
                <button onClick={() => handleEdit(category.id)} className="btn-icon-small">
                  <FiCheck />
                </button>
                <button onClick={() => setEditingId(null)} className="btn-icon-small">
                  <FiX />
                </button>
              </>
            ) : (
              <>
                <span 
                  className="category-color" 
                  style={{ backgroundColor: category.color }}
                />
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count || 0}</span>
                <button 
                  onClick={() => startEdit(category)} 
                  className="btn-icon-small"
                  title="Düzenle"
                >
                  <FiEdit2 />
                </button>
                {category.id !== 'all' && (
                  <button 
                    onClick={() => onDeleteCategory(category.id)} 
                    className="btn-icon-small btn-danger"
                    title="Sil"
                  >
                    <FiX />
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryManager;
