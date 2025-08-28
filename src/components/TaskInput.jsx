import { useState, useEffect } from "react";

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  const isUltraSmall = screenWidth <= 425;
  const isVerySmall = screenWidth <= 375;

  return (
    <form onSubmit={handleSubmit} style={{ 
      display: 'flex', 
      flexDirection: isUltraSmall ? 'column' : 'row',
      gap: isUltraSmall ? '10px' : 'clamp(8px, 2vw, 12px)', 
      marginBottom: 'clamp(16px, 4vw, 24px)' 
    }}>
      <input
        type="text"
        placeholder={isVerySmall ? "Task?" : "What is the task today?"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          flex: '1',
          padding: isUltraSmall ? '12px 14px' : 'clamp(10px, 3vw, 12px) clamp(12px, 4vw, 16px)',
          borderRadius: isUltraSmall ? '10px' : 'clamp(8px, 2vw, 12px)',
          backgroundColor: '#374151',
          color: 'white',
          border: 'none',
          outline: 'none',
          fontSize: isUltraSmall ? '14px' : 'clamp(14px, 4vw, 16px)',
          minHeight: '44px',
          width: '100%'
        }}
      />
      <button 
        type="submit"
        style={{
          backgroundColor: '#8b5cf6',
          color: 'white',
          padding: isUltraSmall ? '12px 16px' : 'clamp(10px, 3vw, 12px) clamp(16px, 4vw, 20px)',
          borderRadius: isUltraSmall ? '10px' : 'clamp(8px, 2vw, 12px)',
          border: 'none',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: isUltraSmall ? '14px' : 'clamp(14px, 4vw, 16px)',
          transition: 'background-color 0.2s',
          minHeight: '44px',
          whiteSpace: 'nowrap',
          width: isUltraSmall ? '100%' : 'auto',
          textAlign: 'center'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#7c3aed'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#8b5cf6'}
      >
        {isVerySmall ? '+ Add' : '+ Add Task'}
      </button>
    </form>
  );
}