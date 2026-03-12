import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import type { FormData } from "@/pages/Index";

interface Props {
  data: Partial<FormData>;
  updateData: (d: Partial<FormData>) => void;
  onSubmit: () => void;
  onPrev: () => void;
}

export function ClosingStep({ data, updateData, onSubmit, onPrev }: Props) {
  return (
    <div className="space-y-8 w-full">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">Encerramento</h2>
        <p className="text-sm text-muted-foreground font-light">Quase lá! Última etapa</p>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Quer deixar uma mensagem para a equipe StackX? <span className="text-muted-foreground">(opcional)</span>
        </label>
        <textarea
          value={data.q11 || ""}
          onChange={(e) => updateData({ q11: e.target.value })}
          placeholder="Sua mensagem aqui..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/60 text-foreground placeholder:text-muted-foreground text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 resize-none transition-all duration-300"
        />
      </div>
      <div className="flex justify-between">
        <Button variant="ghost" onClick={onPrev} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>
        <Button variant="cta" onClick={onSubmit} className="gap-2">
          Enviar avaliação <Check className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
