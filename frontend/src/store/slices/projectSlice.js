import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import projectService from '../../services/projectService';

const initialState = {
  projects: [],
  currentProject: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0
  }
};

// Get all projects
export const getProjects = createAsyncThunk('projects/getAll', async (params, thunkAPI) => {
  try {
    return await projectService.getProjects(params);
  } catch (error) {
    const message = error.response?.data?.error?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Get single project
export const getProject = createAsyncThunk('projects/getOne', async (id, thunkAPI) => {
  try {
    return await projectService.getProject(id);
  } catch (error) {
    const message = error.response?.data?.error?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Create project
export const createProject = createAsyncThunk('projects/create', async (projectData, thunkAPI) => {
  try {
    return await projectService.createProject(projectData);
  } catch (error) {
    const message = error.response?.data?.error?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Update project
export const updateProject = createAsyncThunk(
  'projects/update',
  async ({ id, data }, thunkAPI) => {
    try {
      return await projectService.updateProject(id, data);
    } catch (error) {
      const message = error.response?.data?.error?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete project
export const deleteProject = createAsyncThunk('projects/delete', async (id, thunkAPI) => {
  try {
    await projectService.deleteProject(id);
    return id;
  } catch (error) {
    const message = error.response?.data?.error?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    clearCurrentProject: (state) => {
      state.currentProject = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get all projects
      .addCase(getProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Get single project
      .addCase(getProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentProject = action.payload;
      })
      .addCase(getProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Create project
      .addCase(createProject.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.projects.push(action.payload);
      })
      // Update project
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isSuccess = true;
        const index = state.projects.findIndex((p) => p._id === action.payload._id);
        if (index !== -1) {
          state.projects[index] = action.payload;
        }
        if (state.currentProject?._id === action.payload._id) {
          state.currentProject = action.payload;
        }
      })
      // Delete project
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.projects = state.projects.filter((p) => p._id !== action.payload);
      });
  }
});

export const { reset, clearCurrentProject } = projectSlice.actions;
export default projectSlice.reducer;
