import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'
import HamburgerLogo from '../img/menu-icon-min.svg'
import AccountIcon from '../img/account_icon_138984 1.png'
import SearchIcon from '../img/suche.png'
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css'
import {useTranslation} from 'react-i18next';
import HamburgerMenu from './HamburgerMenu';


interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}



const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const [isOpen, setOpen] = useState(false);

  const onHamburgerMenu = () => {
    console.log('click')
    setOpen(isOpen ? false : true);
  }
  const {t} = useTranslation();

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light">
          <a className="navbar-brand col-5 col-sm-3 col-md-2" href="/"><img src={Logo} alt="waedi_ch" className="col-12 offset-md-1"/></a>
          <button className="hamburger-menu-button"onClick={onHamburgerMenu} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <img className="hamburger-menu" src={HamburgerLogo} />
          </button>
              
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <form className="d-flex form-container offset-sm-3  col-4">
              <input className="me-2 search-input" placeholder="Search" aria-label="Search"/>
              <button className="btn search-icon-button" type="submit"><img src={SearchIcon} alt="search" className='search-icon'/></button>
            </form>
            <span className="col-4  offset-4 offset-sm-1 d-flex justify-content-end align-items-center">
              <LanguageSwitcher/>
              <img src={AccountIcon} alt="AccountIcon" className="offset-1 col-1 col-md-1"/>
              {isAuthenticated ? (<button onClick={onLogout}className=" header-button">{t('header_logout')}</button>) 
              : (<Link  className='login' to="/login">{t('header_login')}</Link>)}
            </span>
          </div>
      </nav>
      {isOpen ? (
                      <HamburgerMenu isAuthenticated={isAuthenticated} onLogout={onLogout}/> 
                    ) :<></>
          }
      <div className='page-navigation'>
        <nav className="nav justify-content-center">
            <a className="navigation-element" href="/">{t('nav_home')}</a>
            <a className="navigation-element" href="/">{t('nav_event')}</a>
            <a className="navigation-element" href="/">{t('nav_directories')}</a>
            <a className="navigation-element" href="/">Wädi</a>
            <a className="navigation-element" href="/">{t('nav_photo_gallery')}</a>
            <a className="navigation-element" href="/">Interviews</a>
            <a className="navigation-element" href="/">Service</a>
          </nav>
      </div>
    </header>
  );
};

export default Header;
