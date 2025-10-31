# To-Do-List-School-Planner

A comprehensive task management and school planner application designed to help students organize assignments, track deadlines, and boost productivity. Perfect for managing academic life efficiently!

## 🚀 Web Preview (Under Development)

[https://to-do-list-school-planner.vercel.app/](https://to-do-list-school-planner.vercel.app/)

> ⚠️ **Note:** The link above points to a separate web app version currently under development. The rest of this README describes the Python CLI tool.
>
> **For Python CLI usage, follow instructions below.**

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

### Main Menu Options

When you run the application, you'll see the following menu:

```
To-Do List School Planner
1. Add Task
2. View All Tasks
3. View Tasks by Status
4. View Tasks by Priority
5. Update Task
6. Delete Task
7. Search Tasks
8. Exit
```

### Adding a Task

1. Select option `1` from the main menu
2. Enter task details:
   - Title
   - Description
   - Due date (YYYY-MM-DD format)
   - Priority (LOW/MEDIUM/HIGH)

### Viewing Tasks

- **View All Tasks** (Option 2): Displays all tasks in the system
- **View by Status** (Option 3): Filter tasks by TODO, IN_PROGRESS, or COMPLETED
- **View by Priority** (Option 4): Filter tasks by LOW, MEDIUM, or HIGH priority

### Updating Tasks

1. Select option `5` from the main menu
2. Enter the task ID
3. Choose what to update:
   - Title
   - Description
   - Due date
   - Priority
   - Status

### Searching Tasks

Select option `7` and enter keywords to search in task titles and descriptions.

## 🏗️ Architecture

The application follows an object-oriented design with the following main components:

### Core Classes

#### Task Class (`task.py`)

```python
class Task:
    def __init__(self, title, description, due_date, priority):
        self.id = unique_id
        self.title = title
        self.description = description
        self.due_date = due_date
        self.priority = priority  # LOW, MEDIUM, HIGH
        self.status = "TODO"  # TODO, IN_PROGRESS, COMPLETED
        self.created_at = datetime.now()
```

#### TaskManager Class (`task_manager.py`)

Manages all task operations:
- `add_task()`: Create new tasks
- `get_all_tasks()`: Retrieve all tasks
- `get_task_by_id()`: Find specific task
- `update_task()`: Modify task details
- `delete_task()`: Remove tasks
- `filter_by_status()`: Filter tasks by status
- `filter_by_priority()`: Filter tasks by priority
- `search_tasks()`: Search functionality

#### UserInterface Class (`ui.py`)

Handles all user interactions and display formatting.

### Data Storage

Tasks are stored in a JSON file (`tasks.json`) for persistence between sessions.

## 📚 API Documentation

### Task Operations

#### Create Task

```python
task_manager.add_task(title, description, due_date, priority)
```

**Parameters:**
- `title` (str): Task title
- `description` (str): Detailed description
- `due_date` (str): Due date in YYYY-MM-DD format
- `priority` (str): LOW, MEDIUM, or HIGH

#### Get All Tasks

```python
tasks = task_manager.get_all_tasks()
```

**Returns:** List of all Task objects

#### Update Task

```python
task_manager.update_task(task_id, **kwargs)
```

**Parameters:**
- `task_id` (str): Unique task identifier
- `**kwargs`: Fields to update (title, description, due_date, priority, status)

#### Delete Task

```python
task_manager.delete_task(task_id)
```

**Parameters:**
- `task_id` (str): Unique task identifier

#### Filter Tasks

```python
# By status
tasks = task_manager.filter_by_status("TODO")

# By priority
tasks = task_manager.filter_by_priority("HIGH")
```

#### Search Tasks

```python
results = task_manager.search_tasks("assignment")
```

**Parameters:**
- `query` (str): Search term

**Returns:** List of matching Task objects

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### How to Contribute

1. **Fork the repository**

2. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
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
