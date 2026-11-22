import type { Activity } from "../types/activity";

type ActivityStatsProps = {
    actions : Activity[];
}


export function ActivityStats(props : ActivityStatsProps) {

    const totalActs = props.actions.length;

    let completed = 0;
    let progress = 0;
    let rate = 0;

    if(totalActs) {
        completed = props.actions.filter((act) => act.isCompleted).length;
        progress = totalActs - completed;
        rate = Math.round((completed / totalActs) * 100);
    }



    return <section className="stats-grid">
        <div className="stat-card">
            <span>Total actions</span>
            <strong>{totalActs}</strong>
        </div>
        <div className="stat-card">
            <span>In Progress</span>
            <strong>{progress}</strong>
        </div>
        <div className="stat-card">
            <span>Completed</span>
            <strong>{completed}</strong>
        </div>
        <div className="stat-card">
            <span>completed rate</span>
            <strong>{rate}%</strong>
        </div>
    </section>;
}