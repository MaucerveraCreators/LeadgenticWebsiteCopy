import { ArrowLeft } from "lucide-react";
import logoImage from "figma:asset/effc1ab0651418bd5ac7971ac0325998b1bf0ee0.png";

interface TermsAndConditionsProps {
  onClose: () => void;
}

export function TermsAndConditions({ onClose }: TermsAndConditionsProps) {
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
            TERMS & <span className="text-[#70E000]">CONDITIONS</span>
          </h1>
          <p className="text-gray-400">Last Updated: January 2026</p>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-gray-300 leading-relaxed mb-6">
            These Terms & Conditions ("Terms") govern your access to and use of the Leadgentic website and any related content, forms, booking tools, or communications (collectively, the "Site").
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Site is owned and operated by <strong className="text-white">Creators Consulting LLC</strong>, doing business as Leadgentic ("Leadgentic," "we," "us," or "our").
          </p>
          <p className="text-gray-300 leading-relaxed">
            By accessing or using this Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the Site.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              1. Eligibility
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You must be at least 19 years of age to use this Site. By using the Site, you represent and warrant that you meet this requirement.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              2. Informational Purpose Only
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              The content on this Site is provided for general informational and marketing purposes only and does not constitute legal, financial, or professional advice.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Use of the Site does not create a client relationship with Leadgentic.
            </p>
          </section>

          {/* Section 3 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              3. Consultations, Offers & Acceptance
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Leadgentic may offer free consultations, strategy calls, or evaluations through the Site.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Any consultation or discussion does not create an obligation for either party</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>There is no guarantee of acceptance as a client</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Any paid services are governed exclusively by a separate written agreement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>No services are rendered unless and until a separate agreement is executed.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              4. No Guarantees or Promises of Results
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Leadgentic does not guarantee outcomes, revenue, performance, or results.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Results may vary based on industry, market conditions, ad spend, competition, execution, and numerous factors outside our control. Past performance does not guarantee future results.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              5. Communications Consent (SMS, Email & Calls)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              By submitting a form, booking a call, or otherwise providing your contact information, you expressly consent to receive:
            </p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Emails</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Phone calls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>SMS or MMS messages (including automated messages)</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-3">
              These communications may be marketing or transactional in nature.
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">You understand:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Message frequency may vary</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Standard message and data rates may apply</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>You may opt out of SMS at any time by replying STOP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>You may opt out of emails via unsubscribe links</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Consent is not a condition of purchase.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              6. Third-Party Platforms & Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Leadgentic is not responsible for outages, changes, suspensions, or performance issues related to third-party platforms including but not limited to:
            </p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Google</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Meta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>CRM providers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Hosting providers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Payment processors</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Your use of such platforms is subject to their respective terms.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              7. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              All content on the Site — including text, graphics, frameworks, systems, branding, and design — is the exclusive intellectual property of Leadgentic.
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">You may not:</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Copy, reproduce, scrape, distribute, or repurpose content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Use our materials for competing services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Reverse-engineer or exploit any part of the Site</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Unauthorized use may result in legal action.
            </p>
          </section>

          {/* Section 8 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              8. Prohibited Use
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">You agree not to:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Use the Site for unlawful purposes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Attempt to gain unauthorized access to systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Interfere with Site functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#70E000] mt-1">•</span>
                <span>Misrepresent your identity or intent</span>
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              9. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              To the fullest extent permitted by law, Leadgentic shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Use of the Site is at your own risk.
            </p>
          </section>

          {/* Section 10 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              10. Arbitration & Dispute Resolution
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Any dispute arising out of or relating to these Terms or the Site shall be resolved by binding arbitration in the State of Texas.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You waive any right to a jury trial or to participate in a class action.
            </p>
          </section>

          {/* Section 11 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              11. Governing Law
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles.
            </p>
          </section>

          {/* Section 12 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              12. Changes to These Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these Terms at any time. Continued use of the Site after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 13 */}
          <section className="border-l-2 border-[#70E000]/30 pl-6">
            <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
              13. Contact Information
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
