import React, { useEffect, useState } from "react";
import AddInterviewForm from "./AddInterviewForm";
import plusIcon from '../../img/plus-svgrepo-com 1.png'
import AddQuestion from './AddQuestion'
import { getInterviewData } from "../../services/interviewService";
import { useNavigate } from "react-router-dom";
import okIcon from '../../img/icons8-ok.svg'

type InterviewItemType ={
    id:string,
    author:string,
    coverText:string,
    datum:string,
    image:string,
    imageTitel:string,
    title:string
}
type QuestionItemType ={
  interviewId:string,
  question:string,
  antwort:string,
}
const AddInterview : React.FC  = () => {
    const [interviewList, setInterviewList] = useState<InterviewItemType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addInterview, setAddInterview] = useState(false)
    const [addQuestion, setAddQuestion] = useState<QuestionItemType[]>([])
    const interviewQuestionList =addQuestion.filter(element => element.interviewId ===interviewList[0].id )
    const navigate = useNavigate();
    const closeInterviewForm = () =>{
      navigate('/interviews');
    }
    useEffect(() => {
        getInterviewData(setInterviewList);
      }, []);
    const addInterviewControler = () => {
        setAddInterview(true);
      };      
      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

   
    return (
        <div className='add-interview-container'>
           {!addInterview && (
            <AddInterviewForm addInterviewControler={addInterviewControler}  setInterviewList={setInterviewList}/>
           )} 
           {addInterview && (
            <div>
                <div className="add-interview">
                    <div>
                        <h3>{interviewList[0].title}</h3>
                        <p>{interviewList[0].coverText}</p>
                    </div>
                        <div className="add-interview-img-container">
                          <img src={`http://localhost:3001/images/${interviewList[0].image}`} className="interview-img" alt={interviewList[0].imageTitel}/>
                        </div>
                    </div>
                    {interviewQuestionList.map(question => {
                      return(
                        <div>
                          <div><h6>{question.question}</h6></div>
                          <div><p>{question.antwort}</p></div>
                        </div>
                      )
                    })}
                <div>
                <button onClick={openModal} className="interview-plus-icon col-12">
                    <img src={plusIcon} alt="add question" />
                    Frage stellen
                </button>
                {isModalOpen && (
                 <div className="modal-add-event-open">
                 <AddQuestion closeModal={closeModal} setAddQuestion={setAddQuestion}  id={interviewList[0].id} />
            </div>
          )}
            </div>
            <button className='interview-ok-button' onClick={closeInterviewForm}> <img src={okIcon} alt="ok-interview" /></button>
            </div>
            
           )} 
        
        </div>
      );
   

}

export default AddInterview