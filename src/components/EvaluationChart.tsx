import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Set default global options
ChartJS.defaults.color = '#cbd5e1';
ChartJS.defaults.borderColor = '#334155';

interface EvaluationChartProps {
  type: 'line' | 'bar';
  data: ChartData<'line' | 'bar'>;
  options?: ChartOptions<'line' | 'bar'>;
}

const defaultOptions: ChartOptions<'line' | 'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 16,
        color: '#cbd5e1',
      },
    },
    tooltip: {
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      titleColor: '#f8fafc',
      bodyColor: '#e2e8f0',
      borderColor: '#475569',
      borderWidth: 1,
      padding: 12,
      displayColors: true,
      usePointStyle: true,
      callbacks: {
        label: function(context) {
          const value = context.parsed.y;
          return `${context.dataset.label}: ${value}`;
        }
      }
    }
  },
  elements: {
    line: {
      tension: 0.4,
    },
    point: {
      radius: 4,
      hoverRadius: 6,
    },
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(51, 65, 85, 0.5)',
      },
      ticks: {
        color: '#94a3b8',
      },
    },
    y: {
      grid: {
        color: 'rgba(51, 65, 85, 0.5)',
      },
      ticks: {
        color: '#94a3b8',
      },
    },
  },
};

const EvaluationChart: React.FC<EvaluationChartProps> = ({ type, data, options }) => {
  const chartOptions = { ...defaultOptions, ...options };
  
  return (
    <div className="w-full h-full">
      {type === 'line' ? (
        <Line data={data} options={chartOptions} />
      ) : (
        <Bar data={data} options={chartOptions} />
      )}
    </div>
  );
};

export default EvaluationChart;