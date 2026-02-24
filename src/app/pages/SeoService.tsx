import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, DollarSign, Award, Sparkles, Activity, ArrowUpRight, Globe, Search } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { CaseCarousel } from "@/app/components/CaseCarousel";
import { Link } from "react-router";

// Case study images
const biofuseImage = "https://images.unsplash.com/photo-1757940113920-69e3686438d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGNsaW5pYyUyMHNwYSUyMGludGVyaW9yfGVufDF8fHx8MTc3MDc1OTI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const euroluxeImage = "https://images.unsplash.com/photo-1761312834150-4beefff097a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc3MDcxNjE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const houseOfLeonImage = "https://images.unsplash.com/photo-1588770238925-31c80ffccb9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBsdXh1cnklMjBicmFuZHxlbnwxfHx8fDE3NzA3NTkyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const joesOnJollyImage = "https://images.unsplash.com/photo-1768405942823-a8ff0aecdcef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwYmFyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNzUwNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const atmosphereImage = "https://images.unsplash.com/photo-1733154687952-f5e6437d7a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uYWJpcyUyMGJyYW5kJTIwcHJvZHVjdCUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NzA3NTkyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const skyglossImage = "https://images.unsplash.com/photo-1763076247891-f20b35fcfc9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY2FyJTIwY29hdGluZyUyMGRldGFpbHxlbnwxfHx8fDE3NzA3NTkyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

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

// SEO Metric Card - Premium Green Monochrome
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

// SEO Metrics Data - 12 Cards
const seoMetrics = [
  {
    icon: TrendingUp,
    metric: "287% Avg Growth",
    description: "in organic traffic within 6 months"
  },
  {
    icon: Search,
    metric: "Page 1 Rankings",
    description: "for 90% of target keywords"
  },
  {
    icon: Users,
    metric: "12x Quality Boost",
    description: "in lead intent and conversion rate"
  },
  {
    icon: Target,
    metric: "65% Lower CPA",
    description: "compared to paid acquisition"
  },
  {
    icon: Globe,
    metric: "24/7 Visibility",
    description: "capturing demand around the clock"
  },
  {
    icon: BarChart3,
    metric: "94% Retention",
    description: "clients stay and compound results"
  },
  {
    icon: Sparkles,
    metric: "AI-Powered",
    description: "content optimization and tracking"
  },
  {
    icon: Award,
    metric: "Market Authority",
    description: "become the recognized expert"
  },
  {
    icon: Clock,
    metric: "6 Months Avg",
    description: "to measurable SEO dominance"
  },
  {
    icon: Activity,
    metric: "Compound ROI",
    description: "results grow month over month"
  },
  {
    icon: DollarSign,
    metric: "$180K Growth",
    description: "average annual revenue increase"
  },
  {
    icon: ArrowUpRight,
    metric: "Sustained Growth",
    description: "momentum that competitors can't match"
  }
];

