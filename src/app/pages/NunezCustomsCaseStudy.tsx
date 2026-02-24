import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Video, FileText, Eye, Building2, Rocket, TrendingDown, DollarSign, Star, MapPin, Flame } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";

// Import carousel images
import carouselImg1 from "figma:asset/3704f82ad4285f5cbe142ae32bd4cd5228c21d8c.png";
import carouselImg2 from "figma:asset/6316011061f711ebc2431d66fc5e9c6ea92e4dc0.png";
import carouselImg3 from "figma:asset/af5cd7bc0b7b6702ce66dde7542acf42695e3fa9.png";
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

// Nunez Customs Case Study Metrics Data
const nunezCustomsMetrics = [
  { icon: TrendingUp, metric: "10x", description: "Revenue growth in 6 months" },
  { icon: DollarSign, metric: "$35K", description: "Monthly revenue achieved" },
  { icon: Target, metric: "$4", description: "Cost per lead (from $250)" },
  { icon: Star, metric: "$1,400", description: "Average ticket size" },
  { icon: Users, metric: "18 Years", description: "Owner's age at transformation" },
  { icon: Activity, metric: "2-3/Days", description: "Leads (from 2-3/month)" },
  { icon: Clock, metric: "5-6 Months", description: "Timeline to 10x growth" },
  { icon: Shield, metric: "Authority", description: "Market positioning achieved" },
  { icon: Sparkles, metric: "Direction", description: "System replaced chaos" },
  { icon: Building2, metric: "Rural Market", description: "Okeechobee, Florida" },
  { icon: Rocket, metric: "High-Ticket", description: "80% quality customers" },
  { icon: Zap, metric: "The Flash", description: "Speed of transformation" },
];

