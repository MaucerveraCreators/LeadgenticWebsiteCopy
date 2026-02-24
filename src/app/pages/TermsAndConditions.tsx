import { Shield, FileText, Calendar, AlertCircle, Ban, Scale, Globe, Mail, CheckCircle, Users } from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "@/app/components/Footer";

export function TermsAndConditions() {
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
              <Scale className="w-3.5 h-3.5 text-[#70E000]" />
              <span className="text-xs tracking-wider text-[#70E000] font-medium uppercase">Legal Document</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent">
                Terms & Conditions
              </span>
            </h1>
            
            <p className="text-base text-gray-400 mb-4">
              Last Updated: January 2026
            </p>

            <p className="text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              These Terms & Conditions ("Terms") govern your access to and use of the Leadgentic website and any related content, forms, booking tools, or communications (collectively, the "Site").
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
              <div className="space-y-3">
                <p className="text-sm text-gray-300 leading-relaxed">
                  The Site is owned and operated by <strong>Creators Consulting LLC</strong>, doing business as <strong>Leadgentic</strong> ("Leadgentic," "we," "us," or "our").
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  By accessing or using this Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the Site.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Eligibility */}
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
              <h2 className="text-2xl font-bold text-white">1. Eligibility</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <p className="text-gray-300">
                You must be at least <strong className="text-white">19 years of age</strong> to use this Site. By using the Site, you represent and warrant that you meet this requirement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Informational Purpose Only */}
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
              <h2 className="text-2xl font-bold text-white">2. Informational Purpose Only</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                The content on this Site is provided for general informational and marketing purposes only and does not constitute legal, financial, or professional advice.
              </p>
              <p className="text-white font-semibold">
                Use of the Site does not create a client relationship with Leadgentic.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Consultations, Offers & Acceptance */}
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
                <Calendar className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Consultations, Offers & Acceptance</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                Leadgentic may offer free consultations, strategy calls, or evaluations through the Site.
              </p>
              <ul className="space-y-3">
                {[
                  "Any consultation or discussion does not create an obligation for either party",
                  "There is no guarantee of acceptance as a client",
                  "Any paid services are governed exclusively by a separate written agreement",
                  "No services are rendered unless and until a separate agreement is executed"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: No Guarantees or Promises of Results */}
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
                <AlertCircle className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. No Guarantees or Promises of Results</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 space-y-4">
              <p className="text-white font-semibold">
                Leadgentic does not guarantee outcomes, revenue, performance, or results.
              </p>
              <p className="text-gray-300">
                Results may vary based on industry, market conditions, ad spend, competition, execution, and numerous factors outside our control.
              </p>
              <p className="text-[#70E000] font-semibold">
                Past performance does not guarantee future results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Communications Consent */}
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
              <h2 className="text-2xl font-bold text-white">5. Communications Consent (SMS, Email & Calls)</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-6">
              <p className="text-gray-300">
                By submitting a form, booking a call, or otherwise providing your contact information, you expressly consent to receive:
              </p>
              
              <ul className="space-y-2">
                {["Emails", "Phone calls", "SMS or MMS messages (including automated messages)"].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-300">
                These communications may be marketing or transactional in nature.
              </p>

              <div className="pt-4 border-t border-zinc-700">
                <p className="text-white font-semibold mb-3">You understand:</p>
                <ul className="space-y-2">
                  {[
                    "Message frequency may vary",
                    "Standard message and data rates may apply",
                    "You may opt out of SMS at any time by replying STOP",
                    "You may opt out of emails via unsubscribe links",
                    "Consent is not a condition of purchase"
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

      {/* Section 6: Third-Party Platforms & Services */}
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
              <h2 className="text-2xl font-bold text-white">6. Third-Party Platforms & Services</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                Leadgentic is not responsible for outages, changes, suspensions, or performance issues related to third-party platforms including but not limited to:
              </p>
              <ul className="space-y-2">
                {[
                  "Google",
                  "Meta",
                  "CRM providers",
                  "Hosting providers",
                  "Payment processors"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#70E000] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[#70E000]/20">
                <p className="text-white font-semibold">
                  Your use of such platforms is subject to their respective terms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Intellectual Property */}
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
              <h2 className="text-2xl font-bold text-white">7. Intellectual Property</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                All content on the Site — including text, graphics, frameworks, systems, branding, and design — is the exclusive intellectual property of Leadgentic.
              </p>
              
              <div className="pt-4 border-t border-zinc-700">
                <p className="text-white font-semibold mb-3">You may not:</p>
                <ul className="space-y-2">
                  {[
                    "Copy, reproduce, scrape, distribute, or repurpose content",
                    "Use our materials for competing services",
                    "Reverse-engineer or exploit any part of the Site"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[#70E000] font-semibold pt-2">
                Unauthorized use may result in legal action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Prohibited Use */}
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
                <Ban className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">8. Prohibited Use</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 space-y-4">
              <p className="text-white font-semibold">You agree not to:</p>
              <ul className="space-y-2">
                {[
                  "Use the Site for unlawful purposes",
                  "Attempt to gain unauthorized access to systems",
                  "Interfere with Site functionality",
                  "Misrepresent your identity or intent"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Limitation of Liability */}
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
                <AlertCircle className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">9. Limitation of Liability</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                To the fullest extent permitted by law, Leadgentic shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site.
              </p>
              <p className="text-[#70E000] font-semibold">
                Use of the Site is at your own risk.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Arbitration & Dispute Resolution */}
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
                <Scale className="w-5 h-5 text-[#70E000]" />
              </div>
              <h2 className="text-2xl font-bold text-white">10. Arbitration & Dispute Resolution</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6 space-y-4">
              <p className="text-gray-300">
                Any dispute arising out of or relating to these Terms or the Site shall be resolved by binding arbitration in the <strong className="text-white">State of Texas</strong>.
              </p>
              <p className="text-white font-semibold">
                You waive any right to a jury trial or to participate in a class action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 11: Governing Law */}
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
              <h2 className="text-2xl font-bold text-white">11. Governing Law</h2>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <p className="text-gray-300">
                These Terms are governed by the laws of the <strong className="text-white">State of Texas</strong>, without regard to conflict-of-law principles.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 12: Changes to These Terms */}
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
              <h2 className="text-2xl font-bold text-white">12. Changes to These Terms</h2>
            </div>

            <div className="bg-gradient-to-br from-[#70E000]/10 to-[#70E000]/5 border border-[#70E000]/20 rounded-xl p-6">
              <p className="text-gray-300">
                We may update these Terms at any time. Continued use of the Site after changes constitutes acceptance of the revised Terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 13: Contact Information */}
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
              <h2 className="text-2xl font-bold text-white">13. Contact Information</h2>
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
