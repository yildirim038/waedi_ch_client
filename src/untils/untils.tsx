import { setAuthInfo } from "../type/dataType";
import { DirectoryFormState } from "../type/directoryTypes";

export const handleTokenCheck =  (pInfo :setAuthInfo) => {
    try {
      const authRole = localStorage.getItem('role')
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

