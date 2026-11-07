import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({
  task,
  onToggle,
  onEdit,
  onDelete,
}: TaskItemProps) {
  const date = new Date(task.createdAt);

  return (
    <article
      className={`task-item ${
        task.completed ? "task-completed" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark ${task.title} as ${
          task.completed ? "incomplete" : "complete"
        }`}
      />

      <div className="task-content">
        <h3>{task.title}</h3>

        {task.description && (
          <p>{task.description}</p>
        )}

        <div className="task-meta">
          <span className={`priority priority-${task.priority}`}>
            {task.priority}
          </span>

          <time dateTime={task.createdAt}>
            {Number.isNaN(date.getTime())
              ? "Unknown date"
              : date.toLocaleDateString()}
          </time>
        </div>
      </div>

      <div className="task-actions">
        <button
          type="button"
          onClick={() => onEdit(task)}
          aria-label={`Edit ${task.title}`}
        >
          Edit
        </button>

        <button
          type="button"
          className="danger-button"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
