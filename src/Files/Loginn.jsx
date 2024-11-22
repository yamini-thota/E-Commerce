import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Loginn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validation patterns
  const ExpEmail = /^[a-z0-9.%$*_]+@[a-z]+\.[a-z]{2,}$/;
  const ExpPassword = /^[A-Za-z0-9@_-]{7,29}$/;

  // Form submission and validation
  const createAccount = () => {
    setEmailError(
      ExpEmail.test(email) ? '' : 'Please enter a valid email address.'
    );
    setPasswordError(
      ExpPassword.test(password) ? '' : 'Password should be 8-20 characters long.'
    );
  };
  if (ExpEmail.test(email) && ExpPassword.test(password)) {
    navigate('/Shop'); // Navigate to the Shop page
  }
  

  return (
    <>
 
    <div
      className="d-flex align-items-center vh-70"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div
        className="container p-3 text-start"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        <h2 className="text-center text-primary mb-4">Login Form</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="User Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="text-danger">{emailError}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="User Password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-danger">{passwordError}</div>
        </div>

        <button className="btn btn-primary w-100" onClick={createAccount}>
          Login
        </button>

        <div className="text-center mt-3">
          <Link to="/SignUp" className="text-decoration-none">
            Don't have an account? Sign Up here
          </Link>
          <br />
          
          <Link to="/" className="text-decoration-none">Home</Link>
          
        </div>
      </div>
    </div>
   
    </>
  );
};
