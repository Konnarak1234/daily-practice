import { ActivityFilter } from "./components/ActivityFilter";
import { ActivityForm } from "./components/ActivityForm";
import { ActivityList }  from "./components/ActivityList";
import { ActivityStats }  from "./components/ActivityStats";


// import { actionList } from "./data/actions";
import useActivities from "./hooks/useActivities";
import { useState } from "react";
import type { Activity, ActivityInput } from "./types/activity";


import "./App.css";


export default function App() {

    const {
        activities,
        createActivity,
        updateActivity,
    } = useActivities();

    const [editActivity, setEditActivity] = useState<Activity | null >(null);
   
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
                {/* action filter*/}
                <ActivityFilter/>

                {/* action List */}
                <ActivityList/>

            </section>
        </main>
    </div>
}