import type { Task } from "../types/task";

interface TaskStatsProps {
  tasks: Task[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const active = total - completed;

  const completionRate =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="stats-grid" aria-label="Task statistics">
      <div className="stat-card">
        <span>Total tasks</span>
        <strong>{total}</strong>
      </div>

      <div className="stat-card">
        <span>Active</span>
        <strong>{active}</strong>
      </div>

      <div className="stat-card">
        <span>Completed</span>
        <strong>{completed}</strong>
      </div>

      <div className="stat-card">
        <span>Completion rate</span>
        <strong>{completionRate}%</strong>
      </div>
    </section>
  );
}
