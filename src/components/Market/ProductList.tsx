import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "../../type/productType";

const ProductList: React.FC<ProductCardProps> = ({ data , setProductData,setClickProduct,setUpdateIsModalOpen}) => { 
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () =>  setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
   return (
    <>
        {!isModalOpen && (
            <div key={data.id} onClick={openModal} className="card-container  col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                    <div className="event-img-container">
                        <img src={`http://localhost:3001/images/${data.image}`} className="event-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{data.name}</h4>
                        <p>CHF <strong>{data.preis}</strong>  </p>
                   </div>
                </div>
            </div>    
        )}
        {isModalOpen && (
            <ProductCard data={data} closeModal={closeModal} setProductData={setProductData} setClickProduct={setClickProduct} 
            setUpdateIsModalOpen={setUpdateIsModalOpen}/>
        )}         
    </>
  );
}

export default ProductList;
