import { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // all, active, completed
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const loadTasks = async () => {
    try {
      setLoading(true);
      
      // Try to load from localStorage first
      const savedTasks = localStorage.getItem('todoTasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      } else {
        // Use default tasks if no saved tasks
        const defaultTasks = [
          { id: 1, title: "Go shopping", completed: false },
          { id: 2, title: "Eat lunch", completed: false },
          { id: 3, title: "Do laundry", completed: false }
        ];
        setTasks(defaultTasks);
      }
      
    } catch (err) {
      // Fallback to default tasks
      const defaultTasks = [
        { id: 1, title: "Go shopping", completed: false },
        { id: 2, title: "Eat lunch", completed: false },
        { id: 3, title: "Do laundry", completed: false }
      ];
      setTasks(defaultTasks);
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const addTask = (text) => {
    if (!text.trim()) return alert("Task cannot be empty!");
    
    const newTask = {
      id: Date.now(), // Simple ID generation
      title: text,
      completed: false
    };
    
    setTasks([newTask, ...tasks]);
  };

  const editTask = (id, newText) => {
    if (!newText.trim()) return alert("Task cannot be empty!");
    
    setTasks(tasks.map((t) => (t.id === id ? { ...t, title: newText } : t)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Filter tasks based on search term and filter type
  const filteredTasks = tasks
    .filter(task => {
      // Filter by search term
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by completion status
      if (filter === "active") return matchesSearch && !task.completed;
      if (filter === "completed") return matchesSearch && task.completed;
      return matchesSearch; // "all"
    });

  const isUltraSmall = screenWidth <= 425;
  const isVerySmall = screenWidth <= 375;
  const isExtremelySmall = screenWidth <= 325;

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #8b5cf6, #7c3aed, #6d28d9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isExtremelySmall ? '4px' : isUltraSmall ? '6px' : 'clamp(8px, 4vw, 16px)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: isExtremelySmall ? '100%' : isUltraSmall ? '98vw' : 'min(500px, 95vw)',
        backgroundColor: 'rgba(55, 65, 81, 0.95)',
        padding: isExtremelySmall ? '12px' : isUltraSmall ? '16px' : 'clamp(16px, 5vw, 32px)',
        borderRadius: isExtremelySmall ? '8px' : isUltraSmall ? '12px' : 'clamp(16px, 4vw, 24px)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: isExtremelySmall ? '20px' : isVerySmall ? '22px' : isUltraSmall ? '24px' : 'clamp(24px, 6vw, 32px)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: isExtremelySmall ? '12px' : isUltraSmall ? '16px' : 'clamp(16px, 4vw, 24px)',
          lineHeight: '1.2'
        }}>
          Get Things Done!
        </h1>

        <TaskInput onAdd={addTask} />

        {/* Search Input */}
        <div style={{ marginBottom: 'clamp(16px, 4vw, 20px)' }}>
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: 'clamp(10px, 3vw, 12px) clamp(12px, 4vw, 16px)',
              borderRadius: 'clamp(8px, 2vw, 12px)',
              backgroundColor: '#374151',
              color: 'white',
              border: 'none',
              outline: 'none',
              fontSize: 'clamp(14px, 4vw, 16px)',
              marginBottom: '8px',
              minHeight: '44px'
            }}
          />
        </div>

        {/* Filter Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: 'clamp(6px, 2vw, 8px)', 
          marginBottom: 'clamp(16px, 4vw, 20px)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {['all', 'active', 'completed'].map(filterType => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              style={{
                padding: 'clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: filter === filterType ? '#8b5cf6' : '#4b5563',
                color: 'white',
                cursor: 'pointer',
                fontSize: 'clamp(12px, 3vw, 14px)',
                fontWeight: '500',
                textTransform: 'capitalize',
                transition: 'all 0.2s',
                minHeight: '36px',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => {
                if (filter !== filterType) {
                  e.target.style.backgroundColor = '#6b7280';
                }
              }}
              onMouseOut={(e) => {
                if (filter !== filterType) {
                  e.target.style.backgroundColor = '#4b5563';
                }
              }}
            >
              {filterType} ({
                filterType === 'all' ? tasks.length :
                filterType === 'active' ? tasks.filter(t => !t.completed).length :
                tasks.filter(t => t.completed).length
              })
            </button>
          ))}
        </div>

        {/* Task Stats */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: 'clamp(12px, 3vw, 16px)',
          fontSize: 'clamp(12px, 3vw, 14px)',
          color: '#d1d5db',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <span>Total: {tasks.length}</span>
          <span>Completed: {tasks.filter(t => t.completed).length}</span>
          <span>Pending: {tasks.filter(t => !t.completed).length}</span>
        </div>

        {loading ? (
          <p style={{ color: '#d1d5db', textAlign: 'center' }}>Loading...</p>
        ) : (
          <TaskList 
            tasks={filteredTasks} 
            onEdit={editTask} 
            onDelete={removeTask}
            onToggleComplete={toggleComplete}
          />
        )}

        {error && <p style={{ color: '#f87171', textAlign: 'center', marginTop: '8px' }}>{error}</p>}
      </div>
    </div>
  );
}