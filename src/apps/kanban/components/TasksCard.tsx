export default function TasksCard({ taskName }: { taskName: string }) {
  return (
    <div className="bg-white p-2 rounded-md">
      <span className="text-sm">{taskName}</span>
    </div>
  );
}
