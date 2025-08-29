import React from 'react';
import { Menu, Bell, Search, RefreshCw } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-dark-800 border-b border-dark-700 h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden text-dark-400 hover:text-white transition-colors"
        >
          <Menu size={20} />
        </button>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400" size={16} />
          <input
            type="text"
            placeholder="Search commands, users, or logs..."
            className="pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-80"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-dark-400 hover:text-white transition-colors">
          <RefreshCw size={20} />
        </button>
        
        <div className="relative">
          <button className="text-dark-400 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">A</span>
          </div>
          <span className="text-sm font-medium text-white hidden sm:block">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;