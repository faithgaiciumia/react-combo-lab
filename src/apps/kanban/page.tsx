import AddNewDialog from "./components/AddNewDialog";
import useTasksStore from "./store/useTasksStore";
import Column from "./components/Column";

export default function Kanban() {
  const { todoTasks, inProgress, done } = useTasksStore();

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
        <Column title="To-Do" color="bg-sky-200" tasks={todoTasks} id="todo" />
        <Column title="In Progress" color="bg-amber-200" tasks={inProgress} id="inProgress" />
        <Column title="Done" color="bg-teal-200" tasks={done} id="done" />
      </div>
    </div>
  );
}
