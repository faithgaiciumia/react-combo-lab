import type { Task } from "../types/kanbanTypes";
import TasksCard from "./TasksCard";

interface ColumnProps {
  title: string;
  color: string;
  tasks: Task[];
}
export default function Column({ title, color, tasks }: ColumnProps) {
  return (
    <div className={`p-2 shadow-sm rounded-sm ${color}`}>
      <h2 className="mb-2 font-bold text-md">
        {title} {tasks.length > 0 && <span>({tasks.length})</span>}
      </h2>
      {tasks.map((task) => (
        <TasksCard key={task.id} taskName={task.taskName} taskId={task.id} />
      ))}
    </div>
  );
}
