import React from 'react';
import { Code, Layers, Database, CpuIcon } from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">GAN Architecture</h1>
      
      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-300 mb-4">
          The CVGANS (Convolutional Visual Generative Adversarial Networks) architecture is designed specifically for face anti-spoofing. 
          It consists of two primary networks working in adversarial fashion:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-primary-400 mb-2 flex items-center">
              <Code className="mr-2 h-5 w-5" /> Generator Network
            </h3>
            <p className="text-gray-400">
              The generator network learns to produce synthetic spoof images that can fool the discriminator. It transforms input images 
              using multiple convolutional layers to create realistic spoof-like features.
            </p>
          </div>
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-accent-400 mb-2 flex items-center">
              <Layers className="mr-2 h-5 w-5" /> Discriminator Network
            </h3>
            <p className="text-gray-400">
              The discriminator learns to distinguish between real and spoofed face images. It extracts deep features from multiple domains 
              to detect even subtle presentation attacks.
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative overflow-x-auto mb-8">
        <div className="bg-dark-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Network Architecture</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="w-full max-w-md bg-dark-700 p-4 rounded-lg">
              <h3 className="text-center font-bold text-primary-400 mb-4">Generator</h3>
              <div className="space-y-3">
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Input Layer</span>
                  <span className="text-primary-300">3×224×224</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Conv2D + BatchNorm + ReLU</span>
                  <span className="text-primary-300">64×112×112</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Conv2D + BatchNorm + ReLU</span>
                  <span className="text-primary-300">128×56×56</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Conv2D + BatchNorm + ReLU</span>
                  <span className="text-primary-300">256×28×28</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Residual Blocks (×4)</span>
                  <span className="text-primary-300">256×28×28</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>TransConv2D + BatchNorm + ReLU</span>
                  <span className="text-primary-300">128×56×56</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>TransConv2D + BatchNorm + ReLU</span>
                  <span className="text-primary-300">64×112×112</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>TransConv2D + Tanh</span>
                  <span className="text-primary-300">3×224×224</span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md bg-dark-700 p-4 rounded-lg">
              <h3 className="text-center font-bold text-accent-400 mb-4">Discriminator</h3>
              <div className="space-y-3">
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Input Layer</span>
                  <span className="text-accent-300">3×224×224</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Conv2D + LeakyReLU</span>
                  <span className="text-accent-300">64×112×112</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Conv2D + BatchNorm + LeakyReLU</span>
                  <span className="text-accent-300">128×56×56</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Conv2D + BatchNorm + LeakyReLU</span>
                  <span className="text-accent-300">256×28×28</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Conv2D + BatchNorm + LeakyReLU</span>
                  <span className="text-accent-300">512×14×14</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Multi-scale Feature Extraction</span>
                  <span className="text-accent-300">512×7×7</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Global Average Pooling</span>
                  <span className="text-accent-300">512</span>
                </div>
                <div className="bg-dark-600 p-3 rounded flex justify-between">
                  <span>Dense + Sigmoid</span>
                  <span className="text-accent-300">1</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Key Architectural Innovations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-700 p-4 rounded-lg">
              <h4 className="font-bold text-secondary-400 mb-2 flex items-center">
                <Database className="mr-2 h-5 w-5" /> Multi-Scale Feature Fusion
              </h4>
              <p className="text-gray-400">
                Features from different scales are concatenated to capture both fine-grained texture and global structural information. 
                This allows the detection of artifacts at varying resolutions and helps in generalizing across different attack types.
              </p>
            </div>
            <div className="bg-dark-700 p-4 rounded-lg">
              <h4 className="font-bold text-secondary-400 mb-2 flex items-center">
                <CpuIcon className="mr-2 h-5 w-5" /> Attention Mechanisms
              </h4>
              <p className="text-gray-400">
                Spatial and channel attention modules help the network focus on discriminative regions and features that are most 
                relevant for distinguishing between real and spoofed faces.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Training Process</h2>
        <div className="space-y-4">
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Loss Functions</h3>
            <p className="text-gray-300 mb-3">The model uses a combination of loss functions:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-dark-600 p-3 rounded">
                <h4 className="font-medium text-primary-400 mb-1">Adversarial Loss</h4>
                <p className="text-gray-400 text-sm">
                  Standard GAN loss where the generator tries to minimize log(1-D(G(z))) while the discriminator tries to maximize log(D(x)) + log(1-D(G(z))).
                </p>
              </div>
              <div className="bg-dark-600 p-3 rounded">
                <h4 className="font-medium text-primary-400 mb-1">Pixel-wise Loss</h4>
                <p className="text-gray-400 text-sm">
                  L1 loss between the generated spoof images and the real spoof images to ensure visual similarity.
                </p>
              </div>
              <div className="bg-dark-600 p-3 rounded">
                <h4 className="font-medium text-primary-400 mb-1">Feature Matching Loss</h4>
                <p className="text-gray-400 text-sm">
                  Loss based on the difference between intermediate feature representations to improve the quality of generated images.
                </p>
              </div>
              <div className="bg-dark-600 p-3 rounded">
                <h4 className="font-medium text-primary-400 mb-1">Classification Loss</h4>
                <p className="text-gray-400 text-sm">
                  Binary cross-entropy loss for the discriminator's classification task.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Optimization</h3>
            <ul className="space-y-2 text-gray-300">
              <li><span className="font-medium">Optimizer:</span> Adam with β₁ = 0.5, β₂ = 0.999</li>
              <li><span className="font-medium">Learning Rate:</span> 2e-4 with linear decay after 100 epochs</li>
              <li><span className="font-medium">Batch Size:</span> 32</li>
              <li><span className="font-medium">Epochs:</span> 200</li>
            </ul>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Training Strategy</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-300 pl-4">
              <li>Pre-train the discriminator on real and spoofed faces for 20 epochs</li>
              <li>Jointly train the generator and discriminator in adversarial manner</li>
              <li>Apply learning rate decay after 100 epochs</li>
              <li>Use model checkpointing to save best performing models based on validation EER</li>
              <li>Apply early stopping with patience of 20 epochs</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="bg-dark-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Implementation Details</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Framework & Libraries</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-gray-300">
              <li className="bg-dark-700 p-3 rounded">PyTorch 1.10</li>
              <li className="bg-dark-700 p-3 rounded">OpenCV 4.5.5</li>
              <li className="bg-dark-700 p-3 rounded">NumPy 1.21.5</li>
              <li className="bg-dark-700 p-3 rounded">Scikit-learn 1.0.2</li>
              <li className="bg-dark-700 p-3 rounded">Albumentations 1.1.0</li>
              <li className="bg-dark-700 p-3 rounded">TensorBoard 2.8.0</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">Hardware</h3>
            <p className="text-gray-300">The model was trained on:</p>
            <ul className="space-y-2 text-gray-300 mt-2">
              <li><span className="font-medium">GPU:</span> NVIDIA Tesla V100 16GB</li>
              <li><span className="font-medium">CPU:</span> 8-core Intel Xeon</li>
              <li><span className="font-medium">RAM:</span> 32GB</li>
              <li><span className="font-medium">Training Duration:</span> ~48 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;