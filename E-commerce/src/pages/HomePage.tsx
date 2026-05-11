import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/product";

export default function HomePage() {
    return (
        <>
            <header className="bg-[#fffff] p-6 sticky top-0 z-50 backdrop-blur-md">
                <nav>
                    <ul className="flex justify-between items-center">
                        <li>
                            <Link to="/" className="text-2xl text-[#808080] ">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/cart" className="flex gap-x-2">
                                <ShoppingCart className=" text-[#808080] " />

                                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#808080]/50 text-black">
                                    0
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="my-0 mx-32 flex flex-col gap-8">
                <h2 className="text-3xl font-bold">Gaming products</h2>
                <ul className="grid sm:grid-cols-2 gap-12 md:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <li key={product.id} className="flex flex-col gap-y-6 border border-gray-200 p-2" >
                            <Link to={`/${product.url}`}>
                                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                            </Link>

                            <div className="space-y-2">
                                <h3 className="text-xl">{product.name}</h3>
                                <p>{product.price}</p>
                            </div>

                            <button onClick={() => handleAddToCart(product.id)} className="bg-stone-400 text-stone-100 inline-flex justify-end p-2 w-32 "> <ShoppingCart />Add to Cart</button>

                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
