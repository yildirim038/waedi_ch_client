import React, { useState } from "react";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
import { deleteDirectoryData, getDirectoryData, getDirectoryDataById } from "../../services/directoryService";
import UpdateDirectory from "./UpdateDirectory";
import { ComponyCardProps } from "../../type/directoryTypes";

const CompanyCard: React.FC<ComponyCardProps> = ({ data, setComponyList }) => { 
  const [clickEvent, setClickDirectory] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let role = false;

  if (localStorage.getItem("role") === "admin") {
    role = true;
  } else {
    role = false;
  }

  const handleUpdateCompony = async () => {
    try {
      data.id ?
        await getDirectoryDataById(setClickDirectory, data.id) : (console.log("error"))
      getDirectoryData(setComponyList);
      openModal()
    
    } catch (error) {
      alert("Event could not be deleted.");
    }
  }

  const handleDeleteEvent = async () => {
    try {
      data.id ?
        await deleteDirectoryData(data.id) : (console.log("error"))
      getDirectoryData(setComponyList);
    } catch (error) {
      alert("Event could not be deleted.");
    }
  };

  return (
    <>
    {!isModalOpen && (
      <div key={data.id} className="card-container  col-12 col-md-6">
      <div className="card">
        <div className="row card-body">
        <div className="col-3 m-auto">
          <img src={`http://localhost:3001/images/${data.image}`} className="col-12" alt="logo" />
        </div>
        <div className="col-9">
          <h5>{data.organization}</h5>
          <p>{data.adresse}</p>
          <p>{data.plz}  {data.ort}</p>
          
        </div>    
        <div>
        <h6>Kontak Person</h6>
        <p>{data.contactFirstname} {data.contactLastname}</p>
          <p>Tel {data.tel} Fax {data.fax} Email {data.email}</p></div>       

          <div className="update-card-button-container">
            
            <div>
              <a href={`${data.website}`}>Go to Website</a>
            </div>
            {role ? (
              <div>
                <button  className="update-delete-button" ><img src={Update} onClick={handleUpdateCompony} alt="update" /></button>
                <button  className="update-delete-button" onClick={handleDeleteEvent}><img src={Delete} alt="delete" /></button>
              </div>
            ) : (<div></div>)}
          </div>
          
        </div>
    
      </div>
    </div>
      )}
        {isModalOpen && (
        <div className="modal-add-event-open">
          <UpdateDirectory closeModal={closeModal} setDirectoryList={setComponyList} clickEvent={clickEvent} />
        </div>
      )}
      
    </>
  );
}

export default CompanyCard;
