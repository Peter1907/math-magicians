import './Calculator.css';
import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="display">0</div>
        <div className="keys">
          <button type="button" className="key">AC</button>
          <button type="button" className="key">+/-</button>
          <button type="button" className="key">%</button>
          <button type="button" className="key symbol">÷</button>
          <button type="button" className="key">7</button>
          <button type="button" className="key">8</button>
          <button type="button" className="key">9</button>
          <button type="button" className="key symbol">&times;</button>
          <button type="button" className="key">4</button>
          <button type="button" className="key">5</button>
          <button type="button" className="key">6</button>
          <button type="button" className="key symbol">-</button>
          <button type="button" className="key">1</button>
          <button type="button" className="key">2</button>
          <button type="button" className="key">3</button>
          <button type="button" className="key symbol">+</button>
          <button type="button" className="zero key">0</button>
          <button type="button" className="key">.</button>
          <button type="button" className="key symbol">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
