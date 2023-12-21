  import React, { useEffect, useState } from "react";
  import plusIcon from '../img/plus-svgrepo-com 1.png';
  import './Events.css';
  import AddEvent from "../components/Event/AddEvent";
  import { getEventData } from "../services/eventService";
  import EventCard from "../components/Event/EventCard";
  import HeaderComponent from "../components/Header/HeaderComponents";

  const Events: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventList, setEventList] = useState([]);
  
  
    useEffect(() => {
      getEventData(setEventList);
    }, []);
  
    console.log(eventList);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className="events-main-container">
        <HeaderComponent/>
        <div className="events-container">
        {!isModalOpen && (
          <><div className="row">
          {eventList.map((event,index) => (
            <EventCard key={index} data={event} setEventList={setEventList}/>
          ))}
        </div>
        <button onClick={openModal} className="event-plus-icon">
          <img src={plusIcon} alt="add Event" />
        </button></>
        )}
          {isModalOpen && (
            <div className="modal-add-event-open">
                <AddEvent closeModal={closeModal} setEventList={setEventList} />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Events;
  