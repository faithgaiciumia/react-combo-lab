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
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold">{field.label} Input</h1>
          </div>
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
        <div className="bg-purple-400 text-white p-1 max-w-[80px] rounded-md flex items-center justify-center">
          <span className="text-sm">{field.type}</span>
        </div>
        {field.options && (
          <div className="mt-4">
            <h3 className="font-semibold text-sm">Options:</h3>
            <ul className="list-disc mx-4">
              {field.options.map((option, index) => (
                <li key={index} className="text-sm">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
        {field.required && (
          <div className="my-4">
            <h4 className="text-red-600 text-sm font-bold">*Required</h4>
          </div>
        )}
      </div>
    </div>
  );
}
