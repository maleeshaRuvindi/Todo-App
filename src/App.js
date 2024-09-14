
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import React Router components
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider to manage authentication state
import AppRoutes from './routes/Routes'; // Import AppRoutes component

const App = () => (
  <AuthProvider>
    <Router>
      <AppRoutes />
    </Router>
  </AuthProvider>
);

export default App;