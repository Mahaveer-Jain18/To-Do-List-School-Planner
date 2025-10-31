import React, { useState } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Handler to add a new task
  const handleAddTask = async (taskData) => {
    try {
      const newTask = {
        id: Date.now(),
        ...taskData,
        completed: false,
        created_at: new Date().toISOString()
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setShowForm(false);
      console.log('Task added successfully:', newTask);
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  };

  return (
    <div>
      {showForm && (
        <AddTaskForm onAddTask={handleAddTask} />
      )}
      <h2>Your Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add your first task above!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="task-item">
              <strong>{task.title}</strong>
              <span>{task.priority}</span>
              <span>{task.subject}</span>
              {task.due_date && (
                <span>Due: {new Date(task.due_date).toLocaleDateString()}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
