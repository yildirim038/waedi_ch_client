import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import './Directory.css'
import AddDirectory from "../components/Directory/AddDirectory";
import plusIcon from '../img/plus-svgrepo-com 1.png';
import {  useEffect, useState } from "react";
import { AdvertUpdateType } from "../type/advertType";
import { pageAdverts } from "../untils/untils";
import { getAdvertData } from "../services/advertService";

const Directory: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);    
  const [advertData, setAdvertData] = useState<AdvertUpdateType[]>([]);

  useEffect(()=>{
    getAdvertData(setAdvertData)
  },[])

  const directoryAdverts = advertData.filter(advert => advert.advertPage === "directory" && advert.publish);
  const adverts = pageAdverts(directoryAdverts);

  const openModal  = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
 
    return (
    <div>
         {!isModalOpen &&
         <div>
            <HeaderComponent/>
            <div className="container-fluid">
            <div className="row">
                <div className="directory-side-bar-container col-6 col-sm-4 col-md-3">
                    <h3>Verzeichnisse</h3>
                    <ul>
                        <li><a href="/club">Verein</a></li>
                        <li><a href="/company">Geschäfte</a></li>
                        <li><a href="/kultur">Kultur</a></li>
                        <li><a href="/public">Öffentliches</a></li>
                    </ul>
                </div>
                <div className="directory-text col-6 col-sm-8 col-md-9">
                    <p>Suchen Sie einen Handwerker, ein bestimmtes Geschäft oder einen Verein?
                       Brauchen Sie ein bestimmtes Produkt oder benötigen Sie eine Dienstleistung?
                       Hier finden Sie für jeden Belang die passende Lösung </p>
                    <p> Viel Spass beim Stöbern durch die Listen!</p>
                    <div className="directory-plus-icon">
                        <button onClick={openModal} className="event-plus-icon">
                            <img src={plusIcon} alt="add" />
                        </button>
                    </div>
                 </div>
              </div>
            </div>
            <div className="row my-3">{adverts}</div>
            <Footer/>
        </div>
        }     
        {isModalOpen && (
            <div className="modal-add-event-open">
                <AddDirectory closeModal={closeModal}/>
            </div>
          )}
    </div>
    );
}; 
export default Directory;     