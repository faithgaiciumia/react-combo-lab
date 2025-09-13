import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import type { FormField } from "../page";
export default function FieldCard({ field }: { field: FormField }) {
  return (
    <div className="border-gray-500 border-1 rounded-md p-4">
      <div className="flex justify-end items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={"ghost"}>
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <h1>{field.label} Input</h1>
        <h2>Type: {field.type}</h2>
        {field.options && (
          <div>
            <h3>Options:</h3>
            {field.options.map((option, index) => (
              <h3 key={index}>{option}</h3>
            ))}
          </div>
        )}
        {field.required && <h4>Required</h4>}
      </div>
    </div>
  );
}
