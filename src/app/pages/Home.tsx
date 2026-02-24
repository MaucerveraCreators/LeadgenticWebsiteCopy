import { ArrowRight, Play, Check, Users, TrendingUp, Zap, Target, ChevronRight, Star, ArrowUpRight, Wrench, Sparkles, Shield, Activity, Home as HomeIcon, Smile } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { FAQ } from "@/app/components/FAQ";
import { Footer } from "@/app/components/Footer";
import { MobileMenu } from "@/app/components/MobileMenu";
import { InfiniteScroll } from "@/app/components/InfiniteScroll";
import { LogoCarousel } from "@/app/components/LogoCarousel";
import { ScrollRevealText } from "@/app/components/ScrollRevealText";
import { AnimatedReveal } from "@/app/components/AnimatedReveal";
import { ServiceCard } from "@/app/components/ServiceCard";
import { CaseCarousel } from "@/app/components/CaseCarousel";
import { NicheCard } from "@/app/components/NicheCard";
import { VideoTestimonialCarousel } from "@/app/components/VideoTestimonialCarousel";
import { ProcessTimeline } from "@/app/components/ProcessTimeline";
import { TestimonialCarousel } from "@/app/components/TestimonialCarousel";
import { TestimonialGridDesktop } from "@/app/components/TestimonialGridDesktop";
import { CustomIcon } from "@/app/components/CustomIcon";
import { InitialsAvatar } from "@/app/components/InitialsAvatar";
import TrustpilotWidget from "@/imports/Group19";
import CreativityImages from "@/imports/Group22";
import ConversionMetrics from "@/imports/Group25";
import Group1000003482 from "@/imports/Group1000003482";
import VectorLogo from "@/imports/Vector";
import webDesignImage from "figma:asset/dbb23acea66e232bd5296527b4d9e7063e61cc0f.png";
import seoGrowthImage from "figma:asset/a26157005ae8156913c551b153153a6bec89bb6e.png";
import biofuseImage from "figma:asset/c1d647e3cb5fd851a3bbf585e8be19dfc8a95e88.png";
import euroluxeImage from "figma:asset/5a580211104d2d24e3caabd785a1fd39d2bf9544.png";
import houseOfLeonImage from "figma:asset/24733d33acce30def5bf4755cd17c2f6ebf86d7f.png";
import joesOnJollyImage from "figma:asset/8e65e4dd8a0b2c992c7870013eff5adb4b44050e.png";
import atmosphereImage from "figma:asset/debdbfc96fb84b110ca67da11efad301bb142f9b.png";
import skyglossImage from "figma:asset/a8dd965fc22ca8056483abdae41aa525fd83ad8e.png";
// Business context carousel images - Leadgentic niches
import carouselAutoStyling from "figma:asset/ebdeee8576c16f0399979c3672e0f9b27228d44f.png";
import carouselIVTherapy from "figma:asset/a8cfc7e3dd8bc96450f72bf1df23d186b715c349.png";
import carouselHomeServices from "figma:asset/7c838fe7b362fdd722f2293552d96b073e3f11cd.png";
import carouselHospitality from "figma:asset/0390ad571f77e0d38f4b0ec9ceb1bd462a43549a.png";
import carouselAutoGlass from "figma:asset/53e37b47c41c58e65ce79ae545ada26e891582fb.png";
import carouselRoofing from "figma:asset/702cacd29cb636aaf7cb4ff9be868cc048a73008.png";

// Eye Kandy Customs logo for testimonial
import eyeKandyLogo from "figma:asset/25bb29bd9fb31bb581cd9b07f964d232c1b2259f.png";

// Zervas Facility Maintenance logo for testimonial
import zervasLogo from "figma:asset/fca3671184b9edf7c0ee942c280ee43f6a1811c9.png";

// Cars Renewed logo for testimonial
import carsRenewedLogo from "figma:asset/01cbb32e79bfcdbe1d81f7a599458fc29e65f8e4.png";

// Tristan Walker profile picture for testimonial
import tristanWalkerPhoto from "figma:asset/33a2821e1906d54b2e6bf38172675ecb50437c6b.png";

// Bryan Quintero company logo for testimonial
import bryanQuinteroLogo from "figma:asset/464c4ee255532463483a6f17f7c5d20fd82ca485.png";

