import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useTasksStore from "../store/useTasksStore";
import { useState } from "react";

export default function AddNewDialog() {
  const { addTask } = useTasksStore();
  const [taskName, setTaskName] = useState("");
  const [open, setOpen] = useState(false);

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask({ id: Date.now(), taskName: taskName, status: "todo" });
      setTaskName("");
      setOpen(false);
    }
  };
  const handleCancel = () => {
    setTaskName("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Create a new task on any of your lists
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddTask}>
          <Label className="my-2">Task</Label>
          <Input
            placeholder="Bake birthday cake"
            name="taskName"
            required
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <div className="my-2 flex items-center justify-end gap-2">
            <Button variant={"destructive"} onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">Done</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
