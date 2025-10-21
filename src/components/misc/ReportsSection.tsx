"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

export default function SparklineChart() {
  const data = {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], // 2-character weekdays
    datasets: [
      {
        data: [3, 5, 2, 6, 4, 7, 3], // example zigzag data
        borderColor: "#7C3AED",
        backgroundColor: "rgba(124, 58, 237, 0.1)",
        tension: 0, // zigzag
        pointRadius: 5,
        pointBackgroundColor: "#7C3AED",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { 
        enabled: true,
        callbacks: {
          title: (context: any) => {
            // Convert back to full weekday names in tooltip
            const shortToFull: { [key: string]: string } = {
              'Mo': 'Monday',
              'Tu': 'Tuesday',
              'We': 'Wednesday',
              'Th': 'Thursday',
              'Fr': 'Friday',
              'Sa': 'Saturday',
              'Su': 'Sunday'
            };
            return shortToFull[context[0].label] || context[0].label;
          }
        }
      },
    },
    scales: {
      x: { 
        display: true, // Changed to true to show the 2-char labels
        ticks: {
          font: {
            size: 12
          }
        }
      },
      y: { display: false },
    },
    interaction: {
      intersect: false,
    },
    events: [], // disables all mouse/touch events
  };

  return <Line data={data} options={options} height={100} />;
}