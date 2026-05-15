import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function Navbar() {
    const { cart } = useCart();

    const productCount = cart.reduce(
        (total, item) => total + item.quantity,
        0,
    );

    return (
        <header className=" p-6 sticky top-0 z-50 backdrop-blur-md">
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

                            {productCount > 0 && (
                                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#808080]/50 text-black">
                                    {productCount}
                                </span>
                            )}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}