import { setAuthInfo } from "../type/dataType";
import { DirectoryFormState } from "../type/directoryTypes";
import defaultAdvertUrl from '../img/werbung.png'
import { AdvertUpdateType } from "../type/advertType";
export const token = localStorage.getItem("token")|| '{"token":"","email":"","role":""}'

export const handleTokenCheck =  (pInfo :setAuthInfo) => {
    try {
      const authRole = JSON.parse(token).role=== "admin"
      if(authRole){
        pInfo({
          isAuthenticated: true,
          role: authRole,
        });
      }
    } catch (error) {
      pInfo({
        isAuthenticated: false,
        role: '',
      });
      
    }
}

export   function filterList(type: string, List:DirectoryFormState[] ,setList:React.SetStateAction<any> , setIsFiltered:React.SetStateAction<any>) {
  const filteredList = List.filter((company) => company.companyType === type);
  setList(filteredList);
  setIsFiltered(true)
}



export function closeInterviewModals(setIsModalOpen:React.SetStateAction<any> ,setClickInterview :React.SetStateAction<any>) {
  setIsModalOpen(false)
  setClickInterview({ title: '',
  author: '',
  coverText: '',
  imageTitel: '',
  descriptionOfImage: '',
  image: '',
  datum: '',})
}


export const pageAdverts = (pList:AdvertUpdateType[]) =>{
  const adverts: JSX.Element[] = [];
  if (pList.length > 1){
      pList.slice(0, 2).forEach(advert => {
          const advertUrl = `http://localhost:3001/images/${advert.image}`;
          adverts.push(
              <div key={advert.id} className="col-12 col-sm-6 m-auto">
                  <a href={advert.link} className='col-12'>
                      <img className='col-11 advert-image-new' src={advertUrl} alt="Werbung" />
                  </a>
              </div>
          );
      });
  
  }else if(pList.length === 1) {
      adverts.push(
          <>
              <div key={pList[0].id} className="col-12 col-sm-6 m-auto">
                  <a href={pList[0].link} className='col-12'>
                      <img className='col-11 advert-image-new' src={`http://localhost:3001/images/${pList[0].image}`} alt="Advert" />
                  </a>
              </div>
              <div key="defaultAdvert" className="col-12 col-sm-6 m-auto">
                  <a href="/advert" className='col-12'>
                      <img className='col-11 advert-image-new' src={defaultAdvertUrl} alt="Default Advert" />
                  </a>
              </div>
         </>
      );
  }else {
      for (let i = 0; i < 2; i++) {
          adverts.push(
              <div key={`defaultAdvert${i}`} className="col-12 col-sm-6 m-auto">
                  <a href="/advert" className='col-12'>
                      <img className='col-11 advert-image-new' src={defaultAdvertUrl} alt="Default Advert" />
                  </a>
              </div>
          );
      }
  }
  return adverts;
} 
