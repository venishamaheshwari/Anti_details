import React, { useState } from 'react';
import { BarChart4, PieChart, LineChart, History, ArrowUpDown, CheckCircle2, XCircle } from 'lucide-react';
import EvaluationChart from '../components/EvaluationChart';

const Evaluation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('matrix');
  
  const tabs = [
    { id: 'matrix', label: 'Evaluation Matrix', icon: <BarChart4 className="h-5 w-5" /> },
    { id: 'comparison', label: 'Method Comparison', icon: <ArrowUpDown className="h-5 w-5" /> },
    { id: 'crossdataset', label: 'Cross-Dataset', icon: <History className="h-5 w-5" /> },
  ];
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Evaluation Metrics</h1>
      
      <div className="mb-6">
        <div className="border-b border-dark-600">
          <nav className="flex flex-wrap -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center py-4 px-4 md:px-6 text-sm font-medium border-b-2 ${
                  activeTab === tab.id
                    ? 'text-primary-400 border-primary-500'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {activeTab === 'matrix' && (
        <div className="space-y-8">
          <div className="bg-dark-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Performance Metrics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <PieChart className="mr-2 h-5 w-5 text-primary-500" />
                  Classification Metrics
                </h3>
                <div className="bg-dark-700 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-600 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Accuracy</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white">99.2%</span>
                        <span className="text-xs text-success-400">+2.3% vs baseline</span>
                      </div>
                    </div>
                    <div className="bg-dark-600 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Precision</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white">98.7%</span>
                        <span className="text-xs text-success-400">+3.1% vs baseline</span>
                      </div>
                    </div>
                    <div className="bg-dark-600 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Recall</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white">97.9%</span>
                        <span className="text-xs text-success-400">+4.7% vs baseline</span>
                      </div>
                    </div>
                    <div className="bg-dark-600 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">F1 Score</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white">98.3%</span>
                        <span className="text-xs text-success-400">+3.9% vs baseline</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <LineChart className="mr-2 h-5 w-5 text-secondary-500" />
                  Anti-Spoofing Specific Metrics
                </h3>
                <div className="bg-dark-700 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-600 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">APCER</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white">0.08</span>
                        <span className="text-xs text-success-400">-62% vs baseline</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Attack Presentation Classification Error Rate</p>
                    </div>
                    <div className="bg-dark-600 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">BPCER</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white">0.05</span>
                        <span className="text-xs text-success-400">-71% vs baseline</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Bona Fide Presentation Classification Error Rate</p>
                    </div>
                    <div className="bg-dark-600 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">ACER</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white">0.065</span>
                        <span className="text-xs text-success-400">-68% vs baseline</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Average Classification Error Rate</p>
                    </div>
                    <div className="bg-dark-600 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-400 mb-1">EER</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-white">0.7%</span>
                        <span className="text-xs text-success-400">-65% vs baseline</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Equal Error Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-700 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-4">ROC Curve Analysis</h3>
              <div className="bg-dark-600 rounded-lg p-4 h-64 flex items-center justify-center relative">
                <div className="h-full w-full">
                  <EvaluationChart 
                    type="line"
                    data={{
                      labels: ['0.0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0'],
                      datasets: [
                        {
                          label: 'CVGANS (AUC: 0.998)',
                          data: [0, 0.76, 0.87, 0.92, 0.95, 0.97, 0.984, 0.991, 0.996, 0.999, 1.0],
                          borderColor: '#0ea5e9',
                          backgroundColor: 'rgba(14, 165, 233, 0.2)',
                          tension: 0.4,
                          fill: true,
                        },
                        {
                          label: 'Baseline CNN (AUC: 0.963)',
                          data: [0, 0.42, 0.65, 0.78, 0.85, 0.9, 0.93, 0.95, 0.97, 0.99, 1.0],
                          borderColor: '#f97316',
                          backgroundColor: 'rgba(249, 115, 22, 0.2)',
                          tension: 0.4,
                          fill: true,
                          borderDash: [5, 5],
                        }
                      ]
                    }}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          title: {
                            display: true,
                            text: 'False Positive Rate',
                            color: '#94a3b8',
                          },
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                        },
                        y: {
                          title: {
                            display: true,
                            text: 'True Positive Rate',
                            color: '#94a3b8',
                          },
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                The ROC curve demonstrates the superior performance of our CVGANS model with an Area Under Curve (AUC) of 0.998, 
                compared to the baseline CNN model with an AUC of 0.963. The higher AUC indicates better discrimination between 
                real and spoofed faces across different threshold settings.
              </p>
            </div>
          </div>
          
          <div className="bg-dark-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Attack Type Performance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Performance by Attack Type</h3>
                <div className="bg-dark-600 rounded-lg p-4 h-64 flex items-center justify-center">
                  <EvaluationChart 
                    type="bar" 
                    data={{
                      labels: ['Print', 'Replay', '3D Mask'],
                      datasets: [
                        {
                          label: 'APCER',
                          data: [0.03, 0.09, 0.12],
                          backgroundColor: '#0ea5e9',
                        },
                        {
                          label: 'BPCER',
                          data: [0.04, 0.05, 0.06],
                          backgroundColor: '#f97316',
                        }
                      ]
                    }}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                        },
                        y: {
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                            callback: function(value) {
                              return value.toFixed(2);
                            }
                          },
                          max: 0.20,
                        },
                      },
                    }}
                  />
                </div>
              </div>
              
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Attack Detection Accuracy</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Print Attacks</span>
                      <span className="text-sm font-medium text-gray-300">99.7%</span>
                    </div>
                    <div className="w-full bg-dark-500 rounded-full h-2.5">
                      <div className="bg-primary-500 h-2.5 rounded-full" style={{width: '99.7%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">Replay Attacks</span>
                      <span className="text-sm font-medium text-gray-300">98.5%</span>
                    </div>
                    <div className="w-full bg-dark-500 rounded-full h-2.5">
                      <div className="bg-primary-500 h-2.5 rounded-full" style={{width: '98.5%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">3D Mask Attacks</span>
                      <span className="text-sm font-medium text-gray-300">97.1%</span>
                    </div>
                    <div className="w-full bg-dark-500 rounded-full h-2.5">
                      <div className="bg-primary-500 h-2.5 rounded-full" style={{width: '97.1%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-3 bg-dark-600 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Key Findings:</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Print attacks are the easiest to detect due to clear texture and reflectance differences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>High-quality replay attacks on premium screens remain challenging</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-4 w-4 text-error-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>3D masks show the highest error rates but still achieve excellent performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Confusion Matrix Analysis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Confusion Matrix</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 gap-px bg-dark-500 rounded-lg overflow-hidden">
                    <div className="bg-dark-600 p-8 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-success-500">97.9%</span>
                      <span className="text-xs text-gray-400 mt-1">True Positive</span>
                    </div>
                    <div className="bg-dark-600 p-8 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-error-500">2.1%</span>
                      <span className="text-xs text-gray-400 mt-1">False Negative</span>
                    </div>
                    <div className="bg-dark-600 p-8 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-error-500">1.3%</span>
                      <span className="text-xs text-gray-400 mt-1">False Positive</span>
                    </div>
                    <div className="bg-dark-600 p-8 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-success-500">98.7%</span>
                      <span className="text-xs text-gray-400 mt-1">True Negative</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-2 text-xs text-gray-400">
                  <div className="grid grid-cols-2 w-full">
                    <div className="text-center">Predicted Real</div>
                    <div className="text-center">Predicted Spoof</div>
                  </div>
                </div>
                <div className="flex text-xs text-gray-400 mt-1">
                  <div className="transform -rotate-90 origin-top-right translate-y-full translate-x-10">
                    <div className="grid grid-cols-2 w-full">
                      <div className="text-center">Actual Real</div>
                      <div className="text-center">Actual Spoof</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Error Analysis</h3>
                
                <div className="space-y-4">
                  <div className="bg-dark-600 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">False Positives (1.3%)</h4>
                    <p className="text-sm text-gray-400">
                      Cases where spoofed faces were incorrectly classified as real. Analysis revealed:
                    </p>
                    <ul className="text-sm text-gray-400 mt-2 space-y-1">
                      <li className="flex items-start">
                        <span className="text-error-500 mr-1">•</span>
                        <span>High-quality 3D masks with realistic texture (62% of FPs)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-error-500 mr-1">•</span>
                        <span>Ultra-HD display replay attacks (31% of FPs)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-error-500 mr-1">•</span>
                        <span>Poor lighting conditions affecting feature extraction (7% of FPs)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-dark-600 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">False Negatives (2.1%)</h4>
                    <p className="text-sm text-gray-400">
                      Cases where real faces were incorrectly classified as spoofs. Analysis revealed:
                    </p>
                    <ul className="text-sm text-gray-400 mt-2 space-y-1">
                      <li className="flex items-start">
                        <span className="text-error-500 mr-1">•</span>
                        <span>Unusual lighting conditions causing reflectance artifacts (54% of FNs)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-error-500 mr-1">•</span>
                        <span>Subjects wearing heavy makeup affecting texture analysis (28% of FNs)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-error-500 mr-1">•</span>
                        <span>Extreme poses and occlusions (18% of FNs)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-dark-600 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">Mitigation Strategies</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li className="flex items-start">
                        <span className="text-success-500 mr-1">•</span>
                        <span>Enhanced illumination normalization for varying lighting conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-success-500 mr-1">•</span>
                        <span>Expanded training data with more cosmetic variations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-success-500 mr-1">•</span>
                        <span>Multi-frame temporal analysis for video inputs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'comparison' && (
        <div className="space-y-8">
          <div className="bg-dark-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Method Comparison</h2>
            
            <div className="bg-dark-700 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-4">Performance Comparison with SOTA Methods</h3>
              <div className="relative overflow-x-auto rounded-md">
                <table className="w-full text-sm text-left text-gray-300">
                  <thead className="text-xs uppercase bg-dark-800">
                    <tr>
                      <th scope="col" className="px-6 py-3">Method</th>
                      <th scope="col" className="px-6 py-3 text-center">Accuracy</th>
                      <th scope="col" className="px-6 py-3 text-center">EER</th>
                      <th scope="col" className="px-6 py-3 text-center">ACER</th>
                      <th scope="col" className="px-6 py-3 text-center">AUC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-dark-600 border-b border-dark-500">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">LBP + SVM</td>
                      <td className="px-6 py-4 text-center">78.5%</td>
                      <td className="px-6 py-4 text-center">11.4%</td>
                      <td className="px-6 py-4 text-center">0.219</td>
                      <td className="px-6 py-4 text-center">0.892</td>
                    </tr>
                    <tr className="bg-dark-600 border-b border-dark-500">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">CNN</td>
                      <td className="px-6 py-4 text-center">89.4%</td>
                      <td className="px-6 py-4 text-center">5.2%</td>
                      <td className="px-6 py-4 text-center">0.112</td>
                      <td className="px-6 py-4 text-center">0.948</td>
                    </tr>
                    <tr className="bg-dark-600 border-b border-dark-500">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">ResNet + Attention</td>
                      <td className="px-6 py-4 text-center">95.8%</td>
                      <td className="px-6 py-4 text-center">2.1%</td>
                      <td className="px-6 py-4 text-center">0.085</td>
                      <td className="px-6 py-4 text-center">0.972</td>
                    </tr>
                    <tr className="bg-dark-600 border-b border-dark-500">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">DeepPixBiS</td>
                      <td className="px-6 py-4 text-center">97.2%</td>
                      <td className="px-6 py-4 text-center">1.8%</td>
                      <td className="px-6 py-4 text-center">0.071</td>
                      <td className="px-6 py-4 text-center">0.983</td>
                    </tr>
                    <tr className="bg-dark-600 border-b border-dark-500">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">Auxiliary (Depth)</td>
                      <td className="px-6 py-4 text-center">98.4%</td>
                      <td className="px-6 py-4 text-center">1.0%</td>
                      <td className="px-6 py-4 text-center">0.069</td>
                      <td className="px-6 py-4 text-center">0.991</td>
                    </tr>
                    <tr className="bg-primary-900 border-b border-primary-800">
                      <td className="px-6 py-4 font-medium text-primary-400 whitespace-nowrap">CVGANS (Ours)</td>
                      <td className="px-6 py-4 text-center text-primary-300">99.2%</td>
                      <td className="px-6 py-4 text-center text-primary-300">0.7%</td>
                      <td className="px-6 py-4 text-center text-primary-300">0.065</td>
                      <td className="px-6 py-4 text-center text-primary-300">0.998</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-4">EER Comparison</h3>
                <div className="bg-dark-600 rounded-lg p-4 h-64 flex items-center justify-center">
                  <EvaluationChart 
                    type="bar" 
                    data={{
                      labels: ['LBP+SVM', 'CNN', 'ResNet+Att', 'DeepPixBiS', 'Auxiliary', 'CVGANS'],
                      datasets: [
                        {
                          label: 'Equal Error Rate (%)',
                          data: [11.4, 5.2, 2.1, 1.8, 1.0, 0.7],
                          backgroundColor: [
                            'rgba(148, 163, 184, 0.8)',
                            'rgba(148, 163, 184, 0.8)',
                            'rgba(148, 163, 184, 0.8)',
                            'rgba(148, 163, 184, 0.8)',
                            'rgba(148, 163, 184, 0.8)',
                            'rgba(14, 165, 233, 0.8)'
                          ],
                          borderColor: [
                            'rgb(148, 163, 184)',
                            'rgb(148, 163, 184)',
                            'rgb(148, 163, 184)',
                            'rgb(148, 163, 184)',
                            'rgb(148, 163, 184)',
                            'rgb(14, 165, 233)'
                          ],
                          borderWidth: 1
                        }
                      ]
                    }}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          title: {
                            display: true,
                            text: 'EER (%)',
                            color: '#94a3b8',
                          },
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                          max: 14,
                        },
                        x: {
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                        },
                      },
                    }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Equal Error Rate (EER) is the rate at which false acceptance equals false rejection. 
                  Lower values indicate better performance. Our CVGANS model achieves the lowest EER of 0.7%.
                </p>
              </div>
              
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Accuracy Comparison</h3>
                <div className="bg-dark-600 rounded-lg p-4 h-64 flex items-center justify-center">
                  <EvaluationChart 
                    type="line" 
                    data={{
                      labels: ['LBP+SVM', 'CNN', 'ResNet+Att', 'DeepPixBiS', 'Auxiliary', 'CVGANS'],
                      datasets: [
                        {
                          label: 'Accuracy (%)',
                          data: [78.5, 89.4, 95.8, 97.2, 98.4, 99.2],
                          borderColor: '#0ea5e9',
                          backgroundColor: 'rgba(14, 165, 233, 0.2)',
                          tension: 0.4,
                          fill: true,
                          pointBackgroundColor: [
                            '#94a3b8',
                            '#94a3b8',
                            '#94a3b8',
                            '#94a3b8',
                            '#94a3b8',
                            '#0ea5e9'
                          ],
                          pointRadius: 5,
                          pointHoverRadius: 7,
                        }
                      ]
                    }}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          title: {
                            display: true,
                            text: 'Accuracy (%)',
                            color: '#94a3b8',
                          },
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                          min: 75,
                          max: 100,
                        },
                        x: {
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                        },
                      },
                    }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  The accuracy trend shows continuous improvement as methods become more sophisticated. 
                  Our CVGANS model achieves the highest accuracy of 99.2%, showing significant improvement 
                  over traditional methods like LBP+SVM and even modern deep learning approaches.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Computational Performance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Training Time</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200">
                        CVGANS
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-primary-600">
                        48h
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200">
                    <div style={{ width: '100%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"></div>
                  </div>
                  
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                        ResNet+Att
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-gray-600">
                        32h
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div style={{ width: '67%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
                  </div>
                  
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                        CNN
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-gray-600">
                        18h
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div style={{ width: '38%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Inference Time</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200">
                        CVGANS
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-primary-600">
                        24ms
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200">
                    <div style={{ width: '80%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"></div>
                  </div>
                  
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                        ResNet+Att
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-gray-600">
                        18ms
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
                  </div>
                  
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                        CNN
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-gray-600">
                        12ms
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-center">Model Size</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200">
                        CVGANS
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-primary-600">
                        98MB
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200">
                    <div style={{ width: '100%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"></div>
                  </div>
                  
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                        ResNet+Att
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-gray-600">
                        87MB
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div style={{ width: '89%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
                  </div>
                  
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                        CNN
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-gray-600">
                        45MB
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div style={{ width: '46%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-700 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Performance Analysis</h3>
              <p className="text-gray-300 mb-4">
                The CVGANS model shows competitive computational performance considering its superior accuracy:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>
                    <strong>Training Time:</strong> While requiring longer training (48 hours on Tesla V100), 
                    this is a one-time cost that's justified by the significant accuracy improvements.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>
                    <strong>Inference Time:</strong> At 24ms per image, the model can process ~41 frames per second, 
                    making it suitable for real-time applications with minimal latency.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>
                    <strong>Model Size:</strong> At 98MB, the model is larger than simpler approaches but can still 
                    be deployed on modern edge devices with 4GB+ RAM.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span>
                    <strong>Efficiency-Accuracy Tradeoff:</strong> The model offers the best balance between performance 
                    and computational cost, with only a slight increase in inference time (24ms vs 18ms for ResNet+Attention) 
                    but a substantial gain in accuracy (99.2% vs 95.8%).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'crossdataset' && (
        <div className="space-y-8">
          <div className="bg-dark-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Cross-Dataset Evaluation</h2>
            <p className="text-gray-300 mb-6">
              Cross-dataset evaluation assesses the model's generalization ability by training on one dataset 
              and testing on different ones. This is crucial for real-world deployment where the model will 
              face unseen conditions.
            </p>
            
            <div className="bg-dark-700 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-4">Protocol</h3>
              <p className="text-gray-300 mb-4">
                We conducted comprehensive cross-dataset experiments with the following protocol:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">1.</span>
                  <span>Train on one source dataset (e.g., CASIA-FASD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">2.</span>
                  <span>Test on a different target dataset (e.g., Replay-Attack) without any fine-tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">3.</span>
                  <span>Repeat for all possible source-target combinations</span>
                </li>
              </ul>
              <div className="bg-dark-600 p-4 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Note on Data Distribution Differences:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-start">
                    <span className="text-warning-400 mr-1">•</span>
                    <span>Different camera qualities and resolutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warning-400 mr-1">•</span>
                    <span>Varying lighting conditions and environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warning-400 mr-1">•</span>
                    <span>Different attack types and qualities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warning-400 mr-1">•</span>
                    <span>Demographic variations between datasets</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Source → Target Performance (HTER%)</h3>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs uppercase bg-dark-800">
                      <tr>
                        <th scope="col" className="px-4 py-3">Train → Test</th>
                        <th scope="col" className="px-4 py-3 text-center">CNN</th>
                        <th scope="col" className="px-4 py-3 text-center">ResNet+Att</th>
                        <th scope="col" className="px-4 py-3 text-center">CVGANS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-dark-600 border-b border-dark-500">
                        <td className="px-4 py-3">CASIA → Replay</td>
                        <td className="px-4 py-3 text-center">28.5%</td>
                        <td className="px-4 py-3 text-center">17.8%</td>
                        <td className="px-4 py-3 text-center text-primary-300">11.2%</td>
                      </tr>
                      <tr className="bg-dark-600 border-b border-dark-500">
                        <td className="px-4 py-3">Replay → CASIA</td>
                        <td className="px-4 py-3 text-center">31.2%</td>
                        <td className="px-4 py-3 text-center">22.4%</td>
                        <td className="px-4 py-3 text-center text-primary-300">14.8%</td>
                      </tr>
                      <tr className="bg-dark-600 border-b border-dark-500">
                        <td className="px-4 py-3">CASIA → MSU</td>
                        <td className="px-4 py-3 text-center">26.7%</td>
                        <td className="px-4 py-3 text-center">15.9%</td>
                        <td className="px-4 py-3 text-center text-primary-300">10.5%</td>
                      </tr>
                      <tr className="bg-dark-600 border-b border-dark-500">
                        <td className="px-4 py-3">MSU → CASIA</td>
                        <td className="px-4 py-3 text-center">36.8%</td>
                        <td className="px-4 py-3 text-center">24.3%</td>
                        <td className="px-4 py-3 text-center text-primary-300">19.1%</td>
                      </tr>
                      <tr className="bg-dark-600 border-b border-dark-500">
                        <td className="px-4 py-3">Replay → OULU</td>
                        <td className="px-4 py-3 text-center">34.2%</td>
                        <td className="px-4 py-3 text-center">19.7%</td>
                        <td className="px-4 py-3 text-center text-primary-300">12.3%</td>
                      </tr>
                      <tr className="bg-dark-600">
                        <td className="px-4 py-3 font-medium">Average</td>
                        <td className="px-4 py-3 text-center">31.5%</td>
                        <td className="px-4 py-3 text-center">20.0%</td>
                        <td className="px-4 py-3 text-center font-medium text-primary-300">13.6%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Half Total Error Rate (HTER) is the average of false acceptance and false rejection rates. 
                  Lower values indicate better cross-dataset generalization.
                </p>
              </div>
              
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Cross-Dataset Performance</h3>
                <div className="bg-dark-600 rounded-lg p-4 h-64 flex items-center justify-center">
                  <EvaluationChart 
                    type="bar" 
                    data={{
                      labels: ['CASIA→Replay', 'Replay→CASIA', 'CASIA→MSU', 'MSU→CASIA', 'Replay→OULU', 'Average'],
                      datasets: [
                        {
                          label: 'CNN',
                          data: [28.5, 31.2, 26.7, 36.8, 34.2, 31.5],
                          backgroundColor: 'rgba(148, 163, 184, 0.8)',
                        },
                        {
                          label: 'ResNet+Att',
                          data: [17.8, 22.4, 15.9, 24.3, 19.7, 20.0],
                          backgroundColor: 'rgba(249, 115, 22, 0.8)',
                        },
                        {
                          label: 'CVGANS',
                          data: [11.2, 14.8, 10.5, 19.1, 12.3, 13.6],
                          backgroundColor: 'rgba(14, 165, 233, 0.8)',
                        }
                      ]
                    }}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          title: {
                            display: true,
                            text: 'HTER (%)',
                            color: '#94a3b8',
                          },
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                          max: 40,
                        },
                        x: {
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-dark-700 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Analysis of Cross-Dataset Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-dark-600 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Key Findings</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>CVGANS shows a 56.8% relative improvement in cross-dataset generalization compared to CNN</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>32% relative improvement over the next best method (ResNet+Attention)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Most challenging scenario is MSU→CASIA, likely due to significant differences in camera quality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Best performance on CASIA→MSU, suggesting effective feature generalization for mobile captures</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-dark-600 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Reasons for Improved Generalization</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>The adversarial training helps learn more generalized features independent of dataset-specific biases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Multi-scale feature fusion captures both fine-grained and global patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Domain-invariant feature learning through the generator-discriminator competition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span>Enhanced robustness to variations in lighting, camera quality, and attack methods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Domain Adaptation Techniques</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Feature-Space Adaptation</h3>
                <p className="text-gray-300 mb-4">
                  To further improve cross-dataset performance, we implemented feature-space adaptation techniques:
                </p>
                <div className="space-y-3">
                  <div className="bg-dark-600 p-3 rounded">
                    <h4 className="font-medium text-primary-400 mb-1">Feature Normalization</h4>
                    <p className="text-gray-400 text-sm">
                      Instance normalization applied to feature maps to reduce domain-specific statistics.
                    </p>
                  </div>
                  <div className="bg-dark-600 p-3 rounded">
                    <h4 className="font-medium text-primary-400 mb-1">Domain Adversarial Training</h4>
                    <p className="text-gray-400 text-sm">
                      Additional domain discriminator to ensure features are domain-agnostic.
                    </p>
                  </div>
                  <div className="bg-dark-600 p-3 rounded">
                    <h4 className="font-medium text-primary-400 mb-1">Whitening Transform</h4>
                    <p className="text-gray-400 text-sm">
                      Removes second-order statistics from features to improve generalization.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Domain Adaptation Results</h3>
                <div className="bg-dark-600 rounded-lg p-4 h-64 flex items-center justify-center">
                  <EvaluationChart 
                    type="bar" 
                    data={{
                      labels: ['No Adaptation', 'Feature Norm', 'Domain Adv', 'Whitening', 'Combined'],
                      datasets: [
                        {
                          label: 'Average HTER (%)',
                          data: [13.6, 11.2, 9.8, 10.4, 8.3],
                          backgroundColor: [
                            'rgba(148, 163, 184, 0.8)',
                            'rgba(14, 165, 233, 0.5)',
                            'rgba(14, 165, 233, 0.6)',
                            'rgba(14, 165, 233, 0.7)',
                            'rgba(14, 165, 233, 0.9)'
                          ],
                          borderColor: [
                            'rgb(148, 163, 184)',
                            'rgb(14, 165, 233)',
                            'rgb(14, 165, 233)',
                            'rgb(14, 165, 233)',
                            'rgb(14, 165, 233)'
                          ],
                          borderWidth: 1
                        }
                      ]
                    }}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          title: {
                            display: true,
                            text: 'Average HTER (%)',
                            color: '#94a3b8',
                          },
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                          max: 16,
                        },
                        x: {
                          grid: {
                            color: 'rgba(30, 41, 59, 0.8)',
                          },
                          ticks: {
                            color: '#94a3b8',
                          },
                        },
                      },
                    }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Combining all adaptation techniques reduces the average HTER to 8.3%, a 39% relative 
                  improvement over the base CVGANS model without explicit domain adaptation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Evaluation;