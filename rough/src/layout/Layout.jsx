import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/product";
import { ShoppingCart } from "lucide-react";

export default function Layout() {
  const [item, setItem] = useState([]);

  console.log(item);

  // function handleAddToCart(item) {
  // setItem((prevItem) => [...prevItem, item]);
  // }

  function handleAddToCart(productId) {
    setItem((prevItem) => {
      const existingItem = prevItem.find((i) => i.id === productId);

      if (existingItem) {
        return prevItem.map((i) =>
          i.id === productId ? { ...i, quantity: i.quantity + 1 } : i,
        );
      } else {
        return [...prevItem, { id: productId, quantity: 1 }];
      }
    });
  }

  const count = item.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <section>
        <nav>
          <ul className="flex justify-between">
            <li className="p-8 text-2xl">
              <NavLink to="/">
                {({ isActive }) => (
                  <span className={isActive ? "bg-red-500 text-white" : ""}>
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li className="p-4 text-2xl">
              <NavLink to="/">
                {({ isActive }) => (
                  <span className={isActive ? "bg-red-500 " : "text-black"}>
                    <ShoppingCart />
                    {count > 0 && <span>{count}</span>}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div>
          <ul className="grid  gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <Link to={`/${product.url}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
                <div>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Outlet />
    </>
  );
}
