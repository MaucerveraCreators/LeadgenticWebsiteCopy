import { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import logoImage from "figma:asset/effc1ab0651418bd5ac7971ac0325998b1bf0ee0.png";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  label: string;
  to?: string;
  submenu?: { label: string; to: string }[];
}

const menuItems: MenuItem[] = [
  { label: "HOME", to: "/" },
  {
    label: "SERVICES",
    submenu: [
      { label: "AI-Powered Lead Generation & Paid Advertising", to: "/paid-ads" },
      { label: "Web Design & Sales Funnels", to: "/web-design" },
      { label: "SEO & Organic Growth", to: "/seo" },
      { label: "Marketing Automation & CRM", to: "/crm-automation" },
    ],
  },
  {
    label: "NICHES",
    submenu: [
      { label: "Autostyling Shops", to: "/auto-styling" },
      { label: "Mechanics & Autobody", to: "/mechanics" },
      { label: "Auto Glass Shops", to: "/auto-glass" },
      { label: "Home Services", to: "/home-services" },
      { label: "IV Therapy & Weight Loss", to: "/iv-therapy" },
      { label: "Dentists & Orthodontists", to: "/dentists" },
    ],
  },
  {
    label: "CASES",
    submenu: [
      { label: "Biofuse", to: "/biofuse-case-study" },
      { label: "Euroluxe", to: "/euroluxe-case-study" },
      { label: "Cars Renewed", to: "/cars-renewed-case-study" },
      { label: "Auto Clinic of Eastpoint", to: "/auto-clinic-case-study" },
      { label: "DME Tuning Texas", to: "/dme-tuning-case-study" },
      { label: "Eye Kandy Customs", to: "/eye-kandy-case-study" },
      { label: "Happy Casa", to: "/happy-casa-case-study" },
      { label: "Honolulu Exotics Auto Spa", to: "/honolulu-exotics-case-study" },
      { label: "Naples Ceramic Coating", to: "/naples-ceramic-case-study" },
      { label: "Nunez Customs", to: "/nunez-customs-case-study" },
      { label: "Phone Animal", to: "/phone-animal-case-study" },
      { label: "Royal Auto Finishes", to: "/royal-auto-finishes-case-study" },
    ],
  },
  { label: "ABOUT US", to: "/about" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

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

  const toggleSubmenu = (label: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
        style={{
          animation: isOpen ? "fadeIn 0.3s ease-out" : "fadeOut 0.3s ease-out",
        }}
      />

      {/* Menu Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-black z-[101] shadow-2xl"
        style={{
          animation: isOpen ? "slideInRight 0.3s ease-out" : "slideOutRight 0.3s ease-out",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <img src={logoImage} alt="Leadgentic" className="h-6" />
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#70E000] focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-6 py-8" style={{ maxHeight: "calc(100vh - 200px)" }}>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.submenu ? (
                  // Item with submenu
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full flex items-center justify-between px-4 py-4 text-white text-base font-medium rounded-lg hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#70E000] focus:ring-offset-2 focus:ring-offset-black"
                      aria-expanded={expandedItems.has(item.label)}
                      aria-controls={`submenu-${item.label}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          expandedItems.has(item.label) ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Submenu */}
                    <div
                      id={`submenu-${item.label}`}
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: expandedItems.has(item.label) ? "800px" : "0",
                        opacity: expandedItems.has(item.label) ? 1 : 0,
                      }}
                    >
                      <ul className="mt-2 space-y-1 pl-4 border-l-2 border-[#70E000]/20">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              to={subItem.to}
                              onClick={handleLinkClick}
                              className="block px-4 py-3 text-sm text-gray-400 hover:text-[#a3ff00] hover:bg-white/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#70E000] focus:ring-offset-2 focus:ring-offset-black"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  // Simple link
                  <Link
                    to={item.to}
                    onClick={handleLinkClick}
                    className="block px-4 py-4 text-white text-base font-medium rounded-lg hover:bg-white/5 hover:text-[#a3ff00] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#70E000] focus:ring-offset-2 focus:ring-offset-black"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Fixed CTA at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-6 bg-gradient-to-t from-black via-black to-transparent border-t border-white/10">
          <Link to="/book-growth">
            <button
              onClick={handleLinkClick}
              className="w-full bg-[#70E000] text-black px-6 py-4 rounded-full text-base font-semibold hover:bg-[#5fc000] transition-all duration-200 flex items-center justify-center shadow-lg shadow-[#70E000]/20 focus:outline-none focus:ring-2 focus:ring-[#70E000] focus:ring-offset-2 focus:ring-offset-black min-h-[44px]"
              aria-label="Book a call with us"
            >
              BOOK A CALL
            </button>
          </Link>
          <p className="text-center text-xs text-gray-500 mt-4">
            Transform your business with AI
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translateX(100%); 
          }
          to { 
            opacity: 1;
            transform: translateX(0); 
          }
        }
        @keyframes slideOutRight {
          from { 
            opacity: 1;
            transform: translateX(0); 
          }
          to { 
            opacity: 0;
            transform: translateX(100%); 
          }
        }
      `}</style>
    </>
  );
}