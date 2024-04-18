import React from "react";
import Update from '../../img/arrow 5.png';
import Delete from '../../img/bin 6.png';
import { deleteAdvertData, getAdvertData } from "../../services/advertService";
import { AdvertCardType } from "../../type/advertType";

const AdvertCard: React.FC<AdvertCardType> = ({advertData , setAdvertData, setIsModalUpdateOpen, setClickId}) => {
  
  const handleUpdateAdvert = async (pId:string) => {
    setClickId(pId)
    setIsModalUpdateOpen(true)
  };

  const handleDeleteAdvert = async (pId:string) => {
    try {
        await deleteAdvertData(pId) 
      getAdvertData(setAdvertData)
    } catch (error) {
      alert("Event could not be deleted.");
    }  
  };

  return (
    <div className="row">
      {advertData.map((advert, index) => (
        <div className="col-12 col-md-6" key={index}>
          <div className="row">
          <img className="advert-images col-8" src={`http://localhost:3001/images/${advert.image}`}  alt={advert.name} />
          <div className="col-4">
              Firma Name : {advert.name}
              <div className="text-center">
                <button className="update-delete-button"><img onClick={() => handleUpdateAdvert (advert.id)} src={Update} alt="update" /></button>
                <button className="update-delete-button"><img onClick={() => handleDeleteAdvert (advert.id)} src={Delete} alt="delete" /></button>
              </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvertCard;
