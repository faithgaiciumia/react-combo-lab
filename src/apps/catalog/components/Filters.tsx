import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Filters({
  applyFilter,
}: {
  applyFilter: (category: string) => void;
}) {
  const categories = ["All", "Electronics", "Accessories", "Books"];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex items-center justify-center p-2 bg-purple-300 my-2">
      <ul className="flex items-center gap-4">
        {categories.map((category, index)=>(
            <li key={index}>
          <Button
            variant={"ghost"}
            className={activeCategory === category ? `bg-white` : ``}
            onClick={() => {
              applyFilter(category);
              setActiveCategory(category);
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
