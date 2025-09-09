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

          // remove from todo
          updatedTodoTasks = updatedTodoTasks.filter((task) => {
            if (task.id === id) {
              taskToMove = { ...task, status: newStatus };
              return false;
            }
            return true;
          });

          // remove from inProgress
          if (!taskToMove) {
            updatedInProgress = updatedInProgress.filter((task) => {
              if (task.id === id) {
                taskToMove = { ...task, status: newStatus };
                return false;
              }
              return true;
            });
          }

          // remove from done
          if (!taskToMove) {
            updatedDone = updatedDone.filter((task) => {
              if (task.id === id) {
                taskToMove = { ...task, status: newStatus };
                return false;
              }
              return true;
            });
          }

          // add to new status
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
    }),
    {
      name: "tasks-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTasksStore;
