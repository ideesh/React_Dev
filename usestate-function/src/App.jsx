import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [text, setText] = useState('');

  return (
    <div className="app">
      {/* NUMBER */}
      <div className="card">
        <h2>Number</h2>
        <div className="row">
          <button className="btn red" onClick={() => setCount(count - 1)}>
            −
          </button>

          {/* key={count} restarts the pop animation on every change */}
          <div key={count} className="number-box pop">
            {count}
          </div>

          <button className="btn green" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
        <button className="btn gray" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      {/* BOOLEAN */}
      <div className="card">
        <h2>Boolean</h2>
        <div className={`bulb ${isOn ? 'on' : 'off'}`}>💡</div>
        <button className="btn blue" onClick={() => setIsOn(!isOn)}>
          {isOn ? 'Turn OFF' : 'Turn ON'}
        </button>
      </div>

      {/* STRING */}
      <div className="card">
        <h2>String</h2>
        <div className="row">
          <input
            className="text-input"
            placeholder="Type something"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn gray" onClick={() => setText('')}>
            Clear
          </button>
        </div>
        {text && <p className="typed slide-in">You typed: {text}</p>}
        <p>Length: {text.length}</p>
      </div>
    </div>
  );
}