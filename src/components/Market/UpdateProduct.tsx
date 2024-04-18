import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ProductType, UpdateProductType } from "../../type/productType";
import { getProductData, updateProduct } from "../../services/marketService";

const UpdateProduct: React.FC<UpdateProductType> = ({ closeModal, setProductData,clickProduct }) => { 

  const [values, setValue] = useState<ProductType>({
    id:clickProduct.id,
    name: clickProduct.name,
    category:clickProduct.category,
    weight: clickProduct.weight,
    info: clickProduct.info,
    seller: clickProduct.seller,
    image: null,
    tel: clickProduct.tel,
    email:clickProduct.email,
    preis: clickProduct.preis
  });
  const navigate = useNavigate();

  const handleUpdateProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('category', values.category);
      formData.append('weight', values.weight.toString());
      formData.append('info', values.info);
      formData.append('seller', values.seller);
      formData.append('tel', values.tel);
      formData.append('preis', values.preis.toString());
      formData.append('image', values.image || '');  
  
      await updateProduct(formData,clickProduct.id);
      navigate('/market');
      getProductData(setProductData);
      closeModal();
    } catch (error) {
      alert("Event could not be updated.");
    }
  };
   return (
    <div className='form-main-container'>
      <div className='add-event-container'>
        <h2>Neuen Product erstellen</h2>
        <div className="add-event-input-container">
          <div className='event-input-element'>
            <label>Product Name</label>
            <input type="text" value={values.name} onChange={e => setValue({ ...values, name: e.target.value })} />
          </div>
          <div className='event-input-element'>
                <label>Email</label>
                <input type="email" value={values.email} onChange={e => setValue({ ...values, email: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Category</label>
            <input type="text" value={values.category} onChange={e => setValue({ ...values, category: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Info</label>
            <input type="text" value={values.info} onChange={e => setValue({ ...values, info: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Verkaufer</label>
            <input type="text" value={values.seller} onChange={e => setValue({ ...values, seller: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Tel</label>
            <input type="text" value={values.tel} onChange={e => setValue({ ...values, tel: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Preis</label>
            <input type="text" value={values.preis} onChange={e => setValue({ ...values, preis: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Image:</label>
            <input type="file" onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setValue({...values, image: e.target.files[0],});
              }}}
            />
          </div>
        </div>  
        <div className="form-button-container">
          <button className='form-button' onClick={handleUpdateProduct}>Update Product</button>
          <button className='form-button form-close-button' onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}
export default UpdateProduct;