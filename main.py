#!/usr/bin/env python3
"""
To-Do List School Planner

A comprehensive task management system designed for students to organize
school assignments, projects, and daily tasks efficiently.

Author: Mahaveer Jain
Created: October 2024
"""

from datetime import datetime, date
from typing import List, Dict, Optional
from dataclasses import dataclass
from enum import Enum


class Priority(Enum):
    """Task priority levels."""
    LOW = 1
    MEDIUM = 2
    HIGH = 3
    URGENT = 4


class TaskStatus(Enum):
    """Task completion status."""
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    OVERDUE = "overdue"


@dataclass
class Task:
    """Represents a single task in the to-do list.
    
    Attributes:
        title (str): Task title/description
        subject (str): Subject or category (e.g., 'Math', 'Science', 'Personal')
        priority (Priority): Task priority level
        due_date (Optional[date]): Task due date
        status (TaskStatus): Current task status
        created_date (datetime): When the task was created
        notes (str): Additional notes or details
    """
    title: str
    subject: str = "General"
    priority: Priority = Priority.MEDIUM
    due_date: Optional[date] = None
    status: TaskStatus = TaskStatus.PENDING
    created_date: datetime = None
    notes: str = ""
    
    def __post_init__(self):
        """Initialize created_date if not provided."""
        if self.created_date is None:
            self.created_date = datetime.now()
    
    def is_overdue(self) -> bool:
        """Check if task is overdue.
        
        Returns:
            bool: True if task is overdue, False otherwise
        """
        if self.due_date and self.status != TaskStatus.COMPLETED:
            return date.today() > self.due_date
        return False
    
    def days_until_due(self) -> Optional[int]:
        """Calculate days until task is due.
        
        Returns:
            Optional[int]: Number of days until due date, None if no due date
        """
        if self.due_date:
            return (self.due_date - date.today()).days
        return None


