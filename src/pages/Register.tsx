import React, { useState, useEffect } from 'react';
import { register, userData } from '../services/authService';
import { useNavigate } from 'react-router-dom'; 
import './Form.css';

const Register: React.FC = () => {
  const [values, setValue] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    waediEmail:'',
    role:'user'
  });

  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [isEmailRequested, setIsEmailRequested] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await userData();
        setAllUsers(users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRegister = () => {
    const existingUser = allUsers.find(user => user.waediEmail === values.waediEmail);
    if (existingUser) {
      alert('Email is used. Please log in or change your email address.');
      return;
    }

    register(values);
    setError(null);
    navigate('/login');
  };

  const handleCheckboxChange = () => {
    setIsEmailRequested(!isEmailRequested);
  };
   const handleHomepage = () => {
    navigate('/login');
   }

  return (
    <div className='form-main-container'>
      <div className='login-register-container'>
        <h2>Register</h2>
        <div className='form-input-element'>
          <label>Vorname:</label>
          <input type="text" value={values.firstname} onChange={e => setValue({...values, firstname: e.target.value})} />
        </div>
        <div className='form-input-element'>
          <label>Nachname:</label>
          <input type="text" value={values.lastname} onChange={e => setValue({...values, lastname: e.target.value})} />
        </div>
        <div className='form-input-element'>
          <label>Email:</label>
          <input type="email" value={values.email} onChange={e => setValue({...values, email: e.target.value})} />
        </div>
        <div className='form-input-element'>
          <label>Password:</label>
          <input type="password" value={values.password} onChange={e => setValue({...values, password: e.target.value})} />
        </div>
        <div className='form-input-element form-flex-input-element'>       
          <input className='me-3' id="form-checkbox" type="checkbox" onChange={handleCheckboxChange} />
          <label >Ich möchte ein waedi.ch-E-Mail-Konto</label> 
        </div>
        {isEmailRequested && (
          <div className='form-input-element form-flex-input-element'>
            <input type="text" value={values.waediEmail} onChange={e => setValue({...values, waediEmail: e.target.value})}/>
            <label>@waedi.ch</label>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='row'>
          <button className='form-button col-4' onClick={handleRegister}>Register</button>
          <button className='form-button form-close-button offset-4 col-4' onClick={handleHomepage}>Home Page</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
