import React from 'react';
import { 
  Users, 
  Server, 
  Activity, 
  Clock, 
  Zap, 
  AlertTriangle,
  Music,
  Shield,
  MessageSquare
} from 'lucide-react';
import StatusCard from './StatusCard';
import MetricCard from './MetricCard';
import RecentActivity from './RecentActivity';
import ServerStats from './ServerStats';

const Dashboard: React.FC = () => {
  // Mock data - in real implementation, this would come from your bot's API
  const botStatus = {
    status: 'online' as const,
    uptime: '7d 14h 32m',
    guilds: 1247,
    users: 892456,
    commands: 15847,
    responseTime: 89
  };

  const recentActivities = [
    { type: 'command', user: 'User#1234', action: 'Used music play command', time: '2 minutes ago', guild: 'Gaming Server' },
    { type: 'join', user: 'NewUser#5678', action: 'Joined server', time: '5 minutes ago', guild: 'Community Hub' },
    { type: 'antinuke', user: 'Moderator#9012', action: 'Triggered antinuke protection', time: '8 minutes ago', guild: 'Security Test' },
    { type: 'error', user: 'System', action: 'Rate limit exceeded', time: '12 minutes ago', guild: 'High Traffic Server' },
    { type: 'command', user: 'Admin#3456', action: 'Used ban command', time: '15 minutes ago', guild: 'Moderation Server' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-dark-400 mt-1">Monitor your Axon X bot performance and activity</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 bg-green-500/10 text-green-400 px-3 py-2 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard
          title="Bot Status"
          value={botStatus.status}
          icon={Activity}
          status={botStatus.status}
          subtitle={`Uptime: ${botStatus.uptime}`}
        />
        <MetricCard
          title="Total Guilds"
          value={botStatus.guilds.toLocaleString()}
          icon={Server}
          change={+12}
          changeLabel="from last week"
        />
        <MetricCard
          title="Total Users"
          value={botStatus.users.toLocaleString()}
          icon={Users}
          change={+2.4}
          changeLabel="from last week"
          isPercentage
        />
        <MetricCard
          title="Commands Today"
          value={botStatus.commands.toLocaleString()}
          icon={Zap}
          change={+8.2}
          changeLabel="from yesterday"
          isPercentage
        />
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Response Time</h3>
            <Clock className="text-primary-400" size={20} />
          </div>
          <div className="text-3xl font-bold text-white mb-2">{botStatus.responseTime}ms</div>
          <div className="flex items-center text-sm">
            <span className="text-green-400">↓ 12ms</span>
            <span className="text-dark-400 ml-2">from last hour</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Success Rate</h3>
            <Shield className="text-green-400" size={20} />
          </div>
          <div className="text-3xl font-bold text-white mb-2">99.7%</div>
          <div className="flex items-center text-sm">
            <span className="text-green-400">↑ 0.2%</span>
            <span className="text-dark-400 ml-2">from last day</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Active Sessions</h3>
            <MessageSquare className="text-primary-400" size={20} />
          </div>
          <div className="text-3xl font-bold text-white mb-2">1,247</div>
          <div className="flex items-center text-sm">
            <span className="text-green-400">↑ 156</span>
            <span className="text-dark-400 ml-2">active now</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={recentActivities} />
        <ServerStats />
      </div>

      {/* Feature Usage */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Feature Usage (Last 24h)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <Music className="text-primary-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-white">8,432</div>
            <div className="text-sm text-dark-400">Music Commands</div>
          </div>
          <div className="text-center">
            <Shield className="text-green-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-white">1,247</div>
            <div className="text-sm text-dark-400">Moderation Actions</div>
          </div>
          <div className="text-center">
            <AlertTriangle className="text-yellow-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-white">23</div>
            <div className="text-sm text-dark-400">Antinuke Triggers</div>
          </div>
          <div className="text-center">
            <Users className="text-purple-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-white">567</div>
            <div className="text-sm text-dark-400">New Members</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;