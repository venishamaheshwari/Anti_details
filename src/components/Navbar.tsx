import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, MonitorCheck } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <nav className="bg-dark-800 border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center space-x-3 ml-4">
              <MonitorCheck className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">CVGANS Anti-Spoofing</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/venishamaheshwari/CVGANS_ANTISPOOFING" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-dark-700 hover:text-white transition duration-150"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800 border-b border-dark-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-dark-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/architecture"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-dark-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Architecture
            </Link>
            <Link 
              to="/dataset"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-dark-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Dataset
            </Link>
            <Link 
              to="/evaluation"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-dark-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Evaluation
            </Link>
            <Link 
              to="/demo"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-dark-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </Link>
            <a 
              href="https://github.com/venishamaheshwari/CVGANS_ANTISPOOFING" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-dark-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;