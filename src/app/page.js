"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title, // Corrected from 'Ttile'
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Filler,
  Title, // Corrected from 'Ttile'
  Tooltip,
  Legend,
);

import {Bar, Line, Scatter, Bubble} from 'react-chartjs-2';

export default function Home() {

  const data ={
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [10, 100, 30, 40, 50, 60, 70],
      },
    ],
  };

  const options ={
    plugins: {
      Legend: {
        display: false,
      }
    },

    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
        borderColor: 'rgba(47, 128, 237, 1)',
        fill: "start",
        backgroundColor: 'rgba(47, 128, 237, 0.4)',

      },
      point: {
        radius: 0,
        hitRadius: 0,
      }
      },

      scales:{
        xAxis: {
          display: false,
        },
        yAxis: {
          display: false,
      }
    }
  }
  return (
   <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white rounded shadow-md w-64">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Line Chart</h2>
        <Line data={data} width={50} height={25} options={options} />
      </div>
      <div className="p-4 bg-white rounded shadow-md w-64 mt-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Bar Chart</h2>
        <Bar data={data} width={50} height={25} options={options} />
      </div>
    </div>
   </>
  );
}
