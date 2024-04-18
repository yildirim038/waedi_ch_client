import axios from 'axios';


const API_URL = 'http://localhost:3001';


export const addProduct = async (data: FormData) => {
  try {
    await axios.post(`${API_URL}/product`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const getProductData = async (pSetlist:any) => {
    try {
      const response = await axios.get(`${API_URL}/product`);
      pSetlist(response.data.reverse());
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  export const getProductDataById = async (pSetList:any,pId:string) => {
    try {
      const response = await axios.get(`${API_URL}/product/${pId}`);
      pSetList(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  export const updateProduct = async (data: FormData ,pId:string) => {
    try {
      await axios.put(`${API_URL}/product/${pId}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };


  export const deleteProductData = async (pId: string) => {
    try {
      await axios.delete(`${API_URL}/product/${pId}`);
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };
