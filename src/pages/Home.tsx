import React from 'react';
import { useTranslation } from 'react-i18next';
import banner_foto from '../img/img_home.png';
import './Home.css';
import HomeEventComponent from '../components/Home/HomeEventComponent';
import HomeInterviewComponent from '../components/Home/HomeInterviewComponent';
import SBBApp from '../components/SBBApp';
import WeatherWidget from '../components/WeatherWidget';
import HeaderComponent from '../components/Header/HeaderComponents';
import Footer from '../components/Footer/Footer'


const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <HeaderComponent/>
      <div className='main-container'>
        <img className='main-img' src={banner_foto} alt="wädeswil_foto" />
        <div className='main-title'>
          <h1> {t('title_on')}</h1>
          <h2> {t('title_under')}</h2>
        </div>
      </div>
      <div>
        <section className="event-container">
          <div>
            <HomeEventComponent/>
          </div>
        </section>
        <section>
              <HomeInterviewComponent/>
        </section>
        <section>
              <SBBApp/>
              <WeatherWidget/>
        </section>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
};
export default Home;