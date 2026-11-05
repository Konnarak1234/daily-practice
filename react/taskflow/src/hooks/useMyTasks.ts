import { useEffect, useState } from 'react';
import type { Task, TaskInput, TaskPriority} from '../types/task';
import { loadTasks } from '../services/taskStorage';

export default function useTasks() {
    const [tasks, setTask] = useState<Task[]>(loadTasks);

    useEffect(() => {

    }, [tasks]);

    // function return void, because we don't need return value to trigger UI update
    // React state and useEffect react hook will handle state update for us
    function addTask(input : TaskInput) : void {
        const title = input.title.trim();

        if(!title) return;

        const newTask : Task = {
            id : crypto.randomUUID(),
            title: input.title,
            description : input.description,
            priority : input.priority as TaskPriority,
            completed : false,
            createdAt : new Date().toISOString(),
        }

        setTask((prev) => [...prev, newTask]);
    }



    return addTask;
}

