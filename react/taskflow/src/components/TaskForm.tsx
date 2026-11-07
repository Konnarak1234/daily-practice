import { useState } from "react";
import type {
  Task,
  TaskInput,
  TaskPriority,
} from "../types/task";

interface TaskFormProps {
  initialTask?: Task;
  onSubmit: (input: TaskInput) => void;
  onCancel?: () => void;
}

// React form Component
export function TaskForm({
  initialTask,
  onSubmit,
  onCancel,
}: TaskFormProps) {
    // because initiialTask could be undefine, so we mark it with ? to avoaid crashing during accessing property
    // initialTask?.title will return undefine , if initialTask is undefine
  const [title, setTitle] = useState(
    initialTask?.title ?? ""
  );

  const [description, setDescription] = useState(
    initialTask?.description ?? ""
  );

  const [priority, setPriority] = useState<TaskPriority>(
    initialTask?.priority ?? "medium"
  );

  function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!title.trim()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      priority,
    });

    // Reset only when creating a task.
    if (!initialTask) {
      setTitle("");
      setDescription("");
      setPriority("medium");
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="task-title">Task title</label>

        <input
          id="task-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Build React dashboard"
          maxLength={120}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="task-description">Description</label>

        <textarea
          id="task-description"
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
          placeholder="Describe your task..."
          rows={3}
          maxLength={1000}
        />
      </div>

      <div className="form-field">
        <label htmlFor="task-priority">Priority</label>

        <select
          id="task-priority"
          value={priority}
          onChange={(event) =>
            setPriority(event.target.value as TaskPriority)
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="primary-button">
          {initialTask ? "Save changes" : "Add task"}
        </button>

        {onCancel && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
