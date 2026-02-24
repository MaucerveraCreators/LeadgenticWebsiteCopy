import { ArrowLeft } from "lucide-react";
import logoImage from "figma:asset/effc1ab0651418bd5ac7971ac0325998b1bf0ee0.png";

interface PrivacyPolicyProps {
  onClose: () => void;
}

export function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto max-w-5xl px-6 py-6">
          <div className="flex items-center justify-between">
            <img src={logoImage} alt="Leadgentic" className="h-7" />
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-400 hover:text-[#70E000] transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Site</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 py-16">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-light mb-4" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
            PRIVACY <span className="text-[#70E000]">POLICY</span>
          </h1>
          <p className="text-gray-400">Last Updated: January 2026</p>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-gray-300 leading-relaxed mb-6">
            This Privacy Policy explains how <strong className="text-white">Creators Consulting LLC, DBA Leadgentic</strong> ("Leadgentic," "we," "us," or "our") collects, uses, and protects your information.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This Privacy Policy should be read together with our Terms & Conditions. By using our website, you agree to both.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              1. Information We Collect
            </h2>
            
            <h3 className="text-lg font-medium text-white mb-3 mt-6">Information You Provide</h3>
            <p className="text-gray-300 leading-relaxed mb-3">We may collect:</p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Name</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Email address</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Phone number</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Business information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Any data submitted via forms, calendars, or communications</span>
              </li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-3">Automatically Collected Information</h3>
            <p className="text-gray-300 leading-relaxed mb-3">We may collect:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>IP address</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Device and browser data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Pages visited and interaction data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Referring URLs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Cookies and tracking data</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              2. How We Use Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">We use information to:</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Respond to inquiries and bookings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Provide consultations and services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Communicate via email, SMS, and phone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Improve site performance and marketing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Deliver targeted advertising</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Operate AI-powered automation and CRM systems</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed font-medium">
              We do not sell personal information.
            </p>
          </section>

          {/* Section 3 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              3. SMS & Email Compliance
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By providing your contact information, you consent to receive communications as described in the Terms & Conditions, including automated messages.
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">You may opt out:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span><strong className="text-white">SMS:</strong> Reply STOP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span><strong className="text-white">Email:</strong> Use the unsubscribe link</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              4. Cookies & Tracking
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies, pixels, and similar technologies to analyze performance and support advertising.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You may disable cookies through your browser settings, though functionality may be affected.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              5. Third-Party Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">We may share data with trusted providers for:</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>CRM and automation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Advertising platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Scheduling and communications</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              These providers are contractually required to protect your information.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              6. Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We use reasonable safeguards to protect your data. No system is 100% secure.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              7. CCPA Rights (California)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">California residents may:</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Request access to personal data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Request deletion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Opt out of data sharing</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Submit requests to:{' '}
              <a href="mailto:hello@leadgentic.com" className="text-[#70E000] hover:underline">
                hello@leadgentic.com
              </a>
            </p>
          </section>

          {/* Section 8 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              8. GDPR Rights (EU)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">EU residents may:</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Access, correct, or delete data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Restrict or object to processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Withdraw consent</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Contact us to exercise these rights.
            </p>
          </section>

          {/* Section 9 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              9. Children's Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our Site is not intended for individuals under 19 years of age.
            </p>
          </section>

          {/* Section 10 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              10. Policy Updates
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy at any time. Continued use constitutes acceptance.
            </p>
          </section>

          {/* Section 11 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              11. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong className="text-white">Creators Consulting LLC, DBA Leadgentic</strong>
            </p>
            <p className="text-gray-300 leading-relaxed">
              Email:{' '}
              <a href="mailto:hello@leadgentic.com" className="text-[#70E000] hover:underline">
                hello@leadgentic.com
              </a>
            </p>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-16 pt-12 border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-[#70E000] text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-[#5fc000] transition-all duration-300 shadow-[0_0_30px_rgba(112,224,0,0.3)] hover:shadow-[0_0_40px_rgba(112,224,0,0.5)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Site
          </button>
        </div>
      </div>
    </div>
  );
}
