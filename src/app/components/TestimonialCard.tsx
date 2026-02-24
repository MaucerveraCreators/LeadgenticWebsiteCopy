import { InitialsAvatar } from "./InitialsAvatar";

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  metricLabel: string;
  useInitials?: boolean;
  initials?: string;
  initialsColor?: string;
  imagePosition?: string;
}

export function TestimonialCard({
  image,
  name,
  role,
  company,
  quote,
  metric,
  metricLabel,
  useInitials = false,
  initials = "",
  initialsColor = "#70E000",
  imagePosition = "center"
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 flex flex-col h-full group">
      
      {/* Profile Image */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 shadow-md mb-4 md:mb-6 ring-4 ring-gray-50 group-hover:ring-[#70E000]/20 transition-all duration-300">
        {useInitials ? (
          <InitialsAvatar 
            initials={initials} 
            backgroundColor={initialsColor}
            textColor="#000000"
          />
        ) : (
          <img 
            src={image} 
            alt={name}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${imagePosition === "left" ? "object-left" : imagePosition === "right" ? "object-right" : "object-center"}`}
          />
        )}
      </div>
      
      {/* Quote - Same size on mobile and desktop now */}
      <blockquote className="text-base text-gray-700 leading-relaxed mb-5 md:mb-8 flex-grow line-clamp-4 md:line-clamp-none" style={{ fontFamily: "'Maxima Nouva', sans-serif", fontStyle: "normal" }}>
        "{quote}"
      </blockquote>
      
      {/* Metric Highlight */}
      <div className="mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200">
        <p className="text-3xl md:text-4xl font-light text-black tracking-tight mb-1 md:mb-2" style={{ fontFamily: "'Maxima Nouva', sans-serif", fontStyle: "normal" }}>{metric}</p>
        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium" style={{ fontFamily: "'Maxima Nouva', sans-serif", fontStyle: "normal" }}>{metricLabel}</p>
      </div>
      
      {/* Name & Role */}
      <div>
        <h3 className="text-base md:text-lg font-semibold text-black mb-0.5 md:mb-1" style={{ fontFamily: "'Maxima Nouva', sans-serif", fontStyle: "normal" }}>{name}</h3>
        <p className="text-sm text-gray-500 mb-0.5 md:mb-1" style={{ fontFamily: "'Maxima Nouva', sans-serif", fontStyle: "normal" }}>{role}</p>
        <p className="text-xs text-[#70E000] font-semibold uppercase tracking-wide" style={{ fontFamily: "'Maxima Nouva', sans-serif", fontStyle: "normal" }}>{company}</p>
      </div>
      
    </div>
  );
}