import { useState } from "react";

export default function TaskItem({ task, onEdit, onDelete, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.title);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={{
      backgroundColor: task.completed ? '#6b7280' : '#8b5cf6',
      color: 'white',
      padding: 'clamp(12px, 3vw, 16px)',
      borderRadius: 'clamp(8px, 2vw, 12px)',
      display: 'flex',
      flexDirection: window.innerWidth < 480 ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: window.innerWidth < 480 ? 'stretch' : 'center',
      marginBottom: 'clamp(8px, 2vw, 12px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      opacity: task.completed ? 0.7 : 1,
      transform: 'translateY(0)',
      animation: 'slideIn 0.3s ease-out'
    }}
    onMouseOver={(e) => {
      if (!task.completed && window.innerWidth > 768) {
        e.currentTarget.style.backgroundColor = '#7c3aed';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 15px -3px rgba(0, 0, 0, 0.2)';
      }
    }}
    onMouseOut={(e) => {
      if (window.innerWidth > 768) {
        e.currentTarget.style.backgroundColor = task.completed ? '#6b7280' : '#8b5cf6';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      }
    }}
    >
      {/* Checkbox for completion */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        flex: 1,
        marginBottom: window.innerWidth < 480 ? '8px' : '0'
      }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          style={{
            width: 'clamp(16px, 4vw, 20px)',
            height: 'clamp(16px, 4vw, 20px)',
            marginRight: 'clamp(8px, 2vw, 12px)',
            cursor: 'pointer',
            accentColor: '#8b5cf6',
            minWidth: '16px',
            minHeight: '16px'
          }}
        />
        
        {isEditing ? (
          <input
            style={{
              flex: '1',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: '2px solid white',
              outline: 'none',
              color: 'white',
              fontSize: 'clamp(14px, 4vw, 16px)',
              paddingBottom: '4px',
              minHeight: '24px'
            }}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            autoFocus
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleEdit();
              }
            }}
          />
        ) : (
          <span style={{ 
            fontSize: 'clamp(14px, 4vw, 16px)', 
            fontWeight: '500',
            textDecoration: task.completed ? 'line-through' : 'none',
            flex: 1,
            wordBreak: 'break-word',
            lineHeight: '1.4'
          }}>
            {task.title}
          </span>
        )}
      </div>

      <div style={{ 
        display: 'flex', 
        gap: 'clamp(6px, 2vw, 8px)', 
        marginLeft: window.innerWidth < 480 ? '0' : 'clamp(8px, 2vw, 12px)',
        marginTop: window.innerWidth < 480 ? '8px' : '0',
        justifyContent: window.innerWidth < 480 ? 'flex-end' : 'flex-start'
      }}>
        <button 
          onClick={handleEdit}
          style={{
            background: 'none',
            border: 'none',
            fontSize: 'clamp(16px, 5vw, 20px)',
            cursor: 'pointer',
            padding: 'clamp(6px, 2vw, 8px)',
            borderRadius: '4px',
            transition: 'background-color 0.2s',
            minWidth: '44px', 
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          {isEditing ? '💾' : '✏️'}
        </button>
        <button 
          onClick={() => onDelete(task.id)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: 'clamp(16px, 5vw, 20px)',
            cursor: 'pointer',
            padding: 'clamp(6px, 2vw, 8px)',
            borderRadius: '4px',
            transition: 'background-color 0.2s',
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}