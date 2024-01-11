import React, { useState } from "react";
import { addQuestion, getQuestionData } from "../../services/interviewService";
import { QuestionItemType, addQusetionType } from "../../type/interviewTypes";

const AddQuestion: React.FC<addQusetionType> = ({ closeModal, setAddQuestion, id }) => {
  const [question, setQuestion] = useState<QuestionItemType>({
    question: "",
    antwort: "",
    interviewId: id,
  });

  const handleAddQuestion = async () => { 
    try {
      await addQuestion(question);
      getQuestionData(setAddQuestion);
      closeModal();
    } catch (error) {
      alert("Interview could not be added.");
    }
  };

  const isFormValid = question.question.trim() !== "" && question.antwort.trim() !== "";

  return (
    <div className="form-main-container">
      <div className="add-event-container">
        <h2>Add Interview</h2>
        <div className="add-event-input-container">
          <div className="event-input-element">
            <label>Question:</label>
            <input
              type="text"
              value={question.question}
              onChange={(e) => setQuestion({ ...question, question: e.target.value })}
            />
          </div>
          <div className="event-input-element">
            <label>Antwort:</label>
            <input
              type="text"
              value={question.antwort}
              onChange={(e) => setQuestion({ ...question, antwort: e.target.value })}
            />
          </div>
          <button className="form-button" onClick={handleAddQuestion} disabled={!isFormValid}>
            Add Question
          </button>
          <button className="form-button form-close-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
