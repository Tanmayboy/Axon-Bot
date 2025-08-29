import React from 'react';
import { 
  Music, 
  UserPlus, 
  Shield, 
  AlertTriangle, 
  Hammer,
  Clock
} from 'lucide-react';

interface Activity {
  type: string;
  user: string;
  action: string;
  time: string;
  guild: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'command':
        return <Music className="text-primary-400" size={16} />;
      case 'join':
        return <UserPlus className="text-green-400" size={16} />;
      case 'antinuke':
        return <Shield className="text-yellow-400" size={16} />;
      case 'error':
        return <AlertTriangle className="text-red-400" size={16} />;
      case 'moderation':
        return <Hammer className="text-orange-400" size={16} />;
      default:
        return <Clock className="text-dark-400" size={16} />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'command':
        return 'border-l-primary-400';
      case 'join':
        return 'border-l-green-400';
      case 'antinuke':
        return 'border-l-yellow-400';
      case 'error':
        return 'border-l-red-400';
      case 'moderation':
        return 'border-l-orange-400';
      default:
        return 'border-l-dark-600';
    }
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
        <button className="text-primary-400 hover:text-primary-300 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className={`flex items-start space-x-3 p-3 bg-dark-700/50 rounded-lg border-l-2 ${getActivityColor(activity.type)}`}
          >
            <div className="flex-shrink-0 mt-1">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white truncate">
                  {activity.user}
                </p>
                <p className="text-xs text-dark-400">{activity.time}</p>
              </div>
              <p className="text-sm text-dark-300">{activity.action}</p>
              <p className="text-xs text-dark-500 mt-1">in {activity.guild}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;