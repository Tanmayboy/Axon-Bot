import React, { useState } from 'react';
import { 
  Save, 
  Bell, 
  Shield, 
  Database, 
  Palette,
  Globe,
  Key,
  AlertTriangle
} from 'lucide-react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: {
      errorAlerts: true,
      performanceAlerts: true,
      securityAlerts: true,
      maintenanceAlerts: false,
    },
    security: {
      rateLimiting: true,
      ipWhitelist: '',
      apiKeyRotation: 30,
      twoFactorAuth: true,
    },
    performance: {
      cacheSize: 512,
      maxConnections: 1000,
      timeoutDuration: 30,
      autoScaling: true,
    },
    appearance: {
      theme: 'dark',
      accentColor: '#0EA5E9',
      compactMode: false,
    }
  });

  const handleSave = () => {
    // Save settings logic here
    console.log('Saving settings:', settings);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-dark-400 mt-1">Configure your bot and dashboard preferences</p>
        </div>
        
        <button onClick={handleSave} className="btn-primary flex items-center space-x-2">
          <Save size={16} />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Notification Settings */}
      <div className="card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Bell className="text-primary-400" size={20} />
          <h3 className="text-lg font-semibold text-white">Notification Settings</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(settings.notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-white capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <p className="text-xs text-dark-400">
                  Receive alerts for {key.toLowerCase().replace('alerts', '')} events
                </p>
              </div>
              <button 
                onClick={() => setSettings(prev => ({
                  ...prev,
                  notifications: {
                    ...prev.notifications,
                    [key]: !value
                  }
                }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? 'bg-primary-600' : 'bg-dark-600'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  value ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className="card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="text-green-400" size={20} />
          <h3 className="text-lg font-semibold text-white">Security Settings</h3>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                IP Whitelist
              </label>
              <textarea
                value={settings.security.ipWhitelist}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  security: { ...prev.security, ipWhitelist: e.target.value }
                }))}
                placeholder="Enter IP addresses, one per line"
                className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 h-24 resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                API Key Rotation (days)
              </label>
              <input
                type="number"
                value={settings.security.apiKeyRotation}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  security: { ...prev.security, apiKeyRotation: parseInt(e.target.value) }
                }))}
                className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-white">Rate Limiting</span>
              <p className="text-xs text-dark-400">Protect against spam and abuse</p>
            </div>
            <button 
              onClick={() => setSettings(prev => ({
                ...prev,
                security: { ...prev.security, rateLimiting: !prev.security.rateLimiting }
              }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.security.rateLimiting ? 'bg-primary-600' : 'bg-dark-600'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.security.rateLimiting ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-white">Two-Factor Authentication</span>
              <p className="text-xs text-dark-400">Additional security for admin access</p>
            </div>
            <button 
              onClick={() => setSettings(prev => ({
                ...prev,
                security: { ...prev.security, twoFactorAuth: !prev.security.twoFactorAuth }
              }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.security.twoFactorAuth ? 'bg-primary-600' : 'bg-dark-600'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.security.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Performance Settings */}
      <div className="card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Database className="text-purple-400" size={20} />
          <h3 className="text-lg font-semibold text-white">Performance Settings</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Cache Size (MB)
            </label>
            <input
              type="number"
              value={settings.performance.cacheSize}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                performance: { ...prev.performance, cacheSize: parseInt(e.target.value) }
              }))}
              className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Max Connections
            </label>
            <input
              type="number"
              value={settings.performance.maxConnections}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                performance: { ...prev.performance, maxConnections: parseInt(e.target.value) }
              }))}
              className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Timeout Duration (s)
            </label>
            <input
              type="number"
              value={settings.performance.timeoutDuration}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                performance: { ...prev.performance, timeoutDuration: parseInt(e.target.value) }
              }))}
              className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-white">Auto Scaling</span>
              <p className="text-xs text-dark-400">Automatically adjust resources based on load</p>
            </div>
            <button 
              onClick={() => setSettings(prev => ({
                ...prev,
                performance: { ...prev.performance, autoScaling: !prev.performance.autoScaling }
              }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.performance.autoScaling ? 'bg-primary-600' : 'bg-dark-600'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.performance.autoScaling ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Palette className="text-pink-400" size={20} />
          <h3 className="text-lg font-semibold text-white">Appearance Settings</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Theme
            </label>
            <select
              value={settings.appearance.theme}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                appearance: { ...prev.appearance, theme: e.target.value }
              }))}
              className="w-full bg-dark-700 border border-dark-600 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark-300 mb-2">
              Accent Color
            </label>
            <input
              type="color"
              value={settings.appearance.accentColor}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                appearance: { ...prev.appearance, accentColor: e.target.value }
              }))}
              className="w-full h-10 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-white">Compact Mode</span>
              <p className="text-xs text-dark-400">Reduce spacing and padding for more content</p>
            </div>
            <button 
              onClick={() => setSettings(prev => ({
                ...prev,
                appearance: { ...prev.appearance, compactMode: !prev.appearance.compactMode }
              }))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.appearance.compactMode ? 'bg-primary-600' : 'bg-dark-600'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.appearance.compactMode ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="card p-6 border-red-500/20">
        <div className="flex items-center space-x-3 mb-6">
          <AlertTriangle className="text-red-400" size={20} />
          <h3 className="text-lg font-semibold text-white">Danger Zone</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div>
              <span className="text-sm font-medium text-white">Reset All Settings</span>
              <p className="text-xs text-dark-400">This will restore all settings to their default values</p>
            </div>
            <button className="btn-danger">
              Reset Settings
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div>
              <span className="text-sm font-medium text-white">Clear All Data</span>
              <p className="text-xs text-dark-400">This will permanently delete all bot data and logs</p>
            </div>
            <button className="btn-danger">
              Clear Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;