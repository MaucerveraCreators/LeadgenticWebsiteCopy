import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Video, FileText, Eye, Building2, Rocket, TrendingDown, DollarSign, Star, MapPin, Globe, Wrench, Crown } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";

// Import Royal Auto Finishes images
import royalAutoImg1 from "@/assets/a1ab0e9c2e1fedef0b96a8f0e97fef16aa380031.png";
import royalAutoImg2 from "@/assets/fa24408136164679ae82ccdc7582492a204b36d4.png";

// Royal Auto Finishes carousel images
const royalAutoImages = [
  royalAutoImg1,
  royalAutoImg2,
  royalAutoImg1,
  royalAutoImg2,
  royalAutoImg1,
  royalAutoImg2,
  royalAutoImg1,
  royalAutoImg2,
];

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

// Royal Auto Finishes Case Study Metrics Data
const royalAutoMetrics = [
  { icon: Users, metric: "3-5/Day", description: "Qualified leads consistently" },
  { icon: TrendingUp, metric: "2 Months", description: "Back-to-back records broken" },
  { icon: Star, metric: "Quality", description: "Dramatically improved leads" },
  { icon: Building2, metric: "2x Space", description: "Larger facility filled" },
  { icon: Clock, metric: "2-3 Months", description: "Timeline to record months" },
  { icon: Target, metric: "Ready", description: "Leads ready to book" },
  { icon: Shield, metric: "Easy Sales", description: "Fewer tire kickers" },
  { icon: Sparkles, metric: "Full Schedule", description: "Bays consistently packed" },
  { icon: Wrench, metric: "5 Years", description: "In business before Leadgentic" },
  { icon: Crown, metric: "Kick Ass", description: "Eugene's one-word review" },
  { icon: Rocket, metric: "Off Plate", description: "Marketing handled for him" },
  { icon: Award, metric: "Delivery", description: "Promises actually kept" },
];

