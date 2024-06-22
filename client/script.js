const apiUrl = 'http://localhost:5000';

const createUserForm = document.getElementById('create-user-form');
const gameContainer = document.getElementById('game-container');
const progressContainer = document.getElementById('progress-container');

createUserForm.addEventListener('submit', createUser);

async function createUser(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    const userId = await response.json();
    console.log(`User created with ID: ${userId}`);
    renderGameBoard(userId);
  } catch (error) {
    console.error(error);
  }
}

async function renderGameBoard(userId) {
  try {
    const response = await fetch(`${apiUrl}/users/${userId}/progress`);
    const progress = await response.json();
    const gameBoardHtml = renderGameBoardHtml(progress);
    gameContainer.innerHTML = gameBoardHtml;
  } catch (error) {
    console.error(error);
  }
}

function renderGameBoardHtml(progress) {
  const html = '';
  html += `<h2>Game Board:</h2>`;
  html += `<p>Alphabet:</p>`;
  html += `<ul>`;
  Object.keys(progress.alphabet).forEach(letter => {
    html += `<li>${letter}: ${progress.alphabet[letter] ? 'true' : 'false'}</li>`;
  });
  html += `</ul>`;
  html += `<p>Games:</p>`;
  html += `<ul>`;
  Object.keys(progress.games).forEach(game => {
    html += `<li>${game}: ${progress.games[game]}</li>`;
  });
  html += `</ul>`;
  return html;
}

