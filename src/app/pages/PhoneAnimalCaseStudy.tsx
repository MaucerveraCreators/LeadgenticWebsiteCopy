import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Video, FileText, Eye, Building2, Rocket, TrendingDown, DollarSign, Star, MapPin, Globe, Lightbulb, LineChart } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";

// Import carousel images
import carouselImg1 from "figma:asset/418ac10130f01752467c39340dc01caaafb91409.png";
import carouselImg2 from "figma:asset/761f845bb68eba1a0abddb18724d8c305cd55edf.png";
import carouselImg3 from "figma:asset/5283d7600059ef16afee66ccb2c4a46693033440.png";
import carouselImg4 from "figma:asset/1769a11102e9e0368ff6c620d23018fbfd6b8e20.png";
import carouselImg5 from "figma:asset/3d722390414be6311e68a987dab6919b3e57db05.png";
import carouselImg6 from "figma:asset/390b348a1a631a68df6c0ed9a8a7339ec016fa16.png";
import carouselImg7 from "figma:asset/1bde31db5abece3123a32a4ae475c3009fc53d05.png";
import carouselImg8 from "figma:asset/96a3889ff6c61caaf85a49d4dd2085a1b854b27a.png";
import carouselImg9 from "figma:asset/5a855bdef8119b426356d29c844269e06b5fe4ff.png";

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

// Phone Animal Case Study Metrics Data
const phoneAnimalMetrics = [
  { icon: TrendingUp, metric: "2x", description: "Monthly recurring revenue" },
  { icon: Users, metric: "2-3x", description: "Lead flow increase" },
  { icon: Clock, metric: "30-45 Days", description: "Timeline to results" },
  { icon: DollarSign, metric: "Doubled", description: "Sales in first 45 days" },
  { icon: Globe, metric: "Nationwide", description: "B2B SaaS reach" },
  { icon: Target, metric: "Quality", description: "Higher inbound conversion" },
  { icon: Lightbulb, metric: "Strategy", description: "Metrics-first approach" },
  { icon: Video, metric: "Brand", description: "Professional video content" },
  { icon: LineChart, metric: "MRR", description: "Compounding subscription impact" },
  { icon: Shield, metric: "Partnership", description: "Thought partner relationship" },
  { icon: Sparkles, metric: "Clarity", description: "Defined success metrics" },
  { icon: Rocket, metric: "Growth Lever", description: "Marketing as scalable engine" },
];

