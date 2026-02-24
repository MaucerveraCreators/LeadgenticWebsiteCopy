import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Video, FileText, Eye, Building2, Rocket, TrendingDown, DollarSign } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";

// Import carousel images
import diagnosticLaptop1 from "figma:asset/d8d269904c3813a22fbf693662245bcb150294b5.png";
import diagnosticLaptop2 from "figma:asset/a6eed85f2d64631e44daf2a075831ca56306b8db.png";
import diagnosticLaptop3 from "figma:asset/bd260429d96f65721bf055fd86b5415a8d064028.png";

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

// DME Tuning Case Study Metrics Data
const dmeTuningMetrics = [
  { icon: DollarSign, metric: "$120K", description: "Monthly revenue in month 4" },
  { icon: TrendingUp, metric: "6x", description: "Revenue growth in 4 months" },
  { icon: Rocket, metric: "$300K", description: "Total revenue in 5 months" },
  { icon: Building2, metric: "New Shop", description: "From zero to full capacity" },
  { icon: Activity, metric: "Overflow", description: "Demand exceeded capacity" },
  { icon: Clock, metric: "4 Months", description: "Timeline to six figures" },
  { icon: Shield, metric: "Predictable", description: "Demand generation system" },
  { icon: Target, metric: "SEO-Driven", description: "Organic inbound calls" },
  { icon: Award, metric: "Future Revenue", description: "Deposits rolling forward" },
  { icon: Sparkles, metric: "Peace of Mind", description: "Confidence in marketing" },
  { icon: Users, metric: "High-Intent", description: "Informed buyers only" },
  { icon: BarChart3, metric: "On Track", description: "$750K-$1M year-one revenue" },
];

