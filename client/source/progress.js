import React, { useState, useEffect } from 'react';
import '../styles/index.css'; 

const Progress = () => {
  const [progress, setProgress] = useState({
    alphabet: {
      A: false, B: false, C: false, D: false, E: false,
      F: false, G: false, H: false, I: false, J: false,
      K: false, L: false, M: false, N: false, O: false,
      P: false, Q: false, R: false, S: false, T: false,
      U: false, V: false, W: false, X: false, Y: false, Z: false
    },
    games: {
      matching: 0,
      letterHunt: 0,
      puzzles: 0
    }
  });

  useEffect(() => 
    fetchProgressFromServer();
  }, []);

  const fetchProgressFromServer = async () => {
    const apiUrl = 'http://localhost:5000';
    const userId = '123'; 
{
      const response = await fetch(`${apiUrl}/users/${userId}/progress`);
      const fetchedProgress = await response.json();
      setProgress(fetchedProgress);
      console.log('Progress fetched from server:', fetchedProgress);
    } catch (error) {
      console.error('Error fetching progress from server:', error);
    }
  };

  const renderAlphabetProgress = () => {
    return (
      <div className="progress-section">
        <h2>Alphabet Progress</h2>
        <div className="progress-list">
          {Object.keys(progress.alphabet).map(letter => (
            <div key={letter} className={`progress-item ${progress.alphabet[letter] ? 'completed' : 'incomplete'}`}>
              {letter}: {progress.alphabet[letter] ? 'Completed' : 'Incomplete'}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderGamesProgress = () => {
    return (
      <div className="progress-section">
        <h2>Games Progress</h2>
        <div className="progress-list">
          <div className="progress-item">Matching Game: {progress.games.matching}</div>
          <div className="progress-item">Letter Hunt Game: {progress.games.letterHunt}</div>
          <div className="progress-item">Puzzles Game: {progress.games.puzzles}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="progress-container">
      <h1>Progress</h1>
      {renderAlphabetProgress()}
      {renderGamesProgress()}
    </div>
  );
};

export default Progress;
