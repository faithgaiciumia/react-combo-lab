import { Separator } from "@radix-ui/react-dropdown-menu";
import { Pie, PieChart } from "recharts";
import { dashboardData } from "../data/data";

export default function SalesDistribution() {
  return (
    <div>
      <h2 className="font-bold text-md">Sales Distribution (by region)</h2>
      <div className="w-[200px] mb-4">
        <Separator className="border-gray-900 border-2" />
      </div>
      <div className="p-2">
        <PieChart width={400} height={400}>
          <Pie
            data={dashboardData.regionalSales}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
        </PieChart>
      </div>
    </div>
  );
}