export function DMETuningCaseStudy() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Case Study · Automotive Performance & Tuning · Texas</span>
            </div>
            
            <h1 className="text-[30px] md:text-[48px] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                From a Brand-New Shop<span className="hidden md:inline"> to</span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent md:hidden">
                to{" "}
              </span>
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                $120,000/Month
              </span>
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent hidden md:inline"> in Under 4 Months</span>
              <br className="md:hidden" />
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent md:hidden">
                in Under 4 Months
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              How DME Tuning Turned Marketing Into a Calm, Predictable Growth Engine With Leadgentic
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

          {/* DME Tuning Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-dmetuning">
              {/* First set */}
              {dmeTuningMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {dmeTuningMetrics.map((metric, index) => (
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
            @keyframes scroll-dmetuning {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-dmetuning {
              animation: scroll-dmetuning 8s linear infinite;
            }
            
            @media (max-width: 767px) {
              .animate-scroll-dmetuning {
                animation: scroll-dmetuning 5s linear infinite;
              }
            }
            
            .animate-scroll-dmetuning:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* QUICK SNAPSHOT Section */}
      <section className="py-8 px-6 bg-gradient-to-b from-black to-zinc-950">
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
                  { label: "Industry", value: "Automotive Performance & Tuning" },
                  { label: "Market", value: "Texas" },
                  { label: "Owner", value: "Khan" },
                  { label: "Time With Leadgentic", value: "~4-5 months" },
                  { label: "Core Outcome", value: "Growth from ~$20K/month to $120K/month in under 4 months" }
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
                  "Google Ads",
                  "Meta Ads",
                  "Video Editing",
                  "AI SEO",
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
      <section className="py-8 px-6 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
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
              A Brand-New Business With{" "}
              <span className="text-[#70E000]">No Momentum</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              When Khan first opened DME Tuning Texas, the shop was new — really new.<br />
              <span className="text-white font-semibold">There was no backlog. No steady demand. No phones ringing.</span>
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center max-w-2xl mx-auto mb-8">
              <blockquote className="text-lg italic text-gray-300 leading-relaxed">
                "First month, as a brand new business, I had absolutely nothing to do. Just hanging out at my desk, waiting for stuff to happen."
              </blockquote>
            </div>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Leads trickled in slowly — maybe one per day — but there was no confidence that the next month would be any better.<br />
              <span className="text-white font-semibold">Coming from a 9-to-5 background, the uncertainty was stressful.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM Section */}
      <section className="py-8 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              What He Thought the Problem Was — <span className="text-[#70E000]">And What It Actually Was</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              At first, the assumption was simple: "We just need more time."<br />
              <span className="text-white font-semibold">But time without visibility doesn't compound.</span>
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
                  <h3 className="text-lg font-bold text-white mb-1">What Was Missing</h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Consistent inbound traffic",
                  "Strong local SEO visibility",
                  "Ads that worked with organic demand",
                  "A system that rolled demand forward month to month"
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
                <span className="text-[#70E000] font-bold">Without visibility and infrastructure, every month felt like starting over.</span>
              </p>

              <p className="text-white text-base italic">
                "Time doesn't build a business. Systems do."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DME Tuning Image Carousel */}
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
                src={diagnosticLaptop1} 
                alt="Automotive Performance Diagnostics with Laptop" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={diagnosticLaptop2} 
                alt="Engine Tuning Analysis with Computer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={diagnosticLaptop3} 
                alt="Professional Car Diagnostic Software and Equipment" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={diagnosticLaptop1} 
                alt="Automotive Performance Diagnostics with Laptop" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={diagnosticLaptop2} 
                alt="Engine Tuning Analysis with Computer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={diagnosticLaptop3} 
                alt="Professional Car Diagnostic Software and Equipment" 
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
              animation: scroll-images 8s linear infinite;
            }
            
            @media (max-width: 767px) {
              .animate-scroll-images {
                animation: scroll-images 5s linear infinite;
              }
            }
            
            .animate-scroll-images:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* THE TURNING POINT Section */}
      <section className="py-8 px-6 bg-gradient-to-b from-black to-zinc-950">
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
              When Momentum Became{" "}
              <span className="text-[#70E000]">Predictable</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              By March, things began to shift.<br />
              Leads increased. Calls picked up. Deposits started coming in.
            </p>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 text-center max-w-2xl mx-auto mb-8">
              <blockquote className="text-lg italic text-gray-300 leading-relaxed mb-4">
                "We did $20,000 in two weeks. Coming from a 9-to-5, I had never seen that much money."
              </blockquote>
              <p className="text-base text-gray-400">
                April followed with $40,000 in revenue.<br />
                May climbed even higher.
              </p>
            </div>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              But the real moment of clarity came when Khan realized something critical:
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center max-w-2xl mx-auto">
              <blockquote className="text-xl font-bold text-[#70E000] leading-relaxed">
                "The marketing leads would essentially just lead into the following month."
              </blockquote>
              <p className="text-base text-gray-400 mt-4">
                Demand was no longer resetting — it was stacking.
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
                  <h3 className="text-xl font-bold text-white mb-2">Owner Generated Content (OGC): Confidence Before the Call</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Khan didn't hide behind ads. He became visible — explaining services, pricing, and expectations.
                  </p>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    That visibility removed friction:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "People called informed",
                      "Price objections dropped",
                      "Conversations became easier"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="text-base italic text-white border-l-2 border-[#70E000] pl-4">
                    "I just let it do its own thing, and people call in. No headaches, no issues."
                  </blockquote>
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
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Ads: Demand That Rolls Forward</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Paid ads were optimized to:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Drive high-intent calls",
                      "Support SEO visibility",
                      "Feed future bookings"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-400 leading-relaxed">
                    Customers didn't just book immediately — many agreed to pricing, placed deposits, and scheduled weeks out.
                    <br /><br />
                    <span className="text-[#70E000] font-semibold">This created future revenue before the month even started.</span>
                  </p>
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
                  <h3 className="text-xl font-bold text-white mb-2">AI SEO: The Silent Growth Multiplier</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    SEO quickly became one of the biggest drivers.
                  </p>
                  <blockquote className="text-base italic text-white border-l-2 border-[#70E000] pl-4 mb-4">
                    "I really think that the SEO is what's very important. People just go on Google, search, and call what comes up."
                  </blockquote>
                  <p className="text-gray-400 leading-relaxed">
                    <span className="text-[#70E000] font-semibold">Inbound calls increased without additional ad spend</span> — compounding results.
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
                  <h3 className="text-xl font-bold text-white mb-2">CRM + Follow-Up: When Success Created New Problems</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    By June, demand exceeded capacity.
                  </p>
                  <blockquote className="text-base italic text-white border-l-2 border-[#70E000] pl-4 mb-4">
                    "I didn't have enough space at my shop. I had five cars inside, two outside, one at my house."
                  </blockquote>
                  <p className="text-gray-400 leading-relaxed">
                    <span className="text-[#70E000] font-semibold">That's when the question shifted from survival to expansion.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE BREAKOUT MOMENT Section */}
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
              <Rocket className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Breakout Moment</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              By the <span className="text-[#70E000]">Fourth Month</span>
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12 max-w-2xl mx-auto">
              <blockquote className="text-3xl font-bold text-[#70E000] mb-6">
                "In four months, I hit $120,000."
              </blockquote>
              <p className="text-lg text-gray-300 leading-relaxed">
                What started as a $20K/month operation became a six-figure monthly business in a single season.
              </p>
            </div>
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
                src="https://www.youtube.com/embed/p3iiHHTl3sM"
                title="DME Tuning Case Study Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT CHANGED Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]">What Changed</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              More than revenue, Khan gained peace of mind.
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 max-w-2xl mx-auto mb-8">
              <blockquote className="text-xl italic text-white leading-relaxed">
                "I'm a lot more confident. A lot more at peace with how marketing is running."
              </blockquote>
            </div>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Marketing stopped being something to worry about.<br />
              <span className="text-[#70E000] font-semibold text-xl">It became infrastructure.</span>
            </p>
          </div>
        </div>
      </section>

      {/* OUTCOMES Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]">Outcomes (Clear and Earned)</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: TrendingUp, label: "Revenue Growth", value: "~$20K/month → $120K/month in under 4 months" },
              { icon: Building2, label: "Capacity", value: "Overflow demand exceeding shop capacity" },
              { icon: BarChart3, label: "SEO Impact", value: "Strong SEO-driven inbound calls" },
              { icon: Clock, label: "Future Revenue", value: "Deposits and bookings rolling into future months" },
              { icon: Award, label: "Year-One Projection", value: "A realistic path to $750K–$1M in year-one revenue" },
              { icon: Rocket, label: "5-Month Total", value: "\"I think we're already sitting at like $300,000 in five months.\"" }
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

      {/* THE BIGGER REALIZATION Section */}
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
              <Eye className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Bigger Realization</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]\">Opportunity Cost</span>
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12 max-w-2xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Looking back, Khan summed it up bluntly:
              </p>
              <blockquote className="text-2xl font-bold text-[#70E000] mb-6 leading-relaxed">
                "I basically lost $3 million because I didn't start with you earlier."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY INSIGHT Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]\">Key Insight</span>
            </h2>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-10 max-w-3xl mx-auto">
              <p className="text-xl text-white leading-relaxed mb-4">
                Growth didn't come from working harder.
              </p>
              <p className="text-2xl font-bold text-[#70E000] leading-relaxed">
                It came from visibility, consistency, and systems that compound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IN KHAN'S WORDS Section */}
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
              <MessageSquare className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">In Khan's Words</span>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-12 max-w-3xl mx-auto">
              <blockquote className="text-2xl font-bold text-white leading-relaxed">
                "If the guy next to you is doing triple your numbers, marketing is the reason."
              </blockquote>
              <div className="mt-8 pt-8 border-t border-[#70E000]/20">
                <p className="text-base font-semibold text-[#70E000]">Khan</p>
                <p className="text-sm text-gray-400">Owner, DME Tuning Texas</p>
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