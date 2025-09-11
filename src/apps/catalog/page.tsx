import { useState } from "react";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import { products, type Product } from "./data/products";

export default function Catalog() {
  const allProducts = products;
  const [productsToDisplay, setProductsToDisplay] =
    useState<Product[]>(allProducts);
  const applyFilter = (category: string) => {
    if (category === "All") {
      setProductsToDisplay(allProducts);
      return;
    }
    const filteredProducts = allProducts.filter(
      (product) => product.category === category
    );
    setProductsToDisplay(filteredProducts);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center my-4">
        <h1 className="font-bold text-lg">E-Commerce Store</h1>
      </div>
      <Filters applyFilter={applyFilter} />
      <ProductGrid products={productsToDisplay} />
    </div>
  );
}
