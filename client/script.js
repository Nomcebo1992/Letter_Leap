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
    getUserProgress(userId);
  } catch (error) {
    console.error(error);
  }
}

async function getUserProgress(userId) {
  try {
    const response = await fetch(`${apiUrl}/users/${userId}/progress`);
    const progress = await response.json();
    displayProgress(progress);
  } catch (error) {
    console.error(error);
  }
}

function displayProgress(progress) {
  const progressHtml = `
    <h2>Progress:</h2>
    <p>Alphabet:</p>
    <ul>
      ${Object.keys(progress.alphabet).map(letter => `
        <li>${letter}: ${progress.alphabet[letter] ? 'true' : 'false'}</li>
      `).join('')}
    </ul>
    <p>Games:</p>
    <ul>
      ${Object.keys(progress.games).map(game => `
        <li>${game}: ${progress.games[game]}</li>
      `).join('')}
    </ul>
  `;
  progressContainer.innerHTML = progressHtml;
}

