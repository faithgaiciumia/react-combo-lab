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
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import { useState, type SetStateAction } from "react";
import type { FormField } from "../page";

export default function BuilderPanel({
  setFormFields,
}: {
  setFormFields: React.Dispatch<SetStateAction<FormField[]>>;
}) {
  const [type, setType] = useState<"text" | "email" | "number" | "select" | "">(
    ""
  );
  const [label, setLabel] = useState("");
  const [singleOption, setSingleOption] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [required, setRequired] = useState(false);

  const handleAddOption = () => {
    if (!singleOption.trim()) return;
    setOptions((prev) => [...prev, singleOption.trim()]);
    setSingleOption("");
  };
  const handleOptionRemove = (index: number) => {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !label.trim()) return;

    const newField: FormField = {
      id: crypto.randomUUID(),
      type,
      label: label.trim(),
      options: type === "select" ? options : [],
      required,
    };
    setFormFields((prev) => [...prev, newField]);

    //reset fields
    setType("");
    setLabel("");
    setOptions([]);
    setSingleOption("");
    setRequired(false);
  };
  return (
    <div className="w-[100%] p-2 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-md">Builder Panel</h1>
        <Button>Clear All</Button>
      </div>
      <div className="flex my-4 justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-pink-600 hover:bg-pink-800">Add Field</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Field to Form</DialogTitle>
            </DialogHeader>
            <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
              <div className="flex gap-2 flex-col">
                <Label>Choose Field Type:</Label>
                <Select
                  value={type}
                  onValueChange={(val) =>
                    setType(val as "" | "text" | "number" | "select")
                  }
                  required
                >
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
                <Input
                  required
                  placeholder="eg., Full Name"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
              </div>
              {type === "select" && (
                <div className="flex gap-2 flex-col">
                  <Label>Add Options:</Label>
                  <Input
                    value={singleOption}
                    onChange={(e) => setSingleOption(e.target.value)}
                  />
                  <Button
                    variant={"outline"}
                    className="border-pink-600 text-pink-600 w-[120px]"
                    onClick={handleAddOption}
                    type="button"
                  >
                    Add Another
                  </Button>
                  {options.length > 0 && (
                    <div className="bg-gray-100 p-2 shadow-sm">
                      {options.map((option, index) => (
                        <div
                          className="flex justify-between items-center"
                          key={index}
                        >
                          <span className="text-sm">{option}</span>
                          <Button
                            variant={"ghost"}
                            onClick={() => handleOptionRemove(index)}
                          >
                            <X />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <div className="flex items-center gap-4">
                <Label>Required</Label>
                <Switch
                  id="required"
                  checked={required}
                  onCheckedChange={(val) => setRequired(val)}
                />
              </div>
              <div className="flex justify-center items-center">
                <Button
                  className="bg-pink-600 hover:bg-pink-800 w-[200px]"
                  type="submit"
                >
                  Create Field
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
