
import type { Task, TaskPriority } from "../types/task";

// Namespace the key to avoid collisions with other apps.
const STORAGE_KEY = "taskflow.tasks.v1";

const priorities: TaskPriority[] = [
  "low",
  "medium",
  "high",
];

// Validate browser data because localStorage is untrusted.
// "type predicate" (type guard) : function that check complicate type, and do type narrowing
// and the value that casting when function return true, are call "type narrowing"
function isTask(value: unknown): value is Task {

  if (typeof value !== "object" || value === null) {
    return false;
  }

  const item = value as Record<string, unknown>;

  return (
    typeof item.id === "string" &&
    typeof item.title === "string" &&
    typeof item.description === "string" &&
    priorities.includes(item.priority as TaskPriority) &&
    typeof item.completed === "boolean" &&
    typeof item.createdAt === "string"
  );
}

export function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) return [];

    // SyntaxError will throught here, if raw is not valid json string
    const parsed: unknown = JSON.parse(raw);

    // Never assume parsed JSON matches a TypeScript type.
    if (!Array.isArray(parsed)) return [];

    // filter() function that filter all task that consider invalid
    return parsed.filter(isTask);
    
  } catch (error) {
    console.error("Unable to load tasks:", error);
    return [];
  }
}

export function saveTasks(tasks: Task[]): void {
  // Allow the caller to handle quota or security errors.
  // localStorage.setItem() will return exception, when the local storage exceed limit (5MB)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
