import { useState, useCallback } from "react";
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
    <div className="min-h-screen grid-bg flex flex-col relative overflow-hidden bg-background text-foreground">
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3A9AFF]/30 blur-[150px] pointer-events-none rounded-[100%]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2845D6]/30 blur-[120px] pointer-events-none rounded-[100%]" />

      {/* Header with Linked Logo */}
      <header className="absolute top-0 w-full z-50 flex items-center px-6 py-6">
        <a href="https://stackx.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="StackX Logo" className="h-10 w-auto rounded-md" />
        </a>
      </header>

      <main className="flex-1 flex flex-col items-center pt-32 pb-12 px-4 relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Hero Section */}
        {isWelcomeOrConfirmation ? (
          <div className="text-center mb-16 mt-8 animate-fade-in-up">
            <span className="inline-block border border-border/50 bg-card/30 rounded-full px-3 py-1 text-xs font-semibold mb-6 tracking-wide">
              Avaliação de Feedback
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-foreground leading-tight mb-4 max-w-4xl mx-auto">
              <span className="inline-block">Como foi sua experiência</span>
              <br />
              <span className="text-primary inline-block">na Imersão em IA?</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              Leva menos de 3 minutos. Sua opinião nos ajuda a moldar o futuro do projeto e transforma as próximas edições do nosso evento.
            </p>
          </div>
        ) : (
          <div className="w-full max-w-2xl mb-8 mt-12">
            <ProgressBar current={step} total={TOTAL_STEPS - 2} />
          </div>
        )}

        {/* Dynamic Step Content rendered inside a card container */}
        <div className={`w-full ${isWelcomeOrConfirmation ? 'max-w-md' : 'max-w-2xl'} animate-fade-in-up`} key={step}>
          {step === 0 ? (
            <div className="relative z-10 flex justify-center">
              <WelcomeStep onStart={next} />
            </div>
          ) : (
            <div className="bg-card/40 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] relative overflow-hidden group">
              {/* Subtle card glow */}
              <div className="absolute inset-x-0 -top-px h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50"></div>
              
              <div className="relative z-10">
                {step === 1 && <IdentificationStep data={data} updateData={updateData} onNext={next} />}
                {step === 2 && <ContentStep data={data} updateData={updateData} onNext={next} onPrev={prev} />}
                {step === 3 && <MethodologyStep data={data} updateData={updateData} onNext={next} onPrev={prev} />}
                {step === 4 && <StructureStep data={data} updateData={updateData} onNext={next} onPrev={prev} />}
                {step === 5 && <NpsStep data={data} updateData={updateData} onNext={next} onPrev={prev} />}
                {step === 6 && <ClosingStep data={data} updateData={updateData} onSubmit={handleSubmit} onPrev={prev} />}
                {step === 7 && <ConfirmationStep />}
              </div>
            </div>
          )}
        </div>

      </main>
    </div>
  );
};

export default Index;
