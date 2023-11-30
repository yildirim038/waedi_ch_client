  import React, { useEffect, useState } from "react";
  import Header from "../components/Header/Header";
  import plusIcon from '../img/plus-svgrepo-com 1.png';
  import './Events.css';
  import AddEvent from "../components/Event/AddEvent";
  import { getEventData } from "../services/eventService";
  import EventCard from "../components/Event/EventCard";
  import { useAuth } from '../auth/AuthContext';
  import { logout } from "../services/authService";
  import { addEvent } from "../services/eventService";
  const Events: React.FC = () => {
    const { authInfo, setAuthInfo } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventList, setEventList] = useState([]);
  
    useEffect(() => {
      getEventData(setEventList);
    }, []);
  
    console.log(eventList);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleLogout = async () => {
      // Kullanıcı çıkış yaptığında bu fonksiyonu çağırarak auth durumunu güncelleyebilirsiniz.
      await logout();
      setAuthInfo({
        isAuthenticated: false,
        role: '',
      });
    };
  
    return (
      <div className="events-main-container">
        <Header isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout} />
        <div className="events-container">
          <div className="row">
            {eventList.map((event,index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
          <button onClick={openModal} className="event-plus-icon">
            <img src={plusIcon} alt="add Event" />
          </button>
          {isModalOpen && (
            <div className="modal-add-event-open">
                <AddEvent closeModal={closeModal} addEvent={addEvent} setEventList={setEventList} />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Events;
  