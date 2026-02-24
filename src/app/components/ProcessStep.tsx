import { useEffect, useRef, useState } from "react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
  onVisibilityChange: (isVisible: boolean) => void;
}

export function ProcessStep({ 
  number, 
  title, 
  description, 
  isActive, 
  isCompleted,
  onVisibilityChange 
}: ProcessStepProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            onVisibilityChange(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated, onVisibilityChange]);

  return (
    <div ref={elementRef} className="relative flex gap-6 md:gap-8 pb-16 md:pb-32 last:pb-0">
      {/* Number Circle */}
      <div className="flex-shrink-0 relative z-10">
        <div
          className={`
            w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold
            transition-all duration-500
            ${isActive || isCompleted
              ? 'border-[#70E000] bg-[#70E000]/10 text-[#70E000] shadow-[0_0_20px_rgba(112,224,0,0.3)]'
              : 'border-gray-700 bg-black text-gray-600'
            }
          `}
        >
          {number}
        </div>
      </div>

      {/* Content */}
      <div
        className="flex-1 pt-1 md:pt-2"
        style={{
          opacity: isActive || isCompleted ? 1 : 0.4,
          transform: isActive || isCompleted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <h3 
          className={`text-2xl font-light mb-3 md:mb-4 transition-colors duration-500 ${
            isActive || isCompleted ? 'text-white' : 'text-gray-600'
          }`}
        >
          {title}
        </h3>
        <p 
          className={`text-base leading-relaxed transition-colors duration-500 ${
            isActive || isCompleted ? 'text-gray-400' : 'text-gray-700'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}