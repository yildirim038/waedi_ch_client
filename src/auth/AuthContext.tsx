import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { handleTokenCheck } from '../untils/untils';

interface AuthInfo {
  isAuthenticated: boolean;
  role: string;
}

interface AuthContextType {
  authInfo: AuthInfo;
  setAuthInfo: React.Dispatch<React.SetStateAction<AuthInfo>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    isAuthenticated: false,
    role: '',
  });

  useEffect(() => {
    handleTokenCheck(setAuthInfo);
  }, []); 

  return (
    <AuthContext.Provider value={{ authInfo, setAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};