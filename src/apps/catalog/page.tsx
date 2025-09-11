import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import { products, type Product } from "./data/products";
import { Input } from "@/components/ui/input";

import Cart from "./components/Cart";

export default function Catalog() {
  const allProducts = products;
  const [productsToDisplay, setProductsToDisplay] =
    useState<Product[]>(allProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const savedCart = localStorage.getItem("cart");
  const initialCart: Product[] = savedCart ? JSON.parse(savedCart) : [];
  const [cartItems, setCartItems] = useState<Product[]>(initialCart);
  const addItemToCart = (newCartItem: Product) => {
    setCartItems((prev) => {
      const updated = [...prev, newCartItem];
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

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
        <div className="flex justify-between items-center my-4">
          <div>
            <h1 className="font-bold text-lg">E-Commerce Store</h1>
          </div>
          <div>
            <Cart cartItems={cartItems} />
          </div>
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
      <ProductGrid products={productsToDisplay} addItemToCart={addItemToCart} />
    </div>
  );
}
