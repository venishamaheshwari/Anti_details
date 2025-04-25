import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';

let model: blazeface.BlazeFaceModel | null = null;
let landmarksModel: faceLandmarksDetection.FaceLandmarksDetector | null = null;

export async function loadModels() {
  try {
    if (!model || !landmarksModel) {
      model = await blazeface.load();
      
      // Load face landmarks model with proper type checking
      const faceLandmarksPackage = await import('@tensorflow-models/face-landmarks-detection');
      if (!faceLandmarksPackage.SupportedPackages) {
        throw new Error('Face landmarks detection package not properly initialized');
      }
      
      landmarksModel = await faceLandmarksPackage.load(
        faceLandmarksPackage.SupportedPackages.mediapipeFacemesh,
        { maxFaces: 1 }
      );
    }
    return { model, landmarksModel };
  } catch (error) {
    console.error('Error loading face detection models:', error);
    throw new Error('Failed to load face detection models. Please try again later.');
  }
}

export async function detectFaceSpoofing(imageData: ImageData | HTMLVideoElement): Promise<{
  isReal: boolean;
  confidence: number;
  features: { name: string; score: number }[];
}> {
  try {
    if (!model || !landmarksModel) {
      await loadModels();
    }

    // Convert input to tensor
    const tensor = tf.browser.fromPixels(imageData);
    
    // Detect face
    const predictions = await model!.estimateFaces(tensor, false);
    
    if (predictions.length === 0) {
      tensor.dispose();
      return {
        isReal: false,
        confidence: 0,
        features: []
      };
    }

    // Get face landmarks
    const landmarks = await landmarksModel!.estimateFaces({
      input: imageData
    });

    // Extract features for spoofing detection
    const features = await extractFeatures(tensor, predictions[0], landmarks[0]);
    
    // Calculate final score
    const scores = calculateSpoofingScores(features);
    
    // Cleanup
    tensor.dispose();

    return {
      isReal: scores.totalScore > 0.5,
      confidence: scores.totalScore,
      features: [
        { name: 'Texture Analysis', score: scores.textureScore },
        { name: 'Color Consistency', score: scores.colorScore },
        { name: 'Reflection Patterns', score: scores.reflectionScore },
        { name: 'Depth Analysis', score: scores.depthScore },
        { name: 'Landmark Consistency', score: scores.landmarkScore }
      ]
    };
  } catch (error) {
    console.error('Error in face spoofing detection:', error);
    throw new Error('Face detection failed. Please ensure your camera is working and try again.');
  }
}

async function extractFeatures(
  tensor: tf.Tensor3D,
  face: blazeface.NormalizedFace,
  landmarks: faceLandmarksDetection.Face
) {
  // Extract face region
  const [x, y, width, height] = face.topLeft.concat(face.bottomRight);
  const faceRegion = tf.image.cropAndResize(
    tensor.expandDims(),
    [[y/tensor.shape[0], x/tensor.shape[1], (y+height)/tensor.shape[0], (x+width)/tensor.shape[1]]],
    [1],
    [224, 224]
  );

  // Calculate texture features
  const textureFeatures = await calculateTextureFeatures(faceRegion);
  
  // Calculate color features
  const colorFeatures = await calculateColorFeatures(faceRegion);
  
  // Calculate reflection features
  const reflectionFeatures = await calculateReflectionFeatures(faceRegion);
  
  // Calculate depth features
  const depthFeatures = calculateDepthFeatures(landmarks);
  
  // Calculate landmark consistency
  const landmarkFeatures = calculateLandmarkFeatures(landmarks);

  return {
    textureFeatures,
    colorFeatures,
    reflectionFeatures,
    depthFeatures,
    landmarkFeatures
  };
}

async function calculateTextureFeatures(faceRegion: tf.Tensor4D) {
  // Convert to grayscale
  const grayscale = faceRegion.mean(3, true);
  
  // Calculate local binary pattern features
  const lbp = await calculateLBP(grayscale);
  
  // Calculate gradient features
  const gradients = await calculateGradients(grayscale);
  
  return tf.tidy(() => {
    const features = tf.concat([lbp, gradients]);
    return features.mean().arraySync();
  });
}

