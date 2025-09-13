import { useEffect, useState } from "react";
import BuilderPanel from "./components/BuilderPanel";
import FormPreview from "./components/FormPreview";

export interface FormField {
  id: string;
  type: "text" | "email" | "number" | "select";
  label: string;
  required: boolean;
  options?: string[];
}
export default function FormBuilder() {
  const [formFields, setFormFields] = useState<FormField[]>([]);
  //load fields from local storage on mount
  useEffect(() => {
    const savedFields = JSON.parse(localStorage.getItem("formFields") || "[]");
    setFormFields(savedFields);
  }, []);

  //logic to add a new field
  const addFormField = (newField: FormField) => {
    const existingFields = JSON.parse(
      localStorage.getItem("formFields") || "[]"
    );
    const updatedFields = [...existingFields, newField];
    setFormFields(updatedFields);
    localStorage.setItem("formFields", JSON.stringify(updatedFields));
  };

  const clearAllFields = () => {
    localStorage.setItem("formFields", "[]")
    setFormFields([]);
  };
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <h1 className="font-bold text-xl">Form Builder</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 my-2">
        <BuilderPanel addFormField={addFormField} formFields={formFields} clearAllFields={clearAllFields}/>
        <FormPreview formFields={formFields}/>
      </div>
    </div>
  );
}
