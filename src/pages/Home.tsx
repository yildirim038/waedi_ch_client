import React,{useEffect,useState} from 'react';
import Header from '../components/Header/Header';
import { useTranslation } from 'react-i18next';
import banner_foto from '../img/img_home.png';
import { useAuth } from '../auth/AuthContext';
import { logout } from '../services/authService';
import './Home.css';
import { getEventData } from '../services/eventService';
import EventCard from '../components/Event/EventCard';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { authInfo, setAuthInfo } = useAuth();
  const [eventList, setEventList] = useState([]);
  
  useEffect(() => {
    getEventData(setEventList);
  }, []);


  let homeEventList = eventList.slice(0,3)
  console.log('homeEventList:',homeEventList)

  const handleSomeAction = () => {
     setAuthInfo({ isAuthenticated: true, role: 'newRole' });
  };
  const handleLogout = async () => {
    await logout();
    setAuthInfo({
      isAuthenticated: false,
      role: '',
    });
  };
  return (
    <div>
      <Header handleSomeAction={handleSomeAction} isAuthenticated={authInfo.isAuthenticated} onLogout={handleLogout} />
      <div className='main-container'>
        <img className='main-img' src={banner_foto} alt="wädeswil_foto" />
        <div className='main-title'>
          <h1> {t('title_on')}</h1>
          <h2> {t('title_under')}</h2>
        </div>
      </div>
      <div className='event-main-container'>
      <section className="row">
            {homeEventList.map((event,index) => (
              <EventCard key={index} event={event} />
            ))}
          </section>
      </div>
    </div>
  );
};
export default Home;