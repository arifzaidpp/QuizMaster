import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, X } from 'lucide-react';

export function ProfileHeader() {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload delay
      setTimeout(() => {
        setIsUploading(false);
      }, 1500);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      {/* Cover Photo */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Profile Info */}
      <div className="relative px-6 pb-6">
        {/* Profile Picture */}
        <div className="absolute -top-16 left-6 space-y-2">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:opacity-100 opacity-0 transition-opacity flex items-center justify-center">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <Camera className="w-6 h-6 text-white" />
                </label>
              </div>
              {isUploading && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="pt-20">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            John Doe
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Senior Software Developer
          </p>
        </div>
      </div>
    </div>
  );
}