import React, { useState } from 'react';

const apiUrl = 'http://localhost:5000';

function LetterLeap() {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);

  const createUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
      const userData = await response.json();
      console.log(`User created with ID: ${userData.id}`);
      setUserId(userData.id);
      renderGameBoard(userData.id);
    } catch (error) {
      console.error(error);
      setError('Failed to create user');
    }
  };

  const renderGameBoard = async (userId) => {
    try {
      const response = await fetch(`${apiUrl}/users/${userId}/progress`);
      const progressData = await response.json();
      setProgress(progressData);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch progress');
    }
  };

  const renderGameBoardHtml = (progress) => {
    return (
      <div>
        <h2>Game Board:</h2>
        <p>Alphabet:</p>
        <ul>
          {Object.keys(progress.alphabet).map(letter => (
            <li key={letter}>{letter}: {progress.alphabet[letter] ? 'true' : 'false'}</li>
          ))}
        </ul>
        <p>Games:</p>
        <ul>
          {Object.keys(progress.games).map(game => (
            <li key={game}>{game}: {progress.games[game]}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Letter Leap</h1>
      <form id="create-user-form" onSubmit={createUser}>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Create User</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div id="game-container">
        {progress && renderGameBoardHtml(progress)}
      </div>
    </div>
  );
}

export default LetterLeap;
