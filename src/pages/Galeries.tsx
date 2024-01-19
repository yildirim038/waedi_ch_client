import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from "react";
import plusIcon from '../img/plus-svgrepo-com 1.png';
import AddGalleryForm from "../components/Gallery/AddGalleryForm";
import "react-image-gallery/styles/css/image-gallery.css";
import { addGallery, getGalleryData, getImageData } from "../services/galleryService";
import './Gallery.css'
import { Gallery, ImageType, ImagesType } from "../type/galleryType";
import GalleryCard from "../components/Gallery/GalleryCard";

const Galeries: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [ galleryList ,setGalleryList] = useState<Gallery[]>([])
   const [addGallerys, setAddGallery] = useState(false)
   const [imageList, setImageList] = useState<ImageType[]>([]);
   const galleryNames:string[] = []

   galleryList.forEach(gallery => {
      if(!galleryNames.includes(gallery.name)&& gallery.name !== ""){
         galleryNames.push(gallery.name)
      }
      
   })
   console.log(galleryNames)
   useEffect(() =>{
      getGalleryData(setGalleryList);
      getImageData(setImageList);
   },[]) 
  
   
   const openModal = async ()  => {
      await addGallery({name:""})
      setIsModalOpen(true);
    };
    const closeModal = () =>{
      setAddGallery(false)
      setIsModalOpen(false)
    }
    const galleryNumbers: string[] = Array.from(
      new Set(imageList.map((image) => image.photoGalleryId))
    );
  
    const gallerys: ImageType[][] = galleryNumbers.map((galleryNumber) =>
      imageList.filter((image) => image.photoGalleryId === galleryNumber)
    );
  
    const imagesList: ImagesType[][] = gallerys.map((gallery) =>
      gallery.map((image) => ({
        original: `http://localhost:3001/images/${image.image}`,
        thumbnail: `http://localhost:3001/images/${image.image}`
      }))
    );
  
    const addGalleryControler = () => {
      setAddGallery(true)
    }
 
    return (
     <div>
      {!isModalOpen && (
         <div>
            <HeaderComponent/>
            <div className="gallery-container">
                
            {imagesList.reverse().map((images, index) => (
        <div  key={index}>
         <h3 className="gallery-header">{galleryNames[index]}</h3>
         <GalleryCard images={images}/>
        </div>
      ))}
            </div>
         
            <button onClick={openModal} className="event-plus-icon">
                  <img src={plusIcon} alt="add Event" />
               </button>
            <Footer/>
         </div>
      )}
      {isModalOpen &&(
         <>
         {!addGallerys && (
            
            <AddGalleryForm closeModal={closeModal} setGalleryList={setGalleryList} addGalleryControler={addGalleryControler}  />
         )}          
            
         </>
      )}
     </div>
    );
  };
  
  export default Galeries;