import React from 'react';
import '../App.css';

const ProgressBar = ({ minValue, maxValue, value, label }) => {

  console.log({ minValue, maxValue, value, label })
  const percentage = Math.min(Math.max((value - minValue) / (maxValue - minValue) * 100, 0), 100);

  return (
    <div className='ui-progress'>
    <div className='progress-bar-label'><span>{label}</span><span>{value}</span></div>
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
    </div>
    </div>
  );
};

export default ProgressBar;
