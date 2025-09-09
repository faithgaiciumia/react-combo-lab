export interface Task {
  id: number;
  taskName: string;
  status: "todo" | "inProgress" | "done";
}
