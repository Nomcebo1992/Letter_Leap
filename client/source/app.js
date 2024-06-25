import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const userInput = input.trim().toUpperCase();

    if (userInput.length === 1 && validLetters.includes(userInput)) {
      setMessage(`You entered a valid letter: ${userInput}`);
    } else {
      setMessage('Please enter a single valid letter (A-Z).');
    }

    setInput('');
  };

  return (
    <div>
      <h1>Letter Leap</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          maxLength="1" 
          pattern="[A-Za-z]"
          title="Enter a single letter (A-Z)"
        />
        <button type="submit">Submit</button>
      </form>
      <div id="game-board">
        {message}
      </div>
    </div>
  );
}

export default App;