export function SeoService() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeSplit, setActiveSplit] = useState<'problem' | 'solution'>('solution');

  const benefits = [
    {
      icon: TrendingUp,
      title: "Compound Growth",
      description: "Unlike paid ads, SEO results compound over time. Each piece of content builds authority, creating a snowball effect that accelerates your visibility."
    },
    {
      icon: Users,
      title: "Higher Quality Leads",
      description: "Organic visitors are actively searching for solutions. They arrive with intent, making them far more likely to convert than cold traffic."
    },
    {
      icon: DollarSign,
      title: "Lower Cost Per Acquisition",
      description: "Once established, organic leads cost significantly less than paid advertising, improving your ROI and profit margins dramatically."
    },
    {
      icon: Clock,
      title: "24/7 Lead Generation",
      description: "Your SEO works around the clock, capturing leads while you sleep. No daily budget limits or campaign pauses."
    },
    {
      icon: Target,
      title: "Build Market Authority",
      description: "Ranking for key terms positions you as the industry leader. People trust brands they find organically over paid advertisements."
    },
    {
      icon: Zap,
      title: "Sustainable Advantage",
      description: "SEO creates a moat around your business. Competitors can't simply outbid you—they have to earn it over time."
    }
  ];

  const caseStudies = [
    {
      category: "MEDSPA",
      title: "Biofuse Wellness",
      metric: "From $0 To Millions In Rev",
      description: `"Leadgentic has evolved with us, side by side for almost a decade, making us the premier health optimization business in our markets."`,
      services: ["Website Redesign", "SEO", "CRM & Funnels", "OGC Content", "Reputation Management", "Video Editing", "Meta Ads", "Google Ads"],
      image: biofuseImage,
      accentColor: "#70E000"
    },
    {
      category: "AUTO DETAILING",
      title: "Euroluxe Detailing",
      metric: "3X Revenue in 1 Year",
      description: `"We started with a goal of $40–$80K per month. Within a year, we were doing over $100,000/month and had 3X'd our revenue." — Caleb, Euroluxe Detailing`,
      services: ["Website Redesign", "SEO", "CRM & Funnels", "OGC Content", "Reputation Management", "Video Editing", "Meta Ads", "Google Ads"],
      image: euroluxeImage,
      accentColor: "#70E000",
      link: "https://docs.google.com/document/d/15Feqraj0DuyPuOZMMrVJu533zdB9CrIt009YbRNbvIc/edit?tab=t.0#heading=h.h7iaewklzy39"
    },
    {
      category: "E-COMMERCE / SUSTAINABILITY",
      title: "The House of Leon",
      metric: "250% Lead Increase",
      description: "A luxury sustainable brand merging premium quality with environmental consciousness through a seamless eCommerce experience.",
      services: ["eCommerce Development", "Brand Strategy & Identity", "UI/UX Design"],
      image: houseOfLeonImage,
      accentColor: "#70E000"
    },
    {
      category: "HOSPITALITY / RESTAURANT",
      title: "Joe's On Jolly",
      metric: "10× ROI",
      description: "A modern American restaurant and bar in Lansing, Michigan featuring burgers, sandwiches, and casual dining with a vibrant sports-watching atmosphere.",
      services: ["Brand Strategy & Identity", "Web Design", "Digital Marketing"],
      image: joesOnJollyImage,
      accentColor: "#70E000"
    },
    {
      category: "CANNABIS / BRANDING",
      title: "Atmosphere",
      metric: "40+ New Clients",
      description: "A futuristic cannabis brand built on minimalist design, cosmic gradients, and otherworldly aesthetics—creating an immersive universe for expansion and creativity.",
      services: ["Brand Strategy & Identity", "Packaging Design", "Visual Identity"],
      image: atmosphereImage,
      accentColor: "#70E000"
    },
    {
      category: "AUTOMOTIVE / CERAMIC COATING",
      title: "SkyGloss",
      metric: "$180K Revenue Growth",
      description: "A premium vehicle protective coating offering long-term paint protection against UV rays, contaminants, and daily wear—keeping cars looking showroom-fresh with minimal maintenance.",
      services: ["Brand Strategy & Identity", "Packaging Design", "Digital Marketing"],
      image: skyglossImage,
      accentColor: "#70E000"
    },
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
              <span className="text-sm text-[#70E000] font-medium">SEO & ORGANIC GROWTH</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Become the
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                First Answer People See
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Turn organic search into a consistent, compounding source of inbound demand while reducing long-term reliance on paid ads.
            </p>

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
              <Link to="/case-studies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-zinc-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-900 transition-all"
                >
                  VIEW CASE STUDIES
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* SEO Metrics Carousel - Premium Green Monochrome */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays - Adapted for white cards on dark background */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container with CSS Animation */}
            <div className="seo-metrics-carousel-wrapper">
              {/* First Set */}
              <div className="flex gap-4">
                {seoMetrics.map((metric, index) => (
                  <MetricCard key={`first-${index}`} {...metric} />
                ))}
              </div>
              
              {/* Second Set for Seamless Loop */}
              <div className="flex gap-4">
                {seoMetrics.map((metric, index) => (
                  <MetricCard key={`second-${index}`} {...metric} />
                ))}
              </div>

              {/* Third Set for Extra Smoothness */}
              <div className="flex gap-4">
                {seoMetrics.map((metric, index) => (
                  <MetricCard key={`third-${index}`} {...metric} />
                ))}
              </div>
            </div>

            <style>{`
              .seo-metrics-carousel-wrapper {
                display: flex;
                gap: 1rem;
                animation: seo-scroll-left-smooth 5s linear infinite;
                will-change: transform;
              }

              .seo-metrics-carousel-wrapper:hover {
                animation-play-state: paused;
              }

              @keyframes seo-scroll-left-smooth {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(calc(-100% / 3));
                }
              }

              @media (max-width: 768px) {
                .seo-metrics-carousel-wrapper {
                  animation-duration: 6s;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* The Problem Section - Split Focus Widget */}
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
              The Problem Most Businesses <span className="text-[#70E000]">Don't Address</span>
            </h2>
            <p className="text-gray-400 text-lg">Growth that depends on ads is rented, not owned</p>
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
                The Ad Dependency Trap
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
                  <span>Leads stop when ads stop</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'problem' ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  <span className={`
                    mt-1 transition-colors duration-300
                    ${activeSplit === 'problem' ? 'text-[#70E000]' : 'text-gray-600'}
                  `}>×</span>
                  <span>Rising costs, same results</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'problem' ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  <span className={`
                    mt-1 transition-colors duration-300
                    ${activeSplit === 'problem' ? 'text-[#70E000]' : 'text-gray-600'}
                  `}>×</span>
                  <span>No lasting brand authority</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'problem' ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  <span className={`
                    mt-1 transition-colors duration-300
                    ${activeSplit === 'problem' ? 'text-[#70E000]' : 'text-gray-600'}
                  `}>×</span>
                  <span>Constant competitor pressure</span>
                </li>
              </ul>

              {/* Bottom accent line - only visible when active */}
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
                The SEO Advantage
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
                  <span>Leads that compound over time</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'solution' ? 'text-gray-200' : 'text-gray-500'}
                `}>
                  <Check className={`
                    w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300
                    ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
                  `} />
                  <span>Decreasing cost per acquisition</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'solution' ? 'text-gray-200' : 'text-gray-500'}
                `}>
                  <Check className={`
                    w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300
                    ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
                  `} />
                  <span>Build market authority</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'solution' ? 'text-gray-200' : 'text-gray-500'}
                `}>
                  <Check className={`
                    w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300
                    ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
                  `} />
                  <span>Sustainable competitive moat</span>
                </li>
              </ul>

              {/* Bottom accent line - only visible when active */}
              {activeSplit === 'solution' && (
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#70E000]/30 to-transparent" />
              )}
            </motion.div>
          </div>
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
              Why SEO <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">Compounds</span>
            </h2>
            <p className="text-gray-400 text-lg">The strategic advantages that keep giving</p>
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

      {/* How It Works - Modern Design */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#70E000]/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#70E000]">AI-Driven</span> SEO System
            </h2>
            <p className="text-gray-400 text-lg">Not traditional SEO. Authority engineering.</p>
          </motion.div>
          
          <div className="space-y-4">
            {[
              {
                number: "01",
                title: "Buyer-Intent SEO",
                subtitle: "Where Money Comes From",
                description: "We target service-ready searches, local intent, and decision-stage questions. Every page is designed to turn search intent into qualified inquiries.",
                features: ["Service-ready searches", "Local 'near me' intent", "Decision-stage questions"]
              },
              {
                number: "02",
                title: "Owner-Generated Content",
                subtitle: "Your Unfair Advantage",
                description: "Your authentic content becomes blog articles, FAQs, and service pages. Search engines reward it. Humans trust it.",
                features: ["Authentic blog content", "FAQ optimization", "Service explainers", "Local authority signals"]
              },
              {
                number: "03",
                title: "AI-Driven Optimization",
                subtitle: "The Compounding Effect",
                description: "Our AI continuously analyzes search behavior, page performance, and engagement signals. Content evolves. Authority compounds.",
                features: ["Behavior analysis", "Performance tracking", "Conversion optimization", "Engagement signals"]
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
                      ? 'bg-zinc-900/50 border-[#70E000] shadow-lg shadow-[#70E000]/10' 
                      : 'bg-black border-zinc-800 hover:border-zinc-700'
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
                        : 'bg-zinc-900 text-gray-600 border border-zinc-800'
                      }
                    `}>
                      {step.number}
                    </div>

                    {/* Title & Subtitle */}
                    <div className="flex-1">
                      <h3 className={`
                        text-xl md:text-2xl font-semibold mb-1 transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-gray-300'}
                      `}>
                        {step.title}
                      </h3>
                      <p className={`
                        text-sm font-medium transition-colors duration-300
                        ${isActive ? 'text-[#70E000]' : 'text-gray-600'}
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
                      <p className="text-gray-400 leading-relaxed text-[15px] pl-[68px]">
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
                                ? 'bg-zinc-800/80 border border-[#70E000]/20 text-gray-300' 
                                : 'bg-zinc-900 border border-zinc-800 text-gray-500'
                              }
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

      {/* Results Section */}
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
            <p className="text-gray-400 text-lg">What clients experience after 6 months</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Users, text: "Leads reference your content" },
              { icon: Target, text: "Prospects arrive educated" },
              { icon: TrendingUp, text: "Sales feels easier" },
              { icon: Zap, text: "Marketing feels calmer" },
              { icon: BarChart3, text: "Growth feels earned, not chased" },
              { icon: Clock, text: "Leads come 24/7" }
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

      {/* Featured Cases Section */}
      <section className="mt-0 pb-8 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="py-16">
            
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-light text-black">
                  Featured Case Studies
                </h2>
                <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
                  We believe in work that's not just built to function, but built to shift brand perception, elevate experience, and drive measurable results. That's the standard we create for.
                </p>
              </div>
              
              {/* View More Button */}
              <button className="group bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 whitespace-nowrap self-start lg:self-auto">
                VIEW MORE
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Cases Carousel */}
            <CaseCarousel cases={caseStudies} />

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}