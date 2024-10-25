import React from 'react';
import { useDashboard } from '../DashboardContext';

const WorkloadCard = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex flex-col items-center text-center">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-12 h-12 rounded-full mb-2"
        />
        <h3 className="font-medium">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.role}</p>
        <button 
          className={`mt-2 px-4 py-1 text-sm border rounded-full ${
            user.status === 'online' ? 'text-green-600 border-green-600' : 'text-gray-600 border-gray-600'
          }`}
        >
          {user.status}
        </button>
      </div>
    </div>
  );
};

const WorkloadSection = () => {
  const { workloadData } = useDashboard();
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Workload</h2>
        <button className="text-blue-600 hover:text-blue-700">View all</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {workloadData.map((user) => (
          <WorkloadCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default WorkloadSection;