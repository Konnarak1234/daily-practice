
export type ActPriority = "low" | "medium" | "high";

export type Activity = { // Record<String, any>
    id : string,
    title : string,
    description : string,
    priority : ActPriority,
    isCompleted : boolean,
    created : string,
};

export type ActFilter = "all" | "progress" | "done";

export type inputActivity = Pick<Activity, "title" | "description" | "priority">;

