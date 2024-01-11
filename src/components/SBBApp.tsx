import React, { useEffect, useState } from 'react';
import sbbLogo from '../img/Extension.svg'
import './SBBApp.css'

const SBBApp = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const isArrival = false

  useEffect(() => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth();
    const currentMonth = String(mm + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const hh = String(today.getHours()).padStart(2, '0');
    const min = String(today.getMinutes()).padStart(2, '0');

    const formattedDate = `${dd}.${currentMonth}.${yyyy}`;
    const formattedTime = `${hh}:${min}`;

    setDate(formattedDate);
    setTime(formattedTime);
  }, []);

  const callSBB = () => {
    const arrival = isArrival ? 'true' : 'false';
    const url = `https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?von=${from}&nach=${to}&datum=${date}&zeit=${time}&an=${arrival}&suche=true`;
    window.open(url, '_blank');
  };

  return (
   <div className='col-12 col-md-8'>
    <img className="sbb-img" alt="sbb logo" src={sbbLogo}/>
      <form onSubmit={callSBB} id="sbbapp">
        {
          <div>
              <div className='sbb-form-container ms-2'>
                <div className='sbb-form-label-container'>
                  <label className="sbb-form-label">Von:</label>
                  <input id="from" type="text" name="from" placeholder="Ort" 
                      className="sbb-form-input" onChange={e => setFrom(e.target.value)}/>
                </div>
                <div className='sbb-form-label-container ms-2'>
                  <label className="sbb-form-label">Nach:</label>
                    <input id="to" type="text" name="to" className="sbb-form-input" 
                        onChange={e => setTo(e.target.value)}/>
                </div>      
              </div>
                <div className='sbb-form-container ms-2'>
                  <div className='sbb-form-label-container'>
                    <label className="sbb-form-label">Datum:</label>
                    <input id="date" type="date" name="date"
                        className="sbb-form-input" onChange={e => setDate(e.target.value)} />
                  </div>
                  <div className='sbb-form-label-container'>
                    <label className="sbb-form-label">Zeit:</label>
                    <input id="time" type="time" name="time"  
                      className="sbb-form-input" onChange={e => setTime(e.target.value)} />
                  </div>      
                </div>
                <div className="sbb-form-container ">
                  <div>
                    <input type="radio" value="false" name="isArrival" checked id="departure" className='ms-2'/>
                    <label htmlFor="departure" className="sbb-form-label-abfahrt ms-2">Abfahrt</label>
                    <input type="radio" value="true" name="isArrival" id="arrival" className="is_arrival ms-2"/>
                    <label htmlFor="arrival" className='ms-2'>Ankunft</label>
                  </div>     
                </div>
                <div className="sbb-form-container ms-2">
                  <div>
                    <input type="submit" value="Verbindung suchen" id="search--sbb" 
                    className='sbb-search button'/>
                  </div>      
            </div>
          </div>    
        }
      </form>
    </div>
  );
};

export default SBBApp;
