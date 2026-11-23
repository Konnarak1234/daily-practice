import { useState } from "react";
import type { Activity, ActivityInput, ActPriority } from "../types/activity";

type ActivityFormProps = {
    initialActivity : Activity | undefined,
    onSubmit: (input: ActivityInput) => void,
    onCancel: ( () => void ) | undefined,
};

export function ActivityForm(props : ActivityFormProps) {

    const [title, setTitle] = useState<string>(props.initialActivity?.title ?? "");

    const [description, setDescription] = useState<string>(props.initialActivity?.description ?? ""); 

    const [priority, setPriority] = useState<ActPriority>(props.initialActivity?.priority ?? "medium");

    function handleSubmit(event : React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const inputActivity : ActivityInput = {
            title : title,
            description : description,
            priority : priority
        }

        props.onSubmit(inputActivity);

        if(!props.initialActivity) {
            setTitle("");
            setDescription("");
            setPriority("medium");
        }

    }

    return <form className="act-form" onSubmit={handleSubmit}>
        <div className="form-field">
            <label htmlFor="act-title">Action title</label>
            <input 
                id="act-title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g Having breakfirst" 
            />
        </div>

        <div className="form-field">
            <label htmlFor="act-description">Description</label>
            <textarea 
                className="act-description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="describe your action..."
            />
        </div>

        <div className="form-field">
            <label htmlFor="act-priority">Action priority</label>
            <select 
                id="act-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as ActPriority)}
            >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
        </div>

        <div className="form-actions">
            <button type="submit" className="primary-button">
                Add Action
            </button>
            {props.initialActivity && (
                <button  type="button" onClick={props.onCancel}>
                    Cancel
                </button>
            )}
        </div>

    </form>;
}