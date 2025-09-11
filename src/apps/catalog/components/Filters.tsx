import { Button } from "@/components/ui/button";

export default function Filters({
  applyFilter,
  activeCategory,
}: {
  applyFilter: (category: string) => void;
  activeCategory: string;
}) {
  const categories = ["All", "Electronics", "Accessories", "Books"];

  return (
    <div className="flex items-center justify-center p-2 bg-purple-300 my-2">
      <ul className="flex items-center gap-4">
        {categories.map((category, index) => (
          <li key={index}>
            <Button
              variant={"ghost"}
              className={activeCategory === category ? `bg-white` : ``}
              onClick={() => {
                applyFilter(category);
              }}
            >
              {category}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
