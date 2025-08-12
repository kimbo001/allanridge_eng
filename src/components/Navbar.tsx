import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrench } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-800 border-b-4 border-orange-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-orange-500" />
            <span className="text-white text-xl font-bold tracking-wide">
              ALLANRIDGE ENGINEERING
            </span>
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-orange-400 bg-gray-700' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-orange-400 bg-gray-700' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;