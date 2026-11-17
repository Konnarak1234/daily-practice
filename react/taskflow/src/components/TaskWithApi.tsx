
import { useEffect, useState } from "react";
import { taskApi } from "../services/taskApi";
import type { Task } from "../types/task";

export function ApiTaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchTasks() {
      try {
        setLoading(true);
        setError(null);

        const result = await taskApi.getAll();

        // Ignore results after the Effect is cleaned up.
        if (!cancelled) {
          setTasks(result);
        }
      } catch (error) {
        if (!cancelled) {
          setError(
            error instanceof Error
              ? error.message
              : "Unexpected error"
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void fetchTasks();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p>Loading tasks...</p>;

  if (error) return <p role="alert">{error}</p>;

  if (tasks.length === 0) return <p>No tasks found.</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
