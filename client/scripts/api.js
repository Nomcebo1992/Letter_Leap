const apiBaseUrl = 'http://172.17.0.4:8083/api';

const createUser = async (username) => {
  try {
    const response = await fetch(`${apiBaseUrl}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    const userId = await response.json();
    return userId;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
};

const getUserProgress = async (userId) => {
  try {
    const response = await fetch(`${apiBaseUrl}/users/${userId}/progress`);
    const progress = await response.json();
    return progress;
  } catch (error) {
    console.error('Error fetching progress:', error);
    return null;
  }
};
