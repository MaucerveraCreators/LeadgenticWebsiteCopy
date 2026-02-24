import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Video, FileText, Eye, Building2, Rocket, TrendingDown } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";

// Import carousel images
import carouselImg1 from "@/assets/4f5163c8017c2a8b933f0854c755ebc5685002f6.png";
import carouselImg2 from "@/assets/5420025d43b11ea1fd309066125fb16ac50588c8.png";
import carouselImg3 from "@/assets/ea04862f51fed405ee1c01a7e2e97b0dfc1513d0.png";
import carouselImg4 from "@/assets/1769a11102e9e0368ff6c620d23018fbfd6b8e20.png";
import carouselImg5 from "@/assets/3d722390414be6311e68a987dab6919b3e57db05.png";
import carouselImg6 from "@/assets/390b348a1a631a68df6c0ed9a8a7339ec016fa16.png";
import carouselImg7 from "@/assets/1bde31db5abece3123a32a4ae475c3009fc53d05.png";
import carouselImg8 from "@/assets/96a3889ff6c61caaf85a49d4dd2085a1b854b27a.png";
import carouselImg9 from "@/assets/5a855bdef8119b426356d29c844269e06b5fe4ff.png";

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

// Auto-Typing Search Component for IV Therapy
function AutoTypingSearchBiofuse() {
  const [text, setText] = useState("");
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const fullText = "IV Therapy Michigan";

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
    }, 80); // 80ms per character

    return () => clearInterval(typingInterval);
  }, [isInView]);

  return (
    <div ref={ref} className="flex-1 flex items-center gap-3 border border-gray-200 rounded-full px-4 py-2 hover:shadow-sm transition-shadow">
      <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span className="flex-1 text-gray-900 text-sm">
        {text}
        <span className="animate-pulse">|</span>
      </span>
    </div>
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

// Biofuse Case Study Metrics Data
const biofuseMetrics = [
  { icon: TrendingUp, metric: "~100x", description: "Revenue growth from starting point" },
  { icon: Rocket, metric: "~2x", description: "Average year-over-year growth" },
  { icon: Building2, metric: "0 to 4", description: "Locations expanded" },
  { icon: Activity, metric: "10+", description: "Services from IV therapy alone" },
  { icon: BarChart3, metric: "3-10x", description: "Sustained ROAS across campaigns" },
  { icon: Clock, metric: "~9 years", description: "Long-term partnership growth" },
  { icon: Shield, metric: "100%", description: "Lead capture and follow-up" },
  { icon: Target, metric: "Premier", description: "Health optimization brand status" },
  { icon: Award, metric: "Multi-State", description: "Market presence achieved" },
  { icon: Sparkles, metric: "Predictable", description: "Demand generation system" },
  { icon: Users, metric: "Authority", description: "Local market positioning" },
  { icon: MessageSquare, metric: "Full System", description: "Integrated growth infrastructure" },
];

export function BiofuseCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Hero Section with Gradient */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Case Study · Health & Wellness · IV Therapy</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                From Zero Infrastructure to a Multi-State
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Health Optimization Brand
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              How Biofuse Built a Predictable Growth Engine With Leadgentic
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/book-growth"
                className="bg-gradient-to-r from-[#70E000] to-[#5ac000] text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#70E000]/50 transition-all inline-flex items-center gap-2"
              >
                BOOK A GROWTH CALL
                <ArrowRight className="w-4 h-4" />
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zinc-700 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-900 transition-all"
              >
                VIEW MORE CASE STUDIES
              </motion.button>
            </div>
          </motion.div>

          {/* Biofuse Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-biofuse">
              {/* First set */}
              {biofuseMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {biofuseMetrics.map((metric, index) => (
                <MetricCard
                  key={`second-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
            </div>
          </div>

          {/* Add animation styles */}
          <style>{`
            @keyframes scroll-biofuse {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-biofuse {
              animation: scroll-biofuse 8s linear infinite;
            }
            
            .animate-scroll-biofuse:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* QUICK SNAPSHOT Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">Quick Snapshot</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-base font-semibold text-white mb-4">Business Details</h3>
              <ul className="space-y-3">
                {[
                  { label: "Industry", value: "Health & Wellness / IV Therapy & Health Optimization" },
                  { label: "Market", value: "Multi-State" },
                  { label: "Time With Leadgentic", value: "~9 years" },
                  { label: "Primary Challenge", value: "No connected marketing, no predictable demand" }
                ].map((item, index) => (
                  <li key={index} className="flex flex-col gap-1">
                    <span className="text-xs text-[#70E000] font-semibold uppercase tracking-wider">{item.label}</span>
                    <span className="text-gray-300 text-sm">{item.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
            >
              <h3 className="text-base font-semibold text-white mb-4">Services Used</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "OGC",
                  "AI Ads",
                  "Google Ads",
                  "Meta Ads",
                  "Video Editing",
                  "Funnels",
                  "Website",
                  "AI SEO",
                  "CRM",
                  "Influencer Marketing",
                  "Brand Strategy"
                ].map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-[#70E000]/10 border border-[#70E000]/30 rounded-full text-xs text-[#70E000] font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE BEGINNING Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
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
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Beginning</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              When Nothing Was{" "}
              <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">Actually Working</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              When Biofuse first partnered with Leadgentic, there wasn't a broken system.<br />
              <span className="text-white font-semibold">There was no system at all.</span>
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-left max-w-2xl mx-auto">
              <h3 className="text-base font-semibold text-white mb-4">At the time:</h3>
              <ul className="space-y-3">
                {[
                  "No paid advertising",
                  "No meaningful SEO presence",
                  "No connected booking experience",
                  "No consistent inbound demand",
                  "No predictable revenue"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 text-center max-w-2xl mx-auto"
            >
              <p className="text-xl font-bold text-white mb-2">
                The business existed in fragments —
              </p>
              <p className="text-lg text-gray-300 mb-1">
                pieces of an idea without the infrastructure to support growth.
              </p>
              <p className="text-[24px] md:text-2xl font-bold text-[#70E000] mt-4">
                Revenue was near zero. Growth felt theoretical.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              What They Thought the Problem Was — <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">And What It Actually Was</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Initially, Biofuse believed the problem was awareness.<br />
              <span className="text-white font-semibold">That wasn't wrong — it was incomplete.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">What Was Missing</h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "No trust engine",
                  "No conversion path",
                  "No authority presence",
                  "No follow-up system"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">The Reality</h3>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm font-medium">
                <span className="text-[#70E000] font-bold">Attention without infrastructure would only amplify chaos.</span>
              </p>

              <p className="text-white text-base italic">
                "Even if awareness increased, there was no foundation to convert it into growth."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biofuse Image Carousel */}
      <section className="py-6 bg-black relative">
        <div className="relative overflow-hidden">
          {/* Gradient Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex gap-6 animate-scroll-images px-6">
            {/* First set of images */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg1} 
                alt="Biofuse IV Therapy Patient" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg2} 
                alt="Biofuse Wellness Experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg3} 
                alt="Biofuse Health Professional" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg4} 
                alt="Biofuse IV Therapy Session" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg5} 
                alt="Biofuse Client Relaxing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg6} 
                alt="Biofuse Wellness Center" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg7} 
                alt="Biofuse Patient IV Treatment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg8} 
                alt="Biofuse Professional Care" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg1} 
                alt="Biofuse IV Therapy Patient" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg2} 
                alt="Biofuse Wellness Experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg3} 
                alt="Biofuse Health Professional" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg4} 
                alt="Biofuse IV Therapy Session" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg5} 
                alt="Biofuse Client Relaxing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg6} 
                alt="Biofuse Wellness Center" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg7} 
                alt="Biofuse Patient IV Treatment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg8} 
                alt="Biofuse Professional Care" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Animation styles for image carousel */}
          <style>{`
            @keyframes scroll-images {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-images {
              animation: scroll-images 25s linear infinite;
            }
            
            .animate-scroll-images:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* THE DECISION MOMENT Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              The Decision Moment: <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">Choosing to Build a Real Business</span>
            </h2>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              The turning point came when the founders decided they didn't want:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { text: "A side hustle" },
                { text: "A mobile-only operation" },
                { text: "A short-term win" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-base text-white font-semibold max-w-2xl mx-auto mb-6">
              They wanted:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Building2, text: "A physical location" },
                { icon: Rocket, text: "A scalable brand" },
                { icon: Target, text: "A long-term business they could commit to fully" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#70E000]" />
                  </div>
                  <p className="text-white text-sm font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center">
              <p className="text-xl font-bold text-white mb-2">
                They chose Leadgentic not as a vendor —
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">
                but as a growth partner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE SYSTEM INSTALLED Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <Zap className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The System Installed</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              Building The <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">Complete Infrastructure</span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* OGC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Owner Generated Content (OGC): Trust From Day One</h3>
                  <p className="text-gray-400 text-sm mb-4">Instead of hiding behind a brand, the founders became visible.</p>
                  
                  <div className="space-y-2">
                    {[
                      "Explained what Biofuse does",
                      "How treatments work",
                      "What patients should expect",
                      "Why Biofuse was different"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm mt-4 italic">
                    Trust began forming before the first interaction.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* AI Ads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">AI-Powered Advertising: Creating Demand With Intent</h3>
                  <p className="text-gray-400 text-sm mb-4">Ads were introduced only after: Messaging was clear, Trust assets existed, Funnels were in place</p>
                  
                  <div className="space-y-2">
                    {[
                      "Bookings, not clicks",
                      "Behavior, not vanity metrics"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">AI optimization focused on: {item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm mt-4 italic">
                    Demand became consistent — not volatile.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Funnels & Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Funnels & Website: Removing Friction</h3>
                  <p className="text-gray-400 text-sm mb-4">The site and booking experience were rebuilt to:</p>
                  
                  <div className="space-y-2">
                    {[
                      "Educate first",
                      "Set expectations",
                      "Reduce hesitation"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm mt-4 italic">
                    Patients arrived informed and ready.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* AI SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">AI SEO & Local Authority: Compounding Visibility</h3>
                  <p className="text-gray-400 text-sm mb-4">SEO was implemented strategically:</p>
                  
                  <div className="space-y-2">
                    {[
                      "Local authority pages",
                      "Educational content aligned to intent",
                      "GMB optimization"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm mt-4 italic">
                    Inbound demand no longer relied on ads alone.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CRM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">CRM & Follow-Up: Protecting Revenue</h3>
                  <p className="text-gray-400 text-sm mb-4">As demand grew, systems ensured nothing leaked:</p>
                  
                  <div className="space-y-2">
                    {[
                      "Every lead captured",
                      "Automated follow-up",
                      "Clear operational visibility"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm mt-4 italic">
                    The team could focus on delivery — not survival.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT CHANGED Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">What Changed</span>
            </h2>

            <p className="text-xl text-white font-semibold max-w-2xl mx-auto mb-8">
              The biggest shift wasn't just revenue.<br />
              It was how the business felt to operate.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Lead flow stabilized",
                "Booking became predictable",
                "Hiring became possible",
                "Expansion became logical"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 justify-center">
                    <Check className="w-5 h-5 text-[#70E000] flex-shrink-0" />
                    <p className="text-white text-base font-medium">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center">
              <p className="text-[24px] md:text-2xl font-bold text-[#70E000]">
                Growth stopped feeling fragile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO Section */}
      <section className="py-12 md:py-16 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl shadow-[#70E000]/10">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oizKUSD0qN4"
                title="Biofuse Success Story Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              Outcomes <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">(Earned, Not Hyped)</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Over time, Biofuse experienced:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: TrendingUp, title: "~100× revenue growth", subtitle: "from the starting point" },
              { icon: Rocket, title: "~2× average", subtitle: "year-over-year growth" },
              { icon: Building2, title: "0 to 4 locations", subtitle: "expansion achieved" },
              { icon: Activity, title: "10+ advanced services", subtitle: "from IV therapy alone" },
              { icon: BarChart3, title: "3–10× ROAS", subtitle: "sustained across campaigns" },
              { icon: Award, title: "Results became", subtitle: "repeatable" }
            ].map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/30 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 flex items-center justify-center mx-auto mb-4">
                  <outcome.icon className="w-6 h-6 text-[#70E000]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{outcome.title}</h3>
                <p className="text-sm text-gray-400">{outcome.subtitle}</p>
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
            <p className="text-xl font-bold text-white mb-2">
              More importantly:
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">
              Results became repeatable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE AFTER Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              The After: <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">Operating With Confidence</span>
            </h2>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              Today, Biofuse operates with:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Target, text: "Predictable demand" },
                { icon: Zap, text: "Clear systems" },
                { icon: Rocket, text: "Intentional expansion" },
                { icon: Shield, text: "Confidence in decision-making" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#70E000]" />
                  </div>
                  <p className="text-white text-sm font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center">
              <p className="text-[24px] md:text-2xl font-bold text-white mb-2">
                What began as an idea
              </p>
              <p className="text-[24px] md:text-3xl font-bold bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">
                became a premier health optimization brand.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY INSIGHT Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Key Insight</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight text-white">
              Growth didn't come from more effort.
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              It came from systems working together:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {["Trust", "Authority", "Demand", "Conversion", "Follow-Up"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-lg font-bold text-[#70E000]">{item}</span>
                  {index < 4 && <ArrowRight className="w-5 h-5 text-gray-600" />}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-10 text-center">
              <p className="text-sm text-[#70E000] font-semibold uppercase tracking-wider mb-4">In Their Words</p>
              <p className="text-2xl font-bold text-white italic leading-relaxed">
                "Leadgentic has evolved with us, side by side for almost a decade, making us the premier health optimization business in our markets."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Search Ranking Animation - Visual Proof */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative mt-12"
          >
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
                    <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
                  </svg>
                  
                  {/* Search Input */}
                  <AutoTypingSearchBiofuse />
                </div>
              </div>

              {/* Search Results with Animation */}
              <div className="bg-gray-50 px-6 py-6 relative">
                <p className="text-[10px] text-gray-500 mb-4 px-1">About 2,340,000 results (0.48 seconds)</p>

                {/* Animated Results Container */}
                <motion.div 
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  {/* Result #1 - BIOFUSE (Animates from position 3 to 1) */}
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
                        <Sparkles className="w-3.5 h-3.5 text-black" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs font-semibold text-gray-900 truncate">Biofuse Health & Wellness</h3>
                        <p className="text-[10px] text-gray-600 truncate">www.biofuse.com</p>
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
                      Premier IV Therapy & Health Optimization - Biofuse Michigan
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed mb-3">
                      Expert IV therapy, vitamin infusions & health optimization services. Multi-location wellness center. Book your appointment today.
                    </p>
                    
                    {/* Sitelinks */}
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        Book Appointment
                      </a>
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Phone className="w-2.5 h-2.5" />
                        Contact Us
                      </a>
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Activity className="w-2.5 h-2.5" />
                        IV Therapy Services
                      </a>
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Building2 className="w-2.5 h-2.5" />
                        Locations
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
                        <h3 className="text-[10px] text-gray-600 truncate">Competitor Wellness Center</h3>
                        <p className="text-[9px] text-gray-500 truncate">www.competitor-wellness.com</p>
                      </div>
                    </div>
                    <h4 className="text-xs text-blue-700 mb-1">IV Therapy Services in Michigan</h4>
                    <p className="text-[10px] text-gray-600 line-clamp-2">Basic IV therapy services available. Call for pricing information...</p>
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
                        <h3 className="text-[10px] text-gray-600 truncate">Budget IV Clinic</h3>
                        <p className="text-[9px] text-gray-500 truncate">www.budgetiv.com</p>
                      </div>
                    </div>
                    <h4 className="text-xs text-blue-700 mb-1">Affordable IV Therapy Near You</h4>
                    <p className="text-[10px] text-gray-600 line-clamp-2">We offer affordable IV therapy packages...</p>
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
                  <span className="font-semibold text-[#70E000]">Biofuse dominates #1</span> — capturing premium clients actively searching for IV therapy in Michigan
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}