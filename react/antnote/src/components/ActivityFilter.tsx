import type { ActFilter } from "../types/activity";



type ActivityFilterProps = {
    search : string,
    filter : ActFilter,
    setSearch : (search : string) => void,
    setFilter : (filter : ActFilter) => void,
}

export function ActivityFilter(props : ActivityFilterProps) {
    return <section className="filters">
            <div className="form-field">
                <label htmlFor="search-filter">Search Task</label>
                <input 
                    type="text" 
                    value={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}
                    id="search-fliter" 
                    placeholder="Search title or description"
                />
            </div>
            <div className="form-field">
                <label htmlFor="select-filter">Search Task</label>
                <select 
                    id="select-filter"
                    value={props.filter}
                    onChange={(e) => props.setFilter(e.target.value as ActFilter)}
                >
                    <option value="all">All</option>
                    <option value="progress">Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
    </section>;
}