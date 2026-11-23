import { ActivityFilter } from "./components/ActivityFilter";
import { ActivityForm } from "./components/ActivityForm";
import { ActivityList }  from "./components/ActivityList";
import { ActivityStats }  from "./components/ActivityStats";


// import { actionList } from "./data/actions";
import useActivities from "./hooks/useActivities";
import { useState } from "react";
import type { ActFilter, Activity, ActivityInput } from "./types/activity";


import "./App.css";


export default function App() {

    const {
        activities,
        createActivity,
        updateActivity,
        deleteActivity,
        toggleActivity
    } = useActivities();

    const [editActivity, setEditActivity] = useState<Activity | null >(null);

    const [search, setSearch] = useState<string>("");

    const [filter, setFilter] = useState<ActFilter>("all");

    function handleSaveTask(input: ActivityInput) {
        if(editActivity) {
            updateActivity(editActivity.id, input);
            setEditActivity(null);
        } else {
            createActivity(input);
        }
    }


    return <div className="app-shell">
        <div className="app-header">

        </div>

        {/* activity statistic */}
        
        <main className="dashboard">

            <ActivityStats actions={activities}/>

            <section className="panel">
                <h2>Create a new activity</h2>

                {/* action form */}
                <ActivityForm 
                    key={editActivity?.id ?? "new-task"}
                    initialActivity={editActivity ?? undefined}
                    onSubmit={handleSaveTask}
                    onCancel={
                        editActivity ? 
                            () => setEditActivity(null) 
                            : undefined
                    }
                />
            </section>

            <section className="panel">
                <div className="section-header">
                    <h2>My Activities</h2>

                    <button>Clear Actions</button>
                </div>

                {/* action filter*/}
                <ActivityFilter
                    search={search}
                    filter={filter}
                    setSearch={setSearch}
                    setFilter={setFilter}
                />

                {/* action List */}
                <ActivityList
                    activities={activities}
                    onEdit={setEditActivity}
                    onDelete={deleteActivity}
                    onToggle={toggleActivity}
                />

            </section>
        </main>
    </div>
}