import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
    const {
        cart,
        cartProducts,
        removeFromCart,
        addToCart,
        deleteFromCart,
        cartTotal
    } = useCart();

    return (
        <section>
            <h2>Shopping Cart</h2>

            {cart.length === 0 && (
                <div>
                    <h2>Your cart is empty.</h2>
                    <Link to='/'>
                        Continue shopping
                    </Link>
                </div>
            )}

            { cart.length > 0 && (
                <>
                 <div className="space-y-8">
                    {cartProducts.map((cartProduct) => (
                        <div key={cartProduct.id}
                        className="flex gap-4 justify-between border-b border-black pb-4"
                        >
                                <div className="flex flex-col sm:flex-row sm:items-center">
                                    <Link to={`${cartProduct.url}`} >
                                    <div className="size-24 md:size-48">
                                        <img
                                        className="rounded-sm size-full object-cover"
                                        src={cartProduct.image} alt={cartProduct.name} />
                                    </div>
                                    </Link>

                                    <div>
                                        <p>{cartProduct.name}</p>
                                        <p>${cartProduct.price}</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <button>
                                            <Minus className="size-5"/>
                                        </button>

                                        <span>{cartProduct.quantity}</span>
                                         <button>
                                            <Plus className="size-5"/>
                                        </button>
                                    </div>

                                    <button>
                                        <Trash2 className="size-5 text-red-400"/>
                                    </button>
                                </div>
                        </div>
                    ))}
                 </div>

                 <div>
                    <p>
                        Total:{' '}
                        <span>${cartTotal.toFixed(2)}</span>
                    </p>
                 </div>
                </>
            )}
        </section>
    );
}