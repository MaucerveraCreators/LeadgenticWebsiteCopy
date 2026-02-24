import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Footer } from "@/app/components/Footer";

// Import case study images
import biofuseImage from "@/assets/c1d647e3cb5fd851a3bbf585e8be19dfc8a95e88.png";
import euroluxeImage from "@/assets/5a580211104d2d24e3caabd785a1fd39d2bf9544.png";
import carsRenewedImage from "@/assets/53e37b47c41c58e65ce79ae545ada26e891582fb.png";
import autoClinicImage from "@/assets/1b748fedf74ce92746a7e4bede2bb5090cc3b954.png";
import dmeTuningImage from "@/assets/a6eed85f2d64631e44daf2a075831ca56306b8db.png";
import eyeKandyImage from "@/assets/e95a124318545f7badc0f8277e07f384b5b18c9c.png";
import happyCasaImage from "@/assets/356536329955ba44021bb6b8f8cf572dc6ff6f1e.png";
import honoluluExoticsImage from "@/assets/c5aa9865605d7d09a4ce1c6d505d1503589684cb.png";
import naplesCeramicImage from "@/assets/e862cb9cb072decc7731eb89b44c543a2f613d24.png";
import nunezCustomsImage from "@/assets/af5cd7bc0b7b6702ce66dde7542acf42695e3fa9.png";
import phoneAnimalImage from "@/assets/ebdc14cf7ba8356254ce27a5ad45c3444e6c9a82.png";
import royalAutoFinishesImage from "@/assets/a2328589f8bfd0ea672022a0a3d448fa6b043204.png";

interface CaseStudy {
  name: string;
  industry: string;
  oneLine: string;
  slug: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    name: "Cars Renewed",
    industry: "Autoglass",
    oneLine: "From missed calls to a multi-van operation with 400+ five-star reviews.",
    slug: "/cars-renewed-case-study",
    image: carsRenewedImage
  },
  {
    name: "Naples Ceramic Coating",
    industry: "Autostyling",
    oneLine: "From wasted ad spend to ~$30K weeks by owning Google locally.",
    slug: "/naples-ceramic-case-study",
    image: naplesCeramicImage
  },
  {
    name: "Eye Kandy Customs",
    industry: "Autostyling",
    oneLine: "From $8K months to $55K in 30 days — booked out a month ahead.",
    slug: "/eye-kandy-case-study",
    image: eyeKandyImage
  },
  {
    name: "DME Tuning",
    industry: "Performance Tuning",
    oneLine: "From brand-new shop to $120K/month in under four months.",
    slug: "/dme-tuning-case-study",
    image: dmeTuningImage
  },
  {
    name: "Biofuse Wellness",
    industry: "Health & Wellness",
    oneLine: "From no infrastructure to a multi-location health optimization brand.",
    slug: "/biofuse-case-study",
    image: biofuseImage
  },
  {
    name: "Euroluxe Detailing",
    industry: "Autostyling",
    oneLine: "3X'd revenue in 12 months — from $40K to $100K+ monthly.",
    slug: "/euroluxe-case-study",
    image: euroluxeImage
  },
  {
    name: "Auto Clinic of Eastpoint",
    industry: "Auto Repair",
    oneLine: "287% lead increase through strategic positioning and reputation.",
    slug: "/auto-clinic-case-study",
    image: autoClinicImage
  },
  {
    name: "Happy Casa",
    industry: "Home Services",
    oneLine: "Scaled from local contractor to regional home services authority.",
    slug: "/happy-casa-case-study",
    image: happyCasaImage
  },
  {
    name: "Honolulu Exotics Auto Spa",
    industry: "Autostyling",
    oneLine: "Premium luxury detailing with predictable $40K+ months.",
    slug: "/honolulu-exotics-case-study",
    image: honoluluExoticsImage
  },
  {
    name: "Nunez Customs",
    industry: "Autostyling",
    oneLine: "From inconsistent leads to fully booked premium paint protection.",
    slug: "/nunez-customs-case-study",
    image: nunezCustomsImage
  },
  {
    name: "Phone Animal",
    industry: "B2B Services",
    oneLine: "Built authority in competitive tech repair market with SEO & OGC.",
    slug: "/phone-animal-case-study",
    image: phoneAnimalImage
  },
  {
    name: "Royal Auto Finishes",
    industry: "Autostyling",
    oneLine: "Dominated local market with organic SEO + paid ads synergy.",
    slug: "/royal-auto-finishes-case-study",
    image: royalAutoFinishesImage
  }
];

