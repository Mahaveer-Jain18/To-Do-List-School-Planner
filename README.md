# To-Do-List-School-Planner

A comprehensive task management and school planner application designed to help students organize assignments, track deadlines, and boost productivity. Perfect for managing academic life efficiently!

## 🚀 Live Demo

**Hosted on Vercel:** [https://to-do-list-school-planner.vercel.app/](https://to-do-list-school-planner.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Task Management**: Create, update, view, and delete tasks
- **Priority Levels**: Organize tasks with LOW, MEDIUM, and HIGH priority levels
- **Status Tracking**: Monitor task progress with TODO, IN_PROGRESS, and COMPLETED status
- **Task Filtering**: View tasks by status or priority
- **Search Functionality**: Find tasks quickly by title or description
- **Due Date Management**: Track task deadlines effectively
- **User-Friendly Interface**: Simple command-line interface for easy navigation

## 🔧 Installation

### Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mahaveer-Jain18/To-Do-List-School-Planner.git
   cd To-Do-List-School-Planner
   ```

2. **Install required dependencies**
   ```bash
   pip install -r requirements.txt
   ```
   
   Note: This project uses Python standard library modules, so no external dependencies are required.

3. **Run the application**
   ```bash
   python main.py
   ```

## 📖 Usage

### Quick Start Guide

When you run the application, you'll see a menu with the following options:

```
--- To-Do List School Planner ---
1. Add Task
2. View All Tasks
3. View Tasks by Status
4. View Tasks by Priority
5. Update Task Status
6. Update Task Priority
7. Delete Task
8. Search Tasks
9. Mark Task as Complete
0. Exit
```

### Usage Examples

#### Adding a Task
```
Select option: 1
Enter task title: Complete Math Assignment
Enter task description: Solve problems 1-20 from Chapter 5
Enter due date (YYYY-MM-DD): 2025-10-30
Select priority (1: LOW, 2: MEDIUM, 3: HIGH): 3
✓ Task added successfully!
```

#### Viewing Tasks
```
Select option: 2

All Tasks:
--------------------------------------------------
ID: 1
Title: Complete Math Assignment
Description: Solve problems 1-20 from Chapter 5
Status: TODO
Priority: HIGH
Due Date: 2025-10-30
--------------------------------------------------
```

#### Updating Task Status
```
Select option: 5
Enter task ID: 1
Select new status (1: TODO, 2: IN_PROGRESS, 3: COMPLETED): 2
✓ Task status updated to IN_PROGRESS!
```

#### Searching Tasks
```
Select option: 8
Enter search term: Math

Search Results:
--------------------------------------------------
ID: 1
Title: Complete Math Assignment
...
```

## 🏗️ Architecture

### Project Structure

```
To-Do-List-School-Planner/
│
├── main.py              # Main application file
├── README.md            # Project documentation
└── requirements.txt     # Python dependencies (if any)
```

### Core Components

#### 1. Priority (Enum)
Defines task priority levels:
- `LOW`: For non-urgent tasks
- `MEDIUM`: For moderately important tasks
- `HIGH`: For urgent and important tasks

#### 2. TaskStatus (Enum)
Defines task completion states:
- `TODO`: Task not yet started
- `IN_PROGRESS`: Task is being worked on
- `COMPLETED`: Task is finished

#### 3. Task (Class)
Represents an individual task with the following attributes:
- `task_id`: Unique identifier
- `title`: Task name
- `description`: Detailed task information
- `status`: Current task status
- `priority`: Task priority level
- `due_date`: Task deadline
- `created_at`: Task creation timestamp

#### 4. TodoList (Class)
Manages the collection of tasks and provides methods for:
- Adding new tasks
- Viewing tasks (all, by status, by priority)
- Updating task properties
- Deleting tasks
- Searching tasks
- Task completion management

### Data Flow

1. User interacts with the command-line menu
2. Input is validated and processed
3. TodoList methods perform operations on tasks
4. Results are displayed to the user
5. Task data persists in memory during the session

## 📚 API Documentation

### Task Class

#### Constructor
```python
Task(task_id: int, title: str, description: str, 
     status: TaskStatus, priority: Priority, due_date: datetime)
```

#### Methods
- `__str__()`: Returns string representation of the task

### TodoList Class

#### Methods

##### `add_task(title: str, description: str, priority: Priority, due_date: datetime) -> None`
Adds a new task to the list.

**Parameters:**
- `title`: Task title (string)
- `description`: Task description (string)
- `priority`: Task priority (Priority enum)
- `due_date`: Task due date (datetime object)

**Returns:** None

##### `view_all_tasks() -> None`
Displays all tasks in the list.

**Returns:** None

##### `view_tasks_by_status(status: TaskStatus) -> None`
Displays tasks filtered by status.

**Parameters:**
- `status`: Filter by task status (TaskStatus enum)

**Returns:** None

##### `view_tasks_by_priority(priority: Priority) -> None`
Displays tasks filtered by priority.

**Parameters:**
- `priority`: Filter by task priority (Priority enum)

**Returns:** None

##### `update_task_status(task_id: int, new_status: TaskStatus) -> bool`
Updates the status of a specific task.

**Parameters:**
- `task_id`: ID of the task to update (int)
- `new_status`: New status value (TaskStatus enum)

**Returns:** True if successful, False otherwise

##### `update_task_priority(task_id: int, new_priority: Priority) -> bool`
Updates the priority of a specific task.

**Parameters:**
- `task_id`: ID of the task to update (int)
- `new_priority`: New priority value (Priority enum)

**Returns:** True if successful, False otherwise

##### `delete_task(task_id: int) -> bool`
Deletes a task from the list.

**Parameters:**
- `task_id`: ID of the task to delete (int)

**Returns:** True if successful, False otherwise

##### `search_tasks(query: str) -> List[Task]`
Searches for tasks by title or description.

**Parameters:**
- `query`: Search term (string)

**Returns:** List of matching tasks

##### `mark_task_complete(task_id: int) -> bool`
Marks a task as completed.

**Parameters:**
- `task_id`: ID of the task to mark complete (int)

**Returns:** True if successful, False otherwise

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   - Click the "Fork" button at the top right of this page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/To-Do-List-School-Planner.git
   cd To-Do-List-School-Planner
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Write clear, commented code
   - Follow existing code style
   - Add tests if applicable

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes in detail

### Contribution Guidelines

- **Code Style**: Follow PEP 8 style guide for Python code
- **Documentation**: Update documentation for any new features
- **Testing**: Test your changes thoroughly before submitting
- **Commit Messages**: Use clear, descriptive commit messages
- **Issue First**: For major changes, open an issue first to discuss

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mahaveer Jain**
- GitHub: [@Mahaveer-Jain18](https://github.com/Mahaveer-Jain18)

## 🙏 Acknowledgments

- Thanks to all contributors who help improve this project
- Inspired by the need for better student task management tools
- Built with Python and passion for education

## 📞 Support

If you encounter any issues or have questions:
1. Check existing [Issues](https://github.com/Mahaveer-Jain18/To-Do-List-School-Planner/issues)
2. Create a new issue if your problem isn't already listed
3. Provide detailed information about your problem

---

**Happy Planning! 📚✨**
