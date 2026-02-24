import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Link, useLocation } from "react-router";
import { MegaMenu } from "@/app/components/MegaMenu";
import { NichesMegaMenu } from "@/app/components/NichesMegaMenu";
import { CasesMegaMenu } from "@/app/components/CasesMegaMenu";
import { MobileMenu } from "@/app/components/MobileMenu";
import { CustomIcon } from "@/app/components/CustomIcon";
import logoImage from "@/assets/effc1ab0651418bd5ac7971ac0325998b1bf0ee0.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isNichesMegaMenuOpen, setIsNichesMegaMenuOpen] = useState(false);
  const [isCasesMegaMenuOpen, setIsCasesMegaMenuOpen] = useState(false);
  const [isOnDarkBackground, setIsOnDarkBackground] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const elementsAtPosition = document.elementsFromPoint(window.innerWidth / 2, 80);
      
      let isDark = false;
      
      for (const element of elementsAtPosition) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const className = element.className || '';
        
        if (typeof className === 'string') {
          if (className.includes('bg-black')) {
            isDark = true;
            break;
          }
          
          if (className.includes('bg-white')) {
            isDark = false;
            break;
          }
        }
        
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (rgbMatch) {
            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);
            
            if (r < 50 && g < 50 && b < 50) {
              isDark = true;
              break;
            }
            
            if (r > 200 && g > 200 && b > 200) {
              isDark = false;
              break;
            }
          }
        }
      }
      
      setIsOnDarkBackground(isDark);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-6">
        <div className="relative">
          <div 
            className={`
              rounded-full transition-all duration-500 ease-in-out
              ${isMegaMenuOpen || isNichesMegaMenuOpen || isCasesMegaMenuOpen
                ? 'bg-black border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]' 
                : isScrolled 
                  ? `bg-black/40 backdrop-blur-xl ${
                      isOnDarkBackground 
                        ? 'shadow-[0_8px_20px_rgba(112,224,0,0.6),0_0_35px_rgba(112,224,0,0.4)]' 
                        : 'shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                    }` 
                  : `bg-black/30 backdrop-blur-md ${
                      isOnDarkBackground 
                        ? 'shadow-[0_6px_16px_rgba(112,224,0,0.5),0_0_28px_rgba(112,224,0,0.35)]' 
                        : 'shadow-[0_4px_16px_rgba(0,0,0,0.3)]'
                    }`
              }
              ${!isMegaMenuOpen && !isNichesMegaMenuOpen && !isCasesMegaMenuOpen && 'border border-white/10'}
            `}
          >
            <div className="px-6 py-2.5">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                  <img src={logoImage} alt="Leadgentic" className="h-5" />
                </Link>

                {/* Navigation - Desktop Only */}
                <nav className="hidden md:flex items-center gap-8">
                  <Link 
                    to="/" 
                    className={`text-sm hover:text-[#a3ff00] transition-colors ${location.pathname === '/' ? 'text-[#a3ff00]' : ''}`}
                  >
                    HOME
                  </Link>
                  
                  {/* Services with Mega Menu */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    <button 
                      className={`flex items-center gap-1 text-sm hover:text-[#a3ff00] transition-colors focus:outline-none focus:text-[#a3ff00] ${
                        ['/paid-ads', '/web-design', '/seo', '/crm-automation'].includes(location.pathname) ? 'text-[#a3ff00]' : ''
                      }`}
                      onFocus={() => setIsMegaMenuOpen(true)}
                      onBlur={() => setTimeout(() => setIsMegaMenuOpen(false), 200)}
                      aria-expanded={isMegaMenuOpen}
                      aria-haspopup="true"
                    >
                      SERVICES
                      <Plus className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-45' : ''}`} />
                    </button>
                    
                    {/* Invisible bridge to prevent hover gap */}
                    {isMegaMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl h-3 -mt-1" />
                    )}
                    
                    {/* Mega Menu */}
                    <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
                  </div>

                  {/* Niches with Mega Menu */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsNichesMegaMenuOpen(true)}
                    onMouseLeave={() => setIsNichesMegaMenuOpen(false)}
                  >
                    <Link 
                      to="/niches"
                      className={`flex items-center gap-1 text-sm hover:text-[#a3ff00] transition-colors focus:outline-none focus:text-[#a3ff00] ${
                        ['/niches', '/auto-styling', '/mechanics', '/auto-glass', '/home-services', '/iv-therapy', '/dentists'].includes(location.pathname) ? 'text-[#a3ff00]' : ''
                      }`}
                      onFocus={() => setIsNichesMegaMenuOpen(true)}
                      onBlur={() => setTimeout(() => setIsNichesMegaMenuOpen(false), 200)}
                      aria-expanded={isNichesMegaMenuOpen}
                      aria-haspopup="true"
                    >
                      NICHES
                      <Plus className={`w-4 h-4 transition-transform duration-300 ${isNichesMegaMenuOpen ? 'rotate-45' : ''}`} />
                    </Link>
                    
                    {/* Niches Mega Menu */}
                    <NichesMegaMenu isOpen={isNichesMegaMenuOpen} onClose={() => setIsNichesMegaMenuOpen(false)} />
                  </div>

                  {/* Cases with Mega Menu */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsCasesMegaMenuOpen(true)}
                    onMouseLeave={() => setIsCasesMegaMenuOpen(false)}
                  >
                    <Link 
                      to="/case-studies"
                      className={`flex items-center gap-1 text-sm hover:text-[#a3ff00] transition-colors focus:outline-none focus:text-[#a3ff00] ${ 
                        ['/case-studies', '/biofuse-case-study', '/euroluxe-case-study', '/cars-renewed-case-study', '/auto-clinic-case-study', '/dme-tuning-case-study', '/eye-kandy-case-study', '/happy-casa-case-study', '/honolulu-exotics-case-study', '/naples-ceramic-case-study', '/nunez-customs-case-study', '/phone-animal-case-study', '/royal-auto-finishes-case-study'].includes(location.pathname) ? 'text-[#a3ff00]' : ''
                      }`}
                      onFocus={() => setIsCasesMegaMenuOpen(true)}
                      onBlur={() => setTimeout(() => setIsCasesMegaMenuOpen(false), 200)}
                      aria-expanded={isCasesMegaMenuOpen}
                      aria-haspopup="true"
                    >
                      CASE STUDIES
                      <Plus className={`w-4 h-4 transition-transform duration-300 ${isCasesMegaMenuOpen ? 'rotate-45' : ''}`} />
                    </Link>
                    
                    {/* Invisible bridge to prevent menu from closing */}
                    {isCasesMegaMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-4 bg-transparent pointer-events-auto" />
                    )}
                    
                    {/* Cases Mega Menu */}
                    <CasesMegaMenu isOpen={isCasesMegaMenuOpen} onClose={() => setIsCasesMegaMenuOpen(false)} />
                  </div>

                  <Link to="/about" className="text-sm hover:text-[#a3ff00] transition-colors">ABOUT US</Link>
                </nav>

                {/* CTA Button - Desktop Only */}
                <Link to="/book-growth" className="hidden md:flex relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#70E000] to-[#a3ff00] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  
                  {/* Button Container */}
                  <div className="relative bg-gradient-to-r from-[#70E000] to-[#8fd400] text-black px-6 py-2 rounded-full text-sm font-semibold hover:from-[#8fd400] hover:to-[#70E000] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#70E000]/20 group-hover:shadow-xl group-hover:shadow-[#70E000]/30">
                    <span className="relative z-10">BOOK A GROWTH CALL</span>
                    <CustomIcon className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110" />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    </div>
                  </div>
                </Link>

                {/* Burger Menu - Mobile Only */}
                <button 
                  className="md:hidden flex flex-col gap-1.5 w-6 h-6 items-center justify-center" 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="w-5 h-0.5 bg-white rounded-full"></span>
                  <span className="w-5 h-0.5 bg-white rounded-full"></span>
                  <span className="w-5 h-0.5 bg-white rounded-full"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}