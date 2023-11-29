import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import {useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';
import SearchIcon from '../img/suche.png'
interface HamburgerMenuProps {
    isAuthenticated: boolean;
    onLogout: () => void;
  }
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isAuthenticated, onLogout }) => {
    const {t} = useTranslation();
    console.log(isAuthenticated)
    return (
     <div className='hamburger-menu-container'>
        <div className='hamburger-menu-search-login-container'>    
            <form className="d-flex form-container">
              <input className="me-2 hamburger-menu-search-input" placeholder="Search" aria-label="Search"/>
              <button className="btn search-icon-button" type="submit"><img src={SearchIcon} alt="search" className='hamburger-menu-search-icon'/></button>
            </form>
            <div className='d-flex'>
                <LanguageSwitcher/>
                {isAuthenticated ? (<button onClick={onLogout}className=" header-button">{t('header_logout')}</button>) 
                : (<Link  className='login' to="/login">{t('header_login')}</Link>)}
            </div>
        </div>
     
        <nav className="mobil-nav">
            <ul>
                <li>
                    <a className="" href="/">{t('nav_home')}</a>
                </li>
                <li>
                    <a className="" href="/">{t('nav_event')}</a>
                </li>
                <li>
                    <a className="" href="/">{t('nav_directories')}</a>
                </li>
                <li>
                    <a className="" href="/">Wädi</a>
                </li>
                <li>
                    <a className="" href="/">{t('nav_photo_gallery')}</a>
                </li>
                <li>
                    <a className="" href="/">Interviews</a>
                </li>
                <li>
                    <a className="" href="/">Service</a>
                </li>

            </ul> 
        </nav>
     </div>
     
    );
  };
  
  export default HamburgerMenu;
  