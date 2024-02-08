import axios from 'axios';
const API_URL = 'http://localhost:3001';

export const addAdvert = async (data: FormData) => {
  try {
    await axios.post(`${API_URL}/adverts`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const getAdvertData = async (pSetAdvert:any) => {
    try {
      const response = await axios.get(`${API_URL}/adverts`);
      pSetAdvert(response.data.reverse());
    } catch (error) {
      console.error("Error fetching adverts:", error);
    }
  };
  export const getAdvertDataById = async (pSetAdvert:any,id:string) => {
    try {
      const response = await axios.get(`${API_URL}/adverts/${id}`);
      pSetAdvert(response.data);
    } catch (error) {
      console.error("Error fetching adverts:", error);
    }
  };

  export const updateAdvert = async (data: FormData ,pId:string) => {
    try {
      await axios.put(`${API_URL}/adverts/${pId}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };


  export const deleteAdvertData = async (eventId: string) => {
    try {
      await axios.delete(`${API_URL}/adverts/${eventId}`);
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };
