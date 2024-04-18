export type InterviewItemType ={
  id:string,
  author:string,
  coverText:string,
  datum:string,
  image:string,
  imageTitel:string,
  title:string
}

export type QuestionItemType ={
  id?:string
  interviewId:string,
  question:string,
  antwort:string,
}


export interface InterviewFormState {
  id?:string,
  title:string,
  imageTitel:string,
  descriptionOfImage:string,
  coverText:string,
  author:string,
  datum:string,
  image:any,
}

export type addInterviewControlerType = {
  addInterviewControler: () => void;
  setInterviewList: React.Dispatch<React.SetStateAction<any>>;
};


export type addQusetionType = {
  closeModal: () => void;
  setAddQuestion: React.Dispatch<React.SetStateAction<any>>;
  id:string,

};

export interface InterviewCardProps {
  interview: InterviewFormState;
  setInterviewList: React.Dispatch<React.SetStateAction<any>>;
  setClickInterview:React.Dispatch<React.SetStateAction<any>>;
  setClickUpdateInterview:React.Dispatch<React.SetStateAction<any>>;
}
export interface InterviewCardType {
  interview: InterviewFormState;
}