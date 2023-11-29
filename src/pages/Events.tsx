import Header from "../components/Header";
import { isAuthenticated } from '../type/dataType';
import './Events.css'
const Events: React.FC<isAuthenticated> = ({ isAuthenticated, onLogout })=> {
    return (
    <div className="events-main-container">
      <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <div className="events-container row">
      <div className="card-container  col-12 col-sm-6 col-md-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
      </div>
      <div className="card-container col-12 col-sm-6 col-md-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
      </div>  <div className="card-container col-12 col-sm-6 col-md-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
      </div>  <div className="card-container col-12 col-sm-6 col-md-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
      </div>
      </div>
    </div>
    );
  };
  
  export default Events;