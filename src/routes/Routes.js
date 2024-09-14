import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom'; // Import React Router components
import Login from '../components/Login'; // Import Login component
import Register from '../components/Register'; // Import Register component
import { TodoWrapper } from '../components/TodoWrapper'; // Import Dashboard component

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} /> {/* Route for login page */}
    <Route path="/register" element={<Register />} /> {/* Route for registration page */}
    <Route path="/todo" element={<TodoWrapper />} /> {/* Route for dashboard (after login) */}
    <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root to /login */}
  </Routes>
);

export default AppRoutes;