import './Calculator.css';
import React from 'react';
import calculate from './logic/calculate';
import Key from './Key';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  keyPress(name) {
    const result = calculate(this.state, name);
    this.setState(result);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container">
        <div className="display">
          <p>{total || ''}</p>
          <p>{operation || ''}</p>
          <p>{next || ''}</p>
        </div>
        <div className="keys">
          <Key classes="key" name="AC" keyPress={this.keyPress} />
          <Key classes="key" name="+/-" keyPress={this.keyPress} />
          <Key classes="key" name="%" keyPress={this.keyPress} />
          <Key classes="key symbol" name="÷" keyPress={this.keyPress} />
          <Key classes="key" name={7} keyPress={this.keyPress} />
          <Key classes="key" name={8} keyPress={this.keyPress} />
          <Key classes="key" name={9} keyPress={this.keyPress} />
          <Key classes="key symbol" name="&times;" keyPress={this.keyPress} />
          <Key classes="key" name={4} keyPress={this.keyPress} />
          <Key classes="key" name={5} keyPress={this.keyPress} />
          <Key classes="key" name={6} keyPress={this.keyPress} />
          <Key classes="key symbol" name="-" keyPress={this.keyPress} />
          <Key classes="key" name={1} keyPress={this.keyPress} />
          <Key classes="key" name={2} keyPress={this.keyPress} />
          <Key classes="key" name={3} keyPress={this.keyPress} />
          <Key classes="key symbol" name="+" keyPress={this.keyPress} />
          <Key classes="key zero" name={0} keyPress={this.keyPress} />
          <Key classes="key" name="." keyPress={this.keyPress} />
          <Key classes="key symbol" name="=" keyPress={this.keyPress} />
        </div>
      </div>
    );
  }
}

export default Calculator;
