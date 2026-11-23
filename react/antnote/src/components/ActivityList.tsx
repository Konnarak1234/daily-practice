import type { Activity } from "../types/activity";
import { ActivityItem } from "./ActivityItem";


type ActivityListProps = {
    activities : Activity[],
    onEdit : (editActivity : Activity) => void,
    onDelete : (id : string) => void,
    onToggle : (id:string) => void,
}

export function ActivityList(props : ActivityListProps) {

    if(props.activities.length === 0) {
        return <p>
            No Activity to do today!
        </p>
    }

    return <section className="activity-list">
        {props.activities.map(
            (action) => 
                <ActivityItem
                    activity={action}
                    onEdit={props.onEdit}
                    onDelete={props.onDelete}
                    onToggle={props.onToggle}
                />
        )}
    </section>;
}