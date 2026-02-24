import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Wrench, Star, Video, FileText, Eye } from "lucide-react";
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

// Auto-Typing Search Component
function AutoTypingSearch() {
  const [text, setText] = useState("");
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const fullText = "Auto Detailing Near Me";

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

// Auto Styling Metrics Data
const autoStylingMetrics = [
  { icon: TrendingUp, metric: "3.5x", description: "Increase in qualified consultation requests" },
  { icon: Clock, metric: "<5min", description: "Average response time to premium inquiries" },
  { icon: Users, metric: "65%", description: "Higher-quality lead conversations" },
  { icon: Shield, metric: "24/7", description: "AI-powered lead qualification" },
  { icon: Phone, metric: "92%", description: "Show rate for qualified consultations" },
  { icon: BarChart3, metric: "75%", description: "Increase in organic search visibility" },
  { icon: Target, metric: "$180K", description: "Average annual revenue increase" },
  { icon: Award, metric: "#1", description: "Local authority in premium auto styling" },
  { icon: MessageSquare, metric: "100%", description: "Leads captured and followed up" },
  { icon: Zap, metric: "6x", description: "ROI on marketing investment" },
  { icon: Activity, metric: "90%", description: "Client satisfaction rating" },
  { icon: ArrowUpRight, metric: "2.8x", description: "More premium installs monthly" },
];

export function AutoStyling() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Auto Styling & Restyling Shops</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Become the Authority Shop in Your Market —
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                While Qualified Leads Show Up Daily
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Leadgentic builds AI-powered growth systems for premium auto styling shops that generate paid leads, organic leads, and booked consultations — all captured, qualified, and followed up automatically.
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
                SEE CASE STUDIES
              </motion.button>
            </div>
          </motion.div>

          {/* Auto Styling Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-auto-styling">
              {/* First set */}
              {autoStylingMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {autoStylingMetrics.map((metric, index) => (
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
            @keyframes scroll-auto-styling {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-auto-styling {
              animation: scroll-auto-styling 8s linear infinite;
            }
            
            @media (max-width: 767px) {
              .animate-scroll-auto-styling {
                animation: scroll-auto-styling 5s linear infinite;
              }
            }
            
            .animate-scroll-auto-styling:hover {
              animation-play-state: paused;
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
              You didn't open a <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">premium shop</span> to:
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-base font-semibold text-white mb-4">The Problems You Face:</h3>
              <ul className="space-y-3">
                {[
                  "Compete on price",
                  "Answer the same questions over and over",
                  "Wonder where next month's installs are coming from"
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
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-base font-semibold text-white mb-4">Yet most shops rely on:</h3>
              <ul className="space-y-3">
                {[
                  "Inconsistent ads",
                  "Word of mouth",
                  "Hope-based follow-up"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 text-center"
          >
            <p className="text-xl font-bold text-white mb-3">
              Some weeks are great. Others feel uncomfortably quiet.
            </p>
            <p className="text-gray-300 text-base mb-2">That isn't a demand problem.</p>
            <p className="text-2xl font-bold text-[#70E000]">It's a system problem.</p>
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">How Top Shops Actually Win</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              The most dominant shops in every market share{" "}
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">three things</span>:
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Eye, title: "They're visible everywhere", description: "(ads + organic search)" },
                { icon: Shield, title: "They're trusted before contact", description: "(authority content)" },
                { icon: Target, title: "They never lose leads after they come in", description: "(AI + CRM follow-up)" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#70E000]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6">
              <p className="text-xl lg:text-2xl font-bold leading-tight">
                Leadgentic installs <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">all three</span> — as one system.
              </p>
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Where Momentum Starts</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 tracking-tight">
              AI-Powered Ads That Drive <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Qualified Leads</span>
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
                  <h3 className="text-lg font-bold text-white mb-1">AI Ad Engine</h3>
                  <p className="text-gray-400 text-sm">Google + Meta campaigns</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Campaigns optimized for qualified actions, not clicks",
                  "AI testing hundreds of creative and messaging variations",
                  "Losers killed fast, winners scaled automatically"
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
                  <Video className="w-5 h-5 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">OGC: The Secret Sauce</h3>
                  <p className="text-gray-400 text-sm">Owner-Generated Content</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm font-medium">
                This is what separates you from every competitor. We don't run generic ads. We use <span className="text-[#70E000] font-bold">you</span>.
              </p>

              <div className="space-y-2">
                {[
                  { icon: FileText, text: "We script authority-based talking points" },
                  { icon: Video, text: "You film short, natural videos (no acting required)" },
                  { icon: Sparkles, text: "We edit them for clarity, authority, and trust" },
                  { icon: Zap, text: "Our AI ad system launches them into the market" }
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

          {/* The Celebrity Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center"
          >
            <Star className="w-12 h-12 text-[#70E000] mx-auto mb-4" />
            <p className="text-xl font-bold text-white mb-3">
              This creates what clients describe as a{" "}
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                "local celebrity effect"
              </span>
            </p>
            <p className="text-gray-300 text-base">
              Prospects feel like they already know you — before they reach out.
            </p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
          >
            <h3 className="text-base font-bold text-white mb-4">What That Means in Practice:</h3>
            <p className="text-gray-300 text-sm mb-4">
              In similar markets, premium auto styling clients often experience:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Daily inbound inquiries from serious vehicle owners",
                "Higher-quality conversations",
                "Less time wasted on price shoppers"
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
              (Exact volume depends on market size, ad spend, and capacity.)
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The "Free Leads" Machine</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              AI SEO — <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Build Inevitability</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Ads create speed. SEO creates <span className="text-[#70E000] font-semibold">inevitability</span>.
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
                  "AI-driven content built around buyer-intent searches",
                  "Local authority pages that dominate map and organic results",
                  "OGC content repurposed into blogs, FAQs, and location pages",
                  "Continuous optimization based on search behavior"
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
              <h3 className="text-base font-bold text-white mb-4">Over time, your shop becomes:</h3>
              <div className="space-y-3">
                {[
                  { icon: Eye, text: "The name people see repeatedly" },
                  { icon: Shield, text: "The brand they trust" },
                  { icon: Award, text: "The default choice" }
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
              Clients often describe this phase as:
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
              "It feels like free leads — they just keep coming."
            </p>
          </motion.div>

          {/* Google Search Ranking Animation - Visual Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-8"
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
                  <AutoTypingSearch />
                </div>
              </div>

              {/* Search Results with Animation */}
              <div className="bg-gray-50 px-6 py-6 relative">
                <p className="text-[10px] text-gray-500 mb-4 px-1">About 1,850,000 results (0.52 seconds)</p>

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
                        <h3 className="text-xs font-semibold text-gray-900 truncate">Elite Auto Styling</h3>
                        <p className="text-[10px] text-gray-600 truncate">www.eliteautostyling.com</p>
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
                      Premium Auto Detailing & Ceramic Coating - Elite Auto Styling
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed mb-3">
                      Expert auto detailing, ceramic coating & paint protection. Premium service, lifetime warranties. Book your consultation today.
                    </p>
                    
                    {/* Sitelinks */}
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        Book Consultation
                      </a>
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Phone className="w-2.5 h-2.5" />
                        (555) 789-0123
                      </a>
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Shield className="w-2.5 h-2.5" />
                        Ceramic Coating
                      </a>
                      <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Detailing Services
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
                        <h3 className="text-[10px] text-gray-600 truncate">Competitor Detailing</h3>
                        <p className="text-[9px] text-gray-500 truncate">www.competitor-detail.com</p>
                      </div>
                    </div>
                    <h4 className="text-xs text-blue-700 mb-1">Auto Detailing Services Near You</h4>
                    <p className="text-[10px] text-gray-600 line-clamp-2">Professional auto detailing services. Contact us for pricing...</p>
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
                        <h3 className="text-[10px] text-gray-600 truncate">Budget Auto Care</h3>
                        <p className="text-[9px] text-gray-500 truncate">www.budgetauto.com</p>
                      </div>
                    </div>
                    <h4 className="text-xs text-blue-700 mb-1">Affordable Car Detailing Near You</h4>
                    <p className="text-[10px] text-gray-600 line-clamp-2">We offer budget-friendly detailing packages...</p>
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
                  <span className="font-semibold text-[#70E000]">Your shop dominates #1</span> — capturing premium buyers actively searching for auto detailing
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Where Most Agencies Fall Apart</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              World-Class CRM + AI + <br className="md:hidden" /><span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Human Follow-Up</span>
            </h2>
            <p className="text-base text-gray-400">
              And where Leadgentic separates completely.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* AI Follow-Up */}
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
                <h3 className="text-lg font-bold text-white">AI Follow-Up</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Instant responses to new inquiries",
                  "Automated texts, emails, and reminders",
                  "Smart re-engagement for cold leads"
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

            {/* Human Follow-Up */}
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
                <h3 className="text-lg font-bold text-white">Human Follow-Up</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Real people vet and qualify leads",
                  "Lead quality feedback loops into ads and SEO",
                  "Your team only talks to serious prospects"
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Phone, text: "No missed calls" },
                { icon: MessageSquare, text: "No forgotten leads" },
                { icon: TrendingUp, text: "No money leaking out the back door" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#70E000]/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#70E000]" />
                  </div>
                  <p className="text-white font-bold text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE RESULTING EXPERIENCE Section */}
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
              <Sparkles className="w-4 h-4 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Resulting Experience</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              At this point, shops describe a{" "}
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">shift</span>:
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: TrendingUp, title: "Leads feel consistent", color: "from-[#70E000]/10 to-[#70E000]/5" },
              { icon: MessageSquare, title: "Conversations are easier", color: "from-[#70E000]/15 to-[#70E000]/10" },
              { icon: Calendar, title: "Calendars fill predictably", color: "from-[#70E000]/20 to-[#70E000]/15" },
              { icon: Shield, title: "Growth stops feeling fragile", color: "from-[#70E000]/25 to-[#70E000]/20" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} border border-[#70E000]/20 rounded-xl p-6 flex items-center gap-4`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#70E000]" />
                </div>
                <p className="text-white font-bold text-base">{item.title}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center"
          >
            <p className="text-xl font-bold text-gray-400 mb-2">
              You're no longer{" "}
              <span className="line-through text-gray-600">"running marketing"</span>
            </p>
            <ArrowRight className="w-6 h-6 text-[#70E000] mx-auto my-4" />
            <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
              You're operating a revenue system.
            </p>
          </motion.div>
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

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 leading-tight">
              <span className="block md:inline">
                When <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">AI-driven ads</span>,{" "}
                <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">authority SEO</span>, and{" "}
                <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">disciplined follow-up</span>
              </span>{" "}
              <span className="block md:inline">are combined into one system,</span>
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-2xl p-8 mb-12">
              <p className="text-xl lg:text-2xl font-bold text-white">
                Growth stops being a <span className="line-through text-gray-600">guessing game</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl md:text-5xl font-bold text-[#70E000] mb-2">
                  <AnimatedCounter end={3} suffix="x" />
                </p>
                <p className="text-gray-400">More Qualified Leads</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-bold text-[#70E000] mb-2">
                  <AnimatedCounter end={92} suffix="%" />
                </p>
                <p className="text-gray-400">Show Rate for Consultations</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-bold text-[#70E000] mb-2">
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