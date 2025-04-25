import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkTo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, linkTo }) => {
  return (
    <div className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-all duration-300 border border-dark-700 hover:border-primary-700 group">
      <div className="flex items-center mb-4">
        <div className="mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link 
        to={linkTo} 
        className="inline-flex items-center text-primary-400 group-hover:text-primary-300 transition-colors"
      >
        Explore <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ProjectCard;