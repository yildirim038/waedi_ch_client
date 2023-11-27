import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/logo.png'
import AccountIcon from './img/account_icon_138984 1.png'
import SearchIcon from './img/suche.png'
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css'
import {useTranslation} from 'react-i18next';


interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const {t} = useTranslation();
  console.log(isAuthenticated)
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="/"><img src={Logo} alt="waedi_ch" className="col-6 offset-md-1"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex form-container offset-md-2  col-4">
              <input className="me-2 search-input" placeholder="Search" aria-label="Search"/>
              <button className="btn search-icon-button" type="submit"><img src={SearchIcon} alt="search" className='search-icon'/></button>
            </form>
            <span className="col-2 offset-md-4">
              <LanguageSwitcher/>
              <img src={AccountIcon} alt="AccountIcon" className="offset-md-1 col-2"/>
              {isAuthenticated ? (<button onClick={onLogout}className="col-5 header-button">{t('header_logout')}</button>) 
              : (<Link  className='login' to="/login">{t('header_login')}</Link>)}
            </span>
          </div>
      </nav>
      <div>
        <nav className="nav justify-content-center">
            <a className="navigation-element" href="/">Startseite</a>
            <a className="navigation-element" href="/">Event</a>
            <a className="navigation-element" href="/">Verzeichnisse</a>
            <a className="navigation-element" href="/">Wädi</a>
            <a className="navigation-element" href="/">Fotogalerie</a>
            <a className="navigation-element" href="/">Interviews</a>
            <a className="navigation-element" href="/">Service</a>
          </nav>
      </div>
    </header>
  );
};

export default Header;