const growthFormula = [
  {
    step: "01",
    title: "Authority First",
    description: "We turn the owner into the brand. Through Owner Generated Content (OGC), we establish trust before the first click. Prospects don't wonder who you are — they already feel like they know you."
  },
  {
    step: "02",
    title: "Multi-Platform Demand Capture",
    description: "We meet buyers where intent already exists. AI-powered campaigns across Google, Meta, TikTok, and Bing capture demand at every stage — from discovery to decision. No reliance on a single channel. No guessing."
  },
  {
    step: "03",
    title: "Conversion Infrastructure",
    description: "Traffic doesn't convert itself. We build landing pages, funnels, and websites that pre-frame value, filter out low-intent leads, and set expectations before the call. Result: fewer leads, better conversations."
  },
  {
    step: "04",
    title: "Organic Authority That Compounds",
    description: "Paid traffic creates momentum. SEO creates leverage. AI-driven SEO and local authority systems turn your business into the obvious choice — producing what feels like 'free leads' over time."
  },
  {
    step: "05",
    title: "No Lead Left Behind",
    description: "Automation + humans close the loop. Every lead enters a world-class CRM with automated follow-up, pipeline tracking, and speed-to-lead systems. When needed: live call center appointment setting and sales support. Nothing leaks."
  }
];

const commonProblems = [
  "Inconsistent lead flow",
  "Low-quality inquiries",
  "Wasted ad spend",
  "Missed calls and slow follow-up",
  "No visibility into what's actually working"
];

