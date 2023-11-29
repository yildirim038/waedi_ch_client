import React,{useState,useEffect} from 'react';
import Header from '../components/Header';
import {useTranslation} from 'react-i18next'
import banner_foto from '../img/img_home.png'
import { logout } from "../services/authService";
import './Home.css'
import {handleTokenCheck } from '../untils/untils'
import { isAuthenticated } from '../type/dataType';



const Home: React.FC<isAuthenticated> = ({ isAuthenticated, onLogout }) => {
  const {t} = useTranslation();
 
  return (
    <div >
      <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
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
