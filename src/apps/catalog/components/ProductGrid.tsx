
import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  addItemToCart,
}: {
  products: Product[];
  addItemToCart: (newCartItem:Product) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addItemToCart={addItemToCart} />
      ))}
    </div>
  );
}
