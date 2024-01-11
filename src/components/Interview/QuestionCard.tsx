import React, { useState } from "react";
import { QuestionItemType } from "../../type/interviewTypes";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
import {deleteQuestionData, getQuestionData, getQuestionDataById } from "../../services/interviewService";
import UpdateQuestion from "./UpdateQuestion";

interface QuestionCardProps {
  question: QuestionItemType;
  setQuestionList: React.Dispatch<React.SetStateAction<any>>;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question , setQuestionList}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickQuestion, setClickQuestion] = useState({});

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

    const handleUpdateQuestion = async () => {
        try {
            question.id ?
            await getQuestionDataById(setClickQuestion, question.id) : (console.log("error"))
            openModal();
        } catch (error) {
          alert("Event could not be deleted.");
        }
      }
    
    const handleDeleteQuestion = async () => {
        try {
            question.id?
          await deleteQuestionData(question.id):(console.log("error"))
          getQuestionData(setQuestionList);
        } catch (error) {
          alert("Event could not be deleted.");
        }
      };
  return (
    <div className="question-container">
       {!isModalOpen && (
<>
    <div>
        <h6>{question.question}  
        <button  className="update-delete-button"><img src={Update} onClick={ handleUpdateQuestion}  alt="update"/></button>
         
            <button  className="update-delete-button"><img src={Delete}  onClick={handleDeleteQuestion} alt="delete" /></button>
         </h6>
      </div>
      <div>
        <p>{question.antwort}</p>
      </div>
</>
       )}
       {isModalOpen && (
        <>
        <UpdateQuestion closeModal={closeModal} setQuestionList={setQuestionList} clickQuestion={clickQuestion}/>
        </>
       )}
    </div>
  );
};

export default QuestionCard;