import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "@/app/components/Footer";

export function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center px-6 py-20">
        {/* Background gradient effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#70E000]/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 
              className="text-[120px] md:text-[200px] font-light leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#70E000] via-[#a3ff00] to-[#70E000]"
              style={{ fontFamily: "'Maxima Nouva', sans-serif" }}
            >
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mb-12"
          >
            <h2 
              className="text-3xl md:text-5xl font-light text-white"
              style={{ fontFamily: "'Maxima Nouva', sans-serif" }}
            >
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#70E000] to-[#5ac000] text-black px-8 py-4 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-[#70E000]/50 transition-all inline-flex items-center gap-2 min-h-[44px]"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </motion.button>
            </Link>

            <Link to="/case-studies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zinc-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-900 transition-all inline-flex items-center gap-2 min-h-[44px]"
              >
                <ArrowLeft className="w-5 h-5" />
                View Case Studies
              </motion.button>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <p className="text-sm text-gray-500 mb-6">Quick Links</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/paid-ads" 
                className="text-sm text-gray-400 hover:text-[#70E000] transition-colors"
              >
                Paid Advertising
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                to="/web-design" 
                className="text-sm text-gray-400 hover:text-[#70E000] transition-colors"
              >
                Web Design
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                to="/seo" 
                className="text-sm text-gray-400 hover:text-[#70E000] transition-colors"
              >
                SEO Services
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                to="/book-growth" 
                className="text-sm text-gray-400 hover:text-[#70E000] transition-colors"
              >
                Book a Call
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                to="/about" 
                className="text-sm text-gray-400 hover:text-[#70E000] transition-colors"
              >
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
