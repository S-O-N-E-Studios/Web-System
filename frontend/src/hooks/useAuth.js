import { useSelector, useDispatch } from 'react-redux';
import { login, register, logout, reset } from '../store/slices/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const isAuthenticated = !!token;

  const handleLogin = (credentials) => {
    dispatch(login(credentials));
  };

  const handleRegister = (userData) => {
    dispatch(register(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    isError,
    isSuccess,
    message,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    reset: handleReset
  };
};

export default useAuth;
