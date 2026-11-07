
import type { TaskFilter } from "../types/task";

interface TaskFiltersProps {
  filter: TaskFilter;
  search: string;
  onFilterChange: (filter: TaskFilter) => void;
  onSearchChange: (search: string) => void;
}

export function TaskFilters({
  filter,
  search,
  onFilterChange,
  onSearchChange,
}: TaskFiltersProps) {
  return (
    <div className="filters">
      <div className="form-field">
        <label htmlFor="task-search">Search tasks</label>

        <input
          id="task-search"
          type="search"
          value={search}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          placeholder="Search title or description"
        />
      </div>

      <div className="form-field">
        <label htmlFor="status-filter">Status</label>

        <select
          id="status-filter"
          value={filter}
          onChange={(event) =>
            onFilterChange(event.target.value as TaskFilter)
          }
        >
          <option value="all">All tasks</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
}
