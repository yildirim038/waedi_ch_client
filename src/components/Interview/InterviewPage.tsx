import React, { useEffect, useState } from "react";
import close from '../../img/close.png'
import { InterviewFormState } from "../../type/dataType";
import { getQuestionData } from "../../services/interviewService";

interface InterviewPageProps {
    interview: InterviewFormState;
    closeInterviewModal: () => void;
  }
type QuestionItemType ={
  interviewId:string,
  question:string,
  antwort:string,
}
const InterviewPage : React.FC <InterviewPageProps> = ({interview , closeInterviewModal}) => {

    const [getQuestion, setGetQuestion] = useState<QuestionItemType[]>([])
    const interviewQuestionList =getQuestion.filter(element => element.interviewId ===interview.id )


useEffect(()=>{
    getQuestionData(setGetQuestion)
},[])
       
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
                        className="interview-img" alt={interview.imageTitel}/>
                    </div>
                </div>
                    {interviewQuestionList.map(question => {
                      return(
                        <div className="question-container">
                          <div><h6>{question.question}</h6></div>
                          <div><p>{question.antwort}</p></div>
                        </div>
                      )
                    })}
                <div>
                    <button className='interview-ok-button' onClick={closeInterviewModal}> 
                        <img src={close} alt="ok-interview" />
                    </button>
                </div>
   
            </div>   
       
        </div>
    );
   

}

export default InterviewPage