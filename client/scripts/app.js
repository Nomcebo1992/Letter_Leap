document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('user-form');
  const usernameInput = document.getElementById('username');
  const submitButton = document.getElementById('submit-user');
  const gameContainer = document.getElementById('game-container');

  submitButton.addEventListener('click', async () => {
    const username = usernameInput.value.trim();
    if (username) {
      try {
        const userId = await createUser(username);
        if (userId) {
          loadGameContainer(userId);
        } else {
          console.error('Failed to create user');
          alert('Failed to create user. Please try again.');
        }
      } catch (error) {
        console.error('Error creating user:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert('Please enter a username');
    }
  });

  const loadGameContainer = async (userId) => {
    try {
      const progress = await getUserProgress(userId);
      gameContainer.innerHTML = `
        <h2>Welcome, ${username}</h2>
        <pre>${JSON.stringify(progress, null, 2)}</pre>
      `;
    } catch (error) {
      console.error('Error loading user progress:', error);
      alert('Failed to load user progress. Please try again later.');
    }
  };

  const createUser = async (username) => {
    try {
      const response = await fetch('http://172.17.0.4:8083/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      return data.userId; // Assuming API response returns userId
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  };

  const getUserProgress = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}/progress`);
      const progress = await response.json();
      return progress;
    } catch (error) {
      console.error('Error fetching user progress:', error);
      throw new Error('Failed to fetch user progress');
    }
  };
});
