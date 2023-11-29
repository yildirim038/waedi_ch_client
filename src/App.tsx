import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import{handleTokenCheck} from './untils/untils'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Interviews from './pages/Interviews';
import Galleries from './pages/Galleries';
import Events from './pages/Events';
import { logout } from './services/authService';

const App: React.FC = () => {
  const [authInfo, setAuthInfo] = useState({
    isAuthenticated: false,
    role: '',
  });

  useEffect(() => {
   
    handleTokenCheck(setAuthInfo);
  }, []); 

  const handleLogout = async () => {
    await logout();
    setAuthInfo({
      isAuthenticated: false,
      role: '',
    });
  };
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home  isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/events" element={<Events isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
  );
};

export default App;
