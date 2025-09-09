import TasksCard from "./components/TasksCard";
import AddNewDialog from "./components/AddNewDialog";

export default function Kanban() {
  return (
    <div className="p-4">
      {/* heading */}
      <div className="flex items-center justify-center">
        <h1 className="font-bold">Trello-Like Kanban Board</h1>
      </div>
      {/* button */}
      <div className="flex items-center justify-end p-2 my-2">
        <AddNewDialog />
      </div>
      {/* three columns */}
      <div className="grid md:grid-cols-3 gap-2 my-4 min-h-[50vh]">
        <div className="bg-sky-200 p-2 shadow-sm rounded-sm">
          <h2 className="mb-2 font-bold text-md">To-Do (10)</h2>
          <TasksCard />
        </div>
        <div className="bg-amber-200 p-2 shadow-sm rounded-sm">
          <h2 className="mb-2 font-bold text-md">In Progress (10)</h2>
          <TasksCard />
        </div>
        <div className="bg-teal-200 p-2 shadow-sm rounded-sm">
          <h2 className="mb-2 font-bold text-md">Done (10)</h2>
          <TasksCard />
        </div>
      </div>
    </div>
  );
}
