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

export function StructureStep({ data, updateData, onNext, onPrev }: Props) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!data.q6) {
      setError("Ops! Responda a pergunta para continuar 😊");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="glass-card p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">Estrutura e Experiência</h2>
        <p className="text-sm text-muted-foreground font-light">Avalie a organização do evento</p>
      </div>
      <div className="space-y-6">
        <RatingScale label="Como avalia a estrutura do evento (espaço, organização e coffee)?" value={data.q6} onChange={(v) => updateData({ q6: v })} />
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Tem alguma sugestão de melhoria para as próximas edições?
          </label>
          <textarea
            value={data.q7 || ""}
            onChange={(e) => updateData({ q7: e.target.value })}
            placeholder="Sua sugestão é muito valiosa..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/60 text-foreground placeholder:text-muted-foreground text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 resize-none transition-all duration-300"
          />
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
