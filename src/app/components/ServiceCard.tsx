import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export function ServiceCard({ number, title, description, image, link }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div
      className="relative border-t border-white/10 py-8 cursor-pointer group"
      style={{ 
        overflow: 'visible',
        backgroundColor: isHovered ? '#1D1D1D' : 'transparent',
        transition: 'background-color 300ms ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content */}
      <div className="relative z-10 flex gap-8">
        {/* Number */}
        <span className="text-sm text-gray-500 font-mono">{number}</span>

        {/* Text Content */}
        <div className="flex-1 pr-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-2xl font-light text-white">
              {title}
            </h3>
            <ArrowUpRight className={`w-6 h-6 text-white transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-1 -translate-y-1' : 'opacity-0'}`} />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-6">
            {description}
          </p>
          
          {/* Button - See Service */}
          {link && (
            <div className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
              style={{
                color: isHovered ? '#70E000' : '#999999'
              }}
            >
              See More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </div>

      {/* Image overlay - appears from right side */}
      <div
        className="absolute right-0 top-1/2 z-20 pointer-events-none"
        style={{
          transform: isHovered 
            ? 'translateY(-50%) translateX(0) scale(1)' 
            : 'translateY(-50%) translateX(40px) scale(0.98)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 300ms ease, transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          width: '188px',
          maxWidth: '25%'
        }}
      >
        <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: 0 }}>
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover"
            style={{ 
              aspectRatio: '9/16',
              filter: 'brightness(0.95)',
              borderRadius: 0,
              clipPath: isHovered ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
              transition: 'clip-path 800ms cubic-bezier(0.4, 0.0, 0.2, 1)'
            }}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 pointer-events-none" />
        </div>
      </div>
    </div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
}