export function PhoneAnimalCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Hero Section with Gradient */}
      <section className="relative pt-28 pb-12 px-6 overflow-hidden">
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Case Study · B2B SaaS · Real Estate Lead Generation · Nationwide</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Doubling Lead Flow and Monthly Recurring Revenue
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                in 45 Days
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              How Phone Animal Turned Marketing From a Bottleneck Into a Scalable Growth Engine With Leadgentic
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

          {/* Phone Animal Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-phoneanimal">
              {/* First set */}
              {phoneAnimalMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {phoneAnimalMetrics.map((metric, index) => (
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
            @keyframes scroll-phoneanimal {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-phoneanimal {
              animation: scroll-phoneanimal 8s linear infinite;
            }
            
            @media (max-width: 767px) {
              .animate-scroll-phoneanimal {
                animation: scroll-phoneanimal 5s linear infinite;
              }
            }
            
            .animate-scroll-phoneanimal:hover {
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
            className="text-center mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              <span className="text-[#70E000]">Quick Snapshot</span>
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
                  { label: "Industry", value: "Real Estate Lead Generation (B2B SaaS / Subscription)" },
                  { label: "Market", value: "Nationwide (United States)" },
                  { label: "Founder & CEO", value: "JP Wells" },
                  { label: "Time With Leadgentic", value: "~30-45 days to major results" },
                  { label: "Core Outcome", value: "2-3× increase in lead flow and doubling of monthly recurring revenue within the first 30-45 days" }
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
                  "Strategy & Metrics Framework",
                  "OGC & Video",
                  "Paid Distribution",
                  "SEO & Blogging",
                  "Website Optimization",
                  "CRM Conversion Analysis",
                  "Google Ads",
                  "Meta Ads",
                  "Video Editing"
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
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Before</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              Growth Capped by{" "}
              <span className="text-[#70E000]">the Founder</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Before working with Leadgentic, Phone Animal wasn't failing — but it was constrained.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <p className="text-base text-gray-400 leading-relaxed mb-6">
                  JP Wells, the CEO, was personally limiting growth.<br />
                  Not due to lack of effort — but due to lack of bandwidth and specialization.
                </p>
                <blockquote className="text-xl italic text-white mb-6">
                  "We didn't really have a marketing strategy. I was limiting our growth."
                </blockquote>
              </div>

              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8">
                <p className="text-base text-white font-semibold mb-4">Marketing was fragmented:</p>
                <ul className="space-y-3 mb-6">
                  {[
                    "JP was doing some of it himself",
                    "A few agencies had been tried before",
                    "Promises were made, but follow-through was inconsistent",
                    "Metrics weren't clearly defined or explained"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base text-gray-400">
                  Despite being a national company with a strong product, growth felt slower than it should have been.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              What They Thought the Problem Was — <span className="text-[#70E000]">And What It Actually Was</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Initially, the assumption was: "Marketing just takes time."<br />
              <span className="text-white font-semibold">Six months. Seven months. Maybe more.</span>
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
                  <Clock className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">The Typical Excuse</h3>
                </div>
              </div>

              <blockquote className="text-xl italic text-white border-l-2 border-red-500 pl-4 mb-4">
                "Most marketing people will say, 'This takes six or seven months.' It's just something I hate."
              </blockquote>

              <p className="text-gray-400 text-sm">
                JP hated that explanation because it meant no accountability, no clarity, and no way to know if things were actually working.
              </p>
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
                  <h3 className="text-lg font-bold text-white mb-1">The Real Issue</h3>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm font-medium">
                The real problem wasn't time.<br />
                <span className="text-white">It was the lack of:</span>
              </p>

              <div className="space-y-2 mb-4">
                {[
                  "Clear success metrics",
                  "A defined measurement window",
                  "Strategic ownership of the entire marketing ecosystem"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-white font-semibold mb-3 text-sm">Without that, there was no way to know:</p>

              <div className="space-y-2">
                {[
                  "What was working",
                  "What wasn't",
                  "Or when to pivot"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gray-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phone Animal Image Carousel */}
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
                alt="Phone Animal - Modern luxury home" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg2} 
                alt="Phone Animal - Luxury estate with pool" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg3} 
                alt="Phone Animal - Premium real estate property" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg1} 
                alt="Phone Animal - Modern luxury home" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg2} 
                alt="Phone Animal - Luxury estate with pool" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg3} 
                alt="Phone Animal - Premium real estate property" 
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
              animation: scroll-images 20s linear infinite;
            }
            
            .animate-scroll-images:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* THE TURNING POINT Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Lightbulb className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Turning Point</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              Strategy{" "}
              <span className="text-[#70E000]">Before Execution</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              What stood out immediately about Leadgentic wasn't tactics — it was thinking.
            </p>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 max-w-2xl mx-auto mb-8">
              <p className="text-base text-gray-400 mb-4 leading-relaxed">
                JP described the relationship as more than a vendor:
              </p>
              <blockquote className="text-xl italic text-white mb-6">
                "Alec and the team were a great partner — helping analyze and being a thought partner."
              </blockquote>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-base font-semibold text-white mb-4">From day one:</h3>
              <ul className="space-y-3">
                {[
                  "Success metrics were clearly defined",
                  "Timeframes were set",
                  "Contingency plans were discussed upfront"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-base text-white font-semibold mb-4">JP knew exactly:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "How they'd measure success",
                  "When they'd know it was working",
                  "What would change if it wasn't"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-[#70E000]">
                That clarity changed everything.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE SYSTEM INSTALLED Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              <span className="text-[#70E000]">The System Installed</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Strategy & Measurement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Strategy & Measurement: Knowing What Winning Looks Like</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Before scaling traffic, Leadgentic aligned the entire system around sales, not vanity metrics.
                  </p>
                  <blockquote className="text-base italic text-[#70E000] border-l-2 border-[#70E000] pl-4 mb-4">
                    "Number one is sales. That's the ultimate result that I care about."
                  </blockquote>
                  <p className="text-white font-semibold">
                    Everything downstream supported that goal.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content & Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Content, Video & OGC: Professionalism at Scale</h3>
                  <p className="text-white font-semibold mb-3">Leadgentic took over:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Social media",
                      "Blogging",
                      "Brand messaging",
                      "Video production"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Including a short, humorous 1–2 minute brand video explaining:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Why Phone Animal exists",
                      "Why real estate agents need a lead-generation partner"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-gray-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        </div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="text-base italic text-white border-l-2 border-[#70E000] pl-4 mb-4">
                    "It was hilarious and got a lot of good laughs."
                  </blockquote>
                  <p className="text-[#70E000] font-semibold">
                    For the first time, Phone Animal felt like a mature, professional brand.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Paid Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Paid Distribution & Inbound Motion: Quality Over Volume</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Within 30–45 days, lead flow jumped 2–3×.
                  </p>
                  <p className="text-white font-semibold mb-4">
                    But more importantly, the quality improved.
                  </p>
                  <blockquote className="text-base italic text-[#70E000] border-l-2 border-[#70E000] pl-4 mb-4">
                    "More quality lead flow at the beginning… inbound motion leads to higher conversion and more sales."
                  </blockquote>
                  <p className="text-gray-400">
                    This immediately translated into revenue.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Website & CRM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Website & CRM Optimization: Removing Silent Leaks</h3>
                  <p className="text-white font-semibold mb-3">Leadgentic also identified:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Conversion issues in the CRM",
                      "Gaps in the website experience",
                      "Friction points in the sales process"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#70E000] font-semibold">
                    Small optimizations created outsized impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE RESULTS Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]">The Results: What Actually Changed</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              The most important outcome wasn't traffic or content.<br />
              <span className="text-[#70E000] font-bold text-xl">It was sales.</span>
            </p>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12 max-w-2xl mx-auto mb-8">
              <blockquote className="text-2xl font-bold text-white leading-relaxed mb-6">
                "He doubled our sales. And so he doubled our monthly recurring revenue."
              </blockquote>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Users, label: "Lead flow doubled" },
                { icon: DollarSign, label: "Sales doubled" },
                { icon: LineChart, label: "MRR doubled" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#70E000]" />
                  </div>
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-2xl mx-auto mt-8">
              <p className="text-base text-gray-400 leading-relaxed">
                And because Phone Animal is subscription-based, that impact compounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-white">Outcomes</span> <span className="text-[#70E000]">(Clear and Earned)</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: TrendingUp, label: "Lead Flow", value: "2-3× increase in lead flow within 30-45 days" },
              { icon: DollarSign, label: "Revenue", value: "Doubling of monthly recurring revenue" },
              { icon: Star, label: "Lead Quality", value: "Higher-quality inbound leads" },
              { icon: Target, label: "Conversion", value: "Improved conversion rates" },
              { icon: Sparkles, label: "Brand", value: "A noticeably more professional brand presence" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#70E000]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#70E000] mb-1 uppercase tracking-wider">{item.label}</h3>
                    <p className="text-white text-sm leading-relaxed">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-2xl mx-auto">
            <blockquote className="text-xl italic text-white leading-relaxed text-center">
              "Frankly, it might have even done more than double our sales."
            </blockquote>
          </div>
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
                src="https://www.youtube.com/embed/BkVFU77XaAY"
                title="Phone Animal Case Study Video"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The After</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              Marketing as a{" "}
              <span className="text-[#70E000]">Growth Lever</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Today, marketing is no longer a question mark.<br />
              <span className="text-white font-semibold">It's a lever.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12">
                <blockquote className="text-xl text-white leading-relaxed mb-6">
                  "The results doubled our leads, doubled our sales… it had a big impact on our bottom line."
                </blockquote>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <p className="text-base text-gray-400 mb-4 leading-relaxed">
                  Just as important, JP gained something most founders don't get from agencies:
                </p>
                <p className="text-2xl font-bold text-[#70E000]">
                  "A thought partner."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY INSIGHT Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]">Key Insight</span>
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-10 max-w-3xl mx-auto">
              <p className="text-xl text-white leading-relaxed mb-4">
                Growth didn't come from doing more marketing.
              </p>
              <p className="text-2xl font-bold text-[#70E000] leading-relaxed">
                It came from clarity, measurement, and execution working together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IN JP'S WORDS Section */}
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">In JP's Words</span>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 relative">
              {/* Quote marks */}
              <div className="absolute top-6 left-6 text-6xl text-[#70E000]/20 font-serif">"</div>
              
              <blockquote className="relative z-10 text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 italic">
                The results doubled our leads, doubled our sales, and leveled up the entire Phone Animal brand.
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-base font-semibold text-[#70E000]">JP Wells</p>
                  <p className="text-sm text-gray-400">Founder & CEO, Phone Animal</p>
                </div>
              </div>

              {/* Quote marks */}
              <div className="absolute bottom-6 right-6 text-6xl text-[#70E000]/20 font-serif rotate-180">"</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}