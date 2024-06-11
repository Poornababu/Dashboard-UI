import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

const DoughnutCom = () => {
    
Chart.register(ArcElement);

const speed = 95;

const chartData = {
  datasets: [
    {
      data: [1,1],
      backgroundColor: [
        'rgba(70, 71, 107, 1)',
        'rgba(97, 208, 100, 1)', 
      ],
      borderWidth: 0,
      borderRadius: [6]
    }
  ]
};

const options = {
  circumference: 180,
  rotation: -90,
  cutout: "65%",
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1,
  animation: {
    animateRotate: true
    // onComplete: function (chart: Chart, easing : ) {}
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  }
};

const guageNeedle = {
  id: "guageNeedle",
  afterDatasetsDraw: (chart) => {
    const {
      ctx,
      chartArea: { width }
    } = chart;
    ctx.save();

    const angle = Math.PI + (1 / 100) * speed * Math.PI;

    const cx = width / 2;
    const cy = chart._metasets[0].data[0].y;

    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, -3);
    ctx.lineTo(cx, 0);
    ctx.lineTo(0, 3);
    ctx.fillStyle = "#dedee4";
    ctx.fill();
    ctx.rotate(-angle);

    ctx.translate(-cx, -cy);
    ctx.beginPath();
    ctx.arc(cx, cy, 10, 0, 10);
    ctx.fill();
    ctx.restore();
  }
};

// const pointer = {
//   id: "pointer",
//   afterDatasetsDraw: (chart) => {
//     const { ctx } = chart;

//     var data = chart._metasets[0].data[0];

//     var radius = data.innerRadius + (data.outerRadius - data.innerRadius) / 2;

//     var centerX = data.x;
//     var centerY = data.y;

//     const angle = Math.PI * (speed / 100) + Math.PI;

//     var x = centerX + radius * Math.cos(angle);
//     var y = centerY + radius * Math.sin(angle);

//     ctx.save();

//     ctx.beginPath();
//     ctx.lineWidth = 6;
//     ctx.arc(x, y, 12, 0, 2 * Math.PI);
//     ctx.stroke();

//     ctx.restore();
//   }
// };

const speedLabel = {
  id: "speedLabel",
  afterDatasetsDraw: (chart) => {
    const { ctx } = chart;

    var data = chart._metasets[0].data[0];
    var centerX = data.x;
    var centerY = data.y;

    ctx.fillStyle = "#dedee4";
    ctx.font = `38px Inter`;
    ctx.textAlign = "center";
    ctx.fillText(speed + '%', centerX, centerY + 50);
  }
};

const labels = {
  id: "labels",
  afterDatasetsDraw: (chart) => {
    const {
      ctx,
      chartArea: { width }
    } = chart;
    ctx.save();
    const cy = chart._metasets[0].data[0].y;

    ctx.fillStyle = "#dedee4";
    ctx.font = `16px Inter`;
    ctx.textAlign = "center";
    ctx.fillText(80, 10, cy + 20);
    ctx.fillText(100, width - 20, cy + 20);
  }
};

    return (
                <div className='ui-doughnut'>
                <Doughnut
                    plugins={[speedLabel, guageNeedle, labels]}
                    data={chartData}
                    options={options}
                />
                </div>
    );
};

export default DoughnutCom;
