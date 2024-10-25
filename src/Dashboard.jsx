import React from 'react';
import { DashboardProvider } from './DashboardContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WorkloadSection from './components/WorkloadSection';
import EventsSection from './components/EventsSection';
import ProjectsSection from './components/ProjectsSection';

const Dashboard = () => {
  return (
    <DashboardProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <WorkloadSection />
                <ProjectsSection />
              </div>
              <div>
                <EventsSection />
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;