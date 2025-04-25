import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Code, Database, BarChart4, Play } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={`fixed top-16 left-0 z-10 h-full w-64 bg-dark-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out ${isOpen ? '' : 'md:w-16'}`}>
      <div className="h-full overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => 
                `flex items-center p-2 text-base font-medium rounded-lg ${
                  isActive ? 'bg-dark-700 text-white' : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                } transition duration-150`
              }
            >
              <LayoutDashboard className="w-6 h-6" />
              <span className={`ml-3 ${isOpen ? 'block' : 'md:hidden'}`}>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/architecture"
              className={({ isActive }) => 
                `flex items-center p-2 text-base font-medium rounded-lg ${
                  isActive ? 'bg-dark-700 text-white' : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                } transition duration-150`
              }
            >
              <Code className="w-6 h-6" />
              <span className={`ml-3 ${isOpen ? 'block' : 'md:hidden'}`}>Architecture</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dataset"
              className={({ isActive }) => 
                `flex items-center p-2 text-base font-medium rounded-lg ${
                  isActive ? 'bg-dark-700 text-white' : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                } transition duration-150`
              }
            >
              <Database className="w-6 h-6" />
              <span className={`ml-3 ${isOpen ? 'block' : 'md:hidden'}`}>Dataset</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/evaluation"
              className={({ isActive }) => 
                `flex items-center p-2 text-base font-medium rounded-lg ${
                  isActive ? 'bg-dark-700 text-white' : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                } transition duration-150`
              }
            >
              <BarChart4 className="w-6 h-6" />
              <span className={`ml-3 ${isOpen ? 'block' : 'md:hidden'}`}>Evaluation</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/demo"
              className={({ isActive }) => 
                `flex items-center p-2 text-base font-medium rounded-lg ${
                  isActive ? 'bg-dark-700 text-white' : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                } transition duration-150`
              }
            >
              <Play className="w-6 h-6" />
              <span className={`ml-3 ${isOpen ? 'block' : 'md:hidden'}`}>Demo</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;