export function NunezCustomsCaseStudy() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Case Study · Autostyling · Wraps, PPF & Ceramic Coatings · Okeechobee, Florida</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                From $3,000 Months to a 10× Business —
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                at Just 18 Years Old
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              How Nunez Customs Used Leadgentic to Turn Chaos Into Direction and Build a Real Autostyling Business
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

          {/* Nunez Customs Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-nunez">
              {/* First set */}
              {nunezCustomsMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {nunezCustomsMetrics.map((metric, index) => (
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
            @keyframes scroll-nunez {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-nunez {
              animation: scroll-nunez 8s linear infinite;
            }
            
            @media (max-width: 767px) {
              .animate-scroll-nunez {
                animation: scroll-nunez 5s linear infinite;
              }
            }
            
            .animate-scroll-nunez:hover {
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
                  { label: "Industry", value: "Autostyling (Wraps, PPF, Ceramic Coatings, Customization)" },
                  { label: "Market", value: "Okeechobee, Florida (Rural)" },
                  { label: "Owner", value: "Mario Nunez (Age 18)" },
                  { label: "Time With Leadgentic", value: "~5-6 months" },
                  { label: "Core Outcome", value: "Revenue growth from ~$3-5K/month to nearly $35K/month, with cost-per-lead dropping from ~$250 to ~$4 and consistent high-ticket customers" }
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
                  "Funnels & Landing Pages",
                  "AI SEO",
                  "CRM (AI + Human Follow-Up)",
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
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Before</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              Hustling Hard With{" "}
              <span className="text-[#70E000]">No Direction</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Before partnering with Leadgentic, Mario Nunez was doing everything he could — and still felt stuck.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <p className="text-base text-gray-400 leading-relaxed mb-6">
                  Fresh out of high school, running Nunez Customs in a very rural Florida town, Mario had ambition, skill, and work ethic — but no clear system.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Revenue hovered between $3,000 and $5,000 per month",
                    "Marketing felt random",
                    "Lead quality was poor",
                    "Systems were incomplete"
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

              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 text-center">
                <blockquote className="text-xl italic text-white mb-4">
                  "It was super staggered. Very poor lead quality. Systems were almost there, but there were still gaps in between it all."
                </blockquote>
                <p className="text-base text-gray-400 mb-2">
                  Like most new operators, Mario assumed this was normal.
                </p>
                <p className="text-base text-white font-semibold">
                  It wasn't.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              What He Thought the Problem Was — <span className="text-[#70E000]">And What It Actually Was</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Initially, Mario thought the problem was experience.<br />
              <span className="text-white font-semibold">That he just needed more time, more effort, or cheaper marketing.</span>
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
                  <Flame className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">What Went Wrong</h3>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm">
                He had even worked with another agency — spending money without truly understanding what was happening.
              </p>

              <blockquote className="text-base italic text-white border-l-2 border-red-500 pl-4 mb-4">
                "I thought $250 per lead was normal."
              </blockquote>

              <p className="text-gray-400 mb-4 text-sm">Looking back, he described it honestly:</p>

              <blockquote className="text-xl font-bold text-red-400">
                "I lit some money on fire."
              </blockquote>
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
                The real issue wasn't his age, his market, or his skill.<br />
                <span className="text-white">It was the absence of:</span>
              </p>

              <div className="space-y-2">
                {[
                  "Lead qualification",
                  "Trust at scale",
                  "Authority positioning",
                  "Systems that connect everything"
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
          </div>
        </div>
      </section>

      {/* Nunez Customs Image Carousel */}
      <section className="py-16 bg-black relative">
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
                alt="Nunez Customs - Professional detailing work in progress" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg2} 
                alt="Nunez Customs - Luxury BMW detailing service" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg3} 
                alt="Nunez Customs - BMW M4 professional ceramic coating" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg1} 
                alt="Nunez Customs - Professional detailing work in progress" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg2} 
                alt="Nunez Customs - Luxury BMW detailing service" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg3} 
                alt="Nunez Customs - BMW M4 professional ceramic coating" 
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

      {/* THE DECISION MOMENT Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Shield className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Decision Moment</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              Seeing Proof and{" "}
              <span className="text-[#70E000]">Taking the Leap</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Mario discovered Leadgentic through a testimonial video — not an ad pitch.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <p className="text-base text-gray-400 leading-relaxed mb-4">
                  He had previously trained with another high-level shop and became obsessed with one question:
                </p>
                <blockquote className="text-xl italic text-white mb-6">
                  "How is this even possible?"
                </blockquote>
                <p className="text-base text-gray-400 leading-relaxed">
                  When he saw that same shop trusted Leadgentic, something clicked.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12">
                <p className="text-base text-gray-400 mb-4 leading-relaxed">
                  Even though the investment felt scary — higher fees and higher ad spend than he'd ever committed to — he went all in.
                </p>
                <blockquote className="text-2xl font-bold text-[#70E000]">
                  "I had this sense like, 'This is where I need to be.'"
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE SYSTEM INSTALLED Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              <span className="text-[#70E000]">The System Installed</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* OGC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Owner Generated Content (OGC): Becoming the Authority</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    One of the biggest shifts was visibility.
                  </p>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Mario didn't hide behind ads — he became the face of the business.
                  </p>
                  <p className="text-white font-semibold mb-3">With scripting, structure, and clear CTAs, he learned how to:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Start with a problem",
                      "Educate",
                      "End with a solution"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="text-base italic text-white border-l-2 border-[#70E000] pl-4 mb-4">
                    "You can't just sit in front of a camera and jabber. You start with a problem and end with a solution."
                  </blockquote>
                  <p className="text-[#70E000] font-semibold">
                    That instantly changed perception. Customers expected to pay more — and were happy to.
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
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Ads: From Trickle to Consistency</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    The difference in lead flow was dramatic.
                  </p>
                  <div className="bg-zinc-800/50 rounded-lg p-4 mb-4">
                    <p className="text-gray-400 mb-2 text-sm">From:</p>
                    <p className="text-white mb-4">2-3 leads per month</p>
                    <p className="text-gray-400 mb-2 text-sm">To:</p>
                    <ul className="space-y-2">
                      {[
                        "2-3 leads every couple days",
                        "Sometimes multiple leads in a single morning"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                          <span className="text-white text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-400 mb-4">All in a rural town.</p>
                  <blockquote className="text-base italic text-[#70E000] border-l-2 border-[#70E000] pl-4">
                    "I thought there was no work out here."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* Funnels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Funnels & Qualification: Filtering Out Price Shoppers</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    As visibility increased, something unexpected happened.
                  </p>
                  <p className="text-white font-semibold mb-4">
                    Mario stopped competing with low-end shoppers entirely.
                  </p>
                  <blockquote className="text-base italic text-[#70E000] border-l-2 border-[#70E000] pl-4 mb-4">
                    "That leaves me with the 80% of high-quality, high-paying customers."
                  </blockquote>
                  <p className="text-gray-400">
                    Average ticket size climbed to around $1,400, with repeat customers bringing in multiple vehicles.
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
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI SEO & Authority: Owning the Market</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    As branding and content stacked, competitors noticed — and panicked.
                  </p>
                  <blockquote className="text-base italic text-white border-l-2 border-[#70E000] pl-4 mb-4">
                    "Every single person in my town has been trying to do what I'm doing."
                  </blockquote>
                  <p className="text-white font-semibold mb-3">But they didn't have:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "The scripts",
                      "The systems",
                      "The content strategy",
                      "The infrastructure"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#70E000] font-semibold">
                    Authority compounded.
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
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">CRM & Follow-Up: Direction Replaced Guessing</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Behind the scenes, CRM and follow-up systems ensured:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Every lead was captured",
                      "Every opportunity tracked",
                      "No guesswork"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-400 mb-4">Mario described it best:</p>
                  <blockquote className="text-base italic text-white border-l-2 border-[#70E000] pl-4">
                    "It gave direction. Before, I was lost. Instead of owning a business, I owned a job."
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT CHANGED Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]">What Changed</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              The business didn't just grow.<br />
              <span className="text-[#70E000] font-bold text-xl">Mario changed.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { icon: Sparkles, label: "Confidence replaced doubt" },
                { icon: Shield, label: "Control replaced chaos" },
                { icon: Target, label: "Planning replaced guessing" }
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

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12 max-w-2xl mx-auto mb-8">
              <p className="text-base text-gray-400 mb-4">Revenue jumped from</p>
              <p className="text-2xl font-bold text-white mb-2 text-[20px]">$3–5K/month</p>
              <p className="text-sm text-gray-400 mb-2">to</p>
              <p className="text-3xl font-bold text-[#70E000] mb-4">nearly $35K/month</p>
              <p className="text-xl text-white font-semibold mb-6">— a true 10× increase.</p>
              <p className="text-base text-gray-400">At 18 years old.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              Outcomes <span className="text-[#70E000]">(Clear and Earned)</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: TrendingUp, label: "Revenue Growth", value: "~10× revenue growth in under 6 months" },
              { icon: Target, label: "Cost Per Lead", value: "Cost-per-lead reduction from ~$250 → ~$4" },
              { icon: Star, label: "Customer Quality", value: "Consistent high-ticket customers" },
              { icon: Users, label: "Repeat Business", value: "Repeat clients bringing multiple vehicles" },
              { icon: Rocket, label: "Scaling Runway", value: "Clear runway to scale ad spend confidently" }
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
            <blockquote className="text-2xl font-bold text-[#70E000] leading-relaxed text-center">
              "If I spent $4 on a lead and it came back six times… do the math."
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
                src="https://www.youtube.com/embed/ZOsPfYDhWSA"
                title="Nunez Customs Case Study Video"
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
      <section className="py-12 px-6 bg-gradient-to-b from-black to-zinc-950">
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
              From Self-Employed to{" "}
              <span className="text-[#70E000]">Business Owner</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Today, Mario operates with:
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
              {[
                "Predictable inbound demand",
                "Authority in his market",
                "Confidence to scale",
                "A vision beyond survival"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-4 flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-2xl mx-auto">
              <blockquote className="text-xl italic text-white leading-relaxed">
                "It gives you a sense of direction… instead of not knowing if your guys are getting paid this week."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY INSIGHT Section */}
      <section className="py-12 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]">Key Insight</span>
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-10 max-w-3xl mx-auto">
              <p className="text-xl text-white leading-relaxed mb-4">
                Growth didn't come from working harder.
              </p>
              <p className="text-2xl font-bold text-[#70E000] leading-relaxed">
                It came from installing a system that accelerates everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IN MARIO'S WORDS Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-black to-zinc-950">
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">In Mario's Words</span>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 relative">
              {/* Quote marks */}
              <div className="absolute top-6 left-6 text-6xl text-[#70E000]/20 font-serif">"</div>
              
              <blockquote className="relative z-10 text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 italic">
                If Leadgentic were a character, it'd be The Flash.
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-base font-semibold text-[#70E000]">Mario Nunez</p>
                  <p className="text-sm text-gray-400">Owner, Nunez Customs · Age 18</p>
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