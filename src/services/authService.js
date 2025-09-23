// src/services/authService.js

const API_URL = 'http://localhost:5000/api/admin';

export const loginAdmin = async ({ username, password }) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Include backend message if exists
      const errorMessage = data.message || 'Invalid username or password';
      throw new Error(errorMessage);
    }

    return data; // Expected: { token, user }
  } catch (err) {
    // Log and rethrow for UI to handle
    console.error('Login Error:', err.message);
    throw err;
  }
};
