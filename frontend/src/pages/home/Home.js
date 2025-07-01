import React, { useState } from 'react'
import ModuleCard from './components/ModuleCard'
import HeaderCard from './components/HeaderCard' // Add this import
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { modulesData } from '../../fakeJsons/ModuleData';
import { headerCards } from '../../fakeJsons/headerData';

export default function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleModuleClick = (module) => {
    navigate(module?.href);
  };

  const handleHeaderCardClick = (card) => {
    navigate(card?.href);

  };

  // Filter modules based on search term
  const filteredModules = modulesData.filter(module =>
    module.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="max-w-full mx-auto mb-12">


        {/* Header Cards */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {headerCards.map((card) => (
              <HeaderCard
                key={card.id}
                card={card}
                onClick={handleHeaderCardClick}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-full flex gap-6">
        {/* Module Cards Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Search Results Info */}
          {searchTerm && (
            <div className="mb-6">
              <p className="text-gray-600 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {filteredModules.length} result{filteredModules.length !== 1 ? 's' : ''} found for "{searchTerm}"
              </p>
            </div>
          )}

          {/* No Results Message */}
          {searchTerm && filteredModules.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl p-8 shadow-md max-w-md mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <div className="text-gray-400 mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ color: '#0a2f6f' }}>No modules found</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">Try adjusting your search terms or browse all modules.</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
          {/* Search Bar */}
          <div className="max-w-full mb-8 flex justify-between align-middle bg-blue-50 p-2 rounded-2xl">
            <div>
              <h3
                className="text-xl font-bold text-blue-900 text-center pt-3 ml-3"
              >
                Business Process Modelling Notation
              </h3>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search modules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 pl-14 text-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-blue-900 focus:shadow-xl border-0"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 p-1 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Module Cards Grid */}
          {filteredModules.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredModules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  onClick={handleModuleClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}