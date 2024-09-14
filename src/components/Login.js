import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) {
      setError('Invalid email or password.');
    } else {
      setError(null);
      alert('Login successful');
      navigate('/todo'); // Redirect to the dashboard after successful login
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirect to the register page when clicked
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {/* Register Button */}
      <p>Don't have an account?</p>
      <button onClick={handleRegisterRedirect}>Register</button>
    </div>
  );
};

export default Login;
