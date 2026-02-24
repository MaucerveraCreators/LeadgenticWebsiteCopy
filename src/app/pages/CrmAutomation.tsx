import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, DollarSign, Award, Sparkles, Activity, ArrowUpRight, Phone, Mail, MessageSquare, Bell, UserCheck, Eye, Send, Repeat, Shield, LineChart, Minus, X, Crosshair, AlertCircle } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { FutureStateScrollWidget } from "@/app/components/FutureStateScrollWidget";

interface MetricCard {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface SystemStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export function CrmAutomation() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeSplit, setActiveSplit] = useState<'problem' | 'solution'>('solution');
  const [activeSignal, setActiveSignal] = useState(0);

  const signals = [
    "No panic about missed leads",
    "No manual chasing",
    "No wondering who followed up",
    "No blind spots"
  ];

  // Auto-rotate active signal every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % signals.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const metrics: MetricCard[] = [
    { value: "< 60s", label: "Average response time to new leads", icon: Clock },
    { value: "340%", label: "Increase in lead-to-appointment rate", icon: TrendingUp },
    { value: "0", label: "Leads lost to missed follow-up", icon: Target },
    { value: "89%", label: "Reduction in sales cycle length", icon: Zap },
    { value: "5.2x", label: "ROI on CRM automation investment", icon: DollarSign },
    { value: "100%", label: "Pipeline visibility across all stages", icon: Eye },
    { value: "24/7", label: "Automated lead engagement coverage", icon: Bell },
    { value: "67%", label: "Improvement in lead qualification accuracy", icon: UserCheck },
    { value: "12-touch", label: "Average nurture sequence per lead", icon: MessageSquare },
    { value: "4.1x", label: "More qualified appointments booked", icon: Phone },
    { value: "92%", label: "Lead capture rate (vs 31% industry avg)", icon: Activity },
    { value: "$0", label: "Revenue lost to system inefficiency", icon: Award },
  ];

  const systemSteps: SystemStep[] = [
    {
      number: "01",
      title: "AI-Powered Instant Response",
      subtitle: "Speed Wins",
      description: "Speed is the single biggest predictor of conversion. Every second counts when a lead shows intent.",
      features: [
        "New leads receive instant responses (&lt; 60 seconds)",
        "Missed calls trigger immediate SMS follow-up",
        "After-hours inquiries handled automatically",
        "Conversation starts while intent is highest"
      ],
      icon: Send
    },
    {
      number: "02",
      title: "Multi-Touch, Multi-Channel Nurture",
      subtitle: "Consistency Wins",
      description: "Most businesses follow up once. We don't. Our system runs relentless, systematic nurture until leads convert or disqualify.",
      features: [
        "Automated SMS sequences (8-12 touch points)",
        "Email follow-up flows with behavioral triggers",
        "Reminder and re-engagement campaigns",
        "Removes emotion and inconsistency from follow-up"
      ],
      icon: Repeat
    },
    {
      number: "03",
      title: "Real Human Vetting",
      subtitle: "This Is The Difference",
      description: "AI is powerful. But humans still matter — especially when money is on the line. This is where lead quality actually improves.",
      features: [
        "Real people vet and qualify every lead",
        "Confirm intent and readiness before handoff",
        "Identify patterns in lead quality",
        "Feed insights back into ads, SEO, and funnels"
      ],
      icon: Shield
    },
    {
      number: "04",
      title: "Full Pipeline Visibility",
      subtitle: "No More Guessing",
      description: "Most owners don't know where leads stall, why deals don't close, or which channels perform best. We fix that.",
      features: [
        "Clear pipeline stages with real-time tracking",
        "Conversion bottleneck visibility",
        "Performance feedback across entire system",
        "You stop guessing. You start managing reality."
      ],
      icon: LineChart
    }
  ];

  const integrationPoints = [
    { icon: Target, title: "AI Ads", description: "Generate demand" },
    { icon: TrendingUp, title: "SEO", description: "Build authority" },
    { icon: Users, title: "Funnels", description: "Qualify intent" },
    { icon: Zap, title: "CRM", description: "Ensure nothing is lost" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-black pt-32 pb-6 px-6">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#70E000]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#70E000]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            {/* Badge - Very compact, almost a label */}
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-[#70E000]/10 border border-[#70E000]/20">
              <span className="text-[#70E000] text-[10px] font-semibold tracking-wider uppercase">MARKETING AUTOMATION & CRM SYSTEMS</span>
            </div>
            
            {/* Headline - Reduced size 10%, compact line-height */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-[1.05]">
              More Leads Won't Fix<br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">What You're Currently Losing</span>
            </h1>
            
            {/* Subheadline - Tight, narrow, minimal margin */}
            <p className="text-base md:text-lg text-gray-300 mb-2 max-w-2xl mx-auto leading-[1.4]">
              Leadgentic installs world-class CRM and automation systems that combine AI-driven follow-up with real human qualification, ensuring every lead is captured, vetted, and moved toward a booked appointment.
            </p>

            {/* Secondary text - More space above for intentional pause */}
            <p className="text-sm text-gray-400/70 mb-5 mt-6 max-w-2xl mx-auto leading-[1.4]">
              This is the layer where most revenue quietly disappears.<br />
              <span className="text-white/80">And where most agencies stop looking.</span>
            </p>

            {/* CTAs - Very compact, close to text */}
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center">
              <button className="group bg-[#70E000] text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#5fc000] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#70E000]/20">
                SEE THE SYSTEM IN ACTION
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border border-white/20 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                BOOK A STRATEGY CALL
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Carousel */}
      <section className="py-16 px-6 bg-black border-y border-white/5 overflow-hidden">
        <div className="relative">
          <div className="overflow-hidden">
            <div className="seo-metrics-carousel-wrapper">
              {/* First set */}
              {metrics.map((metric, index) => (
                <div
                  key={`metric-1-${index}`}
                  className="flex-shrink-0 w-[280px] bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#70E000]/10 flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-[#70E000]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600 leading-tight">{metric.label}</div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {metrics.map((metric, index) => (
                <div
                  key={`metric-2-${index}`}
                  className="flex-shrink-0 w-[280px] bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#70E000]/10 flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-[#70E000]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600 leading-tight">{metric.label}</div>
                </div>
              ))}
              {/* Third set for seamless loop */}
              {metrics.map((metric, index) => (
                <div
                  key={`metric-3-${index}`}
                  className="flex-shrink-0 w-[280px] bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#70E000]/10 flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-[#70E000]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600 leading-tight">{metric.label}</div>
                </div>
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
              The Problem <span className="text-[#70E000]">No One Wants To Admit</span>
            </h2>
            <p className="text-gray-400 text-lg">Most believe their problem is lead volume. It's not. It's what happens after.</p>
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
                The Invisible Revenue Leak
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
                  <span>Calls missed during busy hours</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'problem' ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  <span className={`
                    mt-1 transition-colors duration-300
                    ${activeSplit === 'problem' ? 'text-[#70E000]' : 'text-gray-600'}
                  `}>×</span>
                  <span>Forms submitted without quick follow-up</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'problem' ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  <span className={`
                    mt-1 transition-colors duration-300
                    ${activeSplit === 'problem' ? 'text-[#70E000]' : 'text-gray-600'}
                  `}>×</span>
                  <span>Leads contacted once — then forgotten</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'problem' ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  <span className={`
                    mt-1 transition-colors duration-300
                    ${activeSplit === 'problem' ? 'text-[#70E000]' : 'text-gray-600'}
                  `}>×</span>
                  <span>No clear visibility into what's working</span>
                </li>
              </ul>

              <p className={`
                mt-6 text-sm italic transition-colors duration-300
                ${activeSplit === 'problem' ? 'text-gray-400' : 'text-gray-600'}
              `}>
                Nothing breaks. Nothing crashes. Revenue just… leaks.
              </p>

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
                The System That Protects Revenue
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
                  <span>Instant response to every lead (&lt; 60s)</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'solution' ? 'text-gray-200' : 'text-gray-500'}
                `}>
                  <Check className={`
                    w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300
                    ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
                  `} />
                  <span>Multi-touch nurture until conversion</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'solution' ? 'text-gray-200' : 'text-gray-500'}
                `}>
                  <Check className={`
                    w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300
                    ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
                  `} />
                  <span>Real humans vetting every opportunity</span>
                </li>
                <li className={`
                  flex items-start gap-2 transition-colors duration-300
                  ${activeSplit === 'solution' ? 'text-gray-200' : 'text-gray-500'}
                `}>
                  <Check className={`
                    w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300
                    ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
                  `} />
                  <span>Complete pipeline visibility 24/7</span>
                </li>
              </ul>

              <p className={`
                mt-6 text-sm italic transition-colors duration-300
                ${activeSplit === 'solution' ? 'text-[#70E000]' : 'text-gray-600'}
              `}>
                Leads don't convert. Systems do.
              </p>

              {activeSplit === 'solution' && (
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#70E000]/30 to-transparent" />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Leadgentic Follow-Up System */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Leadgentic <span className="text-[#70E000]">Follow-Up System</span>
            </h2>
            <p className="text-gray-400 text-lg">
              This is not "software setup." This is revenue protection infrastructure.
            </p>
          </motion.div>

          <div className="space-y-6">
            {systemSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  className={`
                    cursor-pointer rounded-xl transition-all duration-300 border
                    ${activeAccordion === index
                      ? 'bg-zinc-900/60 border-[#70E000] shadow-[0_0_24px_rgba(112,224,0,0.12)]'
                      : 'bg-black border-zinc-800 hover:border-zinc-700'
                    }
                  `}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      <div className={`
                        w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                        ${activeAccordion === index
                          ? 'bg-[#70E000]/15 border border-[#70E000]/30'
                          : 'bg-zinc-900 border border-zinc-800'
                        }
                      `}>
                        <step.icon className={`
                          w-8 h-8 transition-colors duration-300
                          ${activeAccordion === index ? 'text-[#70E000]' : 'text-gray-400'}
                        `} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <div className={`
                              text-sm font-semibold mb-2 transition-colors duration-300
                              ${activeAccordion === index ? 'text-[#70E000]' : 'text-gray-500'}
                            `}>
                              {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {step.title}
                            </h3>
                            <p className={`
                              text-sm italic transition-colors duration-300
                              ${activeAccordion === index ? 'text-[#70E000]' : 'text-gray-500'}
                            `}>
                              {step.subtitle}
                            </p>
                          </div>
                          <div className={`
                            w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                            ${activeAccordion === index ? 'bg-[#70E000]/20 rotate-180' : 'bg-zinc-800'}
                          `}>
                            <ArrowRight className={`
                              w-5 h-5 transition-all duration-300 rotate-90
                              ${activeAccordion === index ? 'text-[#70E000]' : 'text-gray-400'}
                            `} />
                          </div>
                        </div>

                        <div
                          className="overflow-hidden transition-all duration-300"
                          style={{
                            maxHeight: activeAccordion === index ? '500px' : '0',
                            opacity: activeAccordion === index ? 1 : 0
                          }}
                        >
                          <div className="pt-4 border-t border-zinc-800">
                            <p className="text-gray-300 mb-4 leading-relaxed">
                              {step.description}
                            </p>
                            <ul className="space-y-2">
                              {step.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2 text-gray-400">
                                  <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Integration */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              How This Connects To <span className="text-[#70E000]">The Entire System</span>
            </h2>
            <p className="text-gray-600 text-lg mb-2">This page doesn't stand alone.</p>
            <p className="text-black text-xl font-semibold">It is the backbone that holds everything together.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {integrationPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:border-[#70E000]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#70E000]/10 flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-6 h-6 text-[#70E000]" />
                </div>
                <h3 className="text-black font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-black mb-4">Without This Layer</h3>
              <ul className="space-y-3">
                {[
                  "Ads underperform",
                  "SEO converts poorly",
                  "Sales feels chaotic",
                  "Revenue disappears silently"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-gray-400 mt-1">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-[#70E000]/30 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-[#70E000] mb-4">With It</h3>
              <ul className="space-y-3">
                {[
                  "Every channel improves",
                  "Every lead matters",
                  "Growth stabilizes",
                  "Revenue feels protected"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-800">
                    <Check className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Changes When <span className="text-[#70E000]">Follow-Up Is Systemized</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden group hover:border-[#70E000]/50 transition-all duration-300"
            >
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#70E000]/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#70E000]" />
                  </div>
                  <p className="text-sm text-gray-400">🎥 Video Testimonial</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white italic mb-3">
                  "We didn't realize how many leads we were losing until we saw the pipeline clearly."
                </p>
                <p className="text-gray-400 text-sm">— Founder, B2B SaaS Company</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden group hover:border-[#70E000]/50 transition-all duration-300"
            >
              <div className="aspect-video bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#70E000]/20 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-[#70E000]" />
                  </div>
                  <p className="text-sm text-gray-400">🎥 Video Testimonial</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white italic mb-3">
                  "Our sales team finally has time to sell instead of chasing cold leads."
                </p>
                <p className="text-gray-400 text-sm">— Head of Operations, Healthcare Provider</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="group inline-flex items-center gap-2 text-[#70E000] font-semibold hover:gap-3 transition-all duration-300">
              Read Full Case Studies
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Future State - Scroll-Driven Radar Panel */}
      <FutureStateScrollWidget />

      {/* Why Most Businesses Never Fix This */}
      <section className="pt-8 pb-20 px-6 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Most Businesses <span className="text-[#70E000]">Never Fix This</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { text: "It's not flashy", icon: Minus, color: "from-[#70E000]/20 to-[#70E000]/5" },
                { text: "It's not 'marketing'", icon: X, color: "from-[#70E000]/15 to-[#70E000]/5" },
                { text: "It requires discipline", icon: Target, color: "from-[#70E000]/20 to-[#70E000]/5" },
                { text: "It exposes uncomfortable truths", icon: Eye, color: "from-[#70E000]/15 to-[#70E000]/5" }
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-[#70E000]/50 hover:bg-zinc-900/70 transition-all duration-300 cursor-default overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Number Badge */}
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-zinc-800 group-hover:bg-[#70E000]/20 border border-zinc-700 group-hover:border-[#70E000]/30 flex items-center justify-center transition-all duration-300">
                    <span className="text-[10px] font-bold text-gray-500 group-hover:text-[#70E000] transition-colors duration-300">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 group-hover:bg-[#70E000]/10 border border-zinc-700 group-hover:border-[#70E000]/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <reason.icon className="w-5 h-5 text-gray-500 group-hover:text-[#70E000] transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text */}
                  <p className="relative z-10 text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed font-medium">
                    {reason.text}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#70E000]/0 to-transparent group-hover:via-[#70E000]/50 transition-all duration-300" />
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-zinc-900/50 via-zinc-900/30 to-zinc-900/50 border border-[#70E000]/20 rounded-xl p-8">
              <p className="text-xl text-gray-300 mb-4">Most agencies avoid this layer.</p>
              <p className="text-2xl text-[#70E000] font-bold">
                Leadgentic starts here — because this is where money is made or lost.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}