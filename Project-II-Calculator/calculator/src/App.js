import React from 'react';
import DisplayComponent from './components/DisplayComponents/CalculatorDisplay';
import ButtonComponent from './components/ButtonComponents/ButtonComponent';
import './App.css';

const App = () => {
  return (
    <div class='calculator'>
      <DisplayComponent />
      <ButtonComponent />
    </div>
  );
};

export default App;
