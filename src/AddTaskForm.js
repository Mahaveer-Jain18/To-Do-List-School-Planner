import React, { useState } from 'react';
import './App.css';

const AddTaskForm = ({ onAddTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    category: '',
    priority: 'Medium'
  });

  const [errors, setErrors] = useState({});

  const categories = ['Math', 'Science', 'English', 'History', 'Computer Science', 'Art', 'Other'];
  const priorities = ['High', 'Medium', 'Low'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    
    if (formData.dueDate) {
      const selectedDate = new Date(formData.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.dueDate = 'Due date cannot be in the past';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Call the backend add_task() function
      const taskData = {
        title: formData.title,
        notes: formData.description,
        due_date: formData.dueDate || null,
        subject: formData.category,
        priority: formData.priority
      };

      // Call the parent component's handler to add the task
      if (onAddTask) {
        await onAddTask(taskData);
      }

      // Reset form after successful submission
      setFormData({
        title: '',
        description: '',
        dueDate: '',
        category: '',
        priority: 'Medium'
      });
      setErrors({});
      
      alert('Task added successfully!');
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task. Please try again.');
    }
  };

  return (
    <div className="add-task-form-container">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="add-task-form">
        <div className="form-group">
          <label htmlFor="title">Task Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter task description (optional)"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className={errors.dueDate ? 'error' : ''}
          />
          {errors.dueDate && <span className="error-message">{errors.dueDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category/Subject *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <span className="error-message">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority Level</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            {priorities.map(priority => (
              <option key={priority} value={priority}>{priority}</option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">Add Task</button>
          <button 
            type="button" 
            className="btn-secondary"
            onClick={() => {
              setFormData({
                title: '',
                description: '',
                dueDate: '',
                category: '',
                priority: 'Medium'
              });
              setErrors({});
            }}
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
