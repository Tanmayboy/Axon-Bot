import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  RefreshCw,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Logs: React.FC = () => {
  const [logLevel, setLogLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const logs = [
    {
      id: 1,
      timestamp: '2024-01-15 14:32:15',
      level: 'info',
      module: 'Music',
      message: 'User joined voice channel and started playing music',
      guild: 'Gaming Community',
      user: 'User#1234'
    },
    {
      id: 2,
      timestamp: '2024-01-15 14:31:45',
      level: 'warning',
      module: 'Antinuke',
      message: 'Suspicious role creation detected and blocked',
      guild: 'Security Test',
      user: 'Moderator#5678'
    },
    {
      id: 3,
      timestamp: '2024-01-15 14:30:22',
      level: 'error',
      module: 'Database',
      message: 'Connection timeout while updating user preferences',
      guild: 'Developer Hub',
      user: 'System'
    },
    {
      id: 4,
      timestamp: '2024-01-15 14:29:18',
      level: 'success',
      module: 'Moderation',
      message: 'Successfully banned user for spam violations',
      guild: 'Community Server',
      user: 'Admin#9012'
    },
    {
      id: 5,
      timestamp: '2024-01-15 14:28:33',
      level: 'info',
      module: 'Welcome',
      message: 'New member welcomed with custom embed',
      guild: 'Anime Central',
      user: 'NewUser#3456'
    },
  ];

  const getLogIcon = (level: string) => {
    switch (level) {
      case 'error':
        return <XCircle className="text-red-400" size={16} />;
      case 'warning':
        return <AlertTriangle className="text-yellow-400" size={16} />;
      case 'success':
        return <CheckCircle className="text-green-400" size={16} />;
      default:
        return <Info className="text-primary-400" size={16} />;
    }
  };

  const getLogColor = (level: string) => {
    switch (level) {
      case 'error':
        return 'border-l-red-400 bg-red-400/5';
      case 'warning':
        return 'border-l-yellow-400 bg-yellow-400/5';
      case 'success':
        return 'border-l-green-400 bg-green-400/5';
      default:
        return 'border-l-primary-400 bg-primary-400/5';
    }
  };

  const filteredLogs = logs.filter(log => {
    const matchesLevel = logLevel === 'all' || log.level === logLevel;
    const matchesSearch = searchTerm === '' || 
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.guild.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Logs</h1>
          <p className="text-dark-400 mt-1">Monitor bot activities and troubleshoot issues</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <Download size={16} />
            <span>Export</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <RefreshCw size={16} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400" size={16} />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="text-dark-400" size={16} />
              <select
                value={logLevel}
                onChange={(e) => setLogLevel(e.target.value)}
                className="bg-dark-700 border border-dark-600 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Levels</option>
                <option value="info">Info</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="success">Success</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-dark-400">
            <span>Showing {filteredLogs.length} of {logs.length} logs</span>
            <span>•</span>
            <span>Auto-refresh: ON</span>
          </div>
        </div>
      </div>

      {/* Log Entries */}
      <div className="card">
        <div className="p-4 border-b border-dark-700">
          <h3 className="text-lg font-semibold text-white">Recent Logs</h3>
        </div>
        
        <div className="divide-y divide-dark-700">
          {filteredLogs.map((log) => (
            <div key={log.id} className={`p-4 border-l-2 ${getLogColor(log.level)}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="mt-1">
                    {getLogIcon(log.level)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-white">{log.module}</span>
                      <span className="text-xs text-dark-400">•</span>
                      <span className="text-xs text-dark-400">{log.guild}</span>
                      {log.user !== 'System' && (
                        <>
                          <span className="text-xs text-dark-400">•</span>
                          <span className="text-xs text-dark-400">{log.user}</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-dark-200">{log.message}</p>
                  </div>
                </div>
                <div className="text-xs text-dark-400 ml-4">
                  {log.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-dark-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm bg-dark-700 text-dark-300 rounded hover:bg-dark-600">
              Previous
            </button>
            <span className="text-sm text-dark-400">Page 1 of 24</span>
            <button className="px-3 py-1 text-sm bg-dark-700 text-dark-300 rounded hover:bg-dark-600">
              Next
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-dark-400">Rows per page:</span>
            <select className="bg-dark-700 border border-dark-600 rounded text-white text-sm px-2 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;