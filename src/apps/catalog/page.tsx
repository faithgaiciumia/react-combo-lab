import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import { products, type Product } from "./data/products";
import { Input } from "@/components/ui/input";

export default function Catalog() {
  const allProducts = products;
  const [productsToDisplay, setProductsToDisplay] =
    useState<Product[]>(allProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const applyFilter = (category: string) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    let filtered = allProducts;
    //filter by category
    if (activeCategory !== "All") {
      filtered = allProducts.filter(
        (product) => product.category === activeCategory
      );
    }
    //filter by searchTerm
    if (searchTerm.trim()) {
      filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProductsToDisplay(filtered);
  }, [searchTerm, allProducts, activeCategory]);

  return (
    <div className="p-4">
      <div>
        <div className="flex justify-center my-4">
          <h1 className="font-bold text-lg">E-Commerce Store</h1>
        </div>
        <div>
          <Input
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <Filters applyFilter={applyFilter} activeCategory={activeCategory} />
      <ProductGrid products={productsToDisplay} />
    </div>
  );
}
