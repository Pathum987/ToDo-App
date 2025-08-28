import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onEdit, onDelete, onToggleComplete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p style={{ 
          textAlign: 'center', 
          color: '#9ca3af', 
          fontStyle: 'italic',
          padding: '20px'
        }}>
          No tasks found
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onEdit={onEdit} 
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>
  );
}