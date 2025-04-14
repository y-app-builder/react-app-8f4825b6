import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Click Counter</h1>
      <div style={{ 
        fontSize: '48px', 
        margin: '20px 0',
        fontWeight: 'bold'
      }}>
        {count}
      </div>
      <div>
        <button 
          onClick={handleDecrement}
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            fontSize: '16px'
          }}
        >
          Decrement
        </button>
        <button 
          onClick={handleIncrement}
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            fontSize: '16px'
          }}
        >
          Increment
        </button>
      </div>
      <button 
        onClick={handleReset}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px'
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;