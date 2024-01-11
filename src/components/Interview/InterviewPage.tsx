import React, { useEffect, useState } from "react";
import close from '../../img/close.png'
import { InterviewFormState } from "../../type/interviewTypes";
import { getQuestionData } from "../../services/interviewService";
import QuestionCard from "./QuestionCard";

interface InterviewPageProps {
  interview: InterviewFormState;
  closeInterviewModal: () => void;
}

type QuestionItemType = {
  interviewId: string;
  question: string;
  antwort: string;
};

const InterviewPage: React.FC<InterviewPageProps> = ({ interview, closeInterviewModal }) => {

  const [questionList, setQuestionList] = useState<QuestionItemType[]>([])
  const interviewQuestionList = questionList.filter(element => element.interviewId === interview.id)

  useEffect(() => {
    getQuestionData(setQuestionList)
  }, [])

  return (
    <div className='add-interview-container'>
      <div>
        <div className="add-interview">
          <div>
            <h3>{interview.title}</h3>
            <p>{interview.coverText}</p>
          </div>
          <div className="add-interview-img-container">
            <img src={`http://localhost:3001/images/${interview.image}`}
              className="interview-img" alt={interview.imageTitel} />
          </div>
        </div>

        {interviewQuestionList.map((question: QuestionItemType, index) => (
          <QuestionCard key={index} question={question} setQuestionList={setQuestionList} />
        ))}

        <div>
          <button className='interview-ok-button' onClick={closeInterviewModal}>
            <img src={close} alt="ok-interview" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InterviewPage;
