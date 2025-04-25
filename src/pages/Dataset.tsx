import React from 'react';
import { Database, Image as ImageIcon, Users, Filter } from 'lucide-react';

const Dataset: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Dataset Analysis</h1>
      
      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Database className="mr-2 h-6 w-6 text-primary-500" />
          Datasets Used
        </h2>
        <p className="text-gray-300 mb-6">
          The model was trained and evaluated on multiple datasets to ensure robustness and generalization 
          across different demographics, camera qualities, and attack types.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-700 p-5 rounded-lg">
            <h3 className="font-bold text-xl mb-3 text-primary-400">Primary Datasets</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-1">CASIA-FASD</h4>
                <p className="text-gray-400 text-sm mb-2">
                  CASIA Face Anti-Spoofing Database contains 50 genuine subjects and various attack types.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Subjects:</span> 
                    <span className="float-right font-medium text-white">50</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Real videos:</span> 
                    <span className="float-right font-medium text-white">150</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Attack videos:</span> 
                    <span className="float-right font-medium text-white">450</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Attack types:</span> 
                    <span className="float-right font-medium text-white">3</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-1">Replay-Attack</h4>
                <p className="text-gray-400 text-sm mb-2">
                  Idiap Replay-Attack Database with high-quality videos of real and spoofed access attempts.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Subjects:</span> 
                    <span className="float-right font-medium text-white">50</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Real videos:</span> 
                    <span className="float-right font-medium text-white">200</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Attack videos:</span> 
                    <span className="float-right font-medium text-white">1000</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Attack types:</span> 
                    <span className="float-right font-medium text-white">4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-700 p-5 rounded-lg">
            <h3 className="font-bold text-xl mb-3 text-secondary-400">Additional Datasets</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-1">MSU-MFSD</h4>
                <p className="text-gray-400 text-sm mb-2">
                  Michigan State University Mobile Face Spoofing Database with mobile device recordings.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Subjects:</span> 
                    <span className="float-right font-medium text-white">35</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Real videos:</span> 
                    <span className="float-right font-medium text-white">70</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Attack videos:</span> 
                    <span className="float-right font-medium text-white">280</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Mobile devices:</span> 
                    <span className="float-right font-medium text-white">2</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-1">OULU-NPU</h4>
                <p className="text-gray-400 text-sm mb-2">
                  University of Oulu database with high-quality mobile videos in diverse lighting conditions.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Subjects:</span> 
                    <span className="float-right font-medium text-white">55</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Real videos:</span> 
                    <span className="float-right font-medium text-white">1980</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Attack types:</span> 
                    <span className="float-right font-medium text-white">7</span>
                  </div>
                  <div className="bg-dark-600 p-2 rounded">
                    <span className="text-gray-300">Lighting conditions:</span> 
                    <span className="float-right font-medium text-white">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <ImageIcon className="mr-2 h-6 w-6 text-secondary-500" />
          Attack Types
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-primary-400">Print Attacks</h3>
            <p className="text-gray-400 mb-3">
              High-quality printed photographs of legitimate users presented to the camera.
            </p>
            <div className="space-y-1 text-sm">
              <div className="bg-dark-600 p-2 rounded">
                <span className="text-gray-300">Print quality:</span> 
                <span className="float-right">High-res color</span>
              </div>
              <div className="bg-dark-600 p-2 rounded">
                <span className="text-gray-300">Paper types:</span> 
                <span className="float-right">Matte & glossy</span>
              </div>
              <div className="bg-dark-600 p-2 rounded">
                <span className="text-gray-300">Detection challenge:</span> 
                <span className="float-right">Medium</span>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-accent-400">Replay Attacks</h3>
            <p className="text-gray-400 mb-3">
              Digital videos of legitimate users displayed on screens of varying quality.
            </p>
            <div className="space-y-1 text-sm">
              <div className="bg-dark-600 p-2 rounded">
                <span className="text-gray-300">Display types:</span> 
                <span className="float-right">Mobile, tablet, monitor</span>
              </div>
              <div className="bg-dark-600 p-2 rounded">
                <span className="text-gray-300">Resolution range:</span> 
                <span className="float-right">SD to 4K</span>
              </div>
              <div className="bg-dark-600 p-2 rounded">
                <span className="text-gray-300">Detection challenge:</span> 
                <span className="float-right">High</span>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-success-400">3D Mask Attacks</h3>
            <p className="text-gray-400 mb-3">
              High-fidelity 3D masks with realistic skin textures and features.
            </p>
            <div className="space-y-1 text-sm">
              <div className="bg-dark-600 p-2 rounded">
                <span className="text-gray-300">Mask materials:</span> 
                <span className="float-right">Silicone, resin</span>
              </div>
              <div className="bg-dark-600 p-2 rounded">
                <span className="text-gray-300">Fabrication:</span> 
                <span className="float-right">3D printed, handcrafted</span>
              </div>
              <div className="bg-dark-600 p-2 rounded">
                <span className="text-gray-300">Detection challenge:</span> 
                <span className="float-right">Very high</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Users className="mr-2 h-6 w-6 text-accent-500" />
          Demographic Distribution
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Gender Distribution</h3>
            <div className="h-20 flex items-end mb-2">
              <div className="w-1/2 h-16 bg-primary-500 rounded-tl-md rounded-bl-md relative flex items-center justify-center">
                <span className="absolute top-0 -translate-y-6 text-gray-300">Male</span>
                <span className="text-white font-bold">58%</span>
              </div>
              <div className="w-1/2 h-12 bg-accent-500 rounded-tr-md rounded-br-md relative flex items-center justify-center">
                <span className="absolute top-0 -translate-y-6 text-gray-300">Female</span>
                <span className="text-white font-bold">42%</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              The combined datasets have a slight male bias, which was addressed during training with 
              balanced sampling and data augmentation techniques.
            </p>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Age Distribution</h3>
            <div className="h-20 flex items-end space-x-1 mb-2">
              <div className="w-1/4 h-8 bg-primary-300 rounded-t-md relative flex items-center justify-center">
                <span className="absolute top-0 -translate-y-6 text-gray-300 text-xs">18-25</span>
                <span className="text-white font-bold text-xs">15%</span>
              </div>
              <div className="w-1/4 h-16 bg-primary-500 rounded-t-md relative flex items-center justify-center">
                <span className="absolute top-0 -translate-y-6 text-gray-300 text-xs">25-35</span>
                <span className="text-white font-bold text-xs">40%</span>
              </div>
              <div className="w-1/4 h-12 bg-primary-600 rounded-t-md relative flex items-center justify-center">
                <span className="absolute top-0 -translate-y-6 text-gray-300 text-xs">35-45</span>
                <span className="text-white font-bold text-xs">30%</span>
              </div>
              <div className="w-1/4 h-6 bg-primary-700 rounded-t-md relative flex items-center justify-center">
                <span className="absolute top-0 -translate-y-6 text-gray-300 text-xs">45+</span>
                <span className="text-white font-bold text-xs">15%</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              The datasets predominantly feature subjects in the 25-45 age range, with fewer examples 
              of younger (18-25) and older (45+) individuals.
            </p>
          </div>
        </div>
        
        <div className="bg-dark-700 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-3">Ethnic Diversity</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-dark-600 p-3 rounded">
              <h4 className="font-medium text-gray-300 mb-1">Asian</h4>
              <div className="w-full bg-dark-500 rounded-full h-2.5">
                <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <span className="text-xs text-gray-400 float-right mt-1">35%</span>
            </div>
            <div className="bg-dark-600 p-3 rounded">
              <h4 className="font-medium text-gray-300 mb-1">Caucasian</h4>
              <div className="w-full bg-dark-500 rounded-full h-2.5">
                <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-xs text-gray-400 float-right mt-1">40%</span>
            </div>
            <div className="bg-dark-600 p-3 rounded">
              <h4 className="font-medium text-gray-300 mb-1">African</h4>
              <div className="w-full bg-dark-500 rounded-full h-2.5">
                <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '15%' }}></div>
              </div>
              <span className="text-xs text-gray-400 float-right mt-1">15%</span>
            </div>
            <div className="bg-dark-600 p-3 rounded">
              <h4 className="font-medium text-gray-300 mb-1">Other</h4>
              <div className="w-full bg-dark-500 rounded-full h-2.5">
                <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
              </div>
              <span className="text-xs text-gray-400 float-right mt-1">10%</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            To address imbalances in ethnicity representation, specific augmentation techniques were 
            applied to underrepresented groups, and evaluation included metrics for different demographic subgroups.
          </p>
        </div>
      </div>
      
      <div className="bg-dark-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Filter className="mr-2 h-6 w-6 text-success-500" />
          Data Preprocessing & Augmentation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Preprocessing Pipeline</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-300 pl-4">
              <li>Face detection using MTCNN with 5-point landmark detection</li>
              <li>Face alignment to normalize pose variations</li>
              <li>Cropping to 224×224 pixels centered on the face</li>
              <li>RGB normalization to [0,1] range</li>
              <li>Instance normalization with per-channel statistics</li>
            </ol>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Data Augmentation</h3>
            <ul className="space-y-2 text-gray-300">
              <li><span className="font-medium">Geometric:</span> Random rotation (±10°), scaling (0.9-1.1), horizontal flipping</li>
              <li><span className="font-medium">Photometric:</span> Brightness, contrast, saturation adjustments (±15%)</li>
              <li><span className="font-medium">Noise:</span> Gaussian noise, motion blur, JPEG compression artifacts</li>
              <li><span className="font-medium">Environmental:</span> Simulation of different lighting conditions</li>
              <li><span className="font-medium">Attack-specific:</span> Augmentations to simulate various attack qualities</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-dark-700 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-3">Training-Validation-Test Split</h3>
          <div className="h-12 flex items-center mb-4">
            <div className="w-7/12 h-full bg-primary-600 rounded-l-md flex items-center justify-center">
              <span className="text-white font-bold">Training (70%)</span>
            </div>
            <div className="w-2/12 h-full bg-accent-500 flex items-center justify-center">
              <span className="text-white font-bold">Val (15%)</span>
            </div>
            <div className="w-3/12 h-full bg-secondary-500 rounded-r-md flex items-center justify-center">
              <span className="text-white font-bold">Test (15%)</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            The dataset was split subject-disjointly, ensuring that subjects in the training set did not appear 
            in the validation or test sets. This approach ensures that the model learns to generalize to unseen 
            identities rather than memorizing specific faces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dataset;