import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import type { FormField } from "../page";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditForm from "./EditForm";
import { DialogDescription } from "@radix-ui/react-dialog";
export default function FieldCard({
  field,
  editFormField,
  deleteFormField,
}: {
  field: FormField;
  editFormField: (id: string, updatedData: Partial<FormField>) => void;
  deleteFormField: (id: string) => void;
}) {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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
              <DropdownMenuItem onClick={() => setEditFormOpen(true)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)}>
                Delete
              </DropdownMenuItem>
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
        {/* edit form dialog */}
        <Dialog open={editFormOpen} onOpenChange={setEditFormOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Field</DialogTitle>
            </DialogHeader>
            <EditForm
              field={field}
              onSave={(updatedData) => {
                editFormField(field.id, updatedData);
                setEditFormOpen(false);
              }}
              onCancel={() => setEditFormOpen(false)}
            />
          </DialogContent>
        </Dialog>
        {/* delete dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Field</DialogTitle>
              <DialogDescription className="text-sm">
                Are you sure you want to permanently delete the field?
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-end gap-2">
              <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
              <Button variant={"destructive"} onClick={()=>deleteFormField(field.id)}>Delete</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
