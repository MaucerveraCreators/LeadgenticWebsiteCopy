import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Video, FileText, Eye, Building2, Rocket, TrendingDown, DollarSign, Star, MapPin, Globe } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";

// Import carousel images
import carouselImg1 from "@/assets/e862cb9cb072decc7731eb89b44c543a2f613d24.png";
import carouselImg2 from "@/assets/dd71c1f3f71b85201dae3cda695ad3389873ecee.png";
import carouselImg3 from "@/assets/268e63e1db6a57fced570ef696329bca6b301be4.png";
import carouselImg4 from "@/assets/1769a11102e9e0368ff6c620d23018fbfd6b8e20.png";
import carouselImg5 from "@/assets/3d722390414be6311e68a987dab6919b3e57db05.png";
import carouselImg6 from "@/assets/390b348a1a631a68df6c0ed9a8a7339ec016fa16.png";
import carouselImg7 from "@/assets/1bde31db5abece3123a32a4ae475c3009fc53d05.png";
import carouselImg8 from "@/assets/96a3889ff6c61caaf85a49d4dd2085a1b854b27a.png";
import carouselImg9 from "@/assets/5a855bdef8119b426356d29c844269e06b5fe4ff.png";

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

// Naples Ceramic Case Study Metrics Data
const naplesCeramicMetrics = [
  { icon: DollarSign, metric: "$30K", description: "Weekly revenue achieved" },
  { icon: TrendingUp, metric: "5x", description: "Weekly revenue growth" },
  { icon: Globe, metric: "Dominant", description: "Google local visibility" },
  { icon: Target, metric: "Qualified", description: "Lead quality improved" },
  { icon: Activity, metric: "1000+", description: "Ceramic coatings per year" },
  { icon: Building2, metric: "Full-Scale", description: "Detail center operation" },
  { icon: BarChart3, metric: "SEO Win", description: "From invisible to visible" },
  { icon: Clock, metric: "7-8 Months", description: "Timeline to transformation" },
  { icon: Shield, metric: "No Waste", description: "Eliminated wasted ad spend" },
  { icon: Sparkles, metric: "Website", description: "Rebuilt to convert" },
  { icon: Rocket, metric: "Immediate", description: "Traction from day one" },
  { icon: Users, metric: "Partnership", description: "Responsive & adaptive" },
];