const columnOneImages = [
  carouselAutoStyling,
  carouselIVTherapy,
  carouselHomeServices,
  carouselHospitality,
  carouselAutoGlass,
  carouselRoofing,
];

const columnTwoImages = [
  carouselHospitality,
  carouselAutoGlass,
  carouselRoofing,
  carouselAutoStyling,
  carouselIVTherapy,
  carouselHomeServices,
];

// Logos de clientes - Todos los 22 logos actualizados (Enero 2026)
import clientLogo1 from "figma:asset/89aa29e6e9d544d4bfa32ea86058321d4a93eb3d.png";
import clientLogo2 from "figma:asset/f3505b9f9f3412d9481aca4dbcbc3307565d2b57.png";
import clientLogo3 from "figma:asset/7f984cf5bff6b7e9aafd800965f5929e61c54748.png";
import clientLogo4 from "figma:asset/e27676cd71e1ff976ced6a06b60ffd80184a90f5.png";
import clientLogo5 from "figma:asset/39c4a0cff154388354d8d5e78b4814d1c87c2992.png";
import clientLogo6 from "figma:asset/a5c4afd2deee268176b68d761d3c78eb220ec438.png";
import clientLogo7 from "figma:asset/a3a542523bf09a2d10330237e63fed92cf521fbe.png";
import clientLogo8 from "figma:asset/868cad418e919997cc3ebf260900e3ea9bd2bf52.png";
import clientLogo9 from "figma:asset/6fc36c043e5dd80e4b772421955c5fa66f1419fb.png";
import clientLogo10 from "figma:asset/eb8fef314a184b778d37de163b71371623b03f1c.png";
import clientLogo11 from "figma:asset/e0f58557838bd844e6e3749cea05af2d51686234.png";
import clientLogo12 from "figma:asset/ffca5f1c1d45d947684c49abc22b83140b9770fa.png";
import clientLogo13 from "figma:asset/07af089f86f66bcf52fa5f67f29b095a3918169e.png";
import clientLogo14 from "figma:asset/876f0ccbf5a7dc0806a660ef8594b0ec52d8d387.png";
import clientLogo15 from "figma:asset/cf4e924286a390fb5b585b65841f6af957ffa148.png";
import clientLogo16 from "figma:asset/7a378a87c43ea0413620c80e3b578cb94c00876d.png";
import clientLogo17 from "figma:asset/246b79885069349c0540d4f0c8d61e1d5a12d027.png";
import clientLogo18 from "figma:asset/67c1dfa729d967f6528f87916d7569fc7e14877a.png";
import clientLogo19 from "figma:asset/909e1626ea7a8025f630df22aa04e4e587be8482.png";
import clientLogo20 from "figma:asset/3abacc528baf461c063a67a4eabd2f75b055ee0b.png";
import clientLogo21 from "figma:asset/b9234ce402f6d920f0b13b6b897245efbcca3681.png";
import clientLogo22 from "figma:asset/3b9aef52d7bf8972d59c0f6ffb7689381c61b0a2.png";

