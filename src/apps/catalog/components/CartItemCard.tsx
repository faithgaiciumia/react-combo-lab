import { Button } from "@/components/ui/button";

export default function CartItemCard() {
  return (
    <div className="flex items-center justify-between my-2 p-4">
      <img src="" alt="product-image" />
      <div>
        <h1 className="font-bold text-sm">Product name</h1>
        <p className="text-gray-600 text-sm">Price</p>
      </div>
      <div className="flex items-center gap-2 border-1 border-gray-300 rounded-md p-1">
        <Button variant={"outline"} className="border-none">-</Button>
        <span className="text-sm">1</span>
        <Button variant={"outline"} className="border-none">+</Button>
      </div>
      <div>
        <p>total</p>
      </div>
    </div>
  );
}
