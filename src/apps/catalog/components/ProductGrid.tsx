import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
