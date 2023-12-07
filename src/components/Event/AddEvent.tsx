import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { EventFormState } from "../../type/dataType";
import { Dispatch, SetStateAction } from 'react';
import { addEvent, getEventData } from "../../services/eventService"; 

type addEventType = {
  closeModal: () => void;
  setEventList: Dispatch<SetStateAction<any>>;
};

const AddEvent: React.FC<addEventType> = ({ closeModal, setEventList }) => {
  const [values, setValue] = useState<EventFormState>({
    name: '',
    startdatum: '',
    enddatum: '',
    adresse: 'Schmidgass 2',
    plz: 8820,
    ort: 'Wädenswil',
    link: '',
    image: null,
    text: '',
  });

  const navigate = useNavigate();

  const handleAddEvent = async () => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('startdatum', values.startdatum);
      formData.append('enddatum', values.enddatum);
      formData.append('adresse', values.adresse);
      formData.append('plz', values.plz.toString());
      formData.append('ort', values.ort);
      formData.append('link', values.link);
      formData.append('text', values.text);
      formData.append('image', values.image || ''); // Pass an empty string if no image is provided
  
      await addEvent(formData); // Do not convert to EventFormState, directly use FormData
      navigate('/events');
      getEventData(setEventList);
      closeModal();
    } catch (error) {
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
          <button className='form-button' onClick={handleAddEvent}>Add Event</button>
          <button className='form-button form-close-button' onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
