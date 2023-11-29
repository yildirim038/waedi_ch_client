import React,{useState,useEffect} from 'react';
import Header from '../components/Header';
import {useTranslation} from 'react-i18next'
import banner_foto from '../img/img_home.png'
import { logout } from "../services/authService";
import './Home.css'
import {handleTokenCheck } from '../untils/untils'
const Home: React.FC = () => {
  const [authInfo, setAuthInfo] = useState({
    isAuthenticated: false,
    role: '',
  });
 const {t} = useTranslation();
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
    <div >
      <Header isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout} />
      <div className='main-container'>
        <img className='main-img' src={banner_foto} alt="wädeswil_foto" />
        <div className='main-title'>
         <h1> {t('title_on')}</h1>
         <h2> {t('title_under')}</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
