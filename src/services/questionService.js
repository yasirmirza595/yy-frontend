// src/services/questionService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/questions';

// ✅ Public form: Submit question
export const submitQuestion = async (questionData) => {
  try {
    const res = await axios.post(API_URL, questionData);
    return res.data;
  } catch (error) {
    console.error('Submit question error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to submit question');
  }
};

// ✅ Admin dashboard: Get all questions
export const getAllQuestions = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.questions; // ✅ sirf array return karo
  } catch (error) {
    console.error('Get questions error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to fetch questions');
  }
};
