import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ServerStats: React.FC = () => {
  const data = [
    { name: 'Mon', commands: 2400, errors: 24 },
    { name: 'Tue', commands: 1398, errors: 13 },
    { name: 'Wed', commands: 9800, errors: 98 },
    { name: 'Thu', commands: 3908, errors: 39 },
    { name: 'Fri', commands: 4800, errors: 48 },
    { name: 'Sat', commands: 3800, errors: 38 },
    { name: 'Sun', commands: 4300, errors: 43 },
  ];

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Weekly Command Usage</h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
            <span className="text-dark-400">Commands</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-dark-400">Errors</span>
          </div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Bar dataKey="commands" fill="#0EA5E9" radius={[2, 2, 0, 0]} />
            <Bar dataKey="errors" fill="#EF4444" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ServerStats;