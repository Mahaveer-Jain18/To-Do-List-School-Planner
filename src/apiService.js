/**
 * API Service for To-Do List School Planner
 * 
 * This module provides functions to interact with the backend API,
 * specifically connecting to the Python backend's TodoList class methods.
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

/**
 * Add a new task to the to-do list
 * Connects to the backend add_task() function
 * 
 * @param {Object} taskData - The task data
 * @param {string} taskData.title - Task name/title
 * @param {string} taskData.notes - Description/notes
 * @param {string|null} taskData.due_date - Due date in ISO format (optional)
 * @param {string} taskData.subject - Category/subject (Math, Science, etc.)
 * @param {string} taskData.priority - Priority level (High, Medium, Low)
 * @returns {Promise<Object>} The created task with id and created_at timestamp
 */
export const addTask = async (taskData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: taskData.title,
        notes: taskData.notes || '',
        due_date: taskData.due_date || null,
        subject: taskData.subject,
        priority: taskData.priority
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to add task');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in addTask:', error);
    throw error;
  }
};

/**
 * Get all tasks from the to-do list
 * @returns {Promise<Array>} Array of all tasks
 */
export const getAllTasks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }

    const data = await response.json();
    return data.tasks || [];
  } catch (error) {
    console.error('Error in getAllTasks:', error);
    throw error;
  }
};

/**
 * Update an existing task
 * @param {number} taskId - The task ID
 * @param {Object} updates - The fields to update
 * @returns {Promise<Object>} The updated task
 */
export const updateTask = async (taskId, updates) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates)
    });

    if (!response.ok) {
      throw new Error('Failed to update task');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in updateTask:', error);
    throw error;
  }
};

/**
 * Delete a task
 * @param {number} taskId - The task ID
 * @returns {Promise<Object>} Success message
 */
export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete task');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in deleteTask:', error);
    throw error;
  }
};

/**
 * Mark a task as complete
 * @param {number} taskId - The task ID
 * @returns {Promise<Object>} The updated task
 */
export const completeTask = async (taskId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}/complete`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to complete task');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in completeTask:', error);
    throw error;
  }
};

export default {
  addTask,
  getAllTasks,
  updateTask,
  deleteTask,
  completeTask
};
