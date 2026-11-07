import React, { useState } from "react";
import type { Task, TaskInput, TaskPriority } from "../types/task";


interface TaskFormProps {
    initialTask? : Task,
    onSubmit : (input: TaskInput) => void
}

export function TaskForm(props : TaskFormProps) {

    const [title, setTitle] = useState(props.initialTask?.title ?? "");
    const [description, setDescription] = useState(props.initialTask?.description ?? "");
    const [priority, setPriority] = useState<TaskPriority>(props.initialTask?.priority ?? "medium");

    function handleSubmit(event : React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        if(!title.trim()) return;

        const newTask : TaskInput = {
            title: title.trim(),
            description: description.trim(),
            priority,
        }

       props.onSubmit(newTask);

       // clearing all input
       setTitle("");
       setDescription("");
       setPriority("medium");
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <input 
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="eg. Complete my react tutorial"
            required
             />
        </div>
        <div>
            <textarea 
                value={description}
                onChange={(event) =>
                setDescription(event.target.value)
                }
                placeholder="Describe your task..."
                rows={3}
                maxLength={1000}
            />
        </div>

        <div>
            <select 
                value={priority}
                onChange={(event) => setPriority(event.target.value as TaskPriority)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        
        
        

        <button type="submit">{props.initialTask ? "update" : "create"}</button>
    </form>
}