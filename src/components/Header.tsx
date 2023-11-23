import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/logo.png'
import AccountIcon from './img/account_icon_138984 1.png'
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
      <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/"><img src={Logo} alt="waedi_ch" className="col-6 offset-md-1"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex  offset-md-2  col-4" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
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
            <a className="nav-link" href="/">Startseite</a>
            <a className="nav-link" href="/">Event</a>
            <a className="nav-link" href="/">Verzeichnisse</a>
            <a className="nav-link" href="/">Wädi</a>
            <a className="nav-link" href="/">Fotogalerie</a>
            <a className="nav-link" href="/">Interviews</a>
            <a className="nav-link" href="/">Service</a>
          </nav>
      </div>
    </header>
  );
};

export default Header;
