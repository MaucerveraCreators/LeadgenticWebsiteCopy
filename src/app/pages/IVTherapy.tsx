import { ArrowRight, Check, TrendingUp, Users, Target, Zap, BarChart3, Clock, Shield, Award, Sparkles, Activity, ArrowUpRight, Phone, MessageSquare, Calendar, Heart, Droplets, Scale, Stethoscope, UserCheck, Eye } from "lucide-react";
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

// IV Therapy Metrics Data
const ivTherapyMetrics = [
  { icon: TrendingUp, metric: "4.8x", description: "More consultation bookings vs. manual follow-up" },
  { icon: Clock, metric: "<2hr", description: "Average response time to patient inquiries" },
  { icon: Users, metric: "87%", description: "Patient education-to-booking conversion rate" },
  { icon: Shield, metric: "24/7", description: "AI availability for patient questions" },
  { icon: Phone, metric: "94%", description: "Reduction in missed appointment opportunities" },
  { icon: BarChart3, metric: "3.9x", description: "ROI on patient acquisition campaigns" },
  { icon: Target, metric: "$225K", description: "Average annual revenue increase" },
  { icon: Award, metric: "#1", description: "Local search authority in wellness category" },
  { icon: MessageSquare, metric: "100%", description: "Patients nurtured through decision phase" },
  { icon: Zap, metric: "2.7x", description: "Faster booking-to-appointment velocity" },
  { icon: Activity, metric: "91%", description: "Patient satisfaction rating" },
  { icon: ArrowUpRight, metric: "63%", description: "More recurring treatment bookings" },
];

// Auto-Typing Search Component
function AutoTypingSearch() {
  const [text, setText] = useState("");
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const fullText = "IV therapy near me";

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
    }, 80);

    return () => clearInterval(typingInterval);
  }, [isInView]);

  return (
    <div ref={ref} className="flex-1">
      <input
        type="text"
        value={text}
        readOnly
        className="w-full bg-transparent text-gray-800 text-sm outline-none"
        placeholder="Search Google or type a URL"
      />
    </div>
  );
}

