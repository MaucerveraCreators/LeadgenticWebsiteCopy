import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Filter, Eye, MessageSquare, Sparkles, Video, ArrowUpRight, MousePointer, PlayCircle, FileText, ExternalLink, X } from "lucide-react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { Link } from "react-router";

// Import project images from Home
import technologyImage from "figma:asset/fceb1d87fb84de9b9fca68e3a59c9617cff46ed0.png";
import fansmetricImage from "figma:asset/c3ce9dada37d2fc3582de735ff392b76cb284bda.png";
import biofuseImage from "figma:asset/c1d647e3cb5fd851a3bbf585e8be19dfc8a95e88.png";
import liveOutdoorImage from "figma:asset/eb92fb9ff25445ce1b792c049bd6f3c367ab24d6.png";
import houseOfLeonImage from "figma:asset/24733d33acce30def5bf4755cd17c2f6ebf86d7f.png";
import joesOnJollyImage from "figma:asset/8e65e4dd8a0b2c992c7870013eff5adb4b44050e.png";
import atmosphereImage from "figma:asset/debdbfc96fb84b110ca67da11efad301bb142f9b.png";
import euroluxeWebImage from "figma:asset/a0b2237f68c7ea9fdd344f1bd7c6db4743617b3a.png";
import skyglossImage from "figma:asset/a8dd965fc22ca8056483abdae41aa525fd83ad8e.png";

