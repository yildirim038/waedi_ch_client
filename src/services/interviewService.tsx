import axios from 'axios';
import { QuestionItemType } from '../type/interviewTypes';
const API_URL = 'http://localhost:3001';

export const addInterview = async (data: FormData) => {
  try {
    await axios.post(`${API_URL}/interviews`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const getInterviewData = async (pSetEvent:any) => {
    try {
      const response = await axios.get(`${API_URL}/interviews`);
      pSetEvent(response.data.reverse());
    } catch (error) {
      console.error("Error fetching interviews:", error);
    }
  };
  export const getInterviewDataById = async (pSetInterview:any,pInterviewId:string) => {
    try {
      const response = await axios.get(`${API_URL}/interviews/${pInterviewId}`);
      pSetInterview(response.data);
    } catch (error) {
      console.error("Error fetching interviews:", error);
    }
  };

  export const updateInterview = async (data: FormData ,pId:string) => {
    try {
      await axios.put(`${API_URL}/interviews/${pId}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };


  export const deleteInterviewData = async (interviewId: string) => {
    try {
      await axios.delete(`${API_URL}/interviews/${interviewId}`);
      return true;
    } catch (error: any) {
      throw error.response?.data?.error || "Error";
    }
  };
  export const getQuestionData = async (pSetInterview:any) => {
    try {
      const response = await axios.get(`${API_URL}/question`);
      pSetInterview(response.data);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };
  
export const addQuestion = async (data:QuestionItemType) => {
  try {
    await axios.post(`${API_URL}/question`, data)
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const updateQuestion = async (data: QuestionItemType ,pId:string) => {
  try {
    await axios.put(`${API_URL}/question/${pId}`, data);
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
};

export const deleteQuestionData = async (pId: string) => {
  try {
    await axios.delete(`${API_URL}/question/${pId}`);
    return true;
  } catch (error: any) {
    throw error.response?.data?.error || "Error";
  }
}

export const getQuestionDataById = async (pSetQuestion:any,pId:string) => {
  try {
    const response = await axios.get(`${API_URL}/question/${pId}`);
    pSetQuestion(response.data);
  } catch (error) {
    console.error("Error fetching interviews:", error);
  }
};