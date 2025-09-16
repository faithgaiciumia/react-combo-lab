import { Switch } from "@/components/ui/switch";

export default function TopNav() {
  return (
    <div className="bg-fuchsia-400 p-4">
      <nav className="flex items-center justify-between">
        <h1 className="font-bold">Kampuni</h1>
        <h1 className="font-semibold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-sm">Light</h1>
          <Switch />
          <h2 className="text-sm">Dark</h2>
        </div>
      </nav>
    </div>
  );
}
