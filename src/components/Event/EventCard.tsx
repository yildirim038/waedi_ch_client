import React, { useState } from "react";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
import { deleteEventData, getEventData, getEventDataById } from "../../services/eventService";
import { EventFormState } from "../../type/dataType";
import UpdateEvent from "./UpdateEvent";


interface EventCardProps {
  event: EventFormState;
  setEventList: React.Dispatch<React.SetStateAction<any>>;
 // openModal?:() => void;
//  closeModal?: () => void;
}
const EventCard: React.FC<EventCardProps> = ({ event, setEventList}) => {
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
        event.id?
        await getEventDataById(setClickEvent,event.id):(console.log("error"))
        getEventData(setEventList);
        openModal()
      } catch (error) {
        alert("Event could not be deleted.");
      }
    }
    const handleDeleteEvent = async () => {
      try {
        event.id?
        await deleteEventData(event.id):(console.log("error"))
        getEventData(setEventList);
      } catch (error) {
        alert("Event could not be deleted.");
      }
    };
  
    return(
      <>
      {!isModalOpen &&  (
       <div key={event.id} className="card-container  col-12 col-sm-6 col-md-4">
       <div className="card">
         <img src={`http://localhost:3001/images/${event.image}`} className="card-img-top" alt="..."/>
         <div className="card-body">
             <h4>{event.startdatum.split('-').reverse().join('.')} - {event.enddatum.split('-').reverse().join('.')}</h4>
             <h5 className="card-title">{event.name}</h5>
             <p>Adresse: {event.adresse}</p>
             <p>{event.plz}  {event.ort}</p>
             <div className="update-card-button-container">
               <div>
                 <a href={`https://${event.link}`}>More...</a>
               </div>
               {  role ? (
                 <div>
                       <button ><img src={Update}  onClick={handleUpdateEvent} alt="update"/></button>
                       <button onClick={handleDeleteEvent}><img src={Delete} alt="delete" /></button>
                 </div>                
               ) 
             : (<div></div>
             )}
            
             </div>
         </div>
       </div>
     </div>
      )}
     
        
      {isModalOpen &&  (
        <div className="modal-add-event-open">
            <UpdateEvent closeModal={closeModal} setEventList={setEventList} clickEvent={clickEvent} />
        </div>
      )}
       </>
    )
}

export default EventCard;