import React from 'react';
import Header from './Header';
import { useAuth } from '../../auth/AuthContext';
import { logout } from '../../services/authService';

const HeaderComponent: React.FC = () => {
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
      <Header handleSomeAction={handleSomeAction} isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout} />
  );
};
export default HeaderComponent;