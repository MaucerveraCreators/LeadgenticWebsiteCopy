import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

interface CaseStudyCardProps {
  category: string;
  title: string;
  metric?: string;
  description: string;
  services: string[];
  image: string;
  accentColor?: string;
  link?: string;
}

export function CaseStudyCard({ 
  category, 
  title, 
  metric,
  description, 
  services, 
  image,
  accentColor = "#70E000",
  link
}: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-[650px] md:h-[700px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Full Height Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay - lighter for better image visibility */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700"
          style={{
            opacity: isHovered ? 0 : 1
          }}
        ></div>
      </div>

      {/* Category Badge - Always Visible */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <span className="text-white text-[10px] md:text-xs uppercase tracking-wider font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content - Different layouts for mobile vs desktop */}
      <div 
        className="absolute bottom-0 left-0 right-0 p-5 md:p-8 transition-all duration-700 ease-in-out z-10 flex flex-col mobile-content"
        style={{
          backgroundColor: isHovered ? '#FFFFFF' : 'transparent',
        }}
      >
        {/* Metric (displayed as main title) */}
        <h3 
          className="text-xl md:text-3xl font-light mb-2 transition-colors duration-700 line-clamp-2"
          style={{
            color: isHovered ? '#000000' : '#FFFFFF'
          }}
        >
          {metric || title}
        </h3>

        {/* Business Name (subtitle) */}
        <p 
          className="business-name text-sm md:text-base font-medium mb-3 md:mb-4 transition-colors duration-700"
          style={{
            color: isHovered ? '#6B7280' : 'rgba(255, 255, 255, 0.85)'
          }}
        >
          {title}
        </p>

        {/* Description - Hidden on mobile, shown on hover/desktop */}
        <p 
          className="hidden md:block text-sm leading-relaxed mb-6 transition-colors duration-700"
          style={{
            color: isHovered ? '#6B7280' : 'rgba(255, 255, 255, 0.9)'
          }}
        >
          {description}
        </p>

        {/* Services Tags - Reduced on mobile */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
          {services.slice(0, 2).map((service, index) => (
            <span
              key={index}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs transition-all duration-700 whitespace-nowrap"
              style={{
                border: isHovered ? '1px solid #D1D5DB' : '1px solid rgba(255, 255, 255, 0.3)',
                color: isHovered ? '#374151' : '#FFFFFF',
                backgroundColor: isHovered ? 'transparent' : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              {service}
            </span>
          ))}
          {services.length > 2 && (
            <span
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs transition-all duration-700"
              style={{
                border: isHovered ? '1px solid #D1D5DB' : '1px solid rgba(255, 255, 255, 0.3)',
                color: isHovered ? '#374151' : '#FFFFFF',
                backgroundColor: isHovered ? 'transparent' : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              +{services.length - 2}
            </span>
          )}
        </div>

        {/* CTA Button - Only appears on hover on desktop, always visible on mobile */}
        <div
          className="mt-auto overflow-hidden cta-container"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(120%)',
            pointerEvents: isHovered ? 'auto' : 'none',
            maxHeight: isHovered ? '100px' : '0',
            transition: 'transform 0.5s ease, opacity 0.4s ease, max-height 0.5s ease',
          }}
        >
          {link ? (
            // Check if link is external (starts with http) or internal
            link.startsWith('http') ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full py-3 md:py-4 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: accentColor,
                  color: '#FFFFFF'
                }}
              >
                SEE WORK
                <ArrowUpRight 
                  className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" 
                />
              </a>
            ) : (
              <Link
                to={link}
                className="group/btn w-full py-3 md:py-4 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: accentColor,
                  color: '#FFFFFF'
                }}
              >
                SEE WORK
                <ArrowUpRight 
                  className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" 
                />
              </Link>
            )
          ) : (
            <button
              className="group/btn w-full py-3 md:py-4 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                backgroundColor: accentColor,
                color: '#FFFFFF'
              }}
            >
              SEE WORK
              <ArrowUpRight 
                className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" 
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style>{`
        @media (max-width: 768px) {
          /* Keep image more visible on mobile by limiting content height */}          
          .mobile-content {
            background: linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 50%, transparent 100%) !important;
            backdrop-filter: blur(8px);
            padding-top: 3rem !important;
          }
          
          .mobile-content h3 {
            color: #000000 !important;
            font-weight: 400 !important;
          }
          
          .mobile-content p.business-name {
            color: #6B7280 !important;
            display: block !important;
          }
          
          .mobile-content p:not(.business-name) {
            color: #6B7280 !important;
          }
          
          .mobile-content span {
            color: #374151 !important;
            border-color: #D1D5DB !important;
            background-color: #F9FAFB !important;
          }
          
          .mobile-content .cta-container {
            opacity: 1 !important;
            transform: translateY(0) !important;
            pointer-events: auto !important;
            max-height: 100px !important;
          }
        }
      `}</style>
    </div>
  );
}