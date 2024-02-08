import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/Header/HeaderComponents";
import Footer from '../components/Footer/Footer'
import plusIcon from '../img/plus-svgrepo-com 1.png';
import AddGalleryForm from "../components/Gallery/AddGalleryForm";
import "react-image-gallery/styles/css/image-gallery.css";
import { addGallery, deleteGalleryData, getGalleryData, getGalleryDataById, getImageData } from "../services/galleryService";
import './Gallery.css';
import Update from '../img/arrow 5.png';
import Delete from '../img/bin 6.png';
import { GalleryType, ImageType, ImagesType, GalleryDataType, ImgType } from "../type/galleryType";
import GalleryCard from "../components/Gallery/GalleryCard";
import UpdateGalleryForm from "../components/Gallery/UpdateGalleryForm";
import { token } from "../untils/untils";

const Galeries: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [galleryList, setGalleryList] = useState<GalleryType[]>([])
   const [addGallerys, setAddGallery] = useState(false)
   const [imageList, setImageList] = useState<ImageType[]>([]);
   const [updateModalOpen, setUpadateModalOpen] = useState(false)
   const [clickedGallery, setClickedGallery] = useState<GalleryType>({
    id: "",
    name: "",
    description: "",
  });
   const galleryNames: string[] = []
   const role = JSON.parse(token).role=== "admin";
   galleryList.forEach(gallery => {
      if (!galleryNames.includes(gallery.name) && gallery.name !== "") {
         galleryNames.push(gallery.name)
      }
   })

   useEffect(() => {
      getGalleryData(setGalleryList);
      getImageData(setImageList);
   }, [])

   const galleryAllData: GalleryDataType[] = galleryList.map(gallery => {
      const images: ImgType[] = imageList.filter(image => image.photoGalleryId === gallery.id)
      const newImages: ImagesType[] = images.map(image => ({
         original: `http://localhost:3001/images/${image.image}`,
         thumbnail: `http://localhost:3001/images/${image.image}`
      }))
      return { ...gallery, images, newImages };
   });

   const openModal = async () => {
      await addGallery({ name: "" })
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setAddGallery(false)
      setIsModalOpen(false)
   }

   const updateOpenModal = () => setUpadateModalOpen(true)
   const updateCloseModal = () => setUpadateModalOpen(false)

   const handleDeleteGallery = async (id: string) => {
      try {
         await deleteGalleryData(id)
         getGalleryData(setGalleryList);
      } catch (error) {
         alert("Gallery could not be deleted.");
      }
   };

   const handleUpdateGallery = async (pId: string) => {
      try {
         await getGalleryDataById(setClickedGallery, pId)
         updateOpenModal()
      } catch (error) {
         alert("Gallery could not be updated.");
      }
   };

   const addGalleryControler = () => {
      setAddGallery(true)
   }

   return (
      <div>
         {!isModalOpen && !updateModalOpen && (
            <div>
               <HeaderComponent />
               <div className="row " >
                  {galleryAllData.map((gallery, index) => (
                     <div className="col-12 sm col-sm-5 col-md-4 m-auto px-3 py-5" key={index}>
                        <div className="gallery-header-container ">
                           <h4 className="gallery-header mb-3">{gallery.name}</h4>
                           <div className="gallery-header-button-container">
                              {role && (
                                 <div>
                                    <button className="update-delete-button" ><img className="gallery-update-delete-image" onClick={() => handleUpdateGallery(gallery.id)} src={Update} alt="update" /></button>
                                    <button className="update-delete-button " onClick={() => handleDeleteGallery(gallery.id)}><img className="gallery-update-delete-image" src={Delete} alt="delete" /></button>
                                 </div>
                              )}
                           </div>
                        </div>
                        <GalleryCard images={gallery.newImages} />
                     </div>
                  ))}
               </div>
                {role && (
               <button onClick={openModal} className="event-plus-icon mb-5">
                  <img src={plusIcon} alt="add Event" />
               </button>
                   )}
               <Footer />
            </div>
         )}
         {isModalOpen && (
            <>
               {!addGallerys && (
                  <AddGalleryForm closeModal={closeModal} setGalleryList={setGalleryList} addGalleryControler={addGalleryControler} setImageList={setImageList}/>
               )}
            </>
         )}
         {updateModalOpen && (
            <>
               {!addGallerys && (
                  <UpdateGalleryForm closeUpdateModal={updateCloseModal} setGalleryList={setGalleryList} clickedGallery={clickedGallery} setImageList={setImageList}/>
               )}
            </>
         )}
      </div>
   );
};

export default Galeries;
