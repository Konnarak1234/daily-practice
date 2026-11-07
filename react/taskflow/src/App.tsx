
import { useState } from "react";

import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TaskFilters } from "./components/TaskFilters";
import { TaskStats } from "./components/TaskStats";

import { useTasks } from "./hooks/useTasks";

import type {
  Task,
  TaskFilter,
  TaskInput,
} from "./types/task";

import "./App.css";

export default function App() {
  // The custom hook owns the application's task data.
  const {
    tasks,
    storageError,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  } = useTasks();

  // These states control the current UI.
  const [filter, setFilter] = useState<TaskFilter>("all");
  const [search, setSearch] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(
    null
  );

  // Derived data: no additional state is necessary.
  const visibleTasks = tasks.filter((task) => {
    const matchesStatus =
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed);

    const query = search.trim().toLowerCase();

    const matchesSearch =
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query);

    return matchesStatus && matchesSearch;
  });

  function handleSaveTask(input: TaskInput) {
    if (editingTask) {
      updateTask(editingTask.id, input);
      setEditingTask(null);
    } else {
      addTask(input);
    }
  }

  function handleDeleteTask(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    deleteTask(id);

    if (editingTask?.id === id) {
      setEditingTask(null);
    }
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>TaskFlow</h1>
          <p>Organize your work, one task at a time.</p>
        </div>
      </header>

      <main className="dashboard">
        <TaskStats tasks={tasks} />

        {storageError && (
          <p className="error-message" role="alert">
            {storageError}
          </p>
        )}

        <section className="panel">
          <h2>
            {editingTask ? "Edit task" : "Create a new task"}
          </h2>

          <TaskForm
            key={editingTask?.id ?? "new-task"}
            initialTask={editingTask ?? undefined}
            onSubmit={handleSaveTask}
            onCancel={
              editingTask
                ? () => setEditingTask(null)
                : undefined
            }
          />
        </section>

        <section className="panel">
          <div className="section-header">
            <h2>Your tasks</h2>

            <button
              type="button"
              onClick={() => {
                if (window.confirm("Clear completed tasks?")) {
                  clearCompleted();
                }
              }}
            >
              Clear completed
            </button>
          </div>

          <TaskFilters
            filter={filter}
            search={search}
            onFilterChange={setFilter}
            onSearchChange={setSearch}
          />

          <TaskList
            tasks={visibleTasks}
            onToggle={toggleTask}
            onEdit={setEditingTask}
            onDelete={handleDeleteTask}
          />
        </section>
      </main>
    </div>
  );
}
