import React, { useState } from "react";
import { QuestionItemType } from "../../type/interviewTypes";
import Update from '../../img/arrow 5.png';
import Delete from '../../img/bin 6.png';
import { deleteQuestionData, getQuestionData, getQuestionDataById } from "../../services/interviewService";
import UpdateQuestion from "./UpdateQuestion";

interface QuestionCardProps {
  question: QuestionItemType;
  setQuestionList: React.Dispatch<React.SetStateAction<any>>;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, setQuestionList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickQuestion, setClickQuestion] = useState<QuestionItemType | {}>({});
  const openModal  = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleUpdateQuestion = async () => {
    try {
      if (question.id) {
        await getQuestionDataById(setClickQuestion, question.id);
        openModal();
      } else {
        console.log("error");
      }
    } catch (error) {
      alert("Question could not be updated.");
    }
  };

  const handleDeleteQuestion = async () => {
    try {
      if (question.id) {
        await deleteQuestionData(question.id);
        getQuestionData(setQuestionList);
      } else {
        console.log("error");
      }
    } catch (error) {
      alert("Question could not be deleted.");
    }
  };

  return (
    <div className="question-container">
      {!isModalOpen && (
        <div>
          <div>
            <h6>
              {question.question}
              <button className="update-delete-button">
                <img src={Update} onClick={handleUpdateQuestion} alt="update" />
              </button>
              <button className="update-delete-button">
                <img src={Delete} onClick={handleDeleteQuestion} alt="delete" />
              </button>
            </h6>
          </div>
          <div>
            <p>{question.antwort}</p>
          </div>
        </div>
      )}
      {isModalOpen && (
          <UpdateQuestion closeModal={closeModal} setQuestionList={setQuestionList} clickQuestion={clickQuestion as QuestionItemType} />
      )}
    </div>
  );
};

export default QuestionCard;
