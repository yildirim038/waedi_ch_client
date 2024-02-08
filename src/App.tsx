import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import MainApp from './MainApp';

const App: React.FC = () => {
  return (
      <AuthProvider>
        <MainApp/>
      </AuthProvider>   
  );
};

export default App;