interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="fixed top-12 left-0 right-0 z-40 px-4 sm:px-6 pt-2">
      <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-1">
        <span>Etapa {current} de {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
