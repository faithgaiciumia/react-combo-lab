interface StatsProps {
  statName: string;
  statValue: string;
  statColor: string;
}
export default function StatsSumCard({
  statName,
  statValue,
  statColor,
}: StatsProps) {
  return (
    <div className="border-1 p-2 rounded-lg">
      <h1 className="font-semibold text-sm">{statName}</h1>
      <h2 className={`font-bold text-3xl ${statColor}`}>{statValue}</h2>
    </div>
  );
}
