import React, { useState } from 'react';
import { LogOut, User, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo.png';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Mock user data - replace with actual user data from your auth system
  const user = {
    name: 'John Doe',
    email: 'john.doe@eplindia.com',
    avatar: null // Set to null to use initials instead
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    setIsDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-gray-200 px-6 py-2 bg-gradient-to-br from-blue-50 to-blue-100 backdrop-blur ">
      <div className="flex items-center justify-between max-w-full mx-auto">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="EPL India"
            className="rounded-lg object-contain"
          />
        </div>

        {/* Right side - User section */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2"
          >
            {/* User Avatar */}
            <div className="flex items-center space-x-2">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                  style={{ backgroundColor: '#0a2f6f' }}
                >
                  {getInitials(user.name)}
                </div>
              )}
              
              {/* User name */}
              <span className="text-sm font-medium text-gray-700 hidden md:block">
                {user.name}
              </span>
              
              {/* Dropdown arrow */}
              <ChevronDown 
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              
              <div className="py-1">
                <button
                  onClick={() => {
                    console.log('Profile clicked');
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                >
                  <User className="w-4 h-4 mr-3 text-gray-500" />
                  Profile
                </button>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                >
                  <LogOut className="w-4 h-4 mr-3 text-red-500" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;