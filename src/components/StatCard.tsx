import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'primary' | 'success' | 'warning' | 'error';
}

const colorClasses = {
  primary: 'from-indigo-600 to-indigo-500',
  success: 'from-green-600 to-emerald-500',
  warning: 'from-amber-600 to-orange-500',
  error: 'from-red-600 to-pink-500',
};

export default function StatCard({
  title,
  value,
  icon,
  trend,
  color = 'primary',
}: StatCardProps) {
  return (
    <div className="card-elevated p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{title}</p>
          <p className="text-2xl md:text-3xl font-bold mt-1">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center text-white`}>
          {icon}
        </div>
      </div>
      {trend && (
        <div className={`text-sm font-semibold ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
        </div>
      )}
    </div>
  );
}
