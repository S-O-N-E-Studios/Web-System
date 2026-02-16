import api from './api';

const API_URL = '/projects';

// Get all projects
const getProjects = async (params = {}) => {
  const response = await api.get(API_URL, { params });
  return response.data;
};

// Get single project
const getProject = async (id) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response.data.data;
};

// Create project
const createProject = async (projectData) => {
  const response = await api.post(API_URL, projectData);
  return response.data.data;
};

// Update project
const updateProject = async (id, data) => {
  const response = await api.put(`${API_URL}/${id}`, data);
  return response.data.data;
};

// Delete project
const deleteProject = async (id) => {
  const response = await api.delete(`${API_URL}/${id}`);
  return response.data;
};

const projectService = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
};

export default projectService;
