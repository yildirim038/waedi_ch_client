import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { EventFormState } from "../../type/dataType";
import { Dispatch, SetStateAction } from 'react';
import { getEventData } from "../../services/eventService";
type addEventType = {
    closeModal: () => void;
    addEvent:(data:EventFormState) => Promise<boolean>;
    setEventList: Dispatch<SetStateAction<any>>;
}
  
const AddEvent: React.FC<addEventType> = ({closeModal,addEvent,setEventList}) => {
  const [values, setValue] = useState<EventFormState>({
    name: '',
    startdatum: "",
    enddatum: "",
    adresse: '',
    plz: 8850,
    ort: '',
    link: '',
    image: ''
  });

  const [error, setError] = useState<any>(null);
  const navigate = useNavigate();

  const handleAddEvent = async () => {
    try {
      await addEvent(values);
      setError(null);
      navigate('/events');
      getEventData(setEventList);
      closeModal()
    } catch (error) {
      setError(error);
      alert("Event could not be added.");
    }
  };

  return (
    <div className='form-main-container'>
      <div className='add-event-container'>
        <h2>Add Event</h2>
        <div className="add-event-input-container">
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
          <input type="text" value={values.image} onChange={e => setValue({ ...values, image: e.target.value })} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className='form-button' onClick={handleAddEvent}>Add Event</button>
        <button className='form-button form-close-button' onClick={closeModal}>Close</button>      
        </div>
       
      </div>
    </div>
  );
}

export default AddEvent;
