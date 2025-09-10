import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Edit, MoreVertical, Trash, GripVertical } from "lucide-react";
import useTasksStore from "../store/useTasksStore";
import { useState } from "react";

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
    opacity: isDragging ? 0.8 : 1,
  };

  const { removeTask } = useTasksStore();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white p-2 rounded-md shadow-sm"
    >
      <div className="flex items-center justify-between">
        {/* Drag handle */}
        <div
          {...listeners}
          {...attributes}
          className="cursor-grab p-1 text-gray-400 hover:text-gray-600"
        >
          <GripVertical size={16} />
        </div>

        {/* Task name */}
        <span className="text-sm flex-1 px-2">{taskName}</span>

        {/* Actions menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
              <MoreVertical size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32">
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                // TODO: open your edit dialog here
                console.log("Edit clicked:", taskId);
              }}
              className="flex items-center gap-2"
            >
              <Edit size={14} className="text-blue-600" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                setDeleteDialogOpen(true);
              }}
              className="flex items-center gap-2 text-red-600"
            >
              <Trash size={14} />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This will permanently delete the task.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                removeTask(taskId);
                setDeleteDialogOpen(false);
              }}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
