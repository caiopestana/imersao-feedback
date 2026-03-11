import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("light");
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <button
      onClick={() => setLight(!light)}
      className="relative p-2.5 rounded-xl bg-secondary/60 border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300"
      aria-label="Alternar tema"
    >
      {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