export function RoyalAutoFinishesCaseStudy() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Case Study · Autostyling · Paint & Refinishing · United States</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                From an Underfilled Schedule to
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Back-to-Back Record Months
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              How Royal Auto Finishes Filled a Bigger Shop With Better Leads Using Leadgentic
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

          {/* Royal Auto Finishes Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-royalauto">
              {/* First set */}
              {royalAutoMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {royalAutoMetrics.map((metric, index) => (
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
            @keyframes scroll-royalauto {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-royalauto {
              animation: scroll-royalauto 8s linear infinite;
            }
            
            @media (max-width: 767px) {
              .animate-scroll-royalauto {
                animation: scroll-royalauto 5s linear infinite;
              }
            }
            
            .animate-scroll-royalauto:hover {
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
                  { label: "Industry", value: "Autostyling / Paint & Refinishing" },
                  { label: "Market", value: "United States" },
                  { label: "Owner", value: "Eugene Shupak" },
                  { label: "Years in Business", value: "5" },
                  { label: "Time With Leadgentic", value: "~2-3 months" },
                  { label: "Core Outcome", value: "3-5 qualified leads per day, improved lead quality, and two consecutive record-breaking months after moving into a larger facility" }
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
                  "CRM (AI + Human Follow-Up)"
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
              Growing the Shop —{" "}
              <span className="text-[#70E000]">But Not the Demand</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Royal Auto Finishes wasn't failing.<br />
              In fact, the shop had been operating consistently for years.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <p className="text-base text-white font-semibold mb-4">But consistency wasn't enough.</p>
                <p className="text-base text-gray-400 leading-relaxed mb-6">
                  Eugene had just moved into a much larger space — nearly double the size — and with that came pressure. More overhead. More bays to fill. More urgency to make sure the schedule stayed packed.
                </p>
                <blockquote className="text-xl italic text-white">
                  "We stayed kind of consistently working, but it wasn't enough to fill the schedule."
                </blockquote>
              </div>

              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 flex items-center justify-center">
                <p className="text-base text-gray-400">
                  The work existed — but not at the level the new shop demanded.
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
              What He Thought the Problem Was — <span className="text-[#70E000]">And What It Actually Was</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Like many shop owners, Eugene had tried marketing before.
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
                  <h3 className="text-lg font-bold text-white mb-1">The Pattern</h3>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Multiple companies",
                  "Plenty of promises",
                  "Very little delivery"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="text-base italic text-white border-l-2 border-red-500 pl-4">
                "I've been working with a lot of other marketing companies before that just would give me a lot of promises and wouldn't really deliver."
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
                The issue wasn't effort.<br />
                <span className="text-white">It was that none of the previous approaches created:</span>
              </p>

              <div className="space-y-2 mb-4">
                {[
                  "Consistent inbound demand",
                  "High-quality leads",
                  "A system that ran without constant oversight"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-white font-semibold">
                Marketing felt like another thing on his plate — not a solution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Royal Auto Finishes Image Carousel */}
      <section className="py-6 bg-black relative">
        <div className="relative overflow-hidden">
          {/* Gradient Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex gap-6 animate-scroll-images px-6">
            {/* First set of images */}
            {royalAutoImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
                <img 
                  src={image} 
                  alt={`Royal Auto Finishes Image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {royalAutoImages.map((image, index) => (
              <div key={index + 8} className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
                <img 
                  src={image} 
                  alt={`Royal Auto Finishes Image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
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
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Shield className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Decision Moment</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              Needing the Shop to{" "}
              <span className="text-[#70E000]">Stay Full</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              After moving into the bigger facility, something had to change.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <p className="text-base text-gray-400 mb-4 leading-relaxed">
                  The goal wasn't hype or experimentation — it was reliability.
                </p>
                <h3 className="text-base font-semibold text-white mb-4">Eugene needed:</h3>
                <ul className="space-y-3">
                  {[
                    "A full schedule",
                    "Fewer tire-kickers",
                    "Leads that were ready to book"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 flex items-center justify-center">
                <p className="text-2xl font-bold text-[#70E000]">
                  That's when Leadgentic came into the picture.
                </p>
              </div>
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
                  <h3 className="text-xl font-bold text-white mb-2">Owner Generated Content (OGC): Trust Before the Call</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Rather than anonymous ads, Eugene became visible.
                  </p>
                  <p className="text-white font-semibold mb-3">Prospects saw:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "The owner",
                      "The quality of work",
                      "A real business behind the brand"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#70E000] font-semibold">
                    This immediately shifted conversations.
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
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Ads: Fewer Calls, Better Buyers</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Lead volume increased — but more importantly, lead quality improved.
                  </p>
                  <blockquote className="text-base italic text-[#70E000] border-l-2 border-[#70E000] pl-4 mb-4">
                    "I don't get as many tire kickers… it's a lot easier for me to sell on the phone."
                  </blockquote>
                  <p className="text-gray-400">
                    Most leads arrived ready to book, requiring very little persuasion.
                  </p>
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
                  <h3 className="text-xl font-bold text-white mb-2">Funnels & Qualification: Protecting Time</h3>
                  <p className="text-white font-semibold mb-3">With structured funnels in place:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Expectations were set before the call",
                      "Low-intent shoppers were filtered out",
                      "Sales conversations became simpler"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#70E000] font-semibold">
                    Eugene estimated receiving 3–5 solid leads per day — consistently.
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
                  <h3 className="text-xl font-bold text-white mb-2">CRM + Follow-Up: Marketing Off the Owner's Plate</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Perhaps the biggest shift was mental.
                  </p>
                  <blockquote className="text-base italic text-white border-l-2 border-[#70E000] pl-4 mb-4">
                    "It's nice to have someone that takes the marketing off your plate and takes care of it for you."
                  </blockquote>
                  <div className="space-y-2">
                    {[
                      "No more babysitting campaigns",
                      "No more guessing what was working"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
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
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]">What Changed</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              The results showed up quickly.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { icon: Calendar, label: "The schedule filled" },
                { icon: Activity, label: "The shop stayed busy" },
                { icon: TrendingUp, label: "Two consecutive months broke internal revenue records" }
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

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-12 max-w-2xl mx-auto mb-8">
              <blockquote className="text-2xl font-bold text-[#70E000] leading-relaxed">
                "We've been hitting the last two months — record months."
              </blockquote>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-base text-white font-semibold">
                For the first time since expanding, the space felt justified.
              </p>
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
                  src="https://www.youtube.com/embed/GEx4nxRqdbs"
                  title="Royal Auto Finishes Case Study Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
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

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Daily Leads", value: "3-5 qualified leads per day" },
              { icon: Star, label: "Lead Quality", value: "Dramatically improved lead quality" },
              { icon: Phone, label: "Sales Ease", value: "Easier sales conversations" },
              { icon: TrendingUp, label: "Revenue", value: "Back-to-back record-breaking months" },
              { icon: Building2, label: "Shop Capacity", value: "Confidence that the larger shop would stay full" }
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
              Growth Without{" "}
              <span className="text-[#70E000]">Guesswork</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Today, Eugene operates with:
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
              {[
                "A full schedule",
                "Less stress around marketing",
                "Confidence in continued growth",
                "A partner handling demand generation"
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
              <p className="text-base text-gray-400 mb-4 leading-relaxed">
                In one word, he summed up the experience as:
              </p>
              <p className="text-3xl font-bold text-[#70E000] text-[24px]">
                "Kick ass."
              </p>
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
                Growth didn't come from more promises.
              </p>
              <p className="text-2xl font-bold text-[#70E000] leading-relaxed">
                It came from execution, consistency, and a system that actually delivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IN EUGENE'S WORDS Section */}
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">In Eugene's Words</span>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 relative">
              {/* Quote marks */}
              <div className="absolute top-6 left-6 text-6xl text-[#70E000]/20 font-serif">"</div>
              
              <blockquote className="relative z-10 text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 italic">
                You guys deliver. It's really easy to work with you — you just take care of business.
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-base font-semibold text-[#70E000]">Eugene Shupak</p>
                  <p className="text-sm text-gray-400">Owner, Royal Auto Finishes · 5 Years in Business</p>
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