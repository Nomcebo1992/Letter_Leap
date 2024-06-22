const apiUrl = 'http://localhost:5000';

const createUserForm = document.getElementById('create-user-form');
const gameContainer = document.getElementById('game-container');

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
  } catch (error) {
    console.error(error);
  }
}
