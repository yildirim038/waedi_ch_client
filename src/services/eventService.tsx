import axios from 'axios';
import { EventFormState } from '../type/dataType';

const API_URL = 'http://localhost:3001';

export const addEvent=  async(data:EventFormState)=>{
    try {
        await axios.post(`${API_URL}/events`, data);
        return true;
      } catch (error: any) {
        throw error.response?.data?.error || "Error";
      }
}

export const getEventData = async (pSetEvent:any) => {
    try {
      const response = await axios.get(`${API_URL}/events`);
      pSetEvent(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };