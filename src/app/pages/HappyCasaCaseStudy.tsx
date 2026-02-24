import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Video, FileText, Eye, Building2, Rocket, TrendingDown, DollarSign, Star, Home as HomeIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";

// Import carousel images
import carouselImg1 from "figma:asset/356536329955ba44021bb6b8f8cf572dc6ff6f1e.png";
import carouselImg2 from "figma:asset/20663723c7bc2a96583b5f143ba044de2f095cc0.png";
import carouselImg3 from "figma:asset/ebdc14cf7ba8356254ce27a5ad45c3444e6c9a82.png";

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

// Happy Casa Case Study Metrics Data
const happyCasaMetrics = [
  { icon: DollarSign, metric: "$150K+", description: "Monthly revenue achieved" },
  { icon: TrendingUp, metric: "5x", description: "Revenue growth in 5-6 months" },
  { icon: DollarSign, metric: "+$100K", description: "Additional monthly revenue" },
  { icon: Phone, metric: "20-25", description: "Qualified leads per week" },
  { icon: BarChart3, metric: "Top 3", description: "Local SEO rankings" },
  { icon: Building2, metric: "Expansion", description: "Growing into Virginia" },
  { icon: Users, metric: "New Hires", description: "Office staff added" },
  { icon: Clock, metric: "5-6 Months", description: "Timeline to transformation" },
  { icon: Shield, metric: "Predictable", description: "Demand generation" },
  { icon: Target, metric: "Qualified", description: "High-quality leads only" },
  { icon: Sparkles, metric: "System", description: "Infrastructure not tactics" },
  { icon: Rocket, metric: "Scaling", description: "Growth continues" },
];

