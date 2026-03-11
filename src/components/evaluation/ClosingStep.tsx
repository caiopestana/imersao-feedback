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
    <div className="glass-card p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-foreground">Encerramento</h2>
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">
          Quer deixar uma mensagem para a equipe StackX? <span className="text-muted-foreground">(opcional)</span>
        </label>
        <textarea
          value={data.q11 || ""}
          onChange={(e) => updateData({ q11: e.target.value })}
          placeholder="Sua mensagem aqui..."
          rows={4}
          className="w-full px-4 py-3 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
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
