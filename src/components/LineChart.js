import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['8 Jul', '9 Jul', '10 Jul', '11 Jul', '12 Jul', '13 Jul', '14 Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [250, 75, 50, 600, 300, 250, 275,],
        fill: false,
        borderColor: 'rgba(108,243,255,1)',
        tension: 0.1,
        pointRadius: 0, // Remove circular data points
        pointHoverRadius: 0, // Remove circular data points on hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: 'rgba(255, 255, 255, 1)', // X-axis labels color
            font: {
                family: '"Inter", sans-serif', // Customize Y-axis font family
                size: 13, // Customize Y-axis font size
              },
          },
        },
        y: {
          grid: {
            color: 'rgba(56, 58, 93, 1)', // Grid line color
          },
          ticks: {
            color: 'rgba(255, 255, 255, 1)', // Y-axis labels color
            font: {
                family: '"Inter", sans-serif', // Customize Y-axis font family
                size: 13, // Customize Y-axis font size
              },
            maxTicksLimit: 4,
          },
        },
      },
  };

  return <Line data={data} options={options} height={100} />;
};

export default LineChart;
