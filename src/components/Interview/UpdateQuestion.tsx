import React, { useState } from "react";
import { Dispatch, SetStateAction } from 'react';
import { getQuestionData, updateQuestion } from "../../services/interviewService";
import { QuestionItemType } from "../../type/interviewTypes";

type UpdateQuestionProps = {
  closeModal: () => void;
  setQuestionList: Dispatch<SetStateAction<any>>;
  clickQuestion: any;
};

const UpdateQuestion: React.FC<UpdateQuestionProps> = ({ closeModal, setQuestionList, clickQuestion }) => {
  const [values, setValues] = useState<QuestionItemType>({
    question: clickQuestion.question,
    antwort: clickQuestion.antwort,
    interviewId: clickQuestion.interviewId,
  });

  const handleUpdateQuestion = async () => {
    try {
      await updateQuestion(values, clickQuestion.id);
      await getQuestionData(setQuestionList);
      closeModal();
    } catch (error) {       <div className="form-button-container"></div>
      alert("Question could not be updated.");
    }
  };

  return (
    <div className='form-main-container question-modal-container'>
      <div className='add-event-container'>
        <h2>Update Question</h2>
        <div className="add-event-input-container">
          <div className='event-input-element'>
            <label>Question:</label>
            <textarea className="form-big-input"  value={values.question} onChange={e => setValues(prevState => ({ ...prevState, question: e.target.value }))} />
          </div>
          <div className='event-input-element'>
            <label>Antwort:</label>
            <textarea className="form-big-input" value={values.antwort} onChange={e => setValues(prevState => ({ ...prevState, antwort: e.target.value }))} />
          </div>
          <div className='event-input-element'></div>
        </div>
        <div className="form-button-container">
            <button className='form-button' onClick={handleUpdateQuestion}>Update Question</button>
            <button className='form-button form-close-button' onClick={closeModal}>Close</button>
          </div>
      </div>
    </div>
  );
}

export default UpdateQuestion;
