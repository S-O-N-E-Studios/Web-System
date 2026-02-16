import { useSelector, useDispatch } from 'react-redux';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  reset,
  setFilters,
  clearFilters
} from '../store/slices/taskSlice';

const useTasks = () => {
  const dispatch = useDispatch();
  const { tasks, currentTask, isLoading, isError, isSuccess, message, filters } = useSelector(
    (state) => state.tasks
  );

  const fetchTasks = (params) => {
    dispatch(getTasks(params));
  };

  const addTask = (taskData) => {
    dispatch(createTask(taskData));
  };

  const editTask = (id, data) => {
    dispatch(updateTask({ id, data }));
  };

  const removeTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleSetFilters = (newFilters) => {
    dispatch(setFilters(newFilters));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return {
    tasks,
    currentTask,
    isLoading,
    isError,
    isSuccess,
    message,
    filters,
    fetchTasks,
    addTask,
    editTask,
    removeTask,
    setFilters: handleSetFilters,
    clearFilters: handleClearFilters,
    reset: handleReset
  };
};

export default useTasks;
