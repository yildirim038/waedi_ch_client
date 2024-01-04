import React, { useEffect, useState } from 'react';
import { getEventData } from '../../services/eventService';
import { EventFormState } from '../../type/dataType';

const HomeEventComponent: React.FC = () => {
  const [eventList, setEventList] = useState<EventFormState[]>([]);
 
  useEffect(() => {
    getEventData(setEventList);
  }, []);

  let homeEventList = eventList.slice(0, 3);

  return (
    <div className='event-main-container'>
      <section className="row">
        <h2>Event</h2>
        {homeEventList.map((event) => (
          <div key={event.id} className="card-container  col-12 col-sm-6 col-md-4">
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
  );
};

export default HomeEventComponent;