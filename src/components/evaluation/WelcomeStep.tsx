import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface Props {
  onStart: () => void;
}

export function WelcomeStep({ onStart }: Props) {
  return (
    <div className="text-center space-y-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-2">
        <Sparkles className="w-8 h-8 text-primary" />
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Como foi sua experiência na{" "}
          <span className="text-primary">Imersão em IA</span>?
        </h1>
        <p className="text-muted-foreground text-base max-w-md mx-auto font-light">
          Leva menos de 3 minutos. Sua opinião transforma as próximas edições.
        </p>
      </div>
      <Button variant="cta" size="lg" onClick={onStart} className="gap-2">
        Começar avaliação <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
