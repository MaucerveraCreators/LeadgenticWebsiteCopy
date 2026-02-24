import { useState } from "react";
import { ProcessStep } from "./ProcessStep";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepVisibility = (index: number, isVisible: boolean) => {
    if (isVisible && index > activeStep) {
      setActiveStep(index);
    }
  };

  // Calculate overall progress (0 to steps.length)
  const overallProgress = activeStep + 1;

  return (
    <div className="relative">
      {/* Steps */}
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <ProcessStep
              number={step.number}
              title={step.title}
              description={step.description}
              isActive={index === activeStep}
              isCompleted={index < activeStep}
              onVisibilityChange={(isVisible) => handleStepVisibility(index, isVisible)}
            />
            
            {/* Line segment between steps - connects circles when progress reaches them */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-[calc(100%-3rem)] pointer-events-none">
                {/* Background line (gray) */}
                <div className="absolute inset-0 bg-gray-800" />
                
                {/* Animated Progress Line - grows from top to bottom, connecting circles */}
                <div
                  className="absolute top-0 left-0 w-full bg-[#70E000] shadow-[0_0_10px_rgba(112,224,0,0.5)]"
                  style={{
                    height: (() => {
                      // If we're past this segment, fill 100%
                      if (overallProgress > index + 1) return '100%';
                      // If we're currently on this segment, fill 100% to connect to next circle
                      if (overallProgress > index) return '100%';
                      // If we haven't reached this segment yet, 0%
                      return '0%';
                    })(),
                    transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}