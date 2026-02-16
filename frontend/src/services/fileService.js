import api from './api';

const API_URL = '/files';

// Upload file
const uploadFile = async (file, projectId, taskId) => {
  const formData = new FormData();
  formData.append('file', file);
  if (projectId) formData.append('project', projectId);
  if (taskId) formData.append('task', taskId);

  const response = await api.post(`${API_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data.data;
};

// Get file metadata
const getFile = async (id) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response.data.data;
};

// Download file
const downloadFile = async (id) => {
  const response = await api.get(`${API_URL}/${id}/download`, {
    responseType: 'blob'
  });
  return response.data;
};

// Delete file
const deleteFile = async (id) => {
  const response = await api.delete(`${API_URL}/${id}`);
  return response.data;
};

const fileService = {
  uploadFile,
  getFile,
  downloadFile,
  deleteFile
};

export default fileService;
