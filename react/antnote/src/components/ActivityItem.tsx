import type { Activity } from "../types/activity";


type ActivityItemProps = {
    activity : Activity,
    onEdit : (editActivity : Activity) => void,
    onDelete : (id : string) => void,
    onToggle : (id:string) => void,
}

export function ActivityItem(props : ActivityItemProps) {
    return <article className="activity-item">
        
        <p>{props.activity.title}</p>
    </article>;
}