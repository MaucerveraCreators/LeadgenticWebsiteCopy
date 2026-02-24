import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Home as HomeIcon, Wrench, Hammer, Droplet, Wind, Construction, Star, MapPin } from "lucide-react";
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

// Home Services Metrics Data
const homeServicesMetrics = [
  { icon: TrendingUp, metric: "5.3x", description: "More booked estimates vs. manual follow-up" },
  { icon: Clock, metric: "<90s", description: "Average response time to new leads" },
  { icon: Users, metric: "92%", description: "Lead capture rate (even after hours)" },
  { icon: Shield, metric: "24/7", description: "AI availability for homeowner questions" },
  { icon: Phone, metric: "89%", description: "Reduction in missed opportunities" },
  { icon: BarChart3, metric: "4.1x", description: "ROI on marketing investment" },
  { icon: Target, metric: "$180K", description: "Average annual revenue increase" },
  { icon: Award, metric: "#1", description: "Local search authority in service area" },
  { icon: MessageSquare, metric: "100%", description: "Leads nurtured until ready" },
  { icon: Zap, metric: "3x", description: "Faster project pipeline velocity" },
  { icon: Activity, metric: "96%", description: "Customer satisfaction rating" },
  { icon: ArrowUpRight, metric: "67%", description: "More high-ticket projects closed" },
];

