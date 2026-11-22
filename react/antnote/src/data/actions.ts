import type { Activity } from "../types/activity";


export const actionList : Activity[] = [
    {
        id : "ACT001",
        title : "Morning study section",
        description : "Do 3 hours study",
        priority : "high",
        isCompleted : true,
        created : Date.now().toString(),
    },
    {
        id : "ACT002",
        title : "Cool Shower",
        description : "Refresh my self after morning study session",
        priority : "medium",
        isCompleted : false,
        created : Date.now().toString(),
    },
    {
        id : "ACT003",
        title : "Brunch time",
        description : "I usaully combine my lunch together",
        priority : "low",
        isCompleted : false,
        created : Date.now().toString(),
    },
];