import React from "react";
//import { EventFormState } from "../../type/dataType";

const EventCard : React.FC<any> = (event) => {
    return(
        <div key={event.event.id} className="card-container  col-12 col-sm-6 col-md-4">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{event.event.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/events" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
}

export default EventCard