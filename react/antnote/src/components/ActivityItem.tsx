import type { Activity } from "../types/activity";


type ActivityItemProps = {
    activity : Activity,
    onEdit : (editActivity : Activity) => void,
    onDelete : (id : string) => void,
    onToggle : (id:string) => void,
}

export function ActivityItem(props : ActivityItemProps) {

    const date = new Date(Number(props.activity.created));

    return <article className={`activity-item ${props.activity.isCompleted ? "action-completed" : ""}`}>
        
        <input 
            type="checkbox" 
            checked={props.activity.isCompleted}
            onChange={() => props.onToggle(props.activity.id)}
            area-label={`Mark ${props.activity.title} as ${props.activity.isCompleted ? "completed" : "Incomplete"}`}
        />

        <div className="activity-content">
            <h3>{props.activity.title}</h3>
            
            {props.activity.description && (
                <p>{props.activity.description}</p>
            )}

            <div className="activity-meta">
                <span className={`priority priority-${props.activity.priority}`}>
                    {props.activity.priority}
                </span>

                <time dateTime={props.activity.created}>
                    {Number.isNaN(date.getTime())
                    ? "Unknown date"
                    : date.toLocaleDateString()}
                </time>
            </div>
        </div>
        <div className="activity-actions">
            <button
                type="button"
                onClick={() => props.onEdit(props.activity)}
                aria-label={`Edit ${props.activity.title}`}
            >
            Edit
            </button>

            <button
                type="button"
                className="danger-button"
                onClick={() => props.onDelete(props.activity.id)}
                aria-label={`Delete ${props.activity.title}`}
            >
            Delete
            </button>
        </div>
    
    </article>;
}