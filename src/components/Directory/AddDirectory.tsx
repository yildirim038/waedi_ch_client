import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addDirectory } from "../../services/directoryService"; 
import { AddDirectoryType, DirectoryFormState } from "../../type/directoryTypes";
import { companys, facts, kultur, vereine } from "./DirectoryData";

const AddDirectory: React.FC<AddDirectoryType> = ({closeModal}) => {
  const [values, setValue] = useState<DirectoryFormState>({
    category: '',
    companyType: '',
    organization: '',
    adresse: 'Schmidgass 2',
    plz: 8820,
    ort: 'Wädenswil',
    image: null,
    website: 'https://',
    contactFirstname:'',
    contactLastname:'',
    email:''
  });

  const navigate = useNavigate();
  const handleAddCompony = async () => {
    try {
      const formData = new FormData();
      formData.append('category', values.category);
      formData.append('companyType', values.companyType);
      formData.append('organization', values.organization);
      formData.append('adresse', values.adresse);
      formData.append('plz', values.plz.toString());
      formData.append('ort', values.ort);
      formData.append('website', values.website);
      formData.append('contactFirstname', values.contactFirstname);
      formData.append('contactLastname', values.contactLastname);
      formData.append('email', values.email);
      formData.append('tel', values.tel || '');
      formData.append('fax', values.fax || '') ;
      formData.append('image', values.image || ''); 
      await addDirectory(formData);
      closeModal()
      navigate('/directory');
    } catch (error) {
      alert("Event could not be added.");
    }
  };

  const generateCompanyTypeOptions = () => {
    switch (values.category) {
      case 'verein':
        return vereine.map((verein) => `${verein}`);
      case 'company':
        return companys.map((company) => `${company}`);
      case 'kultur':
        return kultur.map((kultur) => `${kultur}`);
      case 'facts':
        return facts.map((fact) => `${fact}`);
      default:
        return [];
    }
  };

   return (
    <div className='form-main-container'>
      <div className='add-event-container'>
        <h2>Neuen Eintrag erstellen</h2>
        <div className="add-event-input-container">
          <div className='event-input-element'>
            <label>Category</label>
            <select value={values.category} onChange = { e => setValue({ ...values, category: e.target.value })}>
              <option value="" disabled> Select a category </option>
              <option value="verein"> Vereine </option>
              <option value="company"> Geschäfte </option>
              <option value="kultur"> Kultur </option>
              <option value="facts"> Facts </option>
            </select>
          </div>
          <div className='event-input-element'>
            <label>Company Type</label>
            <select value={values.companyType} onChange = { e => setValue({ ...values, companyType: e.target.value })}>
              <option value="" disabled>Select a type</option>
              {generateCompanyTypeOptions().map( (option, index) => ( <option key={index} value={option}>{option}</option>))}
            </select>
          </div>
          <div className='event-input-element'>
            <label>Organization</label>
            <input type="text"   value = {values.organization} onChange = { e => setValue({ ...values, organization: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Adresse</label>
            <input type="text"   value = {values.adresse}      onChange = { e => setValue({ ...values, adresse: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>PLZ</label>
            <input type="number" value = {values.plz}          onChange = { e => setValue({ ...values, plz: parseInt(e.target.value, 10) })} />
          </div>
          <div className='event-input-element'>
            <label>Ort</label>
            <input type="text"   value = {values.ort}          onChange = { e => setValue({ ...values, ort: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Website</label>
            <input type="text"  value = {values.website}       onChange = { e => setValue({ ...values, website: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Image:</label>
            <input type="file" onChange={(e) => e.target.files && e.target.files.length > 0 && setValue({ ...values, image: e.target.files[0] })} />
          </div>
        </div>
        <h3>Kontak Person</h3>
        <div className="add-event-input-container">
          <div className='event-input-element'>
            <label>Firstname</label>
            <input type="text" value={values.contactFirstname} onChange = { e => setValue({ ...values, contactFirstname: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>LastName</label>
            <input type="text" value={values.contactLastname}  onChange = { e => setValue({ ...values, contactLastname: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Telefonnummer</label>
            <input type="text" value={values.tel}              onChange = { e => setValue({ ...values, tel: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Fax</label>
            <input type="text" value={values.fax}              onChange = { e => setValue({ ...values, fax: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Email</label>
            <input type="email" value={values.email}           onChange = { e => setValue({ ...values, email: e.target.value })} />
          </div>
        </div>
        <div className="form-button-container">    
          <button className='form-button' onClick={handleAddCompony}>Add Eintrag</button>
          <button className='form-button form-close-button' onClick={closeModal}>Close</button>
        </div>
      </div>
     
    </div>
  );
}

export default AddDirectory;
