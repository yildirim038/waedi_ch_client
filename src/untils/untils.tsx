import { setAuthInfo } from "../type/dataType";


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

