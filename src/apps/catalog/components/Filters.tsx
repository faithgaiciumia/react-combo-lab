import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Filters({
  applyFilter,
}: {
  applyFilter: (category: string) => void;
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex items-center justify-center p-2 bg-purple-300 my-2">
      <ul className="flex items-center gap-4">
        <li>
          <Button
            variant={"ghost"}
            className={activeCategory === "All" ? `bg-white` : ``}
            onClick={() => {
              applyFilter("All");
              setActiveCategory("All");
            }}
          >
            All
          </Button>
        </li>
        <li>
          <Button
            variant={"ghost"}
            className={activeCategory === "Electronics" ? `bg-white` : ``}
            onClick={() => {
              applyFilter("Electronics");
              setActiveCategory("Electronics");
            }}
          >
            Electronics
          </Button>
        </li>
        <li>
          <Button
            variant={"ghost"}
            className={activeCategory === "Accessories" ? `bg-white` : ``}
            onClick={() => {
              applyFilter("Accessories");
              setActiveCategory("Accessories");
            }}
          >
            Accessories
          </Button>
        </li>
        <li>
          <Button
            variant={"ghost"}
            className={activeCategory === "Books" ? `bg-white` : ``}
            onClick={() => {
              applyFilter("Books");
              setActiveCategory("Books");
            }}
          >
            Books
          </Button>
        </li>
      </ul>
    </div>
  );
}
