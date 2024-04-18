import React from "react";
import { EventType } from "../../type/dataType";

const EventCard: React.FC<EventType> = ({ data}) => { 
  return (
    <div key={data.id} className="card-container  col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <div className="event-img-container">
          <img src={`http://localhost:3001/images/${data.image}`} className="event-img" alt="..." />
        </div>
        <div className="card-body">
          <h5>{data.startdatum.split('-').reverse().join('.')} - {data.enddatum.split('-').reverse().join('.')}</h5>
          <h6 className="card-title">{data.name}</h6>
          <p>{data.adresse}</p>
          <p>{data.plz}  {data.ort}</p>
          <div className="update-card-button-container">
            <div>
              <a href={`https://${data.link}`}>More...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