// Updated client logos - January 2026
const clientLogos = [
  {
    name: "Client Logo 1",
    component: (
      <img 
        src={clientLogo1} 
        alt="Client Logo 1" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 2",
    component: (
      <img 
        src={clientLogo2} 
        alt="Client Logo 2" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 3",
    component: (
      <img 
        src={clientLogo3} 
        alt="Client Logo 3" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 4",
    component: (
      <img 
        src={clientLogo4} 
        alt="Client Logo 4" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 5",
    component: (
      <img 
        src={clientLogo5} 
        alt="Client Logo 5" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 6",
    component: (
      <img 
        src={clientLogo6} 
        alt="Client Logo 6" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 7",
    component: (
      <img 
        src={clientLogo7} 
        alt="Client Logo 7" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 8",
    component: (
      <img 
        src={clientLogo8} 
        alt="Client Logo 8" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 9",
    component: (
      <img 
        src={clientLogo9} 
        alt="Client Logo 9" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 10",
    component: (
      <img 
        src={clientLogo10} 
        alt="Client Logo 10" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 11",
    component: (
      <img 
        src={clientLogo11} 
        alt="Client Logo 11" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 12",
    component: (
      <img 
        src={clientLogo12} 
        alt="Client Logo 12" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 13",
    component: (
      <img 
        src={clientLogo13} 
        alt="Client Logo 13" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 14",
    component: (
      <img 
        src={clientLogo14} 
        alt="Client Logo 14" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 15",
    component: (
      <img 
        src={clientLogo15} 
        alt="Client Logo 15" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 16",
    component: (
      <img 
        src={clientLogo16} 
        alt="Client Logo 16" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 17",
    component: (
      <img 
        src={clientLogo17} 
        alt="Client Logo 17" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 18",
    component: (
      <img 
        src={clientLogo18} 
        alt="Client Logo 18" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 19",
    component: (
      <img 
        src={clientLogo19} 
        alt="Client Logo 19" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 20",
    component: (
      <img 
        src={clientLogo20} 
        alt="Client Logo 20" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 21",
    component: (
      <img 
        src={clientLogo21} 
        alt="Client Logo 21" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
  {
    name: "Client Logo 22",
    component: (
      <img 
        src={clientLogo22} 
        alt="Client Logo 22" 
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    ),
  },
];

const caseStudies = [
  {
    category: "MEDSPA",
    title: "Biofuse",
    metric: "From $0 To Millions In Rev",
    description: "How we helped Biofuse scale their revenue with AI-powered lead generation",
    services: ["Website Redesign", "SEO", "CRM & Funnels", "OGC Content", "Reputation Management", "Video Editing", "Meta Ads", "Google Ads"],
    image: biofuseImage,
    accentColor: "#70E000",
    link: "/biofuse-case-study"
  },
  {
    category: "AUTO DETAILING",
    title: "Euroluxe",
    metric: "3X Revenue in 1 Year",
    description: "From feast-or-famine to $100K+/month auto styling operation",
    services: ["Website Redesign", "SEO", "CRM & Funnels", "OGC Content", "Reputation Management", "Video Editing", "Meta Ads", "Google Ads"],
    image: euroluxeImage,
    accentColor: "#70E000",
    link: "/euroluxe-case-study"
  },
  {
    category: "AUTO GLASS",
    title: "Cars Renewed",
    metric: "Scalable Operations",
    description: "From missed calls and chaos to a scalable autoglass operation",
    services: ["CRM & Funnels", "SEO", "Reputation Management", "Google Ads"],
    image: "https://images.unsplash.com/photo-1769396377479-84ea885017cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwZ2xhc3MlMjB3aW5kc2hpZWxkJTIwcmVwYWlyfGVufDF8fHx8MTc3MDI1MjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#70E000",
    link: "/cars-renewed-case-study"
  },
  {
    category: "AUTO REPAIR",
    title: "Auto Clinic of Eastpoint",
    metric: "Quality Leads",
    description: "How an 80-year Michigan shop replaced low-quality leads with buyers ready to book",
    services: ["SEO", "Google Ads", "CRM & Funnels", "Reputation Management"],
    image: "https://images.unsplash.com/photo-1619642737579-a7474bee1044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwc2hvcCUyMG1lY2hhbmljfGVufDF8fHx8MTc3MDI1MjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#70E000",
    link: "/auto-clinic-case-study"
  },
  {
    category: "PERFORMANCE TUNING",
    title: "DME Tuning Texas",
    metric: "$120K/Month",
    description: "From brand-new shop to $120K/month in under 4 months",
    services: ["Website Redesign", "SEO", "Meta Ads", "Google Ads", "CRM & Funnels"],
    image: "https://images.unsplash.com/photo-1761044586074-0ac212b113cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwdHVuaW5nJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzcwMjUyMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#70E000",
    link: "/dme-tuning-case-study"
  },
  {
    category: "CUSTOM AUTO",
    title: "Eye Kandy Customs",
    metric: "$55K in 30 Days",
    description: "From $8,000 months to $55,000 in 30 days — and booked a month out",
    services: ["Website Redesign", "SEO", "Meta Ads", "Google Ads", "CRM & Funnels", "Video Editing"],
    image: "https://images.unsplash.com/photo-1759295199382-aa4f1bc50db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjdXN0b20lMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzcwMjUyMzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#70E000",
    link: "/eye-kandy-case-study"
  },
  {
    category: "HOME REMODELING",
    title: "Happy Casa",
    metric: "$150K+/Month",
    description: "From invisible online to a $150K+/month home remodeling business",
    services: ["Website Redesign", "SEO", "Google Ads", "Meta Ads", "CRM & Funnels"],
    image: "https://images.unsplash.com/photo-1746439318854-4a8bc02a03ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwcmVtb2RlbGluZ3xlbnwxfHx8fDE3NzAyNTIzODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#70E000",
    link: "/happy-casa-case-study"
  },
  {
    category: "AUTO SPA",
    title: "Honolulu Exotics Auto Spa",
    metric: "Booked Out",
    description: "From word-of-mouth to being booked out a month in advance",
    services: ["Website Redesign", "SEO", "Google Ads", "CRM & Funnels", "Reputation Management"],
    image: euroluxeImage,
    accentColor: "#70E000",
    link: "/honolulu-exotics-case-study"
  },
  {
    category: "CERAMIC COATING",
    title: "Naples Ceramic Coating",
    metric: "$30K Weeks",
    description: "From wasted ad spend to $30,000 weeks by owning Google locally",
    services: ["SEO", "Google Ads", "CRM & Funnels", "Reputation Management"],
    image: "https://images.unsplash.com/photo-1572359249699-5ced96364f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29hdGluZyUyMGNhcnxlbnwxfHx8fDE3NzAyNTIzODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#70E000",
    link: "/naples-ceramic-case-study"
  },
  {
    category: "CUSTOM AUTO",
    title: "Nunez Customs",
    metric: "10× Growth",
    description: "From $3,000 months to a 10× business — at just 18 years old",
    services: ["Website Redesign", "SEO", "Meta Ads", "Google Ads", "CRM & Funnels", "Video Editing"],
    image: "https://images.unsplash.com/photo-1764770074600-3b3d79462f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBhdXRvJTIwYm9keSUyMHBhaW50fGVufDF8fHx8MTc3MDI1MjM4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#70E000",
    link: "/nunez-customs-case-study"
  },
  {
    category: "B2B SAAS",
    title: "Phone Animal",
    metric: "2X MRR in 45 Days",
    description: "Doubling lead flow and MRR in 45 days — B2B SaaS success",
    services: ["Website Redesign", "SEO", "Google Ads", "Meta Ads", "CRM & Funnels"],
    image: "https://images.unsplash.com/photo-1761207850745-d41a776ef897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHJlcGFpciUyMHNob3B8ZW58MXx8fHwxNzcwMjUyMzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#70E000",
    link: "/phone-animal-case-study"
  },
  {
    category: "AUTO FINISHING",
    title: "Royal Auto Finishes",
    metric: "Record Months",
    description: "From underfilled schedule to back-to-back record months",
    services: ["Website Redesign", "SEO", "Google Ads", "CRM & Funnels", "Reputation Management"],
    image: "https://images.unsplash.com/photo-1761934658331-2e00b20dc6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwZGV0YWlsaW5nJTIwZmluaXNofGVufDF8fHx8MTc3MDI1MjM4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#70E000",
    link: "/royal-auto-finishes-case-study"
  },
];

const processSteps = [
  {
    number: 1,
    title: "INSIGHT",
    description: "We identify where revenue is leaking — and where scale is possible."
  },
  {
    number: 2,
    title: "STRATEGY",
    description: "We define positioning, messaging, funnels, and acquisition channels into a clear roadmap."
  },
  {
    number: 3,
    title: "BUILD",
    description: "We design and deploy a scalable, AI-powered system built for performance and ease of use."
  },
  {
    number: 4,
    title: "LAUNCH",
    description: "We test, refine, and optimize until the system performs reliably."
  },
  {
    number: 5,
    title: "SUPPORT",
    description: "Ongoing monitoring, optimization, and improvement to ensure continued growth."
  }
];

const testimonials = [
  // Testimonios más cortos primero
  {
    image: tristanWalkerPhoto,
    name: "Tristan Walker",
    role: "Business Owner",
    company: "Leadgentic Client",
    quote: "10/10 would recommend! They took us from 5-10k a month to over 45k consistently. Great team and great communication. Will use them for a very long time!",
    metric: "$5-10k → $45k+",
    metricLabel: "consistent monthly growth"
  },
  {
    image: "",
    name: "Keldric Hatchett",
    role: "Business Owner",
    company: "Leadgentic Client",
    quote: "They came along at the perfect time, my business has almost doubled in just under 6 months. Very thankful for Alec and his team of professionals.",
    metric: "Business Doubled",
    metricLabel: "in under 6 months",
    useInitials: true,
    initials: "KH",
    initialsColor: "#78919C"
  },
  {
    image: "",
    name: "EJ",
    role: "Business Owner",
    company: "Leadgentic Client",
    quote: "2.5 months in and loving it. Very transparent in what the expectations are on both ends. We did take a chance, but it was worth it, highly recommended if you want to take your marketing to the next level.",
    metric: "2.5 Months",
    metricLabel: "worth the chance",
    useInitials: true,
    initials: "EJ",
    initialsColor: "#DAFFE1"
  },
  {
    image: bryanQuinteroLogo,
    name: "Bryan Quintero",
    role: "Business Owner",
    company: "Leadgentic Client",
    quote: "Leadgentic provided excellent services and delivered on their promise. Professionalism and quality work is what they're all about. I had no issues landing jobs and leads were always coming in",
    metric: "Delivered on Promise",
    metricLabel: "professionalism & quality"
  },
  {
    image: zervasLogo,
    name: "Brandon Zervas",
    role: "Business Owner",
    company: "Zervas Facility Maintenance Inc.",
    quote: "Amazing company, great design and marketing campaigns! The team redid our website, helped with SEO, language and marketing and brought our company to the next level and we certainly have profited from this partnership, highly recommend!",
    metric: "Next Level",
    metricLabel: "business transformation",
    imagePosition: "left"
  },
  {
    image: "",
    name: "Easton Wyatt",
    role: "Business Owner",
    company: "Leadgentic Client",
    quote: "What an amazing experience! It took us around four months to notice a drastic change in our business; we went from $25k to $60k. We were able to rank higher and draw in more clients because of their SEO knowledge. They even put in free labor till we accomplished our goal.",
    metric: "$25k → $60k",
    metricLabel: "in 4 months",
    useInitials: true,
    initials: "EW",
    initialsColor: "#FFF7C4"
  },
  // Testimonios más largos al final
  {
    image: "",
    name: "Mitchelle Chisholm",
    role: "Business Owner",
    company: "Leadgentic Client",
    quote: "We have been working with Leadgentic for the past 3 months and have had some really great traction building our business on META platforms. There was some small stuff that needed to be corrected at the get go of our relationship, but I will say that's nothing compared to the MAJOR positive outcome we have had. 3 months in a row working with them has been the best revenue months of 2024. If you want a team that has your back on growing your marketing and getting you opportunity to grow, don't look any further than Leadgentic. Can't wait to hit that double revenue benchmark we set out to do from the beginning.",
    metric: "Best Revenue",
    metricLabel: "3 months of record growth",
    useInitials: true,
    initials: "MC",
    initialsColor: "#679F37"
  },
  {
    image: eyeKandyLogo,
    name: "Eye Kandy Customs",
    role: "Auto Detailing & Customization",
    company: "Leadgentic Client",
    quote: "Leadgentic is a team, not a transaction. If you look at marketing as a vending machine you can simply purchase leads from, then Leadgentic isn't for you. If you are wanting to make an investment into your company, then trust that they will bring a team of dedicated people to help you grow. Their team members work to learn your company and industry to ensure they provide the best service. If you have any questions about our experience with them feel free to reach out.",
    metric: "Team-First",
    metricLabel: "partnership approach"
  },
  {
    image: carsRenewedLogo,
    name: "Cars Renewed",
    role: "Auto Detailing Business",
    company: "Leadgentic Client",
    quote: "Very impressed by the whole team at Leadgentic. Have seen our number of leads almost double in the past few months. Total revenue month to month is way up as well. We always felt like we were just on the verge of getting to the next level with our business but after trying other marketing companys we ended up always wondering if the dollar amount spent was really getting a return. Leadgentic has proven they are worth the investment. It's scary putting money out there and trusting someone else to deliver sometimes but after being hesitant the first few months we are now confident that it was the right decision and will continue to trust the relationship we have been building. This company isn't just here to take your money. They want long lasting customers and they want to grow along side you. Give these guys a chance and it'll be a great business decision.",
    metric: "Doubled Leads",
    metricLabel: "worth the investment"
  }
];

const videoTestimonials = [
  {
    videoUrl: "https://www.youtube.com/shorts/dMuqsgPubq8",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MzIwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Jeremy Dallas Jones",
    role: "Oahu, Hawaii",
    company: "Honolulu Exotics"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/1UuiD-4qJ9U",
    thumbnail: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Auto Clinic",
    role: "Michigan",
    company: "Auto Clinic"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/9JubdqZQL8I",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Ethan",
    role: "Memphis, Tennessee",
    company: "Eye Kandy Customs"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/eI7z9LLKWTI",
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Caleb Vasquez",
    role: "Tomball, TX",
    company: "Euroluxe Detailing"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/OJEfaGxUHOo",
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjgzMjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Sean Kanters",
    role: "Austin, TX",
    company: "Clean Solutions"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/fBt6IDwfGuE",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXR8ZW58MXx8fHwxNzY4MzIwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Shaun Bunting",
    role: "South Jordan, UT",
    company: "Deseret Glass"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/bhn5Gr07SdE",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Ibrahim",
    role: "San Bruno, California",
    company: "360 Tints and Body"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/zo1YOm5PZYE",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NjgzMjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Brandon",
    role: "Tucson, AZ",
    company: "MB Coatmasters"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/yYNPUImh2c4",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Sam",
    role: "Auto Detailing",
    company: "Auto Detailing"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/TivN1h5hjcI",
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Santos",
    role: "California",
    company: "Mickeys Tints"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/vmVZk97zfR4",
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjgzMjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Alan",
    role: "Gypsum, CO",
    company: "Deluxe Detailing"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/ABtAv38KacI",
    thumbnail: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Mark Messina",
    role: "Naples",
    company: "Naples Ceramic Coating"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/72RJmsP10hw",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Apollo",
    role: "O'Fallon - St. Charles",
    company: "Cars Renewed Auto Glass"
  },
  {
    videoUrl: "https://www.youtube.com/shorts/QaYgpSmEALE",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NjgzMjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Sean Winters",
    role: "Clinton Township, Michigan",
    company: "586 Tint Factory"
  }
];

export function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Content */}
      <div className="pt-32 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Content */}
            <div className="space-y-4 py-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm max-w-fit">
                <div className="w-2 h-2 bg-[#a3ff00] rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-xs leading-relaxed uppercase tracking-wide">
                  AI-POWERED. ALWAYS ON.
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-3 pt-1">
                <h1 className="text-[32px] md:text-[42px] leading-tight">
                  <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#A8C4A8] bg-clip-text text-transparent">
                    Predictable Revenue
                  </span>
                  <br />
                  <span className="text-white">for Service Businesses</span>
                  <br />
                  <span className="text-white">Powered by AI</span>
                </h1>

                <p className="text-gray-400 text-base max-w-xl leading-relaxed pt-0.5">
                  Leadgentic installs and manages AI-powered growth systems that generate qualified leads, book appointments, and scale revenue — without hiring an internal marketing team.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-1">
                <Link to="/book-growth" className="bg-[#70E000] text-black px-8 py-2.5 rounded-full text-sm font-medium hover:bg-[#5fc000] transition-colors flex items-center gap-2">
                  BOOK A FREE GROWTH CALL
                  <CustomIcon className="w-4 h-4" />
                </Link>
                <button className="border border-white/20 text-white px-8 py-2.5 rounded-full text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                  SEE HOW IT WORKS
                  <CustomIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Trustpilot Reviews */}
              <div className="pt-2">
                <div className="relative w-[210px] h-[28px]">
                  <TrustpilotWidget />
                </div>
              </div>
            </div>

            {/* Right Side - Infinite Scrolling Images (2 Columns) */}
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              <div className="h-full relative">
                <InfiniteScroll images={columnOneImages} speed={1.1} />
              </div>
              <div className="h-full pt-12 relative">
                <InfiniteScroll images={columnTwoImages} speed={1.1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section - Built for Automatic Growth */}
      <div className="mt-48 pt-20 pb-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          {/* Heading */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl leading-tight text-black">
              <span className="lg:hidden">
                Most Agencies Sell Tactics. <span className="text-[#70E000]">We Build Revenue Systems.</span>
              </span>
              <span className="hidden lg:inline">
                Most Agencies Sell Tactics.<br />
                <span className="text-[#70E000]">We Build Revenue Systems.</span>
              </span>
            </h2>
            <p className="text-gray-600 text-base">
              Automated by AI. Strategically managed by experts.
            </p>
          </div>

          {/* Video Container with Subtle Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl"
          >
            {/* YouTube Video Embed */}
            <iframe
              src="https://www.youtube.com/embed/5bYMUfD7QaA?autoplay=0&controls=1&rel=0&modestbranding=1"
              title="Agentic AI Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Services Section - Our Core Services */}
      <div className="mt-0 pb-32 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 py-24">
            
            {/* Left Side - Header - Sticky */}
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              {/* SERVICES label */}
              <motion.p 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8,
                  delay: 0,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="text-sm text-gray-500 tracking-wider"
              >
                SERVICES
              </motion.p>

              {/* Title with staggered lines */}
              <h2 className="text-3xl leading-tight">
                <motion.span 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="text-white inline-block"
                >
                  Everything You Need to Scale — <span className="text-[#70E000]">In One System</span>
                </motion.span>
              </h2>

              {/* Description paragraph */}
              <motion.p 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.45,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="text-gray-400 text-base leading-relaxed"
              >
                Leadgentic delivers a complete, AI-driven growth platform designed to help service businesses attract, engage, and convert high-quality customers consistently.
              </motion.p>

              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="pt-4"
              >
                <button className="bg-[#70E000] text-black px-10 py-3 rounded-full text-sm font-medium hover:bg-[#5fc000] transition-colors flex items-center gap-2">
                  SEE MORE
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Right Side - Services List */}
            <div className="space-y-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <ServiceCard
                  number="01"
                  title="AI-Powered Lead Generation & Paid Advertising"
                  description="We build AI-driven acquisition engines across Google, Meta, TikTok, and Bing, turning paid traffic into qualified leads, booked calls, and real revenue — not clicks."
                  image="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGF0YSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzAyNjM0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  link="/paid-ads"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <ServiceCard
                  number="02"
                  title="Web Design, Landing Pages & Sales Funnels"
                  description="Conversion-optimized pages and funnels designed to turn traffic into leads and appointments at scale."
                  image={webDesignImage}
                  link="/web-design"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <ServiceCard
                  number="03"
                  title="SEO & Organic Growth"
                  description="Long-term visibility strategies that build authority, inbound demand, and sustainable lead flow."
                  image={seoGrowthImage}
                  link="/seo-service"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <ServiceCard
                  number="04"
                  title="Marketing Automation & CRM Systems"
                  description="Automated follow-ups, pipeline tracking, and real-time reporting — paired with live call center appointment setting and sales support to turn leads into booked calls and closed revenue."
                  image="https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm0lMjBhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjBzeXN0ZW18ZW58MXx8fHwxNzcwMjYzNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  link="/crm-automation"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Featured Cases Section */}
      <div className="mt-0 pb-8 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="py-16">
            
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-light text-black">
                  Real Businesses.<br />
                  Real Revenue.<br />
                  <span className="text-[#70E000]">Real Systems.</span>
                </h2>
                <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
                  We believe in work that's not just built to function, but built to shift brand perception, elevate experience, and drive measurable results. That's the standard we create for.
                </p>
              </div>
              
              {/* View More Button */}
              <button className="group bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 whitespace-nowrap self-start lg:self-auto">
                VIEW MORE
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Cases Carousel */}
            <CaseCarousel cases={caseStudies} />

          </div>
        </div>
      </div>

      {/* Our Niches Section */}
      <div className="mt-0 pb-8 md:pb-12 px-6 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-7xl">
          <div className="py-12">
            
            {/* Header */}
            <div className="text-center mb-6">
              <p className="text-xs text-black font-semibold tracking-[0.2em] mb-6 uppercase" style={{ fontFamily: "'Maxima Nouva', sans-serif", fontStyle: "normal" }}>
                <span className="hidden md:inline">FOCUSED INDUSTRIES. PROVEN SYSTEMS. </span>SCALABLE GROWTH.
              </p>
              <h2 className="text-3xl lg:text-4xl font-light text-black">
                We Specialize in Industries<br />
                <span className="text-[#70E000]">Where Revenue Must Be Predictable</span>
              </h2>
            </div>

            {/* Description */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <p className="text-gray-600 text-base leading-relaxed">
                Leadgentic builds AI-powered revenue systems for high-intent, service-based businesses where booked appointments, show rates, and deal size actually matter — not vanity metrics.
              </p>
            </div>

            {/* Niches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NicheCard
                Icon={Wrench}
                title="Mechanics & Auto Body Shops"
                description="We capture urgent, high-intent searches and turn breakdowns and collisions into booked jobs — keeping bays full with consistent inbound demand."
                link="/mechanics"
              />
              <NicheCard
                Icon={Sparkles}
                title="Autostyling & Restyling Shops"
                description="We attract premium vehicle owners, pre-qualify leads, and book high-ticket consultations for PPF, ceramic, wraps, and detailing — not price shoppers."
                link="/auto-styling"
              />
              <NicheCard
                Icon={Shield}
                title="Auto Glass Shops"
                description="Speed wins. Our systems respond instantly, capture insurance-driven demand, and convert break-fix searches into scheduled installs."
                link="/auto-glass"
              />
              <NicheCard
                Icon={Activity}
                title="IV Therapy & Weight Loss Clinics"
                description="We build compliant acquisition systems that educate patients, automate booking, and convert interest into recurring treatment plans."
                link="/iv-therapy"
              />
              <NicheCard
                Icon={HomeIcon}
                title="Home Services"
                description="We dominate local intent, automate follow-up, and turn missed calls into booked estimates — even after hours."
                link="/home-services"
              />
              <NicheCard
                Icon={Smile}
                title="Dentists & Orthodontists"
                description="We attract qualified patients, nurture trust over time, and consistently book high-value consultations for general and specialty care."
                link="/dentists"
              />
            </div>

            {/* Bottom Text */}
            <div className="text-center max-w-4xl mx-auto mt-12">
              <p className="text-gray-600 text-base leading-relaxed">
                Each industry requires a different strategy  but every Leadgentic system is built around the same goal: predictable revenue, automated follow-up, and measurable ROI.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Clients Who Speak for Us - Video Testimonials Section */}
      <div className="mt-0 pb-4 md:pb-12 px-0 md:px-6 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-7xl">
          <div className="py-8 md:py-12">
            
            {/* Header - Centered */}
            <div className="text-center mb-16 px-6 md:px-0">
              <p className="text-xs text-black font-semibold tracking-[0.2em] mb-6 uppercase" style={{ fontFamily: "'Maxima Nouva', sans-serif", fontStyle: "normal" }}>
                CLIENT SUCCESS STORIES
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black max-w-4xl mx-auto leading-[1.15]">
                A Proven System — <span className="text-[#70E000]">Not Guesswork</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt-6 leading-relaxed">
                Real results from real businesses using Leadgentic's revenue systems.<br />
                Founders, owners, and operators share their experience working with Leadgentic — and the measurable growth they achieved.
              </p>
            </div>

            {/* Video Testimonials Carousel */}
            <VideoTestimonialCarousel testimonials={videoTestimonials} speed={1.2} />

          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="mt-0 pb-16 md:pb-32 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 py-8 md:py-24">
            
            {/* Left Side - Sticky */}
            <div className="space-y-4 md:space-y-6 lg:sticky lg:top-24 lg:self-start">
              <p className="text-sm text-gray-500 tracking-wider">OUR PROCESS</p>
              <h2 className="text-4xl md:text-5xl leading-tight">
                <span className="text-white">A Proven System — <span className="text-[#70E000]">Not Guesswork</span></span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Every Leadgentic engagement follows a clear, intentional process designed to deliver clarity, performance, and scalable growth.
              </p>
              
              {/* CTA Button */}
              <div className="pt-2 md:pt-4">
                <button className="bg-[#70E000] text-black px-10 py-3 rounded-full text-sm font-medium hover:bg-[#5fc000] transition-colors flex items-center gap-2">
                  BOOK A CALL
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side - Timeline */}
            <div className="lg:pl-12">
              <ProcessTimeline steps={processSteps} />
            </div>

          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}