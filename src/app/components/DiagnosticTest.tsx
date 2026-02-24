import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

interface Option {
  text: string;
  isGreen: boolean; // true = positive/qualified answer
}

interface Question {
  text: string;
  options: Option[];
}

export function DiagnosticTest() {
  const questions: Question[] = [
    {
      text: "Your current ads situation:",
      options: [
        { text: "Ads work, but lead quality feels inconsistent", isGreen: true },
        { text: "We get volume, but conversion is unpredictable", isGreen: true },
        { text: "We're not running ads yet, but we're ready to start", isGreen: false }
      ]
    },
    {
      text: "When you think about your sales process:",
      options: [
        { text: "Prospects need a lot of convincing", isGreen: true },
        { text: "Closing feels harder than it should be", isGreen: true },
        { text: "Everything's working perfectly", isGreen: false }
      ]
    },
    {
      text: "Your team's bandwidth:",
      options: [
        { text: "We're ready to handle more qualified leads", isGreen: true },
        { text: "We need better leads, not just more leads", isGreen: true },
        { text: "We're completely maxed out already", isGreen: false }
      ]
    },
    {
      text: "Trust and authority in your market:",
      options: [
        { text: "Prospects don't know us well enough yet", isGreen: true },
        { text: "We need to establish stronger positioning", isGreen: true },
        { text: "We're already the clear market leader", isGreen: false }
      ]
    }
  ];

  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [qualifies, setQualifies] = useState(false);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = { ...answers, [questionIndex]: optionIndex };
    setAnswers(newAnswers);

    // Move to next question
    if (questionIndex < questions.length - 1) {
      setTimeout(() => {
        setActiveIndex(questionIndex + 1);
      }, 400);
    } else {
      // Test complete - calculate result
      setTimeout(() => {
        setIsComplete(true);
        calculateResult(newAnswers);
      }, 400);
    }
  };

  const calculateResult = (finalAnswers: { [key: number]: number }) => {
    let greenCount = 0;
    Object.keys(finalAnswers).forEach((questionIndex) => {
      const qIndex = parseInt(questionIndex);
      const optionIndex = finalAnswers[qIndex];
      if (questions[qIndex].options[optionIndex].isGreen) {
        greenCount++;
      }
    });

    // Qualifies if 3 or more green answers out of 4 questions
    const doesQualify = greenCount >= 3;
    setQualifies(doesQualify);
    
    setTimeout(() => {
      setShowResult(true);
    }, 600);
  };

  const isAnswered = (index: number) => answers.hasOwnProperty(index);
  const isActive = (index: number) => index === activeIndex && !isAnswered(index);
  const isPending = (index: number) => index > activeIndex && !isAnswered(index);

  return (
    <div className="relative">
      {/* Progress Indicator */}
      {!isComplete && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-[#70E000]/10 border border-[#70E000]/30 rounded-lg text-center"
        >
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-[#70E000]">Quick diagnostic:</span> {Object.keys(answers).length} of {questions.length} completed
          </p>
        </motion.div>
      )}

      <div className="space-y-3">
        {questions.map((question, questionIndex) => {
          const answered = isAnswered(questionIndex);
          const active = isActive(questionIndex);
          const pending = isPending(questionIndex);
          const selectedOption = answers[questionIndex];

          return (
            <motion.div
              key={questionIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: answered ? 0.5 : active ? 1 : 0.6,
                y: 0,
                scale: answered ? 0.98 : 1,
                filter: pending ? "blur(1.5px)" : "blur(0px)"
              }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className={`
                relative rounded-xl border-2 transition-all duration-400
                ${answered 
                  ? "bg-gray-50/80 border-gray-200" 
                  : active 
                  ? "bg-white border-[#70E000] shadow-lg" 
                  : "bg-white border-gray-200"}
                ${pending ? "pointer-events-none" : ""}
              `}
            >
              {/* Question Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`
                    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300
                    ${answered 
                      ? "bg-[#70E000] text-black" 
                      : active 
                      ? "bg-[#70E000]/20 text-[#70E000] border-2 border-[#70E000]" 
                      : "bg-gray-200 text-gray-400"}
                  `}>
                    {answered ? <Check className="w-4 h-4" /> : questionIndex + 1}
                  </div>

                  <div className="flex-1">
                    <p className={`
                      text-lg font-medium transition-all duration-300
                      ${answered ? "text-gray-500" : active ? "text-gray-900" : "text-gray-600"}
                    `}>
                      {question.text}
                    </p>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-2 ml-12">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = answered && selectedOption === optionIndex;
                    
                    return (
                      <motion.button
                        key={optionIndex}
                        onClick={() => !answered && active && handleAnswer(questionIndex, optionIndex)}
                        disabled={answered || !active}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: optionIndex * 0.1 }}
                        className={`
                          w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-300
                          ${isSelected
                            ? "bg-[#70E000]/10 border-[#70E000] text-gray-900 font-medium"
                            : answered
                            ? "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"
                            : active
                            ? "bg-gray-50 border-gray-200 hover:border-[#70E000]/40 hover:bg-[#70E000]/5 text-gray-700 cursor-pointer"
                            : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`
                            w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300
                            ${isSelected
                              ? "border-[#70E000] bg-[#70E000]"
                              : "border-gray-300"}
                          `}>
                            {isSelected && <Check className="w-3 h-3 text-black" strokeWidth={3} />}
                          </div>
                          <span className="text-sm">{option.text}</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Active Indicator Glow */}
              {active && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 -z-10 rounded-xl bg-[#70E000]/5 blur-xl"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Results Section */}
      <AnimatePresence>
        {isComplete && showResult && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            {qualifies ? (
              // ✅ QUALIFIES - Strong Fit
              <div className="relative overflow-hidden bg-black border border-gray-800 rounded-xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#70E000]/10 via-transparent to-transparent opacity-50" />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Main Message */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      You're a strong fit for our process.
                    </h3>
                    <p className="text-base text-gray-400">
                      We know exactly how to solve this. Let's map out your revenue system in 30 minutes.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group w-full relative overflow-hidden bg-gradient-to-r from-[#70E000] via-[#7FE817] to-[#70E000] bg-[length:200%_100%] text-black px-6 py-3.5 rounded-lg font-semibold hover:bg-[position:100%_0] transition-all duration-500 inline-flex items-center justify-center gap-2"
                  >
                    <span>Book a Strategy Call</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                  </motion.button>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mt-4">
                    <span>Free consultation</span>
                    <span>•</span>
                    <span>No pressure</span>
                    <span>•</span>
                    <span>Clear next steps</span>
                  </div>
                </div>
              </div>
            ) : (
              // ⚠️ SPECIALIZED CASE - Still Under Control
              <div className="relative overflow-hidden bg-black border border-gray-800 rounded-xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-transparent opacity-50" />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Main Message */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      Your situation is more specialized.
                    </h3>
                    <p className="text-base text-gray-400">
                      Our advanced team is designed for cases like this. Let's evaluate the right approach together.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group w-full relative overflow-hidden bg-gradient-to-r from-white via-gray-100 to-white bg-[length:200%_100%] text-black px-6 py-3.5 rounded-lg font-semibold hover:bg-[position:100%_0] transition-all duration-500 inline-flex items-center justify-center gap-2"
                  >
                    <span>Talk to a Specialist</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                  </motion.button>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mt-4">
                    <span>Custom review</span>
                    <span>•</span>
                    <span>Specialized guidance</span>
                    <span>•</span>
                    <span>Expert team</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}