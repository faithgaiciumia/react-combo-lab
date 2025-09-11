import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import type { Product } from "../data/products";
import CartItemCard from "./CartItemCard";
import { Separator } from "@/components/ui/separator";
export default function Cart({ cartItems }: { cartItems: Product[] }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"ghost"} className="shadow-none">
          <ShoppingCart />
          <Badge className="w-[16px] h-[16px]">1</Badge>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cart</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm">PRODUCT</span>
          <span className="text-sm">QUANTITY</span>
          <span className="text-sm">TOTAL</span>
        </div>
        <div>
          <Separator />
        </div>
        <div>
          {cartItems.map((item)=>(<CartItemCard key={item.id}/>))}
        </div>
        <div>
          <Separator />
        </div>
        <div className="flex justify-end items-center">
          <span className="text-sm font-bold">Total: Ksh. 3,200</span>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant={"ghost"} className="hover:bg-purple-300">
            Continue Shopping
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-800">
            Checkout
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
