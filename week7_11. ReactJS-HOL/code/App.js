// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const sayHello = () => {
    setMessage('Hello! Welcome to React Events!');
  };

  const sayWelcome = (msg) => {
    setMessage(msg);
  };

  const handleClick = (e) => {
    console.log(e);
    setMessage('I was clicked!');
  };

  const handleConversion = () => {
    const rate = 0.011; // 1 INR = 0.011 EUR
    setEuros((rupees * rate).toFixed(2));
  };

  return (
    <div className="App">
      <h1>React Event Examples</h1>
      
      <div className="counter-section">
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment (+1 and Say Hello)</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      
      <div className="message-section">
        <h3>{message}</h3>
        <button onClick={() => sayWelcome('Welcome to React!')}>
          Say Welcome
        </button>
        <button onClick={handleClick}>
          Click Me (Synthetic Event)
        </button>
      </div>
      
      <div className="converter-section">
        <h2>Currency Converter</h2>
        <div>
          <label>
            Indian Rupees:
            <input 
              type="number" 
              value={rupees} 
              onChange={(e) => setRupees(e.target.value)}
            />
          </label>
          <button onClick={handleConversion}>Convert to Euros</button>
        </div>
        {euros && <p>₹{rupees} = €{euros}</p>}
      </div>
    </div>
  );
}

export default App;