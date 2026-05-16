import { ArrowRight, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { products } from "../data/product";
import { Link, useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { url } = useParams();
  const { addToCart, removeFromCart, getProductQuantity } = useCart();

  const product = products.find((item) => item.url === url)!;
  const quantity = getProductQuantity(product.id);

  return (
    <>
      <section className="flex flex-col gap-4  p-8">
        <h2 className="text-3xl">{product.name}</h2>

        <div className="flex gap-x-8 items-center">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
                fill={index < product.rating ? "gold" : "none"}
                color="gold"
              />
            ))}
          </div>

          <span className="text-xl">
            {product.reviews.length}
            {product.reviews.length === 1 ? "rating" : "ratings"}
          </span>
        </div>

        <div className="gird gap-8 max-w-140">
          <figure>
            <img
              className="rounded-sm"
              src={product.image}
              alt={product.name}
            />
          </figure>

          <div className="flex flex-col gap-4">
            <p className="text-xl">{product.description}</p>
            <p className="text-xl">${product.price}</p>
            <div className="grid gap-4 sm:grid-cols-[200px_1fr] lg:grid-cols-1">
              <div className="flex justify-between border border-black rounded-sm p-4 lg:w-fit lg:gap-x-8">
                <button
                  className="border rounded-sm cursor-pointer border-black text-black   disabled:cursor-not-allowed"
                  disabled={quantity === 0}
                  onClick={() => removeFromCart(product.id)}
                >
                  <Minus
                    className={`size- 5 ${quantity === 0 ? "text-red-500" : ""}`}
                  />
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() => addToCart(product.id)}
                  className="border border-black rounded-sm cursor-pointer"
                >
                  <Plus className="size-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => addToCart(product.id)}
                  className="flex items-center gap-x-2 bg-[#837b81] px-4 py-2 rounded-sm"
                >
                  <ShoppingCart className="size-5" />
                  Add to Cart
                </button>

                <Link
                  to="/cart"
                  className="flex items-center justify-center gap-x-2 px-4 py-1 border rounded-sm"
                >
                  Go to Cart <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Reviews reviews={product.reviews} />
      </section>
    </>
  );
}
