import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const calculatorData = [
  {
    id: 0,
    text: 'clear',
    buttonStyles: 'actionButton'
  },
  {
    id: 1,
    text: '÷',
    buttonStyles: 'symbolButton'
  },
  {
    id: 2,
    text: '7',
    buttonStyles: 'numberButton'
  },
  {
    id: 3,
    text: '8',
    buttonStyles: 'numberButton'
  },
  {
    id: 4,
    text: '9',
    buttonStyles: 'numberButton'
  },
  {
    id: 5,
    text: '×',
    buttonStyles: 'symbolButton'
  },
  {
    id: 6,
    text: '4',
    buttonStyles: 'numberButton'
  },
  {
    id: 7,
    text: '5',
    buttonStyles: 'numberButton'
  },
  {
    id: 8,
    text: '6',
    buttonStyles: 'numberButton'
  },
  {
    id: 9,
    text: '–',
    buttonStyles: 'symbolButton'
  },
  {
    id: 10,
    text: '3',
    buttonStyles: 'numberButton'
  },
  {
    id: 11,
    text: '2',
    buttonStyles: 'numberButton'
  },
  {
    id: 12,
    text: '1',
    buttonStyles: 'numberButton'
  },
  {
    id: 13,
    text: '+',
    buttonStyles: 'symbolButton'
  },
  {
    id: 14,
    text: '0',
    buttonStyles: 'actionButton'
  },
  {
    id: 15,
    text: '=',
    buttonStyles: 'symbolButton'
  },
]

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <div className='buttonContainer'>
        <CalculatorDisplay />
        {
          calculatorData.map(data => {
            return data.buttonStyles !== 'actionButton' ? 
              (<NumberButton key={data.id} text={data.text} buttonStyles={data.buttonStyles} />) :
              data.text !== '0' ? (<ActionButton key={data.id} text={data.text} buttonStyles={data.buttonStyles} />) : 
                (<ActionButton key={data.id} text={data.text} buttonStyles={data.buttonStyles} bold={true} />)
              ;
          })
        }
      </div>
    </div>
  );
};

export default App;
