import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function AddNewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild><Button>Add New</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Create a new task on any of your lists
          </DialogDescription>
        </DialogHeader>
        <form>
            <Label className="my-2">Task</Label>
            <Input placeholder="Bake birthday cake" name="taskName" required/>
            <div className="my-2 flex items-center justify-end gap-2">
                <Button variant={"destructive"}>Cancel</Button>
                <Button type="submit">Done</Button>
            </div>
        </form>
      </DialogContent>
      
    </Dialog>
  );
}
