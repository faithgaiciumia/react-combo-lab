import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Edit, MoreVertical, Trash } from "lucide-react";
import useTasksStore from "../store/useTasksStore";
export default function TasksCard({
  taskName,
  taskId,
}: {
  taskName: string;
  taskId: number;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: taskId.toString(),
    });
  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.9 : 1,
    cursor: "grab",
  };
  const { removeTask } = useTasksStore();
  return (
    <div
      className="bg-white p-2 rounded-md"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm">{taskName}</span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-2">
            <DropdownMenuItem asChild className="justify-start">
              <Button
                variant={"ghost"}
                className="text-blue-600 w-[100%] hover:text-blue-800"
              >
                <Edit color="blue" /> Edit
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="justify-start">
              <Button
                variant={"ghost"}
                onClick={() => removeTask(taskId)}
                className="text-red-600 w-[100%] hover:text-red-800"
              >
                <Trash color="red" />
                Delete
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
