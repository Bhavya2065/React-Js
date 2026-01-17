import { useLoaderData } from "react-router-dom";
import ProductCard from "../Components/Product/ProductCard";

function Home() {

    const products = useLoaderData()
    // console.log(products) // returns [{}]

    return (
        <>
            <div className="grid grid-cols-4">
                {products.map((item) => <ProductCard key={item.uniqueKey} product={item} />)}
            </div>
        </>
    )
}

export async function productLoader() {
    const res = await fetch('https://dummyjson.com/carts');
    const data = await res.json();
    return data.carts.flatMap((cart, cartIndex) =>
        cart.products.map((product, productIndex) => ({
            ...product,
            uniqueKey: `${cartIndex}-${productIndex}`
        }))
    );
}


export default Home