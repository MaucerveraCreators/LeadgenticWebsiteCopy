import { useState } from "react";
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

interface TestimonialGridDesktopProps {
  testimonials: Testimonial[];
}

export function TestimonialGridDesktop({ testimonials }: TestimonialGridDesktopProps) {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Show 3 testimonials at a time on desktop
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Get the current 3 testimonials to display
  const startIndex = currentPage * itemsPerPage;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-12">
      
      {/* Three Testimonials Grid */}
      <div 
        key={currentPage}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]"
      >
        {visibleTestimonials.map((testimonial, index) => (
          <div key={startIndex + index} className="h-full">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-8 pt-4">
        
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="group w-14 h-14 flex-shrink-0 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous testimonials"
        >
          <ArrowLeftIcon className="w-3 h-3 text-gray-600 group-hover:text-white transition-colors duration-300" />
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-8 h-2 rounded-full transition-colors duration-300 ${
                index === currentPage ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="group w-14 h-14 flex-shrink-0 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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
