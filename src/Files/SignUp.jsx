import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export const SignUpp = () => {
  // Form state variables
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');

  // Error state variables
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [contactError, setContactError] = useState('');

  // Validation patterns
  const ExpName = /^[A-Z][a-z]{2,9}$/;
  const ExpEmail = /^[a-z0-9.%$*_]+@[a-z]+\.[a-z]{2,}$/;
  const ExpPassword = /^[A-Za-z0-9@_-]{7,29}$/;
  const ExpContact = /^[6-9]\d{9}$/;

  // Form submission and validation
  const createAccount = () => {
    setNameError(
      ExpName.test(name)
        ? ''
        : 'Name should start with a capital letter and be 3-10 characters long.'
    );
    setEmailError(
      ExpEmail.test(email)
        ? ''
        : 'Please enter a valid email address.'
    );
    setPasswordError(
      ExpPassword.test(password)
        ? ''
        : 'Password should be 8-20 characters long.'
    );
    setConfirmPasswordError(
      password === confirmPassword
        ? ''
        : 'Passwords do not match.'
    );
    setContactError(
      ExpContact.test(contact)
        ? ''
        : 'Enter a valid 10-digit contact number.'
    );
  };

  return (
    <>
    <Header />
    <div className="d-flex justify-content-center align-items-center m-3 vh-70 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>

        <form>
          <h2 className="text-center text-primary mb-4">Sign Up Form</h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User Name:
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
            />
            <small className="text-danger">{nameError}</small>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            <small className="text-danger">{emailError}</small>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <small className="text-danger">{passwordError}</small>
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <small className="text-danger">{confirmPasswordError}</small>
          </div>

          <button
            type="button"
            className="btn btn-primary w-100 mb-3"
            onClick={createAccount}
          >
            Sign Up
          </button>
        </form>

        <div className="text-center">
          <Link to="/Login" className="text-decoration-none">
            Already have an account? Login
          </Link>
          <br />

          <Link to='/' >Home</Link>

        </div>
        </div>
      </div>
      <Footer/>
      </>
      );
};
