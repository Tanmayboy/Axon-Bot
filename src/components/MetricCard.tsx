import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: number;
  changeLabel?: string;
  isPercentage?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  changeLabel,
  isPercentage = false 
}) => {
  const isPositive = change && change > 0;
  
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-dark-400">{title}</h3>
        <Icon className="text-dark-400" size={20} />
      </div>
      
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      
      {change !== undefined && (
        <div className="flex items-center text-sm">
          <span className={isPositive ? "text-green-400" : "text-red-400"}>
            {isPositive ? "↑" : "↓"} {Math.abs(change)}{isPercentage ? "%" : ""}
          </span>
          {changeLabel && (
            <span className="text-dark-400 ml-2">{changeLabel}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default MetricCard;