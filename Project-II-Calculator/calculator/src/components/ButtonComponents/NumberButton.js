import React from 'react';
import './Button.css';

export default () => (
  <table className='number'>
    <tbody>
      <tr>
        <td className='clear' colSpan='3'>clear</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>        
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>  
      </tr>
      <tr>
        <td colSpan='3'>0</td>
      </tr>
    </tbody>
  </table>
);
