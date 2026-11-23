import { useEffect, useState } from "react";
import type { Activity, ActPriority, ActivityInput } from "../types/activity";
import { loadActivities, storeActivities } from "../services/activityService";


// function () { 
// - state, 
// - function() {use that state}
// - return {state, hook logic}
// }

const priorities : ActPriority[] = [
    "low",
    "medium",
    "high"
];

export default function useActivities() {

    const [activities, setActivity] = useState<Activity[]>(loadActivities);
    const [error, setError] = useState<String | null>(null);

    useEffect(() => {
        try {
            // data will lose, when the browser restrict to read data from local storage
            storeActivities(activities);
        } catch(e) {
            setError("Task Could not save to browser");
        }
    }, [activities]);
    
    function createActivity(input: ActivityInput) : void {
        // validate inputActivity : but becuase every input field, are string and doesn't strictly require to be specific, so we might not check
        // if yes : insert it into old activity
        // if no : print(error), store error
            if(input.title.trim() === "" || !priorities.includes(input.priority)) {
                setError("Input is invalid");
                return;
            }

            const newListOfActs : Activity[] = [
                ...activities,
                {
                    id : crypto.randomUUID(),
                    ...input,
                    created: Date.now().toString(),
                    isCompleted: false,
                } as Activity
            ];

            // this is possible to throw an error when, the localStorage is reaching limit
            setActivity(newListOfActs);
    }   

    function updateActivity(id : string, input : ActivityInput) {
        // validate input
        // map throught old activities array
        // update inputActivity
        if(input.title.trim() === "" || !priorities.includes(input.priority)) {
                setError("Input is invalid");
                return;
        }

        setActivity(activities.map(
            (activity) => 
                activity.id !== id ?
                    activity
                    :
                    {
                        ...activity,
                        title : input.title,
                        description : input.description,
                        priority : input.priority,
                    }
        
        ));
    }

    function deleteActivity(id : String) {
        setActivity(activities.filter((prev) => id !== prev.id));
    }

    function toggleActivity(id : String) {
        setActivity(activities.map((prev) => 
            prev.id === id ?
                {
                    ...prev,
                    isCompleted : !prev.isCompleted
                }
                :
                prev
        ));
    }

    return {
        activities,
        error,
        createActivity,
        updateActivity,
        deleteActivity,
        toggleActivity,
    }
}