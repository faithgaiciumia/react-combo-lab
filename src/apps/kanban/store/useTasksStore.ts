import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Task {
  id: number;
  taskName: string;
  status: "todo" | "inProgress" | "done";
}

interface TaskStore {
  todoTasks: Task[];
  inProgress: Task[];
  done: Task[];
  addTask: (task: Task) => void;
  moveTask: (id: number, newStatus: "todo" | "inProgress" | "done") => void;
  removeTask: (id: number) => void;
  updateTaskName: (id: number, taskName: string) => void;
}

const useTasksStore = create<TaskStore>()(
  persist(
    (set) => ({
      todoTasks: [],
      inProgress: [],
      done: [],

      addTask: (task: Task) =>
        set((state) => {
          if (task.status === "todo") {
            return { ...state, todoTasks: [...state.todoTasks, task] };
          } else if (task.status === "inProgress") {
            return { ...state, inProgress: [...state.inProgress, task] };
          } else if (task.status === "done") {
            return { ...state, done: [...state.done, task] };
          }
          return state;
        }),

      moveTask: (id: number, newStatus: "todo" | "inProgress" | "done") =>
        set((state) => {
          let taskToMove: Task | undefined;
          let updatedTodoTasks = [...state.todoTasks];
          let updatedInProgress = [...state.inProgress];
          let updatedDone = [...state.done];

          updatedTodoTasks = updatedTodoTasks.filter((task) => {
            if (task.id === id) {
              taskToMove = { ...task, status: newStatus };
              return false;
            }
            return true;
          });

          if (!taskToMove) {
            updatedInProgress = updatedInProgress.filter((task) => {
              if (task.id === id) {
                taskToMove = { ...task, status: newStatus };
                return false;
              }
              return true;
            });
          }

          if (!taskToMove) {
            updatedDone = updatedDone.filter((task) => {
              if (task.id === id) {
                taskToMove = { ...task, status: newStatus };
                return false;
              }
              return true;
            });
          }

          if (taskToMove) {
            if (newStatus === "todo") {
              updatedTodoTasks = [...updatedTodoTasks, taskToMove];
            } else if (newStatus === "inProgress") {
              updatedInProgress = [...updatedInProgress, taskToMove];
            } else if (newStatus === "done") {
              updatedDone = [...updatedDone, taskToMove];
            }
          }

          return {
            todoTasks: updatedTodoTasks,
            inProgress: updatedInProgress,
            done: updatedDone,
          };
        }),

      removeTask: (id: number) =>
        set((state) => ({
          todoTasks: state.todoTasks.filter((task) => task.id !== id),
          inProgress: state.inProgress.filter((task) => task.id !== id),
          done: state.done.filter((task) => task.id !== id),
        })),

      updateTaskName: (id: number, taskName: string) =>
        set((state) => {
          const update = (tasks: Task[]) =>
            tasks.map((t) => (t.id === id ? { ...t, taskName } : t));

          return {
            todoTasks: update(state.todoTasks),
            inProgress: update(state.inProgress),
            done: update(state.done),
          };
        }),
    }),
    {
      name: "tasks-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTasksStore;
