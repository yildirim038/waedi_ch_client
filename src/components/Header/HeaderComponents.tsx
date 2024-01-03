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
  };

  
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
console.log(isModalOpen)
  return (
      <Header openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} handleSomeAction={handleSomeAction} isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout} />
  );
};
export default HeaderComponent;