// Auto-Typing Search Component
function AutoTypingSearch() {
  const [text, setText] = useState("");
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const fullText = "roofing near me";

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
              <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
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
          <p className="text-[10px] text-gray-500 mb-4 px-1">About 2,180,000 results (0.51 seconds)</p>

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
                  <h3 className="text-xs font-semibold text-gray-900 truncate">Premier Home Roofing</h3>
                  <p className="text-[10px] text-gray-600 truncate">www.premierhomeroofing.com</p>
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
                Expert Roofing Services - Free Estimates Available 24/7
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-3">
                Professional roofing installation & repair. 20+ years experience. Licensed & insured. Same-day emergency service. Get your free estimate today.
              </p>
              
              {/* Sitelinks */}
              <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
                <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5" />
                  Book Estimate
                </a>
                <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                  <Phone className="w-2.5 h-2.5" />
                  (555) 123-4567
                </a>
                <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                  <Shield className="w-2.5 h-2.5" />
                  Emergency Service
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
                  <h3 className="text-[10px] text-gray-600 truncate">Affordable Roofing Co</h3>
                  <p className="text-[9px] text-gray-500 truncate">www.affordableroofing.com</p>
                </div>
              </div>
              <h4 className="text-xs text-blue-700 mb-1">Budget Roofing Services Near You</h4>
              <p className="text-[10px] text-gray-600 line-clamp-2">Low-cost roofing solutions. Call for pricing...</p>
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
                  <h3 className="text-[10px] text-gray-600 truncate">Generic Roofers</h3>
                  <p className="text-[9px] text-gray-500 truncate">www.genericroofers.com</p>
                </div>
              </div>
              <h4 className="text-xs text-blue-700 mb-1">Roofing Services Available</h4>
              <p className="text-[10px] text-gray-600 line-clamp-2">We offer basic roofing repair and replacement...</p>
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
            <span className="font-semibold text-[#70E000]">Your business dominates #1</span> — capturing homeowners actively searching for roofing services
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function HomeServices() {
  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Hero Section with Gradient */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-[#70E000] rounded-full animate-pulse"></div>
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Home Services</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                More Booked Estimates.
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Less Missed Revenue.
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Leadgentic installs AI-powered growth systems for home service businesses that generate high-intent leads, organic demand, and booked estimates — even after hours.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link
                to="/book-growth"
                className="bg-gradient-to-r from-[#70E000] to-[#5ac000] text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#70E000]/50 transition-all inline-flex items-center gap-2"
              >
                BOOK A FREE GROWTH CALL
                <ArrowRight className="w-4 h-4" />
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zinc-700 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-900 transition-all"
              >
                SEE CASE STUDIES
              </motion.button>
            </div>

            {/* Service Types */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#70E000]" />
                Roofing
              </span>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span className="flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-[#70E000]" />
                HVAC
              </span>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span className="flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-[#70E000]" />
                Plumbing
              </span>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span className="flex items-center gap-1.5">
                <Hammer className="w-3.5 h-3.5 text-[#70E000]" />
                Remodeling
              </span>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span className="flex items-center gap-1.5">
                <Construction className="w-3.5 h-3.5 text-[#70E000]" />
                Concrete & Asphalt
              </span>
            </div>
          </motion.div>

          {/* Home Services Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-home-services">
              {homeServicesMetrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
            </div>
          </div>

          {/* Add animation styles */}
          <style>{`
            @keyframes scroll-home-services {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            
            .animate-scroll-home-services {
              animation: scroll-home-services 8s linear infinite;
            }
            
            .animate-scroll-home-services:hover {
              animation-play-state: paused;
            }

            @media (max-width: 768px) {
              .animate-scroll-home-services {
                animation-duration: 5s;
              }
            }
          `}</style>
        </div>
      </section>

      {/* THE REALITY Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              Demand <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">exists</span>.
            </h2>
            <p className="text-lg text-gray-400 mb-8">Revenue leaks because:</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Phone, title: "Calls are missed", description: "After-hours inquiries go to voicemail" },
              { icon: Clock, title: "Leads expire", description: "Homeowners book with the first responder" },
              { icon: MessageSquare, title: "Follow-up is inconsistent", description: "Manual tracking fails under volume" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#70E000]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#70E000]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center"
          >
            <p className="text-2xl font-bold text-white">
              Your biggest competitor isn't another company — it's <span className="text-[#70E000]">response time</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE REFRAME Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#70E000]/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">What Top Operators Do Differently</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              The top operators don't <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">hire more office staff</span>.
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 mb-8">
              <p className="text-xl lg:text-2xl font-bold leading-tight">
                They install <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">systems that never stop responding</span>.
              </p>
            </div>

            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Leadgentic builds that system — AI + automation + human qualification — so every lead gets captured, qualified, and converted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Search Mockup Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <Target className="w-4 h-4 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">See It In Action</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              Watch Your Business <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Climb to #1</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Our AI SEO system automatically optimizes your local presence so homeowners find you first.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GoogleSearchMockup />
          </motion.div>
        </div>
      </section>

      {/* PART 1: AI ADS + OGC Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <div className="w-5 h-5 rounded-full bg-[#70E000] flex items-center justify-center text-black text-[10px] font-bold">1</div>
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Lead Generation Starts Here</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 tracking-tight">
              AI-Powered Ads That Drive <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Booked Estimates</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* AI Ad Engine Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Service-Specific Ad Campaigns</h3>
                  <p className="text-gray-400 text-sm">Google + Meta campaigns</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Optimized for booked estimates, not just clicks",
                  "AI testing hundreds of messaging variations",
                  "Fast kill on losers, automatic scaling on winners",
                  "Service-area targeting for maximum ROI"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#70E000]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#70E000]" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* OGC Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 hover:border-[#70E000]/40 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">OGC Builds Instant Trust</h3>
                  <p className="text-gray-400 text-sm">Owner-Generated Content</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm font-medium">
                Homeowners don't trust faceless companies. They trust <span className="text-[#70E000] font-bold">real people</span>.
              </p>

              <div className="space-y-2">
                {[
                  { icon: Users, text: "You film short, authentic videos" },
                  { icon: Sparkles, text: "We edit for clarity and trust" },
                  { icon: Zap, text: "AI launches them into the market" },
                  { icon: TrendingUp, text: "Homeowners see you as the expert" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 bg-black/30 rounded-lg p-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#70E000]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-[#70E000]" />
                    </div>
                    <p className="text-gray-300 text-sm pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
          >
            <h3 className="text-base font-bold text-white mb-4">What That Means in Practice:</h3>
            <p className="text-gray-300 text-sm mb-4">
              Home service businesses in similar markets often see:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Daily inbound estimate requests",
                "Higher-quality, pre-qualified leads",
                "More accepted high-ticket projects"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#70E000]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#70E000]" />
                  </div>
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">
              (Exact volume depends on market size, ad spend, and service capacity.)
            </p>
          </motion.div>
        </div>
      </section>

      {/* PART 2: AI SEO Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <div className="w-5 h-5 rounded-full bg-[#70E000] flex items-center justify-center text-black text-[10px] font-bold">2</div>
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Local Dominance</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              AI SEO — <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Own Your Service Area</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Ads create speed. SEO creates <span className="text-[#70E000] font-semibold">evergreen lead flow</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-base font-bold text-white mb-4">How Our AI SEO System Works:</h3>
              <div className="space-y-3">
                {[
                  "Service-area authority pages (roofing in [city], HVAC repair near me)",
                  "Local search dominance for high-intent searches",
                  "OGC content repurposed into trust-building blogs",
                  "Continuous optimization based on homeowner search behavior"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#70E000]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#70E000]" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
            >
              <h3 className="text-base font-bold text-white mb-4">Over time, your business becomes:</h3>
              <div className="space-y-3">
                {[
                  { icon: Award, text: "The name homeowners see repeatedly" },
                  { icon: Shield, text: "The company they trust" },
                  { icon: TrendingUp, text: "The default choice in your area" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#70E000]" />
                    </div>
                    <p className="text-gray-300 text-sm font-medium pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center"
          >
            <p className="text-xl font-bold text-white mb-2">
              Operators often describe this phase as:
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
              "Organic leads that feel free — and they keep coming."
            </p>
          </motion.div>
        </div>
      </section>

      {/* PART 3: CRM + AI Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <div className="w-5 h-5 rounded-full bg-[#70E000] flex items-center justify-center text-black text-[10px] font-bold">3</div>
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Lead Qualification</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              CRM + AI + <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Human Qualification</span>
            </h2>
            <p className="text-base text-gray-400">
              Where most contractors lose revenue — we capture it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* AI Capture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#70E000]" />
                </div>
                <h3 className="text-lg font-bold text-white">AI Captures</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Instant responses to inquiries",
                  "24/7 availability",
                  "Captures critical details"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#70E000]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#70E000]" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Human Qualification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center">
                  <Users className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white">Humans Qualify</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Real people vet leads",
                  "Filter serious homeowners",
                  "Quality feedback to AI"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#70E000]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#70E000]" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Estimates Booked */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#70E000]" />
                </div>
                <h3 className="text-lg font-bold text-white">Estimates Booked</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Appointments scheduled",
                  "Follow-up automated",
                  "Zero leads forgotten"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#70E000]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#70E000]" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">The Result:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, text: "Higher conversion rates" },
                { icon: MessageSquare, text: "Better project quality" },
                { icon: Award, text: "More referrals" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#70E000]/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#70E000]" />
                  </div>
                  <p className="text-white font-bold text-base text-center">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROOF Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <Award className="w-4 h-4 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Proof</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              Real Results from <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Real Operators</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Owner Testimonials</h3>
                  <p className="text-sm text-gray-400">Real stories from the field</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Before Leadgentic, I was losing estimates because I couldn't answer the phone fast enough. Now, every single inquiry gets captured and qualified. My project pipeline has never been fuller."
              </p>
              <p className="text-[#70E000] text-sm font-semibold mt-4">— Mike, Roofing Contractor</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#70E000]/20 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Case Studies</h3>
                  <p className="text-sm text-gray-400">Reduced lead waste, maximized revenue</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                See how home service businesses are converting more leads, booking more estimates, and scaling predictably.
              </p>
              <button className="text-[#70E000] text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INEVITABILITY Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Zap className="w-4 h-4 text-[#70E000]" />
              <span className="text-sm text-[#70E000] font-medium">INEVITABILITY</span>
            </div>

            <h2 className="text-2xl md:text-[30px] font-bold mb-8 leading-tight">
              When every inquiry is <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">captured</span> and{" "}
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">followed up</span>,
              <br />
              revenue stops leaking.
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-2xl p-12 mb-12">
              <p className="text-2xl md:text-[30px] font-bold text-white">
                Growth becomes <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">systematic</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-2xl md:text-5xl font-bold text-[#70E000] mb-2">
                  <AnimatedCounter end={5} suffix="x" />
                </p>
                <p className="text-gray-400">More Booked Estimates</p>
              </div>
              <div>
                <p className="text-2xl md:text-5xl font-bold text-[#70E000] mb-2">
                  <AnimatedCounter end={92} suffix="%" />
                </p>
                <p className="text-gray-400">Lead Capture Rate</p>
              </div>
              <div>
                <p className="text-2xl md:text-5xl font-bold text-[#70E000] mb-2">
                  $<AnimatedCounter end={180} suffix="K" />
                </p>
                <p className="text-gray-400">Average Revenue Increase</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}