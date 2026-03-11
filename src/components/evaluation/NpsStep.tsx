import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { FormData } from "@/pages/Index";

interface Props {
  data: Partial<FormData>;
  updateData: (d: Partial<FormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const interestOptions = [
  { value: "sim", label: "Sim, com certeza 🔥" },
  { value: "talvez", label: "Talvez" },
  { value: "nao", label: "Não por enquanto" },
];

export function NpsStep({ data, updateData, onNext, onPrev }: Props) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (data.q8 === undefined || data.q8 === null) {
      setError("Ops! Selecione uma nota para continuar 😊");
      return;
    }
    if (!data.q10) {
      setError("Ops! Responda todas as perguntas para continuar 😊");
      return;
    }
    setError("");
    onNext();
  };

  const getNpsColor = (n: number) => {
    if (n <= 6) return "border-nps-detractor bg-nps-detractor/10 text-nps-detractor shadow-lg shadow-nps-detractor/10";
    if (n <= 8) return "border-nps-passive bg-nps-passive/10 text-nps-passive shadow-lg shadow-nps-passive/10";
    return "border-nps-promoter bg-nps-promoter/10 text-nps-promoter shadow-lg shadow-nps-promoter/10";
  };

  return (
    <div className="glass-card p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">NPS e Prova Social</h2>
        <p className="text-sm text-muted-foreground font-light">Nos ajude a medir sua satisfação</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">
            De 0 a 10, qual a chance de recomendar essa imersão?
          </p>
          <div className="grid grid-cols-11 gap-1 sm:gap-1.5">
            {Array.from({ length: 11 }, (_, i) => (
              <button
                key={i}
                onClick={() => updateData({ q8: i })}
                className={`aspect-square flex items-center justify-center rounded-lg border text-xs sm:text-sm font-medium transition-all duration-300 ${
                  data.q8 === i
                    ? `${getNpsColor(i)} scale-110`
                    : "border-border/60 bg-secondary/50 text-muted-foreground hover:border-primary/30 hover:bg-secondary"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-muted-foreground">
            <span>Nada provável</span>
            <span>Muito provável</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Por que você deu essa nota?</label>
          <textarea
            value={data.q9 || ""}
            onChange={(e) => updateData({ q9: e.target.value })}
            placeholder="Compartilhe o motivo..."
            rows={2}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/60 text-foreground placeholder:text-muted-foreground text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 resize-none transition-all duration-300"
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">
            Você teria interesse em continuar aprendendo sobre IA com a StackX?
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            {interestOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => updateData({ q10: opt.value })}
                className={`flex-1 py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-300 ${
                  data.q10 === opt.value
                    ? "border-primary bg-primary/10 text-foreground scale-[1.02] shadow-lg shadow-primary/10"
                    : "border-border/60 bg-secondary/50 text-muted-foreground hover:border-primary/30 hover:bg-secondary"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {error && <p className="text-sm text-destructive font-medium">{error}</p>}
      <div className="flex justify-between">
        <Button variant="ghost" onClick={onPrev} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>
        <Button variant="cta" onClick={handleNext} className="gap-2">
          Continuar <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
