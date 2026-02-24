import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Service {
  number: string;
  title: string;
  href: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "AI-Powered Lead Generation & Paid Advertising",
    href: "/paid-ads",
  },
  {
    number: "02",
    title: "Web Design, Landing Pages & Sales Funnels",
    href: "/web-design",
  },
  {
    number: "03",
    title: "SEO & Organic Growth",
    href: "/seo",
  },
  {
    number: "04",
    title: "Marketing Automation & CRM Systems",
    href: "/crm-automation",
  },
];

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      // Add a small delay to prevent immediate closing when opening
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label="Services menu"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-4xl z-50"
      style={{
        animation: "megaMenuAppear 0.2s ease-out",
      }}
    >
      {/* Clean White Container */}
      <div
        className="
          bg-white/95 backdrop-blur-sm
          border border-gray-200/80
          rounded-2xl 
          shadow-[0_12px_40px_rgba(0,0,0,0.12)]
          p-6
        "
      >
        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service, index) => {
            const isExternalLink = service.href.startsWith('#');
            const isActive = location.pathname === service.href;
            
            if (isExternalLink) {
              return (
                <a
                  key={service.number}
                  href={service.href}
                  onClick={onClose}
                  role="menuitem"
                  tabIndex={0}
                  className="
                    group relative overflow-hidden
                    bg-gray-50/80 hover:bg-white
                    border border-gray-200/60 hover:border-[#70E000]/50
                    rounded-xl p-4
                    transition-colors duration-200 ease-out
                    focus:outline-none focus:ring-2 focus:ring-[#70E000] focus:ring-offset-2 focus:ring-offset-white
                    cursor-pointer
                    hover:shadow-md
                  "
                  style={{
                    animation: `cardAppear 0.25s ease-out ${index * 0.03}s backwards`,
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.location.href = service.href;
                      onClose();
                    }
                  }}
                >
                  {/* Number */}
                  <div className="flex items-start justify-between mb-2.5">
                    <span className="text-[#70E000] text-xs font-mono font-bold tracking-wider">
                      {service.number}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#70E000] transition-all duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 text-sm font-semibold leading-snug group-hover:text-[#70E000] transition-colors duration-250">
                    {service.title}
                  </h3>

                  {/* Hover effect - subtle background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/0 to-[#70E000]/0 group-hover:from-[#70E000]/5 group-hover:to-transparent transition-all duration-250 rounded-xl pointer-events-none" />
                </a>
              );
            }
            
            return (
              <Link
                key={service.number}
                to={service.href}
                onClick={onClose}
                role="menuitem"
                tabIndex={0}
                className={`
                  group relative overflow-hidden
                  ${isActive ? 'bg-white border-[#70E000] shadow-md' : 'bg-gray-50/80 hover:bg-white border-gray-200/60 hover:border-[#70E000]/50'}
                  border
                  rounded-xl p-4
                  transition-colors duration-200 ease-out
                  focus:outline-none focus:ring-2 focus:ring-[#70E000] focus:ring-offset-2 focus:ring-offset-white
                  cursor-pointer
                  hover:shadow-md
                `}
                style={{
                  animation: `cardAppear 0.25s ease-out ${index * 0.03}s backwards`,
                }}
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-2.5">
                  <span className="text-[#70E000] text-xs font-mono font-bold tracking-wider">
                    {service.number}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#70E000]' : 'text-gray-400'} group-hover:text-[#70E000] transition-all duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                </div>

                {/* Title */}
                <h3 className={`text-sm font-semibold leading-snug ${isActive ? 'text-[#70E000]' : 'text-gray-900'} group-hover:text-[#70E000] transition-colors duration-250`}>
                  {service.title}
                </h3>

                {/* Hover effect - subtle background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${isActive ? 'from-[#70E000]/8 to-[#70E000]/3' : 'from-[#70E000]/0 to-[#70E000]/0'} group-hover:from-[#70E000]/5 group-hover:to-transparent transition-all duration-250 rounded-xl pointer-events-none`} />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-5 pt-5 border-t border-gray-200/80 text-center">
          <p className="text-xs text-gray-600">
            Not sure which service fits your needs?{" "}
            <a
              href="#contact"
              onClick={onClose}
              className="text-[#70E000] hover:text-[#5ac000] font-medium transition-colors underline decoration-[#70E000]/30 hover:decoration-[#70E000] focus:outline-none focus:ring-2 focus:ring-[#70E000] rounded px-1"
            >
              Let's talk
            </a>
          </p>
        </div>
      </div>

      {/* Animations - Almost imperceptible */}
      <style>{`
        @keyframes megaMenuAppear {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-3px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(-2px);
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