import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What exactly is the AI Revenue Platform?",
    answer: "It's a complete growth system that combines ads, landing pages, CRM, and AI automation to generate leads, book appointments, and scale revenue."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients begin seeing leads and booked appointments within 45–60 days, depending on industry, market, and ad spend."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in service-based businesses across multiple niches including Medical & Health, Fitness & Sports, Content Creation, Real Estate, Technology (SaaS), and Ceramic Coating & Auto Styling. Our focused approach means we understand the unique challenges and opportunities in each industry."
  },
  {
    question: "Do I need to have technical knowledge to work with you?",
    answer: "No. We handle the strategy, setup, automation, and optimization."
  },
  {
    question: "What makes Leadgentic different from other marketing agencies?",
    answer: "Unlike traditional agencies that focus on one-off campaigns, we build complete revenue systems powered by AI and automation. We combine strategy, technology, and design to create scalable solutions that generate predictable results. Plus, we specialize in specific niches, so we bring deep industry expertise to every project."
  },
  {
    question: "What is included in your service?",
    answer: "Our service includes comprehensive discovery and strategy, custom platform design and development, marketing automation setup, CRM integration, funnel optimization, AI-powered lead qualification, ongoing support and maintenance, and continuous performance monitoring and improvements."
  },
  {
    question: "How much does it cost to work with Leadgentic?",
    answer: "Investment varies based on your specific needs, goals, and the complexity of the solution. We offer customized packages tailored to each business. The best way to get accurate pricing is to schedule a consultation where we can understand your requirements and provide a detailed proposal."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely. We believe in long-term partnerships. After launch, we provide continuous monitoring, maintenance, updates, and optimization to ensure your platform keeps performing at its best. We're always available to help you scale and adapt as your business grows."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 pb-12 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-light text-black text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-0 border-t border-gray-200">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-5 flex items-center justify-between text-left group transition-all duration-300"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg lg:text-xl text-black pr-8 font-light group-hover:text-[#70E000] transition-colors duration-300">
                  {item.question}
                </span>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#70E000] transition-transform duration-300" />
                  ) : (
                    <Plus className="w-5 h-5 text-black group-hover:text-[#70E000] transition-all duration-300" />
                  )}
                </div>
              </button>

              {/* Answer - Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === index
                    ? "max-h-64 opacity-100 mb-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed pr-12">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}