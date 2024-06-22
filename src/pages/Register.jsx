import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


function Login() {

  const location = useNavigate()

  const [newUser, setNewUser] = useState({
    username:'',
    password:''
  })

  const [alertText, setAlertText] = useState('');
  const [alertColor, setAlertColor] = useState('');

  const handleChange = (e)=>{
    setNewUser({...newUser, [e.target.name] : e.target.value})
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('User', JSON.stringify(newUser))
    location('/login')
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Register Page</h1>
        <div className={`alert alert-${alertColor}`}>{alertText}</div>
        <div className="col-6">
          <form onSubmit={loginSubmit}>
            <div className="mb-3">
              <label className="form-label">Your name</label>
              <input type="text" className="form-control" onChange={handleChange} name='username' />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" onChange={handleChange} name='password'/>
            </div>
            <button type="submit" className="btn btn-success me-5">Register</button>
            <NavLink type="submit" className="btn btn-danger" to='/login'>Cancel</NavLink>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
