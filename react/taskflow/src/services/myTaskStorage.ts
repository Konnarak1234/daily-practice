import type { Task } from '../types/task'

const STORAGE_KEY = 'taskflow.v1';

const priorities = [
    'high',
    'medium',
    'low'
];

function isTask(value : unknown) : value is Task {

    if(typeof value !== "object" || value == null) return false;

    const item = value as Record<string, unknown>;

    return (typeof item.id === "string" &&
        typeof item.title === "string" &&
        typeof item.description === "string" &&
        priorities.includes(item.priority as TaskPriority) &&
        typeof item.completed === "boolean" &&
        typeof item.createdAt === "string");
} 

export function loadTasks() : Task[] {
    try{ 

        const raw = localStorage.getItem(STORAGE_KEY);

        if(raw == null) return [];

        const tasks = JSON.parse(raw);

        if(!Array.isArray(raw)) return [];

        return tasks.filter(isTask);

    } catch(error) {
        console.error("Unable to load tasks:", error);
        return [];
    }
    
}


export function storeTask(value : Task[]) : void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}