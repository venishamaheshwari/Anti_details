import React, { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, description, icon }) => {
  return (
    <div className="bg-dark-800 rounded-lg p-6 border border-dark-700 hover:border-primary-700 transition-all duration-300">
      <div className="flex items-start">
        <div className="mr-4">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;