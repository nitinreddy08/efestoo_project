import React, { useState } from "react";
import Image from "next/image";

const ReviewsRatings = () => {
  const [activeTab, setActiveTab] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "Durgaprasad P",
      role: "Mechanical Engineer",
      rating: 5,
      image: "/anirudg.jpeg",
      review:
        "Anirudh live in IIT Hyderabad - A dream came true! Anirudh's energy was next level! The moment he started singing 'Vaathi Coming' the entire crowd went wild. Best event ever!",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Sartaj M",
      role: "Software Engineer",
      rating: 5,
      image: "/anirudg.jpeg",
      review:
        "A dream come true! Anirudh's energy took the night to the next level. The moment he started singing 'Vaathi Coming,' the entire crowd went wild. Best night ever!",
      date: "1 week ago",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Reviews & Ratings
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center">
              <span className="text-5xl font-bold text-gray-900 mr-3">4.7</span>
              <div className="flex flex-col items-start">
                <div className="flex">{renderStars(5)}</div>
                <span className="text-sm text-gray-600 mt-1">
                  Based on 128 reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?name=" +
                        review.name.replace(" ", "+");
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{review.review}</p>
                  <p className="text-xs text-gray-400 mt-2">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsRatings;
