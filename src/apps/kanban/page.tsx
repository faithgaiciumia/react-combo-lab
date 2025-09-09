import TasksCard from "./components/TasksCard";
import AddNewDialog from "./components/AddNewDialog";
import useTasksStore from "./store/useTasksStore";

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
        <div className="bg-sky-200 p-2 shadow-sm rounded-sm">
          <h2 className="mb-2 font-bold text-md">
            To-Do {todoTasks.length > 0 && <span>({todoTasks.length})</span>}
          </h2>
          {todoTasks.map((task) => (
            <TasksCard key={task.id} taskName={task.taskName} taskId={task.id} />
          ))}
        </div>
        <div className="bg-amber-200 p-2 shadow-sm rounded-sm">
          <h2 className="mb-2 font-bold text-md">
            In Progress{" "}
            {inProgress.length > 0 && <span>({inProgress.length})</span>}
          </h2>
          {inProgress.map((task) => (
            <TasksCard key={task.id} taskName={task.taskName} taskId={task.id} />
          ))}
        </div>
        <div className="bg-teal-200 p-2 shadow-sm rounded-sm">
          <h2 className="mb-2 font-bold text-md">
            Done {done.length > 0 && <span>({done.length})</span>}
          </h2>
          {done.map((task) => (
            <TasksCard key={task.id} taskName={task.taskName} taskId={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
