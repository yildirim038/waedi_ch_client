import { useEffect, useState } from "react"
import { getAdvertDataById, updateAdvert } from "../../services/advertService"
import { AdvertType } from "../../type/advertType"
type AdvertUpdateType = {
  id:string
  name: string;
  email: string;
  publish: boolean;
  adresse: string;
  plz: number;
  ort: string;
  image: any;
  link: string;
};
type UpdateAdvertType = {
    clickId:string
    closeModal:()=> void
}
const UpdateAdvert: React.FC<UpdateAdvertType> = ({clickId, closeModal}) => {
    const [values , setValue] = useState<AdvertType>({
        id:'',
        name: '',
        email:'',
        publish:false,
        adresse: 'Schmidgass 2',
        plz: 8820,
        ort: 'Wädenswil',
        image: null,
        link: 'https://'
      })

    useEffect(()=>{
        getAdvertDataById(setValue,clickId)
    },[])

    const handleUpdateCompony = async () => {
        try {
          const formData = new FormData();
          formData.append('name', values.name);
          formData.append('email', values.email);
          formData.append('publish', values.publish.toString());
          formData.append('adresse', values.adresse);
          formData.append('plz', values.plz.toString());
          formData.append('ort', values.ort);
          formData.append('link', values.link);
          formData.append('image', values.image || ''); 
          await updateAdvert(formData,clickId);
          closeModal()
        } catch (error) {
          alert("Event could not be added.");
        }
      };
    

    return (
        <>
        <div className='form-main-container'>
      <div className='add-event-container'>
        <h2>Neuen Werbung erstellen</h2>
        <div className="add-event-input-container">
                 <div className='event-input-element'>
            <label>Firma Name</label>
            <input type="text" value={values.name} onChange={e => setValue({ ...values, name: e.target.value })} />
          </div>
          <div className='event-input-element'>
                <label>Email</label>
                <input type="email" value={values.email} onChange={e => setValue({ ...values, email: e.target.value })} />
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
            <input type="text" value={values.link} onChange={e => setValue({ ...values, link: e.target.value })} />
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
          <button className='form-button' onClick={handleUpdateCompony}>Update Werbung</button>
          <button className='form-button form-close-button' onClick={closeModal}>Close</button>
      </div>
     
    </div>
        </>
    )
}

export default UpdateAdvert