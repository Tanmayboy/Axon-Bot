import React from 'react';
import { LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

interface StatusCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  status: 'online' | 'offline' | 'maintenance';
  subtitle?: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, value, icon: Icon, status, subtitle }) => {
  const statusStyles = {
    online: 'bg-green-500/10 text-green-400 border-green-500/20',
    offline: 'bg-red-500/10 text-red-400 border-red-500/20',
    maintenance: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
  };

  const statusLabels = {
    online: 'Online',
    offline: 'Offline',
    maintenance: 'Maintenance'
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-dark-400">{title}</h3>
        <Icon className="text-dark-400" size={20} />
      </div>
      
      <div className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border mb-3",
        statusStyles[status]
      )}>
        <div className={clsx(
          "w-2 h-2 rounded-full mr-2",
          status === 'online' ? 'bg-green-400 animate-pulse' : 
          status === 'offline' ? 'bg-red-400' : 'bg-yellow-400 animate-pulse'
        )} />
        {statusLabels[status]}
      </div>
      
      {subtitle && (
        <p className="text-sm text-dark-400">{subtitle}</p>
      )}
    </div>
  );
};

export default StatusCard;