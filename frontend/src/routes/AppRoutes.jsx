import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Pages (will be created in Sprint 2)
// import Login from '../pages/Login/Login';
// import Register from '../pages/Register/Register';
// import Dashboard from '../pages/Dashboard/Dashboard';
// import Projects from '../pages/Projects/ProjectList';
// import ProjectDetail from '../pages/Projects/ProjectDetail';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}
        </Route>

        {/* 404 */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
