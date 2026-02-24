import { useState, useEffect } from "react";
import { TestimonialCard } from "./TestimonialCard";
import ArrowLeftIcon from "@/app/components/ArrowLeftIcon";
import ArrowRightIcon from "@/app/components/ArrowRightIcon";

interface Testimonial {
  image: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  metricLabel: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Show 1 testimonial at a time
  const itemsPerPage = 1;
  const totalPages = testimonials.length; // 6 total testimonials
  
  // Group testimonials into 3 indicators (2 testimonials per indicator)
  const currentIndicator = Math.floor(currentIndex / 2);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleTestimonial = testimonials[currentIndex];

  return (
    <div className="space-y-8 md:space-y-12">
      
      {/* Single Testimonial Display */}
      <div className="max-w-2xl mx-auto min-h-[420px] md:min-h-[520px]">
        <div 
          key={currentIndex}
          className="opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]"
        >
          <TestimonialCard {...visibleTestimonial} />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 md:gap-8 pt-2 md:pt-4">
        
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="group w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous testimonials"
        >
          <ArrowLeftIcon className="w-3 h-3 text-gray-600 group-hover:text-white transition-colors duration-300" />
        </button>

        {/* Dot Indicators - Always 3 dots (grouped: 0-1, 2-3, 4-5) */}
        <div className="flex items-center gap-2 md:gap-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-7 h-1.5 md:w-8 md:h-2 rounded-full transition-colors duration-300 ${
                index === currentIndicator ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="group w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next testimonials"
        >
          <ArrowRightIcon className="w-3 h-3 text-gray-600 group-hover:text-white transition-colors duration-300" />
        </button>
        
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}