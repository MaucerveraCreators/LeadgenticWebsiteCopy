import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function FutureStateScrollWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const phrases = [
    { text: "No panic about missed leads", color: "text-white" },
    { text: "No manual chasing", color: "text-white" },
    { text: "No wondering who followed up", color: "text-white" },
    { text: "No blind spots", color: "text-[#70E000]" }
  ];

  return (
    <section ref={containerRef} className="relative py-20 md:py-28 px-6 pb-8 md:pb-12 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Additional gradient overlay for more depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/50 via-transparent to-zinc-950/50" />
        
        {/* Radial gradient overlay from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(39,39,42,0.8)_0%,_transparent_70%)]" />
        
        {/* Primary animated gradient orb */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(112, 224, 0, 0.15) 0%, rgba(112, 224, 0, 0.05) 50%, transparent 100%)",
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
            x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
            y: useTransform(scrollYProgress, [0, 1], [0, -50])
          }}
        />
        
        {/* Secondary animated gradient orb */}
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(224, 255, 171, 0.12) 0%, rgba(112, 224, 0, 0.06) 50%, transparent 100%)",
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 1]),
            x: useTransform(scrollYProgress, [0, 1], [50, -100])
          }}
        />
        
        {/* Accent gradient orb */}
        <motion.div 
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full blur-[90px]"
          style={{
            background: "radial-gradient(circle, rgba(15, 56, 60, 0.3) 0%, transparent 70%)",
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.7, 0.4]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9])
          }}
        />
        
        {/* Additional gradient layer - center accent */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(70, 224, 0, 0.08) 0%, rgba(112, 224, 0, 0.03) 40%, transparent 70%)",
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.5, 0.5, 0.2]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1])
          }}
        />
        
        {/* Animated grain texture overlay */}
        <div className="absolute inset-0 bg-grain-texture opacity-[0.03] mix-blend-overlay animate-grain" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{
              textShadow: "0 0 40px rgba(112, 224, 0, 0.3)"
            }}
          >
            The <span className="bg-gradient-to-r from-[#70E000] via-[#E0FFAB] to-[#70E000] bg-clip-text text-transparent animate-gradient-x">Future State</span>
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2], [0.6, 1])
            }}
          >
            This is the relief
          </motion.p>
        </motion.div>

        {/* Phrases List - Centered with Green Dot */}
        <div className="space-y-6 md:space-y-8 py-8">
          {phrases.map((phrase, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-4"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [
                    0.2 + index * 0.15,
                    0.25 + index * 0.15,
                    0.35 + index * 0.15,
                    0.45 + index * 0.15
                  ],
                  [0.25, 1, 1, index === phrases.length - 1 ? 1 : 0.25]
                ),
                y: useTransform(
                  scrollYProgress,
                  [
                    0.2 + index * 0.15,
                    0.25 + index * 0.15
                  ],
                  [10, 0]
                )
              }}
            >
              {/* Green Dot indicator */}
              <motion.div 
                className="relative flex-shrink-0"
                style={{
                  scale: useTransform(
                    scrollYProgress,
                    [
                      0.2 + index * 0.15,
                      0.25 + index * 0.15
                    ],
                    [0.8, 1]
                  )
                }}
              >
                <motion.div 
                  className="w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: useTransform(
                      scrollYProgress,
                      [
                        0.2 + index * 0.15,
                        0.25 + index * 0.15,
                        0.35 + index * 0.15
                      ],
                      ['#3f3f46', '#70E000', index === phrases.length - 1 ? '#70E000' : '#3f3f46']
                    ),
                    backgroundColor: useTransform(
                      scrollYProgress,
                      [
                        0.2 + index * 0.15,
                        0.25 + index * 0.15,
                        0.35 + index * 0.15
                      ],
                      ['transparent', '#70E000', index === phrases.length - 1 ? '#70E000' : 'transparent']
                    ),
                    boxShadow: useTransform(
                      scrollYProgress,
                      [
                        0.2 + index * 0.15,
                        0.25 + index * 0.15,
                        0.35 + index * 0.15
                      ],
                      ['none', '0 0 20px rgba(112, 224, 0, 0.6)', index === phrases.length - 1 ? '0 0 20px rgba(112, 224, 0, 0.6)' : 'none']
                    )
                  }}
                />
                
                {/* Expanding ring on active */}
                <motion.div
                  className="absolute inset-0 -m-1.5"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [
                        0.2 + index * 0.15,
                        0.25 + index * 0.15,
                        0.35 + index * 0.15
                      ],
                      [0, 1, index === phrases.length - 1 ? 1 : 0]
                    )
                  }}
                >
                  <div className="w-6 h-6 rounded-full border border-[#70E000]/40 active-ring" />
                </motion.div>
              </motion.div>

              {/* Phrase text */}
              <motion.p 
                className={`text-xl md:text-2xl lg:text-3xl font-medium leading-tight text-center ${phrase.color}`}
                style={{
                  textShadow: phrase.color === "text-[#70E000]" 
                    ? useTransform(
                        scrollYProgress,
                        [0.2 + index * 0.15, 0.25 + index * 0.15],
                        ['none', '0 0 30px rgba(112, 224, 0, 0.4)']
                      )
                    : 'none'
                }}
              >
                {phrase.text}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          style={{
            opacity: useTransform(scrollYProgress, [0.75, 0.85], [0, 1]),
            y: useTransform(scrollYProgress, [0.75, 0.85], [20, 0])
          }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-medium">
            You finally <span className="text-white font-semibold">trust your pipeline</span>.
          </p>
        </motion.div>

        {/* Premium Text Marquee */}
        <div className="relative mt-8 md:mt-12 overflow-hidden">
          {/* Enhanced Fade edges with gradient */}
          <div className="absolute inset-y-0 left-0 w-48 md:w-64 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-48 md:w-64 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />
          
          {/* Glow effect on marquee */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#70E000]/5 to-transparent blur-xl"
            style={{
              opacity: useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 0.5, 0])
            }}
          />
          
          {/* Marquee container */}
          <div className="future-marquee-container py-12 md:py-16">
            <div className="future-marquee-content">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="inline-flex items-center whitespace-nowrap px-24 md:px-32">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-medium bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    Leads move. Sales focuses. Revenue feels protected. You finally trust your pipeline.
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes active-ring-expand {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .active-ring {
          animation: active-ring-expand 1.5s ease-out infinite;
        }

        /* Marquee animation */
        .future-marquee-container {
          position: relative;
          width: 100%;
        }

        .future-marquee-content {
          display: flex;
          animation: future-marquee-scroll 40s linear infinite;
        }

        @keyframes future-marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .future-marquee-content:hover {
          animation-play-state: paused;
        }
        
        /* Animated gradient for title */
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        
        /* Grain texture animation */
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
        
        .animate-grain {
          animation: grain 8s steps(10) infinite;
        }
        
        .bg-grain-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        @media (max-width: 768px) {
          .future-marquee-content {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}