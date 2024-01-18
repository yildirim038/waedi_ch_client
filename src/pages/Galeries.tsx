import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from "react";
import plusIcon from '../img/plus-svgrepo-com 1.png';
import AddGalleryForm from "../components/Gallery/AddGalleryForm";
import { addGallery, getGalleryData } from "../services/galleryService";
import './Gallery.css'
const Galeries: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [ galleryList ,setGalleryList] = useState([])
   const [addGallerys, setAddGallery] = useState(false)
   const [newGallery ,setNewGallery] = useState([])
   
   useEffect(() =>{
      getGalleryData(setGalleryList);
   },[])
   
   const openModal = async ()  => {
      await addGallery({name:""})
      setIsModalOpen(true);
    };
    const close = () =>{
      setAddGallery(false)
      setIsModalOpen(false)
    }
    const addGalleryControler = () => {
      setAddGallery(true)
    }
   console.log(galleryList)
    return (
     <div>
      {!isModalOpen && (
         <div>
            <HeaderComponent/>
            <div>Gallerie</div>
            <button onClick={openModal} className="event-plus-icon">
                  <img src={plusIcon} alt="add Event" />
               </button>
            <Footer/>
         </div>
      )}
      {isModalOpen &&(
         <>
         {!addGallerys && (
            
            <AddGalleryForm setGalleryList={setNewGallery} addGalleryControler={addGalleryControler}  />
         )}          
            
         </>
      )}
     </div>
    );
  };
  
  export default Galeries;