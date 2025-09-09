import { useDroppable } from "@dnd-kit/core";
import type { Task } from "../types/kanbanTypes";
import TasksCard from "./TasksCard";

interface ColumnProps {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}
export default function Column({ id, title, color, tasks }: ColumnProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    opacity: isOver ? 0.9 : 1,
    transition: "opacity 0.2s ease",
  };
  return (
    <div
      className={`p-2 shadow-sm rounded-sm ${color}`}
      ref={setNodeRef}
      style={style}
    >
      <h2 className="mb-2 font-bold text-md">
        {title} {tasks.length > 0 && <span>({tasks.length})</span>}
      </h2>
      {tasks.map((task) => (
        <TasksCard key={task.id} taskName={task.taskName} taskId={task.id} />
      ))}
    </div>
  );
}
