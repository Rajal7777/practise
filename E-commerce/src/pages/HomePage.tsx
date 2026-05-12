import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/product";
import { useState } from "react";

//[...Array(5)] --> [undefined, undefined, undefined, undefined, undefined] {makes a shallow copy spread syntax}
interface CartItem {
  productId: number;
  quantity: number;
}

export default function HomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const productCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  //add item to cart
  function handleAddToCart(productId: number) {
    console.log("btn clicked", productId);
    setCartItems((prevCartItems: CartItem[]) => {
      const existingCartItem = prevCartItems.find(
        (item: CartItem) => item.productId === productId,
      );
      if (existingCartItem) {
        // If the item already exists in the cart, increase the quantity
        return prevCartItems.map((item: CartItem) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        return [...prevCartItems, { productId, quantity: 1 }];
      }
    });
  }
  return (
    <>
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

      <section className="my-0 mx-32 flex flex-col gap-8">
        <h2 className="text-3xl font-bold">Gaming products</h2>
        <ul className="grid sm:grid-cols-2 gap-12 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col gap-8 border border-gray-200 p-2"
            >
              <Link to={`/${product.url}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </Link>

              <div className="space-y-2">
                <h3 className="text-xl">{product.name}</h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill={index < product.rating ? "gold" : "none"}
                      color="gold"
                    />
                  ))}
                </div>
                <p className="font-bold">{product.price}</p>
              </div>

              <div className="bg-stone-400 text-stone-100 flex items-center justify-center gap-x-4 rounded-sm">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="text-lg p-2 flex items-center gap-x-2 mb-0 pb-0"
                >
                  <ShoppingCart className="size-4" />
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
