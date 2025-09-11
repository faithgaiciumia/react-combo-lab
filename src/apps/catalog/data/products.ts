export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://picsum.photos/200/200",
    price: 120,
    category: "Electronics",
    description: "Noise-cancelling over-ear headphones with 20h battery life."
  },
  {
    id: 2,
    name: "Smartphone X10",
    image: "https://picsum.photos/200/200",
    price: 850,
    category: "Electronics",
    description: "Flagship smartphone with OLED display and triple camera."
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    image: "https://picsum.photos/200/200",
    price: 25,
    category: "Clothing",
    description: "Comfortable cotton t-shirt available in multiple colors."
  },
  {
    id: 4,
    name: "Running Shoes",
    image: "https://picsum.photos/200/200",
    price: 95,
    category: "Clothing",
    description: "Lightweight running shoes designed for everyday training."
  },
  {
    id: 5,
    name: "Leather Wallet",
    image: "https://picsum.photos/200/200",
    price: 45,
    category: "Accessories",
    description: "Minimalist genuine leather wallet with 6 card slots."
  },
  {
    id: 6,
    name: "Wrist Watch",
    image: "https://picsum.photos/200/200",
    price: 210,
    category: "Accessories",
    description: "Water-resistant wristwatch with stainless steel strap."
  },
  {
    id: 7,
    name: "Cookbook: Tasty Meals",
    image: "https://picsum.photos/200/200",
    price: 30,
    category: "Books",
    description: "Over 100 delicious recipes with step-by-step instructions."
  },
  {
    id: 8,
    name: "Science Fiction Novel",
    image: "https://picsum.photos/200/200",
    price: 18,
    category: "Books",
    description: "A thrilling journey through space and time."
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    image: "https://picsum.photos/200/200",
    price: 75,
    category: "Electronics",
    description: "Portable Bluetooth speaker with deep bass and 10h battery."
  },
  {
    id: 10,
    name: "Backpack",
    image: "https://picsum.photos/200/200",
    price: 60,
    category: "Clothing",
    description: "Durable and water-resistant backpack with 3 compartments."
  }
];
