import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { FormData } from "@/pages/Index";

interface Props {
  data: Partial<FormData>;
  updateData: (d: Partial<FormData>) => void;
  onNext: () => void;
}

function InputField({ label, value, onChange, type = "text", placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-11 px-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-ring transition-all"
      />
    </div>
  );
}

export function IdentificationStep({ data, updateData, onNext }: Props) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!data.name?.trim() || !data.email?.trim()) {
      setError("Ops! Preencha os campos obrigatórios para continuar 😊");
      return;
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError("Por favor, insira um e-mail válido 📧");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="glass-card p-6 sm:p-8 space-y-5">
      <h2 className="text-xl font-semibold text-foreground">Identificação</h2>
      <div className="space-y-4">
        <InputField label="Nome completo *" value={data.name || ""} onChange={(v) => updateData({ name: v })} placeholder="Seu nome" />
        <InputField label="E-mail *" value={data.email || ""} onChange={(v) => updateData({ email: v })} type="email" placeholder="seu@email.com" />
        <InputField label="Empresa" value={data.company || ""} onChange={(v) => updateData({ company: v })} placeholder="Sua empresa" />
        <InputField label="Cargo" value={data.role || ""} onChange={(v) => updateData({ role: v })} placeholder="Seu cargo" />
      </div>
      {error && <p className="text-sm text-destructive font-medium">{error}</p>}
      <div className="flex justify-end">
        <Button variant="cta" onClick={handleNext} className="gap-2">
          Continuar <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
