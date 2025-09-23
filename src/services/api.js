// src/services/authService.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // ✅ Backend base URL
  withCredentials: true, // (optional) if you're using cookies
});

// 👇 Login admin user
export const loginAdmin = async (data) => {
  try {
    const response = await API.post('/admin/login', data);
    return response.data; // Expected: { token, user }
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error.response?.data?.message || 'Login failed. Please try again.';
  }
};
