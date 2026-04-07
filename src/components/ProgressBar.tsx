interface ProgressBarProps {
  percentage: number;
  label?: string;
  color?: 'primary' | 'success' | 'warning' | 'error';
  showPercentage?: boolean;
}

const colorClasses = {
  primary: 'bg-indigo-600',
  success: 'bg-green-600',
  warning: 'bg-amber-600',
  error: 'bg-red-600',
};

export default function ProgressBar({
  percentage,
  label,
  color = 'primary',
  showPercentage = true,
}: ProgressBarProps) {
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</p>}
          {showPercentage && <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{clampedPercentage}%</p>}
        </div>
      )}
      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} transition-all duration-300 rounded-full`}
          style={{ width: `${clampedPercentage}%` }}
        />
      </div>
    </div>
  );
}
