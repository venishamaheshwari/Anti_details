import React, { useState, useRef, useEffect } from 'react';
import { Upload, Play, Shield, AlertTriangle, Camera, StopCircle } from 'lucide-react';
import { loadModels, detectFaceSpoofing } from '../utils/faceDetection';

const Demo: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [isLiveDetection, setIsLiveDetection] = useState<boolean>(false);
  const [result, setResult] = useState<{
    isReal: boolean;
    confidence: number;
    features: {name: string; score: number}[];
  } | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  
  const startLiveDetection = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsLiveDetection(true);
        analyzeLiveStream();
      }
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };
  
  const stopLiveDetection = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsLiveDetection(false);
    setResult(null);
  };
  
  useEffect(() => {
    // Load models when component mounts
    loadModels().catch(console.error);
    
    return () => {
      stopLiveDetection();
    };
  }, []);

  const analyzeLiveStream = async () => {
    if (!isLiveDetection) return;
    
    const canvas = canvasRef.current;
    const video = videoRef.current;
    
    if (canvas && video) {
      const context = canvas.getContext('2d');
      if (context) {
        // Capture frame from video
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        try {
          // Get detection result
          const result = await detectFaceSpoofing(video);
          setResult(result);
        } catch (error) {
          console.error('Detection error:', error);
        }
      }
    }
    
    // Continue analysis loop
    requestAnimationFrame(analyzeLiveStream);
  };
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      setResult(null);
    }
  };
  
  const analyzeImage = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    try {
      const img = new Image();
      img.src = previewUrl!;
      await img.decode();
      
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const result = await detectFaceSpoofing(imageData);
      setResult(result);
    } catch (error) {
      console.error('Analysis error:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Interactive Demo</h1>
      
      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Face Anti-Spoofing Detector</h2>
        <p className="text-gray-300 mb-6">
          Test our CVGANS anti-spoofing system using your webcam for real-time detection or by uploading an image.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-700 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Live Detection</h3>
              <button
                onClick={isLiveDetection ? stopLiveDetection : startLiveDetection}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  isLiveDetection
                    ? 'bg-error-600 hover:bg-error-700 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                {isLiveDetection ? (
                  <>
                    <StopCircle className="h-5 w-5 mr-2" />
                    Stop Camera
                  </>
                ) : (
                  <>
                    <Camera className="h-5 w-5 mr-2" />
                    Start Camera
                  </>
                )}
              </button>
            </div>
            
            <div className="relative aspect-video bg-dark-800 rounded-lg overflow-hidden mb-4">
              {isLiveDetection ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <canvas
                    ref={canvasRef}
                    width="640"
                    height="480"
                    className="hidden"
                  />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-dark-400" />
                </div>
              )}
            </div>
            
            <div className="text-sm text-gray-400">
              {isLiveDetection ? (
                <p>Live detection is active. Analysis results will update in real-time.</p>
              ) : (
                <p>Click "Start Camera" to begin real-time face anti-spoofing detection.</p>
              )}
            </div>
          </div>
          
          <div className="bg-dark-700 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Upload Image</h3>
            
            <div className="mb-6">
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center ${
                  previewUrl ? 'border-primary-500' : 'border-dark-500 hover:border-primary-500'
                } transition-colors`}>
                  {previewUrl ? (
                    <div className="w-full">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="max-h-64 mx-auto object-contain rounded"
                      />
                      <p className="text-sm text-gray-400 mt-2 text-center">
                        {selectedFile?.name}
                      </p>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-12 w-12 text-dark-400 mb-4" />
                      <p className="text-gray-400 text-center">
                        Drag and drop or click to upload an image
                      </p>
                      <p className="text-gray-500 text-sm mt-2 text-center">
                        Supported formats: JPG, PNG
                      </p>
                    </>
                  )}
                </div>
              </label>
              <input 
                id="file-upload" 
                name="file-upload" 
                type="file" 
                accept="image/jpeg,image/png" 
                className="hidden" 
                onChange={handleFileSelect}
              />
            </div>
            
            <button
              onClick={analyzeImage}
              disabled={!selectedFile || isAnalyzing}
              className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-colors ${
                !selectedFile || isAnalyzing
                  ? 'bg-dark-600 text-dark-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Play className="h-5 w-5 mr-2" />
                  Analyze Image
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="mt-6 bg-dark-700 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-4">Analysis Results</h3>
          
          {!result && !isAnalyzing ? (
            <div className="h-32 flex items-center justify-center">
              <p className="text-gray-400 text-center">
                Start live detection or upload an image to see the results
              </p>
            </div>
          ) : isAnalyzing ? (
            <div className="h-32 flex flex-col items-center justify-center">
              <div className="animate-spin h-12 w-12 border-4 border-primary-500 border-t-transparent rounded-full mb-4"></div>
              <p className="text-gray-300">Analyzing image...</p>
              <p className="text-gray-400 text-sm mt-2">This may take a few seconds</p>
            </div>
          ) : result && (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg flex items-center ${
                result.isReal ? 'bg-success-900/40' : 'bg-error-900/40'
              }`}>
                {result.isReal ? (
                  <Shield className="h-8 w-8 text-success-500 mr-3 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="h-8 w-8 text-error-500 mr-3 flex-shrink-0" />
                )}
                <div>
                  <h4 className={`font-bold text-lg ${
                    result.isReal ? 'text-success-400' : 'text-error-400'
                  }`}>
                    {result.isReal ? 'Real Face Detected' : 'Spoofed Face Detected'}
                  </h4>
                  <p className="text-gray-300">
                    Confidence: {(result.confidence * 100).toFixed(2)}%
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Feature Analysis</h4>
                <div className="space-y-3">
                  {result.features.map((feature, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-300">{feature.name}</span>
                        <span className="text-sm font-medium text-gray-300">{(feature.score * 100).toFixed(0)}%</span>
                      </div>
                      <div className="w-full bg-dark-500 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            feature.score > 0.5 ? 'bg-success-500' : 'bg-error-500'
                          }`} 
                          style={{width: `${feature.score * 100}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-dark-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        
        <div className="space-y-4">
          <p className="text-gray-300">
            This demo provides a simplified interface to our full CVGANS anti-spoofing system. The detection process:
          </p>
          
          <ol className="space-y-4 list-decimal list-inside pl-4 text-gray-300">
            <li>
              <span className="font-medium">Face Detection:</span> Locates and tracks faces in real-time using advanced detection algorithms
            </li>
            <li>
              <span className="font-medium">Feature Extraction:</span> The model analyzes multiple features including:
              <ul className="list-disc list-inside pl-6 mt-2 text-gray-400">
                <li>Texture patterns and micro-textures</li>
                <li>Color distribution and consistency</li>
                <li>Reflectance and illumination properties</li>
                <li>Frequency domain characteristics</li>
                <li>Noise patterns and distribution</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Real-time Analysis:</span> Continuous monitoring and assessment of facial authenticity
            </li>
            <li>
              <span className="font-medium">Multi-feature Fusion:</span> Combines multiple detection methods for robust spoofing detection
            </li>
          </ol>
          
          <div className="bg-dark-700 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-lg mb-2">Usage Tips</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-warning-500 mr-2">•</span>
                <span>
                  Ensure good lighting conditions for optimal detection accuracy
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-warning-500 mr-2">•</span>
                <span>
                  Position your face within the camera frame and maintain a stable position
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-warning-500 mr-2">•</span>
                <span>
                  For uploaded images, use clear, well-lit facial photos for best results
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;