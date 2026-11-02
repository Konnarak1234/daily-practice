export type TaskPriority = "high" | "medium" | "low";

export type TaskFilter = "all" | "completed" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  completed: boolean;
  createdAt: string;
}

export type TaskInput = Pick<
    Task, 
    "title" | "description" | "priority"
>;
