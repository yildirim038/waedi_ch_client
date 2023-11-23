import axios from 'axios';



const API_URL = 'http://localhost:3001/auth';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    console.log(response.data.token)
    return response.data.token;
    
  } catch (error:any) {
    throw error.response.data.error;
  }
};
type Register  ={
  firstname:string, 
  lastname:string, 
  email: string, 
  password: string, 
  role: string
}
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
    return true;
  } catch (error:any) {
    throw error.response.data.error;
  }
};

export const checkToken = async () => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      // Token yoksa, isAuthenticated false döndür
      return {
        isAuthenticated: false,
        role: null,
      };
    }

    const response = await axios.get(`${API_URL}/tokenCheck`, {
      headers: {
    'Authorization': `Bearer ${token}`,
      },
    });

    // response.data.user değeri undefined değilse role'ü kullan, aksi halde null döndür
    const role =  response.data.role;

    return {
      isAuthenticated: true,
      role: role,
    };
  } catch (error) {
    console.error('Token Check Error:', error);

    // Token doğrulanamazsa veya hata alınırsa isAuthenticated false döndür
    return {
      isAuthenticated: false,
      role: null,
    };
  }
};



;
