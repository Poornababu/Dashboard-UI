import React from 'react';
import './App.css';
import LeftSide from './components/LeftSide';
import MiddleSide from './components/Middle';
import RightSide from './components/RightSide';

function App() {
  return (
    <main className='ui-dashboard'>
      <LeftSide />
      <MiddleSide />
      <RightSide />
    </main>
  );
}

export default App;
