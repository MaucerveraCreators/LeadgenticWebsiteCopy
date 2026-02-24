import { Shield, Lock, Eye, Users, Globe, Mail, FileText, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "@/app/components/Footer";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#70E000]/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#70E000]/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#70E000]/10 border border-[#70E000]/20 backdrop-blur-sm mb-8">
              <Shield className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Legal Document</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            
            <p className="text-base text-gray-400 mb-4">
              Last Updated: January 2026
            </p>

            <p className="text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              This Privacy Policy explains how <strong>Creators Consulting LLC, DBA Leadgentic</strong> ("Leadgentic," "we," "us," or "our") collects, uses, and protects your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-8 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-[#70E000] flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-300 leading-relaxed">
                This Privacy Policy should be read together with our Terms & Conditions. By using our website, you agree to both.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Information We Collect */}
      <section className="py-12 md:py-16 px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Information You Provide</h3>
                <p className="text-gray-300 mb-4">We may collect:</p>
                <ul className="space-y-2">
                  {[
                    "Name",
                    "Email address",
                    "Phone number",
                    "Business information",
                    "Any data submitted via forms, calendars, or communications"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Automatically Collected Information</h3>
                <p className="text-gray-300 mb-4">We may collect:</p>
                <ul className="space-y-2">
                  {[
                    "IP address",
                    "Device and browser data",
                    "Pages visited and interaction data",
                    "Referring URLs",
                    "Cookies and tracking data"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: How We Use Information */}
      <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">2. How We Use Information</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <p className="text-gray-300 mb-4">We use information to:</p>
              <ul className="space-y-3">
                {[
                  "Respond to inquiries and bookings",
                  "Provide consultations and services",
                  "Communicate via email, SMS, and phone",
                  "Improve site performance and marketing",
                  "Deliver targeted advertising",
                  "Operate AI-powered automation and CRM systems"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-zinc-700">
                <p className="text-[#70E000] font-semibold">We do not sell personal information.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: SMS & Email Compliance */}
      <section className="py-12 md:py-16 px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. SMS & Email Compliance</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                By providing your contact information, you consent to receive communications as described in the Terms & Conditions, including automated messages.
              </p>
              <div>
                <p className="text-white font-semibold mb-3">You may opt out:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#70E000] font-bold">SMS:</span>
                    <span className="text-gray-300 text-sm">Reply STOP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#70E000] font-bold">Email:</span>
                    <span className="text-gray-300 text-sm">Use the unsubscribe link</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Cookies & Tracking */}
      <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Cookies & Tracking</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                We use cookies, pixels, and similar technologies to analyze performance and support advertising.
              </p>
              <p className="text-gray-300">
                You may disable cookies through your browser settings, though functionality may be affected.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Third-Party Services */}
      <section className="py-12 md:py-16 px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Third-Party Services</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">We may share data with trusted providers for:</p>
              <ul className="space-y-2">
                {[
                  "CRM and automation",
                  "Analytics",
                  "Advertising platforms",
                  "Scheduling and communications"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[#70E000]/20">
                <p className="text-white font-semibold">
                  These providers are contractually required to protect your information.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Data Security */}
      <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">6. Data Security</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <p className="text-gray-300">
                We use reasonable safeguards to protect your data. No system is 100% secure.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: CCPA Rights (California) */}
      <section className="py-12 md:py-16 px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">7. CCPA Rights (California)</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">California residents may:</p>
              <ul className="space-y-2">
                {[
                  "Request access to personal data",
                  "Request deletion",
                  "Opt out of data sharing"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[#70E000]/20">
                <p className="text-white">
                  Submit requests to:{" "}
                  <a href="mailto:hello@leadgentic.com" className="text-[#70E000] hover:underline font-semibold">
                    hello@leadgentic.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: GDPR Rights (EU) */}
      <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">8. GDPR Rights (EU)</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">EU residents may:</p>
              <ul className="space-y-2">
                {[
                  "Access, correct, or delete data",
                  "Restrict or object to processing",
                  "Withdraw consent"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-zinc-700">
                <p className="text-white">Contact us to exercise these rights.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Children's Privacy */}
      <section className="py-12 md:py-16 px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">9. Children's Privacy</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6">
              <p className="text-gray-300">
                Our Site is not intended for individuals under 19 years of age.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Policy Updates */}
      <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">10. Policy Updates</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <p className="text-gray-300">
                We may update this Privacy Policy at any time. Continued use constitutes acceptance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 11: Contact Us */}
      <section className="py-12 md:py-16 px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#70E000]/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">11. Contact Us</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-8 text-center">
              <p className="text-xl font-semibold text-white mb-4">
                Creators Consulting LLC, DBA Leadgentic
              </p>
              <p className="text-gray-300 mb-2">
                Email:{" "}
                <a href="mailto:hello@leadgentic.com" className="text-[#70E000] hover:underline font-semibold">
                  hello@leadgentic.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
