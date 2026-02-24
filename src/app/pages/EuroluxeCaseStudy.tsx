import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, Phone, MessageSquare, FileText, Eye, Building2, Rocket, TrendingDown, DollarSign, Calendar, Wrench } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import detailBrushImage from "@/assets/effee4cc3763313a4af4456cae3b752dc515d02a.png";
import wheelPolishImage from "@/assets/a11209bdcb2aa2cc5c03d6eb261ea69e39198514.png";
import steeringWheelImage from "@/assets/9778c719b405d9d0d4fb3a3b2cef6f54c4246ddb.png";

// Animated Counter Component
function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
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
      {prefix}{count}{suffix}
    </span>
  );
}

// Auto-Typing Search Component
function AutoTypingSearchEuroluxe() {
  const [text, setText] = useState("");
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const fullText = "PPF installation Tomball TX";

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

// Euroluxe Case Study Metrics Data
const euroluxeMetrics = [
  { icon: TrendingUp, metric: "3×", description: "Revenue growth in 12 months" },
  { icon: DollarSign, metric: "$100K+", description: "Monthly revenue achieved" },
  { icon: Activity, metric: "8-12", description: "Qualified leads per day" },
  { icon: Target, metric: "Consistent", description: "High-quality lead flow" },
  { icon: BarChart3, metric: "Premium", description: "Lead qualification system" },
  { icon: Clock, metric: "Predictable", description: "Monthly demand generation" },
  { icon: Shield, metric: "100%", description: "Lead capture & follow-up" },
  { icon: Rocket, metric: "Full-Time", description: "PPF installer hired" },
  { icon: Building2, metric: "Stabilized", description: "Operations & growth" },
  { icon: Sparkles, metric: "AI-Powered", description: "Ads & optimization system" },
  { icon: Users, metric: "Authority", description: "Local market positioning" },
  { icon: Award, metric: "Premium", description: "Brand positioning achieved" },
];

export function EuroluxeCaseStudy() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Case Study · Automotive · Autostyling</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent md:hidden">
                From Feast-or-Famine
              </span>
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent hidden md:inline">
                From Feast-or-Famine to a
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent md:hidden">
                to a $100K+/Month Auto
              </span>
              <br className="md:hidden" />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent md:hidden">
                Styling Operation
              </span>
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent hidden md:inline">
                $100K+/Month Auto Styling Operation
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              How Euroluxe Fine Auto Detailing Built Predictable Growth With Leadgentic
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

          {/* Euroluxe Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-euroluxe">
              {/* First set */}
              {euroluxeMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {euroluxeMetrics.map((metric, index) => (
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
            @keyframes scroll-euroluxe {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-euroluxe {
              animation: scroll-euroluxe 5s linear infinite;
            }
            
            @media (min-width: 768px) {
              .animate-scroll-euroluxe {
                animation: scroll-euroluxe 8s linear infinite;
              }
            }
            
            .animate-scroll-euroluxe:hover {
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight text-[#70E000]">
              Quick Snapshot
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
                  { label: "Industry", value: "Autostyling (PPF, Ceramic Coating, Window Tint)" },
                  { label: "Market", value: "Tomball, Texas" },
                  { label: "Years in Business Before Leadgentic", value: "3" },
                  { label: "Core Outcome", value: "Revenue growth from ~$35–40K/month to $100K+/month" }
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
                  "Funnels & Landing Pages",
                  "SEO",
                  "CRM (AI + Human Follow-Up)",
                  "Custom Website"
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

      {/* THE BEFORE Section */}
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Before</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight text-[#70E000]">
              When Hard Work Didn't Equal Predictable Growth
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Before working with Leadgentic, Euroluxe Fine Auto Detailing had something many shops don't:<br />
              <span className="text-white font-semibold">Great fulfillment.</span>
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-left max-w-2xl mx-auto mb-8">
              <h3 className="text-base font-semibold text-white mb-4">But the business still lived in constant tension:</h3>
              <ul className="space-y-3">
                {[
                  "Revenue swung wildly",
                  "Growth felt capped by the owner",
                  "Some months were strong, others painfully slow",
                  "Phones went unanswered during busy periods",
                  "Sales opportunities were missed",
                  "Hiring felt risky"
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
              <p className="text-2xl font-bold text-[#70E000]">
                It was the definition of feast or famine.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight text-[#70E000]">
              What They Thought the Problem Was — And What It Actually Was
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Initially, the owner believed he was the problem.<br />
              <span className="text-white font-semibold">But the deeper truth was structural.</span>
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
                  "Poor lead quality",
                  "No real SEO presence",
                  "An outdated website",
                  "No service-specific landing pages",
                  "Weak ad creatives",
                  "A strong reputation that wasn't documented or visible online"
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
                Their previous marketing company couldn't push growth beyond ~$25K/month, despite demand existing.
              </p>

              <p className="text-[#70E000] font-bold text-base mb-4">
                The issue wasn't effort.
              </p>

              <p className="text-white text-base italic">
                It was the absence of a system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Euroluxe Image Carousel */}
      <section className="py-10 bg-black relative">
        <div className="relative overflow-hidden">
          {/* Gradient Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex gap-6 animate-scroll-images px-6">
            {/* First set of images */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={detailBrushImage} 
                alt="Car Detailing Brush Application" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={wheelPolishImage} 
                alt="Steering Wheel Detailing Polishing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={steeringWheelImage} 
                alt="Steering Wheel Cleaning and Polishing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1607556672054-054f3e90363f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwZGV0YWlsaW5nJTIwY2VyYW1pYyUyMGNvYXRpbmclMjBoYW5kc3xlbnwxfHx8fDE3NzAwNDQ0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Ceramic Coating Application Hands" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1727940334409-36a3407d623a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzAwNDQ0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Car Interior Leather Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1678383407763-4e02ba2aa056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvcnJlY3Rpb24lMjBjYXIlMjBkZXRhaWxpbmclMjB3b3JrfGVufDF8fHx8MTc3MDA0NDQyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Paint Correction Detailing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1694678505383-676d78ea3b96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXglMjBhcHBsaWNhdGlvbiUyMGRldGFpbCUyMHdvcmt8ZW58MXx8fHwxNzcwMDQ0NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Car Wax Application Detail" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={detailBrushImage} 
                alt="Car Detailing Brush Application" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={wheelPolishImage} 
                alt="Steering Wheel Detailing Polishing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={steeringWheelImage} 
                alt="Steering Wheel Cleaning and Polishing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1607556672054-054f3e90363f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwZGV0YWlsaW5nJTIwY2VyYW1pYyUyMGNvYXRpbmclMjBoYW5kc3xlbnwxfHx8fDE3NzAwNDQ0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Ceramic Coating Application Hands" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1727940334409-36a3407d623a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzAwNDQ0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Car Interior Leather Cleaning" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1678383407763-4e02ba2aa056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvcnJlY3Rpb24lMjBjYXIlMjBkZXRhaWxpbmclMjB3b3JrfGVufDF8fHx8MTc3MDA0NDQyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Paint Correction Detailing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1694678505383-676d78ea3b96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXglMjBhcHBsaWNhdGlvbiUyMGRldGFpbCUyMHdvcmt8ZW58MXx8fHwxNzcwMDQ0NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Car Wax Application Detail" 
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight text-[#70E000]">
              The Decision Moment: Choosing Predictability Over Hustle
            </h2>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              What finally pushed the change was simple:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-left">
                <h3 className="text-base font-semibold text-white mb-4">They didn't want to just "run ads" anymore.</h3>
                <p className="text-gray-300 text-sm mb-4">They wanted:</p>
                <ul className="space-y-2">
                  {[
                    "Predictable demand",
                    "Higher-quality leads",
                    "A system that could support hiring",
                    "A path to the next level of growth"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 text-left">
                <h3 className="text-base font-semibold text-white mb-4">They chose Leadgentic after:</h3>
                <ul className="space-y-2">
                  {[
                    "Seeing the brand repeatedly online",
                    "Reviewing testimonials",
                    "Personally calling other clients",
                    "Experiencing a smooth, professional onboarding process"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center">
              <p className="text-xl font-bold text-white mb-2">
                This wasn't a gamble —
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                it felt methodical.
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight text-[#70E000]">
              Building The Complete Infrastructure
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
                  <Users className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Owner Generated Content (OGC): Turning the Owner Into the Brand</h3>
                  <p className="text-gray-400 text-sm mb-4">One of the first changes was visibility.</p>
                  
                  <p className="text-gray-300 text-sm mb-3">
                    Instead of hiding behind ads, the owner became the face of the business — explaining services, quality standards, and what customers should expect.
                  </p>
                  
                  <p className="text-[#70E000] font-semibold text-sm italic">
                    This immediately shifted lead quality. People didn't just inquire — they arrived pre-sold.
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
                  <h3 className="text-lg font-bold text-white mb-1">AI-Powered Ads: From Volume to Qualification</h3>
                  <p className="text-gray-400 text-sm mb-4">Ads were rebuilt from the ground up:</p>
                  
                  <div className="space-y-2 mb-4">
                    {[
                      "High-level creatives",
                      "Service-specific messaging",
                      "AI optimization focused on qualified actions, not cheap leads"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm italic">
                    Instead of random spikes, inbound demand became consistent. Caleb began averaging 8–12 leads per day, with campaigns remaining effective month after month.
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
                  <h3 className="text-lg font-bold text-white mb-1">Funnels & Website: Setting Expectations Before the Call</h3>
                  <p className="text-gray-400 text-sm mb-4">Service-specific landing pages and a new website experience were introduced to:</p>
                  
                  <div className="space-y-2 mb-4">
                    {[
                      "Pre-frame value",
                      "Set pricing expectations",
                      "Filter unserious inquiries"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm italic">
                    Sales conversations changed immediately. Fewer time-wasters. More serious buyers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SEO */}
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
                  <h3 className="text-lg font-bold text-white mb-1">SEO: Building Authority That Compounds</h3>
                  <p className="text-gray-400 text-sm mb-4">SEO was layered in to:</p>
                  
                  <div className="space-y-2 mb-4">
                    {[
                      "Capture high-intent local searches",
                      "Build long-term visibility",
                      "Reduce dependency on ads"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm italic">
                    Over time, inbound demand felt more natural — less forced.
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
                  <h3 className="text-lg font-bold text-white mb-1">CRM + AI + Human Follow-Up: Removing the Bottleneck</h3>
                  <p className="text-gray-400 text-sm mb-4">A unified CRM system ensured:</p>
                  
                  <div className="space-y-2 mb-4">
                    {[
                      "Every lead was captured",
                      "Follow-up was instant",
                      "Data was organized",
                      "No opportunity slipped through"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm italic">
                    This removed the owner as the bottleneck. For the first time, growth felt manageable.
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight text-[#70E000]">
              What Changed
            </h2>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              The biggest shift wasn't just revenue — it was relief.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: MessageSquare, text: "Conversations improved" },
                { icon: TrendingUp, text: "Lead quality increased" },
                { icon: Target, text: "The owner focused on sales instead of everything else" },
                { icon: Users, text: "A full-time PPF installer was hired" },
                { icon: Building2, text: "Operations stabilized" },
                { icon: Shield, text: "Growth felt manageable" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#70E000]" />
                    </div>
                    <p className="text-white text-sm font-medium">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center">
              <p className="text-base text-gray-300 mb-4">
                Caleb described the experience in one word:
              </p>
              <p className="text-3xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent text-[24px]">
                "Relieving."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight text-[#70E000]">
              Outcomes (Safe, Honest, and Earned)
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Over time, Euroluxe experienced:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: TrendingUp,
                title: "Growth from ~$35–40K/month",
                description: "To $60–70K/month within months"
              },
              {
                icon: Rocket,
                title: "Continued scaling",
                description: "To $100K+ in a single month"
              },
              {
                icon: BarChart3,
                title: "A 3× revenue increase",
                description: "Year-over-year growth achieved"
              },
              {
                icon: Activity,
                title: "Consistent high-quality lead flow",
                description: "8-12 leads per day on average"
              },
              {
                icon: Building2,
                title: "The operational capacity",
                description: "To hire and expand confidently"
              },
              {
                icon: Award,
                title: "Predictable demand",
                description: "Month after month consistency"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center max-w-2xl mx-auto"
          >
            <p className="text-base text-gray-300 mb-4">
              As Caleb put it:
            </p>
            <p className="text-2xl font-bold text-[#70E000]">
              "The numbers tell the truth."
            </p>
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
                src="https://www.youtube.com/embed/kRSpIcZIN3o"
                title="Euroluxe Case Study Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight text-[#70E000]">
              The After: Operating With Confidence
            </h2>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              Today, Euroluxe operates with:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Activity, text: "Predictable inbound demand" },
                { icon: Zap, text: "Clear marketing systems" },
                { icon: Rocket, text: "Confidence in scaling decisions" },
                { icon: Target, text: "A roadmap beyond $100K/month" }
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
                The business no longer reacts to chaos.
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                It operates from control.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY INSIGHT Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
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

            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight text-[#70E000]">
              Growth didn't come from more leads.
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              It came from:
            </p>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                better lead quality, better systems, and better visibility.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <MessageSquare className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">In Their Words</span>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 relative">
              {/* Quote marks */}
              <div className="absolute top-6 left-6 text-6xl text-[#70E000]/20 font-serif">"</div>
              
              <blockquote className="relative z-10 text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 italic">
                We started with a goal of $40–80K per month. Within a year, we were doing over $100,000/month and had 3X'd our revenue.
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-base font-semibold text-[#70E000]">Caleb</p>
                  <p className="text-sm text-gray-400">Euroluxe Fine Auto Detailing</p>
                </div>
              </div>

              {/* Quote marks */}
              <div className="absolute bottom-6 right-6 text-6xl text-[#70E000]/20 font-serif rotate-180">"</div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}