import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
export default function TasksCard({
  taskName,
  taskId,
}: {
  taskName: string;
  taskId: number;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: taskId.toString(),
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    opacity:isDragging?0.5:1,
    cursor:"grab"
  };
  return (
    <div
      className="bg-white p-2 rounded-md"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <span className="text-sm">{taskName}</span>
    </div>
  );
}
