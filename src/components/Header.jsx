import React from 'react';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <div className="flex items-center space-x-2">
          <img 
            src="/api/placeholder/32/32" 
            alt="User" 
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium">Evan Yates</span>
        </div>
      </div>
    </div>
  );
};

export default Header;