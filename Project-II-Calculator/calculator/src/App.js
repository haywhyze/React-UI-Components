import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

const calculatorData = [
  {
    text: 'clear',
    buttonStyles: 'actionButton'
  },
  {
    text: '÷',
    buttonStyles: 'symbolButton'
  },
  {
    text: '7',
    buttonStyles: 'numberButton'
  },
  {
    text: '8',
    buttonStyles: 'numberButton'
  },
  {
    text: '9',
    buttonStyles: 'numberButton'
  },
  {
    text: '×',
    buttonStyles: 'symbolButton'
  },
  {
    text: '4',
    buttonStyles: 'numberButton'
  },
  {
    text: '5',
    buttonStyles: 'numberButton'
  },
  {
    text: '6',
    buttonStyles: 'numberButton'
  },
  {
    text: '–',
    buttonStyles: 'symbolButton'
  },
  {
    text: '3',
    buttonStyles: 'numberButton'
  },
  {
    text: '2',
    buttonStyles: 'numberButton'
  },
  {
    text: '1',
    buttonStyles: 'numberButton'
  },
  {
    text: '+',
    buttonStyles: 'symbolButton'
  },
  {
    text: '0',
    buttonStyles: 'actionButton'
  },
  {
    text: '=',
    buttonStyles: 'symbolButton'
  },
]

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      {
        calculatorData.map(data => {
          return (
            <NumberButton text={data.text} buttonStyles={data.buttonStyles}/>
          );
        })
      }
    </div>
  );
};

export default App;
