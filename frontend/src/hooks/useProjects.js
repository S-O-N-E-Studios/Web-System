import { useSelector, useDispatch } from 'react-redux';
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  reset,
  clearCurrentProject
} from '../store/slices/projectSlice';

const useProjects = () => {
  const dispatch = useDispatch();
  const { projects, currentProject, isLoading, isError, isSuccess, message, pagination } =
    useSelector((state) => state.projects);

  const fetchProjects = (params) => {
    dispatch(getProjects(params));
  };

  const fetchProject = (id) => {
    dispatch(getProject(id));
  };

  const addProject = (projectData) => {
    dispatch(createProject(projectData));
  };

  const editProject = (id, data) => {
    dispatch(updateProject({ id, data }));
  };

  const removeProject = (id) => {
    dispatch(deleteProject(id));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleClearCurrent = () => {
    dispatch(clearCurrentProject());
  };

  return {
    projects,
    currentProject,
    isLoading,
    isError,
    isSuccess,
    message,
    pagination,
    fetchProjects,
    fetchProject,
    addProject,
    editProject,
    removeProject,
    reset: handleReset,
    clearCurrentProject: handleClearCurrent
  };
};

export default useProjects;
