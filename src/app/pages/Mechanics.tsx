import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Wrench, Settings, Car, Tool, AlertCircle, ThumbsUp, MapPin } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";

// Animated Counter Component
function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

// Metric Card Component
interface MetricCardProps {
  icon: LucideIcon;
  metric: string;
  description: string;
}

function MetricCard({ icon: Icon, metric, description }: MetricCardProps) {
  return (
    <div className="flex-shrink-0 w-[280px] bg-gradient-to-br from-[#70E000]/10 via-[#70E000]/5 to-transparent backdrop-blur-sm border border-[#70E000]/20 rounded-xl p-5 hover:border-[#70E000]/40 transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#70E000]" />
        </div>
        <p className="text-2xl font-bold text-[#70E000]">{metric}</p>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

// Mechanics Metrics Data
const mechanicsMetrics = [
  { icon: TrendingUp, metric: "6.2x", description: "More booked repair jobs vs. manual follow-up" },
  { icon: Clock, metric: "<60s", description: "Average response time to emergency calls" },
  { icon: Users, metric: "94%", description: "Lead capture rate (even after hours)" },
  { icon: Shield, metric: "24/7", description: "AI availability for urgent repairs" },
  { icon: Phone, metric: "91%", description: "Reduction in missed opportunities" },
  { icon: BarChart3, metric: "4.8x", description: "ROI on marketing investment" },
  { icon: Target, metric: "$200K", description: "Average annual revenue increase" },
  { icon: Award, metric: "#1", description: "Local search authority in service area" },
  { icon: MessageSquare, metric: "100%", description: "Leads nurtured until ready" },
  { icon: Zap, metric: "3.5x", description: "Faster bay occupancy rate" },
  { icon: Activity, metric: "97%", description: "Customer satisfaction rating" },
  { icon: ArrowUpRight, metric: "72%", description: "More high-value repairs closed" },
];

// Auto-Typing Search Component
function AutoTypingSearch() {
  const [text, setText] = useState("");
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const fullText = "auto repair near me";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [isInView]);

  return (
    <div ref={ref} className="flex-1">
      <input
        type="text"
        value={text}
        readOnly
        className="w-full bg-transparent text-gray-800 text-sm outline-none"
        placeholder="Search Google or type a URL"
      />
    </div>
  );
}

// Google Search Mockup Component
function GoogleSearchMockup() {
  return (
    <div className="relative mt-8">
      {/* Google Search Mockup */}
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
        {/* Search Bar */}
        <div className="bg-white border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-4 max-w-2xl mx-auto">
            {/* Google Logo */}
            <svg viewBox="0 0 272 92" className="h-5 flex-shrink-0">
              <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
              <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
              <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
              <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
              <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
              <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.10-11.65l-22.49.01z"/>
            </svg>
            
            {/* Search Input */}
            <AutoTypingSearch />
          </div>
        </div>

        {/* Search Results with Animation */}
        <div className="bg-gray-50 px-6 py-6 relative">
          <p className="text-[10px] text-gray-500 mb-4 px-1">About 3,420,000 results (0.48 seconds)</p>

          {/* Animated Results Container */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Result #1 - YOUR BUSINESS (Animates from position 3 to 1) */}
            <motion.div
              variants={{
                initial: { 
                  y: 260,
                  opacity: 0.4,
                  scale: 0.98
                },
                animate: { 
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.2,
                    delay: 1,
                    ease: [0.34, 1.56, 0.64, 1]
                  }
                }
              }}
              className="bg-white rounded-lg border-2 border-[#70E000] shadow-lg p-4 mb-3 relative z-30"
            >
              {/* #1 Badge */}
              <div className="absolute -top-2 -left-2 w-7 h-7 bg-gradient-to-br from-[#70E000] to-[#5ac000] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black text-xs font-bold">#1</span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#70E000] to-[#5ac000] flex-shrink-0 flex items-center justify-center">
                  <Wrench className="w-3.5 h-3.5 text-black" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-gray-900 truncate">Elite Auto Repair & Body Shop</h3>
                  <p className="text-[10px] text-gray-600 truncate">www.eliteautorepair.com</p>
                </div>
                <div className="flex items-center gap-0.5 ml-auto">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  <span className="text-[10px] text-gray-600 ml-1">5.0</span>
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-sm text-blue-700 font-normal mb-1 hover:underline cursor-pointer">
                Expert Auto Repair & Body Work - Same-Day Service Available
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-3">
                Professional mechanical & collision repair. ASE certified technicians. 15+ years experience. Emergency towing available. Free diagnostic & estimates.
              </p>
              
              {/* Sitelinks */}
              <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
                <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5" />
                  Book Service
                </a>
                <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                  <Phone className="w-2.5 h-2.5" />
                  (555) 987-6543
                </a>
                <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                  <AlertCircle className="w-2.5 h-2.5" />
                  Emergency Repair
                </a>
                <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                  <Award className="w-2.5 h-2.5" />
                  Reviews
                </a>
              </div>
            </motion.div>

            {/* Result #2 - Competitor */}
            <motion.div
              variants={{
                initial: { y: 0, opacity: 1 },
                animate: { 
                  y: 0,
                  opacity: 0.6,
                  transition: {
                    duration: 1.2,
                    delay: 1,
                    ease: [0.34, 1.56, 0.64, 1]
                  }
                }
              }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 mb-2 relative z-20"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-[10px] text-gray-600 truncate">Quick Fix Auto</h3>
                  <p className="text-[9px] text-gray-500 truncate">www.quickfixauto.com</p>
                </div>
              </div>
              <h4 className="text-xs text-blue-700 mb-1">Budget Auto Repair Services</h4>
              <p className="text-[10px] text-gray-600 line-clamp-2">Low-cost mechanical repairs. Call for pricing...</p>
            </motion.div>

            {/* Result #3 - Another Competitor */}
            <motion.div
              variants={{
                initial: { y: -130, opacity: 1 },
                animate: { 
                  y: 0,
                  opacity: 0.4,
                  transition: {
                    duration: 1.2,
                    delay: 1,
                    ease: [0.34, 1.56, 0.64, 1]
                  }
                }
              }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 relative z-10"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-[10px] text-gray-600 truncate">Generic Mechanics</h3>
                  <p className="text-[9px] text-gray-500 truncate">www.genericmechanics.com</p>
                </div>
              </div>
              <h4 className="text-xs text-blue-700 mb-1">Auto Repair Available</h4>
              <p className="text-[10px] text-gray-600 line-clamp-2">We offer basic car repair and maintenance...</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="bg-gradient-to-r from-[#70E000]/10 to-transparent border-t-2 border-[#70E000] px-6 py-3"
        >
          <p className="text-xs text-gray-800">
            <span className="font-semibold text-[#70E000]">Your shop dominates #1</span> — capturing drivers actively searching for auto repair services
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function Mechanics() {
  const [activeSplit, setActiveSplit] = useState<'problem' | 'solution'>('solution');

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#70E000]/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#70E000]/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-[#70E000] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#70E000] font-medium">MECHANICS & AUTO BODY SHOPS</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                When Cars Break,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Your Shop Should Be the Obvious Call
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Leadgentic builds AI-powered growth systems for mechanical and auto body shops that generate paid leads, organic leads, and booked repair jobs — all captured, qualified, and followed up automatically.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#70E000] to-[#5ac000] text-black px-8 py-4 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-[#70E000]/50 transition-all inline-flex items-center gap-2"
              >
                BOOK FREE GROWTH CALL
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            <div className="metrics-carousel-wrapper">
              <div className="flex gap-4">
                {mechanicsMetrics.map((metric, index) => (
                  <MetricCard key={index} {...metric} />
                ))}
              </div>
            </div>

            <style>{`
              .metrics-carousel-wrapper {
                animation: scroll-left-smooth 8s linear infinite;
                will-change: transform;
              }

              .metrics-carousel-wrapper:hover {
                animation-play-state: paused;
              }

              @keyframes scroll-left-smooth {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-100%);
                }
              }

              @media (max-width: 768px) {
                .metrics-carousel-wrapper {
                  animation-duration: 5s;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* The Reality Section - Split Focus Widget */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#70E000]/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-[#70E000]">Reality</span> You're Living In
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              You know the demand is there. Cars break down. Accidents happen. People search right now — not later.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveSplit('problem')}
              className={`
                relative cursor-pointer rounded-xl p-8 transition-all duration-300 ease-in-out
                ${activeSplit === 'problem'
                  ? 'bg-zinc-900/60 border-[#70E000]'
                  : 'bg-black border-zinc-800'
                }
                border
              `}
              style={{
                boxShadow: activeSplit === 'problem' ? '0 0 24px rgba(112, 224, 0, 0.12)' : 'none'
              }}
            >
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                ${activeSplit === 'problem' 
                  ? 'bg-[#70E000]/15 border border-[#70E000]/30' 
                  : 'bg-zinc-900 border border-zinc-800'
                }
              `}>
                <span className="text-2xl">⚠️</span>
              </div>
              
              <h3 className={`
                text-xl font-semibold mb-4 transition-colors duration-300
                ${activeSplit === 'problem' ? 'text-white' : 'text-gray-400'}
              `}>
                The System Problem
              </h3>
              
              <ul className="space-y-3">
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'problem' ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  <span className={`
                    mt-1 transition-colors duration-300
                    ${activeSplit === 'problem' ? 'text-[#70E000]' : 'text-gray-600'}
                  `}>×</span>
                  <span>Missed calls during busy hours</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'problem' ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  <span className={`
                    mt-1 transition-colors duration-300
                    ${activeSplit === 'problem' ? 'text-[#70E000]' : 'text-gray-600'}
                  `}>×</span>
                  <span>Leads that never get followed up</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'problem' ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  <span className={`
                    mt-1 transition-colors duration-300
                    ${activeSplit === 'problem' ? 'text-[#70E000]' : 'text-gray-600'}
                  `}>×</span>
                  <span>Inconsistent weekly workloads</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'problem' ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  <span className={`
                    mt-1 transition-colors duration-300
                    ${activeSplit === 'problem' ? 'text-[#70E000]' : 'text-gray-600'}
                  `}>×</span>
                  <span>Some weeks bays are full, others feel uncomfortably quiet</span>
                </li>
              </ul>

              {activeSplit === 'problem' && (
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#70E000]/30 to-transparent" />
              )}
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveSplit('solution')}
              className={`
                relative cursor-pointer rounded-xl p-8 transition-all duration-300 ease-in-out
                ${activeSplit === 'solution'
                  ? 'bg-zinc-900/60 border-[#70E000]'
                  : 'bg-black border-zinc-800'
                }
                border
              `}
              style={{
                boxShadow: activeSplit === 'solution' ? '0 0 24px rgba(112, 224, 0, 0.12)' : 'none'
              }}
            >
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                ${activeSplit === 'solution' 
                  ? 'bg-[#70E000]/15 border border-[#70E000]/30' 
                  : 'bg-zinc-900 border border-zinc-800'
                }
              `}>
                <span className="text-2xl">✓</span>
              </div>
              
              <h3 className={`
                text-xl font-semibold mb-4 transition-colors duration-300
                ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-400'}
              `}>
                The Dominant Shop Advantage
              </h3>
              
              <ul className="space-y-3">
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'solution' ? 'text-gray-200' : 'text-gray-500'}
                `}>
                  <Check className={`
                    w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300
                    ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
                  `} />
                  <span>Show up everywhere buyers look</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'solution' ? 'text-gray-200' : 'text-gray-500'}
                `}>
                  <Check className={`
                    w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300
                    ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
                  `} />
                  <span>Build trust before the call</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'solution' ? 'text-gray-200' : 'text-gray-500'}
                `}>
                  <Check className={`
                    w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300
                    ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
                  `} />
                  <span>Never lose a lead once it comes in</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'solution' ? 'text-gray-200' : 'text-gray-500'}
                `}>
                  <Check className={`
                    w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300
                    ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
                  `} />
                  <span>Leadgentic installs all three — as one system</span>
                </li>
              </ul>

              {activeSplit === 'solution' && (
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#70E000]/30 to-transparent" />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 1: AI-Powered Ads + OGC */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-4">
              <span className="text-sm text-[#70E000] font-medium">PART 1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">AI-Powered Ads</span> + OGC
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Ad Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 hover:border-[#70E000]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Ad Engine</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>Captures emergency, repair-ready searches</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>Optimized for calls, bookings, and real jobs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>AI testing and scaling what actually converts</span>
                </li>
              </ul>
            </motion.div>

            {/* OGC: Owner Generated Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 hover:border-[#70E000]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">OGC: Owner Generated Content</h3>
              <p className="text-gray-400 mb-4">People trust shops run by real people — not logos.</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>Script short authority-based talking points</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>You film naturally (no acting, no polish required)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>We edit for clarity, trust, and credibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>AI distributes and scales the best performers</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#70E000]/10 border border-[#70E000]/20 rounded-lg">
                <p className="text-sm text-[#70E000]">This creates instant trust and a local authority effect.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 2: AI SEO - Dominating Local Search */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#70E000]/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-4">
              <span className="text-sm text-[#70E000] font-medium">PART 2</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI SEO — <span className="text-[#70E000]">Dominating Local Search</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Ads create speed. <span className="text-[#70E000]">SEO creates dominance.</span>
            </p>
          </motion.div>
          
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 mb-12">
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-[#70E000]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Buyer-Intent Service Pages</h4>
                  <p className="text-gray-400 text-sm">Built to capture repair-ready searches</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-[#70E000]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">OGC to Authority Content</h4>
                  <p className="text-gray-400 text-sm">Transform your voice into local dominance</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#70E000]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Maps & Organic Rankings</h4>
                  <p className="text-gray-400 text-sm">Rank everywhere customers search</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#70E000]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Become the Trusted Name</h4>
                  <p className="text-gray-400 text-sm">People see you everywhere and trust by default</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Google Search Mockup */}
          <GoogleSearchMockup />
        </div>
      </section>

      {/* Part 3: CRM + AI + Human Follow-Up */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-4">
              <span className="text-sm text-[#70E000] font-medium">PART 3</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              CRM + AI + <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">Human Follow-Up</span>
            </h2>
            <p className="text-gray-400 text-lg">Every lead flows into one system.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Follow-Up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 hover:border-[#70E000]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Follow-Up</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>Instant responses to missed calls and form fills</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>Automated reminders and re-engagement</span>
                </li>
              </ul>
            </motion.div>

            {/* Human Vetting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 hover:border-[#70E000]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center mb-6">
                <ThumbsUp className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Human Vetting</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>Real people qualify leads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>Feedback loops improve ad and SEO performance</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-br from-[#70E000]/20 to-transparent border border-[#70E000]/30 rounded-2xl p-8">
              <p className="text-xl text-white mb-2">
                <span className="text-[#70E000] font-semibold">No missed opportunities.</span> No wasted ad spend.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inevitability Section */}
      <section className="py-16 md:py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#70E000]/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Quote marks decoration */}
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="text-[#70E000]/30 text-5xl md:text-6xl leading-none font-serif">"</div>
            </div>

            <h2 className="text-[26px] md:text-[32px] font-bold leading-[1.4] md:leading-relaxed max-w-3xl mx-auto px-4">
              <span className="text-gray-300">
                When urgency is captured, authority is built, and follow-up is automated —
              </span>
              {" "}
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                full bays become predictable.
              </span>
            </h2>

            {/* Bottom quote mark */}
            <div className="flex justify-center mt-4 md:mt-6">
              <div className="text-[#70E000]/30 text-5xl md:text-6xl leading-none font-serif rotate-180">"</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}