import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConfirmationStep() {
  return (
    <div className="text-center space-y-6">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 animate-check-bounce">
        <CheckCircle className="w-10 h-10 text-primary" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
          Obrigado pela sua avaliação! 🙌
        </h2>
        <p className="text-muted-foreground font-light max-w-sm mx-auto">
          Seu feedback é o combustível que melhora cada imersão.
        </p>
      </div>
      <Button variant="outline" size="lg" asChild>
        <a href="https://stackx.com.br" target="_blank" rel="noopener noreferrer">
          Conheça outros cursos da StackX →
        </a>
      </Button>
    </div>
  );
}
