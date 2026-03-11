interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="fixed top-14 left-0 right-0 z-40 px-4 sm:px-6 pt-2">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-1.5">
          <span>Etapa {current} de {total}</span>
          <span className="text-primary font-semibold">{pct}%</span>
        </div>
        <div className="h-1 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out relative"
            style={{ width: `${pct}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-sm opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