export function HappyCasaCaseStudy() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Case Study · Home Services · Bathroom Remodeling · Maryland</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                From Invisible Online to a
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                $150K+/Month Home Remodeling Business
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              How Happy Casa Turned Chaos Into a Predictable Growth System With Leadgentic
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

          {/* Happy Casa Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-happycasa">
              {/* First set */}
              {happyCasaMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {happyCasaMetrics.map((metric, index) => (
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
            @keyframes scroll-happycasa {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-happycasa {
              animation: scroll-happycasa 8s linear infinite;
            }
            
            @media (max-width: 767px) {
              .animate-scroll-happycasa {
                animation: scroll-happycasa 5s linear infinite;
              }
            }
            
            .animate-scroll-happycasa:hover {
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
                  { label: "Industry", value: "Home Services (Bathroom Remodeling)" },
                  { label: "Market", value: "Maryland" },
                  { label: "Owner", value: "Andy Garcia" },
                  { label: "Time With Leadgentic", value: "~5-6 months" },
                  { label: "Core Outcome", value: "Growth from ~$30-35K/month to $150-170K/month with consistent, qualified leads" }
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
                  "AI Ads (Meta + Google)",
                  "AI SEO",
                  "Funnels",
                  "CRM (AI + Human Follow-Up)",
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
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Before</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              When the Business Was{" "}
              <span className="text-[#70E000]">Practically Invisible</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Before working with Leadgentic, Happy Casa wasn't failing — but it was stuck.<br />
              <span className="text-white font-semibold">On the digital side, the business was effectively nonexistent.</span>
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-left max-w-2xl mx-auto mb-8">
              <h3 className="text-base font-semibold text-white mb-4">At the time:</h3>
              <ul className="space-y-3">
                {[
                  "No meaningful SEO presence",
                  "Little to no lead flow",
                  "Ads attempted in-house with poor results",
                  "No consistency or predictability"
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

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 text-center max-w-2xl mx-auto">
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                As Andy Garcia, the owner of Happy Casa, put it bluntly:
              </p>
              <blockquote className="text-2xl font-bold text-[#70E000] mb-4">
                "Our SEO, really everything on our digital side, we were basically obsolete — like nowhere to be found."
              </blockquote>
              <p className="text-base text-gray-400">
                Revenue hovered around $30–35K per month, and growth felt capped by trial and error.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              What They Thought the Problem Was — <span className="text-[#70E000]">And What It Actually Was</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Initially, the assumption was simple: "We just need to run better ads."<br />
              <span className="text-white font-semibold">So Andy tried to do everything himself.</span>
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
                  <h3 className="text-lg font-bold text-white mb-1">What Andy Tried</h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Google Ads",
                  "Meta Ads",
                  "Creative testing",
                  "Budget management"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gray-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-zinc-700">
                <h4 className="text-sm font-semibold text-white mb-3">Instead of growth, it led to:</h4>
                <div className="space-y-2">
                  {[
                    "Wasted spend",
                    "Low-quality leads",
                    "Frustration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      </div>
                      <p className="text-gray-300 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
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
                The real issue wasn't effort.
              </p>

              <p className="text-white text-base italic mb-6">
                <span className="text-[#70E000] font-bold">It was that there was no system connecting visibility, trust, qualification, and follow-up.</span>
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                Without infrastructure, even good ads can't deliver sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Happy Casa Image Carousel */}
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
                alt="Happy Casa Bathroom Remodeling" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg2} 
                alt="Happy Casa Renovation Work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg3} 
                alt="Happy Casa Project" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg1} 
                alt="Happy Casa Bathroom Remodeling" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg2} 
                alt="Happy Casa Renovation Work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg3} 
                alt="Happy Casa Project" 
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

      {/* THE TURNING POINT Section */}
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
              <Zap className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Turning Point</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              Realizing This Wasn't{" "}
              <span className="text-[#70E000]">Just Another Agency</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Like most home service owners, Andy was skeptical.<br />
              <span className="text-white font-semibold">Spam emails. Cold texts. Empty promises.</span>
            </p>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              But once the system went live, something changed — fast.
            </p>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12 max-w-2xl mx-auto mb-8">
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Within the first month, a single lead came in that Andy knew would:
              </p>
              <blockquote className="text-3xl font-bold text-[#70E000] mb-6 text-[24px]">
                "Pay for Leadgentic for the rest of the year."
              </blockquote>
              <p className="text-base text-white font-semibold">
                That was the moment it clicked.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-xl text-white leading-relaxed mb-2">
                This wasn't another retainer.
              </p>
              <p className="text-2xl font-bold text-[#70E000] leading-relaxed">
                This was infrastructure.
              </p>
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
                  <h3 className="text-xl font-bold text-white mb-2">Owner Generated Content (OGC): Trust Before the Click</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    One of the biggest shifts was visibility.
                  </p>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Leadgentic pushed Andy to become the face of the business:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Explaining services",
                      "Setting expectations",
                      "Putting a real human behind the brand"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-400 mb-4">Andy was hesitant at first.</p>
                  <p className="text-white font-semibold mb-2">But the results were undeniable:</p>
                  <blockquote className="text-base italic text-[#70E000] border-l-2 border-[#70E000] pl-4 mb-4">
                    "People love to see my face on these ads. Especially for home service businesses."
                  </blockquote>
                  <p className="text-[#70E000] font-semibold">
                    Lead quality improved almost immediately.
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
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Ads: Qualified Demand at Scale</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Paid campaigns were rebuilt using:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Owner-led creative",
                      "AI optimization",
                      "Behavior-based feedback loops"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white font-semibold mb-3">Instead of random inquiries, Andy began seeing:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "20-25 highly qualified leads per week",
                      "Leads that consistently converted into real jobs",
                      "Many of those leads came in overnight"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* AI SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI SEO: From Nowhere to Top 3 Rankings</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    SEO was layered in alongside paid traffic.
                  </p>
                  <p className="text-white font-semibold mb-3">Within months:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Happy Casa ranked top 3 locally",
                      "Organic leads began flowing consistently",
                      "Visibility compounded instead of resetting each month"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#70E000] font-semibold">
                    This reduced dependency on ads and stabilized growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CRM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">CRM + Human Follow-Up: When the Business Outgrew the Owner</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    As lead volume increased, something unexpected happened:
                  </p>
                  <p className="text-white font-semibold mb-4">Andy couldn't keep up.</p>
                  <blockquote className="text-base italic text-[#70E000] border-l-2 border-[#70E000] pl-4 mb-4">
                    "The leads got so good that I couldn't keep up with them."
                  </blockquote>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    The solution wasn't more hustle — it was structure:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "CRM capture",
                      "Automated follow-up",
                      "Real human qualification"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white font-semibold mb-2">This allowed Andy to:</p>
                  <ul className="space-y-2">
                    {[
                      "Hire office staff",
                      "Move into a larger space",
                      "Step out of daily chaos"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT CHANGED Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]">What Changed</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              The business didn't just grow.<br />
              <span className="text-[#70E000] font-bold text-xl">It transformed.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { icon: TrendingUp, label: "Revenue doubled… then doubled again" },
              { icon: Activity, label: "Lead flow became predictable" },
              { icon: MessageSquare, label: "Sales conversations became easier" },
              { icon: Building2, label: "Expansion became realistic" }
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
                  <p className="text-white text-sm font-medium leading-relaxed">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-2xl mx-auto">
            <p className="text-base text-gray-400 mb-4">From the first testimonial call to the next:</p>
            <blockquote className="text-[24px] md:text-2xl font-bold text-[#70E000] leading-relaxed">
              "We almost doubled again."
            </blockquote>
          </div>

          {/* YouTube Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl border-2 border-[#70E000]/20 shadow-2xl"
                src="https://www.youtube.com/embed/O-vmocqlrOM"
                title="Happy Casa Case Study Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES Section */}
      <section className="py-12 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]">Outcomes (Clear and Earned)</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: DollarSign, label: "Revenue Growth", value: "~$30-35K/month → $50-60K/month → $150-170K/month" },
              { icon: TrendingUp, label: "Monthly Increase", value: "Roughly $100K/month in additional revenue" },
              { icon: Building2, label: "Expansion", value: "Growing into new service areas, including Virginia" },
              { icon: Users, label: "Team Growth", value: "Demand strong enough to require hiring and scaling operations" }
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
            <p className="text-base text-gray-400 mb-4">Andy summed it up simply:</p>
            <blockquote className="text-xl italic text-white leading-relaxed">
              "It works. And once it starts working, it's hard to keep up."
            </blockquote>
          </div>
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
              Operating From Control,{" "}
              <span className="text-[#70E000]">Not Chaos</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Today, Happy Casa operates with:
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
              {[
                "Predictable demand",
                "A real marketing system",
                "Confidence in expansion",
                "Visibility into what's working"
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
              <p className="text-xl text-white leading-relaxed mb-2">
                What once felt fragile
              </p>
              <p className="text-2xl font-bold text-[#70E000] leading-relaxed">
                now feels inevitable.
              </p>
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
                Growth didn't come from learning ads.
              </p>
              <p className="text-2xl font-bold text-[#70E000] leading-relaxed">
                It came from installing a system that does the heavy lifting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IN ANDY'S WORDS Section */}
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
              <MessageSquare className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">In Andy's Words</span>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12 max-w-3xl mx-auto">
              <blockquote className="text-[24px] md:text-2xl font-bold text-white leading-relaxed mb-6">
                "Going from $30,000 a month to $150,000 a month is a crazy jump — and we're just getting started."
              </blockquote>
              <div className="mt-8 pt-8 border-t border-[#70E000]/20">
                <p className="text-base font-semibold text-[#70E000]">Andy Garcia</p>
                <p className="text-sm text-gray-400">Owner, Happy Casa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}