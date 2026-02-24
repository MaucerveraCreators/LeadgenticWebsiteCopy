import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import { Wrench, Sparkles, Shield, Home as HomeIcon, Activity, Smile, ArrowUpRight } from "lucide-react";

interface NichesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const niches = [
  {
    title: "Autostyling",
    icon: Sparkles,
    description: "PPF, ceramic coating, vinyl wraps & premium detailing",
    link: "/auto-styling",
  },
  {
    title: "Mechanics & Autobody",
    icon: Wrench,
    description: "Collision repair and mechanical services",
    link: "/mechanics",
  },
  {
    title: "Autoglass Shops",
    icon: Shield,
    description: "Windshield repair and replacement services",
    link: "/auto-glass",
  },
  {
    title: "Home Services",
    icon: HomeIcon,
    description: "Roofing, HVAC, plumbing, remodeling & more",
    link: "/home-services",
  },
  {
    title: "IV Therapy & Weight Loss Clinics",
    icon: Activity,
    description: "IV hydration, medical weight loss & wellness",
    link: "/iv-therapy",
  },
  {
    title: "Dentists & Orthodontists",
    icon: Smile,
    description: "General and specialty dental care",
    link: "/dentists",
  },
];

export function NichesMegaMenu({ isOpen, onClose }: NichesMegaMenuProps) {
  const location = useLocation();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl mt-8 z-50"
          onMouseEnter={() => {}}
          onMouseLeave={onClose}
        >
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200/80 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-6">
            {/* Grid */}
            <div className="grid grid-cols-2 gap-3">
              {niches.map((niche, index) => {
                const Icon = niche.icon;
                const isExternalLink = niche.link === "#";
                const isActive = location.pathname === niche.link;
                const Component = isExternalLink ? "a" : Link;
                const linkProps = isExternalLink ? { href: niche.link } : { to: niche.link, onClick: onClose };
                
                return (
                  <Component
                    key={index}
                    {...linkProps}
                    className={`group relative overflow-hidden ${isActive ? 'bg-white border-[#70E000] shadow-md' : 'bg-gray-50/80 hover:bg-white border-gray-200/60 hover:border-[#70E000]/50'} border rounded-xl p-4 transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#70E000] focus:ring-offset-2 focus:ring-offset-white cursor-pointer hover:shadow-md`}
                    style={{
                      animation: `cardAppear 0.25s ease-out ${index * 0.03}s backwards`,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-[#70E000]/20 border-[#70E000]/40' : 'bg-[#70E000]/10 border-[#70E000]/20'} border group-hover:bg-[#70E000]/20 transition-colors flex-shrink-0`}>
                        <Icon className="w-4 h-4 text-[#70E000]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className={`text-sm font-semibold ${isActive ? 'text-[#70E000]' : 'text-gray-900'} group-hover:text-[#70E000] transition-colors`}>
                            {niche.title}
                          </h4>
                          <ArrowUpRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#70E000]' : 'text-gray-400'} group-hover:text-[#70E000] transition-all duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0`} />
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {niche.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${isActive ? 'from-[#70E000]/8 to-[#70E000]/3' : 'from-[#70E000]/0 to-[#70E000]/0'} group-hover:from-[#70E000]/5 group-hover:to-transparent transition-all duration-250 rounded-xl pointer-events-none`} />
                  </Component>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-5 pt-5 border-t border-gray-200/80 text-center">
              <p className="text-xs text-gray-600">
                Not sure which applies to you?{" "}
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="text-[#70E000] hover:text-[#5ac000] font-medium transition-colors underline decoration-[#70E000]/30 hover:decoration-[#70E000] focus:outline-none focus:ring-2 focus:ring-[#70E000] rounded px-1"
                >
                  Let's talk
                </Link>
              </p>
            </div>
          </div>

          {/* Animations */}
          <style>{`
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}