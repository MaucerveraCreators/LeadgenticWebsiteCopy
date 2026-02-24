import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, Phone, MessageSquare, FileText, Eye, Building2, Rocket, TrendingDown, Star, DollarSign, UserCheck, Briefcase, AlertTriangle } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import autoClinicShopImage from "figma:asset/ae555966b577e08907039e3e8d27714677d15942.png";
import mechanicWorkingImage from "figma:asset/1b748fedf74ce92746a7e4bede2bb5090cc3b954.png";

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

// Auto Clinic Case Study Metrics Data
const autoClinicMetrics = [
  { icon: DollarSign, metric: "$20,000", description: "Closed in a single day" },
  { icon: Clock, metric: "~2 Weeks", description: "Time to results" },
  { icon: TrendingUp, metric: "90%", description: "Fewer calls, higher conversions" },
  { icon: UserCheck, metric: "Ready Buyers", description: "Vetted & qualified leads" },
  { icon: Briefcase, metric: "6 Jobs", description: "Saved from layoffs" },
  { icon: Users, metric: "3-4", description: "New hires planned" },
  { icon: Award, metric: "80 Years", description: "Historic shop revitalized" },
  { icon: Shield, metric: "Zero", description: "Unqualified junk calls" },
  { icon: Zap, metric: "Immediate", description: "Sales turnaround" },
  { icon: Sparkles, metric: "AI-Powered", description: "Ads, CRM & vetting" },
  { icon: Target, metric: "High-Intent", description: "Ready-to-book customers" },
  { icon: Rocket, metric: "Stabilized", description: "From survival to control" },
];

