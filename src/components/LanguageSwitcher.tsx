import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  }

  return (
    <span className="language-container">
      <span className="current-language" onClick={toggleDropdown}>
        {t('header_language')}
        <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}></span>
      </span>
      {isDropdownOpen && (
        <ul className="language-dropdown">
          <li className='language-dropdown-item' onClick={() => changeLanguage('de')}>{t('DE')}</li>
          <li className='language-dropdown-item' onClick={() => changeLanguage('en')}>{t('EN')}</li>
        </ul>
      )}
    </span>
  );
}

export default LanguageSwitcher;