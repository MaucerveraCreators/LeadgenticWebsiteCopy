import { useState, useRef, useEffect } from "react";
import { CaseStudyCard } from "./CaseStudyCard";
import ArrowLeftIcon from "@/app/components/ArrowLeftIcon";
import ArrowRightIcon from "@/app/components/ArrowRightIcon";

interface CaseData {
  category: string;
  title: string;
  metric?: string;
  description: string;
  services: string[];
  image: string;
  accentColor?: string;
  link?: string;
}

interface CaseCarouselProps {
  cases: CaseData[];
}

export function CaseCarousel({ cases }: CaseCarouselProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const containerWidth = container.clientWidth;
    
    // Calculate scroll amount based on screen size
    const isMobile = window.innerWidth < 768;
    
    // Use container width for more reliable scrolling
    const scrollAmount = isMobile 
      ? containerWidth * 0.85 // One card width in mobile (85%)
      : containerWidth; // Two cards in desktop

    const targetScroll = direction === "left"
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth pb-4 px-1 md:px-0 -mx-1 md:mx-0"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style>{`
          .case-carousel-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {cases.map((caseItem, index) => (
          <div
            key={index}
            className="case-card flex-shrink-0"
            style={{
              scrollSnapAlign: "start",
              width: "calc(50% - 1rem)", // 2 cards visible on desktop
            }}
          >
            <CaseStudyCard {...caseItem} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center md:justify-end gap-3 mt-8">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous cases"
          className={`
            w-12 h-12 rounded-full border-2 flex items-center justify-center
            transition-all duration-300
            ${canScrollLeft
              ? "border-gray-300 text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
              : "border-gray-200 text-gray-300 cursor-not-allowed"
            }
          `}
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next cases"
          className={`
            w-12 h-12 rounded-full border-2 flex items-center justify-center
            transition-all duration-300
            ${canScrollRight
              ? "border-gray-300 text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
              : "border-gray-200 text-gray-300 cursor-not-allowed"
            }
          `}
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .case-card {
            width: 90% !important;
            max-width: 400px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .case-card {
            width: calc(66.666% - 1.5rem) !important;
          }
        }
      `}</style>
    </div>
  );
}