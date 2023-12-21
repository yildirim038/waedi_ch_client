import React from 'react';
import Header from '../components/Header/Header';
import { useTranslation } from 'react-i18next';
import banner_foto from '../img/img_home.png';
import { useAuth } from '../auth/AuthContext';
import { logout } from '../services/authService';
import './Home.css';
import HomeEventComponent from '../components/Home/HomeEventComponent';
import HomeInterviewComponent from '../components/Home/HomeInterviewComponent';
import SBBApp from '../components/SBBApp';
import WeatherWidget from '../components/WeatherWidget';


const Home: React.FC = () => {
  const { t } = useTranslation();
  const { authInfo, setAuthInfo } = useAuth();
 
  const handleSomeAction = () => {
     setAuthInfo({ isAuthenticated: true, role: 'newRole' });
  };
  const handleLogout = async () => {
    await logout();
    setAuthInfo({
      isAuthenticated: false,
      role: '',
    });
  };

  return (
    <div>
      <Header handleSomeAction={handleSomeAction} isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout} />
      <div className='main-container'>
        <img className='main-img' src={banner_foto} alt="wädeswil_foto" />
        <div className='main-title'>
          <h1> {t('title_on')}</h1>
          <h2> {t('title_under')}</h2>
        </div>
      </div>
      <div className='event-main-container'>
        <section className="row">
              <HomeEventComponent/>
        </section>
        <section className="row">
              <HomeInterviewComponent/>
        </section>
        <section className="row">
              <SBBApp/>
              <WeatherWidget/>
        </section>
      </div>
    </div>
  );
};
export default Home;