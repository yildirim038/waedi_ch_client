import React, { useState } from 'react';
import { login } from '../../services/authService';
import { Link } from 'react-router-dom'; 
import './Login.css'
interface loginProps {
  handleSomeAction: () => void
  closeModal:() => void
}

const Login: React.FC <loginProps> = ({closeModal , handleSomeAction}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      localStorage.setItem('token', JSON.stringify(token))
      setError(null);
      handleSomeAction()
      closeModal()
      window.location.reload()
    } catch (error) {
      setError(error as Error);
    }
  };

  return (
  
    <div className='login-main-container'>
      <div className='login-backround'></div>
      <div className='login-container'>
        <button onClick={closeModal} className='login-close'>X</button>
        <h2>Login</h2>
        <div className='login-input-element'>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='login-input-element'>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
        <button className='login-input-element login-button' onClick={handleLogin}>Login</button>
        <div className='login-input-element'>
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
