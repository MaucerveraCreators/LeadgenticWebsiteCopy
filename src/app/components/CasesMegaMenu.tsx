import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router";

interface CasesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CaseStudy {
  number: string;
  title: string;
  description: string;
  href: string;
}

const caseStudies: CaseStudy[] = [
  {
    number: "01",
    title: "Biofuse",
    description: "How we helped Biofuse scale their revenue with AI-powered lead generation",
    href: "/biofuse-case-study",
  },
  {
    number: "02",
    title: "Euroluxe",
    description: "From feast-or-famine to $100K+/month auto styling operation",
    href: "/euroluxe-case-study",
  },
  {
    number: "03",
    title: "Cars Renewed",
    description: "From missed calls and chaos to a scalable autoglass operation",
    href: "/cars-renewed-case-study",
  },
  {
    number: "04",
    title: "Auto Clinic of Eastpoint",
    description: "How an 80-year Michigan shop replaced low-quality leads with buyers ready to book",
    href: "/auto-clinic-case-study",
  },
  {
    number: "05",
    title: "DME Tuning Texas",
    description: "From brand-new shop to $120K/month in under 4 months",
    href: "/dme-tuning-case-study",
  },
  {
    number: "06",
    title: "Eye Kandy Customs",
    description: "From $8,000 months to $55,000 in 30 days — and booked a month out",
    href: "/eye-kandy-case-study",
  },
  {
    number: "07",
    title: "Happy Casa",
    description: "From invisible online to a $150K+/month home remodeling business",
    href: "/happy-casa-case-study",
  },
  {
    number: "08",
    title: "Honolulu Exotics Auto Spa",
    description: "From word-of-mouth to being booked out a month in advance",
    href: "/honolulu-exotics-case-study",
  },
  {
    number: "09",
    title: "Naples Ceramic Coating",
    description: "From wasted ad spend to $30,000 weeks by owning Google locally",
    href: "/naples-ceramic-case-study",
  },
  {
    number: "10",
    title: "Nunez Customs",
    description: "From $3,000 months to a 10× business — at just 18 years old",
    href: "/nunez-customs-case-study",
  },
  {
    number: "11",
    title: "Phone Animal",
    description: "Doubling lead flow and MRR in 45 days — B2B SaaS success",
    href: "/phone-animal-case-study",
  },
  {
    number: "12",
    title: "Royal Auto Finishes",
    description: "From underfilled schedule to back-to-back record months",
    href: "/royal-auto-finishes-case-study",
  },
];

export function CasesMegaMenu({ isOpen, onClose }: CasesMegaMenuProps) {
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
      aria-label="Cases menu"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[90vw] max-w-4xl z-50"
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
          max-h-[70vh]
          overflow-y-auto
        "
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#70E000 #f3f4f6'
        }}
      >
        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {caseStudies.map((caseStudy, index) => {
            const isActive = location.pathname === caseStudy.href;
            
            return (
              <Link
                key={caseStudy.number}
                to={caseStudy.href}
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
                    {caseStudy.number}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#70E000]' : 'text-gray-400'} group-hover:text-[#70E000] transition-all duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                </div>

                {/* Title */}
                <h3 className={`text-sm font-semibold leading-snug ${isActive ? 'text-[#70E000]' : 'text-gray-900'} group-hover:text-[#70E000] transition-colors duration-250 mb-1.5`}>
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* Hover effect - subtle background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${isActive ? 'from-[#70E000]/8 to-[#70E000]/3' : 'from-[#70E000]/0 to-[#70E000]/0'} group-hover:from-[#70E000]/5 group-hover:to-transparent transition-all duration-250 rounded-xl pointer-events-none`} />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-5 pt-5 border-t border-gray-200/80 text-center">
          <p className="text-xs text-gray-600">
            Want to see your success story here?{" "}
            <a
              href="#contact"
              onClick={onClose}
              className="text-[#70E000] hover:text-[#5ac000] font-medium transition-colors underline decoration-[#70E000]/30 hover:decoration-[#70E000] focus:outline-none focus:ring-2 focus:ring-[#70E000] rounded px-1"
            >
              Get in touch
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

        /* Custom scrollbar styles */
        .bg-white\/95::-webkit-scrollbar {
          width: 8px;
        }

        .bg-white\/95::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }

        .bg-white\/95::-webkit-scrollbar-thumb {
          background: #70E000;
          border-radius: 10px;
        }

        .bg-white\/95::-webkit-scrollbar-thumb:hover {
          background: #5ac000;
        }
      `}</style>
    </div>
  );
}