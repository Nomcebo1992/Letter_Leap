const API_URL = 'http://localhost:5000/api';

export const createUser = async (username) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  });
  const data = await response.json();
  return data.id;
};

export const getUserProgress = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/progress`);
  const data = await response.json();
  return data;
};

export const updateProgress = async (username, progress) => {
  const response = await fetch(`${API_URL}/update-progress`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, progress }),
  });
  const data = await response.json();
  return data;
};

export const updateLetterProgress = async (username, letter, value) => {
  const response = await fetch(`${API_URL}/users/${username}/progress/letters/${letter}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
  const data = await response.json();
  return data;
};

export const updateGameProgress = async (username, game, value) => {
  const response = await fetch(`${API_URL}/users/${username}/progress/games/${game}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
  const data = await response.json();
  return data;
};
