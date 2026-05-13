import { products } from "../data/product";

export default function HomePage() {
  return (
    <div className="mx-8">
      <div>
        <h1>Todays special</h1>
        <div className="relative flex flex-wrap gap-4 w-full h-80">
          {products.map((image) => (
            <img
              className="absolute flex"
              key={image.id}
              src={image.image}
              alt={image.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
