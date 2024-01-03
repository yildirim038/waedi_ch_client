import React, { useState } from "react";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
import { deleteDirectoryData, getDirectoryData, getDirectoryDataById } from "../../services/directoryService";
import { DirectoryFormState } from "../../type/dataType";



interface ComponyCardProps {
  data: DirectoryFormState; 
  setComponyList: React.Dispatch<React.SetStateAction<any>>;
}

const CompanyCard: React.FC<ComponyCardProps> = ({ data, setComponyList }) => { 
  const [clickEvent, setClickEvent] = useState({});
  let role = false;


  if (localStorage.getItem("role") === "admin") {
    role = true;
  } else {
    role = false;
  }

  const handleUpdateCompony = async () => {
    try {
      data.id ?
        await getDirectoryDataById(setClickEvent, data.id) : (console.log("error"))
      getDirectoryData(setComponyList);
    
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
        <div key={data.id} className="card-container  col-12 col-sm-6 col-md-4">
          <div className="card">
            <img src={`http://localhost:3001/images/${data.image}`} className="company-card-img" alt="logo" />
            <div className="card-body">
              <h5>{data.organization}</h5>
              <p>{data.adresse}</p>
              <p>{data.plz}  {data.ort}</p>
              <p>{data.contactFirstname} {data.contactLastname}</p>
              <p>Tel {data.tel} Fax {data.fax} Email {data.email}</p>
              <div className="update-card-button-container">
                <div>
                  <a href={`${data.website}`}>Go to Website</a>
                </div>
                {role ? (
                  <div>
                    <button ><img src={Update} onClick={handleUpdateCompony} alt="update" /></button>
                    <button onClick={handleDeleteEvent}><img src={Delete} alt="delete" /></button>
                  </div>
                ) : (<div></div>)}
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default CompanyCard;