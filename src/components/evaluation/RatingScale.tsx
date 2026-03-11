const emojis = ["😞", "😕", "😐", "🙂", "🤩"];
const labels = ["Ruim", "Regular", "OK", "Bom", "Excelente"];

interface Props {
  label: string;
  value?: number;
  onChange: (v: number) => void;
}

export function RatingScale({ label, value, onChange }: Props) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <div className="flex gap-2 sm:gap-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 px-1 rounded-2xl border transition-all duration-200 ${
              value === n
                ? "border-primary bg-primary/10 scale-105 animate-pulse-orange"
                : "border-border bg-secondary hover:border-primary/40"
            }`}
          >
            <span className="text-xl sm:text-2xl">{emojis[n - 1]}</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">{labels[n - 1]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
