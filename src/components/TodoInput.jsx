import React, { useState, useEffect } from 'react';
import { FiPlus, FiEdit, FiX } from 'react-icons/fi';

const TodoInput = ({ addTodo, editingTodo, updateTodo, cancelEdit, categories }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [categoryId, setCategoryId] = useState('all');

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
      setPriority(editingTodo.priority);
      setDueDate(editingTodo.dueDate);
      setCategoryId(editingTodo.categoryId || 'all');
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Lütfen bir görev başlığı girin!');
      return;
    }

    const todoData = {
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate,
      categoryId,
    };

    if (editingTodo) {
      updateTodo(editingTodo.id, todoData);
    } else {
      addTodo(todoData);
    }

    // Form temizle
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
    setCategoryId('all');
  };

  const handleCancel = () => {
    resetForm();
    if (cancelEdit) cancelEdit();
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-header">
          <h2>{editingTodo ? '✏️ Görevi Düzenle' : '➕ Yeni Görev Ekle'}</h2>
        </div>
        
        <input
          type="text"
          placeholder="Görev başlığı..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-title"
        />
        
        <textarea
          placeholder="Açıklama (opsiyonel)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-description"
          rows="3"
        />
        
        <div className="input-row">
          <div className="input-field">
            <label>Öncelik</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="input-priority"
            >
              <option value="low">🟢 Düşük</option>
              <option value="medium">🟡 Orta</option>
              <option value="high">🔴 Yüksek</option>
            </select>
          </div>
          
          <div className="input-field">
            <label>Kategori</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="input-category"
            >
              <option value="all">Genel</option>
              {categories.filter(c => c.id !== 'all').map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="input-field">
            <label>Son Tarih</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="input-date"
            />
          </div>
        </div>
        
        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            {editingTodo ? <><FiEdit /> Güncelle</> : <><FiPlus /> Ekle</>}
          </button>
          {editingTodo && (
            <button type="button" onClick={handleCancel} className="btn btn-secondary">
              <FiX /> İptal
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default TodoInput;
