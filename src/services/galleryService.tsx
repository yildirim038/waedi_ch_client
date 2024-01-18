import axios from 'axios';
const API_URL = 'http://localhost:3001';

export const addGallery = async (data: any) => {
  try {
    await axios.post(`${API_URL}/photogallery`, data);
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const getGalleryData = async (pSetGallery:any) => {
    try {
      const response = await axios.get(`${API_URL}/photogallery`);
      pSetGallery(response.data.reverse());
    } catch (error) {
      console.error("Error fetching gallerys:", error);
    }
  };
  export const getGalleryDataById = async (pSetGallery:any,pGalleryId:string) => {
    try {
      const response = await axios.get(`${API_URL}/photogallery/${pGalleryId}`);
      pSetGallery(response.data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };

  export const updateGallery = async (data: any ,pId:string) => {
    try {
      await axios.put(`${API_URL}/photogallery/${pId}`, data);
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };


  export const deleteGalleryData = async (galleryId: string) => {
    try {
      await axios.delete(`${API_URL}/photogallery/${galleryId}`);
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };
  export const getImageData = async (pSetGallery:any) => {
    try {
      const response = await axios.get(`${API_URL}/photo`);
      pSetGallery(response.data);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };
  
export const addImage = async (data:FormData) => {
  try {
    await axios.post(`${API_URL}/photo`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const updateImage = async (data: FormData ,pId:string) => {
  try {
    await axios.put(`${API_URL}/photo/${pId}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};
export const deletePhotoData = async (pId: string) => {
  try {
    await axios.delete(`${API_URL}/photo/${pId}`);
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
}

export const getPhotoDataById = async (pSetPhoto:any,pId:string) => {
  try {
    const response = await axios.get(`${API_URL}/photo/${pId}`);
    pSetPhoto(response.data);
  } catch (error) {
    console.error("Error fetching Photos:", error);
  }
};