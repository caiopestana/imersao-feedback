import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Props {
  onStart: () => void;
}

export function WelcomeStep({ onStart }: Props) {
  return (
    <div className="text-center space-y-8">
      <div className="pt-4">
        <Button variant="default" size="lg" onClick={onStart} className="gap-2 text-base px-10 py-6 rounded-full w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(40,69,214,0.4)] transition-all duration-300">
          Começar avaliação <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
