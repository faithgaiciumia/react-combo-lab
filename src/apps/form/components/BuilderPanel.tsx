import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch"

export default function BuilderPanel() {
  return (
    <div className="w-[100%] p-2 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-md">Builder Panel</h1>
        <Button>Clear All</Button>
      </div>
      <div className="flex my-4 justify-center">
        <Dialog>
          <DialogTrigger asChild><Button className="bg-pink-600 hover:bg-pink-800">Add Field</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Field to Form</DialogTitle>
            </DialogHeader>
            <form className="flex gap-4 flex-col">
              <div className="flex gap-2 flex-col">
                <Label>Choose Field Type:</Label>
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="number">Number</SelectItem>
                    <SelectItem value="select">Select</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2 flex-col">
                <Label>Enter Label:</Label>
                <Input placeholder="eg., Full Name"/>
              </div>
              <div className="flex gap-2 flex-col">
                <Label>Add Options:</Label>
                <Input />
                <Button variant={"outline"} className="border-pink-600 text-pink-600 w-[120px]">Add Another</Button>
              </div>
              <div className="flex items-center gap-4">
                <Label>Required</Label>
                <Switch/>
              </div>
              <div className="flex justify-center items-center">
                <Button className="bg-pink-600 hover:bg-pink-800 w-[200px]">Create Field</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