export function AutoClinicCaseStudy() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Case Study · Automotive · Auto Repair</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                From Stagnant Sales to Closing
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                $20,000 in a Single Day
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              How a Michigan Auto Clinic Replaced Low-Quality Leads With Buyers Ready to Book
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

          {/* Auto Clinic Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-autoclinic">
              {/* First set */}
              {autoClinicMetrics.map((metric, index) => (
                <MetricCard
                  key={`first-${index}`}
                  icon={metric.icon}
                  metric={metric.metric}
                  description={metric.description}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {autoClinicMetrics.map((metric, index) => (
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
            @keyframes scroll-autoclinic {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-autoclinic {
              animation: scroll-autoclinic 5s linear infinite;
            }
            
            @media (min-width: 768px) {
              .animate-scroll-autoclinic {
                animation: scroll-autoclinic 8s linear infinite;
              }
            }
            
            .animate-scroll-autoclinic:hover {
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
                  { label: "Industry", value: "Auto Repair & Collision" },
                  { label: "Market", value: "East Point, Michigan" },
                  { label: "Team Size", value: "~14 employees" },
                  { label: "Time With Leadgentic", value: "~2 weeks" }
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
                  "AI Ads (Meta)",
                  "Video Editing",
                  "Funnels",
                  "CRM",
                  "AI Vetting",
                  "Human Follow-Up"
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
                  $20,000 closed in a single day, near-immediate turnaround from stagnant growth
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
              <span className="text-[#70E000]">Eight Years of Marketing — With Nothing to Show for It</span>
            </h2>

            <p className="text-base text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Before working with Leadgentic, this auto clinic had history.<br />
              <span className="text-white font-semibold">The shop had been around 80 years — one of the oldest repair facilities in Michigan.</span>
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-left max-w-2xl mx-auto mb-8">
              <h3 className="text-base font-semibold text-white mb-4">The owner had spent over 8 years with a previous marketing company.</h3>
              <p className="text-gray-400 text-sm mb-4">Yet despite the time, money, and effort:</p>
              
              <ul className="space-y-3">
                {[
                  "Sales were stagnant for 6–8 months",
                  "Lead quality was terrible",
                  "Call volume was high, but conversions were low",
                  "No one could explain where the ad dollars were going"
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
              <p className="text-base text-gray-300 mb-4">
                The calls coming in weren't just unqualified — <span className="text-white font-semibold">they were absurd.</span>
              </p>
              <p className="text-lg text-white italic">
                "I'd get calls for stuff I didn't even service… foot doctor calls… calls from Ohio, calls from Windsor."
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 text-center max-w-2xl mx-auto"
            >
              <p className="text-2xl font-bold text-[#70E000]" style={{ fontSize: '24px' }}>
                The business wasn't broken — but it was bleeding quietly.
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
              What They Thought the Problem Was — <span className="text-[#70E000]">And What It Actually Was</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              The assumption was simple: <span className="text-white font-semibold">"We need more calls."</span>
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
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">But More Calls Only Amplified the Chaos</h3>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {[
                  "No filtering",
                  "No qualification",
                  "No system tying ads to buyers"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-400 font-semibold text-sm mb-2">
                  Sales hadn't improved in nearly a year.
                </p>
                <p className="text-red-300 text-sm">
                  Layoffs were being discussed internally.
                </p>
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
                  <h3 className="text-lg font-bold text-white mb-1">The Real Problem</h3>
                </div>
              </div>

              <p className="text-[#70E000] font-bold text-base mb-4">
                The real problem wasn't volume — it was intent.
              </p>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                <p className="text-gray-300 text-sm italic">
                  "By next month, I probably would have laid off three or four technicians."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
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
                src={autoClinicShopImage} 
                alt="Auto Repair Shop Professional Service" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={mechanicWorkingImage} 
                alt="Professional Mechanic Working on Engine" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1769779394782-514b9f0b2ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjByZXBhaXIlMjBzaG9wJTIwZGlhZ25vc3RpYyUyMHRvb2xzfGVufDF8fHx8MTc3MDA0NjExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Auto Diagnostic Tools and Equipment" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={autoClinicShopImage} 
                alt="Auto Repair Shop Professional Service" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src={mechanicWorkingImage} 
                alt="Professional Mechanic Working on Engine" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[400px] h-[400px] rounded-2xl overflow-hidden border border-[#70E000]/20 hover:border-[#70E000]/40 transition-all shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1769779394782-514b9f0b2ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjByZXBhaXIlMjBzaG9wJTIwZGlhZ25vc3RpYyUyMHRvb2xzfGVufDF8fHx8MTc3MDA0NjExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Auto Diagnostic Tools and Equipment" 
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
              The Turning Point: <span className="text-[#70E000]">Six Months of Watching Before Making the Move</span>
            </h2>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              The owner didn't jump fast.
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-left max-w-2xl mx-auto mb-8">
              <h3 className="text-base font-semibold text-white mb-4">He watched Leadgentic's ads for six months:</h3>
              
              <div className="space-y-2 mb-4">
                {[
                  "Reviewed the website",
                  "Watched stories",
                  "Observed consistency"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                <p className="text-gray-300 text-sm mb-2">Still hesitant.</p>
                <p className="text-gray-300 text-sm mb-2">Burned before.</p>
                <p className="text-red-400 text-sm font-semibold">Skeptical of agencies.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center max-w-2xl mx-auto">
              <p className="text-2xl font-bold text-[#70E000]" style={{ fontSize: '24px' }}>
                But eventually, he made the switch.
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
                  <h3 className="text-lg font-bold text-white mb-1">Owner Generated Content (OGC): Trust Before the Phone Rings</h3>
                  <p className="text-gray-400 text-sm mb-4">Instead of anonymous ads, the owner became visible.</p>
                  
                  <p className="text-gray-300 text-sm mb-3">
                    That changed everything.
                  </p>
                  
                  <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-lg p-3">
                    <p className="text-[#70E000] font-semibold text-sm italic">
                      "Calls didn't stop — they changed. My phones don't ring nearly as much… but when they do ring, they're buying."
                    </p>
                  </div>
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
                  <h3 className="text-lg font-bold text-white mb-1">AI-Powered Ads: Fewer Calls, Far Better Buyers</h3>
                  <p className="text-gray-400 text-sm mb-4">Meta ads were rebuilt to prioritize:</p>
                  
                  <div className="space-y-2 mb-4">
                    {[
                      "Owner-led trust",
                      "Buyer intent",
                      "Behavior-based optimization"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-lg p-4">
                    <p className="text-[#70E000] font-bold text-base mb-2">
                      Call volume dropped nearly 90% — and conversions exploded.
                    </p>
                    <p className="text-gray-300 text-sm italic">
                      "All these leads that are coming in… they're ready. They're booking appointments. I'm selling jobs."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Funnels */}
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
                  <h3 className="text-lg font-bold text-white mb-1">Funnels: Filtering Out the Tire-Kickers</h3>
                  <p className="text-gray-400 text-sm mb-4">Landing pages were introduced to:</p>
                  
                  <div className="space-y-2 mb-4">
                    {[
                      "Set expectations",
                      "Eliminate price shoppers",
                      "Attract serious buyers"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[#70E000] font-semibold text-sm italic">
                    No more "how much for an oil change?" calls.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CRM + AI Vetting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">CRM + AI + Human Vetting: When It Finally Clicked</h3>
                  <p className="text-gray-400 text-sm mb-4">The owner was shocked by what came next.</p>
                  
                  <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-lg p-4 mb-4">
                    <p className="text-xl font-bold text-white italic">
                      "You guys vet the customers… who the hell does that?"
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      "Leads were verified",
                      "Appointments were booked",
                      "Customers arrived ready"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#70E000] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE JAW-DROP MOMENT Section */}
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
              <DollarSign className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">The Jaw-Drop Moment</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              <span className="text-[#70E000]">Then It Happened</span>
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-10 text-center max-w-2xl mx-auto mb-8">
              <p className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent" style={{ fontSize: '24px' }}>
                "Yesterday, I closed $20,000. On your leads."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-[#70E000] mb-2">1</p>
                <p className="text-sm text-gray-400">Day</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-[#70E000] mb-2">Multiple</p>
                <p className="text-sm text-gray-400">Deals</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-[#70E000] mb-2">Back-to-Back</p>
                <p className="text-sm text-gray-400">Closes</p>
              </div>
            </div>

            <p className="text-lg text-gray-300 mt-8 max-w-2xl mx-auto">
              The phones weren't ringing nonstop — <span className="text-white font-semibold">but revenue was.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT CHANGED Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
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
              In under two weeks:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Sales momentum returned",
                "Layoffs were canceled",
                "Hiring was back on the table",
                "Morale surged"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#70E000]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#70E000]" />
                    </div>
                    <p className="text-white font-medium">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center max-w-2xl mx-auto">
              <p className="text-xl font-bold text-white mb-2">
                "Last week I was doing nothing. Today I'm hammered."
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
                  src="https://www.youtube.com/embed/ewO4Jn6Riqk"
                  title="Auto Clinic Case Study Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES Section */}
      <section className="py-6 md:py-10 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              <span className="text-[#70E000]">Outcomes (Immediate and Real)</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: "$20,000 closed in a single day",
                description: "Multiple deals from qualified leads"
              },
              {
                icon: Clock,
                title: "Near-immediate turnaround",
                description: "Results in under 2 weeks"
              },
              {
                icon: Phone,
                title: "90% fewer calls",
                description: "With dramatically higher intent"
              },
              {
                icon: Users,
                title: "Ready to hire 3–4 technicians",
                description: "Growth mode activated"
              },
              {
                icon: Shield,
                title: "Six jobs preserved",
                description: "That were at risk of being cut"
              },
              {
                icon: TrendingUp,
                title: "Sales momentum restored",
                description: "After 6-8 months of stagnation"
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
        </div>
      </section>

      {/* THE AFTER Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              The After: <span className="text-[#70E000]">From Survival to Control</span>
            </h2>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              The business didn't just improve.<br />
              <span className="text-white font-semibold">It stabilized.</span>
            </p>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-10 text-center max-w-2xl mx-auto">
              <p className="text-base text-gray-300 mb-4">
                The owner summed it up best:
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent mb-2">
                "You saved my business. You saved jobs."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY INSIGHT Section */}
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Key Insight</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight text-white">
              Growth didn't come from more leads.
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent" style={{ fontSize: '24px' }}>
                It came from filtering, trust, and a system that does the heavy lifting.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL Section */}
      <section className="py-6 md:py-10 px-6 bg-black">
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">In His Words</span>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 relative">
              {/* Quote marks */}
              <div className="absolute top-6 left-6 text-6xl text-[#70E000]/20 font-serif">"</div>
              
              <blockquote className="relative z-10 text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 italic">
                If Leadgentic were a character, it'd be the Michelin Man — you guys saved us.
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-base font-semibold text-[#70E000]">Auto Clinic Owner</p>
                  <p className="text-sm text-gray-400">Auto Clinic of Eastpoint</p>
                </div>
              </div>

              {/* Quote marks */}
              <div className="absolute bottom-6 right-6 text-6xl text-[#70E000]/20 font-serif rotate-180">"</div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}