import React, { useState } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Handler to add a new task - connects to backend add_task() function
  const handleAddTask = async (taskData) => {
    try {
      // In a full implementation, this would call the backend API
      // For now, we'll simulate the backend response
      // TODO: Replace with actual API call to backend add_task() function
      // Example: const response = await fetch('/api/tasks', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(taskData)
      // });
      
      const newTask = {
        id: Date.now(),
        ...taskData,
        completed: false,
        created_at: new Date().toISOString()
      };
      
      // Update tasks state with new task
      setTasks(prevTasks => [...prevTasks, newTask]);
      
      // Hide form after successful addition
      setShowForm(false);
      
      console.log('Task added successfully:', newTask);
    } catch (error) {
      console.error('Error adding task:', error);
      throw error; // Re-throw to let form handle the error
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List School Planner</h1>
        <p>Welcome to your school planner!</p>
      </header>
      
      <main className="App-main">
        <div className="task-controls">
          <button 
            className="btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Hide Form' : 'Add New Task'}
          </button>
        </div>
        
        {showForm && (
          <AddTaskForm onAddTask={handleAddTask} />
        )}
        
        <div className="tasks-container">
          <h2>Your Tasks ({tasks.length})</h2>
          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add your first task above!</p>
          ) : (
            <div className="tasks-list">
              {tasks.map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-header">
                    <h3>{task.title}</h3>
                    <span className={`priority-badge priority-${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                  </div>
                  {task.notes && <p className="task-description">{task.notes}</p>}
                  <div className="task-meta">
                    <span className="task-category">{task.subject}</span>
                    {task.due_date && (
                      <span className="task-due-date">
                        Due: {new Date(task.due_date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
