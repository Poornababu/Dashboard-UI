import React from 'react';
import AgentScores from './AgentScores';
import DoughnutCom from './Doughnut';

const RightSide = () => {


    return (
        <aside className='ui-right'>
        <div className='ui-bg ui-csat mb-12'>
          <h2 className='ui-title'>QA this week</h2>
          <h3 className='ui-sub-title'>Avg.team score</h3>
          <DoughnutCom />
          <AgentScores />
        </div>
      </aside>
    );
};

export default RightSide;
