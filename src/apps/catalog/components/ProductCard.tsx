import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "../data/products";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-start">
          <img
            src={product.image}
            alt="Product Description"
            className="rounded-lg w-[100%]"
          />
        </div>
        <div className="my-2">
          <p className="text-sm">{product.description}</p>
        </div>
      </CardContent>
      <CardFooter className="items-center justify-between">
        <p className="font-bold">${product.price}</p>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
