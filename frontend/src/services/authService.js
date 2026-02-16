import api from './api';

const API_URL = '/auth';

// Register user
const register = async (userData) => {
  const response = await api.post(`${API_URL}/register`, userData);

  if (response.data.data) {
    localStorage.setItem('user', JSON.stringify(response.data.data.user));
    localStorage.setItem('token', response.data.data.token);
  }

  return response.data.data;
};

// Login user
const login = async (credentials) => {
  const response = await api.post(`${API_URL}/login`, credentials);

  if (response.data.data) {
    localStorage.setItem('user', JSON.stringify(response.data.data.user));
    localStorage.setItem('token', response.data.data.token);
  }

  return response.data.data;
};

// Get current user
const getMe = async () => {
  const response = await api.get(`${API_URL}/me`);
  return response.data.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

const authService = {
  register,
  login,
  getMe,
  logout
};

export default authService;
