import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    cartProducts,
    removeFromCart,
    addToCart,
    deleteFromCart,
    cartTotal,
  } = useCart();

  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold">Shopping Cart</h2>

      {cart.length === 0 && (
        <div className="flex flex-col items-center gap-y-4">
          <h2>Your cart is empty.</h2>
          <Link
            to="/"
            className="flex items-center justify-center gap-x-4 bg-gray-500 text-white px-4 py-1 rounded-sm text-lg"
          >
            Continue shopping
          </Link>
        </div>
      )}

      {cart.length > 0 && (
        <>
          <div className="space-y-8">
            {cartProducts.map((cartProduct) => (
              <div
                key={cartProduct.id}
                className="flex gap-4 justify-between border-b border-black pb-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <Link to={`${cartProduct.url}`}>
                    <div className="size-24 md:size-48">
                      <img
                        className="rounded-sm size-full object-cover"
                        src={cartProduct.image}
                        alt={cartProduct.name}
                      />
                    </div>
                  </Link>

                  <div>
                    <p className="font-bold text-gray-700">
                      {cartProduct.name}
                    </p>
                    <p>${cartProduct.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-x-4">
                  <div className="flex justify-between  items-center gap-4  lg:w-fit lg:gap-x-8 ">
                    <button
                      className="border rounded-sm px-2 py-1 cursor-pointer disabled:bg-black disabled:text-white disabled:border-transparent"
                      onClick={() => addToCart(cartProduct.id)}
                    >
                      <Plus className="size-5" />
                    </button>

                    <span>{cartProduct.quantity}</span>
                    <button
                      className="border rounded-sm px-2 py-1 cursor-pointer"
                      onClick={() => removeFromCart(cartProduct.id)}
                    >
                      <Minus className="size-5" />
                    </button>
                  </div>

                  <button onClick={() => deleteFromCart(cartProduct.id)}>
                    <Trash2 className="size-5 text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xl text-gray-700 font-bold">
              Total: <span>${cartTotal.toFixed(2)}</span>
            </p>
          </div>
        </>
      )}
    </section>
  );
}
