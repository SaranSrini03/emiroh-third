"use client";
import { useState, useEffect } from "react";

export default function SocialGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // Default to 3
  const [isAnimating, setIsAnimating] = useState(false);

  const items = Array(8).fill(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
  );

  // Update visible slides on resize - prioritize showing 3 when possible
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3); // Show 3 on large screens (1024px and above)
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev + 1 > items.length - visibleSlides ? 0 : prev + 1
    );
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? items.length - visibleSlides : prev - 1
    );
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-play functionality
  useEffect(() => {
    if (items.length <= visibleSlides) return;
    
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoPlay);
  }, [currentIndex, visibleSlides, items.length]);

  // Hide navigation buttons when all items are visible
  const showNavigation = items.length > visibleSlides;

  return (
    <section className="py-4 sm:py-8 lg:py-12 xl:py-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
        <h2 className="text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
          Social Sharing
        </h2>
        
        <div className="mt-4 sm:mt-6 lg:mt-8 relative">
          {/* Previous Button */}
          {showNavigation && (
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black disabled:opacity-50 p-1.5 sm:p-2 lg:p-2.5 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
              aria-label="Previous slides"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}

          {/* Slides Container */}
          <div className="overflow-hidden px-8 sm:px-10 lg:px-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / visibleSlides
                }%)`,
                width: `${(items.length * 100) / visibleSlides}%`,
              }}
            >
              {items.map((src, i) => (
                <div
                  key={i}
                  className="px-1 sm:px-1.5 lg:px-2"
                  style={{ width: `${100 / items.length}%` }}
                >
                  <div className="overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 aspect-[3/4] sm:aspect-[4/5]">
                    <img
                      src={src}
                      alt={`Social post ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading={i < visibleSlides ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          {showNavigation && (
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black disabled:opacity-50 p-1.5 sm:p-2 lg:p-2.5 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
              aria-label="Next slides"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Dots Indicator */}
        {showNavigation && (
          <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-1.5 sm:space-x-2">
            {Array.from({ length: Math.ceil(items.length / visibleSlides) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleSlides)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === Math.floor(currentIndex / visibleSlides)
                    ? "bg-black scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}