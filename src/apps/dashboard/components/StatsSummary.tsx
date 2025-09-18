import { Separator } from "@/components/ui/separator";
import StatsSumCard from "./StatsSumCard";

const stats = [
  {
    statName: "Total Sales",
    statValue: "$54,320",
    statColor: "text-rose-600",
  },
  {
    statName: "Active Customers",
    statValue: "1,245",
    statColor: "text-violet-600",
  },
  {
    statName: "Orders Today",
    statValue: "182",
    statColor: "text-sky-600",
  },
  {
    statName: "Conversion Rate",
    statValue: "4.7%",
    statColor: "text-cyan-600",
  },
];
export default function StatsSummary() {
  return (
    <div>
      <h2 className="font-bold text-md">Stats Summary</h2>
      <div className="w-[200px] mb-4">
        <Separator className="border-gray-900 border-2" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {stats.map((stat, index)=>(
            <StatsSumCard key={index} statName={stat.statName} statValue={stat.statValue} statColor={stat.statColor}/>
        ))}
      </div>
    </div>
  );
}
