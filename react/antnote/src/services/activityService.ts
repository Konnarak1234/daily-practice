import type { Activity } from "../types/activity";

const isPriority : String[] = [
    "low",
    "medium",
    "high",
];

const STORAGE_KEY : string = "activities";

function isActivity(input : unknown) : input is Activity {
    if(!input || typeof input !== "object" || Array.isArray(input)) return false;

    const objectInput = input as  Record<string, unknown>;

    
    return (
       typeof objectInput.id === "string" &&
       typeof objectInput.title === "string" &&
       typeof objectInput.description === "string" &&
       typeof objectInput.isCompleted === "boolean" &&
       isPriority.includes(objectInput.priority as string) &&
       typeof objectInput.created === "string"
    );

}

export function loadActivities() : Activity[] {
    // load task from localstorage
    // success => do
        // check and validate the formate of activities - if it's array or not
        // check and validate formate of each ativity in activities
        // => if pass : return ;
        // => if false : return activity;
    // not (when browser block localstorage)=> print(error) + return []

    try {
        const rawData = localStorage.getItem(STORAGE_KEY);

        // if it's null
        if(!rawData) return [];

        const actsData : any = JSON.parse(rawData!);

        if(!Array.isArray(actsData)) return [];

        // until here, actsData must be array
        // let check the type of element of array. Expected (Activity) and reject else
        // using type predicate, since Actitity is not primary type

        return actsData.filter(isActivity);


    } catch(e) {
        console.log(`Can't load user activity ${e}`)
        return [];
    }
}

export function storeActivities(input : Activity[]) : void {
    const activities = JSON.stringify(input);
    localStorage.setItem(STORAGE_KEY, activities);
}