export function NaplesCeramicCaseStudy() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Case Study · Autostyling · Ceramic Coating, PPF & Tint · Naples, Florida</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                From Wasted Ad Spend<br className="md:hidden" /> to
              </span>
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                {" "}$30,000 Weeks —<br className="md:hidden" /> by Owning Google Locally
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              How Naples Ceramic Coating Turned Visibility Into Predictable Revenue With Leadgentic
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

          {/* Naples Ceramic Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-naples">
              {/* First set */}
              {naplesCeramicMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {naplesCeramicMetrics.map((metric, index) => (
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
            @keyframes scroll-naples {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-naples {
              animation: scroll-naples 8s linear infinite;
            }
            
            @media (max-width: 767px) {
              .animate-scroll-naples {
                animation: scroll-naples 5s linear infinite;
              }
            }
            
            .animate-scroll-naples:hover {
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
                  { label: "Industry", value: "Autostyling (Ceramic Coating, PPF, Window Tint)" },
                  { label: "Market", value: "Naples, Florida" },
                  { label: "Owner", value: "Mark Messina (DuraCoating Technology)" },
                  { label: "Scale", value: "1,000+ ceramic coatings per year on cars, boats, planes, trucks" },
                  { label: "Time With Leadgentic", value: "~7-8 months" },
                  { label: "Core Outcome", value: "Growth from ~$7-8K/week to ~$30K/week, driven by improved Google visibility and qualified leads" }
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
                  "Website Rebuild",
                  "AI SEO",
                  "Google Presence",
                  "CRM & Speed-to-Lead",
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
              Being the Best —{" "}
              <span className="text-[#70E000]">and Still Invisible</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Before partnering with Leadgentic, Naples Ceramic Coating had a paradox problem.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-left">
                <ul className="space-y-3 mb-6">
                  {[
                    "They weren't new.",
                    "They weren't inexperienced.",
                    "They weren't small."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gray-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-base text-gray-400 leading-relaxed">
                  Mark Messina runs DuraCoating Technology — a manufacturer of detailing products — and operates a full-scale detail center in Naples that now performs over 1,000 ceramic coatings per year on cars, boats, planes, trucks, and more.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 text-left">
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  Yet despite being excellent at what they do, the business struggled with one fundamental issue:
                </p>
                <blockquote className="text-2xl font-bold text-[#70E000] mb-4">
                  "You can be the best in the world at it, but if you can't get business, it's worthless."
                </blockquote>
                <p className="text-base text-white font-semibold">
                  Visibility was the bottleneck.
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
              What They Thought the Problem Was — <span className="text-[#70E000]">And What It Actually Was</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Like most businesses, the assumption was simple: "We just need more ads."<br />
              <span className="text-white font-semibold">So they spent.</span>
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
                  <h3 className="text-lg font-bold text-white mb-1">What They Tried</h3>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm">They spent on:</p>

              <div className="space-y-3 mb-6">
                {[
                  "Google",
                  "Facebook",
                  "Instagram"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gray-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-white font-semibold mb-3 text-sm">Week after week.</p>

              <blockquote className="text-base italic text-red-400 border-l-2 border-red-500 pl-4">
                "We were spending eight, nine hundred, a thousand dollars a week and getting literally no leads at all."
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
                The real issue wasn't budget or effort.<br />
                <span className="text-white">It was that:</span>
              </p>

              <div className="space-y-2 mb-4">
                {[
                  "Their website wasn't converting",
                  "Their Google presence was almost nonexistent",
                  "Their meta ads had no clear message, lacked charisma, and didn't inspire",
                  "Only 2 out of 10 people searching locally were even seeing them",
                  "Money was being spent without infrastructure"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#70E000] font-bold text-base">
                The ads weren't broken — the foundation was.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Naples Ceramic Image Carousel */}
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
                src={carouselImg1} 
                alt="Naples Ceramic Coating - Professional Paint Correction Work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg2} 
                alt="Naples Ceramic Coating - PPF Installation on Luxury Vehicle" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg3} 
                alt="Naples Ceramic Coating - Expert Detailing Service" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg1} 
                alt="Naples Ceramic Coating - Professional Paint Correction Work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg2} 
                alt="Naples Ceramic Coating - PPF Installation on Luxury Vehicle" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={carouselImg3} 
                alt="Naples Ceramic Coating - Expert Detailing Service" 
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
              <Rocket className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Decision Moment</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              Needing a Real{" "}
              <span className="text-[#70E000]">Launch Locally</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              The goal wasn't just "more ads."<br />
              <span className="text-white font-semibold">It was to launch Naples Ceramic Coating locally as the authority for ceramic coatings, PPF, and window tint.</span>
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-base font-semibold text-white mb-4">Mark needed:</h3>
              <ul className="space-y-3">
                {[
                  "Google visibility",
                  "OGC content that converted",
                  "Qualified Facebook & Instagram Leads",
                  "A rebuilt website",
                  "Content that explained the value",
                  "Leads that actually converted"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-2xl font-bold text-[#70E000]">
                That's when Leadgentic came in.
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
            {/* Website Rebuild */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Website Rebuild: Turning Traffic Into Customers</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    One of the first changes was rebuilding the website.
                  </p>
                  <p className="text-white font-semibold mb-3">The new site:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Clearly explained services",
                      "Supported local SEO",
                      "Converted traffic instead of confusing it"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#70E000] font-semibold text-base">
                    This became the hub for everything else.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* AI SEO & Google Presence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI SEO & Google Presence: From Invisible to Dominant</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    The most dramatic shift came from Google.
                  </p>
                  <blockquote className="text-base italic text-white border-l-2 border-[#70E000] pl-4 mb-4">
                    "We really had none [Google presence]. Only three out of ten people were seeing us… even though we were spending a ton of money."
                  </blockquote>
                  <p className="text-white font-semibold mb-3">Leadgentic rebuilt:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Local listings",
                      "On-site SEO",
                      "Content aligned to search intent"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#70E000] font-semibold">
                    Visibility increased — and leads followed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* OGC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Owner Generated Content (OGC): Trust at Scale</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Leadgentic also introduced ongoing content and video.
                  </p>
                  <blockquote className="text-base italic text-[#70E000] border-l-2 border-[#70E000] pl-4 mb-4">
                    "You guys make videos and do new content — that's really unique."
                  </blockquote>
                  <p className="text-gray-400 mb-3">Instead of anonymous ads, prospects saw:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Real people",
                      "Real expertise",
                      "A real operation"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#70E000] font-semibold">
                    Trust formed before the call and displayed to perfect customers on Facebook & Instagram.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* AI Ads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Ads: Supporting Demand, Not Wasting Spend</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    With the foundation in place, ads began working with the system — not against it.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "No more wasted spend",
                      "No more guessing"
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

            {/* CRM & Speed-to-Lead */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">CRM & Speed-to-Lead: What Actually Converts</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Mark was blunt about what works:
                  </p>
                  <blockquote className="text-base italic text-white border-l-2 border-[#70E000] pl-4 mb-4">
                    "Emails are literally 100% a waste… text message and phone calls definitely do work."
                  </blockquote>
                  <p className="text-white font-semibold mb-3">The system emphasized:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Immediate texts",
                      "Fast calls",
                      "Real conversations"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#70E000] font-semibold">
                    Leads converted because follow-up was immediate.
                  </p>
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
              The change wasn't subtle.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12">
                <p className="text-base text-gray-400 mb-4">Revenue moved from:</p>
                <p className="text-2xl font-bold text-white mb-2">~$7–8K per week</p>
                <p className="text-3xl font-bold text-[#70E000] mb-4 text-[24px]">→ ~$30K per week</p>
                <p className="text-base text-white font-semibold">And it wasn't fragile.</p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <blockquote className="text-xl italic text-white leading-relaxed">
                  "Once we hired you guys, it immediately started to click and we immediately started to gain traction."
                </blockquote>
                <p className="text-base text-gray-400 mt-4">
                  For the first time, spend turned into results.
                </p>
              </div>
            </div>
          </div>
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
              { icon: TrendingUp, label: "Revenue Growth", value: "~5× weekly revenue growth" },
              { icon: Activity, label: "Lead Flow", value: "Strong, consistent lead flow" },
              { icon: Globe, label: "Google Visibility", value: "Real Google visibility locally" },
              { icon: Shield, label: "Wasted Spend", value: "Elimination of wasted ad spend" },
              { icon: Rocket, label: "Improvement", value: "A system that continued improving month over month" }
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
              "We spent a year and probably $100,000 wasting money trying to do what you guys do."
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
                src="https://www.youtube.com/embed/ABtAv38KacI"
                title="Naples Ceramic Case Study Video"
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
              A Real{" "}
              <span className="text-[#70E000]">Partnership</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              What stood out most to Mark wasn't just results — it was responsiveness.
            </p>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12 max-w-2xl mx-auto mb-8">
              <blockquote className="text-xl italic text-white leading-relaxed mb-6">
                "I can send you guys a message and say, 'These ads need a small tweak for our area' — you immediately change them."
              </blockquote>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                "Ideas were tested",
                "Content was adjusted",
                "The system kept evolving"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-2xl mx-auto mt-8">
              <blockquote className="text-xl text-white leading-relaxed">
                "You guys delivered what you promised. You've never fallen off the bandwagon."
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
                Growth didn't come from spending more.
              </p>
              <p className="text-2xl font-bold text-[#70E000] leading-relaxed">
                It came from fixing visibility, trust, and infrastructure first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IN MARK'S WORDS Section */}
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">In Mark's Words</span>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 relative">
              {/* Quote marks */}
              <div className="absolute top-6 left-6 text-6xl text-[#70E000]/20 font-serif">"</div>
              
              <blockquote className="relative z-10 text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 italic">
                What you guys do is very, very unique. It's a good partnership.
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-base font-semibold text-[#70E000]">Mark Messina</p>
                  <p className="text-sm text-gray-400">Owner, Naples Ceramic Coating (DuraCoating Technology)</p>
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