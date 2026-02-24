import { useEffect, useRef, useState } from "react";

interface ScrollRevealTextProps {
  text: string;
  highlightText: string;
  className?: string;
}

export function ScrollRevealText({ text, highlightText, className = "" }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordOpacities, setWordOpacities] = useState<number[]>([]);

  // Split text into words, preserving the highlight
  const words = text.split(" ");
  const highlightWords = highlightText.split(" ");
  
  useEffect(() => {
    // Initialize opacities: first few words at 100%, rest at 40%
    const initialOpacities = words.map((_, index) => {
      // First line (approximately first 4-5 words) starts at 100%
      return index < 5 ? 1 : 0.4;
    });
    setWordOpacities(initialOpacities);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate how much of the element is visible
      // When element enters viewport, start revealing
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );

      // Update opacities based on scroll progress
      const newOpacities = words.map((_, index) => {
        // First few words always at 100%
        if (index < 5) return 1;

        // Calculate when this word should start and finish revealing
        const wordProgress = (index - 5) / (words.length - 5);
        const revealStart = wordProgress * 0.7; // Start revealing earlier
        const revealEnd = wordProgress * 0.7 + 0.3; // Finish revealing

        if (scrollProgress < revealStart) return 0.4;
        if (scrollProgress > revealEnd) return 1;

        // Linear interpolation between 0.4 and 1
        const progress = (scrollProgress - revealStart) / (revealEnd - revealStart);
        return 0.4 + progress * 0.6;
      });

      setWordOpacities(newOpacities);
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <div ref={containerRef} className={className}>
      <p className="text-[25px] leading-relaxed" style={{ fontFamily: "Maxima Nouva, sans-serif" }}>
        {words.map((word, index) => {
          const isHighlight = highlightWords.includes(word);
          const opacity = wordOpacities[index] || 0.4;

          return (
            <span
              key={index}
              style={{
                opacity,
                transition: "opacity 0.6s ease-out",
                color: isHighlight ? "#70E000" : "inherit",
              }}
              className="inline-block mr-1"
            >
              {word}
            </span>
          );
        })}
      </p>
    </div>
  );
}
