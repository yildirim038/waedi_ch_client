import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addDirectory } from "../../services/directoryService"; 
import { DirectoryFormState } from "../../type/dataType";



const AddDirectory: React.FC = () => {
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
      console.log(formData)
      await addDirectory(formData);
     
      navigate('/directory');
    } catch (error) {
      alert("Event could not be added.");
    }
  };

const vereine =['Arbeitgebervereine','Buddhistische Gemeinden','Chorverein','Computerclub',
                'Evang.-ref. Kirchengemeinden','Fasnachtgruppen','Frauenvereine','Gemeinnützige Vereine',
                'Handwerkvereine', 'Hinduistische Gemeinden','Islamische Gemeinden','Jugendverein','Jüdische Gemeinden',
                'Kochvereine', 'Kunstvereine', 'Kynologische Vereine', 'Lesegesellschaft', 'Modell-Clubs',
                'Musikverein', 'Natur- & Tierschutz', 'Quartiervereine', 'Religiöse Gemeinschaften & Freikirchen',
                'Röm.-kath. Kirchgemeinden', 'Sammelvereine','Schiessvereine', 'Seniorenvereine', 'sonstige Vereine',
                'Sportclub','Stenografieverein','Tanzvereine','Textilvereine', 'Tier- & tierbezogene Vereine',
                'Verein für Baugewerbe', 'Verschiedenes', 'Volksvereine', 'Zunft'];
const geschäfte =['IT','2','3'];
const kultur =['Einzelmusiker','Freiräume','Jungwacht/Blauring','Museen','Pfadfinder','Sport','Theater'];
const facts = ['AHV Dienstleistung', 'Asyldienste', 'Ausbildungsstätte', 'Beruf & Bildung', 'Biblio- & Ludotheken',
               'Diverse & Spezielle','Eltern & Erwachsene','Energie','Entsorgung/Reinigung','Feuerwehr',
               'Forschung', 'Fremdsprachige Spielgruppen/KiTas', 'Gesundheit & Pflege', 'Heime & Wohngruppen',
               'Kinder- & Jugendarbeit', 'Kindergärten & Krippen', 'Öffentliche Verkehrsmittel', 'Öffentlicher Raum', 
               'Parteien', 'Polizei & Justiz', 'Post & Transport', 'Primarschulen', 'Private Spielgruppen', 
               'Privatschulen', 'Sekundarschulen', 'Senioren', 'Sozialdienstliche Institutionen', 'Spielgruppen', 
               'Tertiäre Bildung', 'Turnhallen & Diverse', 'Verwaltungen', 'Weiterführende Schulen'];

  const generateCompanyTypeOptions = () => {
    switch (values.category) {
      case 'verein':
        return vereine.map((verein) => `${verein}`);
      case 'geschäft':
        return geschäfte.map((geschäft) => `${geschäft}`);
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
            <select value={values.category} onChange={e => setValue({ ...values, category: e.target.value })}>
              <option value="verein">Vereine</option>
              <option value="geschäft">Geschäfte</option>
              <option value="kultur">Kultur</option>
              <option value="facts">Facts</option>
            </select>
          </div>
          <div className='event-input-element'>
            <label>Company Type</label>
            <select value={values.companyType} onChange={e => setValue({ ...values, companyType: e.target.value })}>
              {generateCompanyTypeOptions().map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
         </div>
          <div className='event-input-element'>
            <label>Organization</label>
            <input type="text" value={values.organization} onChange={e => setValue({ ...values, organization: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Adresse</label>
            <input type="text" value={values.adresse} onChange={e => setValue({ ...values, adresse: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>PLZ</label>
            <input type="number" value={values.plz} onChange={e => setValue({ ...values, plz: parseInt(e.target.value, 10) })} />
          </div>
          <div className='event-input-element'>
            <label>Ort</label>
            <input type="text" value={values.ort} onChange={e => setValue({ ...values, ort: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Website</label>
            <input type="text" value={values.website} onChange={e => setValue({ ...values, website: e.target.value })} />
          </div>
          <div className='event-input-element'>
            <label>Image:</label>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setValue({
                    ...values,
                    image: e.target.files[0],
                  });
                }
              }}
            />
          </div>
          </div>
          <h3>Kontak Person</h3>
          <div className="add-event-input-container">
            <div className='event-input-element'>
                <label>Firstname</label>
                <input type="text" value={values.contactFirstname} onChange={e => setValue({ ...values, contactFirstname: e.target.value })} />
            </div>
            <div className='event-input-element'>
            <label>LastName</label>
                <input type="text" value={values.contactLastname} onChange={e => setValue({ ...values, contactLastname: e.target.value })} />
            </div>
            <div className='event-input-element'>
                <label>Telefonnummer</label>
                <input type="text" value={values.tel} onChange={e => setValue({ ...values, tel: e.target.value })} />
            </div>
            <div className='event-input-element'>
                <label>Fax</label>
                <input type="text" value={values.fax} onChange={e => setValue({ ...values, fax: e.target.value })} />
            </div>
            <div className='event-input-element'>
                <label>Email</label>
                <input type="email" value={values.email} onChange={e => setValue({ ...values, email: e.target.value })} />
            </div>
          </div>    
          <button className='form-button' onClick={handleAddCompony}>Add Eintrag</button>
          <button className='form-button form-close-button' >Close</button>
      </div>
     
    </div>
  );
}

export default AddDirectory;
