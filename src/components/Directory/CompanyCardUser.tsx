import React from "react";
import { ComponyCardType } from "../../type/directoryTypes";

const CompanyCardUser: React.FC<ComponyCardType> = ({ data }) => { 
  return (
    <div>
      <div key={data.id} className="card-container  col-12 col-md-6">
        <div className="card">
          <div className="row card-body">
            <div className="col-3 m-auto">
              <img src={`http://localhost:3001/images/${data.image}`} className="col-12" alt="logo" />
            </div>
            <div className="col-9">
              <h5>{data.organization}</h5>
              <p> {data.adresse}</p>
              <p> {data.plz}  {data.ort}</p>
            </div>    
            <div>
              <h6>Kontak Person</h6>
              <p>{data.contactFirstname} {data.contactLastname}</p>
              <p>Tel {data.tel} Fax {data.fax} Email {data.email}</p>
            </div>       
            <div className="update-card-button-container">
              <div>
                <a href={`${data.website}`}>Go to Website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyCardUser;