import { useEffect, useState } from "react";
import type { Task, TaskInput } from "../types/task";
import { loadTasks, saveTasks } from "../services/taskStorage";

export function useTasks() {

  // Lazy initialization reads storage only when state initializes.
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  const [storageError, setStorageError] = useState<string | null>(
    null
  );

  // Synchronize React state with browser storage.
  useEffect(() => {
    try {
      saveTasks(tasks);
    } catch (error) {
      console.error("Unable to save tasks:", error);
      setStorageError("Tasks could not be saved to this browser.");
    }
  }, [tasks]);

  // function use for adding task
  function addTask(input: TaskInput): void {
    const title = input.title.trim();

    // checking title is nullable  after trim()
    if (!title) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description: input.description.trim(),
      priority: input.priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    // Immutable update creates a new array.
    setTasks((previous) => [newTask, ...previous]);
  }

  function updateTask(id: string, input: TaskInput): void {
    const title = input.title.trim();

    if (!title) return;

    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? {
              ...task,
              title,
              description: input.description.trim(),
              priority: input.priority,
            }
          : task
      )
    );
  }

  function toggleTask(id: string): void {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id: string): void {
    setTasks((previous) =>
      previous.filter((task) => task.id !== id)
    );
  }

  function clearCompleted(): void {
    setTasks((previous) =>
      previous.filter((task) => !task.completed)
    );
  }

  return {
    tasks,
    storageError,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  };
}
