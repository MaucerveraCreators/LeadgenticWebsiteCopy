import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Wrench } from "lucide-react";
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

// Auto-typing search component
function AutoTypingSearch() {
  const [text, setText] = useState("");
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const fullText = "windshield replacement near me";

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

// Auto Glass Metrics Data
const autoGlassMetrics = [
  { icon: TrendingUp, metric: "3x", description: "Faster emergency response vs. competitors" },
  { icon: Clock, metric: "<2min", description: "Average first response time to new leads" },
  { icon: Users, metric: "40%", description: "More after-hours jobs captured" },
  { icon: Shield, metric: "24/7", description: "AI availability for insurance questions" },
  { icon: Phone, metric: "95%", description: "Lead-to-appointment conversion rate" },
  { icon: BarChart3, metric: "60%", description: "Increase in organic search visibility" },
  { icon: Target, metric: "$120K", description: "Average annual revenue increase" },
  { icon: Award, metric: "#1", description: "Google ranking for local searches" },
  { icon: MessageSquare, metric: "100%", description: "Leads responded to instantly" },
  { icon: Zap, metric: "5x", description: "ROI on marketing spend" },
  { icon: Activity, metric: "85%", description: "Customer satisfaction rating" },
  { icon: ArrowUpRight, metric: "2.5x", description: "More scheduled installs monthly" },
];

export function AutoGlass() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Auto Glass Shops</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                When Glass Breaks,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Speed and Trust Win the Job
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Leadgentic builds AI-powered growth systems for auto glass shops that generate emergency leads, organic visibility, and scheduled installs — captured and confirmed automatically.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
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
          </motion.div>

          {/* Auto Glass Metrics Carousel - Premium Green Monochrome */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-auto-glass">
              {autoGlassMetrics.map((metric, index) => (
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
            @keyframes scroll-auto-glass {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            
            .animate-scroll-auto-glass {
              animation: scroll-auto-glass 8s linear infinite;
            }
            
            .animate-scroll-auto-glass:hover {
              animation-play-state: paused;
            }

            @media (max-width: 768px) {
              .animate-scroll-auto-glass {
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              Auto glass is a <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">race</span>.
            </h2>
            <p className="text-lg text-gray-400">
              Whoever responds first usually wins.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-base font-semibold text-white mb-4">Yet many shops lose jobs because:</h3>
              <ul className="space-y-3">
                {[
                  "Calls go unanswered",
                  "After-hours leads go cold",
                  "Follow-up isn't instant"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 flex items-center"
            >
              <div>
                <p className="text-xl font-bold text-[#70E000] mb-2">
                  That lost revenue adds up fast.
                </p>
                <p className="text-gray-400 text-sm">
                  Every missed call or delayed response is a job that went to a competitor.
                </p>
              </div>
            </motion.div>
          </div>
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Reframe</span>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
                Winning auto glass shops don't rely on{" "}
                <span className="relative inline-block">
                  <span className="text-gray-500 line-through">staff availability</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500/50" />
                </span>
              </h2>
              
              <div className="flex items-center justify-center gap-4 my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#70E000]/50 to-transparent flex-1 max-w-xs" />
                <ArrowRight className="w-5 h-5 text-[#70E000]" />
                <div className="h-px bg-gradient-to-r from-transparent via-[#70E000]/50 to-transparent flex-1 max-w-xs" />
              </div>

              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6">
                <p className="text-xl lg:text-2xl font-bold leading-tight">
                  They rely on{" "}
                  <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">systems that move faster</span>{" "}
                  than competitors.
                </p>
              </div>
            </div>
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Attract & Build Trust</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 tracking-tight">
              AI Ads + <span className="text-[#70E000]">OGC</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
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
                  <h3 className="text-lg font-bold text-white mb-1">AI Ad Engine</h3>
                  <p className="text-gray-400 text-sm">Emergency-ready advertising</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Targets emergency and insurance-driven searches",
                  "Optimized for immediate response and scheduling"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#70E000]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#70E000]" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              {/* Visual Element */}
              <div className="mt-6 p-4 bg-zinc-950/50 border border-zinc-800 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Wrench className="w-6 h-6 text-[#70E000]" />
                  <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#70E000] to-[#5ac000] rounded-full" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center">Emergency-optimized campaigns with instant AI response</p>
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
                  <Shield className="w-5 h-5 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">OGC: Trust at Speed</h3>
                  <p className="text-gray-400 text-sm">Owner-generated credibility</p>
                </div>
              </div>

              <p className="text-gray-300 mb-3 text-sm font-medium">Seeing the owner explain:</p>

              <div className="space-y-2 mb-4">
                {[
                  { icon: Shield, text: "Insurance process" },
                  { icon: Clock, text: "Replacement timelines" },
                  { icon: Wrench, text: "Mobile service options" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 bg-black/30 rounded-lg p-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#70E000]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-[#70E000]" />
                    </div>
                    <p className="text-gray-300 text-sm pt-1">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-black/40 border border-[#70E000]/20 rounded-lg">
                <p className="text-xs text-[#70E000] font-medium text-center italic">
                  ✓ Builds trust instantly — before contact
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PART 2: AI SEO Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <div className="w-5 h-5 rounded-full bg-[#70E000] flex items-center justify-center text-black text-[10px] font-bold">2</div>
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Dominate Organic Search</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 tracking-tight">
              AI SEO — <span className="text-[#70E000]">Emergency Authority</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Your shop becomes the first answer when glass breaks
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            {[
              { 
                icon: TrendingUp, 
                title: "Top Ranking", 
                description: 'The #1 name for "windshield replacement near me"',
                gradient: "from-[#70E000]/20 to-[#70E000]/10"
              },
              { 
                icon: Users, 
                title: "Trusted Authority", 
                description: "The option people see repeatedly and remember",
                gradient: "from-[#70E000]/15 to-[#70E000]/5"
              },
              { 
                icon: ArrowUpRight, 
                title: "Free Demand", 
                description: "Organic visibility turns urgency into inbound leads",
                gradient: "from-[#70E000]/10 to-transparent"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} border border-[#70E000]/20 rounded-xl p-5 hover:scale-105 transition-all`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#70E000]" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Visual Demonstration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Google Search Mockup */}
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              {/* Search Bar */}
              <div className="bg-white border-b border-gray-100 px-6 py-4">
                <div className="flex items-center gap-4 max-w-2xl mx-auto">
                  {/* Google Logo - Smaller */}
                  <svg viewBox="0 0 272 92" className="h-5 flex-shrink-0">
                    <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                    <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                    <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                    <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                    <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
                  </svg>
                  
                  {/* Search Input - Compact */}
                  <AutoTypingSearch />
                </div>
              </div>

              {/* Search Results with Animation */}
              <div className="bg-gray-50 px-6 py-6 relative">
                <p className="text-[10px] text-gray-500 mb-4 px-1">About 2,450,000 results (0.48 seconds)</p>

                {/* Animated Results Container */}
                <motion.div 
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  {/* Result #1 - YOUR SHOP (Animates from position 3 to 1) */}
                  <motion.div
                    variants={{
                      initial: { 
                        y: 260, // Start at position 3 (2 cards down, each ~130px)
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
                    className="bg-white rounded-lg border-2 border-[#70E000] shadow-sm p-4 mb-3 relative z-30"
                  >
                    {/* #1 Badge with animation */}
                    <motion.div 
                      variants={{
                        initial: { scale: 0, rotate: -180 },
                        animate: { 
                          scale: 1, 
                          rotate: 0,
                          transition: {
                            duration: 0.5,
                            delay: 2,
                            ease: "easeOut"
                          }
                        }
                      }}
                      className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#70E000] flex items-center justify-center shadow-md"
                    >
                      <span className="text-black text-[10px] font-bold">1</span>
                    </motion.div>

                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center flex-shrink-0">
                          <Shield className="w-3 h-3 text-black" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-xs font-medium text-gray-900">Your Auto Glass Shop</h3>
                            <span className="px-1.5 py-0.5 bg-[#70E000] text-black text-[8px] font-bold rounded">Ad</span>
                          </div>
                          <p className="text-[10px] text-green-700 truncate">www.yourautoglassshop.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5 flex-shrink-0">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-2.5 h-2.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                        <span className="text-[10px] text-gray-600 ml-1">5.0</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-sm text-blue-700 font-normal mb-1 hover:underline cursor-pointer">
                      #1 Windshield Replacement & Repair - Mobile Service Available
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed mb-3">
                      Fast, professional windshield replacement. Insurance claims handled. Mobile service 24/7. Same-day appointments available.
                    </p>
                    
                    {/* Sitelinks - Compact */}
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        Book Online
                      </a>
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Phone className="w-2.5 h-2.5" />
                        (555) 123-4567
                      </a>
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Shield className="w-2.5 h-2.5" />
                        Insurance
                      </a>
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Wrench className="w-2.5 h-2.5" />
                        Mobile Service
                      </a>
                    </div>
                  </motion.div>

                  {/* Result #2 - Competitor (Animates from position 1 to 2) */}
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
                        <h3 className="text-[10px] text-gray-600 truncate">Competitor Auto Glass</h3>
                        <p className="text-[9px] text-gray-500 truncate">www.competitor.com</p>
                      </div>
                    </div>
                    <h4 className="text-xs text-blue-700 mb-1">Windshield Replacement Services - Quality Auto Glass</h4>
                    <p className="text-[10px] text-gray-600 line-clamp-2">Professional windshield replacement and repair services. Contact us today for a free quote...</p>
                  </motion.div>

                  {/* Result #3 - Another Competitor (Animates from position 2 to 3) */}
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
                        <h3 className="text-[10px] text-gray-600 truncate">Another Glass Shop</h3>
                        <p className="text-[9px] text-gray-500 truncate">www.anotherglass.com</p>
                      </div>
                    </div>
                    <h4 className="text-xs text-blue-700 mb-1">Auto Glass Repair & Replacement Near You</h4>
                    <p className="text-[10px] text-gray-600 line-clamp-2">We offer auto glass services for all vehicles. Free estimates available...</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Bottom Message with delayed animation */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="bg-gradient-to-r from-[#70E000]/10 to-transparent border-t-2 border-[#70E000] px-6 py-3"
              >
                <p className="text-xs text-gray-800">
                  <span className="font-semibold text-[#70E000]">Your shop dominates #1</span> — capturing emergency searches instantly
                </p>
              </motion.div>
            </div>
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Convert & Confirm</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              CRM + AI + <span className="text-[#70E000]">Human Confirmation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: MessageSquare,
                title: "AI texts new leads instantly",
                description: "Immediate response within seconds of inquiry",
                color: "from-[#70E000]/10 to-[#70E000]/5"
              },
              {
                icon: Phone,
                title: "Humans confirm installs and insurance details",
                description: "Personal touch where it matters most",
                color: "from-[#70E000]/15 to-[#70E000]/10"
              },
              {
                icon: Check,
                title: "No job slips through the cracks",
                description: "Complete tracking and follow-up automation",
                color: "from-[#70E000]/20 to-[#70E000]/15"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} border border-[#70E000]/20 rounded-xl p-6 hover:scale-105 transition-transform`}
              >
                <div className="w-11 h-11 rounded-lg bg-[#70E000]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#70E000]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INEVITABILITY Section */}
      <section className="py-24 px-6 bg-black">
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

            <h2 className="text-[30px] md:text-[36px] font-bold mb-8 leading-tight">
              When response time approaches <span className="text-[#70E000]">zero</span>,
              <br />
              lost installs approach <span className="text-[#70E000]">zero</span>.
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-2xl p-12 mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-2xl font-bold text-[#70E000] mb-2">
                    <AnimatedCounter end={3} />x
                  </p>
                  <p className="text-gray-400">Faster Response Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#70E000] mb-2">
                    <AnimatedCounter end={40} suffix="%" />
                  </p>
                  <p className="text-gray-400">More Installs Booked</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#70E000] mb-2">
                    <AnimatedCounter end={24} />/7
                  </p>
                  <p className="text-gray-400">Always Available</p>
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