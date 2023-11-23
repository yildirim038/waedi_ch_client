import React,{useState,useEffect} from 'react';
import { checkToken, logout } from '../services/authService';
import Header from '../components/Header';
import {useTranslation} from 'react-i18next'

const Home: React.FC = () => {
  const [authInfo, setAuthInfo] = useState({
    isAuthenticated: false,
    role: '',
  });
 const {t} = useTranslation();
  useEffect(() => {
    const handleTokenCheck = async () => {
      try {
        const authResult = await checkToken();
        setAuthInfo(authResult);
        
      } catch (error) {
        setAuthInfo({
          isAuthenticated: false,
          role: '',
        });
      }
    };

    handleTokenCheck();
  }, []);
 
  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('token');
    setAuthInfo({
      isAuthenticated: false,
      role: '',
    });
  };

console.log(authInfo)
  return (
    
    <div>
      <Header isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout} />
      <h1>{t('welcome')}</h1>
    </div>
  );
};

export default Home;
