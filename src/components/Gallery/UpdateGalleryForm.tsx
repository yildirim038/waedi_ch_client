import React, {  useEffect, useState } from "react";
import Delete from '../../img/bin 6.png'
import { addImage, deletePhotoData, getGalleryData, getImageData, updateGallery } from "../../services/galleryService";
import { GalleryType, ImageType } from "../../type/galleryType";

type updateGalleryType = {
  closeUpdateModal: () => void ;
  setGalleryList: React.Dispatch<React.SetStateAction<any>>;
  clickedGallery: GalleryType;
  setImageList:React.Dispatch<React.SetStateAction<any>>
}

const UpdateGalleryForm: React.FC<updateGalleryType> = ({ closeUpdateModal,setGalleryList, clickedGallery,setImageList }) => {
  const [gallery, setGallery] = useState<GalleryType>({
    id:clickedGallery.id,
    name: clickedGallery.name,
    description: clickedGallery.description,
  });

  const [addImages, setAddImage] = useState<ImageType[]>([]);
  const [image, setImage] = useState<ImageType>({
    image: "",
    photoGalleryId: "",
  });

  const handleUpdateGallery = async () => {
    try {
      await updateGallery(gallery,clickedGallery.id);
      getGalleryData(setGalleryList);
      getImageData(setImageList)
      closeUpdateModal()
    } catch (error) {
      console.error("Error adding gallery:", error);
      alert("Gallery could not be added.");
    }
  };

  const handleAddImage = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image.image);
      formData.append('photoGalleryId', clickedGallery.id);
      await addImage(formData);
      getImageData(setAddImage);
    } catch (error) {
      console.error("Error adding image:", error);
      alert("Image could not be added.");
    }
  };

  const handleDeleteImage = async (pId: string) => {
    try {
      await deletePhotoData(pId);
      getImageData(setAddImage);
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Image could not be deleted.");
    }
  };

useEffect(() => {
  getImageData(setAddImage)
}, []);

  const isFormValid = gallery.name.trim() !== "";
  const isImageFormValid = image.image !== "";
  const imageList = addImages.filter(element => element.photoGalleryId === clickedGallery.id);
return (
    <div className="form-main-container">
      <div className="add-event-container">
        <h2>Update Gallery</h2>
        <div className="add-event-input-container">
        <div className="event-input-element">
            <label>Name:</label>
            <input
              type="text"
              value={gallery.name}
              onChange={(e) => setGallery({ ...gallery, name: e.target.value })}
            />
          </div>
          <div className="event-input-element">
            <label>Description:</label>
            <input
              type="text"
              value={gallery.description}
              onChange={(e) => setGallery({ ...gallery, description: e.target.value })}
            />
          </div>
          <div className="row">
            {imageList.map(image => (
              <div className="col-2 text-center" >
               <button className="update-delete-button"><img src={Delete} className="col-6"  onClick={()=> handleDeleteImage(image.id||"")} alt="delete" /></button>
               <img src={`http://localhost:3001/images/${image.image}`} className="col-12" alt={`foto${image.photoGalleryId}`} />
              </div>
             
              ))}
          </div>
          <div className="event-input-element d-flex">
            <div className="add-image row">
              <div className="col-12 col-sm-6 col-md-8">
              <label>Image:</label>
                <input type="file"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                        setImage({...image, image: e.target.files[0],
                      });
                    }
                  }}
                />
              </div>
              <button className="col-12 col-sm-6 col-md-2" onClick={handleAddImage} disabled={!isImageFormValid}>
                Add Image
              </button>
            </div>
          </div>
          <button className="form-button mt-5" onClick={handleUpdateGallery} disabled={!isFormValid}>
            Update Gallery
          </button>
          <button className="form-button mt-5 form-close-button" onClick={closeUpdateModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateGalleryForm;