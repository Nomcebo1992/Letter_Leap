import React, { useState } from 'react';

const UserForm = ({ onUserCreated }) => {
  const [username, setUsername] = useState('');

  const createUser = async (username) => {
    try {
      const response = await fetch('http://localhost:5000/api/users', {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = await createUser(username);
    if (userId) {
      onUserCreated(userId);
    } else {
      console.error('Failed to create user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
