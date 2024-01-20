"use client";
import Form from "@/components/Form";
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
} from "chart.js";

ChartJS.register(
  CategoryScale,

  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Filler,
  Title, // Corrected from 'Ttile'
  Tooltip,
  Legend
);

import { Bar, Line, Scatter, Bubble, Doughnut } from "react-chartjs-2";

export default function Home() {
  const data = {
    labels: [
      "SEM-1",
      "SEM-2",
      "SEM-3",
      "SEM-4",
      "SEM-5",
      "SEM-6",
      "SEM-7",
      "SEM-8",
    ],
    datasets: [
      {
        data: [9.06, 9.28, 9.28, 9.28, 9.28, 9.28, 9.28, 9.28],
      },
    ],
  };

  const options = {
    plugins: {
      Legend: {
        display: false,
      },
    },

    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
        borderColor: "rgba(47, 128, 237, 1)",
        fill: "start",
        backgroundColor: "rgba(47, 128, 237, 0.4)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },

    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold light:text-gray-700">CGPA Calculator</h1>
        <p className="text-2xl light:text-gray-700">Calculate your CGPA with ease</p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center min-h-screen bg-green-100">
        <div className="p-4 ml-10 mt-10 bg-white rounded shadow-md md:w-1/2 lg:w-full">
          <h2 className="text-2xl font-bold mb-4 light:text-gray-700">
            Line Chart
          </h2>
          <Line data={data} width={300} height={160} options={options} />
        </div>
        <div className="flex flex-col justify-center items-center lg:w-full">
          <h2 className="text-2xl font-bold mb-4 light:text-gray-700">Form</h2>
          <Form />
          <p className="mt-4 text-xl light:text-gray-700">Calculated CGPA: </p>
        </div>
      </div>
    </>
  );
}
