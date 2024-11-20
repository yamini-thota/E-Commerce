import React, { useState } from 'react';
import './Signupp.css';
import { Link } from 'react-router-dom';

export const Signupp = () => {
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
    setNameError(ExpName.test(name) ? '' : 'Name should start with a capital letter and be 3-10 characters long.');
    setEmailError(ExpEmail.test(email) ? '' : 'Please enter a valid email address.');
    setPasswordError(ExpPassword.test(password) ? '' : 'Password should be 8-20 characters long.');
    setConfirmPasswordError(password === confirmPassword ? '' : 'Passwords do not match.');
    setContactError(ExpContact.test(contact) ? '' : 'Enter a valid 10-digit contact number.');
  };

  return (
    <>
    <div className='signupp container bg-danger-subtle mt-5 ps-4 pe-5 me-5 w-50'>
      <div className='row'>
        <h2 className="col-6 text-center">Sign Up Form</h2>
        
        <label htmlFor='username' className='form-label'>User Name:</label>
        <input type="text" placeholder='User Name' className='col-6 mb-2 form-control'  onChange={(e) => setUserName(e.target.value)} />
        <div className='text-danger'>{nameError}</div>
        
        <label htmlFor='contact' className='form-label'>Contact:</label>
        <input type="text" placeholder='User Contact' className='col-6 mb-2 form-control' onChange={(e) => setContact(e.target.value)} />
        <div className='text-danger'>{contactError}</div>
        
        <label htmlFor='email' className='form-label'>Email:</label>
        <input type="email" placeholder='User Email' className='col-6 mb-2 form-control' onChange={(e) => setEmail(e.target.value)} />
        <div className='text-danger'>{emailError}</div>
        
        <label htmlFor='password' className='form-label'>Password:</label>
        <input type="password" placeholder='User Password' className='col-6 mb-2 form-control'  onChange={(e) => setPassword(e.target.value)} />
        <div className='text-danger'>{passwordError}</div>
        
        <label htmlFor='confirmPassword' className='form-label'>Confirm Password:</label>
        <input type="password" placeholder='Confirm Password' className='col-6 mb-2 form-control'  onChange={(e) => setConfirmPassword(e.target.value)} />
        <div className='text-danger'>{confirmPasswordError}</div>
        
        <button className='btn btn-primary col-6 mt-2' onClick={createAccount}>Sign Up</button>
        
        <h6 className='mt-3'><Link to='/'>Home</Link></h6>
      </div>
      
    </div>
    
        </>
  );
};