import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import taskService from '../../services/taskService';

const initialState = {
  tasks: [],
  currentTask: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  filters: {
    status: '',
    priority: '',
    assignee: ''
  }
};

// Get all tasks
export const getTasks = createAsyncThunk('tasks/getAll', async (params, thunkAPI) => {
  try {
    return await taskService.getTasks(params);
  } catch (error) {
    const message = error.response?.data?.error?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Create task
export const createTask = createAsyncThunk('tasks/create', async (taskData, thunkAPI) => {
  try {
    return await taskService.createTask(taskData);
  } catch (error) {
    const message = error.response?.data?.error?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Update task
export const updateTask = createAsyncThunk('tasks/update', async ({ id, data }, thunkAPI) => {
  try {
    return await taskService.updateTask(id, data);
  } catch (error) {
    const message = error.response?.data?.error?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete task
export const deleteTask = createAsyncThunk('tasks/delete', async (id, thunkAPI) => {
  try {
    await taskService.deleteTask(id);
    return id;
  } catch (error) {
    const message = error.response?.data?.error?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = { status: '', priority: '', assignee: '' };
    }
  },
  extraReducers: (builder) => {
    builder
      // Get all tasks
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tasks = action.payload.data;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Create task
      .addCase(createTask.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.tasks.push(action.payload);
      })
      // Update task
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isSuccess = true;
        const index = state.tasks.findIndex((t) => t._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      // Delete task
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.tasks = state.tasks.filter((t) => t._id !== action.payload);
      });
  }
});

export const { reset, setFilters, clearFilters } = taskSlice.actions;
export default taskSlice.reducer;
