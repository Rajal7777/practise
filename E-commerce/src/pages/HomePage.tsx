import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/product";
import { useCart } from "../context/CartContext";

//[...Array(5)] --> [undefined, undefined, undefined, undefined, undefined] {makes a shallow copy spread syntax}

export default function HomePage() {
  const { addToCart: handleAddToCart } = useCart();
  return (
    <section className="flex flex-col gap-8 p-12">
      <h2 className="text-3xl font-bold">Gaming products</h2>

      <ul className="grid gap-12  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex flex-col gap-y-6 gap-8 border border-gray-200 p-2"
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
              <div className="flex items-center gap-1">
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
  );
}
