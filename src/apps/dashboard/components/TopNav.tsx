import { Switch } from "@/components/ui/switch";
import useTheme from "@/hooks/useTheme";

export default function TopNav() {
  const {theme, setTheme} = useTheme();
  return (
    <div className="bg-fuchsia-400 p-4">
      <nav className="flex items-center justify-between">
        <h1 className="font-bold">Kampuni</h1>
        <h1 className="font-semibold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-sm">Light</h1>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
          <h2 className="text-sm">Dark</h2>
        </div>
      </nav>
    </div>
  );
}
