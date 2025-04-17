import { useState } from "react";

export const ProductItem = ({ product }) => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto border border-gray-700 rounded-lg overflow-hidden shadow-md mb-4">
      {/* Card container - flex layout to position image and content side by side */}
      <div className="flex flex-col sm:flex-row">
        {/* Image container - takes full width on mobile, left side on larger screens */}
        <div className="w-full sm:w-2/5 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-full object-cover"
          />
        </div>

        {/* Content container - takes full width on mobile, right side on larger screens */}
        <div className="w-full sm:w-3/5 p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold mb-1">{product.name}</h1>
            <span className="text-lg font-semibold text-gray-800">${product.price}</span>
            <p className="text-xs font-bold mt-2 border-t-[1px]">{product.detailedDescription}</p>
          </div>
          
          {/* Favorite button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsFilled(!isFilled)}
              className="focus:outline-none"
              aria-label={isFilled ? "Remove from favorites" : "Add to favorites"}
            >
              <svg
                viewBox="0 0 24 24"
                className={`w-6 h-6 transition-all duration-300 ease-in-out ${
                  isFilled ? "scale-110" : "scale-100"
                }`}
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill={isFilled ? "red" : "none"}
                  stroke={isFilled ? "red" : "currentColor"}
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductItem;