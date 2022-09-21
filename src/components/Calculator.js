import React, { useState } from 'react';
import Key from './Key';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, operation, next } = state;
  return (
    <div className="container">
      <h2 style={{ fontSize: '32px' }}>Let&apos;s do some math!</h2>
      <div className="calculator">
        <div className="display">
          <p>{total || ''}</p>
          <p>{operation || ''}</p>
          <p>{next || ''}</p>
        </div>
        <div className="keys">
          <Key classes="key" name="AC" state={state} setState={setState} />
          <Key classes="key" name="+/-" state={state} setState={setState} />
          <Key classes="key" name="%" state={state} setState={setState} />
          <Key classes="key symbol" name="÷" state={state} setState={setState} />
          <Key classes="key" name="7" state={state} setState={setState} />
          <Key classes="key" name="8" state={state} setState={setState} />
          <Key classes="key" name="9" state={state} setState={setState} />
          <Key classes="key symbol" name="&times;" state={state} setState={setState} />
          <Key classes="key" name="4" state={state} setState={setState} />
          <Key classes="key" name="5" state={state} setState={setState} />
          <Key classes="key" name="6" state={state} setState={setState} />
          <Key classes="key symbol" name="-" state={state} setState={setState} />
          <Key classes="key" name="1" state={state} setState={setState} />
          <Key classes="key" name="2" state={state} setState={setState} />
          <Key classes="key" name="3" state={state} setState={setState} />
          <Key classes="key symbol" name="+" state={state} setState={setState} />
          <Key classes="key zero" name="0" state={state} setState={setState} />
          <Key classes="key" name="." state={state} setState={setState} />
          <Key classes="key symbol" name="=" state={state} setState={setState} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
