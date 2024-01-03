import React, { useState } from "react";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
import { deleteEventData, getEventData, getEventDataById } from "../../services/eventService";
import { EventFormState } from "../../type/dataType";
import UpdateEvent from "./UpdateEvent";


interface EventCardProps {
  data: EventFormState; 
  setEventList: React.Dispatch<React.SetStateAction<any>>;
}

const EventCard: React.FC<EventCardProps> = ({ data, setEventList }) => { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickEvent, setClickEvent] = useState({});
  let role = false;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (localStorage.getItem("role") === "admin") {
    role = true;
  } else {
    role = false;
  }

  const handleUpdateEvent = async () => {
    try {
      data.id ?
        await getEventDataById(setClickEvent, data.id) : (console.log("error"))
      getEventData(setEventList);
      openModal();
    } catch (error) {
      alert("Event could not be deleted.");
    }
  }

  const handleDeleteEvent = async () => {
    try {
      data.id ?
        await deleteEventData(data.id) : (console.log("error"))
      getEventData(setEventList);
    } catch (error) {
      alert("Event could not be deleted.");
    }
  };

  return (
    <>
      {!isModalOpen && (
        <div key={data.id} className="card-container  col-12 col-sm-6 col-md-4">
          <div className="card">
            <img src={`http://localhost:3001/images/${data.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5>{data.startdatum.split('-').reverse().join('.')} - {data.enddatum.split('-').reverse().join('.')}</h5>
              <h6 className="card-title">{data.name}</h6>
              <p>{data.adresse}</p>
              <p>{data.plz}  {data.ort}</p>
              <div className="update-card-button-container">
                <div>
                  <a href={`https://${data.link}`}>More...</a>
                </div>
                {role ? (
                  <div>
                    <button ><img src={Update} onClick={handleUpdateEvent} alt="update" /></button>
                    <button onClick={handleDeleteEvent}><img src={Delete} alt="delete" /></button>
                  </div>
                ) : (<div></div>)}
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-add-event-open">
          <UpdateEvent closeModal={closeModal} setEventList={setEventList} clickEvent={clickEvent} />
        </div>
      )}
    </>
  );
}

export default EventCard;
