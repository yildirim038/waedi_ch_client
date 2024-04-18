import React, { useState } from 'react';
import Header from './Header';
import { useAuth } from '../../auth/AuthContext';
import { logout } from '../../services/authService';

const HeaderComponent: React.FC = () => {
  const { authInfo, setAuthInfo } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSomeAction = () => {
     setAuthInfo({ isAuthenticated: true, role: 'newRole' });
  };
  const handleLogout = async () => {
    await logout();
    setAuthInfo({
      isAuthenticated: false,
      role: '',
    });
    window.location.reload()
  };

  const openModal  = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
 
  return (
      <Header openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} handleSomeAction={handleSomeAction} 
      isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout} />
  );
};
export default HeaderComponent;