import React, { useState } from 'react';
import '../styles/index.css'; 

const GameContainer = () => {
  const [progress, setProgress] = useState({
    alphabet: {
      A: false, B: false, C: false, D: false, E: false,
      F: false, G: false, H: false, I: false, J: false,
      K: false, L: false, M: false, N: false, O: false,
      P: false, Q: false, R: false, S: false, T: false,
      U: false, V: false, W: false, X: false, Y: false, Z: false
    }
  });

  const handleLetterClick = (letter) => {
    
    const updatedProgress = { ...progress };
    updatedProgress.alphabet[letter] = true;
    setProgress(updatedProgress);
    
    updateProgressOnServer(letter);
  };

  const updateProgressOnServer = async (letter) => {
    const apiUrl = 'http://localhost:5000'; 
    const userId = '123'; 
{
      const response = await fetch(`${apiUrl}/users/${userId}/progress`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ letter }),
      });
      const updatedProgress = await response.json();
      console.log('Progress updated on server:', updatedProgress);
    } catch (error) {
      console.error('Error updating progress on server:', error);
    }
  };

  const renderAlphabet = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
      <div className="alphabet-container">
        <h2>Alphabet Game</h2>
        <div className="alphabet-grid">
          {alphabet.map(letter => (
            <div
              key={letter}
              className={`alphabet-letter ${progress.alphabet[letter] ? 'clicked' : ''}`}
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="game-container">
      {renderAlphabet()}
    </div>
  );
};

export default GameContainer;
