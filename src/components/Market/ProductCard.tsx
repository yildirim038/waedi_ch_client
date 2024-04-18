import React from "react";
import Update from '../../img/arrow 5.png'
import Delete from '../../img/bin 6.png'
import { token } from "../../untils/untils";
import { deleteProductData, getProductData } from "../../services/marketService";
import { ProductListProps } from "../../type/productType";

const ProductCard: React.FC<ProductListProps> = ({ data , closeModal, setProductData, setUpdateIsModalOpen, setClickProduct}) => { 
  const role = JSON.parse(token).role;
  const email = JSON.parse(token).email
  const handelDeleteButton = async () => {
    await deleteProductData(data.id)
    getProductData(setProductData)
  }
  const handleUpdateProduct = () => {
    setClickProduct(data);
    setUpdateIsModalOpen(true)
  }
  
  return (
    <div key={data.id} className="card-container  col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <div className="event-img-container">
          <img src={`http://localhost:3001/images/${data.image}`} className="event-img" alt="..." />
        </div>
        <div className="card-body">
          <h4 className="card-title">{data.name}</h4>
          <p>CHF <strong>{data.preis}</strong>  </p>
          <hr/>
          <p><strong>Verkaufer :</strong> {data.seller} </p>
          <div className="row">
            {data.tel && (<div className="col-12 col-md-6"> <p><strong>Tel :</strong> <span>{data.tel}</span></p></div>)}
            <div className="col-12 col-md-6"><p><strong>Email :</strong> {data.email}</p></div>
          </div>
          <hr/>
          <p>{data.info && (<div><h5>Info :</h5><p>{data.info}</p></div>)}</p>
          <div>
            <button className="my-4" onClick={closeModal}>Close Product</button>
          </div>
          <div className="update-card-button-container">
            {(role==="admin" || email === data.email) && (
              <div>
                <button className="update-delete-button" ><img src={Update} onClick={() => handleUpdateProduct()} alt="update" /></button>
                <button className="update-delete-button" ><img src={Delete} onClick={() => handelDeleteButton()} alt="delete" /></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;