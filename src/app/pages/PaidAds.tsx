import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Eye, MessageSquare, Sparkles, Video, PlayCircle, FileText, ArrowUpRight, MousePointer, Filter } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { DiagnosticTest } from "@/app/components/DiagnosticTest";
import { Link } from "react-router";

// Metric Card for Carousel
function MetricCard({ icon: Icon, metric, description }: { icon: LucideIcon; metric: string; description: string }) {
  return (
    <div className="group relative w-[320px] flex-shrink-0">
      <div className="relative h-full bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#70E000]/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#70E000]" strokeWidth={1.8} />
          </div>
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

// Paid Ads Metrics Data
const paidAdsMetrics = [
  {
    icon: TrendingUp,
    metric: "Daily Inbound Flow",
    description: "consistent qualified inquiries"
  },
  {
    icon: Filter,
    metric: "Intent Filtering",
    description: "low-quality leads eliminated before calls"
  },
  {
    icon: Users,
    metric: "Booking Patterns",
    description: "predictable weekly appointment flow"
  },
  {
    icon: Eye,
    metric: "Trust Pre-Framed",
    description: "prospects recognize you before clicking"
  },
  {
    icon: Target,
    metric: "Market Reality",
    description: "volume matched to business capacity"
  },
  {
    icon: BarChart3,
    metric: "AI Optimization",
    description: "continuous creative and targeting tests"
  },
  {
    icon: Sparkles,
    metric: "OGC Authority",
    description: "owner-generated content establishes trust"
  },
  {
    icon: MousePointer,
    metric: "Outcome-Focused",
    description: "optimized for calls, not clicks"
  },
  {
    icon: Clock,
    metric: "Real-Time Learning",
    description: "system adapts based on conversion data"
  },
  {
    icon: MessageSquare,
    metric: "Sales Quality",
    description: "easier conversations, higher close rates"
  },
  {
    icon: Check,
    metric: "CRM Integration",
    description: "every lead tracked and followed up"
  },
  {
    icon: Shield,
    metric: "Revenue System",
    description: "ads feed SEO and follow-up automation"
  }
];

export function PaidAds() {
  const [activeSplit, setActiveSplit] = useState<'problem' | 'solution'>('problem');
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#70E000]/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#70E000]/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-[#70E000] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#70E000] font-medium">AI-POWERED LEAD GENERATION & PAID ADVERTISING</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Qualified Leads. Booked Appointments.
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Predictable Growth.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-4">
              Leadgentic builds AI-powered advertising systems that generate a consistent flow of qualified leads, establish trust before the first conversation, and feed directly into a follow-up system designed to convert interest into revenue.
            </p>

            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-base text-gray-500">This isn't about running ads.</p>
              <p className="text-base text-[#70E000] font-semibold">It's about engineering demand that actually closes.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          {/* Paid Ads Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            <div className="paid-ads-metrics-carousel-wrapper">
              <div className="flex gap-4">
                {paidAdsMetrics.map((metric, index) => (
                  <MetricCard key={`first-${index}`} {...metric} />
                ))}
              </div>
              
              <div className="flex gap-4">
                {paidAdsMetrics.map((metric, index) => (
                  <MetricCard key={`second-${index}`} {...metric} />
                ))}
              </div>

              <div className="flex gap-4">
                {paidAdsMetrics.map((metric, index) => (
                  <MetricCard key={`third-${index}`} {...metric} />
                ))}
              </div>
            </div>

            <style>{`
              .paid-ads-metrics-carousel-wrapper {
                display: flex;
                gap: 1rem;
                animation: paid-ads-scroll-left-smooth 5s linear infinite;
                will-change: transform;
              }

              .paid-ads-metrics-carousel-wrapper:hover {
                animation-play-state: paused;
              }

              @keyframes paid-ads-scroll-left-smooth {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(calc(-100% / 3));
                }
              }

              @media (max-width: 768px) {
                .paid-ads-metrics-carousel-wrapper {
                  animation-duration: 6s;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* The Real Problem Section - WHITE BACKGROUND */}
      <section className="py-20 px-6 relative overflow-hidden bg-white">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#70E000]/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black leading-tight">
              Most businesses don't have an <span className="text-[#70E000]">"ads problem."</span>
            </h2>
            <p className="text-xl text-gray-700 mb-3">
              They have a trust and qualification problem.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              Take 60 seconds to diagnose where you are. We'll show you exactly what needs to change.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <DiagnosticTest />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-l-4 border-[#70E000] pl-6 py-4 bg-[#70E000]/5 rounded-r-lg"
          >
            <p className="text-lg text-gray-700 mb-2">
              And the most frustrating part?
            </p>
            <p className="text-xl font-semibold text-black mb-3">
              You know demand exists in your market.
            </p>
            <div className="space-y-1 text-gray-600">
              <p>People are searching.</p>
              <p>They're clicking.</p>
              <p>They're inquiring.</p>
            </div>
            <p className="text-lg font-semibold text-[#70E000] mt-4">
              But revenue feels unpredictable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-gray-700 mb-2">
              That's not because ads don't work.
            </p>
            <p className="text-2xl font-bold text-black">
              It's because most ad systems <span className="text-[#70E000]">stop at the click.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Reframe Section - DARK BACKGROUND */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="text-white">Why Most Ads Fail</span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">
                (Even When They Look Good)
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Here's the uncomfortable truth:
            </p>
            <p className="text-2xl font-semibold text-white mb-6">
              Most agencies optimize for what's easy to measure, not what actually matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
            >
              <h3 className="text-lg font-semibold text-gray-400 mb-6">They chase:</h3>
              <ul className="space-y-3">
                {[
                  "Cheap cost per lead",
                  "Click-through rate",
                  "Impressions",
                  "Volume"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-500">
                    <span className="text-gray-600 mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-transparent border border-[#70E000]/30 rounded-xl p-8"
            >
              <h3 className="text-lg font-semibold text-[#70E000] mb-6">What actually matters:</h3>
              <ul className="space-y-3">
                {[
                  "Qualified conversations",
                  "Booked appointments",
                  "Conversion quality",
                  "Revenue impact"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-white">
                    <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center border-t border-zinc-800 pt-12"
          >
            <p className="text-xl text-gray-400 mb-3">
              But cheap leads aren't valuable.
            </p>
            <p className="text-2xl font-bold text-white mb-6">
              <span className="text-[#70E000]">Qualified conversations are.</span>
            </p>
            <p className="text-lg text-gray-300">
              The moment you realize this, everything changes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-400 mb-2">
              Advertising stops being about traffic…
            </p>
            <p className="text-2xl font-bold text-[#70E000]">
              …and starts being about who is raising their hand and why.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-white font-semibold">
              That's where Leadgentic is fundamentally different.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Leadgentic Ad System - WHITE BACKGROUND */}
      <section className="py-20 px-6 relative overflow-hidden bg-white">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#70E000]/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              The Leadgentic <span className="text-[#70E000]">Ad System</span>
            </h2>
            <p className="text-gray-600 text-lg">Layered, not hyped</p>
          </motion.div>
          
          <div className="space-y-4">
            {[
              {
                number: "01",
                title: "Owner Generated Content (OGC): The Trust Engine",
                subtitle: "This is the part most agencies can't replicate",
                description: "People don't trust ads anymore. They trust people. Especially the person who actually owns the business. That's why we built our system around OGC — Owner Generated Content. Instead of generic brand ads, we position you as: The authority. The expert. The recognizable face in your market.",
                features: [
                  "We script clear, authority-based talking points",
                  "You film short, natural videos (no acting, no perfection required)",
                  "We professionally edit for clarity, confidence, and credibility",
                  "Those videos become the foundation of your ad campaigns"
                ],
                benefit: "This creates what clients consistently describe as a local celebrity effect. By the time someone clicks: They've already seen you speak. They already understand what you do. They already trust you. The sales conversation starts before the lead ever comes in."
              },
              {
                number: "02",
                title: "AI-Optimized Ad Delivery (Where Scale Happens)",
                subtitle: "Once trust is established, AI does the heavy lifting",
                description: "Our system continuously tests and optimizes: Messaging angles. Creative variations. Hooks and calls to action. Audience signals tied to real outcomes. But here's the key difference: We don't optimize toward clicks or cheap CPL.",
                features: [
                  "Calls",
                  "Booked appointments",
                  "Qualified lead feedback from your CRM"
                ],
                benefit: "Underperforming ads are shut down quickly. Winning creatives are scaled aggressively. Over time, the system learns who converts, not just who clicks."
              },
              {
                number: "03",
                title: "Qualified Lead Flow (Not Promised Numbers)",
                subtitle: "We design around market reality and business capacity",
                description: "We don't promise lead counts. We design around market reality and business capacity. That means: Targeting people actively looking for solutions. Filtering out low-intent prospects through messaging and structure. Matching volume to what your operation can actually handle.",
                features: [
                  "Daily inbound inquiries",
                  "Fewer wasted conversations",
                  "More consistent booking patterns"
                ],
                benefit: "Not chaos. Not feast-or-famine. Predictability. (Exact results vary by industry, market size, and spend.)"
              }
            ].map((step, index) => {
              const isActive = activeAccordion === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => setActiveAccordion(index)}
                  onMouseEnter={() => setActiveAccordion(index)}
                  className={`
                    relative cursor-pointer rounded-xl transition-all duration-500 ease-in-out overflow-hidden
                    ${isActive 
                      ? 'bg-gray-50 border-[#70E000] shadow-lg shadow-[#70E000]/10' 
                      : 'bg-white border-gray-200 hover:border-gray-300'}
                    border
                  `}
                >
                  {/* Header */}
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`
                        flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300
                        ${isActive 
                          ? 'bg-[#70E000] text-black shadow-lg shadow-[#70E000]/30' 
                          : 'bg-gray-100 text-gray-400'}
                      `}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className={`
                          text-xl font-bold mb-2 transition-colors duration-300
                          ${isActive ? 'text-[#70E000]' : 'text-gray-600'}
                        `}>
                          {step.title}
                        </h3>
                        <p className={`
                          text-sm italic transition-colors duration-300
                          ${isActive ? 'text-gray-600' : 'text-gray-400'}
                        `}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div className={`
                      transition-all duration-500 ease-in-out
                      ${isActive ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}
                      overflow-hidden
                    `}>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {step.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-[#70E000]/5 border-l-4 border-[#70E000] rounded-r-lg">
                        <p className="text-sm text-gray-700 leading-relaxed italic">
                          {step.benefit}
                        </p>
                      </div>
                    </div>
                  </div>

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

      {/* System Integration Section - DARK BACKGROUND */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How This Connects to <span className="text-[#70E000]">SEO & Follow-Up</span>
            </h2>
            <p className="text-gray-400 text-lg">Important</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Ads are not the whole system.
            </p>
            <p className="text-2xl font-bold text-white mb-8">
              They are the front door.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 mb-8"
          >
            <p className="text-lg text-gray-300 mb-6">
              Every lead generated here flows directly into:
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: TrendingUp,
                  title: "Our AI SEO authority engine",
                  description: "(long-term demand)"
                },
                {
                  icon: Users,
                  title: "Our CRM with AI + human qualification",
                  description: ""
                },
                {
                  icon: Target,
                  title: "Our funnel and booking systems",
                  description: ""
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-black/30 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-[#70E000]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#70E000]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    {item.description && (
                      <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-300">Which means:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Ads create momentum", icon: Zap },
                { label: "SEO compounds authority", icon: BarChart3 },
                { label: "Follow-up converts interest into revenue", icon: Target }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-[#70E000]/5 border border-[#70E000]/20 rounded-lg">
                  <item.icon className="w-5 h-5 text-[#70E000] flex-shrink-0" />
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center border-t border-zinc-800 pt-12"
          >
            <p className="text-2xl font-bold text-[#70E000]">
              Nothing lives in a silo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proof Section - WHITE BACKGROUND */}
      <section className="py-20 px-6 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#70E000]/5 rounded-full blur-[140px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#70E000]/20 via-[#70E000]/10 to-transparent rounded-2xl blur-xl opacity-70" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black relative">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#70E000]/10 to-transparent rounded-lg border-l-4 border-[#70E000]">
                  Proof:
                </span>{" "}
                <span className="bg-gradient-to-r from-[#70E000] via-[#a3ff00] to-[#70E000] bg-clip-text text-transparent">
                  What this looks like in the real world
                </span>
              </h2>
            </div>
            <p className="text-gray-600 text-lg mt-6">Real business owners. Real results.</p>
          </motion.div>

          {/* Video Testimonials */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-black mb-8 text-center"
            >
              Video Testimonials
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Video 1 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#70E000]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/10 via-transparent to-[#70E000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-[#70E000] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <PlayCircle className="w-20 h-20 text-[#70E000] relative z-10 group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl" strokeWidth={1.5} />
                  </div>

                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#70E000]" />
                    <span className="text-white text-xs font-semibold">2:34</span>
                  </div>
                </div>
                
                {/* Quote Section */}
                <div className="relative p-8 bg-gradient-to-br from-white to-gray-50">
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

                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

              {/* Video 2 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#70E000]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/10 via-transparent to-[#70E000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-[#70E000] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <PlayCircle className="w-20 h-20 text-[#70E000] relative z-10 group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl" strokeWidth={1.5} />
                  </div>

                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#70E000]" />
                    <span className="text-white text-xs font-semibold">3:12</span>
                  </div>
                </div>
                
                <div className="relative p-8 bg-gradient-to-br from-white to-gray-50">
                  <div className="absolute top-6 right-8 text-6xl text-[#70E000]/10 font-serif leading-none">"</div>
                  
                  <div className="relative z-10">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "Leads went from random inquiries to people who already understood our pricing and value. Show rates tripled."
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

                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </div>
          </div>

          {/* Written Case Studies */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-black mb-8 text-center"
            >
              Written Case Studies
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#70E000]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#70E000] via-[#a3ff00] to-[#70E000] group-hover:h-2 transition-all duration-300" />
                
                <div className="p-8">
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

                  <h4 className="text-xl font-bold text-black mb-4 leading-tight group-hover:text-[#70E000] transition-colors duration-300">
                    How OGC + AI Ads Increased Qualified Inquiries Without Increasing Spend
                  </h4>

                  <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                    A breakdown of how trust-based ads reduced low-intent leads and improved booking rates.
                  </p>

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

                  <div className="flex items-center gap-2 text-[#70E000] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <FileText className="w-4 h-4" />
                    <span>Read the full case study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

              {/* Case Study 2 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#70E000]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#70E000] via-[#a3ff00] to-[#70E000] group-hover:h-2 transition-all duration-300" />
                
                <div className="p-8">
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

                  <h4 className="text-xl font-bold text-black mb-4 leading-tight group-hover:text-[#70E000] transition-colors duration-300">
                    From Inconsistent Leads to Predictable Weekly Appointments
                  </h4>

                  <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                    How AI optimization and content testing stabilized lead flow in a competitive market.
                  </p>

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

                  <div className="flex items-center gap-2 text-[#70E000] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <FileText className="w-4 h-4" />
                    <span>Read the full case study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Future State Section - DARK BACKGROUND */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#70E000]/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">What Changes for You</span>{" "}
              <span className="bg-gradient-to-r from-[#70E000] to-[#a3ff00] bg-clip-text text-transparent">
                (Future State)
              </span>
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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
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

      {/* Why This Works Section - WHITE BACKGROUND */}
      <section className="py-20 px-6 relative overflow-hidden bg-white">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#70E000]/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
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