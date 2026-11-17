
import { apiRequest } from "./apiClient";
import type { Task, TaskInput } from "../types/task";

export const taskApi = {
  getAll(): Promise<Task[]> {
    return apiRequest<Task[]>("/tasks");
  },

  create(input: TaskInput): Promise<Task> {
    return apiRequest<Task>("/tasks", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },

  update(id: string, input: Partial<Task>): Promise<Task> {
    return apiRequest<Task>(
      `/tasks/${encodeURIComponent(id)}`,
      {
        method: "PATCH",
        body: JSON.stringify(input),
      }
    );
  },

  remove(id: string): Promise<void> {
    return apiRequest<void>(
      `/tasks/${encodeURIComponent(id)}`,
      {
        method: "DELETE",
      }
    );
  },
};
