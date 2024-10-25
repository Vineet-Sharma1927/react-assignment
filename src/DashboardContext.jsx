import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within DashboardProvider');
  }
  return context;
};

export const DashboardProvider = ({ children }) => {
  const [workloadData] = useState([
    { id: 1, name: 'Shawn Stone', role: 'UI/UX Designer', avatar: '/api/placeholder/32/32', status: 'online' },
    { id: 2, name: 'Randy Delgado', role: 'UI/UX Designer', avatar: '/api/placeholder/32/32', status: 'online' },
    { id: 3, name: 'Emily Tyler', role: 'Copywriter', avatar: '/api/placeholder/32/32', status: 'offline' },
    { id: 4, name: 'Louis Castro', role: 'Copywriter', avatar: '/api/placeholder/32/32', status: 'online' },
    { id: 5, name: 'Blake Silva', role: 'iOS Developer', avatar: '/api/placeholder/32/32', status: 'online' },
    { id: 6, name: 'Joel Phillips', role: 'UI/UX Designer', avatar: '/api/placeholder/32/32', status: 'offline' },
    { id: 7, name: 'Wayne March', role: 'Copywriter', avatar: '/api/placeholder/32/32', status: 'online' },
    { id: 8, name: 'Oscar Holloway', role: 'UI/UX Designer', avatar: '/api/placeholder/32/32', status: 'online' },
  ]);

  const [events] = useState([
    { id: 1, title: 'Presentation of the new department', time: '1:00 PM', type: 'warning' },
    { id: 2, title: "Anna's Birthday", time: '8:00 PM', type: 'success' },
    { id: 3, title: "Ray's Birthday", time: '1:00 PM', type: 'success' },
  ]);

  const [projects] = useState([
    {
      id: 1,
      icon: '💊',
      title: 'Medical App (iOS native)',
      priority: 'Medium',
      taskCount: 34,
      activeUsers: 13,
      team: ['/api/placeholder/24/24', '/api/placeholder/24/24', '/api/placeholder/24/24']
    },
    {
      id: 2,
      icon: '🚗',
      title: 'Food Delivery Service',
      priority: 'Medium',
      taskCount: 50,
      activeUsers: 24,
      team: ['/api/placeholder/24/24', '/api/placeholder/24/24', '/api/placeholder/24/24']
    }
  ]);

  const value = {
    workloadData,
    events,
    projects,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};