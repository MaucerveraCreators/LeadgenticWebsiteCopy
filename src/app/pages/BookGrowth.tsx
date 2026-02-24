import { useEffect } from "react";
import { Clock, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export function BookGrowth() {
  // Load GHL form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black pt-40 pb-0">
        <div className="container mx-auto px-4 max-w-7xl mb-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <div className="mb-8">
                <h1 className="text-[48px] mb-6 font-normal leading-tight" style={{ fontFamily: "'Maxima Nouva', sans-serif" }}>
                  Book a Free<br />
                  <span 
                    className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#0F383C] bg-clip-text text-transparent"
                  >
                    Growth Session
                  </span>
                </h1>
              </div>

              <p className="text-base text-gray-400 mb-8">
                Schedule a 30-minute call with our growth experts to discuss your business goals and discover how our AI Revenue Platform can accelerate your growth.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Clock, title: "30 Minutes", desc: "A focused conversation about your growth objectives" },
                  { icon: Calendar, title: "Video Call", desc: "A Zoom link will be sent after booking" },
                  { icon: CheckCircle2, title: "No Commitment", desc: "Free consultation with no strings attached" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#70E000]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#70E000]/20 transition-colors">
                      <item.icon className="w-6 h-6 text-[#70E000]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-6 bg-[#0F383C]/20 border border-[#70E000]/20 rounded-2xl relative overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/5 via-transparent to-[#a3ff00]/5 animate-pulse" />
                
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 text-[#70E000]">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#70E000] mt-0.5 flex-shrink-0" />
                      <span>Analysis of your current growth strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#70E000] mt-0.5 flex-shrink-0" />
                      <span>Custom AI revenue system recommendation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#70E000] mt-0.5 flex-shrink-0" />
                      <span>ROI projections for your specific business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#70E000] mt-0.5 flex-shrink-0" />
                      <span>No pressure — just actionable insights</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - GHL Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl overflow-hidden relative"
            >
              {/* GHL Form Container */}
              <div className="relative z-10 w-full">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/JwVWXJSzsDHxtpDAf1Gw"
                  style={{
                    width: '100%',
                    height: '700px',
                    border: 'none',
                    borderRadius: '24px',
                    display: 'block'
                  }}
                  id="inline-JwVWXJSzsDHxtpDAf1Gw"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Leadgentic Website Form"
                  data-height="700"
                  data-layout-iframe-id="inline-JwVWXJSzsDHxtpDAf1Gw"
                  data-form-id="JwVWXJSzsDHxtpDAf1Gw"
                  title="Leadgentic Website Form"
                />
              </div>
              
              {/* Custom styling to ensure iframe displays properly */}
              <style>{`
                /* Ensure GHL iframe is visible and properly styled */
                #inline-JwVWXJSzsDHxtpDAf1Gw {
                  display: block !important;
                  visibility: visible !important;
                  opacity: 1 !important;
                }
                
                /* Mobile responsiveness */
                @media (max-width: 768px) {
                  #inline-JwVWXJSzsDHxtpDAf1Gw {
                    height: 800px !important;
                  }
                }
              `}</style>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}