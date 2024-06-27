document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('user-form');
  const usernameInput = document.getElementById('username');
  const submitButton = document.getElementById('submit-user');
  const gameContainer = document.getElementById('game-container');

  submitButton.addEventListener('click', async () => {
    const username = usernameInput.value.trim();
    if (username) {
      const userId = await createUser(username);
      if (userId) {
        loadGameContainer(userId);
      } else {
        console.error('Failed to create user');
      }
    } else {
      alert('Please enter a username');
    }
  });

  const loadGameContainer = async (userId) => {
    const progress = await getUserProgress(userId);
    gameContainer.innerHTML = `
      <h2>Welcome, ${userId}</h2>
      <pre>${JSON.stringify(progress, null, 2)}</pre>
    `;
  };
});
