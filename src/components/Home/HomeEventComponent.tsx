import React, { useEffect, useState } from 'react';
import { getEventData } from '../../services/eventService';
import EventCard from '../Event/EventCard';

const HomeEventComponent: React.FC = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    getEventData(setEventList);
  }, []);

  let homeEventList = eventList.slice(0, 3);

  return (
    <div className='event-main-container'>
      <section className="row">
        <h2>Event</h2>
        {homeEventList.map((event, index) => (
          <EventCard key={index} data={event} setEventList={setEventList} />
        ))}
      </section>
    </div>
  );
};

export default HomeEventComponent;