export function IVTherapy() {
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">IV Therapy & Weight Loss</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Authority, Trust, and
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Consistent Patient Bookings.
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Leadgentic builds AI-powered growth systems for IV therapy and weight loss clinics that generate qualified patient inquiries, organic authority, and recurring appointments.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
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

            {/* Service Types */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#70E000]" />
                IV Therapy
              </span>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#70E000]" />
                Weight Loss
              </span>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#70E000]" />
                Wellness Programs
              </span>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span className="flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-[#70E000]" />
                Medical Spa
              </span>
            </div>
          </motion.div>

          {/* IV Therapy Metrics Carousel */}
          <div className="relative w-full overflow-hidden mt-16 py-8">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 animate-scroll-iv-therapy">
              {ivTherapyMetrics.map((metric, index) => (
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
            @keyframes scroll-iv-therapy {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            
            .animate-scroll-iv-therapy {
              animation: scroll-iv-therapy 8s linear infinite;
            }
            
            .animate-scroll-iv-therapy:hover {
              animation-play-state: paused;
            }

            @media (max-width: 768px) {
              .animate-scroll-iv-therapy {
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
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              Patients don't <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">book immediately</span>.
            </h2>
            <p className="text-lg text-gray-400 mb-8">They need:</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MessageSquare, title: "Education", description: "Understanding treatment benefits and safety" },
              { icon: Shield, title: "Reassurance", description: "Trust in the clinic and practitioner expertise" },
              { icon: Phone, title: "Follow-up", description: "Gentle nurturing through the decision phase" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#70E000]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#70E000]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8 text-center"
          >
            <p className="text-2xl font-bold text-white">
              Most clinics lose patients in the <span className="text-[#70E000]">consideration phase</span>, not the ad phase.
            </p>
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">How Top Clinics Scale</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-tight">
              The clinics that scale don't <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">chase patients</span>.
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 mb-8">
              <p className="text-xl lg:text-2xl font-bold leading-tight">
                They <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">educate, nurture, and stay visible</span> — automatically.
              </p>
            </div>

            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-12">
              Leadgentic builds that system — AI + education content + automated nurturing — so patients book when ready.
            </p>

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
                      <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.10-11.65l-22.49.01z"/>
                    </svg>
                    
                    {/* Search Input */}
                    <AutoTypingSearch />
                  </div>
                </div>

                {/* Search Results with Animation */}
                <div className="bg-gray-50 px-6 py-6 relative">
                  <p className="text-[10px] text-gray-500 mb-4 px-1">About 1,340,000 results (0.49 seconds)</p>

                  {/* Animated Results Container */}
                  <motion.div 
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                  >
                    {/* Result #1 - YOUR CLINIC (Animates from position 3 to 1) */}
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
                          <Droplets className="w-3.5 h-3.5 text-black" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xs font-semibold text-gray-900 truncate">Revive Wellness Clinic</h3>
                          <p className="text-[10px] text-gray-600 truncate">www.revivewellnessclinic.com</p>
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
                        IV Therapy & Weight Loss - Medical Spa & Wellness Center
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed mb-3">
                        Expert IV hydration therapy, medical weight loss programs, and wellness treatments. Board-certified providers. Free consultations. Book your appointment today.
                      </p>
                      
                      {/* Sitelinks */}
                      <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
                        <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5" />
                          Book Consultation
                        </a>
                        <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                          <Phone className="w-2.5 h-2.5" />
                          (555) 234-5678
                        </a>
                        <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                          <Droplets className="w-2.5 h-2.5" />
                          IV Treatments
                        </a>
                        <a href="#" className="text-[10px] text-blue-700 hover:underline flex items-center gap-1">
                          <Scale className="w-2.5 h-2.5" />
                          Weight Loss Programs
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
                          <h3 className="text-[10px] text-gray-600 truncate">Basic IV Lounge</h3>
                          <p className="text-[9px] text-gray-500 truncate">www.basicivlounge.com</p>
                        </div>
                      </div>
                      <h4 className="text-xs text-blue-700 mb-1">IV Therapy Services Near You</h4>
                      <p className="text-[10px] text-gray-600 line-clamp-2">Quick IV drips available. Walk-ins welcome...</p>
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
                          <h3 className="text-[10px] text-gray-600 truncate">Generic Wellness Spa</h3>
                          <p className="text-[9px] text-gray-500 truncate">www.genericwellness.com</p>
                        </div>
                      </div>
                      <h4 className="text-xs text-blue-700 mb-1">Wellness Services Available</h4>
                      <p className="text-[10px] text-gray-600 line-clamp-2">Various wellness treatments offered...</p>
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
                    <span className="font-semibold text-[#70E000]">Your clinic dominates #1</span> — capturing patients actively searching for IV therapy and wellness treatments
                  </p>
                </motion.div>
              </div>
            </motion.div>
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Patient Acquisition</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 tracking-tight">
              AI Ads + <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Authority-Based OGC</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* OGC Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 hover:border-[#70E000]/40 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#70E000]/20 border border-[#70E000]/30 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Authority-Based OGC</h3>
                  <p className="text-gray-400 text-sm">Owner-Generated Content</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 text-sm font-medium">
                Seeing the clinic owner explain treatments, safety, and expected outcomes <span className="text-[#70E000] font-bold">builds trust before booking</span>.
              </p>

              <div className="space-y-2">
                {[
                  { icon: Stethoscope, text: "Film short treatment explanations" },
                  { icon: Shield, text: "Address safety concerns proactively" },
                  { icon: Users, text: "Share real patient transformations" },
                  { icon: Award, text: "Position yourself as the expert" }
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

            {/* AI Optimization Card */}
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
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">AI Optimization</h3>
                  <p className="text-gray-400 text-sm">Smart campaign management</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Optimize for booked consultations — not curiosity clicks",
                  "Test educational vs. promotional messaging",
                  "Scale winning content automatically",
                  "Target wellness-conscious demographics precisely"
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

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
          >
            <h3 className="text-base font-bold text-white mb-4">The Difference:</h3>
            <p className="text-gray-300 text-sm mb-4">
              Most ads generate curiosity. Authority-based OGC generates <span className="text-[#70E000] font-semibold">trust and bookings</span>.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Patients arrive pre-educated",
                "Higher consultation-to-booking rates",
                "Less price resistance"
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
        </div>
      </section>

      {/* PART 2: AI SEO Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <div className="w-5 h-5 rounded-full bg-[#70E000] flex items-center justify-center text-black text-[10px] font-bold">2</div>
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Long-Term Authority</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              AI SEO — <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Build Trust That Lasts</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Ads bring patients today. SEO builds <span className="text-[#70E000] font-semibold">lasting authority</span>.
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
                  "Educational blogs answering common patient questions",
                  "FAQ pages addressing safety and efficacy concerns",
                  "Local authority pages for IV therapy and weight loss",
                  "OGC content repurposed into evergreen SEO assets"
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
              <h3 className="text-base font-bold text-white mb-4">Over time, your clinic becomes:</h3>
              <div className="space-y-3">
                {[
                  { icon: Award, text: "The go-to wellness authority in your area" },
                  { icon: Shield, text: "The clinic patients trust before calling" },
                  { icon: TrendingUp, text: "The default choice for IV therapy & weight loss" }
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
              The result:
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
              Patients find you repeatedly — and book when ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PART 3: CRM + AI + HUMAN FOLLOW-UP Section */}
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
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Patient Nurturing</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              CRM + AI + <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Human Follow-Up</span>
            </h2>
            <p className="text-base text-gray-400">
              Where most clinics lose patients — we nurture them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* AI Nurtures */}
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
                <h3 className="text-lg font-bold text-white">AI Nurtures</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Educational content over time",
                  "Gentle reminders and updates",
                  "Personalized wellness tips"
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

            {/* Humans Qualify */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white">Humans Guide</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Real staff answers questions",
                  "Qualified booking assistance",
                  "Compassionate patient care"
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

            {/* Systems Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#70E000]" />
                </div>
                <h3 className="text-lg font-bold text-white">Systems Support</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Retention campaigns",
                  "Repeat visit reminders",
                  "Referral program automation"
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">The Result:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, text: "Higher booking conversion" },
                { icon: Heart, text: "Better patient relationships" },
                { icon: Award, text: "Increased lifetime value" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#70E000]/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#70E000]" />
                  </div>
                  <p className="text-white font-bold text-base text-center">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROOF Section */}
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
              <Award className="w-4 h-4 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Proof</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">
              Real Results from <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">Real Clinics</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#70E000] to-[#5ac000] flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Owner & Patient Testimonials</h3>
                  <p className="text-sm text-gray-400">Real transformations</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Before Leadgentic, we struggled with inconsistent bookings. Now, our educational content brings in pre-qualified patients who already understand our treatments. Our consultation-to-booking rate has never been higher."
              </p>
              <p className="text-[#70E000] text-sm font-semibold mt-4">— Dr. Sarah Chen, Wellness Clinic Owner</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#70E000]/20 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#70E000]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Case Studies</h3>
                  <p className="text-sm text-gray-400">Improved booking consistency</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                See how IV therapy and weight loss clinics are achieving consistent patient bookings, higher retention rates, and sustainable growth.
              </p>
              <button className="text-[#70E000] text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
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
              When <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">education</span> and{" "}
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">follow-up</span>{" "}
              <br className="md:hidden" />
              are systemized, patient growth{" "}
              <br className="md:hidden" />
              becomes reliable.
            </h2>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border-2 border-[#70E000]/30 rounded-2xl p-12 mb-12">
              <p className="text-2xl lg:text-3xl font-bold text-white">
                Growth becomes <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">predictable</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-2xl lg:text-5xl font-bold text-[#70E000] mb-2">
                  <AnimatedCounter end={4} suffix=".8x" />
                </p>
                <p className="text-gray-400">More Consultation Bookings</p>
              </div>
              <div>
                <p className="text-2xl lg:text-5xl font-bold text-[#70E000] mb-2">
                  <AnimatedCounter end={87} suffix="%" />
                </p>
                <p className="text-gray-400">Education-to-Booking Rate</p>
              </div>
              <div>
                <p className="text-2xl lg:text-5xl font-bold text-[#70E000] mb-2">
                  $<AnimatedCounter end={225} suffix="K" />
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