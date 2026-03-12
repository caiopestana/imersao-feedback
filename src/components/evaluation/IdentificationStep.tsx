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
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-11 px-4 rounded-xl bg-secondary/50 border border-border/60 text-foreground placeholder:text-muted-foreground text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
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
    <div className="space-y-8 w-full">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">Identificação</h2>
        <p className="text-sm text-muted-foreground font-light">Conte-nos um pouco sobre você</p>
      </div>
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
