import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface Props {
  onStart: () => void;
}

export function WelcomeStep({ onStart }: Props) {
  return (
    <div className="text-center space-y-10">
      {/* Decorative glow orb */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/20 animate-float">
          <Sparkles className="w-9 h-9 text-primary" />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Como foi sua experiência na{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Imersão em IA
          </span>
          ?
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto font-light leading-relaxed">
          Leva menos de 3 minutos. Sua opinião transforma as próximas edições.
        </p>
      </div>

      <div className="pt-2">
        <Button variant="cta" size="lg" onClick={onStart} className="gap-2 text-base px-10">
          Começar avaliação <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
