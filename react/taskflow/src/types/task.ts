export type TaskPriority = "high" | "medium" | "low";

export type TaskFilter = "all" | "progress" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  completed: boolean;
  createdAt: string;
}

// Pick<type, key union> is build-in React Ultility Type
export type TaskInput = Pick<
    Task, 
    "title" | "description" | "priority"
>;
