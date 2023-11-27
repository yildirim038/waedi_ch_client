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
         <form className="d-flex form-container offset-md-2  col-4">
              <input className="me-2 search-input" placeholder="Search" aria-label="Search"/>
              <button className="btn search-icon-button" type="submit"><img src={SearchIcon} alt="search" className='search-icon'/></button>
            </form>
      <LanguageSwitcher/>
        {isAuthenticated ? (<button onClick={onLogout}className=" header-button">{t('header_logout')}</button>) 
              : (<Link  className='login' to="/login">{t('header_login')}</Link>)}
     </div>
    );
  };
  
  export default HamburgerMenu;
  