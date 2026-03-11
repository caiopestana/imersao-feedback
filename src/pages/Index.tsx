import { useState, useCallback } from "react";
import { ThemeToggle } from "@/components/evaluation/ThemeToggle";
import { ProgressBar } from "@/components/evaluation/ProgressBar";
import { WelcomeStep } from "@/components/evaluation/WelcomeStep";
import { IdentificationStep } from "@/components/evaluation/IdentificationStep";
import { ContentStep } from "@/components/evaluation/ContentStep";
import { MethodologyStep } from "@/components/evaluation/MethodologyStep";
import { StructureStep } from "@/components/evaluation/StructureStep";
import { NpsStep } from "@/components/evaluation/NpsStep";
import { ClosingStep } from "@/components/evaluation/ClosingStep";
import { ConfirmationStep } from "@/components/evaluation/ConfirmationStep";

export type FormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: string;
  q6: number;
  q7: string;
  q8: number;
  q9: string;
  q10: string;
  q11: string;
};

const TOTAL_STEPS = 8;

const Index = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<FormData>>({});

  const updateData = useCallback((partial: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  }, []);

  const next = useCallback(() => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1)), []);
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

  const handleSubmit = () => {
    console.log("Evaluation data:", JSON.stringify(data, null, 2));
    next();
  };

  const isWelcomeOrConfirmation = step === 0 || step === TOTAL_STEPS - 1;

  return (
    <div className="min-h-screen grid-bg flex flex-col relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 sm:px-6 bg-background/60 backdrop-blur-xl border-b border-border/40">
        <div className="text-sm font-bold text-foreground tracking-tight">
          <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">StackX</span>
        </div>
        <ThemeToggle />
      </header>

      {!isWelcomeOrConfirmation && (
        <ProgressBar current={step} total={TOTAL_STEPS - 2} />
      )}

      <main className="flex-1 flex items-center justify-center px-4 pt-20 pb-8 relative z-10">
        <div className="w-full max-w-lg animate-fade-in-up" key={step}>
          {step === 0 && <WelcomeStep onStart={next} />}
          {step === 1 && <IdentificationStep data={data} updateData={updateData} onNext={next} />}
          {step === 2 && <ContentStep data={data} updateData={updateData} onNext={next} onPrev={prev} />}
          {step === 3 && <MethodologyStep data={data} updateData={updateData} onNext={next} onPrev={prev} />}
          {step === 4 && <StructureStep data={data} updateData={updateData} onNext={next} onPrev={prev} />}
          {step === 5 && <NpsStep data={data} updateData={updateData} onNext={next} onPrev={prev} />}
          {step === 6 && <ClosingStep data={data} updateData={updateData} onSubmit={handleSubmit} onPrev={prev} />}
          {step === 7 && <ConfirmationStep />}
        </div>
      </main>
    </div>
  );
};

export default Index;
