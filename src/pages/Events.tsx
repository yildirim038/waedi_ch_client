import React, { useEffect, useState } from "react";
import plusIcon from '../img/plus-svgrepo-com 1.png';
import './Events.css';
import AddEvent from "../components/Event/AddEvent";
import { getEventData } from "../services/eventService";
import EventCard from "../components/Event/EventCard";
import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import UpdateEvent from "../components/Event/UpdateEvent";
import { EventFormState } from "../type/dataType";
import { pageAdverts, token } from "../untils/untils";
import { AdvertUpdateType } from "../type/advertType";
import { getAdvertData } from "../services/advertService";

const Events: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventList, setEventList] = useState<EventFormState[]>([]);
  const [isUpdateModalOpen, setUpdateIsModalOpen] = useState(false);
  const [clickEvent, setClickEvent] = useState({});
  const [isClick, setIsClick] = useState(false);
  const [isClickDay, setIsClickDay] = useState(false);
  const [controler, setControler] = useState(false)
  const [advertData, setAdvertData] = useState<AdvertUpdateType[]>([]);

  useEffect(() => {
    getEventData(setEventList);
    getAdvertData(setAdvertData)
  }, [])
  
  const eventAdverts = advertData.filter(advert => advert.advertPage === "events" && advert.publish);
  const adverts = pageAdverts(eventAdverts);
  const places: string[] = [];
  const dates : string[] = [];
  const type  : string[] = [];
  const openModal        = () => setIsModalOpen(true);
  const ortClick         = () => setIsClick(!isClick);
  const dayClick         = () => setIsClickDay (!isClickDay);
  const closeModal       = () => setIsModalOpen(false);
  const closeUpdateModal = () => setUpdateIsModalOpen(false);
  const role             = JSON.parse(token).role=== "admin";

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
  
  eventList.forEach(event => {
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
                {type.map((type,index) => (
                <li key={index}><button className="event-side-menu-button" onClick={()=> handelTypeClick(type)}>{type}</button></li>
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
              {role && (
                  <button onClick={openModal} className="event-plus-icon">
                    <img src={plusIcon} alt="add Event" />
                  </button>
              )}
            </div>
          </div>
        )}
        {isModalOpen && (
          <div className="modal-add-event-open">
              <AddEvent closeModal={closeModal} setEventList={setEventList} />
          </div>
        )}
        </div>
        <div className="row my-5">
            {adverts}
        </div>
        <Footer/>
      </>
      )}
      {isUpdateModalOpen && (<UpdateEvent closeModal={closeUpdateModal} setEventList={setEventList} clickEvent={clickEvent}/>)}
    </div>
  );
};
export default Events;