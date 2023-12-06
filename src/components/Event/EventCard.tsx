import React from "react";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
import { deleteEventData, getEventData } from "../../services/eventService";
import { EventFormState } from "../../type/dataType";


interface EventCardProps {
  event: EventFormState;
  setEventList: React.Dispatch<React.SetStateAction<any>>;
}

const EventCard: React.FC<EventCardProps> = ({ event, setEventList }) => {
 
  let  role = false

    if(localStorage.getItem("role")==="admin"){
      role = true   
     }
      else {
      role = false
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
        <div key={event.id} className="card-container  col-12 col-sm-6 col-md-4">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{event.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="update-card-button-container">
                <div>
                  <a href="/events">Go Web Page</a>
                </div>
                {role ? (
                  <div>
                        <button ><img src={Update} alt="update" /></button>
                        <button onClick={handleDeleteEvent}><img src={Delete} alt="delete" /></button>
                  </div>                
                ) 
              : (<div></div>
              )}
              </div>
          </div>
        </div>
      </div>
    )
}

export default EventCard;