import React from 'react';
import { Bell } from 'lucide-react';
import { useDashboard } from '../DashboardContext';

const EventCard = ({ event }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div 
          className={`w-2 h-2 rounded-full ${
            event.type === 'warning' ? 'bg-yellow-400' : 'bg-green-400'
          }`} 
        />
        <div>
          <h3 className="font-medium">{event.title}</h3>
          <p className="text-sm text-gray-600">Today | {event.time}</p>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <Bell size={16} />
      </button>
    </div>
  );
};

const EventsSection = () => {
  const { events } = useDashboard();
  
  return (
    <div className="bg-white p-4 rounded-lg border mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Nearest Events</h2>
        <button className="text-blue-600 hover:text-blue-700">View all</button>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;