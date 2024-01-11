import React, { useEffect, useState } from 'react';
import { getEventData } from '../../services/eventService';
import { EventFormState } from '../../type/dataType';
import { useNavigate } from 'react-router-dom';

const HomeEventComponent: React.FC = () => {
  const [eventList, setEventList] = useState<EventFormState[]>([]);
  const [isToday, setIsToday] = useState(true);
  const [isTomorrow, setIsTomorrow] = useState(false);
  const [isNextDays, setIsNextDays] = useState(false);

  useEffect(() => {
    getEventData(setEventList);
  }, []);
  const now = new Date()
  let month:number|string = now.getMonth()+1
  if(month<10){
    month = "0"+month;
  }
  const just = now.getFullYear()+"-"+month+"-"+now.getDate()
  const today:EventFormState[] = []
  let todayEvent = 0
  const tomorrow:EventFormState[] = []
  let morgenEvent = 0
  const nextDays:EventFormState[] = []
  let nextDaysEvent = 0

eventList.forEach(event => {
 if(event.startdatum === just){
  todayEvent++
  if(today.length<3 ){
    today.push(event)
  }
 }else if(+event.enddatum.split("-").join("") >= +just.split("-").join("")&&+event.startdatum.split("-").join("") < +just.split("-").join("")){
  if(today.length<3 ){
    todayEvent++
    today.push(event)
  }
 }else if (+event.startdatum.split("-").join("") === (+just.split("-").join(""))+1){
    morgenEvent++
  if(tomorrow.length<3 ){

    tomorrow.push(event)
  }

 }else if (+event.startdatum.split("-").join("") > (+just.split("-").join(""))+1){
  nextDaysEvent++
  if(nextDays.length<3){
    nextDays.push(event)
  }
 }
})

function handleToday () {
  setIsToday(true)
  setIsTomorrow(false)
  setIsNextDays(false)
}

function handleTomorrow () {
  setIsToday(false)
  setIsTomorrow(true)
  setIsNextDays(false)
}

function handleNextDays () {
  setIsToday(false)
  setIsTomorrow(false)
  setIsNextDays(true)
}



let homeEventList:EventFormState[] = []

if(isToday) homeEventList = today;
if(isTomorrow) homeEventList = tomorrow;
if(isNextDays) homeEventList = nextDays;

const navigate = useNavigate();
const goEvents = () => navigate('/events');

return (
  <div className='home-events-container'>
    <div className='row' >
      <div className='col-12 col-sm-3 col-md-2' >
        <ul>
          <li className={isToday ? "activ" :""}><button className='home-event-button' onClick={handleToday}>Heute ({todayEvent})</button></li>
          <li className={isTomorrow ? "activ" :""}><button className='home-event-button' onClick={handleTomorrow}>Morgen ({morgenEvent})</button></li>
          <li className={isNextDays ? "activ" :""}><button className='home-event-button'onClick={handleNextDays}>Nachste Tage ({nextDaysEvent})</button></li>
        </ul>
      </div>
      <div className='col-12 col-sm-9 col-md-10'>
        <button className='all-event-button' onClick={goEvents} >All Events</button> 
        <h2 className='home-header'>Event</h2>
      <section className="row ">
      {!homeEventList.length &&(
          <h4>Leider finden  keine Events statt. </h4>
        )}
        {homeEventList.map((event) => (
          <div key={event.id} className="home-event-card col-12 col-sm-6 col-md-3">
          <div className="card">
            <img src={`http://localhost:3001/images/${event.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5>{event.startdatum.split('-').reverse().join('.')} - {event.enddatum.split('-').reverse().join('.')}</h5>
              <h6 className="card-title">{event.name}</h6>
              <p>{event.adresse}</p>
              <p>{event.plz}  {event.ort}</p>
              <div className="update-card-button-container">
                <div>
                  <a href='/events'>More...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
               
             
      </section> 
 
      </div>

           
    </div>
    
  </div>
);
};

export default HomeEventComponent;