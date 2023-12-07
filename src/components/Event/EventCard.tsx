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
          <img src={`http://localhost:3001/image/${event.image}`} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h4>{event.startdatum.split('-').reverse().join('.')} - {event.enddatum.split('-').reverse().join('.')}</h4>
              <h5 className="card-title">{event.name}</h5>
              <p>Adresse: {event.adresse}</p>
              <p>{event.plz}  {event.ort}</p>
              <div className="update-card-button-container">
                <div>
                  <a href={event.link}>More...</a>
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