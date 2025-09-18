import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashboardData } from "../data/data";

export default function MonthlySalesTrend() {
  return (
    <div>
      <h2 className="font-bold text-md">Monthly Sales</h2>
      <div className="w-[200px] mb-4">
        <Separator className="border-gray-900 border-2" />
      </div>
      <div className="p-2">
        <LineChart data={dashboardData.monthlySales} width={500} height={300}>
          <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="purple"
            strokeWidth={2}
            name="Monthly Sales"
          />
          <XAxis dataKey="month" />
          <YAxis
            width="auto"
            label={{ value: "Sales", position: "insideLeft", angle: -90 }}
          />
          <Legend align="right" />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}
