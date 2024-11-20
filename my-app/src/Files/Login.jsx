import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export const Login=()=> {
  var[name,settext]=useState('')
  var[email,seatemail]=useState('')
  var[password,setPassword]=useState('')
  var[confirmPassword,setconfirmPassword]=useState('')

  const [nameError, setnameError] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState('');
 

  // Validation patterns
  const Expname = /^[A-Z][a-z]{2,9}$/;
  const Expemail = /^[a-z0-9.%$*_]+@[a-z]+\.[a-z]{2,}$/;
  const Exppassword = /^[A-Za-z0-9@_-]{7,29}$/;
  

   // Form submission and validation
   const createAccount = () => {
    setnameError(Expname.test(name) ? '' : 'Name should start with a capital letter and be 3-10 characters long.');
    setemailError(Expemail.test(email) ? '' : 'Please enter a valid email address.');
    setpasswordError(Exppassword.test(password) ? '' : 'Password should be 8-20 characters long.');
    setconfirmPasswordError(password === confirmPassword ? '' : 'Passwords do not match.');
    // setContactError(ExpContact.test(contact) ? '' : 'Enter a valid 10-digit contact number.');
  };

  return (
    <>
        <div className='Loginn container bg-secondary mt-5 me-5 ms-5 w-50'>
        <div className="row mb-5 ms-5 me-5 mt-5 ">
            <div className="col-6 text-center">Login From</div>
           
            <label className='text-control' for='uesrname'>User Name:</label>
            <input type="text" placeholder='User Name'  className=' col-6 mb-2'onChange={(e)=>settext(e.target.value)} />
            <div className='text-danger'>{nameError}</div>
            <label className='text-control' for='uesrname'>Email:</label>
            <input type="email" placeholder='User email'  className=' col-6 mb-2'onChange={(e)=>seatemail(e.target.value)}/>
            
            <div className='text-danger'>{emailError}</div>
            <label className='text-control' for='uesrname'>Password:</label>
            <input type="password" placeholder='User password'  className=' col-6 mb-2'onChange={(e)=>setPassword(e.target.value)}/>
            <div className='text-danger'>{passwordError}</div>
            <label className='text-control' for='uesrname'>Password:</label>
            <input type="password" placeholder='User password'  className=' col-6 mb-2'onChange={(e)=>setconfirmPassword(e.target.value)}/>
            <div className='text-danger'>{confirmPasswordError}</div>
            <div className='text-control'>
            <button className='btn btn-primary col-6 mt-2' onClick={createAccount}>Login</button>
            <h6 className='home'><Link to='/'>Home</Link></h6>
            </div>
         
        </div>
    </div>
   
        </>

  )
}