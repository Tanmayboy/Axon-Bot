import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { TrendingUp, Users, Zap, Server } from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const usageData = [
    { date: '2024-01-01', commands: 4000, users: 2400, guilds: 240 },
    { date: '2024-01-02', commands: 3000, users: 1398, guilds: 221 },
    { date: '2024-01-03', commands: 2000, users: 9800, guilds: 229 },
    { date: '2024-01-04', commands: 2780, users: 3908, guilds: 200 },
    { date: '2024-01-05', commands: 1890, users: 4800, guilds: 218 },
    { date: '2024-01-06', commands: 2390, users: 3800, guilds: 250 },
    { date: '2024-01-07', commands: 3490, users: 4300, guilds: 210 },
  ];

  const commandTypeData = [
    { name: 'Music', value: 35, color: '#0EA5E9' },
    { name: 'Moderation', value: 25, color: '#10B981' },
    { name: 'Fun', value: 20, color: '#F59E0B' },
    { name: 'Utility', value: 12, color: '#8B5CF6' },
    { name: 'Games', value: 8, color: '#EF4444' },
  ];

  const errorData = [
    { time: '00:00', errors: 12 },
    { time: '04:00', errors: 8 },
    { time: '08:00', errors: 25 },
    { time: '12:00', errors: 45 },
    { time: '16:00', errors: 38 },
    { time: '20:00', errors: 52 },
    { time: '24:00', errors: 28 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
          <p className="text-dark-400 mt-1">Detailed insights into your bot's performance</p>
        </div>
        
        <div className="flex items-center space-x-2">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="text-green-400" size={20} />
            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">+12.5%</span>
          </div>
          <div className="text-2xl font-bold text-white">847K</div>
          <div className="text-sm text-dark-400">Total Commands</div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <Users className="text-primary-400" size={20} />
            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">+8.2%</span>
          </div>
          <div className="text-2xl font-bold text-white">124K</div>
          <div className="text-sm text-dark-400">Active Users</div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <Server className="text-purple-400" size={20} />
            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">+5.1%</span>
          </div>
          <div className="text-2xl font-bold text-white">1,247</div>
          <div className="text-sm text-dark-400">Total Guilds</div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <Zap className="text-yellow-400" size={20} />
            <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">-2.1%</span>
          </div>
          <div className="text-2xl font-bold text-white">0.3%</div>
          <div className="text-sm text-dark-400">Error Rate</div>
        </div>
      </div>

      {/* Usage Trends */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Usage Trends</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={usageData}>
              <defs>
                <linearGradient id="commandsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="date" 
                stroke="#9CA3AF"
                fontSize={12}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Area
                type="monotone"
                dataKey="commands"
                stroke="#0EA5E9"
                fillOpacity={1}
                fill="url(#commandsGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#usersGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Command Distribution */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Command Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={commandTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {commandTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {commandTypeData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-dark-300">{item.name}</span>
                <span className="text-sm text-dark-400">({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Error Tracking */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Error Tracking (24h)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={errorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="errors" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#EF4444', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Guilds */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Top Active Guilds</h3>
        <div className="space-y-4">
          {[
            { name: 'Gaming Community', members: 15420, commands: 2847, growth: '+12%' },
            { name: 'Music Lovers', members: 8932, commands: 1923, growth: '+8%' },
            { name: 'Developer Hub', members: 5647, commands: 1456, growth: '+15%' },
            { name: 'Anime Central', members: 12890, commands: 1234, growth: '+5%' },
            { name: 'Study Group', members: 3421, commands: 987, growth: '+22%' },
          ].map((guild, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-dark-700/50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{guild.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-medium text-white">{guild.name}</div>
                  <div className="text-sm text-dark-400">{guild.members.toLocaleString()} members</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-white">{guild.commands.toLocaleString()}</div>
                <div className="text-sm text-green-400">{guild.growth}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;