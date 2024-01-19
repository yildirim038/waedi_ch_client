import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { EventFormState, addEventType } from "../../type/dataType";
import { getEventData, updateEvent } from "../../services/eventService"; 

const UpdateEvent: React.FC<addEventType> = ({ closeModal, setEventList,clickEvent }) => {
  const eventType = ["Party","Jubiläum","Kino","Konferenz","Chilbi","Seminare"]
  const [values, setValue] = useState<EventFormState>({
    eventType:clickEvent.type,
    name: clickEvent.name,
    startdatum: clickEvent.startdatum,
    enddatum:clickEvent.enddatum,
    adresse: clickEvent.adresse,
    plz: clickEvent.plz,
    ort: clickEvent.ort,
    link:clickEvent.link,
    image: null,
    text: clickEvent.text,
  });

  const navigate = useNavigate();

  const handleUpdateEvent = async () => {
    try {
      const formData = new FormData();
      formData.append('eventType', values.eventType);
      formData.append('name', values.name);
      formData.append('startdatum', values.startdatum);
      formData.append('enddatum', values.enddatum);
      formData.append('adresse', values.adresse);
      formData.append('plz', values.plz.toString());
      formData.append('ort', values.ort);
      formData.append('link', values.link);
      formData.append('text', values.text);
      formData.append('image', values.image || ''); 
  
      await updateEvent(formData,clickEvent.id);
      navigate('/events');
      getEventData(setEventList);
      closeModal();
    } catch (error) {
      alert("Event could not be updated.");
    }
  };
   return (
    <div className='form-main-container'>
      <div className='add-event-container'>
        <h2>Update Event</h2>
        <div className="add-event-input-container">
        <div className='event-input-element'>
            <label>Event Type</label>
            <select value={values.eventType} onChange={e => setValue({ ...values, eventType: e.target.value })}>
            <option value="" disabled>Select a type</option>
              {eventType.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
         </div>
          <div className='event-input-element'>
            <label>Name:</label>
            <input type="text" value={values.name} onChange={e => setValue({ ...values, name: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Start Date:</label>
            <input type="date" value={values.startdatum} onChange={e => setValue({ ...values, startdatum: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>End Date:</label>
            <input type="date" value={values.enddatum} onChange={e => setValue({ ...values, enddatum: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Adresse:</label>
            <input type="text" value={values.adresse} onChange={e => setValue({ ...values, adresse: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>PLZ:</label>
            <input type="number" value={values.plz} onChange={e => setValue({ ...values, plz: parseInt(e.target.value, 10) })} />
          </div>
          <div className='event-input-element'>
            <label>Ort:</label>
            <input type="text" value={values.ort} onChange={e => setValue({ ...values, ort: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Link:</label>
            <input type="text" value={values.link} onChange={e => setValue({ ...values, link: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Image:</label>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setValue({
                    ...values,
                    image: e.target.files[0],
                  });
                }
              }}
            />
          </div>
          <div className='event-input-element'>
            <label>Text:</label>
            <input type="text" value={values.text} onChange={e => setValue({ ...values, text: e.target.value })} />
          </div>
          <div className='event-input-element'></div>
          <button className='form-button' onClick={handleUpdateEvent}>Update Event</button>
          <button className='form-button form-close-button' onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateEvent;
