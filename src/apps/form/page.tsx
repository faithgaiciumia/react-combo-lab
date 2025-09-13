import { useState } from "react";
import BuilderPanel from "./components/BuilderPanel";

export interface FormField {
  id: string;
  type: "text" | "email" | "number" | "select";
  label: string;
  required: boolean;
  options?: string[];
}
export default function FormBuilder() {
  const [formFields, setFormFields] = useState<FormField[]>([]);
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <h1 className="font-bold text-xl">Form Builder</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 my-2">
        <BuilderPanel setFormFields={setFormFields} />
        <div>
          <h1>Form Preview</h1>
          {formFields.map((field, index) => (
            <h1 key={index}>{field.type}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}
