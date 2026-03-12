import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConfirmationStep() {
  return (
    <div className="text-center space-y-8">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-28 h-28 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 animate-check-bounce">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Obrigado pela sua avaliação! 🙌
        </h2>
        <p className="text-muted-foreground font-light max-w-sm mx-auto leading-relaxed">
          Seu feedback é o combustível que melhora cada imersão.
        </p>
      </div>
      <Button variant="outline" size="lg" asChild className="border border-white/20 hover:border-white/40 hover:bg-white/5 bg-transparent px-10 py-7 h-auto text-base rounded-full">
        <a href="https://stackx.com.br" target="_blank" rel="noopener noreferrer">
          Conheça mais da StackX
        </a>
      </Button>
    </div>
  );
}
