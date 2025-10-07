import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FiEdit2, FiTrash2, FiMenu } from 'react-icons/fi';
import confetti from 'canvas-confetti';

const TodoItem = ({ todo, toggleComplete, deleteTodo, startEdit, categoryColor }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const getPriorityClass = (priority) => {
    return `priority-${priority}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    return due < today && !todo.completed;
  };

  const handleToggleComplete = () => {
    // Eğer görev tamamlanıyorsa konfetti efekti göster
    if (!todo.completed) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4299e1', '#48bb78', '#ed8936', '#f56565', '#9f7aea']
      });
    }
    toggleComplete(todo.id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`todo-item ${todo.completed ? 'completed' : ''} ${getPriorityClass(todo.priority)} ${
        isOverdue(todo.dueDate) ? 'overdue' : ''
      } ${isDragging ? 'dragging' : ''}`}
    >
      {categoryColor && (
        <div className="category-indicator" style={{ backgroundColor: categoryColor }} />
      )}
      
      <div className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          id={`todo-${todo.id}`}
        />
        <label htmlFor={`todo-${todo.id}`}></label>
      </div>
      
      <div className="todo-content">
        <h3 className="todo-title">{todo.title}</h3>
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
        <div className="todo-meta">
          <span className={`priority-badge ${getPriorityClass(todo.priority)}`}>
            {todo.priority === 'high' ? '🔴' : todo.priority === 'medium' ? '🟡' : '🟢'}
            {todo.priority === 'high' ? 'Yüksek' : todo.priority === 'medium' ? 'Orta' : 'Düşük'}
          </span>
          {todo.dueDate && (
            <span className={`due-date ${isOverdue(todo.dueDate) ? 'overdue' : ''}`}>
              📅 {formatDate(todo.dueDate)}
              {isOverdue(todo.dueDate) && ' (Gecikmiş)'}
            </span>
          )}
        </div>
      </div>
      
      <div className="todo-actions">
        <button
          className="btn-icon btn-edit"
          onClick={() => startEdit(todo)}
          title="Düzenle"
        >
          <FiEdit2 />
        </button>
        <button
          className="btn-icon btn-delete"
          onClick={() => deleteTodo(todo.id)}
          title="Sil"
        >
          <FiTrash2 />
        </button>
        <span className="drag-handle" {...attributes} {...listeners} title="Sürükle">
          <FiMenu />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
