import { LucideIcon, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

interface NicheCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  link?: string;
}

export function NicheCard({ title, description, Icon, link }: NicheCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = (
    <>
      {/* Icon Container */}
      <div className="mb-6">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500"
          style={{
            backgroundColor: isHovered ? '#70E000' : '#F5F5F5'
          }}
        >
          <Icon 
            className="w-7 h-7 transition-colors duration-500" 
            style={{ 
              stroke: isHovered ? '#000000' : '#70E000',
              strokeWidth: 1.5
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-medium text-black mb-4 leading-tight">{title}</h3>
        <p className="text-gray-500 text-[15px] leading-[1.7] flex-grow mb-6">{description}</p>
        
        {/* Button */}
        {link && (
          <div className="mt-auto">
            <div className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
              style={{
                color: isHovered ? '#70E000' : '#666666'
              }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        )}
      </div>
    </>
  );

  return link ? (
    <Link 
      to={link}
      className="group relative bg-white rounded-3xl p-10 border border-gray-100 hover:border-[#70E000]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col min-h-[320px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {CardContent}
    </Link>
  ) : (
    <div 
      className="group relative bg-white rounded-3xl p-10 border border-gray-100 hover:border-[#70E000]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col min-h-[320px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {CardContent}
    </div>
  );
}