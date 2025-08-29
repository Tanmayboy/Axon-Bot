import React, { useState } from 'react';
import { 
  Play, 
  Square, 
  RotateCcw, 
  Settings, 
  Database,
  Shield,
  Music,
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Management: React.FC = () => {
  const [botStatus, setBotStatus] = useState<'online' | 'offline' | 'maintenance'>('online');
  const [isLoading, setIsLoading] = useState(false);

  const handleBotAction = async (action: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (action === 'restart') {
      setBotStatus('maintenance');
      setTimeout(() => setBotStatus('online'), 3000);
    } else if (action === 'stop') {
      setBotStatus('offline');
    } else if (action === 'start') {
      setBotStatus('online');
    }
    
    setIsLoading(false);
  };

  const modules = [
    { name: 'Antinuke System', status: 'active', description: 'Server protection and security', icon: Shield },
    { name: 'Music Player', status: 'active', description: 'Music streaming and controls', icon: Music },
    { name: 'Auto Moderation', status: 'active', description: 'Automated content filtering', icon: AlertTriangle },
    { name: 'Welcome System', status: 'active', description: 'Member greeting and onboarding', icon: Users },
    { name: 'Logging System', status: 'maintenance', description: 'Event tracking and audit logs', icon: Database },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Bot Management</h1>
        <p className="text-dark-400 mt-1">Control and monitor your Axon X bot operations</p>
      </div>

      {/* Bot Controls */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Bot Controls</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                botStatus === 'online' ? 'bg-green-400 animate-pulse' :
                botStatus === 'offline' ? 'bg-red-400' : 'bg-yellow-400 animate-pulse'
              }`} />
              <span className="text-white font-medium">
                Status: {botStatus.charAt(0).toUpperCase() + botStatus.slice(1)}
              </span>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => handleBotAction('start')}
                disabled={isLoading || botStatus === 'online'}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Play size={16} />
                <span>Start</span>
              </button>
              
              <button
                onClick={() => handleBotAction('stop')}
                disabled={isLoading || botStatus === 'offline'}
                className="btn-danger disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Square size={16} />
                <span>Stop</span>
              </button>
              
              <button
                onClick={() => handleBotAction('restart')}
                disabled={isLoading}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <RotateCcw size={16} className={isLoading ? 'animate-spin' : ''} />
                <span>Restart</span>
              </button>
            </div>
          </div>

          <div className="bg-dark-700/50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-white mb-3">Quick Stats</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-dark-400">Uptime:</span>
                <span className="text-white">7d 14h 32m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-400">Memory Usage:</span>
                <span className="text-white">245 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-400">CPU Usage:</span>
                <span className="text-white">12.4%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-400">Active Connections:</span>
                <span className="text-white">1,247</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module Status */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Module Status</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div key={index} className="bg-dark-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Icon className="text-primary-400" size={20} />
                    <span className="font-medium text-white">{module.name}</span>
                  </div>
                  {module.status === 'active' ? (
                    <CheckCircle className="text-green-400" size={16} />
                  ) : module.status === 'maintenance' ? (
                    <AlertTriangle className="text-yellow-400" size={16} />
                  ) : (
                    <XCircle className="text-red-400" size={16} />
                  )}
                </div>
                <p className="text-sm text-dark-400 mb-3">{module.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    module.status === 'active' ? 'bg-green-400/10 text-green-400' :
                    module.status === 'maintenance' ? 'bg-yellow-400/10 text-yellow-400' :
                    'bg-red-400/10 text-red-400'
                  }`}>
                    {module.status}
                  </span>
                  <button className="text-primary-400 hover:text-primary-300 text-sm">
                    Configure
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Database Management */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Database Management</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-700/50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Database className="text-primary-400" size={20} />
              <span className="font-medium text-white">Database Size</span>
            </div>
            <div className="text-2xl font-bold text-white">847 MB</div>
            <div className="text-sm text-dark-400">Total storage used</div>
          </div>

          <div className="bg-dark-700/50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="text-green-400" size={20} />
              <span className="font-medium text-white">Total Records</span>
            </div>
            <div className="text-2xl font-bold text-white">2.4M</div>
            <div className="text-sm text-dark-400">Across all tables</div>
          </div>

          <div className="bg-dark-700/50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <CheckCircle className="text-green-400" size={20} />
              <span className="font-medium text-white">Health Status</span>
            </div>
            <div className="text-lg font-bold text-green-400">Healthy</div>
            <div className="text-sm text-dark-400">Last backup: 2h ago</div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button className="btn-secondary">
            Backup Database
          </button>
          <button className="btn-secondary">
            Optimize Tables
          </button>
          <button className="btn-danger">
            Emergency Reset
          </button>
        </div>
      </div>

      {/* Configuration Panel */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Quick Configuration</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Default Prefix
              </label>
              <input
                type="text"
                defaultValue=">"
                className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                Max Guilds
              </label>
              <input
                type="number"
                defaultValue="5000"
                className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-dark-300">Auto Moderation</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600 transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-dark-300">Maintenance Mode</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-dark-600 transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-dark-300">Debug Logging</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-dark-600 transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="btn-primary">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Management;