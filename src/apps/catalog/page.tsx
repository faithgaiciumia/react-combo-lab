import ProductGrid from "./components/ProductGrid";

export default function Catalog(){
    return(
        <div className="p-4">
            <div className="flex justify-center my-4">
                <h1 className="font-bold text-lg">E-Commerce Store</h1>
            </div>
            <ProductGrid/>
        </div>
    )
}