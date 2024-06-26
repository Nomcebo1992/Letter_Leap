import React, { useState } from 'react';
import { createUser } from '../services/api';

const UserForm = ({ onUserCreated }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = await createUser(username);
    onUserCreated(userId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter username" 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
