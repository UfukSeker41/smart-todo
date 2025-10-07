import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TodoInput from './components/TodoInput';
import FilterBar from './components/FilterBar';
import TodoList from './components/TodoList';
import './styles/main.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([
    { id: 'all', name: 'Genel', color: '#4299e1', count: 0 }
  ]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');
  const [theme, setTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // LocalStorage'dan verileri yükle
  useEffect(() => {
    const savedTodos = localStorage.getItem('smart-todos');
    const savedTheme = localStorage.getItem('smart-theme');
    const savedCategories = localStorage.getItem('smart-categories');
    
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
  }, []);

  // Todos değiştiğinde LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('smart-todos', JSON.stringify(todos));
    updateCategoryCounts();
  }, [todos]);

  // Kategoriler değiştiğinde LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('smart-categories', JSON.stringify(categories));
  }, [categories]);

  // Tema değiştiğinde LocalStorage'a kaydet ve body class'ını güncelle
  useEffect(() => {
    localStorage.setItem('smart-theme', theme);
    document.body.className = theme;
  }, [theme]);

  // Kategori sayılarını güncelle
  const updateCategoryCounts = () => {
    setCategories(prev => prev.map(cat => ({
      ...cat,
      count: cat.id === 'all' 
        ? todos.length 
        : todos.filter(t => t.categoryId === cat.id).length
    })));
  };

  // Kategori ekle
  const addCategory = (categoryData) => {
    const newCategory = {
      id: Date.now(),
      ...categoryData,
      count: 0
    };
    setCategories([...categories, newCategory]);
  };

  // Kategori sil
  const deleteCategory = (id) => {
    if (window.confirm('Bu kategoriyi silmek istediğinizden emin misiniz? Bu kategorideki tüm görevler "Genel" kategorisine taşınacak.')) {
      // Kategorideki görevleri "all" kategorisine taşı
      setTodos(todos.map(todo => 
        todo.categoryId === id ? { ...todo, categoryId: 'all' } : todo
      ));
      setCategories(categories.filter(cat => cat.id !== id));
      if (selectedCategory === id) {
        setSelectedCategory('all');
      }
    }
  };

  // Kategori düzenle
  const editCategory = (id, newName) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, name: newName } : cat
    ));
  };

  // Yeni görev ekle
  const addTodo = (todoData) => {
    const newTodo = {
      id: Date.now(),
      ...todoData,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  // Görev güncelle
  const updateTodo = (id, todoData) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, ...todoData } : todo
    ));
    setEditingTodo(null);
  };

  // Görev sil
  const deleteTodo = (id) => {
    if (window.confirm('Bu görevi silmek istediğinizden emin misiniz?')) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  // Görev tamamla/tamamlama
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Düzenlemeye başla
  const startEdit = (todo) => {
    setEditingTodo(todo);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Düzenlemeyi iptal et
  const cancelEdit = () => {
    setEditingTodo(null);
  };

  // Tema değiştir
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Sürükle-bırak ile sıralama
  const handleDragEnd = (oldIndex, newIndex) => {
    const items = Array.from(filteredAndSortedTodos);
    const [reorderedItem] = items.splice(oldIndex, 1);
    items.splice(newIndex, 0, reorderedItem);

    // Orijinal todos listesindeki sıralamayı güncelle
    const newTodos = [...todos];
    const reorderedIds = items.map(item => item.id);
    
    newTodos.sort((a, b) => {
      const indexA = reorderedIds.indexOf(a.id);
      const indexB = reorderedIds.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

    setTodos(newTodos);
  };

  // Filtreleme ve sıralama
  const filteredAndSortedTodos = todos
    .filter(todo => {
      // Kategori filtresi
      if (selectedCategory === 'today') {
        const today = new Date().toISOString().split('T')[0];
        if (!todo.dueDate || todo.dueDate !== today) return false;
      } else if (selectedCategory === 'important') {
        if (todo.priority !== 'high') return false;
      } else if (selectedCategory !== 'all') {
        if (selectedCategory === 'active' && todo.completed) return false;
        if (selectedCategory === 'completed' && !todo.completed) return false;
        if (!['all', 'active', 'completed', 'today', 'important'].includes(selectedCategory)) {
          if (todo.categoryId !== selectedCategory) return false;
        }
      }
      
      // Durum filtresi (FilterBar'dan)
      if (filterStatus === 'active' && todo.completed) return false;
      if (filterStatus === 'completed' && !todo.completed) return false;
      
      // Arama filtresi
      if (searchTerm) {
        const search = searchTerm.toLowerCase();
        return (
          todo.title.toLowerCase().includes(search) ||
          todo.description.toLowerCase().includes(search)
        );
      }
      
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date-asc':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'date-desc':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'dueDate':
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        default:
          return 0;
      }
    });

  // İstatistikler
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;
  const todayTodos = todos.filter(todo => {
    const today = new Date().toISOString().split('T')[0];
    return todo.dueDate === today;
  }).length;
  const importantTodos = todos.filter(todo => todo.priority === 'high').length;

  const stats = {
    total: totalTodos,
    completed: completedTodos,
    active: activeTodos,
    today: todayTodos,
    important: importantTodos,
  };

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} stats={stats} />
      
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        onAddCategory={addCategory}
        onDeleteCategory={deleteCategory}
        onEditCategory={editCategory}
        stats={stats}
      />
      
      <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="container">
          <TodoInput 
            addTodo={addTodo}
            editingTodo={editingTodo}
            updateTodo={updateTodo}
            cancelEdit={cancelEdit}
            categories={categories}
          />
          
          <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          
          <TodoList
            todos={filteredAndSortedTodos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            startEdit={startEdit}
            onDragEnd={handleDragEnd}
            categories={categories}
          />
        </div>
      </main>
      
      <footer className="app-footer">
        <div className="stats">
          <span className="stat">
            <strong>{totalTodos}</strong> Toplam
          </span>
          <span className="stat">
            <strong>{activeTodos}</strong> Aktif
          </span>
          <span className="stat">
            <strong>{completedTodos}</strong> Tamamlandı
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