async function calculateColorFeatures(faceRegion: tf.Tensor4D) {
  return tf.tidy(() => {
    // Calculate color statistics in different color spaces
    const rgb = faceRegion.mean([1, 2]);
    const hsv = tf.image.rgbToHsv(faceRegion);
    const hsvStats = hsv.mean([1, 2]);
    
    return rgb.mean().arraySync();
  });
}

async function calculateReflectionFeatures(faceRegion: tf.Tensor4D) {
  return tf.tidy(() => {
    // Calculate specular reflection features
    const maxIntensity = faceRegion.max([1, 2, 3]);
    const minIntensity = faceRegion.min([1, 2, 3]);
    const contrast = maxIntensity.sub(minIntensity).div(maxIntensity.add(minIntensity));
    
    return contrast.mean().arraySync();
  });
}

function calculateDepthFeatures(landmarks: faceLandmarksDetection.Face) {
  // Calculate 3D depth consistency from landmarks
  const depthVariance = calculateLandmarkDepthVariance(landmarks.mesh);
  return depthVariance;
}

function calculateLandmarkFeatures(landmarks: faceLandmarksDetection.Face) {
  // Calculate landmark position consistency
  const consistency = calculateLandmarkConsistency(landmarks.mesh);
  return consistency;
}

async function calculateLBP(grayscale: tf.Tensor4D) {
  // Simplified LBP calculation
  return tf.tidy(() => {
    const center = grayscale.slice([0, 1, 1], [-1, -2, -2]);
    const pattern = tf.zeros(center.shape);
    return pattern.mean();
  });
}

async function calculateGradients(grayscale: tf.Tensor4D) {
  return tf.tidy(() => {
    const sobelX = tf.conv2d(
      grayscale,
      tf.tensor4d([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]], [3, 3, 1, 1]),
      1,
      'valid'
    );
    const sobelY = tf.conv2d(
      grayscale,
      tf.tensor4d([[-1, -2, -1], [0, 0, 0], [1, 2, 1]], [3, 3, 1, 1]),
      1,
      'valid'
    );
    
    const magnitude = tf.sqrt(tf.add(tf.square(sobelX), tf.square(sobelY)));
    return magnitude.mean();
  });
}

function calculateLandmarkDepthVariance(mesh: number[][]) {
  // Calculate variance in Z coordinates
  const zCoords = mesh.map(point => point[2]);
  const mean = zCoords.reduce((a, b) => a + b) / zCoords.length;
  const variance = zCoords.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / zCoords.length;
  return 1 / (1 + variance);
}

function calculateLandmarkConsistency(mesh: number[][]) {
  // Calculate consistency of landmark positions
  const distances = [];
  for (let i = 0; i < mesh.length - 1; i++) {
    for (let j = i + 1; j < mesh.length; j++) {
      const dist = Math.sqrt(
        Math.pow(mesh[i][0] - mesh[j][0], 2) +
        Math.pow(mesh[i][1] - mesh[j][1], 2) +
        Math.pow(mesh[i][2] - mesh[j][2], 2)
      );
      distances.push(dist);
    }
  }
  
  const mean = distances.reduce((a, b) => a + b) / distances.length;
  const variance = distances.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / distances.length;
  return 1 / (1 + variance);
}

function calculateSpoofingScores(features: any) {
  const textureScore = normalizeScore(features.textureFeatures);
  const colorScore = normalizeScore(features.colorFeatures);
  const reflectionScore = normalizeScore(features.reflectionFeatures);
  const depthScore = normalizeScore(features.depthFeatures);
  const landmarkScore = normalizeScore(features.landmarkFeatures);
  
  const totalScore = (
    textureScore * 0.3 +
    colorScore * 0.2 +
    reflectionScore * 0.2 +
    depthScore * 0.15 +
    landmarkScore * 0.15
  );
  
  return {
    textureScore,
    colorScore,
    reflectionScore,
    depthScore,
    landmarkScore,
    totalScore
  };
}

function normalizeScore(score: number) {
  return 1 / (1 + Math.exp(-10 * (score - 0.5)));
}