import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import './Advert.css'

import plusIcon from '../img/plus-svgrepo-com 1.png';
import {  useEffect, useState } from "react";
import AddAdvert from "../components/Advert/AddAdvert";
import AdvertCard from "../components/Advert/AdvertCard";
import { AdvertType } from "../type/advertType";
import { getAdvertData } from "../services/advertService";
import UpdateAdvert from "../components/Advert/UpdateAdvert";
import { token } from "../untils/untils";

const Advert: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);   
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);  
  const [clickId , setClickId] = useState("")
  const openModal  = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeUpdateModal = () => setIsModalUpdateOpen(false)
  const role = JSON.parse(token).role=== "admin";
  const [advertData, setAdvertData] = useState<AdvertType[]>([]);
  const [data, setData]= useState<AdvertType[]>([]);
  const [controler, setControler]= useState(false);
  
  useEffect(() => {
    getAdvertData(setAdvertData);
  }, []);

  useEffect(() => {
    setData(advertData)
  }, [advertData]);
  
  const pendingAdvert   = advertData.filter(advert => advert.publish === false)
  const publishedAdvert = advertData.filter(advert => advert.publish === true)

  const handelClickPendingAdvert = () => {
    setData(pendingAdvert)
    setControler(true)
  }
  const handelClickPublishedAdvert = () => {
    setData(publishedAdvert)
    setControler(true)
  }
  const returnAllAdvert = () => {
    setData(advertData)
    setControler(false)
  }

console.group(advertData)
    return (
    <div>
         {!isModalOpen && !isModalUpdateOpen &&
         <div>
            <HeaderComponent/>
            <div className="container-fluid">
            
            <h2 className="text-center">Werbung</h2>
            {role && (
                <div className="row">
                <div className=" col-6 col-sm-4 col-md-3">
                    <ul className="event-side-menu">
                        <li><button className="event-side-menu-button" onClick={handelClickPendingAdvert} >Warte Liste</button></li>
                        <li><button className="event-side-menu-button" onClick={handelClickPublishedAdvert} >Open</button></li>
                        {controler && ( 
                        <li><button className="event-side-menu-back-button" onClick={returnAllAdvert}>züruck All Events</button></li>
                       )}
                    </ul>
                </div>
                 <div className="directory-text col-6 col-sm-8 col-md-9">
                 <AdvertCard advertData={data} setAdvertData={setAdvertData} setIsModalUpdateOpen={setIsModalUpdateOpen} setClickId={setClickId}/>
                 </div> 
                 <div className="directory-plus-icon text-center">
                     <button onClick={openModal} className="event-plus-icon">
                         <img src={plusIcon} alt="add" />
                     </button>
                 </div>
              </div>
            )}
            {!role && (
                <div className="directory-text">
                 <p>Waedi.ch ist das grosse Infoportal für Wädenswil und Umgebung. Das Wichtigste darauf ist unser Eventkalender. Damit sind Sie über alle wichtigen Veranstaltungen in der Region informiert. Sie finden aber auch alle Firmen, Clubs und Vereine sowie weitere Organisationen der Region in unserem Verzeichnis. Daneben können Sie Interviews von Wädenswilern lesen, können Bilder in unserer Galerie betrachten oder gleich selber welche hochladen, Bilder von Live-Webcams sehen und anderes mehr. Indem wir die Inhalte anregend und aktuell gestalten, können wir eine konstant hohe, stets steigende Besucherzahl verzeichnen. Hier finden Sie die Möglichkeit, Ihre eigene Firma zu präsentieren und neue Kunden zu gewinnen, indem Sie auf unserer Seite für Ihre Produkte und Dienstleistungen werben.
                     Senden Sie uns Ihre Anfrage über das Kontaktformular oder schreiben Sie uns ein E-Mail an info@waedi.ch. Wir freuen uns auf Sie!</p>
                 <div className="directory-plus-icon text-center">
                     <button onClick={openModal} className="event-plus-icon">
                         <img src={plusIcon} alt="add" />
                     </button>
                 </div>
                 </div>
                )}
            </div>
          
            <Footer/>
        </div>
        }     
        {isModalOpen && (
            <div className="modal-add-event-open">
                <AddAdvert closeModal={closeModal} setAdvertData={setAdvertData}/>
            </div>
          )}
          {
            isModalUpdateOpen && (
              <UpdateAdvert clickId = {clickId} closeModal={closeUpdateModal} setAdvertData={setAdvertData} returnAllAdvert={returnAllAdvert}/>
            )
          }
    </div>
    );
}; 
export default Advert;     