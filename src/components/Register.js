import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const { register } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError('Please fill all fields.');
      return;
    }
    register(email, password, name);
    setError(null); // Clear any previous errors
    alert('Registration successful');
    navigate('/login');
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to the login page when clicked
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {/* Login Button */}
      <p>Already have an account?</p>
      <button onClick={handleLoginRedirect}>Login</button>
    </div>
  );
};

export default Register;