// Benefit Card for Carousel
function BenefitCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 h-full hover:border-[#70E000]/50 transition-all duration-300 group">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-black" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

// Metric Card - Premium Green Monochrome
function MetricCard({ icon: Icon, metric, description }: { icon: LucideIcon; metric: string; description: string }) {
  return (
    <div className="group relative w-[320px] flex-shrink-0">
      <div className="relative h-full bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3">
          {/* Icon Container */}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#70E000]/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#70E000]" strokeWidth={1.8} />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="text-xl font-semibold text-gray-900 mb-1.5 leading-tight">
              {metric}
            </div>
            <div className="text-sm text-gray-600 leading-relaxed">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Conversion Metrics Data - 12 Cards
const conversionMetrics = [
  {
    icon: TrendingUp,
    metric: "42% Avg Increase",
    description: "in qualified appointments within 90 days"
  },
  {
    icon: Filter,
    metric: "Lead Quality Up",
    description: "filtering intent before sales calls"
  },
  {
    icon: Users,
    metric: "Show Rate Boost",
    description: "prospects arrive informed and ready"
  },
  {
    icon: Target,
    metric: "Lower Volume",
    description: "higher intent, better conversations"
  },
  {
    icon: Eye,
    metric: "Pre-Framed Value",
    description: "expectations set before booking"
  },
  {
    icon: BarChart3,
    metric: "Sales Confidence",
    description: "teams trust the pipeline quality"
  },
  {
    icon: Sparkles,
    metric: "AI-Optimized",
    description: "continuous funnel evolution"
  },
  {
    icon: MousePointer,
    metric: "Click to Close",
    description: "conversion layer engineered"
  },
  {
    icon: Clock,
    metric: "Faster Decisions",
    description: "psychological pacing designed"
  },
  {
    icon: MessageSquare,
    metric: "Objections Handled",
    description: "before they form in prospect's mind"
  },
  {
    icon: Check,
    metric: "Trust Compounded",
    description: "OGC embedded throughout"
  },
  {
    icon: ArrowUpRight,
    metric: "Revenue Impact",
    description: "where most agencies never look"
  }
];

export function WebDesign() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeSplit, setActiveSplit] = useState<'problem' | 'solution'>('solution');

  const benefits = [
    {
      icon: Eye,
      title: "Pre-Frame Value",
      description: "Every page answers the prospect's unspoken questions before they ask. This reduces friction and creates momentum toward booking."
    },
    {
      icon: Target,
      title: "Set Clear Expectations",
      description: "We introduce pricing context, effort requirements, and authority signals that filter unserious prospects automatically."
    },
    {
      icon: Filter,
      title: "Filter Intent, Not Volume",
      description: "Most websites try to convert everyone. We design systems that intentionally repel poor-fit leads while attracting ideal buyers."
    },
    {
      icon: Users,
      title: "Qualify Buyers Before Sales",
      description: "The funnel does the heavy lifting. By the time someone books, they've already qualified themselves through the decision-making environment."
    },
    {
      icon: MessageSquare,
      title: "Support Sales Process",
      description: "Your funnel becomes a 24/7 sales assistant, handling objections, building trust, and creating urgency without pressure."
    },
    {
      icon: Sparkles,
      title: "AI-Driven Optimization",
      description: "Unlike static websites, our funnels evolve based on real behavior—headlines, CTAs, and messaging improve continuously."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [benefits.length]);

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-[#70E000] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#70E000] font-medium">WEB DESIGN, LANDING PAGES & SALES FUNNELS</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Traffic Is Useless If
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                The Wrong People Convert
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-4">
              Leadgentic builds conversion systems — not websites — designed to filter intent, establish trust, and turn qualified visitors into booked appointments, while quietly repelling the leads you don't want.
            </p>

            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-base text-gray-500">This is where most revenue is lost.</p>
              <p className="text-base text-[#70E000] font-semibold">And where most agencies never look.</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/book-growth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#70E000] to-[#5ac000] text-black px-8 py-4 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-[#70E000]/50 transition-all inline-flex items-center gap-2"
                >
                  BOOK A GROWTH CALL
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zinc-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-900 transition-all"
              >
                VIEW CASE STUDIES
              </motion.button>
            </div>
          </motion.div>

          {/* Conversion Metrics Carousel - Premium Green Monochrome */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container with CSS Animation */}
            <div className="conversion-metrics-carousel-wrapper">
              {/* First Set */}
              <div className="flex gap-4">
                {conversionMetrics.map((metric, index) => (
                  <MetricCard key={`first-${index}`} {...metric} />
                ))}
              </div>
              
              {/* Second Set for Seamless Loop */}
              <div className="flex gap-4">
                {conversionMetrics.map((metric, index) => (
                  <MetricCard key={`second-${index}`} {...metric} />
                ))}
              </div>

              {/* Third Set for Extra Smoothness */}
              <div className="flex gap-4">
                {conversionMetrics.map((metric, index) => (
                  <MetricCard key={`third-${index}`} {...metric} />
                ))}
              </div>
            </div>

            <style>{`
              .conversion-metrics-carousel-wrapper {
                display: flex;
                gap: 1rem;
                animation: conversion-scroll-left-smooth 5s linear infinite;
                will-change: transform;
              }

              .conversion-metrics-carousel-wrapper:hover {
                animation-play-state: paused;
              }

              @keyframes conversion-scroll-left-smooth {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(calc(-100% / 3));
                }
              }

              @media (max-width: 768px) {
                .conversion-metrics-carousel-wrapper {
                  animation-duration: 6s;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* The Problem Section - Split Focus Widget - WHITE BACKGROUND */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#70E000]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#70E000]/3 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            {/* Small Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-sm mb-6">
              <div className="w-2 h-2 bg-[#70E000] rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-600 font-medium tracking-wide uppercase">The Reality</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black leading-tight">
              The Painful Truth <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#70E000] via-[#a3ff00] to-[#70E000] bg-clip-text text-transparent">
                Most Owners Feel (But Don't Say)
              </span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Most businesses already "have a website" — <br className="hidden md:block" />
              <span className="text-gray-700 font-medium">but it's not doing what they need it to do.</span>
            </p>

            {/* Toggle Switch - Liquid Glass Style */}
            <div className="inline-flex items-center gap-1 p-1.5 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-xl border border-white/60 rounded-full shadow-xl">
              <button
                onClick={() => setActiveSplit('problem')}
                className={`
                  relative px-8 py-3 rounded-full font-semibold text-sm transition-all duration-500
                  ${activeSplit === 'problem'
                    ? 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 text-white shadow-2xl shadow-gray-400/20 backdrop-blur-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                  }
                `}
              >
                <span className="relative z-10">The Disconnect</span>
                {activeSplit === 'problem' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300/30 to-gray-400/30 rounded-full blur-lg" />
                )}
              </button>
              <button
                onClick={() => setActiveSplit('solution')}
                className={`
                  relative px-8 py-3 rounded-full font-semibold text-sm transition-all duration-500
                  ${activeSplit === 'solution'
                    ? 'bg-gradient-to-br from-[#70E000] via-[#a3ff00] to-[#70E000] text-black shadow-2xl shadow-[#70E000]/30 backdrop-blur-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                  }
                `}
              >
                <span className="relative z-10">The Solution</span>
                {activeSplit === 'solution' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/40 to-[#a3ff00]/40 rounded-full blur-lg" />
                )}
              </button>
            </div>
          </motion.div>
          
          {/* Comparison Table */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Problem View - Liquid Glass */}
            {activeSplit === 'problem' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300/10 via-gray-400/10 to-gray-300/10 rounded-[2rem] blur-3xl" />
                
                <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-2xl rounded-[2rem] border border-white/60 shadow-2xl overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200/5 via-transparent to-gray-300/5 pointer-events-none" />
                  
                  {/* Header */}
                  <div className="relative bg-gradient-to-r from-gray-100/40 via-gray-200/40 to-gray-100/40 backdrop-blur-sm px-6 py-4 border-b border-white/40">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-200/40 to-gray-300/40 backdrop-blur-sm flex items-center justify-center border border-gray-200/40">
                        <span className="text-xl opacity-50">⚠️</span>
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-gray-600 to-gray-500 bg-clip-text text-transparent">The Disconnect</h3>
                    </div>
                  </div>

                  {/* Table Content */}
                  <div className="relative p-6">
                    <div className="space-y-2">
                      {[
                        { title: 'Lead Consistency', issue: 'Leads feel inconsistent' },
                        { title: 'Call Show Rate', issue: 'Calls don\'t show up' },
                        { title: 'Appointment Quality', issue: 'Appointments don\'t stick' },
                        { title: 'Team Satisfaction', issue: 'Teams complain about lead quality' }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08 }}
                          className="group relative bg-white/60 backdrop-blur-md rounded-xl border border-white/80 p-4 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center shadow-sm shadow-gray-300/30">
                              <span className="text-white text-xs font-bold">×</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">{item.title}</div>
                              <div className="text-sm text-gray-600 font-medium">{item.issue}</div>
                            </div>
                          </div>
                          
                          {/* Subtle gradient line */}
                          <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Message */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6 p-4 bg-gradient-to-br from-gray-200/30 via-gray-300/30 to-gray-200/30 backdrop-blur-md rounded-xl border border-gray-200/40"
                    >
                      <p className="text-center text-sm text-gray-600 font-semibold italic">
                        Traffic is coming in… But revenue isn't following.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Solution View - Liquid Glass */}
            {activeSplit === 'solution' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/20 via-[#a3ff00]/20 to-[#70E000]/20 rounded-[2rem] blur-3xl" />
                
                <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-2xl rounded-[2rem] border border-white/60 shadow-2xl overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/5 via-transparent to-[#a3ff00]/5 pointer-events-none" />
                  
                  {/* Header */}
                  <div className="relative bg-gradient-to-r from-[#70E000]/10 via-[#a3ff00]/10 to-[#70E000]/10 backdrop-blur-sm px-6 py-4 border-b border-white/40">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#70E000]/20 to-[#a3ff00]/20 backdrop-blur-sm flex items-center justify-center border border-[#70E000]/30">
                        <Check className="w-5 h-5 text-[#70E000]" strokeWidth={3} />
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">What Leadgentic Builds Instead</h3>
                    </div>
                  </div>

                  {/* Table Content */}
                  <div className="relative p-6">
                    <div className="space-y-2">
                      {[
                        { title: 'Value Positioning', solution: 'Pre-frame value before the pitch' },
                        { title: 'Expectation Management', solution: 'Set clear expectations upfront' },
                        { title: 'Intent Filtering', solution: 'Filter for genuine buyer intent' },
                        { title: 'Sales Enablement', solution: 'Support sales before it starts' }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08 }}
                          className="group relative bg-white/60 backdrop-blur-md rounded-xl border border-white/80 p-4 hover:bg-white/80 hover:shadow-lg hover:border-[#70E000]/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#70E000] to-[#a3ff00] flex items-center justify-center shadow-lg shadow-[#70E000]/30">
                              <Check className="w-3 h-3 text-black" strokeWidth={4} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[10px] font-bold text-[#70E000]/80 uppercase tracking-wider mb-0.5">{item.title}</div>
                              <div className="text-sm text-gray-700 font-medium">{item.solution}</div>
                            </div>
                          </div>
                          
                          {/* Subtle gradient line */}
                          <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#70E000]/20 to-transparent" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Message */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6 p-4 bg-gradient-to-br from-[#70E000]/10 via-[#a3ff00]/10 to-[#70E000]/10 backdrop-blur-md rounded-xl border border-[#70E000]/30"
                    >
                      <p className="text-center text-sm text-[#70E000] font-bold italic">
                        Lower volume. Higher intent. That's the feature.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#70E000]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#70E000]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Small Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 mb-6">
              <div className="w-2 h-2 bg-[#70E000] rounded-full animate-pulse"></div>
              <span className="text-xs text-[#70E000] font-medium tracking-wide uppercase">Featured Work</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Conversion-Driven <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Design Systems</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Every project is built to qualify, convert, and scale — not just look good.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - Fansmetric */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-[#70E000]/40 transition-all duration-700 shadow-2xl">
                {/* Image Container with Glassmorphism Overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={fansmetricImage} 
                    alt="Fansmetric Project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  {/* Floating Glassmorphism Tag */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                  >
                    <span className="text-xs text-white font-medium">Analytics Platform</span>
                  </motion.div>
                </div>

                {/* Content with Glassmorphism */}
                <div className="relative p-6 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#70E000] transition-colors duration-300">
                    Fansmetric
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Analytics, chatting & marketing platform for OnlyFans agencies
                  </p>
                  
                  {/* CTA with Glass Effect */}
                  <div className="flex items-center gap-2 text-[#70E000] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>View Case Study</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>

            {/* Project 2 - Biofuse */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-[#70E000]/40 transition-all duration-700 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={biofuseImage} 
                    alt="Biofuse Project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                  >
                    <span className="text-xs text-white font-medium">Healthcare</span>
                  </motion.div>
                </div>

                <div className="relative p-6 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#70E000] transition-colors duration-300">
                    Biofuse
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Healthcare lead generation with HIPAA compliance
                  </p>
                  
                  <Link to="/biofuse-case-study" className="inline-block">
                    <div className="flex items-center gap-2 text-[#70E000] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>View Case Study</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </Link>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>

            {/* Project 3 - Live Outdoor */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-[#70E000]/40 transition-all duration-700 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={liveOutdoorImage} 
                    alt="Live Outdoor Project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                  >
                    <span className="text-xs text-white font-medium">E-commerce</span>
                  </motion.div>
                </div>

                <div className="relative p-6 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#70E000] transition-colors duration-300">
                    Live Outdoor
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    E-commerce platform with geographic targeting
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#70E000] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>View Case Study</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>

            {/* Project 4 - House of Leon */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-[#70E000]/40 transition-all duration-700 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={houseOfLeonImage} 
                    alt="House of Leon Project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                  >
                    <span className="text-xs text-white font-medium">Premium Brand</span>
                  </motion.div>
                </div>

                <div className="relative p-6 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#70E000] transition-colors duration-300">
                    House of Leon
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Premium brand site with storytelling architecture
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#70E000] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>View Case Study</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>

            {/* Project 5 - Joe's on Jolly */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-[#70E000]/40 transition-all duration-700 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={joesOnJollyImage} 
                    alt="Joe's on Jolly Project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                  >
                    <span className="text-xs text-white font-medium">Restaurant</span>
                  </motion.div>
                </div>

                <div className="relative p-6 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#70E000] transition-colors duration-300">
                    Joe's on Jolly
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Local restaurant with online ordering integration
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#70E000] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>View Case Study</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>

            {/* Project 6 - Euroluxe */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-[#70E000]/40 transition-all duration-700 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={euroluxeWebImage} 
                    alt="Euroluxe Detailing Project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                  >
                    <span className="text-xs text-white font-medium">Auto Detailing</span>
                  </motion.div>
                </div>

                <div className="relative p-6 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#70E000] transition-colors duration-300">
                    Euroluxe Detailing
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Premium autostyling experts with responsive booking system
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#70E000] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>View Case Study</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="group inline-flex items-center gap-3 bg-[#70E000] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#5fc000] transition-all duration-300 shadow-lg shadow-[#70E000]/20">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Carousel */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Reframe: <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">Websites Don't Convert — Systems Do</span>
            </h2>
            <p className="text-gray-400 text-lg">Your site is a decision-making environment</p>
          </motion.div>

          {/* Continuous Carousel */}
          <div className="relative overflow-hidden">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="benefits-carousel-wrapper">
              {/* First Set */}
              <div className="flex gap-6">
                {benefits.map((benefit, index) => (
                  <div key={`first-${index}`} className="min-w-[350px] md:min-w-[400px]">
                    <BenefitCard {...benefit} />
                  </div>
                ))}
              </div>
              
              {/* Second Set for Seamless Loop */}
              <div className="flex gap-6">
                {benefits.map((benefit, index) => (
                  <div key={`second-${index}`} className="min-w-[350px] md:min-w-[400px]">
                    <BenefitCard {...benefit} />
                  </div>
                ))}
              </div>

              {/* Third Set for Extra Smoothness */}
              <div className="flex gap-6">
                {benefits.map((benefit, index) => (
                  <div key={`third-${index}`} className="min-w-[350px] md:min-w-[400px]">
                    <BenefitCard {...benefit} />
                  </div>
                ))}
              </div>
            </div>

            <style>{`
              .benefits-carousel-wrapper {
                display: flex;
                gap: 1.5rem;
                animation: benefits-scroll-left 60s linear infinite;
              }

              .benefits-carousel-wrapper:hover {
                animation-play-state: paused;
              }

              @keyframes benefits-scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-33.333%);
                }
              }

              @media (max-width: 768px) {
                .benefits-carousel-wrapper {
                  animation-duration: 45s;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* How It Works - Accordions - WHITE BACKGROUND */}
      <section className="py-20 px-6 relative overflow-hidden bg-white">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#70E000]/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              The Leadgentic <span className="text-[#70E000]">Funnel System</span> (step by step)
            </h2>
            <p className="text-gray-600 text-lg">Not websites. Conversion systems.</p>
          </motion.div>
          
          <div className="space-y-4">
            {[
              {
                number: "01",
                title: "Qualification-first page architecture",
                subtitle: "Who this is for",
                description: "Every page we build answers three questions immediately: Who this is for. Who this is not for. What happens next. We intentionally introduce pricing context (without quoting), effort expectations, authority signals, and friction that filters unserious prospects.",
                features: ["Who this is for", "Who this is not for", "What happens next", "Pricing context", "Effort expectations", "Authority signals"]
              },
              {
                number: "02",
                title: "OGC embedded into the funnel (trust in motion)",
                subtitle: "Your unfair advantage",
                description: "Owner Generated Content doesn't stop at ads. This is where most agencies drop the ball. We embed OGC directly into the funnel so that: The same face from the ad greets the visitor. Authority is reinforced, not reset. Trust compounds instead of restarting. Prospects don't feel like they're 'landing' somewhere new—they feel like they're continuing a conversation.",
                features: ["Same face from ad", "Authority reinforced", "Trust compounds", "Show rates increase", "Conversion quality improves", "Sales confidence grows"]
              },
              {
                number: "03",
                title: "Funnel flow designed for how people actually decide",
                subtitle: "Emotional → logical",
                description: "People don't decide logically. They decide emotionally—then justify logically. Our funnels are structured to: Address objections before they form. Answer the questions prospects are afraid to ask. Create momentum toward booking. This includes: Strategic section sequencing. Psychological pacing. Clear next steps without pressure.",
                features: ["Address objections early", "Answer hidden questions", "Create momentum", "Strategic sequencing", "Psychological pacing", "No fake urgency"]
              },
              {
                number: "04",
                title: "AI-driven conversion optimization (where it gets unfair)",
                subtitle: "Living systems",
                description: "Once the funnel is live, AI takes over. Our system continuously tests: Headlines. Section order. CTAs. Messaging emphasis. Drop-off points. The funnel evolves over time based on real behavior—not assumptions. Most websites are static. Ours are living systems.",
                features: ["Headlines", "Section order", "CTAs", "Messaging emphasis", "Drop-off points", "Behavior-based"]
              }
            ].map((step, index) => {
              const isActive = activeAccordion === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveAccordion(index)}
                  onMouseEnter={() => setActiveAccordion(index)}
                  className={`
                    relative cursor-pointer rounded-xl transition-all duration-500 ease-in-out overflow-hidden
                    ${isActive 
                      ? 'bg-gray-50 border-[#70E000] shadow-lg shadow-[#70E000]/10' 
                      : 'bg-white border-gray-200 hover:border-gray-300'
                    }
                    border
                  `}
                  style={{
                    boxShadow: isActive ? '0 0 20px rgba(112, 224, 0, 0.08)' : 'none'
                  }}
                >
                  {/* Header - Always Visible */}
                  <div className="flex items-start gap-5 p-6 md:p-7">
                    {/* Number Badge */}
                    <div className={`
                      flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold transition-all duration-300
                      ${isActive 
                        ? 'bg-[#70E000]/15 text-[#70E000] border border-[#70E000]/30' 
                        : 'bg-gray-100 text-gray-500 border border-gray-200'
                      }
                    `}>
                      {step.number}
                    </div>

                    {/* Title & Subtitle */}
                    <div className="flex-1">
                      <h3 className={`
                        text-xl md:text-2xl font-semibold mb-1 transition-colors duration-300
                        ${isActive ? 'text-black' : 'text-gray-600'}
                      `}>
                        {step.title}
                      </h3>
                      <p className={`
                        text-sm font-medium transition-colors duration-300
                        ${isActive ? 'text-[#70E000]' : 'text-gray-400'}
                      `}>
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0
                    }}
                    transition={{
                      height: { duration: 0.4, ease: 'easeInOut' },
                      opacity: { duration: 0.3, ease: 'easeInOut' }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0 space-y-4">
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-[15px] pl-[68px]">
                        {step.description}
                      </p>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-2 pl-[68px]">
                        {step.features.map((feature, i) => (
                          <span
                            key={i}
                            className={`
                              px-3 py-1.5 rounded-lg text-sm transition-all duration-300
                              ${isActive 
                                ? 'bg-white border border-[#70E000]/20 text-gray-700' 
                                : 'bg-gray-100 border border-gray-200 text-gray-400'}
                            `}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Subtle bottom accent line */}
                  {isActive && (
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#70E000]/30 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future State Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-[#70E000]">Future State</span>
            </h2>
            <p className="text-gray-400 text-lg">What this feels like when funnels are done right</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Users, text: "Fewer junk leads" },
              { icon: Target, text: "Better conversations" },
              { icon: TrendingUp, text: "Prospects show up informed" },
              { icon: Zap, text: "Sales feels lighter" },
              { icon: BarChart3, text: "Teams trust the pipeline" },
              { icon: Clock, text: "You stop reacting, start expecting" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/50 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#70E000]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#70E000]" />
                </div>
                <p className="text-white font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF: What This Looks Like in the Real World - WHITE BACKGROUND */}
      <section className="py-20 px-6 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#70E000]/5 rounded-full blur-[140px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6 leading-tight">
              <span className="font-medium">Proof:</span>{" "}
              <span className="bg-gradient-to-r from-[#70E000] via-[#a3ff00] to-[#70E000] bg-clip-text text-transparent font-normal">
                What this looks like in the real world
              </span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">Real business owners. Real results.</p>
          </motion.div>

          {/* Video Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-black mb-8 text-center">Video Testimonials</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Video 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#70E000]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center relative overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/10 via-transparent to-[#70E000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  
                  {/* Play Button with glow */}
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-[#70E000] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <PlayCircle className="w-20 h-20 text-[#70E000] relative z-10 group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl" strokeWidth={1.5} />
                  </div>

                  {/* Video badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#70E000]" />
                    <span className="text-white text-xs font-semibold">2:34</span>
                  </div>
                </div>
                
                {/* Quote Section */}
                <div className="relative p-8 bg-gradient-to-br from-white to-gray-50">
                  {/* Quote mark decoration */}
                  <div className="absolute top-6 right-8 text-6xl text-[#70E000]/10 font-serif leading-none">"</div>
                  
                  <div className="relative z-10">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "Once people started seeing my face in the ads, the quality of conversations completely changed."
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center text-white font-bold text-sm">
                        BO
                      </div>
                      <div>
                        <p className="text-sm font-bold text-black">Business Owner</p>
                        <p className="text-xs text-gray-500">Service Industry</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

              {/* Video 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#70E000]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center relative overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/10 via-transparent to-[#70E000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  
                  {/* Play Button with glow */}
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-[#70E000] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <PlayCircle className="w-20 h-20 text-[#70E000] relative z-10 group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl" strokeWidth={1.5} />
                  </div>

                  {/* Video badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#70E000]" />
                    <span className="text-white text-xs font-semibold">3:12</span>
                  </div>
                </div>
                
                {/* Quote Section */}
                <div className="relative p-8 bg-gradient-to-br from-white to-gray-50">
                  {/* Quote mark decoration */}
                  <div className="absolute top-6 right-8 text-6xl text-[#70E000]/10 font-serif leading-none">"</div>
                  
                  <div className="relative z-10">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "The funnel did the qualifying for us. Now every call that comes in is already pre-sold on the value."
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center text-white font-bold text-sm">
                        SB
                      </div>
                      <div>
                        <p className="text-sm font-bold text-black">Service Business Owner</p>
                        <p className="text-xs text-gray-500">B2B Services</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </div>
          </div>

          {/* Written Case Studies */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-8 text-center">Written Case Studies</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#70E000]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Gradient accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#70E000] via-[#a3ff00] to-[#70E000] group-hover:h-2 transition-all duration-300" />
                
                <div className="p-8">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#70E000]/20 to-[#70E000]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-7 h-7 text-[#70E000]" strokeWidth={2} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#70E000] uppercase tracking-wider">Case Study</span>
                        <p className="text-xs text-gray-500 mt-0.5">OGC + AI Strategy</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#70E000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-black mb-4 leading-tight group-hover:text-[#70E000] transition-colors duration-300">
                    How OGC + AI Ads Increased Qualified Inquiries Without Increasing Spend
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                    A breakdown of how trust-based ads reduced low-intent leads and improved booking rates.
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <div className="text-2xl font-bold text-[#70E000] mb-1">+42%</div>
                      <div className="text-xs text-gray-500 leading-tight">Quality Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#70E000] mb-1">$0</div>
                      <div className="text-xs text-gray-500 leading-tight">Extra Spend</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#70E000] mb-1">90d</div>
                      <div className="text-xs text-gray-500 leading-tight">Timeline</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#70E000] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <FileText className="w-4 h-4" />
                    <span>Read the full case study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

              {/* Case Study 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#70E000]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Gradient accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#70E000] via-[#a3ff00] to-[#70E000] group-hover:h-2 transition-all duration-300" />
                
                <div className="p-8">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#70E000]/20 to-[#70E000]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 className="w-7 h-7 text-[#70E000]" strokeWidth={2} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#70E000] uppercase tracking-wider">Case Study</span>
                        <p className="text-xs text-gray-500 mt-0.5">AI Optimization</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#70E000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-black mb-4 leading-tight group-hover:text-[#70E000] transition-colors duration-300">
                    From Inconsistent Leads to Predictable Weekly Appointments
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                    How AI optimization and content testing stabilized lead flow in a competitive market.
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <div className="text-2xl font-bold text-[#70E000] mb-1">3x</div>
                      <div className="text-xs text-gray-500 leading-tight">Consistency</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#70E000] mb-1">Weekly</div>
                      <div className="text-xs text-gray-500 leading-tight">Predictability</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#70E000] mb-1">60d</div>
                      <div className="text-xs text-gray-500 leading-tight">To Stability</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#70E000] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <FileText className="w-4 h-4" />
                    <span>Read the full case study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CHANGES FOR YOU (Future State) - DARK BACKGROUND */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#70E000]/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">What Changes for You</span>{" "}
              <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">(Future State)</span>
            </h2>
            <p className="text-gray-400 text-lg">At a certain point, clients describe a shift:</p>
          </motion.div>

          <div className="space-y-4">
            {[
              { text: "Leads feel expected, not hoped for", icon: Target },
              { text: "Conversations are easier", icon: MessageSquare },
              { text: "Prospects reference your videos", icon: Video },
              { text: "Closing feels natural", icon: Check },
              { text: "Growth stops feeling fragile", icon: TrendingUp },
              { text: 'You\'re no longer "trying ads."', icon: Zap }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/40 hover:bg-zinc-900/80 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#70E000]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#70E000]/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#70E000]" />
                  </div>
                  <p className="text-lg text-white font-medium">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-white font-semibold mb-2">
              You're operating a{" "}
              <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">
                revenue acquisition system.
              </span>
            </p>
            <p className="text-gray-400">No longer "trying ads."</p>
          </motion.div>
        </div>
      </section>

      {/* WHY THIS WORKS WHEN OTHERS DON'T - WHITE BACKGROUND */}
      <section className="py-20 px-6 relative overflow-hidden bg-white">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#70E000]/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Why This Works <span className="text-[#70E000]">When Others Don't</span>
            </h2>
            <p className="text-gray-600 text-lg">It's not what you sell — it's what you install.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Most Agencies Sell */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-xl">×</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600">Most Agencies Sell</h3>
                </div>
                
                <ul className="space-y-3">
                  {["Ads", "Platforms", "Tactics"].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-500">
                      <span className="text-gray-400 mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    Short-term thinking. Temporary gains.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Leadgentic Installs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#70E000]/30 rounded-xl p-8 shadow-lg shadow-[#70E000]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#70E000] flex items-center justify-center">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#70E000]">Leadgentic Installs</h3>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "Trust",
                    "Authority",
                    "Systems that learn and improve over time"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-[#70E000]/20">
                  <p className="text-sm text-[#70E000] font-semibold">
                    That's why results feel less random — and more inevitable.
                  </p>
                </div>
              </div>

              {/* Accent glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#70E000]/20 to-[#a3ff00]/20 rounded-xl blur-xl -z-10 opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}