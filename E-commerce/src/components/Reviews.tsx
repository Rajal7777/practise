import { Star } from "lucide-react";

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  // console.log([...Array(5)]);

  return (
    <section className="flex flex-col gap-6 my-12 relative before:content-[''] before:absolute before:h-px before:w-full before:bg-black before:rounded-sm before:-mt-8 ">
      <h2 className="text-xl font-bold">Customer Reviews</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col gap-y-3 border p-4 bg-gray-100 rounded-sm 
             transition-all duration-300 ease-in-out 
             hover:shadow-lg hover:-translate-y-1 
             hover:border-blue-300 hover:bg-liner-to-br hover:from-white hover:to-blue-50/20
             cursor-pointer
             group"
          >
            <h4 className="font-bold">{review.user}</h4>

            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  fill={index < review.rating ? "gold" : "none"}
                  color="gold"
                />
              ))}
            </div>

            <p className="text-[#7c646a] text-[1rem]">{review.comment}</p>
            <p>{review.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
