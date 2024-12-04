import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Key, Lock } from 'lucide-react';

export function SecuritySettings() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleTwoFactorToggle = () => {
    if (!twoFactorEnabled) {
      setShowQRCode(true);
    } else {
      setTwoFactorEnabled(false);
      setShowQRCode(false);
    }
  };

  const handleVerifyCode = () => {
    setTwoFactorEnabled(true);
    setShowQRCode(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Security Settings
        </h2>
      </div>

      <div className="space-y-6">
        {/* Two-Factor Authentication */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-gray-400" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Two-Factor Authentication
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Add an extra layer of security to your account
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={twoFactorEnabled}
                onChange={handleTwoFactorToggle}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                           peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                           dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                           after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                           after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                           after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>
          </div>

          {showQRCode && (
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-4">
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white p-4 rounded-lg">
                  {/* Placeholder for QR Code */}
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-600 rounded" />
                </div>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter verification code"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <button
                  onClick={handleVerifyCode}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Verify and Enable
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Password Change */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Key className="w-5 h-5 text-gray-400" />
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Change Password
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Update your password regularly to keep your account secure
              </p>
            </div>
          </div>
          <button className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:underline">
            Change Password
          </button>
        </div>

        {/* Login History */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 text-gray-400" />
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Login History
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Monitor recent account activity
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { device: 'MacBook Pro', location: 'San Francisco, CA', time: '2 hours ago' },
              { device: 'iPhone 13', location: 'San Francisco, CA', time: '1 day ago' },
            ].map((session, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {session.device}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {session.location}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {session.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}