class TodoList:
    """Main to-do list class for managing tasks.
    
    This class provides functionality to add, remove, update, and query tasks
    in a student's to-do list with features like filtering, sorting, and
    priority management.
    """
    
    def __init__(self):
        """Initialize an empty to-do list."""
        self.tasks: List[Task] = []
        self.next_id = 1
    
    def add_task(self, title: str, subject: str = "General", 
                 priority: Priority = Priority.MEDIUM, 
                 due_date: Optional[date] = None, 
                 notes: str = "") -> int:
        """Add a new task to the to-do list.
        
        Args:
            title (str): Task title/description
            subject (str, optional): Subject or category. Defaults to "General".
            priority (Priority, optional): Task priority. Defaults to Priority.MEDIUM.
            due_date (Optional[date], optional): Due date. Defaults to None.
            notes (str, optional): Additional notes. Defaults to "".
        
        Returns:
            int: Task ID for reference
        """
        task = Task(
            title=title,
            subject=subject,
            priority=priority,
            due_date=due_date,
            notes=notes
        )
        self.tasks.append(task)
        task_id = self.next_id
        self.next_id += 1
        return task_id
    
    def get_all_tasks(self) -> List[Task]:
        """Retrieve all tasks in the to-do list.
        
        Returns:
            List[Task]: List of all tasks
        """
        return self.tasks.copy()
    
    def get_tasks_by_status(self, status: TaskStatus) -> List[Task]:
        """Get tasks filtered by status.
        
        Args:
            status (TaskStatus): Status to filter by
        
        Returns:
            List[Task]: List of tasks with the specified status
        """
        return [task for task in self.tasks if task.status == status]
    
    def get_tasks_by_subject(self, subject: str) -> List[Task]:
        """Get tasks filtered by subject.
        
        Args:
            subject (str): Subject to filter by
        
        Returns:
            List[Task]: List of tasks in the specified subject
        """
        return [task for task in self.tasks if task.subject.lower() == subject.lower()]
    
    def get_tasks_by_priority(self, priority: Priority) -> List[Task]:
        """Get tasks filtered by priority.
        
        Args:
            priority (Priority): Priority level to filter by
        
        Returns:
            List[Task]: List of tasks with the specified priority
        """
        return [task for task in self.tasks if task.priority == priority]
    
    def get_overdue_tasks(self) -> List[Task]:
        """Get all overdue tasks.
        
        Returns:
            List[Task]: List of overdue tasks
        """
        return [task for task in self.tasks if task.is_overdue()]
    
    def get_upcoming_tasks(self, days: int = 7) -> List[Task]:
        """Get tasks due within the specified number of days.
        
        Args:
            days (int, optional): Number of days to look ahead. Defaults to 7.
        
        Returns:
            List[Task]: List of upcoming tasks
        """
        upcoming = []
        for task in self.tasks:
            if task.due_date and task.status != TaskStatus.COMPLETED:
                days_until = task.days_until_due()
                if days_until is not None and 0 <= days_until <= days:
                    upcoming.append(task)
        return upcoming
    
    def update_task_status(self, task_index: int, status: TaskStatus) -> bool:
        """Update the status of a task.
        
        Args:
            task_index (int): Index of the task in the list
            status (TaskStatus): New status
        
        Returns:
            bool: True if update was successful, False otherwise
        """
        if 0 <= task_index < len(self.tasks):
            self.tasks[task_index].status = status
            return True
        return False
    
    def remove_task(self, task_index: int) -> bool:
        """Remove a task from the to-do list.
        
        Args:
            task_index (int): Index of the task to remove
        
        Returns:
            bool: True if removal was successful, False otherwise
        """
        if 0 <= task_index < len(self.tasks):
            self.tasks.pop(task_index)
            return True
        return False
    
    def get_task_count(self) -> Dict[str, int]:
        """Get count of tasks by status.
        
        Returns:
            Dict[str, int]: Dictionary with status counts
        """
        counts = {
            "total": len(self.tasks),
            "pending": len(self.get_tasks_by_status(TaskStatus.PENDING)),
            "in_progress": len(self.get_tasks_by_status(TaskStatus.IN_PROGRESS)),
            "completed": len(self.get_tasks_by_status(TaskStatus.COMPLETED)),
            "overdue": len(self.get_overdue_tasks())
        }
        return counts
    
    def sort_tasks_by_priority(self, reverse: bool = True) -> List[Task]:
        """Sort tasks by priority (highest first by default).
        
        Args:
            reverse (bool, optional): Sort in descending order. Defaults to True.
        
        Returns:
            List[Task]: Sorted list of tasks
        """
        return sorted(self.tasks, key=lambda task: task.priority.value, reverse=reverse)
    
    def sort_tasks_by_due_date(self, reverse: bool = False) -> List[Task]:
        """Sort tasks by due date (earliest first by default).
        
        Args:
            reverse (bool, optional): Sort in descending order. Defaults to False.
        
        Returns:
            List[Task]: Sorted list of tasks
        """
        # Tasks without due dates go to the end
        tasks_with_dates = [task for task in self.tasks if task.due_date]
        tasks_without_dates = [task for task in self.tasks if not task.due_date]
        
        sorted_with_dates = sorted(tasks_with_dates, 
                                 key=lambda task: task.due_date, 
                                 reverse=reverse)
        
        return sorted_with_dates + tasks_without_dates


def main():
    """Main function demonstrating basic usage of the TodoList system."""
    print("Welcome to To-Do List School Planner!")
    print("=====================================\n")
    
    # Initialize the to-do list
    todo_list = TodoList()
    
    # Add some sample tasks
    print("Adding sample tasks...")
    todo_list.add_task(
        title="Complete Math Assignment Chapter 5",
        subject="Mathematics",
        priority=Priority.HIGH,
        due_date=date(2024, 11, 1),
        notes="Focus on quadratic equations and graphing"
    )
    
    todo_list.add_task(
        title="Prepare Science Project Presentation",
        subject="Science",
        priority=Priority.URGENT,
        due_date=date(2024, 10, 30),
        notes="Include diagrams and experimental results"
    )
    
    todo_list.add_task(
        title="Read English Literature - Chapter 3",
        subject="English",
        priority=Priority.MEDIUM,
        notes="Take notes on character development"
    )
    
    # Display task counts
    print("\nTask Summary:")
    counts = todo_list.get_task_count()
    for status, count in counts.items():
        print(f"  {status.title()}: {count}")
    
    # Display all tasks
    print("\nAll Tasks:")
    print("-" * 50)
    tasks = todo_list.get_all_tasks()
    for i, task in enumerate(tasks, 1):
        due_str = f"Due: {task.due_date}" if task.due_date else "No due date"
        print(f"{i}. {task.title}")
        print(f"   Subject: {task.subject} | Priority: {task.priority.name} | {due_str}")
        if task.notes:
            print(f"   Notes: {task.notes}")
        print()
    
    print("To-Do List School Planner initialized successfully!")
    print("You can now extend this system with a CLI or GUI interface.")


if __name__ == "__main__":
    main()
