import BuilderPanel from "./components/BuilderPanel";

export default function FormBuilder() {
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <h1 className="font-bold text-xl">Form Builder</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 my-2">
        <BuilderPanel/>
        <div>
          <h1>Form Preview</h1>
        </div>
      </div>
    </div>
  );
}
