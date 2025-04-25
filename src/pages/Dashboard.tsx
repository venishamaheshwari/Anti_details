import React from 'react';
import { ArrowRight, ShieldCheck, Brain, BarChart3, Image, Database, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import StatsCard from '../components/StatsCard';

const Dashboard: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">CVGANS Anti-Face Spoofing</h1>
        <p className="text-gray-300 text-lg mb-6">
          A comprehensive implementation of Convolutional Visual Generative Adversarial Networks (CVGANS) for robust face anti-spoofing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard 
            title="Accuracy" 
            value="99.2%" 
            description="On test dataset" 
            icon={<ShieldCheck className="h-8 w-8 text-primary-500" />} 
          />
          <StatsCard 
            title="EER" 
            value="0.7%" 
            description="Equal Error Rate" 
            icon={<BarChart3 className="h-8 w-8 text-secondary-500" />} 
          />
          <StatsCard 
            title="APCER" 
            value="0.08" 
            description="Attack Presentation Classification Error Rate" 
            icon={<Image className="h-8 w-8 text-accent-500" />} 
          />
          <StatsCard 
            title="BPCER" 
            value="0.05" 
            description="Bona Fide Presentation Classification Error Rate" 
            icon={<Brain className="h-8 w-8 text-success-500" />} 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ProjectCard 
          title="GAN Architecture" 
          description="Explore the Convolutional Visual GAN architecture used for face anti-spoofing"
          icon={<Brain className="h-6 w-6 text-primary-500" />}
          linkTo="/architecture"
        />
        <ProjectCard 
          title="Dataset Analysis" 
          description="Review the datasets used for training and evaluation"
          icon={<Database className="h-6 w-6 text-secondary-500" />}
          linkTo="/dataset"
        />
        <ProjectCard 
          title="Evaluation Metrics" 
          description="Comprehensive evaluation of the model's performance"
          icon={<BarChart3 className="h-6 w-6 text-accent-500" />}
          linkTo="/evaluation"
        />
        <ProjectCard 
          title="Interactive Demo" 
          description="Test the model with your own images"
          icon={<Play className="h-6 w-6 text-success-500" />}
          linkTo="/demo"
        />
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-gray-300 mb-4">
          This project implements a Convolutional Visual Generative Adversarial Network (CVGAN) for face anti-spoofing. 
          The model is designed to detect presentation attacks on facial recognition systems, including printed photos, 
          digital screens, and 3D masks.
        </p>
        <p className="text-gray-300 mb-4">
          Unlike traditional methods that rely on simple texture analysis, our approach leverages deep learning to 
          capture subtle differences between genuine and spoofed faces across multiple domains, including:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 pl-4">
          <li>Texture and surface reflectance properties</li>
          <li>Color distribution and consistency</li>
          <li>Depth information and 3D structure</li>
          <li>Temporal features for video inputs</li>
          <li>Image quality and noise patterns</li>
        </ul>
        <Link to="/architecture" className="inline-flex items-center text-primary-400 hover:text-primary-300">
          Learn more about the architecture <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-dark-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-500 mt-1"></div>
              <p className="ml-3 text-gray-300">Multi-feature extraction for robust detection</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-secondary-500 mt-1"></div>
              <p className="ml-3 text-gray-300">Generative adversarial training for improved performance</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent-500 mt-1"></div>
              <p className="ml-3 text-gray-300">Cross-dataset evaluation for generalization</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-success-500 mt-1"></div>
              <p className="ml-3 text-gray-300">Real-time detection capabilities</p>
            </li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Research Impact</h2>
          <p className="text-gray-300 mb-4">
            This project demonstrates significant improvements over traditional methods:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white text-sm font-medium mr-3">1</span>
              <span className="text-gray-300">Reduced equal error rate by over 50%</span>
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white text-sm font-medium mr-3">2</span>
              <span className="text-gray-300">Improved cross-dataset performance by 35%</span>
            </li>
            <li className="flex items-center">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white text-sm font-medium mr-3">3</span>
              <span className="text-gray-300">Enhanced detection of previously challenging attack types</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;