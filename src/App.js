import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // ======== DOM Elements ========
    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("description");
    const dueInput = document.getElementById("due");
    const addBtn = document.getElementById("addBtn");
    const tasksContainer = document.getElementById("tasksContainer");
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");
    const sortSelect = document.getElementById("sortSelect");
    const errorDiv = document.getElementById("errorDiv");

    // ======== Helper Functions ========
    const uid = () => Math.random().toString(36).substring(2, 9);
    const nowISO = () => new Date().toISOString();

    const validate = (title, due) => {
      if (!title.trim()) return "Title is required!";
      if (!due) return "Please select a due date.";
      return null;
    };

    // ======== Local Storage ========
    let tasks = JSON.parse(
      localStorage.getItem("school-planner-tasks") || "[]"
    );
    let editingId = null;

    // ======== Render Tasks ========
    function renderTasks() {
      tasksContainer.innerHTML = "";
      let filtered = [...tasks];

      const search = searchInput.value.toLowerCase();
      const filter = filterSelect.value;
      const sortBy = sortSelect.value;

      if (filter !== "all")
        filtered = filtered.filter((t) => t.status === filter);
      if (search)
        filtered = filtered.filter((t) =>
          t.title.toLowerCase().includes(search)
        );

      filtered.sort((a, b) =>
        sortBy === "due"
          ? new Date(a.due) - new Date(b.due)
          : new Date(b.createdAt) - new Date(a.createdAt)
      );

      filtered.forEach((task) => {
        const div = document.createElement("div");
        div.className = "task-card";
        div.innerHTML = `
          <h3>${task.title}</h3>
          <p>${task.description || "No description"}</p>
          <p><strong>Due:</strong> ${new Date(task.due).toLocaleString()}</p>
          <p>Status: ${task.status}</p>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
          <button class="pending">Pending</button>
          <button class="progress">In-Progress</button>
          <button class="complete">Completed</button>
        `;

        div.querySelector(".edit").onclick = () => startEdit(task);
        div.querySelector(".delete").onclick = () => deleteTask(task.id);
        div.querySelector(".pending").onclick = () =>
          updateStatus(task.id, "pending");
        div.querySelector(".progress").onclick = () =>
          updateStatus(task.id, "in-progress");
        div.querySelector(".complete").onclick = () =>
          updateStatus(task.id, "completed");

        tasksContainer.appendChild(div);
      });

      localStorage.setItem("school-planner-tasks", JSON.stringify(tasks));
    }

    // ======== CRUD Operations ========
    function addOrSaveTask() {
      const title = titleInput.value;
      const description = descInput.value;
      const due = dueInput.value;
      const err = validate(title, due);
      if (err) {
        errorDiv.textContent = err;
        return;
      }
      errorDiv.textContent = "";

      if (editingId) {
        tasks = tasks.map((t) =>
          t.id === editingId
            ? { ...t, title, description, due, updatedAt: nowISO() }
            : t
        );
        editingId = null;
        addBtn.textContent = "Add Task";
      } else {
        const newTask = {
          id: uid(),
          title,
          description,
          due,
          status: "pending",
          createdAt: nowISO(),
          updatedAt: nowISO(),
        };
        tasks.unshift(newTask);
      }

      titleInput.value = descInput.value = dueInput.value = "";
      renderTasks();
    }

    function startEdit(task) {
      editingId = task.id;
      titleInput.value = task.title;
      descInput.value = task.description;
      dueInput.value = task.due ? task.due.slice(0, 16) : "";
      addBtn.textContent = "Save Task";
    }

    function deleteTask(id) {
      if (window.confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter((t) => t.id !== id);
        renderTasks();
      }
    }

    function updateStatus(id, status) {
      tasks = tasks.map((t) =>
        t.id === id ? { ...t, status, updatedAt: nowISO() } : t
      );
      renderTasks();
    }

    // ======== Event Listeners ========
    addBtn.onclick = addOrSaveTask;
    searchInput.oninput = renderTasks;
    filterSelect.onchange = renderTasks;
    sortSelect.onchange = renderTasks;

    // ======== Initial Render ========
    renderTasks();
  }, []);

  // ======== JSX (DOM Elements that JS uses) ========
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List School Planner</h1>
        <p>Welcome to your school planner!</p>
      </header>

      <div className="planner">
        <input id="title" placeholder="Task Title" />
        <textarea id="description" placeholder="Task Description"></textarea>
        <input id="due" type="datetime-local" />
        <button id="addBtn">Add Task</button>
        <div id="errorDiv" className="error"></div>

        <div className="controls">
          <input id="searchInput" placeholder="Search tasks..." />
          <select id="filterSelect">
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <select id="sortSelect">
            <option value="createdAt">Sort by Created Date</option>
            <option value="due">Sort by Due Date</option>
          </select>
        </div>

        <div id="tasksContainer" className="tasks-container"></div>
      </div>
    </div>
  );
}

export default App;
