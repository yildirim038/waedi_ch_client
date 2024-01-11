import React, { MouseEventHandler, useEffect, useState } from "react";
import plusIcon from '../img/plus-svgrepo-com 1.png';
import './Events.css';
import AddEvent from "../components/Event/AddEvent";
import { getEventData } from "../services/eventService";
import EventCard from "../components/Event/EventCard";
import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import UpdateEvent from "../components/Event/UpdateEvent";
import { EventFormState } from "../type/dataType";

const Events: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventList, setEventList] = useState<EventFormState[]>([]);
  const [isUpdateModalOpen, setUpdateIsModalOpen] = useState(false);
  const [clickEvent, setClickEvent] = useState({});
  const [isClick, setIsClick] = useState(false);
  const [isClickDay, setIsClickDay] = useState(false);
  const [controler, setControler] = useState(false)

  useEffect(() => {
    getEventData(setEventList);
  }, [])

  const places:string[]= [];
  const dates:string[]=[];
  const type:string[]=[];
  
  const handelPlaceClick = (clickedPlace: string) => {
    const list = eventList.filter(event => event.ort.toLowerCase()===clickedPlace.toLowerCase())
    setEventList(list)
    setControler(true)
  };
  const handelTypeClick = (clickedType: string) => {
    const list = eventList.filter(event => event.eventType.toLowerCase()===clickedType.toLowerCase())
    setEventList(list)
    setControler(true)
  };
  const handelDateClick = (clickedDate: string) => {
    const list = eventList.filter(event => event.startdatum.toLowerCase()===clickedDate.split('-').reverse().join('-').toLowerCase())
    setEventList(list)
    setControler(true)
  };


  const returnAllEvents = () => {
    getEventData(setEventList);
    setControler(false)
  }
  
  eventList.map(event => {
    if(!places.includes(event.ort)){
      places.push(event.ort)
    }
    if(!dates.includes(event.startdatum.split('-').reverse().join('-'))){
      dates.push(event.startdatum.split('-').reverse().join('-'))
    }
    if(!type.includes(event.eventType)){
      type.push(event.eventType)
    }
  })

  console.log(places);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const ortClick = () =>  {
    setIsClick(!isClick)
  }

  const dayClick = () => {
    setIsClickDay (!isClickDay)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeUpdateModal = () => {
    setUpdateIsModalOpen(false);
  };
  return (
    <div className="events-main-container">
          {!isUpdateModalOpen && (
          <>
            <HeaderComponent/>
      <div className="events-container">
      
      {!isModalOpen && (
        <div className='row' >
        <div className='col-12 col-sm-3 col-md-2' >
          <ul className="event-side-menu">    
            {type.map(type => (
            <li><button className="event-side-menu-button" onClick={()=> handelTypeClick(type)}>{type}</button></li>
              ))}
            <li>
              <button onClick={ortClick} className={isClick? 'event-side-menu-button up':'event-side-menu-button down' }>Ort</button>
              <div className={isClick? 'open':'close'}>
                {places.map((place,index) => (
                  <button className="event-side-menu-button" onClick={() => handelPlaceClick(place)}  key={index}>{place}</button>
                ))}
              </div>
            </li>
            <li>
            <button className={isClickDay?'event-side-menu-button up':'event-side-menu-button down' } onClick={dayClick}>Start Datum</button>
              <div className={isClickDay? 'open':'close'}>
                {dates.sort().map((day,index) => (
                <button className="event-side-menu-button" onClick={() => handelDateClick(day)}  key={index}>{day}</button>
                ))}
              </div> 
            </li>
            {controler && ( 
              <li><button className="event-side-menu-back-button" onClick={returnAllEvents}>züruck All Events</button></li>
            )}
        
          </ul>
        </div>
        <div className='col-12 col-sm-9 col-md-10' >
          <div className="row">
            {eventList.map((event,index) => (
              <EventCard key={index} data={event} setClickEvent={setClickEvent} setEventList={setEventList} setIsUpdateModalOpen={setUpdateIsModalOpen} isUpdateModalOpen={isUpdateModalOpen}/>
            ))}
          </div>
          <button onClick={openModal} className="event-plus-icon">
            <img src={plusIcon} alt="add Event" />
          </button>
        </div>
      </div>
      )}
        {isModalOpen && (
          <div className="modal-add-event-open">
              <AddEvent closeModal={closeModal} setEventList={setEventList} />
          </div>
        )}
      </div>
      <Footer/>
          </>
          )}
          {isUpdateModalOpen && (
            <>
              <UpdateEvent closeModal={closeUpdateModal} setEventList={setEventList} clickEvent={clickEvent}/>
            </>
          )}
      
    </div>
  );
};

export default Events;
