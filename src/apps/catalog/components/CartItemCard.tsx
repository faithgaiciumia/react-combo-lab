import { Button } from "@/components/ui/button";
import type { Product } from "../data/products";

export default function CartItemCard({
  cartItem,
  quantity,
  onQuantityChange,
  removeItemFromCart
}: {
  cartItem: Product;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  removeItemFromCart: (cartItem: Product) => void;
}) {
  const total = quantity * cartItem.price;

  return (
    <div className="flex items-center justify-between my-2 p-4">
      <img
        src={cartItem.image}
        alt="product-image"
        className="w-[80px] h-[80px]"
      />
      <div>
        <h1 className="font-bold text-sm">{cartItem.name}</h1>
        <p className="text-gray-600 text-sm">${cartItem.price}</p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center gap-2 border-1 border-gray-300 rounded-md p-1">
          <Button
            variant={"outline"}
            className="border-none"
            onClick={() => onQuantityChange(quantity - 1)}
          >
            -
          </Button>
          <span className="text-sm">{quantity}</span>
          <Button
            variant={"outline"}
            className="border-none"
            onClick={() => onQuantityChange(quantity + 1)}
          >
            +
          </Button>
        </div>
        <div>
          <Button className="underline" variant={"ghost"} onClick={()=>removeItemFromCart(cartItem)}>
            Remove
          </Button>
        </div>
      </div>
      <div>
        <p>$ {total}</p>
      </div>
    </div>
  );
}
