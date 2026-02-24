import { ArrowRight, ArrowUpRight, Search, Filter, TrendingUp, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
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
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  metric: string;
  description: string;
  services: string[];
  image: string;
  accentColor: string;
}

const allCaseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "/biofuse-case-study",
    category: "MEDSPA / IV THERAPY",
    title: "Biofuse Wellness",
    subtitle: "Building a Multi-Million Dollar Health Optimization Empire",
    metric: "From $0 To Millions In Revenue",
    description: "\"Leadgentic has evolved with us, side by side for almost a decade, making us the premier health optimization business in our markets.\"",
    services: ["Website Redesign", "SEO", "CRM & Funnels", "OGC Content", "Reputation Management", "Video Editing", "Meta Ads", "Google Ads"],
    image: biofuseImage,
    accentColor: "#70E000"
  },
  {
    id: "2",
    slug: "/euroluxe-case-study",
    category: "AUTO DETAILING",
    title: "Euroluxe Detailing",
    subtitle: "Scaling to Six Figures Monthly with Premium Services",
    metric: "3X Revenue in 1 Year",
    description: "\"We started with a goal of $40–$80K per month. Within a year, we were doing over $100,000/month and had 3X'd our revenue.\" — Caleb, Euroluxe Detailing",
    services: ["Website Redesign", "SEO", "CRM & Funnels", "OGC Content", "Reputation Management", "Video Editing", "Meta Ads", "Google Ads"],
    image: euroluxeImage,
    accentColor: "#70E000"
  },
  {
    id: "3",
    slug: "/cars-renewed-case-study",
    category: "AUTOMOTIVE / AUTO GLASS REPAIR",
    title: "Cars Renewed",
    subtitle: "Leading Auto Glass Repair & Replacement Services",
    metric: "$250K+ Revenue Growth",
    description: "From a local auto glass repair shop to the region's most trusted name in windshield replacement and auto glass services.",
    services: ["Website Redesign", "SEO", "CRM & Funnels", "OGC Content", "Reputation Management", "Video Editing", "Meta Ads", "Google Ads"],
    image: carsRenewedImage,
    accentColor: "#70E000"
  },
  {
    id: "4",
    slug: "/auto-clinic-case-study",
    category: "AUTOMOTIVE / AUTO REPAIR",
    title: "Auto Clinic",
    subtitle: "Premier Auto Repair & Collision Center Excellence",
    metric: "287% Lead Increase",
    description: "From struggling to compete to becoming the #1 choice for auto repair and collision services through strategic digital positioning and reputation building.",
    services: ["Website Redesign", "SEO", "Google Ads", "CRM & Funnels", "Reputation Management", "Video Editing"],
    image: autoClinicImage,
    accentColor: "#70E000"
  },
  {
    id: "5",
    slug: "/dme-tuning-case-study",
    category: "AUTOMOTIVE / PERFORMANCE TUNING",
    title: "DME Tuning",
    subtitle: "Building the Premier Performance Tuning Destination",
    metric: "450% ROI Growth",
    description: "Becoming the go-to performance tuning shop for enthusiasts through precision marketing and technical authority building.",
    services: ["Website Development", "SEO", "Google Ads", "Meta Ads", "Content Marketing", "Video Production"],
    image: dmeTuningImage,
    accentColor: "#70E000"
  },
  {
    id: "6",
    slug: "/eye-kandy-case-study",
    category: "AUTOMOTIVE / CUSTOM DETAILING",
    title: "Eye Kandy Customs",
    subtitle: "Creating a Luxury Brand in Custom Automotive Services",
    metric: "360% Revenue Jump",
    description: "Establishing a premium brand that commands higher prices and attracts high-value clients who appreciate craftsmanship.",
    services: ["Brand Development", "Website Design", "SEO", "Social Media", "Video Editing", "Google Ads"],
    image: eyeKandyImage,
    accentColor: "#70E000"
  },
  {
    id: "7",
    slug: "/happy-casa-case-study",
    category: "HOME SERVICES / CLEANING",
    title: "Happy Casa Cleaning",
    subtitle: "Scaling a Home Cleaning Business to Regional Leader",
    metric: "210% Client Growth",
    description: "From local cleaning service to the most trusted name in residential and commercial cleaning across multiple markets.",
    services: ["Website Redesign", "SEO", "Google Ads", "CRM Automation", "Reputation Management"],
    image: happyCasaImage,
    accentColor: "#70E000"
  },
  {
    id: "8",
    slug: "/honolulu-exotics-case-study",
    category: "AUTOMOTIVE / LUXURY RENTALS",
    title: "Honolulu Exotics",
    subtitle: "Building Hawaii's Premier Exotic Car Rental Brand",
    metric: "520% Booking Increase",
    description: "Creating an unforgettable brand experience that captures the premium exotic car rental market in paradise.",
    services: ["Brand Strategy", "Website Development", "SEO", "Social Media", "Video Content", "Google Ads"],
    image: honoluluExoticsImage,
    accentColor: "#70E000"
  },
  {
    id: "9",
    slug: "/naples-ceramic-case-study",
    category: "AUTOMOTIVE / CERAMIC COATING",
    title: "Naples Ceramic Coating",
    subtitle: "Premium Paint Protection & Market Dominance",
    metric: "$180K Revenue Growth",
    description: "Establishing authority in ceramic coating and paint protection while commanding premium pricing in a luxury market.",
    services: ["Website Design", "SEO", "Google Ads", "Meta Ads", "Content Strategy", "Reputation Management"],
    image: naplesCeramicImage,
    accentColor: "#70E000"
  },
  {
    id: "10",
    slug: "/nunez-customs-case-study",
    category: "AUTOMOTIVE / CUSTOM FABRICATION",
    title: "Nunez Customs",
    subtitle: "Custom Automotive Fabrication Excellence",
    metric: "340% Lead Growth",
    description: "Building a reputation for world-class custom fabrication work through strategic digital marketing and showcase content.",
    services: ["Website Redesign", "SEO", "Video Production", "Social Media", "Google Ads", "Meta Ads"],
    image: nunezCustomsImage,
    accentColor: "#70E000"
  },
  {
    id: "11",
    slug: "/phone-animal-case-study",
    category: "REAL ESTATE / LEAD GENERATION",
    title: "Phone Animal",
    subtitle: "Revolutionizing Real Estate Lead Generation",
    metric: "275% Lead Growth",
    description: "Transforming real estate prospecting with innovative lead generation systems that deliver consistent, high-quality opportunities for agents and brokers.",
    services: ["Lead Generation Systems", "Website Design", "CRM Integration", "Google Ads", "Meta Ads", "Automation"],
    image: phoneAnimalImage,
    accentColor: "#70E000"
  },
  {
    id: "12",
    slug: "/royal-auto-finishes-case-study",
    category: "AUTOMOTIVE / AUTO BODY",
    title: "Royal Auto Finishes",
    subtitle: "Premium Auto Body & Paint Excellence",
    metric: "395% Revenue Increase",
    description: "Becoming the preferred choice for high-end auto body work through quality positioning and digital marketing mastery.",
    services: ["Website Redesign", "SEO", "Google Ads", "Meta Ads", "CRM & Funnels", "Reputation Management", "Video Editing"],
    image: royalAutoFinishesImage,
    accentColor: "#70E000"
  }
];

