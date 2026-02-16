import api from './api';

const API_URL = '/tasks';

// Get all tasks
const getTasks = async (params = {}) => {
  const response = await api.get(API_URL, { params });
  return response.data;
};

// Get single task
const getTask = async (id) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response.data.data;
};

// Create task
const createTask = async (taskData) => {
  const response = await api.post(API_URL, taskData);
  return response.data.data;
};

// Update task
const updateTask = async (id, data) => {
  const response = await api.put(`${API_URL}/${id}`, data);
  return response.data.data;
};

// Delete task
const deleteTask = async (id) => {
  const response = await api.delete(`${API_URL}/${id}`);
  return response.data;
};

const taskService = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};

export default taskService;
