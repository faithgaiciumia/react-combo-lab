import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashboardData } from "../data/data";

export default function TopSellingProducts() {
  return (
    <div>
      <h2 className="font-bold text-md">Top Selling Products</h2>
      <div className="w-[200px] mb-4">
        <Separator className="border-gray-900 border-2" />
      </div>
      <div className="p-2">
        <BarChart width={500} height={300} data={dashboardData.topCategories}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </div>
    </div>
  );
}
