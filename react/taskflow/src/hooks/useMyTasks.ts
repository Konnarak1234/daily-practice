import { useEffect, useState } from "react";
import type { Task, TaskInput, TaskPriority } from "../types/task";
import { loadTasks, saveTasks } from "../services/taskStorage";

export default function useTasks() {
  const [tasks, setTask] = useState<Task[]>(loadTasks());

  useEffect(() => {
    try{ 
        saveTasks(tasks);
    } catch(e) {

    } 
  }, [tasks]);

  // function return void, because we don't need return value to trigger UI update
  // React state and useEffect react hook will handle state update for us
  function addTask(input: TaskInput): void {
    const title = input.title.trim();

    if (!title) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: input.title,
      description: input.description,
      priority: input.priority as TaskPriority,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTask((prev) => [...prev, newTask]);
  }

  function updateTask(id : string, updatedTask : TaskInput) : void {
        const title = updatedTask.title.trim();
        
        if(!title) return ;

        setTask((previous) => previous.map((task) =>
             id === task.id 
                ? {
                    ...task,
                    title : updatedTask.title,
                    description: updatedTask.description,
                    priority: updatedTask.priority,
                } as Task
                : 
                task
        ));
  }

  function deleteTask(taskId: string): void {
    setTask((previous) => previous.filter((task) => task.id !== taskId));
  }

  function toggledTask(id : string): void {
    setTask((previous) => previous.map((task) => 
        task.id === id 
            ? {
                ...task,
                completed : !task.completed,
            } as Task
            : task,
    ));
  }

  return {
    addTask,
    updateTask,
    deleteTask,
    toggledTask,
  };
}
