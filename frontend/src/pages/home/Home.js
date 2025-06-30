import React, { useState } from 'react'
import ModuleCard from './components/ModuleCard'
import { modulesData } from '../../fakeJsons/moduleData/ModuleData';

export default function Home() {
  const [selectedModule, setSelectedModule] = useState(null);
 
  const handleModuleClick = (module) => {
    setSelectedModule(module);
    console.log('Module clicked:', module);
    // Add your navigation logic here
  };
 
  return (
    <div
      className="min-h-screen p-8"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
 
        {/* Search Bar */}
        {/* <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search modules..."
              className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div> */}
      </div>
 
      {/* Module Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modulesData.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onClick={handleModuleClick}
            />
          ))}
        </div>
      </div>
 
 
 
    </div>
  );
}
 