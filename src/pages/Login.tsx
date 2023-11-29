import React, { useState } from 'react';
import { login } from '../services/authService';
import { Link, useNavigate } from 'react-router-dom'; 
import './Form.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Error | null>(null);
 
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      localStorage.setItem('token', token.token)
      localStorage.setItem('role', token.role);
      setError(null);
      navigate('/'); 

    } catch (error) {
      setError(error as Error);
    }
  };

  return (
    <div className='form-main-container'>
      <div className='form-container'>
        <h2>Login</h2>
        <div className='form-input-element'>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-input-element'>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
        <button className='form-button' onClick={handleLogin}>Login</button>
        <div className='form-input-element'>
          <p>
            Wenn Sie noch nicht registriert werden.  
           <Link to="/register">Klicken Sie hier.</Link>
          </p>   
       </div>
      </div> 
    </div>
  );
};

export default Login;
