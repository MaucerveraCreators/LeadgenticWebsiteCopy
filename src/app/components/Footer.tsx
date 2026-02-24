import { Facebook, Instagram, Linkedin, Mail, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import logoImage from "figma:asset/effc1ab0651418bd5ac7971ac0325998b1bf0ee0.png";
import RocketIcon from "@/imports/Svg-42-816";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNichesOpen, setIsNichesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
  ];

  const serviceLinks = [
    { name: "Ai-Powered Lead Generation & Paid Advertising", href: "/paid-ads" },
    { name: "Web Design, Landing Pages & Sales Funnels", href: "/web-design" },
    { name: "Seo & Organic Growth", href: "/seo" },
    { name: "Marketing Automation & CRM Systems", href: "/crm-automation" }
  ];

  const nicheLinks = [
    { name: "Autostyling", href: "/auto-styling" },
    { name: "Mechanics & Autobody", href: "/mechanics" },
    { name: "Autoglass Shops", href: "/auto-glass" },
    { name: "Home Services", href: "/home-services" },
    { name: "IV Therapy", href: "/iv-therapy" },
    { name: "Dentists & Orthodontists", href: "/dentists" }
  ];

  const caseStudyLinks = [
    { name: "Biofuse", href: "/case-studies/biofuse" },
    { name: "Euroluxe", href: "/case-studies/euroluxe" },
    { name: "Cars Renewed", href: "/case-studies/cars-renewed" },
    { name: "Auto Clinic of Eastpoint", href: "/case-studies/auto-clinic-eastpoint" },
    { name: "DME Tuning Texas", href: "/case-studies/dme-tuning-texas" },
    { name: "Eye Kandy Customs", href: "/case-studies/eye-kandy-customs" },
    { name: "Happy Casa", href: "/case-studies/happy-casa" },
    { name: "Honolulu Exotics Auto Spa", href: "/case-studies/honolulu-exotics" },
    { name: "Naples Ceramic Coating", href: "/case-studies/naples-ceramic-coating" },
    { name: "Nunez Customs", href: "/case-studies/nunez-customs" },
    { name: "Phone Animal", href: "/case-studies/phone-animal" },
    { name: "Royal Auto Finishes", href: "/case-studies/royal-auto-finishes" }
  ];

  const otherLinks = [
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/leadgentic/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/leadgentic/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/leadgentic/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@leadgentic.com", label: "Email" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-black via-[#0a1a0a] to-black">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#70E000]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#70E000]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, #70E000 1px, transparent 1px),
          linear-gradient(to bottom, #70E000 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* CTA Section - Top */}
        <div className="py-20 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm">
              <span className="text-sm text-[#70E000] font-medium">Ready to Scale Your Business?</span>
              <div className="w-4 h-4 text-[#70E000]" style={{ '--fill-0': '#70E000' } as React.CSSProperties}>
                <RocketIcon />
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-light text-white leading-tight" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              Let's Build Your <br className="lg:hidden" /><span className="text-[#70E000]">Revenue System</span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Book a free strategy call and see if Leadgentic is the right fit for your business.
            </p>
            
            <div className="flex flex-col items-center gap-4 pt-4">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/book-growth" className="group bg-[#70E000] text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-[#5fc000] transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(112,224,0,0.3)] hover:shadow-[0_0_40px_rgba(112,224,0,0.5)]">
                  BOOK A FREE GROWTH CALL
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link to="/case-studies" className="border border-white/20 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                  VIEW OUR WORK
                </Link>
              </div>
              <p className="text-gray-500 text-sm italic">
                No pressure. No obligation. Just clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Brand Section - Left */}
            <div className="lg:col-span-5 space-y-6">
              <img src={logoImage} alt="Leadgentic" className="h-8" />
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                The AI Revenue Platform designed to help service-based businesses generate consistent, high-quality leads and drive predictable growth.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:border-[#70E000] hover:bg-[#70E000]/10 hover:shadow-[0_0_20px_rgba(112,224,0,0.2)] transition-all duration-300 group"
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-[#70E000] transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links - Center */}
            <div className="lg:col-span-3 lg:col-start-7">
              <h3 className="text-base font-semibold mb-6 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>Navigation</h3>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#70E000] transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-[#70E000] group-hover:w-3 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
                
                {/* Services - Expandable */}
                <li>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-gray-400 hover:text-[#70E000] transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className={`h-[1px] bg-[#70E000] transition-all duration-300 ${isServicesOpen ? 'w-3' : 'w-0 group-hover:w-3'}`}></span>
                    <span>Services</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-[#70E000]' : ''}`} />
                  </button>
                  
                  {/* Expandable Services List */}
                  <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-2.5 pl-5 border-l border-[#70E000]/30">
                      {serviceLinks.map((service, index) => (
                        <li key={index}>
                          <Link
                            to={service.href}
                            className="text-gray-500 hover:text-[#70E000] transition-colors duration-300 text-sm block"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Niches - Expandable */}
                <li>
                  <button
                    onClick={() => setIsNichesOpen(!isNichesOpen)}
                    className="text-gray-400 hover:text-[#70E000] transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className={`h-[1px] bg-[#70E000] transition-all duration-300 ${isNichesOpen ? 'w-3' : 'w-0 group-hover:w-3'}`}></span>
                    <span>Niches</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isNichesOpen ? 'rotate-180 text-[#70E000]' : ''}`} />
                  </button>
                  
                  {/* Expandable Niches List */}
                  <div className={`overflow-hidden transition-all duration-300 ${isNichesOpen ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-2.5 pl-5 border-l border-[#70E000]/30">
                      {nicheLinks.map((niche, index) => (
                        <li key={index}>
                          <Link
                            to={niche.href}
                            className="text-gray-500 hover:text-[#70E000] transition-colors duration-300 text-sm block"
                          >
                            {niche.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Case Studies - Link */}
                <li>
                  <Link
                    to="/case-studies"
                    className="text-gray-400 hover:text-[#70E000] transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#70E000] group-hover:w-3 transition-all duration-300"></span>
                    Case Studies
                  </Link>
                </li>

                {otherLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#70E000] transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-[#70E000] group-hover:w-3 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Contact - Right */}
            <div className="lg:col-span-4">
              <h3 className="text-base font-semibold mb-6 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>Get in Touch</h3>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-400 text-sm">
                  <span className="text-white font-medium">Email:</span>{' '}
                  <a href="mailto:hello@leadgentic.com" className="hover:text-[#70E000] transition-colors duration-300">
                    hello@leadgentic.com
                  </a>
                </li>
                <li className="text-gray-400 text-sm">
                  <span className="text-white font-medium">Phone:</span>{' '}
                  <a href="tel:+18445540895" className="hover:text-[#70E000] transition-colors duration-300">
                    +1 844-554-0895
                  </a>
                </li>
              </ul>
              
              <h4 className="text-sm font-semibold mb-3 text-white">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-500 hover:text-[#70E000] transition-colors duration-300 text-xs"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Leadgentic. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}