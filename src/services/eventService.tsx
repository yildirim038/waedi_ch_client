import axios from 'axios';


const API_URL = 'http://localhost:3001';


export const addEvent = async (data: FormData) => {
  try {
    await axios.post(`${API_URL}/events`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const getEventData = async (pSetEvent:any) => {
    try {
      const response = await axios.get(`${API_URL}/events`);
      pSetEvent(response.data.reverse());
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  export const deleteEventData = async (eventId: string) => {
    try {
      await axios.delete(`${API_URL}/events/${eventId}`);
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };
