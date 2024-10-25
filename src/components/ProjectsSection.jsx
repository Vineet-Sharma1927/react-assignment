import React from 'react';
import { useDashboard } from '../DashboardContext';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{project.icon}</span>
          <div>
            <h3 className="font-medium">{project.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                {project.priority}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <h4 className="font-medium">Project Data</h4>
          <div className="flex items-center space-x-4 mt-2">
            <div>
              <p className="text-sm text-gray-600">All tasks</p>
              <p className="font-medium">{project.taskCount}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Active users</p>
              <p className="font-medium">{project.activeUsers}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex -space-x-2">
        {project.team.map((avatar, index) => (
          <img 
            key={index} 
            src={avatar} 
            alt="Team member" 
            className="w-6 h-6 rounded-full border-2 border-white"
          />
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { projects } = useDashboard();
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Projects</h2>
        <button className="text-blue-600 hover:text-blue-700">View all</button>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;