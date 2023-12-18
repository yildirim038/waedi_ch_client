import React, { useState } from "react";
import { addQuestion, getQuestionData } from "../../services/interviewService";
import { useNavigate } from "react-router-dom";

type addQusetionType = {
    closeModal: () => void;
    setAddQuestion: React.Dispatch<React.SetStateAction<any>>;
    id:string,

  };
const AddQuestion: React.FC <addQusetionType>  = ({closeModal, setAddQuestion,id}) => {
    const [questionData, setQuestionData] = useState({
        question: '',
        antwort: '',
        interviewId: id
    });
  

   
    const handleAddQuestion = async () => {
        try {
          await addQuestion(questionData);
          getQuestionData(setAddQuestion);
          closeModal()
        } catch (error) {
          alert("Interview could not be added.");
        }
      };

    return (
        <div className='form-main-container'>
          <div className='add-event-container'>
            <h2>Add Interview</h2>
            <div className="add-event-input-container">
              <div className='event-input-element'>
                <label>Question:</label>
                <input type="text" value={questionData.question} onChange={e => setQuestionData({ ...questionData, question: e.target.value })} />
              </div>
              <div className='event-input-element'>
                <label>Antwort:</label>
                <input type="text" value={questionData.antwort} onChange={e => setQuestionData({ ...questionData, antwort: e.target.value })} />
              </div>
              <button className='form-button' onClick={handleAddQuestion}>Add Question</button>
              <button className='form-button  form-close-button' onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      );
}

export default AddQuestion;