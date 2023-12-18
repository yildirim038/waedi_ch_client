import React, { useState } from "react";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
import { deleteInterviewData, getInterviewData, getInterviewDataById } from "../../services/interviewService";
import { InterviewFormState } from "../../type/dataType";
//import UpdateInterview from "./UpdateEvent";


interface InterviewCardProps {
    interview: InterviewFormState;
  setInterviewList: React.Dispatch<React.SetStateAction<any>>;
}
const EventCard: React.FC<InterviewCardProps> = ({ interview, setInterviewList}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickEvent, setClickEvent] = useState({})
  let  role = false
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    if(localStorage.getItem("role")==="admin"){
      role = true   
     }
      else {
      role = false
    } 
    const handleUpdateEvent = async () => {
      try {
        interview.id?
        await getInterviewDataById(setClickEvent,interview.id):(console.log("error"))
        getInterviewData(setInterviewList);
        openModal()
      } catch (error) {
        alert("Event could not be deleted.");
      }
    }
    const handleDeleteEvent = async () => {
      try {
        interview.id?
        await deleteInterviewData(interview.id):(console.log("error"))
        getInterviewData(setInterviewList);
      } catch (error) {
        alert("Event could not be deleted.");
      }
    };
  
    return(
      <>
      {!isModalOpen &&  (
         <div key={interview.id}  className="interview-card row">
          <div className="col-12 col-sm-4 col-md-2">
            <img src={`http://localhost:3001/images/${interview.image}`}  className="col-12" alt={interview.imageTitel} />
          </div>
          <div className="col-12 col-sm-8 col-md-10">
            <div className="interview-title">
              <div>
                <h3>{interview.title}</h3>
                <h6>{interview.datum}</h6>
                <p>{interview.coverText}</p>
              </div>
              {  role ? (
                 <div>
                  <button ><img src={Update} onClick={handleUpdateEvent} alt="update"/></button>
                <button><img src={Delete}  onClick={handleDeleteEvent} alt="delete" /></button>
                 </div>                
               ) 
             : (<div></div>
             )}
            </div>
            <div>
              <a href="./interviews">Weiter lesen ...</a>
            </div>
          </div>
        </div>       

    
      )}
      {/**
      isModalOpen &&  (
        <div className="modal-add-event-open">
            <UpdateEvent closeModal={closeModal} setEventList={setEventList} clickEvent={clickEvent} />
        </div>
      ) */}
       </>
    )
}

export default EventCard;