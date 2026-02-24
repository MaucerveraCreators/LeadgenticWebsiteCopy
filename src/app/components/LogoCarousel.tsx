interface LogoCarouselProps {
  logos: { name: string; component: React.ReactNode }[];
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      {/* Left gradient overlay - Only visible on desktop */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none hidden md:block"></div>
      
      {/* Right gradient overlay - Only visible on desktop */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none hidden md:block"></div>

      {/* Scrolling container - Constrained within parent */}
      <div 
        className="flex gap-6 will-change-transform"
        style={{
          animation: 'scroll-horizontal 1s linear infinite'
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-12 py-6 rounded-[25px] border-[0.5px] border-white bg-black hover:border-white/80 transition-colors"
          >
            {logo.component}
          </div>
        ))}
      </div>
    </div>
  );
}