import React, { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom'; 

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
    <div>
      <h2>Register</h2>
      <div>
        <label>Vorname:</label>
        <input type="text" value={values.firstname} onChange={e => setValue({...values, firstname: e.target.value})} />
      </div>
      <div>
        <label>Nachname:</label>
        <input type="text" value={values.lastname} onChange={e => setValue({...values, lastname: e.target.value})} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={values.email} onChange={e => setValue({...values, email: e.target.value})} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={values.password} onChange={e => setValue({...values, password: e.target.value})} />
      </div>
      <div>
        <label>Role:</label>
        <input type="text" value={values.role} onChange={e => setValue({...values, role: e.target.value})} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
