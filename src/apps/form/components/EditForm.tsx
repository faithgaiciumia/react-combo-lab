import { Button } from "@/components/ui/button";

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
import { useState } from "react";
import type { FormField } from "../page";

export default function EditForm({
  field,
  onSave,
  onCancel,
}: {
  field: FormField;
  onSave: (updatedData: Partial<FormField>) => void;
  onCancel: () => void;
}) {
  const [type, setType] = useState<"text" | "email" | "number" | "select" | "">(
    field.type
  );
  const [label, setLabel] = useState(field.label);
  const [singleOption, setSingleOption] = useState("");
  const [options, setOptions] = useState<string[]>(field.options || []);
  const [required, setRequired] = useState(field.required);

  const handleOptionRemove = (index: number) => {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  };
  const handleAddOption = () => {
    if (!singleOption.trim()) return;
    setOptions((prev) => [...prev, singleOption.trim()]);
    setSingleOption("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      type,
      label: label.trim(),
      options: type === "select" ? options : [],
      required,
    });
  };

  return (
    <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
      <div className="flex gap-2 flex-col">
        <Label>Choose Field Type:</Label>
        <Select
          value={type}
          onValueChange={(val) =>
            setType(val as "" | "text" | "email" | "number" | "select")
          }
        >
          <SelectTrigger className="w-full">
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
            variant="outline"
            className="border-pink-600 text-pink-600 w-[120px]"
            onClick={handleAddOption}
            type="button"
          >
            Add Another
          </Button>
          {options.length > 0 && (
            <div className="bg-gray-100 p-2 shadow-sm">
              {options.map((option, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <span className="text-sm">{option}</span>
                  <Button
                    variant="ghost"
                    type="button"
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

      <div className="flex justify-between gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          className="bg-pink-600 hover:bg-pink-800 w-[200px]"
          type="submit"
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
}
