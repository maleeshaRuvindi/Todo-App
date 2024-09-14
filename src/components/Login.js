import React, { useEffect, useState } from 'react'; 
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';

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
      setError('Invalid email or password.');//handling invalid emails and passwords
    } else {
      setError(null);

      navigate('/todo', { state: { successMessage: 'Login successful' } });//successful login
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); 
    
  };
  const location = useLocation();
  const [successMessage, setSuccessMessage] = useState(location.state?.successMessage || null);

  useEffect(() => {
    if (successMessage) {
      // Clear the success message after 3 seconds
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [successMessage]);

  return (
    <div className='Login'>
        {successMessage && <div className='success-message'>{successMessage}</div>}
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='TodoForm'>
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
        <button type="submit" className='todo-btn'>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      {/* Register Button */}
      <p>Don't have an account?</p>
      <button onClick={handleRegisterRedirect} className='todo-btn'>Register</button>
    </div>
  );
};

export default Login;