export function Niches() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1. HERO SECTION — BELIEF SETTER */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#70E000]/30 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#70E000]/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 
              className="text-[48px] font-light mb-8 leading-tight"
              style={{ fontFamily: "'Maxima Nouva', sans-serif" }}
            >
              Real Businesses. <br />
              Real Systems. <br />
              <span 
                className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent"
              >
                Real Growth.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              These aren't one-off wins or lucky campaigns.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every case study below follows the same Leadgentic growth formula — a system designed to turn service businesses into predictable revenue machines.
            </p>

            <Link
              to="/book-growth"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#70E000] to-[#8fd400] text-black px-10 py-5 rounded-full font-semibold text-lg hover:from-[#8fd400] hover:to-[#70E000] transition-all duration-300 shadow-[0_0_40px_rgba(112,224,0,0.4)] hover:shadow-[0_0_60px_rgba(112,224,0,0.6)] group"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF STRIP */}
      <section className="relative py-12 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1a0a]/30 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#70E000]/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto max-w-4xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main trust badge container */}
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-[0_0_80px_rgba(112,224,0,0.15)]">
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#70E000] to-transparent rounded-full" />
              
              {/* Content */}
              <div className="text-center space-y-6">
                {/* Header with icon */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#70E000] animate-pulse" />
                  <p className="text-sm font-semibold text-[#70E000] uppercase tracking-widest">
                    Trusted Nationwide
                  </p>
                  <div className="w-2 h-2 rounded-full bg-[#70E000] animate-pulse" />
                </div>

                {/* Main text */}
                <h3 className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                  Trusted by service businesses <br className="hidden md:block" />
                  <span className="text-gray-300">across the U.S.</span>
                </h3>

                {/* Industries pills */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  {['Autostyling', 'Autoglass', 'Home Services', 'Health', 'Performance', 'B2B'].map((industry, index) => (
                    <motion.span
                      key={industry}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 font-medium hover:bg-white/10 hover:border-[#70E000]/30 hover:text-white transition-all duration-300"
                    >
                      {industry}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom tagline */}
                <div className="pt-4 flex items-center justify-center gap-2">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
                  <p className="text-sm text-gray-400 font-light italic">
                    From single-owner operators to multi-location brands
                  </p>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
                </div>
              </div>

              {/* Bottom accent glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#70E000]/30 to-transparent rounded-full blur-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE PATTERN (HEART OF THE PAGE) */}
      <section className="relative py-10 md:py-12">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-[36px] font-light mb-8"
              style={{ fontFamily: "'Maxima Nouva', sans-serif" }}
            >
              The Pattern Behind <span className="text-[#70E000]">Every Win</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              If you read every case study on this page, you'll notice something important:
            </p>

            <div className="pl-6 border-l-2 border-[#70E000]/30 space-y-2 text-gray-400">
              <p>Different industries.</p>
              <p>Different markets.</p>
              <p>Different starting points.</p>
            </div>

            <p className="pt-4">
              But the <span className="text-white font-medium">same problems</span> keep showing up:
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <ul className="space-y-3">
                {commonProblems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#70E000] mt-1">×</span>
                    <span className="text-gray-300">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="pt-6 text-xl text-white">
              And the <span className="text-[#70E000]">same solution</span> keeps winning.
            </p>

            <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-10 md:p-12">
              <div className="text-center space-y-6">
                {/* Cross-out items */}
                <div className="space-y-3">
                  <p className="text-lg text-gray-500 line-through">Not tactics.</p>
                  <p className="text-lg text-gray-500 line-through">Not hacks.</p>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-4 py-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
                  <div className="w-2 h-2 rounded-full bg-[#70E000]" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
                </div>

                {/* Main statement */}
                <p className="text-[36px] text-[#70E000] font-light" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
                  A system.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE LEADGENTIC FORMULA */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-black via-[#0a1a0a]/50 to-black">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-[36px] font-light mb-6"
              style={{ fontFamily: "'Maxima Nouva', sans-serif" }}
            >
              The Leadgentic <span className="text-[#70E000]">Growth Formula</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {growthFormula.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#70E000]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#70E000]/10 border border-[#70E000]/30 flex items-center justify-center">
                      <span className="text-[#70E000] text-xl font-bold font-mono">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#70E000] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASE STUDIES GRID — THE PROOF WALL */}
      <section className="relative py-10 md:py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-[36px] font-light mb-6"
              style={{ fontFamily: "'Maxima Nouva', sans-serif" }}
            >
              Proof Across <span className="text-[#70E000]">Industries</span>
            </h2>
            <p className="text-xl text-gray-400">
              Same system. Different markets. Predictable outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={study.slug}
                  className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#70E000]/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(112,224,0,0.2)]"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-black/50">
                    <img
                      src={study.image}
                      alt={study.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs text-[#70E000] font-mono font-semibold mb-2 uppercase tracking-wider">
                      {study.industry}
                    </p>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#70E000] transition-colors">
                      {study.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {study.oneLine}
                    </p>
                    <div className="flex items-center gap-2 text-[#70E000] text-sm font-medium group-hover:gap-3 transition-all">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE REFRAME */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-black via-[#0a1a0a]/50 to-black">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-[36px] font-light mb-8"
              style={{ fontFamily: "'Maxima Nouva', sans-serif" }}
            >
              This Isn't Luck — <span className="text-[#70E000]">It's Leverage</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              These results didn't happen because of:
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">×</span>
                  <span className="text-gray-400 line-through">Special markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">×</span>
                  <span className="text-gray-400 line-through">Insider secrets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">×</span>
                  <span className="text-gray-400 line-through">Unrealistic promises</span>
                </li>
              </ul>
            </div>

            <p className="pt-4">
              They happened because once the right system is installed, <span className="text-white font-medium">growth stops being fragile</span>.
            </p>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-transparent border border-[#70E000]/20 rounded-2xl p-8">
              <p className="text-gray-300 mb-4">When:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>Trust is built up front</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>Demand is captured intentionally</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                  <span>Leads are filtered and followed up correctly</span>
                </li>
              </ul>
              <p className="text-xl text-[#70E000] font-medium mt-6">
                Revenue becomes predictable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}