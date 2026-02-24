import { motion } from "motion/react";
import { ArrowRight, Dna, TrendingUp, Users, Target } from "lucide-react";
import { useState } from "react";
import { Footer } from "@/app/components/Footer";
import { Link } from "react-router";

export function About() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Similar to Case Studies */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#70E000]/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#70E000]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(to right, #70E000 1px, transparent 1px),
            linear-gradient(to bottom, #70E000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <div className="w-1.5 h-1.5 bg-[#70E000] rounded-full animate-pulse"></div>
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">About Leadgentic</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                We engineer growth into your
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Business DNA
              </span>
            </h1>
            
            <p className="text-base text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              AI-powered marketing systems that become part of your business DNA. Built to scale—predictably and sustainably.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/book-growth"
                className="bg-gradient-to-r from-[#70E000] to-[#5ac000] text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#70E000]/50 transition-all inline-flex items-center gap-2"
              >
                BOOK YOUR GROWTH CALL
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="border border-zinc-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-900 transition-all"
              >
                EXPLORE OUR WORK
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 bg-black relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#70E000]/10 via-[#70E000]/5 to-[#70E000]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main Card */}
            <div className="relative bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 md:p-8 backdrop-blur-sm">
              {/* DNA Helix Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#70E000]/10 border border-[#70E000]/20 flex items-center justify-center">
                  <Dna className="w-6 h-6 text-[#70E000]" />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 text-center">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Leadgentic is built from the fusion of <span className="text-white font-medium">lead generation</span> and <span className="text-white font-medium">genetics</span>.
                </p>

                <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  More than a name, it represents our core belief—<span className="text-gray-200">growth should be engineered into your business</span>, not chased through isolated campaigns.
                </p>

                <div className="pt-2">
                  <p className="text-sm text-gray-500 leading-relaxed italic">
                    Just as genetics define the blueprint of life, Leadgentic designs the blueprint for scalable marketing success.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-950 relative">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #70E000 1px, transparent 1px),
            linear-gradient(to bottom, #70E000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              The <span className="text-[#70E000]">Leadgentic Approach</span> (step by step)
            </h2>
            <p className="text-gray-400 text-lg">What we do, why we do it, and how we think</p>
          </motion.div>
          
          <div className="space-y-4">
            {[
              {
                number: "01",
                title: "What We Do",
                subtitle: "Intelligent marketing systems",
                description: "At Leadgentic, we design and deploy intelligent marketing systems powered by artificial intelligence, automation, and strategic thinking. We go beyond lead acquisition by creating ecosystems that attract, convert, and retain customers at scale. Every system is engineered to align seamlessly with your business structure, optimizing each step of the customer journey with precision, purpose, and performance.",
                features: ["AI-Powered Systems", "Strategic Automation", "Customer Ecosystems", "Scalable Architecture", "Performance Optimization", "Data-Driven Insights"]
              },
              {
                number: "02",
                title: "Our Mission",
                subtitle: "We build systems, not campaigns",
                description: "Our mission is to revolutionize how businesses grow by combining cutting-edge AI with human creativity and strategic expertise. We don't run campaigns. We build systems. Systems that eliminate guesswork, accelerate results, and empower ambitious businesses to scale faster, smarter, and more sustainably. Growth isn't something we chase—it's something we engineer into your DNA.",
                features: ["Eliminate Guesswork", "Accelerate Results", "Sustainable Growth", "Strategic Expertise", "AI-Human Synergy", "Engineered Success"]
              },
              {
                number: "03",
                title: "Our Vision",
                subtitle: "Effortless scaling through engineering",
                description: "Our vision is to become the most trusted growth partner for modern businesses, locally and globally, by redefining what's possible with AI-powered marketing. We see a future where scaling a business feels effortless—because every interaction, automation, and decision is engineered for impact and long-term performance. This is where marketing meets engineering.",
                features: ["Trusted Partnership", "Global Impact", "AI-Powered Future", "Effortless Scaling", "Engineered Decisions", "Long-term Performance"]
              },
              {
                number: "04",
                title: "Why Leadgentic",
                subtitle: "Growth is engineered, not improvised",
                description: "Because real growth isn't improvised. It's engineered. With Leadgentic, you're not just investing in marketing—you're embedding a scalable growth system designed to evolve with your business and perform in any market. Every system we build is tailored to your unique business goals, market dynamics, and customer behavior. This is precision marketing at scale.",
                features: ["Strategic Precision", "Market Adaptability", "Scalable Systems", "Business Evolution", "Performance Guarantee", "Tailored Solutions"]
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
                      ? 'bg-zinc-900/80 border-[#70E000] shadow-lg shadow-[#70E000]/10' 
                      : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
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
                        : 'bg-zinc-800/50 text-gray-500 border border-zinc-700'
                      }
                    `}>
                      {step.number}
                    </div>

                    {/* Title & Subtitle */}
                    <div className="flex-1">
                      <h3 className={`
                        text-xl md:text-2xl font-semibold mb-1 transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-gray-400'}
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
                                ? 'bg-zinc-800/60 border border-[#70E000]/20 text-gray-300' 
                                : 'bg-zinc-800/30 border border-zinc-700 text-gray-600'}
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

      {/* Why Leadgentic - Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-950 relative">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(to right, #70E000 1px, transparent 1px),
            linear-gradient(to bottom, #70E000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <Dna className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Why Choose Us</span>
            </div>
            
            <h2 className="text-[30px] mb-8" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              Why <span className="text-[#70E000]">Leadgentic</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-base text-gray-300 leading-relaxed">
                Because real growth isn't improvised. It's <span className="text-[#70E000] font-semibold">engineered</span>.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                With Leadgentic, you're not just investing in marketing—you're embedding a <strong className="text-white">scalable growth system</strong> designed to evolve with your business and perform in any market.
              </p>
            </div>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-[#70E000]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center mb-4">
                <Dna className="w-5 h-5 text-[#70E000]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Strategic Precision</h3>
              <p className="text-base text-gray-400 leading-relaxed">
                Every system we build is tailored to your unique business goals, market dynamics, and customer behavior.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-[#70E000]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center mb-4">
                <Dna className="w-5 h-5 text-[#70E000]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">AI-Powered Systems</h3>
              <p className="text-base text-gray-400 leading-relaxed">
                Leverage cutting-edge artificial intelligence and automation to optimize every stage of your growth journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-[#70E000]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center mb-4">
                <Dna className="w-5 h-5 text-[#70E000]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Scalable Growth</h3>
              <p className="text-base text-gray-400 leading-relaxed">
                Our systems are designed to scale with you, ensuring sustainable growth regardless of market conditions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}