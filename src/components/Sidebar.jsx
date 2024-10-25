import React from 'react';
import { Calendar, Bell, Users, MessageSquare, FileText, LogOut } from 'lucide-react';

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
      active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
    }`}>
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r p-4">
      <div className="mb-8">
        <div className="h-8 w-8 bg-blue-600 rounded"></div>
      </div>
      <nav className="space-y-2">
        <SidebarItem icon={<div className="w-6 h-6">⌘</div>} label="Dashboard" active />
        <SidebarItem icon={<FileText size={20} />} label="Projects" />
        <SidebarItem icon={<Calendar size={20} />} label="Calendar" />
        <SidebarItem icon={<Users size={20} />} label="Vacations" />
        <SidebarItem icon={<Users size={20} />} label="Employees" />
        <SidebarItem icon={<MessageSquare size={20} />} label="Messenger" />
        <SidebarItem icon={<FileText size={20} />} label="HR Portal" />
      </nav>
      <div className="absolute bottom-4">
        <SidebarItem icon={<LogOut size={20} />} label="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;