
# To-Do List School Planner - Core Logic

# Initialize an empty to-do list
todo_list = []

def add_task(task_name, description="", deadline=None, category="general"):
    """
    Add a new task to the to-do list.
    
    Args:
        task_name (str): Name of the task
        description (str): Optional task description
        deadline (str): Optional deadline for the task
        category (str): Category/subject for the task (e.g., Math, Science)
    
    Returns:
        dict: The created task
    """
    task = {
        "id": len(todo_list) + 1,
        "name": task_name,
        "description": description,
        "deadline": deadline,
        "category": category,
        "completed": False
    }
    todo_list.append(task)
    return task

def get_all_tasks():
    """
    Retrieve all tasks from the to-do list.
    
    Returns:
        list: List of all tasks
    """
    return todo_list

if __name__ == "__main__":
    # Example usage
    print("To-Do List School Planner initialized!")
    print(f"Current tasks: {len(todo_list)}")
