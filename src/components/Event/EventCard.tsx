import React from "react";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
//import { EventFormState } from "../../type/dataType";

const EventCard : React.FC<any> = (event) => {
  let  role = false

    if(localStorage.getItem("role")==="admin"){
      role = true   
     }
      else {
      role = false
    } 
    return(
        <div key={event.event.id} className="card-container  col-12 col-sm-6 col-md-4">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{event.event.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="update-card-button-container">
                <div>
                  <a href="/events">Go Web Page</a>
                </div>
              
                {role ? (
                  <div>
                        <button ><img src={Update} alt="update" /></button>
                        <button><img src={Delete} alt="delete" /></button>
                  </div>                
                ) 
              : (<div></div>
              )}
              </div>
          </div>
        </div>
      </div>
    )
}

export default EventCard