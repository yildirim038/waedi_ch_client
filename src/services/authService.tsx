import axios from 'axios';
import { Register } from '../type/dataType';

const API_URL = 'http://localhost:3001/auth';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
    
  } catch (error:any) {
    throw error.response.data.error;
  }
};

export const register = async (data: Register) => {
  try {
    await axios.post(`${API_URL}/register`, data);
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};


export const logout = async () => {
  try {
    await axios.post(`${API_URL}/logout`);
    localStorage.removeItem('token');
    return true;
  } catch (error:any) {
    throw error.response.data.error;
  }
};
;
