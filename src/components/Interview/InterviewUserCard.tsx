import React, { useState } from "react";
import { InterviewCardType, InterviewFormState} from "../../type/interviewTypes"
import InterviewPage from "./InterviewPage";


const InterviewUserCard: React.FC<InterviewCardType> = ({ interview}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickInterview, setClickInterview] = useState<InterviewFormState>({
    title: '',
    author: '',
    coverText: '',
    imageTitel: '',
    descriptionOfImage: '',
    image: '',
    datum: '',
  })
  const handleReadInterview = () => {
    setClickInterview(interview)
    setIsModalOpen(true)
  }
  const closeInterviewModal = () => setIsModalOpen(false);

return(
  <div >
    {!isModalOpen && (
        <div key={interview.id}  className="interview-card row">
        <div className="col-12 col-sm-4 col-md-3">
        <img src={`http://localhost:3001/images/${interview.image}`}  className="col-12" alt={interview.imageTitel} />
      </div>
      <div className="col-12 col-sm-8 col-md-9">
        <div className="interview-title">
          <div>
            <h4>{interview.title}</h4>
            <h6 className="interview-card-datum">{interview.datum}</h6>
          </div>
        </div>
        <div>
          <p>{interview.coverText}</p>
        </div>
        <div>
          <button className="interview-button" onClick={handleReadInterview} >Weiter lesen ...</button>
        </div>
      </div>
      </div>
      )}
      {isModalOpen && (
        <div className="read-interview">
          <InterviewPage interview={clickInterview} closeInterviewModal={closeInterviewModal}/>
        </div>
      )} 
    </div>       
  )
}

export default InterviewUserCard;