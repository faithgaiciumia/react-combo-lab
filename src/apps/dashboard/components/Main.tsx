import MonthlySalesTrend from "./MonthlySalesTrend";
import SalesDistribution from "./SalesDistribution";
import StatsSummary from "./StatsSummary";
import TopSellingProducts from "./TopSellingProducts";

export default function Main() {
  return (
    <div className="bg-white shadow-md rounded-md mt-4 w-full col-span-5 p-4 flex flex-col gap-4">
      <StatsSummary />
      <div className="grid grid-cols-2 gap-4">
        <MonthlySalesTrend />
      <TopSellingProducts />
      <SalesDistribution />
      </div>
    </div>
  );
}
