import React, { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom'; 
import './Form.css'
const Register: React.FC = () => {
  const [values , setValue] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    role:''
})
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      await register(values);
      setError(null);
      navigate('/login'); 
    } catch (error:any) {
      setError(error);
      alert("Email is used. Please log in or change your email address.")
    }
  };

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
       <div className='form-input-element'>
         <label>Role:</label>
         <input type="text" value={values.role} onChange={e => setValue({...values, role: e.target.value})} />
       </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
       <button className='form-button' onClick={handleRegister}>Register</button>
      </div>
    </div>
    
  );
};

export default Register;
