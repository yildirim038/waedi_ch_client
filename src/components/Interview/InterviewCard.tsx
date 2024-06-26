import React from "react";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
import { deleteInterviewData, getInterviewData, getInterviewDataById} from "../../services/interviewService";
import { InterviewCardProps} from "../../type/interviewTypes";
import { token } from "../../untils/untils";


const InterviewCard: React.FC<InterviewCardProps> = ({ interview, setInterviewList,setClickInterview ,setClickUpdateInterview}) => {
  const role = JSON.parse(token).role=== "admin";
  const handleReadInterview = () => {
    setClickInterview(interview)
  }

  const handleDeleteInterview = async () => {
    try {
      interview.id?
      await deleteInterviewData(interview.id):(console.log("error"))
      getInterviewData(setInterviewList);
    } catch (error) {
      alert("Event could not be deleted.");
    }
  };
  const handleUpdateInterview = async () => {
    try {
      setClickUpdateInterview(interview)
      interview.id ?
        await getInterviewDataById(setClickUpdateInterview, interview.id) : (console.log("error"))
      getInterviewData(setInterviewList);

    } catch (error) {
      alert("Event could not be deleted.");
    }
  };

return(
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
          {role && (
            <div>
              <button ><img src={Update} onClick={handleUpdateInterview} alt="update"/></button>
              <button><img src={Delete}  onClick={handleDeleteInterview} alt="delete" /></button>
            </div>                
          )}
        </div>
        <div>
          <p>{interview.coverText}</p>
        </div>
        <div>
          <button className="interview-button" onClick={handleReadInterview} >Weiter lesen ...</button>
        </div>
      </div>
    </div>       
  )
}

export default InterviewCard;