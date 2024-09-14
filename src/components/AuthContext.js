import React, { createContext, useState, useContext } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Custom hook for easy access
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap the entire app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login Function
  const login = (email, password) => {
    // Check if user exists (for simplicity, we’ll just check email and password here)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      return true;
    } else {
      return false;
    }
  };

  // Register Function
  const register = (email, password, name) => {
    const newUser = { email, password, name };
    localStorage.setItem('user', JSON.stringify(newUser)); // store user in local storage
    setUser(newUser);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
