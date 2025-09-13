import { Input } from "@/components/ui/input";
import type { FormField } from "../page";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function FormPreview({
  formFields,
}: {
  formFields: FormField[];
}) {
  console.log(formFields);
  return (
    <div className="w-[100%] p-2 rounded-md shadow-md">
      <div>
        <h1 className="font-bold text-md">Form Preview</h1>
      </div>
      <div className="my-4">
        <form className="flex flex-col gap-2">
          {formFields.map((field, index) =>
            field.type !== "select" ? (
              <div key={index} className="flex flex-col gap-2">
                <Label>{field.label}</Label>
                <Input type={field.type} />
              </div>
            ) : (
              <div key={index} className="flex flex-col gap-2">
                <Label>{field.label}</Label>
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Select Option" />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map((option, index) => (
                      <SelectItem value={option} key={index}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )
          )}
          <div className="flex justify-center items-center my-4">
            <Button className="bg-teal-600 w-[50%]">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
