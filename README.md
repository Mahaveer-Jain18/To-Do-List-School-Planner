git clone https://github.com/Mahaveer-Jain18/To-Do-List-School-Planner.git
    ```
2.  **Navigate into the Project Directory:**
    ```bash
    cd To-Do-List-School-Planner
    ```
3.  **Create and Activate a Virtual Environment (Recommended):**
    Virtual environments help manage project dependencies in isolation.
    *   **macOS/Linux:**
        ```bash
        python3 -m venv .venv
        source .venv/bin/activate
        ```
    *   **Windows:**
        ```bash
        py -m venv .venv
        .venv\Scripts\activate
        ```
4.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    (If `requirements.txt` is not directly in the root, check `backend/requirements.txt` and adjust the command: `pip install -r backend/requirements.txt`)

### Running the Application

Once installed, you can run the CLI application: