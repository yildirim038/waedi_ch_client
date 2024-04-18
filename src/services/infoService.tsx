import axios from 'axios';
const API_URL = 'http://localhost:3001';

export const getHistoryData = async (pSetHistory:any) => {
    try {
      const response = await axios.get(`${API_URL}/history`);
      pSetHistory(response.data.reverse());
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };
export const getArticleData = async (pSetArticle:any) => {
    try {
      const response = await axios.get(`${API_URL}/article`);
      pSetArticle(response.data);
    } catch (error) {
      console.error("Error fetching Article:", error);
    }
  };
  export const addHistory = async (data:any) => {
    try {
      await axios.post(`${API_URL}/history`, data)
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };  
export const addArticle = async (data:any) => {
  try {
    await axios.post(`${API_URL}/article`, data)
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const updateHistory = async (data: any ,pId:string) => {
  try {
    await axios.put(`${API_URL}/history/${pId}`, data);
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const updateArticle = async (data: any ,pId:string) => {
    try {
      await axios.put(`${API_URL}/article/${pId}`, data);
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };
  
  export const deleteHistoryData = async (pId: string) => {
    try {
      await axios.delete(`${API_URL}/history/${pId}`);
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  }

export const deleteArticleData = async (pId: string) => {
  try {
    await axios.delete(`${API_URL}/article/${pId}`);
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
}

export const getHistoryDataById = async (pSetHistory:any,pId:string) => {
  try {
    const response = await axios.get(`${API_URL}/history/${pId}`);
    pSetHistory(response.data);
  } catch (error) {
    console.error("Error fetching history:", error);
  }
};
export const getArticleDataById = async (pSetArticle:any,pId:string) => {
    try {
      const response = await axios.get(`${API_URL}/article/${pId}`);
      pSetArticle(response.data);
    } catch (error) {
      console.error("Error fetching Article:", error);
    }
};