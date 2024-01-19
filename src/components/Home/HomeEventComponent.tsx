import React, { useEffect, useState } from 'react';
import { getEventData } from '../../services/eventService';
import { EventFormState } from '../../type/dataType';
import { useNavigate } from 'react-router-dom';

const HomeEventComponent: React.FC = () => {
  const [eventList, setEventList] = useState<EventFormState[]>([]);
  const [selectedTab, setSelectedTab] = useState<'today' | 'tomorrow' | 'nextDays'>('today');

  useEffect(() => {
    getEventData(setEventList);
  }, []);

  const now = new Date();
  const just = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
  const today   : EventFormState[] = [];
  const tomorrow: EventFormState[] = [];
  const nextDays: EventFormState[] = [];

  eventList.forEach(event => {
    const eventStart = +event.startdatum.split('-').join('');
    const eventEnd   = +event.enddatum.split('-').join('');
    const justNumber = +just.split('-').join('');

    if (eventStart === justNumber || (eventEnd >= justNumber && eventStart < justNumber)) {
      today.length < 3 && today.push(event);
    } else if (eventStart === justNumber + 1) {
      tomorrow.length < 3 && tomorrow.push(event);
    } else if (eventStart > justNumber + 1) {
      nextDays.length < 3 && nextDays.push(event);
    }
  });

  const handleTabChange = (tab: 'today' | 'tomorrow' | 'nextDays') => setSelectedTab(tab);

  const navigate = useNavigate();
  const goEvents = () => navigate('/events');

  const homeEventList = selectedTab === 'today' ? today : selectedTab === 'tomorrow' ? tomorrow : nextDays;

  return (
    <div className='home-events-container'>
      <div className='row'>
        <div className='col-12 col-sm-3 col-md-2'>
          <ul>
            <li className={selectedTab === 'today' ? 'activ' : ''}><button className='home-event-button' onClick={() => handleTabChange('today')}>Heute ({today.length})</button></li>
            <li className={selectedTab === 'tomorrow' ? 'activ' : ''}><button className='home-event-button' onClick={() => handleTabChange('tomorrow')}>Morgen ({tomorrow.length})</button></li>
            <li className={selectedTab === 'nextDays' ? 'activ' : ''}><button className='home-event-button' onClick={() => handleTabChange('nextDays')}>Nachste Tage ({nextDays.length})</button></li>
          </ul>
        </div>
        <div className='col-12 col-sm-9 col-md-10'>
          <button className='all-event-button' onClick={goEvents}>All Events</button>
          <h2 className='home-header'>Event</h2>
          <section className='row'>
            {!homeEventList.length && (
              <h4>Leider finden keine Events statt. </h4>
            )}
            {homeEventList.map((event) => (
              <div key={event.id} className='home-event-card col-12 col-sm-6 col-md-3'>
                <div className='card'>
                  <img src={`http://localhost:3001/images/${event.image}`} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h5>{event.startdatum.split('-').reverse().join('.')} - {event.enddatum.split('-').reverse().join('.')}</h5>
                    <h6 className='card-title'>{event.name}</h6>
                    <p>{event.adresse}</p>
                    <p>{event.plz} {event.ort}</p>
                    <div className='update-card-button-container'>
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
