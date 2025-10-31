# To-Do-List-School-Planner

A comprehensive task management and school planner application designed to help students organize assignments, track deadlines, and boost productivity. Perfect for managing academic life efficiently!

## 🚀 Quick Start

- Prerequisites: Python 3.8+, pip
- Clone: `git clone https://github.com/Mahaveer-Jain18/To-Do-List-School-Planner.git`
- Enter folder: `cd To-Do-List-School-Planner`
- Install deps: `pip install -r requirements.txt` (if present) or `pip install -r backend/requirements.txt`
- Run CLI: `python main.py` (or `python -m planner` if packaged)
- Optional web preview (under development): https://to-do-list-school-planner.vercel.app/

## ✨ Features

- Task Management: create, update, view, and delete tasks
- Priority Levels: LOW, MEDIUM, HIGH
- Status Tracking: TODO, IN_PROGRESS, COMPLETED
- Filtering: view by status or priority
- Search: find tasks by title/description
- Due Dates: track deadlines effectively
- Friendly CLI interface

### Screenshots

- Tasks list view: ![Tasks List](docs/screenshots/tasks-list.png)
- Task details: ![Task Details](docs/screenshots/task-details.png)
- Filters: ![Filters](docs/screenshots/filters.png)

If screenshots are missing, place PNGs under docs/screenshots/ and update paths.

## 📖 Usage

- Add task: `add "Title" -d "YYYY-MM-DD" -p HIGH -t "Description"`
- List tasks: `list` or `list --status COMPLETED` or `list --priority HIGH`
- Update status: `update 12 --status IN_PROGRESS`
- Delete: `delete 12`
- Search: `search "biology"`

Tips:
- Use ISO date format YYYY-MM-DD
- Keep titles concise; use description for details

## 🔧 Installation

- Python installation: https://www.python.org/downloads/
- Create venv (recommended):
  - macOS/Linux: `python3 -m venv .venv && source .venv/bin/activate`
  - Windows: `py -m venv .venv && .venv\\Scripts\\activate`
- Install requirements: `pip install -r requirements.txt`

## 🏗️ Architecture

- core/: data models and business logic
- cli/: command parsing and commands
- storage/: persistence (JSON/SQLite)
- docs/: documentation and screenshots

## 🤝 Contributing

We welcome contributions! Please:
- Fork the repo and create a feature branch: `git checkout -b feat/readme-updates`
- Follow conventional commits (e.g., `docs: improve README quick start`)
- Run tests (if available) before submitting
- Open a Pull Request referencing Issue #30 and describe your changes

### Development Setup

- Lint: `ruff check .` or `flake8 .`
- Format: `black .`
- Test: `pytest`

## 📞 Contact

- Maintainer: @Mahaveer-Jain18
- Email: add your contact email here
- Issues: https://github.com/Mahaveer-Jain18/To-Do-List-School-Planner/issues

## 📄 License

This project is open-source. See LICENSE for details.
