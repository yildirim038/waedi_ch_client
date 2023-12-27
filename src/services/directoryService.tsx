import axios from 'axios';


const API_URL = 'http://localhost:3001';


export const addDirectory = async (data: FormData) => {
  try {
    await axios.post(`${API_URL}/directory`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const getDirectoryData = async (pSetDirectory:any) => {
    try {
      const response = await axios.get(`${API_URL}/directory`);
      pSetDirectory(response.data.reverse());
    } catch (error) {
      console.error("Error fetching directory:", error);
    }
  };
  export const getDirectoryDataById = async (pSetDirectory:any,pDirectoryId:string) => {
    try {
      const response = await axios.get(`${API_URL}/directory/${pDirectoryId}`);
      pSetDirectory(response.data);
    } catch (error) {
      console.error("Error fetching directory:", error);
    }
  };

  export const updateDirectory = async (data: FormData ,pId:string) => {
    try {
      await axios.put(`${API_URL}/directory/${pId}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };


  export const deleteDirectoryData = async (directoryId: string) => {
    try {
      await axios.delete(`${API_URL}/directory/${directoryId}`);
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };
