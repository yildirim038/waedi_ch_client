import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Delete from '../../img/bin 6.png'
import { addGallery, addImage, deletePhotoData, getGalleryData, getImageData, updateGallery } from "../../services/galleryService";
import { useNavigate } from "react-router-dom";
type Gallery ={
    id?:string;
    name:string;
    description:string;
}

type addGalleryType = {
  addGalleryControler:()=>void;
  setGalleryList: Dispatch<SetStateAction<any>>;
}
type ImageType = {
  id?:string;
  image: any;
  photoGalleryId: string ;
}
const AddGalleryForm: React.FC<addGalleryType> = ({ addGalleryControler, setGalleryList }) => {
  const [newGalleryList, setNewGalleryList] = useState<Gallery[]>([]);
  const [gallery, setGallery] = useState<Gallery>({
    name: "",
    description: "",
  });

  const [addImages, setAddImage] = useState<ImageType[]>([]);
  const [image, setImage] = useState<ImageType>({
    image: "",
    photoGalleryId: "",
  });

  const navigate = useNavigate();

  const closeGalleryForm = () => {
    navigate('/galerie');
  }

  const handleAddImage = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image.image || '');
      formData.append('photoGalleryId', newGalleryList[0]?.id || '');
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
    const fetchData = async () => {
      try {
        await getGalleryData(setNewGalleryList);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    getImageData(setAddImage);
  }, []);

  const handleAddGallery = async () => {
    try {
      await updateGallery(gallery,newGalleryList[0].id||"");
      getGalleryData(setGalleryList);
      addGalleryControler();
      navigate('/addGallery');
    } catch (error) {
      console.error("Error adding gallery:", error);
      alert("Gallery could not be added.");
    }
  };

  const isFormValid = gallery.name.trim() !== "";
  const isImageFormValid = image.image !== "";

  const imageList = addImages.filter(element => element.photoGalleryId === newGalleryList[0]?.id);
return (
    <div className="form-main-container">
      <div className="add-event-container">
        <h2>Add Gallery</h2>
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
               <button><img src={Delete} className="col-6"  onClick={()=> handleDeleteImage(image.id||"")} alt="delete" /></button>
               <img src={`http://localhost:3001/images/${image.image}`} className="col-12" alt="image" />
              </div>
             
              ))}
          </div>
          <div className="event-input-element">
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
  
          <button className="form-button" onClick={handleAddGallery} disabled={!isFormValid}>
            Add new Gallery
          </button>
          <button className="form-button form-close-button" onClick={closeGalleryForm}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGalleryForm;
