import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, Phone, MessageSquare, FileText, Eye, Building2, Rocket, TrendingDown, Star, MapPin, Wrench, Calendar } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import windshieldSealantImage from "figma:asset/75295798f3865c7cff9afe241cd84067a32824d7.png";
import crackedGlassImage from "figma:asset/20dedb972630ec3adf13ce58914d3deb3ff49ee8.png";
import severeWindshieldDamageImage from "figma:asset/fe883127ce1cc451490ada9810fa30b7b6b0928e.png";

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

// Cars Renewed Case Study Metrics Data
const carsRenewedMetrics = [
  { icon: Star, metric: "400+", description: "Five-star reviews achieved" },
  { icon: TrendingUp, metric: "4×", description: "Van fleet expansion" },
  { icon: Building2, metric: "4,000+ sq ft", description: "Facility expansion completed" },
  { icon: Phone, metric: "100%", description: "Call tracking & capture" },
  { icon: Shield, metric: "Zero", description: "Missed opportunities" },
  { icon: Target, metric: "High-Quality", description: "Consistent inbound calls" },
  { icon: Award, metric: "#1 Rated", description: "Autoglass in St. Louis region" },
  { icon: Users, metric: "Full Team", description: "Installers + shop manager hired" },
  { icon: Zap, metric: "Systemized", description: "Complete business infrastructure" },
  { icon: Sparkles, metric: "AI-Powered", description: "Ads, SEO & automation" },
  { icon: Clock, metric: "Freedom", description: "Owner can travel & vacation" },
  { icon: Rocket, metric: "Scalable", description: "Multi-location ready" },
];

export function CarsRenewedCaseStudy() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Case Study · Automotive · Autoglass</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                From Missed Calls and Chaos to a
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Scalable Autoglass Operation
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              How Cars Renewed Autoglass Built a Real Growth System With Leadgentic
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

          {/* Cars Renewed Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-carsrenewed">
              {/* First set */}
              {carsRenewedMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {carsRenewedMetrics.map((metric, index) => (
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
            @keyframes scroll-carsrenewed {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-carsrenewed {
              animation: scroll-carsrenewed 5s linear infinite;
            }
            
            @media (min-width: 768px) {
              .animate-scroll-carsrenewed {
                animation: scroll-carsrenewed 8s linear infinite;
              }
            }
            
            .animate-scroll-carsrenewed:hover {
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
                  { label: "Industry", value: "Autoglass Replacement & Repair" },
                  { label: "Market", value: "St. Charles / Greater St. Louis, Missouri" },
                  { label: "Owner", value: "Apollo" },
                  { label: "Time With Leadgentic", value: "~12+ months" }
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
                  "AI Ads (Google + Meta)",
                  "Funnels",
                  "AI SEO",
                  "CRM",
                  "Call Tracking",
                  "Human Follow-Up",
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

              <div className="mt-6 pt-6 border-t border-[#70E000]/20">
                <h4 className="text-xs text-[#70E000] font-semibold uppercase tracking-wider mb-2">Core Outcome</h4>
                <p className="text-gray-300 text-sm">
                  Scaled from a small operation into a multi-van, multi-installer business with 400+ five-star reviews, consistent high-quality inbound calls, and the freedom to grow without burnout.
                </p>
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
              <span className="text-[#70E000]">Growth Without Control</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Cars Renewed Autoglass wasn't struggling for work.<br />
              <span className="text-white font-semibold">In fact, the problem was the opposite.</span>
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-left max-w-2xl mx-auto mb-8">
              <h3 className="text-base font-semibold text-white mb-4">The phones rang constantly. Jobs were coming in. Referrals were strong.</h3>
              <p className="text-gray-400 text-sm mb-4">But behind the scenes, everything was chaotic.</p>
              
              <p className="text-sm text-gray-300 mb-4">Apollo had no reliable way to:</p>
              <ul className="space-y-3">
                {[
                  "Track calls and leads",
                  "Store customer history",
                  "See where business was coming from",
                  "Follow up consistently"
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

            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-8 max-w-2xl mx-auto mb-8">
              <p className="text-lg text-white italic mb-4">
                "The phone was ringing nonstop, but we didn't have a system. Calls were getting missed, opportunities were slipping through the cracks."
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 text-center max-w-2xl mx-auto"
            >
              <p className="text-2xl font-bold text-[#70E000]">
                Growth existed — but it wasn't organized, and that made it fragile.
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
              What He Thought the Problem Was — <span className="text-[#70E000]">And What It Actually Was</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              At first, Apollo assumed the answer was just "better marketing."
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
                  <h3 className="text-lg font-bold text-white mb-1">What He Tried</h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Doing it himself (and quickly fired himself)",
                  "Other marketing companies",
                  "Cheaper solutions that promised volume"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-red-400 font-semibold text-sm mt-4">
                None of it worked.
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
                  <h3 className="text-lg font-bold text-white mb-1">The Reality</h3>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 mb-4">
                <p className="text-gray-300 text-sm italic mb-2">
                  "The difference between Leadgentic and everyone else was night and day. Other companies didn't communicate. I couldn't talk to decision-makers."
                </p>
              </div>

              <p className="text-[#70E000] font-bold text-base mb-2">
                The real problem wasn't ads.
              </p>

              <p className="text-white text-base italic">
                It was the absence of infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
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
                src={windshieldSealantImage} 
                alt="Windshield Sealant Application" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={crackedGlassImage} 
                alt="Cracked Windshield Damage Assessment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={severeWindshieldDamageImage} 
                alt="Severe Windshield Damage Interior View" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={windshieldSealantImage} 
                alt="Windshield Sealant Application" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={crackedGlassImage} 
                alt="Cracked Windshield Damage Assessment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={severeWindshieldDamageImage} 
                alt="Severe Windshield Damage Interior View" 
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
            className="text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              The Turning Point: <span className="text-[#70E000]">Order Replacing Chaos</span>
            </h2>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              When Leadgentic stepped in, the focus wasn't just lead generation.<br />
              <span className="text-white font-semibold">It was systemization.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Phone, text: "Every call was tracked" },
                { icon: FileText, text: "Every lead was logged" },
                { icon: Clock, text: "Every job had history" },
                { icon: BarChart3, text: "Every report made sense" }
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

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center max-w-2xl mx-auto">
              <p className="text-xl font-bold text-white mb-2">
                "You guys put order to the chaos."
              </p>
              <p className="text-lg text-gray-300">
                "For the first time, marketing felt like a tool instead of something I had to babysit."
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
              Building The <span className="text-[#70E000]">Complete Infrastructure</span>
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
                  <h3 className="text-lg font-bold text-white mb-1">Owner Generated Content (OGC): Trust Before the Call</h3>
                  <p className="text-gray-400 text-sm mb-4">Instead of faceless ads, Apollo became visible.</p>
                  
                  <p className="text-gray-300 text-sm mb-3">
                    Prospects saw: The owner, The professionalism, The standards of the business
                  </p>
                  
                  <p className="text-[#70E000] font-semibold text-sm italic">
                    Trust formed before the phone ever rang.
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
                  <h3 className="text-lg font-bold text-white mb-1">AI Ads: Fewer Calls, Far Better Leads</h3>
                  <p className="text-gray-400 text-sm mb-4">Paid traffic didn't just increase volume — it improved quality.</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
                      <p className="text-xs text-red-400 font-semibold mb-2 uppercase">Before:</p>
                      <ul className="space-y-1">
                        {[
                          "Calls from the wrong city",
                          "Calls for services they didn't offer",
                          "Time wasted explaining basics"
                        ].map((item, i) => (
                          <li key={i} className="text-xs text-gray-400">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#70E000]/5 border border-[#70E000]/20 rounded-lg p-3">
                      <p className="text-xs text-[#70E000] font-semibold mb-2 uppercase">After:</p>
                      <p className="text-sm text-gray-300">Local, relevant, ready-to-book customers</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-lg p-3">
                    <p className="text-[#70E000] font-semibold text-sm italic">
                      "Now we get consistent, high-quality calls — not junk."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Funnels & Lead Filtering */}
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
                  <h3 className="text-lg font-bold text-white mb-1">Funnels & Lead Filtering: Protecting Time</h3>
                  <p className="text-gray-400 text-sm mb-4">Structured funnels ensured:</p>
                  
                  <div className="space-y-2 mb-4">
                    {[
                      "Expectations were set up front",
                      "Tire-kickers were filtered out",
                      "Sales conversations were easier"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm italic">
                    This allowed the team to focus on real jobs, not distractions.
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
                  <h3 className="text-lg font-bold text-white mb-1">AI SEO & Local Authority: Becoming the Obvious Choice</h3>
                  <p className="text-gray-400 text-sm mb-4">As visibility stacked:</p>
                  
                  <div className="space-y-2 mb-4">
                    {[
                      "Google presence improved",
                      "Reviews compounded",
                      "Brand authority grew"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-2">
                      Cars Renewed set an initial goal of <span className="text-white font-semibold">150 reviews.</span>
                    </p>
                    <p className="text-[#70E000] font-bold text-base">
                      They passed 400 five-star reviews, becoming the highest-rated autoglass company in the St. Louis region, and continue climbing.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CRM & Call Tracking */}
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
                  <h3 className="text-lg font-bold text-white mb-1">CRM, Call Tracking & Follow-Up: Scaling Without Burnout</h3>
                  <p className="text-gray-400 text-sm mb-4">This is where everything clicked.</p>
                  
                  <p className="text-gray-300 text-sm mb-4">With proper systems in place:</p>
                  
                  <div className="space-y-2 mb-4">
                    {[
                      "No calls were lost",
                      "No leads were forgotten",
                      "Performance could be verified, not guessed"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-lg p-3">
                    <p className="text-[#70E000] font-semibold text-sm italic">
                      "We can verify every call. Every lead. Every report."
                    </p>
                  </div>
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
              <span className="text-[#70E000]">What Changed</span>
            </h2>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              Growth stopped feeling dangerous.
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-3xl mx-auto mb-8">
              <h3 className="text-base font-semibold text-white mb-6 text-center">Apollo scaled from:</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-lg p-4 mb-3">
                    <p className="text-2xl font-bold text-[#70E000]">1 → 4</p>
                  </div>
                  <p className="text-sm text-gray-400">Vans</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-lg p-4 mb-3">
                    <p className="text-2xl font-bold text-[#70E000]">→ 4,000+</p>
                  </div>
                  <p className="text-sm text-gray-400">Square feet facility</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-lg p-4 mb-3">
                    <p className="text-2xl font-bold text-[#70E000]">Solo → Team</p>
                  </div>
                  <p className="text-sm text-gray-400">Full install team + manager</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center max-w-2xl mx-auto">
              <p className="text-base text-gray-300 mb-4">
                The business no longer relied on Apollo being everywhere at once.
              </p>
              <p className="text-xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                "That was the moment I knew this was real — the business didn't rely on me anymore."
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              <span className="text-[#70E000]">Outcomes (Clear and Earned)</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Cars Renewed Autoglass experienced:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Phone,
                title: "Consistent, high-quality inbound calls",
                description: "No more junk leads or wasted time"
              },
              {
                icon: Star,
                title: "400+ five-star reviews",
                description: "And counting, becoming #1 in region"
              },
              {
                icon: Rocket,
                title: "Multi-van, multi-installer growth",
                description: "From 1 van to 4 vans with full team"
              },
              {
                icon: Building2,
                title: "Expansion into larger facility",
                description: "Over 4,000 square feet of space"
              },
              {
                icon: Clock,
                title: "Owner freedom to step away",
                description: "Without fear of business collapse"
              },
              {
                icon: Shield,
                title: "Complete call tracking system",
                description: "Every lead verified and captured"
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
            <p className="text-xl font-bold text-white mb-2">
              "I can travel. I can take a vacation."
            </p>
            <p className="text-lg text-gray-300">
              "I don't feel like everything will collapse tomorrow."
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
                src="https://www.youtube.com/embed/72RJmsP10hw"
                title="Cars Renewed Case Study Video"
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              The After: <span className="text-[#70E000]">A Business That Compounds</span>
            </h2>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              Today, marketing isn't a question mark.<br />
              <span className="text-white font-semibold">It's infrastructure.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-left">
                <h3 className="text-base font-semibold text-white mb-4">Apollo no longer worries about:</h3>
                <ul className="space-y-2">
                  {[
                    "Where the next job comes from",
                    "Whether marketing is working",
                    "If growth will break the business"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 text-left">
                <h3 className="text-base font-semibold text-white mb-4">Instead, he's planning:</h3>
                <ul className="space-y-2">
                  {[
                    "Additional locations",
                    "Continued expansion",
                    "Long-term stability"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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

            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight text-white">
              Growth didn't come from more leads.
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                It came from systems that allow growth to scale safely.
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">In Apollo's Words</span>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 relative">
              <blockquote className="relative z-10 text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 italic">
                "The amount of money we've put in compared to what we've gotten back is insane. Leadgentic is worth it. Period."
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-base font-semibold text-[#70E000]">Apollo</p>
                  <p className="text-sm text-gray-400">Cars Renewed Autoglass</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}