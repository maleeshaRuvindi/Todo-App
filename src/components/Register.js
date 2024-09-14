import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const { register } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };

  // Password validation function
  const isValidPassword = (password) => {
    // Example: minimum 8 characters, at least one uppercase letter, one lowercase letter, one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (!email || !password || !name) {
      setError('Please fill all fields.');
      return;
    }

    // Check if the email is valid
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Check if the password is valid
    if (!isValidPassword(password)) {
      setError('Please enter a strong password');
      return;
    }

    // If all checks pass, register the user
    register(email, password, name);
    setError(null); // Clear any previous errors
    
    navigate('/login');
    navigate('/login', { state: { successMessage: 'Registration successful' } });
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to the login page when clicked
  };

  return (
    <div className='Register'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className='TodoForm'>
        <input
          type="text"
          placeholder="Name"
          className="todo-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="todo-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="todo-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='todo-btn'>Register</button>
        {error && <p className='error'>{error}</p>}
      </form>
      {/* Login Button */}
      <p>Already have an account?</p>
      <button onClick={handleLoginRedirect} className='todo-btn'>Login</button>
    </div>
  );
};

export default Register;

