import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted input:', input);
  };

  return (
    <div>
      <h1>Letter Leap</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      <div id="game-board"></div>
    </div>
  );
}

export default App;