export function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(allCaseStudies.map(cs => cs.category.split(" / ")[0])))];

  // Filter case studies
  const filteredCaseStudies = allCaseStudies.filter(cs => {
    const matchesCategory = selectedCategory === "All" || cs.category.startsWith(selectedCategory);
    const matchesSearch = cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cs.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cs.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#70E000]/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#70E000]/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-[#70E000] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#70E000] font-medium">CASE STUDIES</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Real Results,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Explore how we've helped businesses across industries achieve extraordinary growth through strategic digital marketing and AI-powered systems.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-full pl-12 pr-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#70E000]/50 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                      ${selectedCategory === category
                        ? 'bg-gradient-to-r from-[#70E000] to-[#5ac000] text-black shadow-lg shadow-[#70E000]/30'
                        : 'bg-zinc-900/50 border border-zinc-800 text-gray-400 hover:border-[#70E000]/50 hover:text-white'
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pt-4 pb-8 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-400">
              Showing <span className="text-[#70E000] font-semibold">{filteredCaseStudies.length}</span> {filteredCaseStudies.length === 1 ? 'case study' : 'case studies'}
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={caseStudy.slug} className="group block">
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#70E000]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#70E000]/10">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-sm text-[#70E000] border border-[#70E000]/30">
                          {caseStudy.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Title */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#70E000] transition-colors">
                          {caseStudy.title}
                        </h3>
                        <p className="text-sm text-gray-400">{caseStudy.subtitle}</p>
                      </div>

                      {/* Metric */}
                      <div className="flex items-center gap-2 py-3 px-4 rounded-xl bg-[#70E000]/5 border border-[#70E000]/20">
                        <TrendingUp className="w-5 h-5 text-[#70E000]" />
                        <span className="text-[#70E000] font-semibold">{caseStudy.metric}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                        {caseStudy.description}
                      </p>

                      {/* Services Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {caseStudy.services.slice(0, 3).map((service, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs bg-zinc-800/50 text-gray-400 border border-zinc-700"
                          >
                            {service}
                          </span>
                        ))}
                        {caseStudy.services.length > 3 && (
                          <span className="px-3 py-1 rounded-full text-xs bg-zinc-800/50 text-gray-400 border border-zinc-700">
                            +{caseStudy.services.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* View Case Study Link */}
                      <div className="pt-2">
                        <div className="flex items-center gap-2 text-[#70E000] font-semibold group-hover:gap-3 transition-all">
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">No case studies found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-gradient-to-r from-[#70E000] to-[#5ac000] text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#70E000]/50 transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}