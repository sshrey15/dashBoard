"use client";
import React, { useState } from "react";
import Confetti from "react-confetti";

import Form from "@/components/Form";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [cgpa, setCgpa] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

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
        data: cgpa,
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
        display: true,
        min: 1,
        max: 10,
        stepSize: 0.2,
        ticks: {
          callback: function (value, index, values) {
            return Number(value).toFixed(1);
          },
        },
      },
    },
  };

  const handleFormSubmit = (newData) => {
    setCgpa(newData);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold light:text-gray-700">
          CGPA Calculator
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center min-h-screen bg-green-100">
        <div className="lg:pd-7 sm:p-1 sm:ml-3 lg:ml-10 mt-10 bg-white rounded shadow-xl sm:h-full sm:w-full lg:w-full">
          
          <h2 className="text-2xl font-bold mb-4 light:text-gray-700">
            Line Chart
          </h2>
          <Line className="sm:w-full" data={data} width={300} height={160} options={options} />
        </div>
        <div className=" flex flex-col justify-center items-center w-full">
          {cgpa.reduce((a, b) => a + b, 0) / cgpa.length > 7.5 && (
            <>
              <p className="mt-4 text-xl light:text-gray-700 bg-green-500 p-6">
                You are eligible for sitting for placements
              </p>
              <Confetti />
            </>
          ) }
          <h2 className="text-2xl font-bold mb-4 light:text-gray-700">
            Enter Data
          </h2>
          <Form onSubmit={handleFormSubmit} />
          <p className="mt-4 text-xl light:text-gray-700 bg-yellow-500 p-6">
            Calculated CGPA:{" "}
            {(cgpa.reduce((a, b) => a + b, 0) / cgpa.length).toFixed(3)}
          </p>
        </div>
      </div>
    </>
  );
}
