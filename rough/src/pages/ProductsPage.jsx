import { products } from "../data/product";
import { Link } from "react-router-dom";

export default function ProductPage(){
    return (
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
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                        </div>

                </li>
            ))}
          </ul>
      
    );  
}