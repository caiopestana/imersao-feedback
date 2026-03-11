import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RatingScale } from "@/components/evaluation/RatingScale";
import type { FormData } from "@/pages/Index";

interface Props {
  data: Partial<FormData>;
  updateData: (d: Partial<FormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ContentStep({ data, updateData, onNext, onPrev }: Props) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!data.q1 || !data.q2 || !data.q3) {
      setError("Ops! Responda todas as perguntas para continuar 😊");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="glass-card p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">Conteúdo e Aprendizado</h2>
        <p className="text-sm text-muted-foreground font-light">Avalie a qualidade do conteúdo</p>
      </div>
      <div className="space-y-6">
        <RatingScale label="O conteúdo foi relevante para sua rotina profissional?" value={data.q1} onChange={(v) => updateData({ q1: v })} />
        <RatingScale label="Como avalia a parte prática (exercícios e ferramentas)?" value={data.q2} onChange={(v) => updateData({ q2: v })} />
        <RatingScale label="Você se sente mais preparado para usar IA no seu dia a dia?" value={data.q3} onChange={(v) => updateData({ q3: v })} />
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
